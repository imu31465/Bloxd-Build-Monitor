#!/usr/bin/env python3
"""Track Bloxd builds and keep readable, stable-path bundle snapshots.

Each environment is polled for its main bundle. The webpack runtime is parsed
to enumerate lazy JS/CSS chunks. Files are beautified and stored using stable
logical paths (main.js, chunks/js/<chunk-id-or-name>.js, and matching CSS
paths), while their original CDN file names, hashes, and URLs are retained in
.monitor-state.json. This lets Git compare the same chunk across builds as a
normal file modification instead of a delete/add caused by CDN hash names.
Every detected build is committed as a new ordinary commit on main. Files at stable paths show the latest build, while previous build trees remain accessible through Git history. The workflow never squashes old snapshots or force-pushes main.
"""
from __future__ import annotations

import concurrent.futures
import difflib
import hashlib
import html
import json
import os
import re
import shutil
import subprocess
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
STORAGE_VERSION = 2
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
    previous_by_identity: dict,
    previous_beautified: bool,
    main_name: str,
    cached_candidates_by_identity: dict | None = None,
) -> tuple[str, bool]:
    """Prepare one webpack asset at a stable path."""
    source_name = rel_path.rsplit("/", 1)[1]
    parsed = file_identity(source_name)
    if not parsed:
        raise RuntimeError(f"Could not identify webpack asset: {source_name}")
    identity, asset_hash = parsed
    stored_path = stable_storage_path(identity)
    if source_name == main_name:
        return stored_path, False

    destination = BUNDLES_DIR / environment / stored_path
    previous_entry = previous_by_identity.get(identity)
    if destination.is_file():
        digest, _ = file_digest(destination)
        if (
            previous_beautified
            and previous_entry
            and manifest_identity(previous_entry) == (identity, asset_hash)
            and digest == previous_entry.get("sha256")
        ):
            return stored_path, False
        destination.unlink()

    candidates = list((cached_candidates_by_identity or {}).get(identity, []))
    if previous_entry:
        candidates.insert(0, (previous_entry, previous_beautified))
    if reuse_cached_asset(identity, asset_hash, destination, candidates):
        return stored_path, False

    fetch_bundle(f"https://{environment}/{rel_path.lstrip('/')}", destination)
    return stored_path, True


def reuse_cached_asset(
    identity: str,
    asset_hash: str,
    destination: Path,
    candidates: list[tuple[dict, bool]],
) -> bool:
    """Copy an identical, verified, already-beautified asset from any snapshot."""
    for entry, is_beautified in candidates:
        if not is_beautified or manifest_identity(entry) != (identity, asset_hash):
            continue
        source = ROOT / entry.get("path", "")
        if not source.is_file() or source.resolve() == destination.resolve():
            continue
        digest, _ = file_digest(source)
        if digest != entry.get("sha256"):
            continue
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(source, destination)
        return True
    return False


def prune_old_bundles(directory: Path, keep_names: set[str]) -> None:
    """Remove files outside the active snapshot, including legacy hashed paths."""
    if not directory.is_dir():
        return
    for entry in directory.rglob("*"):
        if not entry.is_file():
            continue
        relative = entry.relative_to(directory).as_posix()
        if relative in keep_names:
            continue
        if entry.suffix in (".js", ".css", ".tmp"):
            entry.unlink()
    for entry in sorted(
        (path for path in directory.rglob("*") if path.is_dir()),
        key=lambda path: len(path.parts),
        reverse=True,
    ):
        try:
            entry.rmdir()
        except OSError:
            pass


def probe(
    environment: str,
    site_url: str,
    previous: dict,
    known_records: dict | None = None,
) -> dict:
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
        "storage_version": STORAGE_VERSION,
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
    if (
        identity_same
        and files_present
        and previous.get("storage_version") == STORAGE_VERSION
        and previous.get("beautified", False) == beautify_active
    ):
        for key in ("bundle_path", "bundle_sha256", "bundle_size", "css_path", "css_sha256", "css_size"):
            if key in previous:
                record[key] = previous[key]
        record["files"] = previous_files
        record["beautified"] = previous.get("beautified", False)
        record["downloaded"] = False
        return record

    env_dir = BUNDLES_DIR / environment
    env_dir.mkdir(parents=True, exist_ok=True)
    previous_by_identity = entries_by_identity(previous_files)
    previous_beautified = bool(previous.get("beautified"))

    cached_candidates_by_identity: dict[str, list[tuple[dict, bool]]] = {}
    sources = dict(known_records or {})
    sources.setdefault(environment, previous)
    for source_record in sources.values():
        for entry in source_record.get("files") or []:
            info = manifest_identity(entry)
            if not info:
                continue
            cached_candidates_by_identity.setdefault(info[0], []).append(
                (entry, bool(source_record.get("beautified")))
            )

    main_name = bundle_filename(build_name, asset_hash)
    main_identity, main_hash = file_identity(main_name)
    main_storage_path = stable_storage_path(main_identity)
    main_dest = env_dir / main_storage_path
    previous_main = previous_by_identity.get(main_identity)
    if main_dest.is_file():
        digest, _ = file_digest(main_dest)
        if not (
            previous_beautified
            and previous_main
            and manifest_identity(previous_main) == (main_identity, main_hash)
            and digest == previous_main.get("sha256")
        ):
            main_dest.unlink()

    main_fetched_fresh = False
    if not main_dest.is_file():
        candidates = list(cached_candidates_by_identity.get(main_identity, []))
        if previous_main:
            candidates.insert(0, (previous_main, previous_beautified))
        if not reuse_cached_asset(main_identity, main_hash, main_dest, candidates):
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
                    rel,
                    environment,
                    previous_by_identity,
                    previous_beautified,
                    main_name,
                    cached_candidates_by_identity,
                ),
                planned,
            )
        )

    targets = [
        str(env_dir / stored_path)
        for stored_path, needs_beautify in prepared
        if needs_beautify
    ]
    if main_fetched_fresh:
        targets.append(str(main_dest))
    beautify_targets(targets)

    names = {stored_path for stored_path, _ in prepared} | {main_storage_path}
    prune_old_bundles(env_dir, names)

    source_by_storage_path = {}
    for rel_path in planned:
        source_name = rel_path.rsplit("/", 1)[1]
        identity, source_hash = file_identity(source_name)
        stored_path = stable_storage_path(identity)
        source_by_storage_path[stored_path] = {
            "identity": identity,
            "cdn_hash": source_hash,
            "source_filename": source_name,
            "source_url": f"https://{environment}/{rel_path.lstrip('/')}",
        }

    files_manifest = []
    for stored_path in sorted(names):
        digest, size = file_digest(env_dir / stored_path)
        files_manifest.append({
            "path": f"bundles/{environment}/{stored_path}",
            "sha256": digest,
            "size": size,
            **source_by_storage_path[stored_path],
        })
    files_manifest.sort(key=lambda entry: entry["path"])

    by_identity = entries_by_identity(files_manifest)
    main_entry = by_identity[main_identity]
    record["bundle_path"] = main_entry["path"]
    record["bundle_sha256"] = main_entry["sha256"]
    record["bundle_size"] = main_entry["size"]
    css_entry = by_identity.get("css:main")
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
    """Map a CDN file name to its build-independent Webpack identity and hash."""
    match = FILENAME_RE.match(filename)
    if not match:
        return None
    return f"{match.group('kind')}:{match.group('name')}", match.group("hash").lower()


def stable_storage_path(identity: str) -> str:
    """Return a build-independent repository path for a Webpack asset."""
    kind, name = identity.split(":", 1)
    if kind == "js" and name == "main":
        return "main.js"
    if kind == "css" and name == "main":
        return "main.css"
    if kind == "chunk.js":
        return f"chunks/js/{name}.js"
    if kind == "chunk.css":
        return f"chunks/css/{name}.css"
    raise ValueError(f"Unsupported Webpack asset identity: {identity}")


def manifest_identity(entry: dict) -> tuple[str, str] | None:
    """Read an asset identity/hash from new metadata or a legacy hashed path."""
    identity = entry.get("identity")
    cdn_hash = entry.get("cdn_hash")
    if identity and cdn_hash:
        return str(identity), str(cdn_hash).lower()
    source_name = entry.get("source_filename") or entry.get("path", "").rsplit("/", 1)[-1]
    return file_identity(source_name)


def entries_by_identity(entries: list[dict]) -> dict:
    result = {}
    for entry in entries:
        info = manifest_identity(entry)
        if info:
            result[info[0]] = entry
    return result


def diff_manifests(previous_files: list, current_files: list) -> dict:
    """Compare snapshots by stable Webpack identity and CDN content hash."""
    def by_identity(entries):
        result = {}
        for entry in entries:
            info = manifest_identity(entry)
            if info:
                result[info[0]] = (info[1], entry)
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
    unchanged = len(prev) - len(removed) - len(changed)
    return {
        "changed": changed,
        "added": added,
        "removed": removed,
        "unchanged_count": max(unchanged, 0),
        "previous_count": len(prev),
        "current_count": len(cur),
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


def render_changes(previous_state: dict, current_state: dict, updated_envs: list, now_text: str, diff_report_path: str | None = None) -> str:
    """Render a compact summary with green/red diff highlighting."""
    subject = (
        f"Bloxd build update — {now_text} ("
        + ", ".join(f"{env}={current_state[env]['build']}" for env in updated_envs)
        + ")"
    )
    lines = [
        subject,
        "",
        "Bundle files use stable Webpack paths; original CDN names and hashes remain in .monitor-state.json.",
    ]
    if diff_report_path:
        lines.extend(["", f"Readable per-file diff: [{diff_report_path}]({diff_report_path})"])

    for environment in updated_envs:
        record = current_state[environment]
        previous = previous_state.get(environment) or {}
        previous_files = previous.get("files") or []
        current_files = record.get("files") or []
        old_build = previous.get("build", "baseline")
        lines.extend(["", f"## {environment} — {old_build} → {record['build']}", "", "```diff"])
        if not previous_files:
            total = sum(entry.get("size") or 0 for entry in current_files)
            lines.append(f"+ Baseline: {len(current_files)} files ({human_size(total)})")
            lines.extend(["```", ""])
            continue

        diff = diff_manifests(previous_files, current_files)
        total = sum(entry.get("size") or 0 for entry in current_files)
        previous_total = total - diff["size_delta"]
        lines.extend([
            f"- Files: {diff['previous_count']} files",
            f"+ Files: {diff['current_count']} files "
            f"(changed {len(diff['changed'])}, added {len(diff['added'])}, "
            f"removed {len(diff['removed'])}, unchanged {diff['unchanged_count']})",
            f"- Total size: {human_size(previous_total)}",
            f"+ Total size: {human_size(total)} ({human_delta(diff['size_delta'])})",
        ])
        notable = sorted(
            diff["changed"],
            key=lambda entry: abs(entry[4] - entry[3]),
            reverse=True,
        )[:10]
        if notable:
            lines.append("+ Largest changes:")
            for identity, old_hash, new_hash, old_size, new_size in notable:
                delta = new_size - old_size
                marker = "+" if delta >= 0 else "-"
                direction = "increased" if delta >= 0 else "decreased"
                lines.append(
                    f"{marker} {stable_storage_path(identity)} {direction} "
                    f"{human_size(abs(delta))} ({old_hash} → {new_hash})"
                )
        if diff["added"]:
            names = ", ".join(stable_storage_path(identity) for identity, _, _ in diff["added"][:8])
            suffix = f" (+{len(diff['added']) - 8} more)" if len(diff["added"]) > 8 else ""
            lines.append(f"+ Added files: {names}{suffix}")
        if diff["removed"]:
            names = ", ".join(stable_storage_path(identity) for identity, _, _ in diff["removed"][:8])
            suffix = f" (+{len(diff['removed']) - 8} more)" if len(diff["removed"]) > 8 else ""
            lines.append(f"- Removed files: {names}{suffix}")
        lines.extend(["```", ""])
    return "\n".join(lines).rstrip() + "\n"


def readable_diff_report_path(now_text: str, state: dict, updated_envs: list) -> str:
    timestamp = re.sub(r"\D", "", now_text)[:12] or "latest"
    build_slug = "-".join(
        re.sub(r"[^A-Za-z0-9_-]+", "-", str(state[env].get("build", env))).strip("-")
        for env in updated_envs
    )
    return f"diffs/{timestamp}-{build_slug}.md"


def normalize_minified_js_identifiers(source: str) -> str:
    """Replace two-character JS identifiers while preserving strings, comments and property keys."""
    output = []
    keywords = {"as", "do", "if", "in", "of"}
    index = 0
    length = len(source)

    while index < length:
        char = source[index]

        if source.startswith("//", index):
            end = source.find("\n", index)
            if end < 0:
                output.append(source[index:])
                break
            output.append(source[index:end])
            index = end
            continue
        if source.startswith("/*", index):
            end = source.find("*/", index + 2)
            end = length if end < 0 else end + 2
            output.append(source[index:end])
            index = end
            continue
        if char in ("'", '"') or ord(char) == 96:
            quote = char
            end = index + 1
            while end < length:
                if source[end] == "\\":
                    end += 2
                    continue
                if source[end] == quote:
                    end += 1
                    break
                end += 1
            output.append(source[index:end])
            index = end
            continue

        match = re.match(r"[A-Za-z_$][A-Za-z0-9_$]*", source, index)
        if not match:
            output.append(char)
            index += 1
            continue

        identifier = match.group(0)
        end = index + len(identifier)
        previous = index - 1
        while previous >= 0 and source[previous].isspace():
            previous -= 1
        following = end
        while following < length and source[following].isspace():
            following += 1

        previous_char = source[previous] if previous >= 0 else ""
        next_char = source[following] if following < length else ""
        is_member_property = previous_char == "."
        is_object_key = next_char == ":"
        is_shorthand_key = previous_char in "{," and next_char in ",}"
        is_method_key = previous_char in "{," and next_char == "("
        is_keyword = identifier in keywords

        if (
            len(identifier) == 2
            and not is_member_property
            and not is_object_key
            and not is_shorthand_key
            and not is_method_key
            and not is_keyword
        ):
            output.append("⟦2-char-id⟧")
        else:
            output.append(identifier)
        index = end

    return "".join(output)


def split_unified_hunks(diff_lines: list[str]) -> list[list[str]]:
    """Split a unified diff into independent @@ hunks."""
    hunks = []
    current = []
    for line in diff_lines:
        if line.startswith("@@"):
            if current:
                hunks.append(current)
            current = [line]
        elif current:
            current.append(line)
    if current:
        hunks.append(current)
    return hunks


def render_readable_diff_report(
    root: Path,
    title: str,
    base_ref: str = "HEAD",
    exclude_paths: set[str] | None = None,
) -> str:
    """Render every changed file, with a separate collapsible box for every diff hunk."""
    def git_output(*args: str) -> str:
        result = subprocess.run(
            ["git", *args],
            cwd=root,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            encoding="utf-8",
            errors="replace",
            check=False,
        )
        if result.returncode:
            raise RuntimeError(f"git {' '.join(args)} failed: {result.stderr.strip()}")
        return result.stdout

    tracked = git_output("diff", "--name-only", "-z", base_ref, "--").split("\0")
    untracked = git_output("ls-files", "--others", "--exclude-standard", "-z").split("\0")
    paths = sorted({path for path in tracked + untracked if path})
    sections = []
    excluded = set(exclude_paths or ())
    included = binary_count = identifier_only_count = hunk_count = 0
    fence = chr(96) * 3

    for relative in paths:
        if relative in excluded:
            continue

        old_result = subprocess.run(
            ["git", "show", f"{base_ref}:{relative}"],
            cwd=root,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            check=False,
        )
        old_exists = old_result.returncode == 0
        old_bytes = old_result.stdout if old_exists else b""
        current_path = root / relative
        new_exists = current_path.is_file()
        new_bytes = current_path.read_bytes() if new_exists else b""

        status = "new" if not old_exists else ("deleted" if not new_exists else "modified")
        summary_prefix = f"<code>{html.escape(relative)}</code> · {status}"

        try:
            if b"\0" in old_bytes or b"\0" in new_bytes:
                raise UnicodeDecodeError("utf-8", b"\0", 0, 1, "binary content")
            old_text = old_bytes.decode("utf-8")
            new_text = new_bytes.decode("utf-8")
        except UnicodeDecodeError:
            binary_count += 1
            old_hash = hashlib.sha256(old_bytes).hexdigest()[:16] if old_exists else "—"
            new_hash = hashlib.sha256(new_bytes).hexdigest()[:16] if new_exists else "—"
            sections.extend([
                "<details>",
                f"<summary>{summary_prefix} · binary</summary>",
                "",
                f"- Previous: {len(old_bytes):,} bytes · SHA-256 {old_hash}" if old_exists else "- Previous: file did not exist",
                f"- Current: {len(new_bytes):,} bytes · SHA-256 {new_hash}" if new_exists else "- Current: file deleted",
                "- Binary file changed; binary content cannot be represented as a line diff.",
                "",
                "</details>",
                "",
            ])
            included += 1
            continue

        compare_old = old_text
        compare_new = new_text
        if Path(relative).suffix.lower() in {".js", ".mjs", ".cjs"}:
            compare_old = normalize_minified_js_identifiers(old_text)
            compare_new = normalize_minified_js_identifiers(new_text)

        diff_lines = list(difflib.unified_diff(
            compare_old.splitlines(),
            compare_new.splitlines(),
            fromfile=f"a/{relative}",
            tofile=f"b/{relative}",
            lineterm="",
            n=3,
        ))
        if not diff_lines:
            if compare_old == compare_new and old_text != new_text:
                identifier_only_count += 1
                sections.extend([
                    "<details>",
                    f"<summary>{summary_prefix} · 2-character identifier-only changes filtered</summary>",
                    "",
                    "No text diff remains after masking two-character JavaScript identifiers.",
                    "",
                    "</details>",
                    "",
                ])
                included += 1
            continue

        additions = sum(line.startswith("+") and not line.startswith("+++") for line in diff_lines)
        deletions = sum(line.startswith("-") and not line.startswith("---") for line in diff_lines)
        file_section = [
            "<details>",
            f"<summary>{summary_prefix} · +{additions} / -{deletions}</summary>",
            "",
        ]

        if Path(relative).suffix.lower() in {".js", ".mjs", ".cjs"}:
            file_section.extend([
                "JavaScript comparison masks only two-character identifiers shown as ⟦2-char-id⟧; strings, comments, member properties, object keys, and all other tokens remain visible.",
                "",
            ])

        hunks = split_unified_hunks(diff_lines)
        if not hunks:
            file_section.extend([fence + "diff", *diff_lines, fence, ""])
        else:
            for number, hunk in enumerate(hunks, start=1):
                header = hunk[0]
                context_match = re.match(r"@@ .*? @@\s*(.*)", header)
                context = context_match.group(1).strip() if context_match else ""
                context_label = html.escape(context[:100] or "Change")
                hunk_additions = sum(line.startswith("+") for line in hunk[1:])
                hunk_deletions = sum(line.startswith("-") for line in hunk[1:])
                file_section.extend([
                    "<details>",
                    f"<summary>Hunk {number} · {context_label} · +{hunk_additions} / -{hunk_deletions}</summary>",
                    "",
                    fence + "diff",
                    *hunk,
                    fence,
                    "",
                    "</details>",
                    "",
                ])
                hunk_count += 1

        file_section.extend(["</details>", ""])
        sections.extend(file_section)
        included += 1

    lines = [
        f"# Readable build diff — {title}",
        "",
        "Every changed text file is included. Each file and each diff hunk has its own collapsible section.",
        "",
        f"- Changed files represented: {included}",
        f"- Binary files represented by size and SHA-256: {binary_count}",
        f"- JavaScript files with only two-character identifier changes filtered: {identifier_only_count}",
        f"- Individual diff hunks: {hunk_count}",
        "",
        "For JavaScript, only two-character identifiers are normalized to suppress minifier variable-name churn. Strings, comments, object keys, member properties, and every other text change remain in the diff.",
        "",
        "GitHub diff highlighting colors additions green and deletions red.",
        "",
    ]
    lines.extend(sections or ["No changed files were found."])
    return "\n".join(lines).rstrip() + "\n"

def render_readme(state: dict) -> str:
    lines = [
        "# Bloxd Build Monitor",
        "",
        "Latest Bloxd build per environment, detected by the external Cloudflare Worker in `cloudflare/` (one poll per minute). GitHub Actions is dispatched only when a bundle changes; its built-in schedule is a six-hour fallback.",
        "Every bundle is beautified and archived under stable logical paths:"
        " main.js, main.css, chunks/js/<chunk-id-or-name>.js, and matching CSS"
        " paths. Original CDN file names, URLs, and hashes are retained in"
        " .monitor-state.json.",
        "This keeps each Webpack chunk on the same Git path across builds, so"
        " GitHub shows a normal file modification instead of delete/add."
        " Every build update is a new commit; previous build snapshots remain"
        " accessible in Git history and are never squashed or force-pushed.",
        "`CHANGES.md` uses green/red diff highlighting and links to a per-build readable report.",
        "`diffs/` includes every changed file, with a separate collapsible section for each file and each diff hunk. JavaScript comparison masks only two-character identifiers to suppress minifier-name churn; other code and manifest changes remain visible.",
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
    current = {}
    for environment, site_url in SITES.items():
        known_records = dict(previous)
        known_records.update(current)
        current[environment] = probe(
            environment,
            site_url,
            previous.get(environment) or {},
            known_records=known_records,
        )

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
        report_path = readable_diff_report_path(now_text, persistent, updated)
        CHANGES_PATH.write_text(
            render_changes(previous, persistent, updated, now_text, report_path), encoding="utf-8"
        )
        report_file = ROOT / report_path
        report_file.parent.mkdir(parents=True, exist_ok=True)
        report_file.write_text(
            render_readable_diff_report(
                ROOT,
                f"{now_text} — " + ", ".join(persistent[env]["build"] for env in updated),
                exclude_paths={report_path},
            ),
            encoding="utf-8",
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
