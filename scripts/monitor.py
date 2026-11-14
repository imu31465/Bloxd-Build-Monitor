#!/usr/bin/env python3
"""Track current Bloxd environment builds and archive every bundle file.

For each environment (bloxd.io, preprod.bloxd.io, staging.bloxd.io) the
monitor reads the homepage, locates the main JS/CSS bundles, then parses the
webpack runtime inside the main bundle to enumerate every lazy chunk. All of
those files are stored under bundles/<environment>/ with their original
hashed file names, beautified in place (like browser DevTools pretty-print).
The hash in each file name is the CDN content hash, so change detection and
the CHANGES.md lineage report stay exact even though stored bytes are the
pretty-printed ones. When a new build ships, missing files are fetched
(reusing identical files already stored for a sibling environment), stale
files are pruned, and the workflow commits the snapshot while keeping the
last RETENTION snapshots for diff browsing. README.md lists only the main
bundles; the complete file manifest lives in .monitor-state.json.
"""
from __future__ import annotations

import concurrent.futures
import hashlib
import json
import os
import re
import shutil
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo

try:
    import cssbeautifier
    import jsbeautifier

    _JS_OPTIONS = jsbeautifier.default_options()
    _JS_OPTIONS.indent_size = 2
    _JS_OPTIONS.indent_char = " "
    _CSS_OPTIONS = cssbeautifier.default_options()
    _CSS_OPTIONS.indent_size = 2
    _CSS_OPTIONS.indent_char = " "
    BEAUTIFY_AVAILABLE = True
except ImportError:  # pragma: no cover - beautifier is optional at runtime
    BEAUTIFY_AVAILABLE = False

ROOT = Path(__file__).resolve().parents[1]
STATE_PATH = ROOT / ".monitor-state.json"
README_PATH = ROOT / "README.md"
CHANGES_PATH = ROOT / "CHANGES.md"
BUNDLES_DIR = ROOT / "bundles"
SITES = {
    "bloxd.io": "https://bloxd.io/",
    "preprod.bloxd.io": "https://preprod.bloxd.io/",
    "staging.bloxd.io": "https://staging.bloxd.io/",
}
WORKERS = 8
BEAUTIFY = True
UA = (
    "Mozilla/5.0 (compatible; bloxd-build-monitor/2.2; "
    "+https://github.com/imu31465/Bloxd-Build-Monitor)"
)
BUNDLE_RE = re.compile(
    r"(?P<url>https://(?P<host>bloxd\.io|preprod\.bloxd\.io|staging\.bloxd\.io)"
    r"(?P<path>/static/js/(?P<build>[a-zA-Z0-9_-]+)\.main\."
    r"(?P<hash>[a-fA-F0-9]{8,64})\.js))|"
    r"(?P<relative>/static/js/(?P<relative_build>[a-zA-Z0-9_-]+)\.main\."
    r"(?P<relative_hash>[a-fA-F0-9]{8,64})\.js)"
)
MAIN_CSS_RE = re.compile(
    r"https://(?P<host>bloxd\.io|preprod\.bloxd\.io|staging\.bloxd\.io)"
    r"(?P<absolute>/static/css/(?P<build>[a-zA-Z0-9_-]+)\.main\.(?P<hash>[a-fA-F0-9]{8,64})\.css)"
    r"|(?P<relative>/static/css/(?P<relative_build>[a-zA-Z0-9_-]+)\.main\.(?P<relative_hash>[a-fA-F0-9]{8,64})\.css)"
)
# Webpack runtime filename builders. Matches both the minified form
#   r.u=WW=>"static/js/98edle."+({15:"name"}[WW]||WW)+"."+{15:"a1b2c3d4"}[WW]+".chunk.js"
# and the beautified form where whitespace/newlines are inserted.
RUNTIME_FN_RE = re.compile(
    r'\.(\w+)\s*=\s*\(?\w+\)?\s*=>\s*"([^"]*)"\s*\+\s*\((\{[^{}]*\})\s*\[\w+\]\s*\|\|\s*\w+\)'
    r'\s*\+\s*"\."\s*\+\s*(\{[^{}]*\})\s*\[\w+\]\s*\+\s*"([^"]*)"'
)
MAP_ENTRY_RE = re.compile(r'(\w+)\s*:\s*"([^"]+)"')
# bundles/<env>/<build>.<name>.<hash>.<chunk.|>js|css  (main files carry name="main")
FILENAME_RE = re.compile(
    r"^(?P<build>[a-zA-Z0-9_-]+)\.(?P<name>[a-zA-Z0-9_-]+)\.(?P<hash>[a-fA-F0-9]{8,64})"
    r"\.(?P<kind>chunk\.(?:js|css)|js|css)$"
)
JST = ZoneInfo("Asia/Tokyo")


def request(url: str, method: str = "GET", accept: str = "text/html,*/*;q=0.8"):
    req = urllib.request.Request(
        url,
        method=method,
        headers={"User-Agent": UA, "Accept": accept},
    )
    return urllib.request.urlopen(req, timeout=30)


def find_main_bundle(html: str, host: str) -> tuple[str, str, str]:
    for match in BUNDLE_RE.finditer(html):
        matched_host = match.group("host")
        if matched_host and matched_host != host:
            continue
        build = match.group("build") or match.group("relative_build")
        asset_hash = match.group("hash") or match.group("relative_hash")
        path = match.group("path") or match.group("relative")
        return f"https://{host}{path}", build, asset_hash.lower()
    raise RuntimeError(f"Could not find {host} main bundle reference in homepage HTML")


def find_main_css(html: str, host: str) -> str | None:
    """Return the homepage main CSS path relative to the site root, if present."""
    for match in MAIN_CSS_RE.finditer(html):
        if match.group("host") and match.group("host") != host:
            continue
        if match.group("absolute"):
            return match.group("absolute").lstrip("/")
        if match.group("relative"):
            return match.group("relative").lstrip("/")
    return None


def parse_runtime_assets(bundle_text: str) -> list[str]:
    """Extract every lazy chunk path from the webpack runtime maps."""
    paths: set[str] = set()
    for match in RUNTIME_FN_RE.finditer(bundle_text):
        _prop, prefix, name_map, hash_map, suffix = match.groups()
        if "/js/" not in prefix and "/css/" not in prefix:
            continue
        if not suffix.endswith((".js", ".css")):
            continue
        names = dict(MAP_ENTRY_RE.findall(name_map))
        for chunk_id, asset_hash in MAP_ENTRY_RE.findall(hash_map):
            paths.add(f"{prefix}{names.get(chunk_id, chunk_id)}.{asset_hash}{suffix}")
    if not paths:
        raise RuntimeError("Could not parse webpack chunk map from main bundle")
    return sorted(paths)


def bundle_filename(build_name: str, asset_hash: str) -> str:
    return f"{build_name}.main.{asset_hash}.js"


def file_digest(path: Path) -> tuple[str, int]:
    digest = hashlib.sha256()
    size = 0
    with path.open("rb") as handle:
        while chunk := handle.read(1 << 16):
            digest.update(chunk)
            size += len(chunk)
    return digest.hexdigest(), size


def _fetch_once(url: str, destination: Path) -> tuple[str, int]:
    destination.parent.mkdir(parents=True, exist_ok=True)
    tmp_path = destination.parent / (destination.name + ".tmp")
    digest = hashlib.sha256()
    size = 0
    try:
        with request(url, accept="application/javascript,*/*;q=0.8") as response:
            if response.status != 200:
                raise RuntimeError(f"bundle download returned HTTP {response.status}")
            content_type = response.headers.get("Content-Type", "").lower()
            if "text/html" in content_type:
                raise RuntimeError("bundle download returned HTML instead of JavaScript")
            with tmp_path.open("wb") as handle:
                while True:
                    chunk = response.read(1 << 16)
                    if not chunk:
                        break
                    digest.update(chunk)
                    size += len(chunk)
                    handle.write(chunk)
    except urllib.error.HTTPError:
        tmp_path.unlink(missing_ok=True)
        raise
    except Exception:
        tmp_path.unlink(missing_ok=True)
        raise
    if size == 0:
        tmp_path.unlink(missing_ok=True)
        raise RuntimeError(f"bundle download was empty: {url}")
    tmp_path.replace(destination)
    return digest.hexdigest(), size


def fetch_bundle(url: str, destination: Path, attempts: int = 3) -> tuple[str, int]:
    """Download a build file, retrying transient CDN errors."""
    last_error: Exception | None = None
    for attempt in range(attempts):
        try:
            return _fetch_once(url, destination)
        except (urllib.error.HTTPError, urllib.error.URLError) as exc:
            last_error = exc
            code = getattr(exc, "code", None)
            retryable = code is None or code in (429, 500, 502, 503, 504)
            if not retryable or attempt == attempts - 1:
                break
            time.sleep(1 + attempt)
    code = getattr(last_error, "code", None)
    raise RuntimeError(f"bundle download failed (HTTP {code or last_error}): {url}")


def beautify_file(path_str: str) -> str:
    """Pretty-print a stored bundle file in place (DevTools-style)."""
    if not (BEAUTIFY and BEAUTIFY_AVAILABLE):
        return path_str
    path = Path(path_str)
    try:
        text = path.read_text(encoding="utf-8", errors="strict")
    except UnicodeDecodeError:
        text = path.read_text(encoding="utf-8", errors="replace")
    if path.suffix == ".css":
        pretty = cssbeautifier.beautify(text, _CSS_OPTIONS)
    else:
        pretty = jsbeautifier.beautify(text, _JS_OPTIONS)
    tmp_path = path.parent / (path.name + ".pretty.tmp")
    tmp_path.write_text(pretty, encoding="utf-8")
    tmp_path.replace(path)
    return path_str


def beautify_targets(targets: list[str]) -> None:
    if not targets:
        return
    if not (BEAUTIFY and BEAUTIFY_AVAILABLE):
        print("NOTE: beautifier unavailable; storing raw bundle bytes", file=sys.stderr)
        return
    workers = max(1, min(os.cpu_count() or 2, 8))
    with concurrent.futures.ProcessPoolExecutor(max_workers=workers) as pool:
        list(pool.map(beautify_file, targets))


def prepare_bundle(
    rel_path: str,
    environment: str,
    previous_by_name: dict,
    previous_beautified: bool,
    main_name: str,
) -> tuple[str, bool]:
    """Ensure stored bytes exist for one build file; report if beautify is needed.

    Returns (file_name, needs_beautify). Stored files are beautified in place;
    because the hash in each file name is the CDN content hash, a stored file
    whose digest matches the previous manifest is already the correct
    pretty-printed version. The main bundle is managed by the caller.
    """
    name = rel_path.rsplit("/", 1)[1]
    if name == main_name:
        return name, False
    destination = BUNDLES_DIR / environment / name
    if destination.is_file():
        if previous_beautified and name in previous_by_name:
            digest, _ = file_digest(destination)
            if digest == previous_by_name[name].get("sha256"):
                return name, False  # already the correct beautified snapshot
        destination.unlink()  # raw leftover or unknown content -> refresh
    for other in SITES:
        if other == environment:
            continue
        candidate = BUNDLES_DIR / other / name
        if candidate.is_file():
            destination.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(candidate, destination)  # sibling stores beautified bytes
            return name, False
    fetch_bundle(f"https://{environment}/{rel_path}", destination)
    return name, True


def prune_old_bundles(directory: Path, keep_names: set[str]) -> None:
    """Remove files that no longer belong to the current build."""
    if not directory.is_dir():
        return
    for entry in directory.iterdir():
        if not entry.is_file() or entry.name in keep_names:
            continue
        if entry.name.endswith((".js", ".css", ".tmp")):
            entry.unlink()


def probe(environment: str, site_url: str, previous: dict) -> dict:
    with request(site_url) as response:
        if response.status != 200:
            raise RuntimeError(f"{environment} homepage returned HTTP {response.status}")
        html = response.read(2_000_000).decode("utf-8", "replace")

    url, build_name, asset_hash = find_main_bundle(html, environment)
    record = {
        "build": f"{build_name}.{asset_hash}",
        "build_name": build_name,
        "asset_hash": asset_hash,
        "build_url": url,
        "checked_at": datetime.now(JST).isoformat(timespec="seconds"),
    }

    previous_files = previous.get("files") or []
    beautify_active = BEAUTIFY and BEAUTIFY_AVAILABLE
    identity_same = (
        previous.get("build_name") == build_name
        and previous.get("asset_hash") == asset_hash
        and previous.get("build_url") == url
    )
    files_present = bool(previous_files) and all(
        (ROOT / entry["path"]).is_file() for entry in previous_files
    )
    if identity_same and files_present and previous.get("beautified", False) == beautify_active:
        for key in ("bundle_path", "bundle_sha256", "bundle_size", "css_path", "css_sha256", "css_size"):
            if key in previous:
                record[key] = previous[key]
        record["files"] = previous_files
        record["beautified"] = previous.get("beautified", False)
        record["downloaded"] = False
        return record

    env_dir = BUNDLES_DIR / environment
    env_dir.mkdir(parents=True, exist_ok=True)
    previous_by_name = {
        entry["path"].rsplit("/", 1)[1]: entry for entry in previous_files
    }
    previous_beautified = bool(previous.get("beautified"))

    main_name = bundle_filename(build_name, asset_hash)
    main_dest = env_dir / main_name
    if main_dest.is_file() and not previous_beautified:
        main_dest.unlink()  # pre-beautify snapshot -> fetch fresh raw bytes
    main_fetched_fresh = False
    if not main_dest.is_file():
        fetch_bundle(url, main_dest)
        main_fetched_fresh = True
    main_text = main_dest.read_text(encoding="utf-8", errors="replace")

    assets = set(parse_runtime_assets(main_text))
    assets.add(f"static/js/{main_name}")
    css_rel = find_main_css(html, environment)
    if css_rel:
        assets.add(css_rel)
    planned = sorted(assets)

    with concurrent.futures.ThreadPoolExecutor(max_workers=WORKERS) as pool:
        prepared = list(
            pool.map(
                lambda rel: prepare_bundle(
                    rel, environment, previous_by_name, previous_beautified, main_name
                ),
                planned,
            )
        )

    targets = [
        str(BUNDLES_DIR / environment / name)
        for name, needs_beautify in prepared
        if needs_beautify
    ]
    if main_fetched_fresh:
        targets.append(str(main_dest))
    beautify_targets(targets)

    names = {name for name, _ in prepared} | {main_name}
    prune_old_bundles(env_dir, names)

    files_manifest = []
    for name in sorted(names):
        digest, size = file_digest(BUNDLES_DIR / environment / name)
        files_manifest.append({"path": f"bundles/{environment}/{name}", "sha256": digest, "size": size})
    files_manifest.sort(key=lambda entry: entry["path"])

    by_name = {entry["path"].rsplit("/", 1)[1]: entry for entry in files_manifest}
    main_entry = by_name[main_name]
    record["bundle_path"] = main_entry["path"]
    record["bundle_sha256"] = main_entry["sha256"]
    record["bundle_size"] = main_entry["size"]
    if css_rel:
        css_entry = by_name.get(css_rel.rsplit("/", 1)[1])
        if css_entry:
            record["css_path"] = css_entry["path"]
            record["css_sha256"] = css_entry["sha256"]
            record["css_size"] = css_entry["size"]
    record["files"] = files_manifest
    record["beautified"] = beautify_active
    record["downloaded"] = True
    return record


def load_state() -> dict:
    if not STATE_PATH.exists():
        return {}
    try:
        return json.loads(STATE_PATH.read_text(encoding="utf-8"))
    except (json.JSONDecodeError, OSError) as exc:
        raise RuntimeError(f"Cannot read monitor state: {exc}") from exc


def file_identity(filename: str) -> tuple[str, str] | None:
    """Map a hashed build file name to its build-independent identity.

    Files of the same lineage keep the same identity across builds (for
    example `chunk.js:15` or `chunk.js:clientGame-frontline`), while the
    embedded content hash tells whether their bytes changed.
    """
    match = FILENAME_RE.match(filename)
    if not match:
        return None
    return f"{match.group('kind')}:{match.group('name')}", match.group("hash").lower()


def diff_manifests(previous_files: list, current_files: list) -> dict:
    """Compare two build manifests by file identity (name without hash)."""
    def by_identity(entries):
        result = {}
        for entry in entries:
            identity = file_identity(entry["path"].rsplit("/", 1)[1])
            if identity:
                result[identity[0]] = (identity[1], entry)
        return result

    prev = by_identity(previous_files)
    cur = by_identity(current_files)
    changed, added, removed = [], [], []
    for identity in sorted(set(prev) | set(cur)):
        if identity not in prev:
            new_hash, entry = cur[identity]
            added.append((identity, new_hash, entry["size"]))
        elif identity not in cur:
            old_hash, entry = prev[identity]
            removed.append((identity, old_hash, entry["size"]))
        else:
            old_hash, old_entry = prev[identity]
            new_hash, new_entry = cur[identity]
            if old_hash != new_hash:
                changed.append(
                    (identity, old_hash, new_hash, old_entry["size"], new_entry["size"])
                )
    unchanged = len(previous_files) - len(removed) - len(changed)
    return {
        "changed": changed,
        "added": added,
        "removed": removed,
        "unchanged_count": max(unchanged, 0),
        "previous_count": len(previous_files),
        "current_count": len(current_files),
        "size_delta": sum(e["size"] for e in current_files)
        - sum(e["size"] for e in previous_files),
    }


def human_size(size: int) -> str:
    value = float(size)
    for unit in ("B", "KB", "MB", "GB"):
        if value < 1024 or unit == "GB":
            if unit == "B":
                return f"{int(value)} B"
            return f"{value:.2f} {unit}"
        value /= 1024
    return f"{value:.2f} GB"


def human_delta(delta: int) -> str:
    sign = "+" if delta >= 0 else "-"
    return f"{sign}{human_size(abs(delta))}"


def is_named_chunk(identity: str) -> bool:
    """Named chunks (e.g. clientGame-frontline) carry more signal than numeric ones."""
    name = identity.split(":", 1)[1]
    return name != "main" and not name.isdigit()


def render_changes(previous_state: dict, current_state: dict, updated_envs: list, now_text: str) -> str:
    """Render CHANGES.md: a minification-noise-free report of what a new build touched.

    File lineage is derived from the hashed file names, so the report is exact:
    a file counts as changed only when its content hash changed.
    """
    subject = " — ".join(
        [
            "Bloxd build update",
            f"{now_text} ("
            + ", ".join(f"{env}={current_state[env]['build']}" for env in updated_envs)
            + ")",
        ]
    )
    lines = [
        subject,
        "",
        "Stored files are beautified in place (like browser DevTools pretty-print);"
        " file names keep the CDN content hashes, so everything listed below really changed.",
        "",
    ]
    for environment in updated_envs:
        record = current_state[environment]
        previous = previous_state.get(environment) or {}
        previous_files = previous.get("files") or []
        current_files = record.get("files") or []
        lines.append(f"## {environment} — {previous.get('build', 'baseline')} → {record['build']}")
        lines.append("")
        if not previous_files:
            total = sum(entry.get("size") or 0 for entry in current_files)
            lines.append(
                f"- baseline snapshot: {len(current_files)} build files ({human_size(total)}) archived;"
                " per-build diffs start from the next build change"
            )
            lines.append("")
            continue

        diff = diff_manifests(previous_files, current_files)
        lines.append(
            f"- build files: {diff['previous_count']} → {diff['current_count']}"
            f" (changed {len(diff['changed'])} / added {len(diff['added'])} /"
            f" removed {len(diff['removed'])} / unchanged {diff['unchanged_count']})"
        )
        total = sum(entry.get("size") or 0 for entry in current_files)
        prev_total = total - diff["size_delta"]
        lines.append(
            f"- archive size: {human_size(prev_total)} → {human_size(total)}"
            f" ({human_delta(diff['size_delta'])})"
        )

        named = [entry for entry in diff["changed"] if is_named_chunk(entry[0])]
        if named:
            lines.append("")
            lines.append(f"- named chunks changed ({len(named)}):")
            for identity, old_hash, new_hash, old_size, new_size in named:
                lines.append(
                    f"  - `{identity}` {old_hash} → {new_hash} ({human_delta(new_size - old_size)})"
                )

        if diff["changed"]:
            biggest = sorted(diff["changed"], key=lambda e: abs(e[4] - e[3]), reverse=True)[:10]
            lines.append("")
            lines.append("- largest size changes:")
            for identity, old_hash, new_hash, old_size, new_size in biggest:
                lines.append(
                    f"  - `{identity}` {human_delta(new_size - old_size)}"
                    f" ({old_hash} → {new_hash})"
                )

        def detail_block(title, rows):
            if not rows:
                return
            lines.append("")
            lines.append(f"<details><summary>{title} ({len(rows)})</summary>")
            lines.append("")
            for row in rows:
                lines.append(f"- {row}")
            lines.append("")
            lines.append("</details>")

        detail_block(
            "All changed files",
            [
                f"`{identity}` {old_hash} → {new_hash} ({human_delta(new_size - old_size)})"
                for identity, old_hash, new_hash, old_size, new_size in diff["changed"]
            ],
        )
        detail_block(
            "Added files",
            [f"`{identity}` {new_hash} ({human_size(size)})" for identity, new_hash, size in diff["added"]],
        )
        detail_block(
            "Removed files",
            [f"`{identity}` {old_hash} ({human_size(size)})" for identity, old_hash, size in diff["removed"]],
        )
        lines.append("")
    return "\n".join(lines).rstrip() + "\n"


def render_readme(state: dict) -> str:
    lines = [
        "# Bloxd Build Monitor",
        "",
        "Latest Bloxd build per environment, refreshed every 5 minutes.",
        "Every bundle file of the current build (main + all webpack chunks,"
        " JS and CSS) is archived under `bundles/<environment>/` and beautified"
        " in place (like browser DevTools pretty-print); file names keep the"
        " CDN content hashes, so lineage tracking stays exact.",
        "The last 5 build snapshots are kept as commits so per-file diffs stay"
        " browsable; older snapshots are squashed into a rolling baseline.",
        "`CHANGES.md` summarizes each build change without minification noise.",
        "",
        "| Environment | Checked at (JST) | Build | Main bundle |",
        "|---|---|---|---|",
    ]
    for environment, record in state.items():
        parts = [f"`{record.get('bundle_path', '-')}`"]
        size = record.get("bundle_size")
        if size:
            parts.append(human_size(size))
        sha = record.get("bundle_sha256")
        if sha:
            parts.append(f"`{sha[:12]}…`")
        lines.append(
            f"| {environment} | {record['checked_at']} | {record['build']} | {' · '.join(parts)} |"
        )
    lines += ["", "## Main bundle details", ""]
    for environment, record in state.items():
        size = record.get("bundle_size") or 0
        lines.append(f"- **{environment}** — source: {record.get('build_url', '-')}")
        lines.append(
            f"  - file: `{record.get('bundle_path', '-')}` · {size:,} bytes ({human_size(size)})"
        )
        lines.append(f"  - sha256: `{record.get('bundle_sha256', '-')}`")
        files = record.get("files") or []
        if files:
            total = sum(entry.get("size") or 0 for entry in files)
            lines.append(
                f"  - archived build files: {len(files)} ({human_size(total)} total,"
                " full manifest in `.monitor-state.json`)"
            )
    return "\n".join(lines) + "\n"


def main() -> int:
    previous = load_state()
    current = {
        environment: probe(environment, site_url, previous.get(environment) or {})
        for environment, site_url in SITES.items()
    }

    updated = [env for env, record in current.items() if record["downloaded"]]
    persistent = {
        env: {key: value for key, value in record.items() if key != "downloaded"}
        for env, record in current.items()
    }

    if updated:
        STATE_PATH.write_text(
            json.dumps(persistent, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )
        README_PATH.write_text(render_readme(persistent), encoding="utf-8")
        now_text = datetime.now(JST).strftime("%Y-%m-%dT%H:%M JST")
        CHANGES_PATH.write_text(
            render_changes(previous, persistent, updated, now_text), encoding="utf-8"
        )

    for environment, record in persistent.items():
        if environment in updated:
            diff = diff_manifests(
                previous.get(environment, {}).get("files") or [],
                record.get("files") or [],
            )
            print(
                f"updated {environment}: {record['build']} "
                f"(changed {len(diff['changed'])} / added {len(diff['added'])} /"
                f" removed {len(diff['removed'])}, {len(record.get('files') or [])} files archived)"
            )
        else:
            print(f"unchanged {environment}: {record['build']}")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        raise SystemExit(1)
