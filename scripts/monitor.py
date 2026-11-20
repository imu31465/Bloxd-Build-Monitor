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
import tempfile
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
HISTORY_PATH = ROOT / "HISTORY.md"
CHANGES_DIR = ROOT / "changes"
ADDED_REPORT_PATH = CHANGES_DIR / "added.md"
REMOVED_REPORT_PATH = CHANGES_DIR / "removed.md"
CHANGED_REPORT_PATH = CHANGES_DIR / "changed.md"
CHANGED_PARTS_DIR = CHANGES_DIR / "changed"
BUNDLES_DIR = ROOT / "bundles"
REPO_URL = "https://github.com/imu31465/Bloxd-Build-Monitor"
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
HUNK_HEADER_RE = re.compile(
    r"^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@(?:\s*(.*))?$"
)
JST = ZoneInfo("Asia/Tokyo")

MAX_DIFF_REPORT_PART_BYTES = 8 * 1024 * 1024
MAX_SINGLE_DIFF_HUNK_BYTES = 80 * 1024 * 1024
MAX_CHANGED_PART_BYTES = 450 * 1024  # Target safely <= 500 KB per page
MAX_SNIPPET_LINES_PER_HUNK = 16
MAX_SNIPPET_LINE_CHARS = 280


def request(url: str, method: str = "GET", accept: str = "text/html,*/*;q=0.8"):
    req = urllib.request.Request(
        url,
        method=method,
        headers={"User-Agent": UA, "Accept": accept},
    )
    return urllib.request.urlopen(req, timeout=30)


def find_main_bundle(html_text: str, host: str) -> tuple[str, str, str]:
    for match in BUNDLE_RE.finditer(html_text):
        matched_host = match.group("host")
        if matched_host and matched_host != host:
            continue
        build = match.group("build") or match.group("relative_build")
        asset_hash = match.group("hash") or match.group("relative_hash")
        path = match.group("path") or match.group("relative")
        return f"https://{host}{path}", build, asset_hash.lower()
    raise RuntimeError(f"Could not find {host} main bundle reference in homepage HTML")


def find_main_css(html_text: str, host: str) -> str | None:
    """Return the homepage main CSS path relative to the site root, if present."""
    for match in MAIN_CSS_RE.finditer(html_text):
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
        html_text = response.read(2_000_000).decode("utf-8", "replace")

    url, build_name, asset_hash = find_main_bundle(html_text, environment)
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
    css_rel = find_main_css(html_text, environment)
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


def is_bundle_path(relative_path: str) -> bool:
    """Return True if and only if relative_path is a bundle file under bundles/<env>/."""
    normalized = relative_path.replace("\\", "/").lstrip("/")
    if not normalized.startswith("bundles/"):
        return False
    parts = normalized.split("/")
    if len(parts) < 3:
        return False
    env = parts[1]
    if env not in SITES:
        return False
    return normalized.endswith((".js", ".css", ".mjs", ".cjs", ".wasm"))


def build_tag_name(environment: str, build_id: str) -> str:
    """Return the deterministic Git tag name for an environment build snapshot."""
    safe_env = re.sub(r"[^A-Za-z0-9._-]+", "-", environment)
    safe_build = re.sub(r"[^A-Za-z0-9._-]+", "-", build_id)
    return f"build/{safe_env}/{safe_build}"


def ensure_build_tag(
    root: Path,
    environment: str,
    build_id: str,
    target_commit: str = "HEAD",
    push: bool = False,
) -> str:
    """Create or verify a deterministic `build/<environment>/<build_id>` Git tag.

    - Resolves `target_commit` to its 40-char commit SHA.
    - If the tag already exists:
      - If it points to the same commit SHA, treats it as an idempotent re-run.
      - If it points to a different commit SHA, raises RuntimeError without overwriting.
    - If the tag does not exist, creates it without `--force`.
    - When `push=True`, pushes the tag to `origin` without `--force`.
    """
    tag = build_tag_name(environment, build_id)
    target_res = subprocess.run(
        ["git", "rev-parse", f"{target_commit}^{{commit}}"],
        cwd=root,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        check=False,
    )
    if target_res.returncode != 0:
        raise RuntimeError(
            f"Cannot resolve target commit {target_commit!r}: {target_res.stderr.strip()}"
        )
    target_sha = target_res.stdout.strip()

    existing_res = subprocess.run(
        ["git", "rev-parse", "-q", "--verify", f"refs/tags/{tag}^{{commit}}"],
        cwd=root,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        check=False,
    )
    if existing_res.returncode == 0:
        existing_sha = existing_res.stdout.strip()
        if existing_sha != target_sha:
            raise RuntimeError(
                f"Tag {tag!r} already exists on commit {existing_sha[:12]}, "
                f"refusing to overwrite with {target_sha[:12]}"
            )
    else:
        create_res = subprocess.run(
            ["git", "tag", tag, target_sha],
            cwd=root,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            check=False,
        )
        if create_res.returncode != 0:
            raise RuntimeError(f"git tag {tag} failed: {create_res.stderr.strip()}")

    if push:
        push_res = subprocess.run(
            ["git", "push", "origin", f"refs/tags/{tag}"],
            cwd=root,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            check=False,
        )
        if push_res.returncode != 0:
            raise RuntimeError(f"git push origin refs/tags/{tag} failed: {push_res.stderr.strip()}")

    return tag


def ensure_build_tags_for_state(
    root: Path,
    state: dict,
    environments: list[str] | None = None,
    target_commit: str = "HEAD",
    push: bool = False,
) -> list[str]:
    """Ensure deterministic build tags for each specified environment in `state`."""
    envs = list(environments) if environments is not None else list(state.keys())
    created_or_verified: list[str] = []
    for env in envs:
        record = state.get(env) or {}
        build_id = record.get("build")
        if not build_id:
            continue
        tag = ensure_build_tag(
            root, env, str(build_id), target_commit=target_commit, push=push
        )
        created_or_verified.append(tag)
    return created_or_verified


def github_diff_anchor(path: str) -> str:
    """Return GitHub's SHA-256 diff anchor for a repository-relative path."""
    normalized = path.replace("\\", "/").lstrip("/")
    return "diff-" + hashlib.sha256(normalized.encode("utf-8")).hexdigest()


def build_github_links(
    path: str,
    base_ref: str,
    head_ref: str,
    old_range: tuple[int, int] | None = None,
    new_range: tuple[int, int] | None = None,
    repo_url: str = REPO_URL,
) -> dict[str, str]:
    """Construct verified GitHub Compare, hunk anchor, and before/after blob line URLs.

    - Never falls back to mutable `main`.
    - For `new_range` (Added / Changed): uses `#diff-<sha256>R<new_start>` and `after_url`.
    - For `old_range` only (Removed): uses `#diff-<sha256>L<old_start>` and `before_url`.
    """
    if not base_ref or not head_ref:
        raise ValueError("base_ref and head_ref must be non-empty immutable refs or tags")
    normalized = path.replace("\\", "/").lstrip("/")
    anchor = github_diff_anchor(normalized)
    compare_base = f"{repo_url}/compare/{base_ref}...{head_ref}"
    file_diff_url = f"{compare_base}#{anchor}"

    hunk_url = file_diff_url
    if new_range and new_range[0] > 0:
        hunk_url = f"{compare_base}#{anchor}R{new_range[0]}"
    elif old_range and old_range[0] > 0:
        hunk_url = f"{compare_base}#{anchor}L{old_range[0]}"

    after_url = ""
    if new_range and new_range[0] > 0:
        start, end = new_range
        line_frag = f"L{start}" if start == end else f"L{start}-L{end}"
        after_url = f"{repo_url}/blob/{head_ref}/{normalized}#{line_frag}"

    before_url = ""
    if old_range and old_range[0] > 0:
        start, end = old_range
        line_frag = f"L{start}" if start == end else f"L{start}-L{end}"
        before_url = f"{repo_url}/blob/{base_ref}/{normalized}#{line_frag}"

    return {
        "compare_url": compare_base,
        "file_diff_url": file_diff_url,
        "hunk_url": hunk_url,
        "after_url": after_url,
        "before_url": before_url,
    }


def normalize_minified_js_identifiers(source: str) -> str:
    """Replace two-character JS identifiers while preserving literals and property names."""
    output = []
    keywords = {"as", "do", "if", "in", "of"}
    regex_context_words = {
        "return", "throw", "case", "delete", "void", "typeof",
        "instanceof", "in", "of", "yield", "await",
    }
    identifier_pattern = re.compile(r"[A-Za-z_$][A-Za-z0-9_$]*")
    index = 0
    length = len(source)
    brace_stack = []
    paren_depth = 0
    bracket_depth = 0

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

        # Preserve regular-expression literals, not just quoted strings.
        if char == "/":
            previous = index - 1
            while previous >= 0 and source[previous].isspace():
                previous -= 1
            previous_char = source[previous] if previous >= 0 else ""
            word_end = previous + 1
            word_start = previous
            while word_start >= 0 and (
                source[word_start].isalnum() or source[word_start] in "_$"
            ):
                word_start -= 1
            previous_word = source[word_start + 1:word_end]
            regex_can_start = (
                previous < 0
                or previous_char in "([{:;,=!?&|+-*%^~<>"
                or previous_word in regex_context_words
            )
            if regex_can_start:
                end = index + 1
                escaped = False
                in_character_class = False
                while end < length:
                    current = source[end]
                    if escaped:
                        escaped = False
                    elif current == "\\":
                        escaped = True
                    elif current == "[":
                        in_character_class = True
                    elif current == "]":
                        in_character_class = False
                    elif current == "/" and not in_character_class:
                        end += 1
                        while end < length and source[end].isalpha():
                            end += 1
                        break
                    elif current in "\r\n":
                        break
                    end += 1
                output.append(source[index:end])
                index = end
                continue

        if char == "(":
            paren_depth += 1
            output.append(char)
            index += 1
            continue
        if char == ")":
            paren_depth = max(0, paren_depth - 1)
            output.append(char)
            index += 1
            continue
        if char == "[":
            bracket_depth += 1
            output.append(char)
            index += 1
            continue
        if char == "]":
            bracket_depth = max(0, bracket_depth - 1)
            output.append(char)
            index += 1
            continue

        if char == "{":
            previous = index - 1
            while previous >= 0 and source[previous].isspace():
                previous -= 1
            previous_char = source[previous] if previous >= 0 else ""
            prefix = source[max(0, index - 96):index].rstrip()
            previous_word_match = re.search(r"([A-Za-z_$][A-Za-z0-9_$]*)\s*$", prefix)
            previous_word = previous_word_match.group(1) if previous_word_match else ""
            is_class_body = bool(re.search(
                r"\bclass\s+[A-Za-z_$][A-Za-z0-9_$]*(?:\s+extends\s+[^{}]+)?$",
                prefix,
            ))
            is_object_literal = (
                previous_char in "=(:,["
                or previous_word in {"return", "yield", "default", "const", "let", "var"}
                or (bool(brace_stack) and brace_stack[-1][0] == "object" and previous_char in "{,")
            )
            brace_stack.append(("class" if is_class_body else ("object" if is_object_literal else "block"), paren_depth, bracket_depth))
            output.append(char)
            index += 1
            continue
        if char == "}":
            if brace_stack:
                brace_stack.pop()
            output.append(char)
            index += 1
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
            raw_literal = source[index:end]
            literal_content = source[index + 1:end - 1]
            starts_like_worker_code = (
                literal_content.lstrip().startswith(("(()=>{", "!function", "function("))
                and ("=>" in literal_content or ".exports" in literal_content)
            ) or "self.webpackChunk_" in literal_content
            if starts_like_worker_code:
                output.append(quote + normalize_minified_js_identifiers(literal_content) + quote)
            else:
                output.append(raw_literal)
            index = end
            continue

        match = identifier_pattern.match(source, index)
        if not match:
            output.append(char)
            index += 1
            continue

        identifier = match.group(0)
        end = match.end()
        previous = index - 1
        while previous >= 0 and source[previous].isspace():
            previous -= 1
        following = end
        while following < length and source[following].isspace():
            following += 1

        previous_char = source[previous] if previous >= 0 else ""
        next_char = source[following] if following < length else ""
        is_member_property = previous_char == "." and source[max(0, index - 3):index] != "..."
        is_object_key = next_char == ":"
        same_container_depth = bool(
            brace_stack
            and brace_stack[-1][1] == paren_depth
            and brace_stack[-1][2] == bracket_depth
        )
        in_object_literal = bool(brace_stack and brace_stack[-1][0] == "object" and same_container_depth)
        in_class_body = bool(brace_stack and brace_stack[-1][0] == "class" and same_container_depth)
        is_shorthand_key = in_object_literal and previous_char in "{," and next_char in ",}"
        is_method_key = (in_object_literal or in_class_body) and previous_char in "{," and next_char == "("
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


def _zero_context_unified_hunks(compare_old: str, compare_new: str) -> list[list[str]]:
    """Compute independent zero-context (n=0) diff hunks rapidly using git diff or difflib."""
    total_len = len(compare_old) + len(compare_new)
    if total_len > 64_000:
        try:
            with (
                tempfile.NamedTemporaryFile("w", encoding="utf-8", suffix=".old") as f_old,
                tempfile.NamedTemporaryFile("w", encoding="utf-8", suffix=".new") as f_new,
            ):
                f_old.write(compare_old)
                if compare_old and not compare_old.endswith("\n"):
                    f_old.write("\n")
                f_old.flush()
                f_new.write(compare_new)
                if compare_new and not compare_new.endswith("\n"):
                    f_new.write("\n")
                f_new.flush()
                res = subprocess.run(
                    ["git", "diff", "--no-index", "-U0", f_old.name, f_new.name],
                    stdout=subprocess.PIPE,
                    stderr=subprocess.PIPE,
                    text=True,
                    encoding="utf-8",
                    errors="replace",
                    check=False,
                )
                if res.returncode in (0, 1):
                    return split_unified_hunks(res.stdout.splitlines())
        except OSError:
            pass

    diff_lines = list(
        difflib.unified_diff(
            compare_old.splitlines(),
            compare_new.splitlines(),
            fromfile="a/file",
            tofile="b/file",
            lineterm="",
            n=0,
        )
    )
    return split_unified_hunks(diff_lines)


def classify_bundle_file_diff(
    path: str,
    old_bytes: bytes | None,
    new_bytes: bytes | None,
) -> dict:
    """Classify a single bundle file's changes into Added, Removed, and Changed items.

    - Only files under `bundles/<env>/` are eligible.
    - For JavaScript files, 2-character identifiers are normalized via
      `normalize_minified_js_identifiers()` before comparison.
    - Pure file additions or pure code insertions -> `added`
    - Pure file deletions or pure code deletions -> `removed`
    - Replacements of existing code -> `changed` (each independent hunk is a separate item)
    """
    normalized_path = path.replace("\\", "/").lstrip("/")
    if not is_bundle_path(normalized_path):
        return {
            "path": normalized_path,
            "status": "ignored",
            "added": [],
            "removed": [],
            "changed": [],
            "identifier_only": False,
            "binary": False,
        }

    old_exists = old_bytes is not None
    new_exists = new_bytes is not None
    old_raw = old_bytes or b""
    new_raw = new_bytes or b""

    # Handle binary files if any
    is_binary = b"\0" in old_raw or b"\0" in new_raw
    if not is_binary:
        try:
            old_text = old_raw.decode("utf-8") if old_exists else ""
            new_text = new_raw.decode("utf-8") if new_exists else ""
        except UnicodeDecodeError:
            is_binary = True
            old_text = ""
            new_text = ""
    else:
        old_text = ""
        new_text = ""

    if is_binary:
        old_sha = hashlib.sha256(old_raw).hexdigest()[:16] if old_exists else None
        new_sha = hashlib.sha256(new_raw).hexdigest()[:16] if new_exists else None
        if not old_exists and new_exists:
            return {
                "path": normalized_path,
                "status": "added",
                "added": [{
                    "path": normalized_path,
                    "kind": "added_file",
                    "old_range": None,
                    "new_range": (1, 1),
                    "old_lines": [],
                    "new_lines": [f"Binary file added ({len(new_raw):,} bytes, sha256 {new_sha})"],
                    "context": "binary file",
                }],
                "removed": [],
                "changed": [],
                "identifier_only": False,
                "binary": True,
            }
        if old_exists and not new_exists:
            return {
                "path": normalized_path,
                "status": "removed",
                "added": [],
                "removed": [{
                    "path": normalized_path,
                    "kind": "removed_file",
                    "old_range": (1, 1),
                    "new_range": None,
                    "old_lines": [f"Binary file removed ({len(old_raw):,} bytes, sha256 {old_sha})"],
                    "new_lines": [],
                    "context": "binary file",
                }],
                "changed": [],
                "identifier_only": False,
                "binary": True,
            }
        if old_raw != new_raw:
            return {
                "path": normalized_path,
                "status": "modified",
                "added": [],
                "removed": [],
                "changed": [{
                    "path": normalized_path,
                    "kind": "changed_binary",
                    "old_range": (1, 1),
                    "new_range": (1, 1),
                    "old_lines": [f"Binary ({len(old_raw):,} bytes, sha256 {old_sha})"],
                    "new_lines": [f"Binary ({len(new_raw):,} bytes, sha256 {new_sha})"],
                    "context": "binary file",
                }],
                "identifier_only": False,
                "binary": True,
            }
        return {
            "path": normalized_path,
            "status": "unchanged",
            "added": [],
            "removed": [],
            "changed": [],
            "identifier_only": False,
            "binary": True,
        }

    if not old_exists and new_exists:
        new_lines = new_text.splitlines()
        line_count = max(1, len(new_lines))
        return {
            "path": normalized_path,
            "status": "added",
            "added": [{
                "path": normalized_path,
                "kind": "added_file",
                "old_range": None,
                "new_range": (1, line_count),
                "old_lines": [],
                "new_lines": new_lines,
                "context": f"New bundle file ({len(new_lines)} lines, {len(new_raw):,} bytes)",
            }],
            "removed": [],
            "changed": [],
            "identifier_only": False,
            "binary": False,
        }

    if old_exists and not new_exists:
        old_lines = old_text.splitlines()
        line_count = max(1, len(old_lines))
        return {
            "path": normalized_path,
            "status": "removed",
            "added": [],
            "removed": [{
                "path": normalized_path,
                "kind": "removed_file",
                "old_range": (1, line_count),
                "new_range": None,
                "old_lines": old_lines,
                "new_lines": [],
                "context": f"Removed bundle file ({len(old_lines)} lines, {len(old_raw):,} bytes)",
            }],
            "changed": [],
            "identifier_only": False,
            "binary": False,
        }

    if old_text == new_text:
        return {
            "path": normalized_path,
            "status": "unchanged",
            "added": [],
            "removed": [],
            "changed": [],
            "identifier_only": False,
            "binary": False,
        }

    is_js = Path(normalized_path).suffix.lower() in {".js", ".mjs", ".cjs"}
    compare_old = normalize_minified_js_identifiers(old_text) if is_js else old_text
    compare_new = normalize_minified_js_identifiers(new_text) if is_js else new_text

    if compare_old == compare_new:
        return {
            "path": normalized_path,
            "status": "filtered",
            "added": [],
            "removed": [],
            "changed": [],
            "identifier_only": True,
            "binary": False,
        }

    orig_old_lines = old_text.splitlines()
    orig_new_lines = new_text.splitlines()
    hunks = _zero_context_unified_hunks(compare_old, compare_new)

    added_items = []
    removed_items = []
    changed_items = []

    for hunk in hunks:
        header = hunk[0]
        match = HUNK_HEADER_RE.match(header)
        if not match:
            continue
        old_start = int(match.group(1))
        old_count = int(match.group(2)) if match.group(2) is not None else 1
        new_start = int(match.group(3))
        new_count = int(match.group(4)) if match.group(4) is not None else 1
        context = (match.group(5) or "").strip()

        old_slice = (
            orig_old_lines[old_start - 1 : old_start - 1 + old_count]
            if old_count > 0
            else []
        )
        new_slice = (
            orig_new_lines[new_start - 1 : new_start - 1 + new_count]
            if new_count > 0
            else []
        )

        old_range = (old_start, old_start + old_count - 1) if old_count > 0 else None
        new_range = (new_start, new_start + new_count - 1) if new_count > 0 else None

        if old_count > 0 and new_count > 0:
            changed_items.append({
                "path": normalized_path,
                "kind": "changed_code",
                "old_range": old_range,
                "new_range": new_range,
                "old_lines": old_slice,
                "new_lines": new_slice,
                "context": context,
            })
        elif new_count > 0:
            added_items.append({
                "path": normalized_path,
                "kind": "added_code",
                "old_range": (old_start, old_start) if old_start > 0 else None,
                "new_range": new_range,
                "old_lines": [],
                "new_lines": new_slice,
                "context": context,
            })
        elif old_count > 0:
            removed_items.append({
                "path": normalized_path,
                "kind": "removed_code",
                "old_range": old_range,
                "new_range": None,
                "old_lines": old_slice,
                "new_lines": [],
                "context": context,
            })

    return {
        "path": normalized_path,
        "status": "modified",
        "added": added_items,
        "removed": removed_items,
        "changed": changed_items,
        "identifier_only": False,
        "binary": False,
    }


def _classify_git_entry_worker(args: tuple[str, str, str | None, str, str]) -> dict:
    root_str, base_ref, head_ref, status, relative_path = args
    root = Path(root_str)

    if status == "A":
        old_bytes = None
    else:
        old_res = subprocess.run(
            ["git", "show", f"{base_ref}:{relative_path}"],
            cwd=root,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            check=False,
        )
        old_bytes = old_res.stdout if old_res.returncode == 0 else None

    if status == "D":
        new_bytes = None
    elif head_ref:
        new_res = subprocess.run(
            ["git", "show", f"{head_ref}:{relative_path}"],
            cwd=root,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            check=False,
        )
        new_bytes = new_res.stdout if new_res.returncode == 0 else None
    else:
        target = root / relative_path
        new_bytes = target.read_bytes() if target.is_file() else None

    return classify_bundle_file_diff(relative_path, old_bytes, new_bytes)


def collect_bundle_diffs(
    root: Path,
    base_ref: str = "HEAD",
    head_ref: str | None = None,
    environments: list[str] | None = None,
) -> dict:
    """Collect and classify all bundle changes between `base_ref` and `head_ref` (or worktree).

    Non-bundle files (README.md, CHANGES.md, HISTORY.md, .monitor-state.json, scripts, tests, etc.)
    are strictly excluded.
    """
    def git_out(*args: str) -> str:
        res = subprocess.run(
            ["git", *args],
            cwd=root,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            encoding="utf-8",
            errors="replace",
            check=False,
        )
        if res.returncode != 0:
            raise RuntimeError(f"git {' '.join(args)} failed: {res.stderr.strip()}")
        return res.stdout

    env_list = list(environments) if environments else list(SITES.keys())
    path_specs = [f"bundles/{env}" for env in env_list]

    entries_by_path: dict[str, str] = {}
    if head_ref:
        raw = git_out("diff", "--no-renames", "--name-status", "-z", base_ref, head_ref, "--", *path_specs)
        tokens = [tok for tok in raw.split("\0") if tok]
        for idx in range(0, len(tokens) - 1, 2):
            status = tokens[idx][0]
            rel_path = tokens[idx + 1]
            if is_bundle_path(rel_path):
                entries_by_path[rel_path] = status
    else:
        raw = git_out("diff", "--no-renames", "--name-status", "-z", base_ref, "--", *path_specs)
        tokens = [tok for tok in raw.split("\0") if tok]
        for idx in range(0, len(tokens) - 1, 2):
            status = tokens[idx][0]
            rel_path = tokens[idx + 1]
            if is_bundle_path(rel_path):
                entries_by_path[rel_path] = status
        untracked = git_out("ls-files", "--others", "--exclude-standard", "-z", "--", *path_specs).split("\0")
        for rel_path in untracked:
            if rel_path and is_bundle_path(rel_path):
                entries_by_path.setdefault(rel_path, "A")

    sorted_items = sorted(entries_by_path.items(), key=lambda item: item[0])
    worker_args = [
        (str(root), base_ref, head_ref, status, rel_path)
        for rel_path, status in sorted_items
    ]

    if not worker_args:
        file_results = []
    elif len(worker_args) <= 4:
        file_results = [_classify_git_entry_worker(arg) for arg in worker_args]
    else:
        workers = max(1, min(os.cpu_count() or 2, 8))
        with concurrent.futures.ProcessPoolExecutor(max_workers=workers) as pool:
            file_results = list(pool.map(_classify_git_entry_worker, worker_args))

    by_env: dict[str, dict] = {
        env: {
            "files": [],
            "added": [],
            "removed": [],
            "changed": [],
            "added_files_count": 0,
            "removed_files_count": 0,
            "changed_files_count": 0,
            "filtered_files_count": 0,
        }
        for env in env_list
    }

    for res in file_results:
        rel_path = res["path"]
        parts = rel_path.split("/")
        if len(parts) < 3:
            continue
        env = parts[1]
        if env not in by_env:
            continue
        env_bucket = by_env[env]
        env_bucket["files"].append(res)
        env_bucket["added"].extend(res["added"])
        env_bucket["removed"].extend(res["removed"])
        env_bucket["changed"].extend(res["changed"])
        if res["status"] == "added":
            env_bucket["added_files_count"] += 1
        elif res["status"] == "removed":
            env_bucket["removed_files_count"] += 1
        elif res["status"] == "filtered":
            env_bucket["filtered_files_count"] += 1
        elif res["added"] or res["removed"] or res["changed"]:
            env_bucket["changed_files_count"] += 1

    return {
        "base_ref": base_ref,
        "head_ref": head_ref,
        "environments": by_env,
        "total_added": sum(len(b["added"]) for b in by_env.values()),
        "total_removed": sum(len(b["removed"]) for b in by_env.values()),
        "total_changed": sum(len(b["changed"]) for b in by_env.values()),
    }


def _truncate_line(line: str, max_chars: int = MAX_SNIPPET_LINE_CHARS) -> str:
    if len(line) <= max_chars:
        return line
    return line[:max_chars] + " … [truncated]"


def _format_range_label(rng: tuple[int, int] | None, prefix: str = "L") -> str:
    if not rng or rng[0] <= 0:
        return "—"
    start, end = rng
    return f"{prefix}{start}" if start == end else f"{prefix}{start}-{prefix}{end}"


def _resolve_env_refs(
    environment: str,
    previous_state: dict,
    current_state: dict,
    base_commit: str | None = None,
    head_commit: str | None = None,
) -> tuple[str, str]:
    """Return immutable `(base_ref, head_ref)` for GitHub URLs for `environment`.

    - Never falls back to mutable `main`.
    - When `head_commit` is provided (e.g. a 40-char commit SHA), uses it; otherwise
      uses the deterministic build tag `build/<environment>/<new_build_id>`.
    - When `base_commit` is provided and is not the symbolic `'HEAD'`, uses it;
      otherwise uses `build/<environment>/<old_build_id>` if available.
    """
    prev_record = previous_state.get(environment) or {}
    cur_record = current_state.get(environment) or {}
    old_build = prev_record.get("build")
    new_build = cur_record.get("build")

    if base_commit and base_commit != "HEAD":
        resolved_base = base_commit
    elif old_build:
        resolved_base = build_tag_name(environment, str(old_build))
    else:
        resolved_base = base_commit or build_tag_name(environment, "baseline")

    if head_commit and head_commit != "HEAD":
        resolved_head = head_commit
    elif new_build:
        resolved_head = build_tag_name(environment, str(new_build))
    else:
        raise ValueError(
            f"Cannot determine immutable head ref for {environment}: neither head_commit nor build ID was provided"
        )

    return resolved_base, resolved_head


def _strip_env_prefix(path: str, environment: str) -> str:
    prefix = f"bundles/{environment}/"
    if path.startswith(prefix):
        return path[len(prefix):]
    return path


def _env_category_signature(env: str, env_data: dict, category: str) -> list[tuple]:
    """Build a canonical content signature for all items in `category` for `env`.

    Two environments have identical category diffs if and only if every relative
    bundle path, kind, old/new line range, and exact old/new source lines match.
    """
    signature: list[tuple] = []
    for item in env_data.get(category) or []:
        rel_subpath = _strip_env_prefix(item["path"], env)
        signature.append((
            rel_subpath,
            item["kind"],
            item["old_range"],
            item["new_range"],
            tuple(item["old_lines"]),
            tuple(item["new_lines"]),
        ))
    return signature


def environments_have_identical_category_diff(
    collected: dict, env_a: str, env_b: str, category: str
) -> bool:
    """Return True if and only if `env_a` and `env_b` have identical actual diff content for `category`."""
    data_a = collected.get("environments", {}).get(env_a)
    data_b = collected.get("environments", {}).get(env_b)
    if not data_a or not data_b:
        return False
    items_a = data_a.get(category) or []
    items_b = data_b.get(category) or []
    if len(items_a) != len(items_b):
        return False
    return _env_category_signature(env_a, data_a, category) == _env_category_signature(
        env_b, data_b, category
    )


def _render_single_diff_item_lines(
    idx: int,
    item: dict,
    base_ref: str,
    head_ref: str,
    repo_url: str = REPO_URL,
) -> list[str]:
    """Render a single Added, Removed, or Changed item with before/after code and GitHub links."""
    fence = chr(96) * 3
    f_path = item["path"]
    old_rng = item["old_range"]
    new_rng = item["new_range"]
    old_pos = _format_range_label(old_rng, "L")
    new_pos = _format_range_label(new_rng, "L")
    links = build_github_links(
        f_path,
        base_ref,
        head_ref,
        old_range=old_rng,
        new_range=new_rng,
        repo_url=repo_url,
    )

    link_parts = [
        f"[Diff Hunk]({links['hunk_url']})",
        f"[File Diff]({links['file_diff_url']})",
    ]
    if links["after_url"]:
        link_parts.append(f"[After ({new_pos})]({links['after_url']})")
    if links["before_url"]:
        link_parts.append(f"[Before ({old_pos})]({links['before_url']})")

    kind_label = item["kind"].replace("_", " ").capitalize()
    block = [
        f"#### {idx}. `{f_path}` ({kind_label} · before: `{old_pos}` → after: `{new_pos}`)",
        "",
        f"- **Links**: {' · '.join(link_parts)}",
        "",
        fence + "diff",
    ]
    old_lines = item["old_lines"]
    new_lines = item["new_lines"]
    for ol in old_lines[:MAX_SNIPPET_LINES_PER_HUNK]:
        block.append("- " + _truncate_line(ol))
    if len(old_lines) > MAX_SNIPPET_LINES_PER_HUNK:
        block.append(
            f"- ... ({len(old_lines) - MAX_SNIPPET_LINES_PER_HUNK} more removed lines; see GitHub link above)"
        )
    for nl in new_lines[:MAX_SNIPPET_LINES_PER_HUNK]:
        block.append("+ " + _truncate_line(nl))
    if len(new_lines) > MAX_SNIPPET_LINES_PER_HUNK:
        block.append(
            f"+ ... ({len(new_lines) - MAX_SNIPPET_LINES_PER_HUNK} more added lines; see GitHub link above)"
        )
    block.extend([fence, ""])
    return block


def render_category_report(
    category: str,
    collected: dict,
    previous_state: dict,
    current_state: dict,
    updated_envs: list[str],
    now_text: str,
    base_commit: str | None = None,
    head_commit: str | None = None,
    repo_url: str = REPO_URL,
) -> str:
    """Render `changes/added.md` or `changes/removed.md` without omitting any items."""
    assert category in ("added", "removed")
    titles = {
        "added": "Added — Bundle Additions Report",
        "removed": "Removed — Bundle Deletions Report",
    }
    descriptions = {
        "added": (
            "Records newly added bundle files and pure code insertions inside `bundles/` "
            "(after masking 2-character minified JS identifiers)."
        ),
        "removed": (
            "Records removed bundle files and pure code deletions inside `bundles/` "
            "(after masking 2-character minified JS identifiers)."
        ),
    }

    total_count = collected[f"total_{category}"]
    lines = [
        f"# {titles[category]}",
        "",
        f"- **Updated at**: `{now_text}`",
        f"- **Environments updated**: {', '.join(f'`{env}`' for env in updated_envs) if updated_envs else 'none'}",
        f"- **Total {category.capitalize()} items**: **{total_count}**",
        "- **Navigation**: [Summary (`CHANGES.md`)](../CHANGES.md) · [Build History (`HISTORY.md`)](../HISTORY.md) · [Added (`changes/added.md`)](added.md) · [Removed (`changes/removed.md`)](removed.md) · [Changed (`changes/changed.md`)](changed.md)",
        "",
        descriptions[category],
        "",
    ]

    if not updated_envs or total_count == 0:
        lines.append(f"No {category} bundle items were detected in this build update.")
        return "\n".join(lines).rstrip() + "\n"

    for env in updated_envs:
        env_data = collected["environments"].get(env) or {
            "files": [],
            "added": [],
            "removed": [],
            "changed": [],
        }
        old_build = (previous_state.get(env) or {}).get("build", "baseline")
        new_build = (current_state.get(env) or {}).get("build", "unknown")
        base_ref, head_ref = _resolve_env_refs(
            env, previous_state, current_state, base_commit, head_commit
        )
        compare_url = f"{repo_url}/compare/{base_ref}...{head_ref}"
        items = env_data[category]

        lines.extend([
            f"## `{env}` — `{old_build}` → `{new_build}`",
            "",
            f"- **{category.capitalize()} count**: **{len(items)}**",
            f"- **GitHub Compare**: [`{base_ref}...{head_ref}`]({compare_url})",
            "",
        ])

        if not items:
            lines.extend([f"No {category} items in `{env}`.", ""])
            continue

        # Only share inline details if an earlier environment in the same run has 100% identical actual diff content
        mirror_of = None
        for earlier_env in updated_envs:
            if earlier_env == env:
                break
            if (
                len(items) > 100
                and environments_have_identical_category_diff(collected, earlier_env, env, category)
            ):
                mirror_of = earlier_env
                break

        files_with_items = [
            f_res for f_res in env_data["files"] if f_res[category]
        ]

        if mirror_of:
            lines.extend([
                f"> `{env}` has identical `{category}` bundle diff content as `{mirror_of}` (**{len(items)}** {category} items across **{len(files_with_items)}** files). File-level GitHub diff links for `{env}` are listed below; see `{mirror_of}` above for the identical inline code blocks.",
                "",
            ])
            for f_res in files_with_items:
                f_path = f_res["path"]
                f_items = f_res[category]
                first_item = f_items[0]
                links = build_github_links(
                    f_path,
                    base_ref,
                    head_ref,
                    old_range=first_item["old_range"],
                    new_range=first_item["new_range"],
                    repo_url=repo_url,
                )
                lines.append(
                    f"- `{f_path}` — **{len(f_items)}** {category} item(s) · "
                    f"[GitHub File Diff]({links['file_diff_url']}) · "
                    f"[First Hunk]({links['hunk_url']})"
                )
            lines.append("")
            continue

        for f_res in files_with_items:
            f_path = f_res["path"]
            f_items = f_res[category]
            first_links = build_github_links(
                f_path,
                base_ref,
                head_ref,
                old_range=f_items[0]["old_range"],
                new_range=f_items[0]["new_range"],
                repo_url=repo_url,
            )
            lines.extend([
                "<details>",
                f"<summary><code>{html.escape(f_path)}</code> · <strong>{len(f_items)}</strong> {category} item(s)</summary>",
                "",
                f"- **File**: `{f_path}`",
                f"- **GitHub File Diff**: [View file diff on GitHub]({first_links['file_diff_url']})",
                "",
            ])
            for idx, item in enumerate(f_items, start=1):
                lines.extend(
                    _render_single_diff_item_lines(idx, item, base_ref, head_ref, repo_url)
                )
            lines.extend(["</details>", ""])

    return "\n".join(lines).rstrip() + "\n"


def write_paginated_changed_reports(
    root: Path,
    collected: dict,
    previous_state: dict,
    current_state: dict,
    updated_envs: list[str],
    now_text: str,
    base_commit: str | None = None,
    head_commit: str | None = None,
    repo_url: str = REPO_URL,
    max_part_bytes: int = MAX_CHANGED_PART_BYTES,
) -> dict:
    """Write `changes/changed.md` (index) and fixed-name `changes/changed/part-NNN.md` pages.

    - Every single Changed item is rendered individually across `changes/changed/part-NNN.md`
      with file name, before/after line numbers, before/after code, and GitHub diff links.
    - No Changed item is ever omitted.
    - Each part file is kept within `max_part_bytes` (default 450 KB, safely <= 500 KB).
    """
    if max_part_bytes < 4096:
        raise ValueError("max_part_bytes must be at least 4096 bytes")

    changes_dir = root / "changes"
    parts_dir = changes_dir / "changed"
    parts_dir.mkdir(parents=True, exist_ok=True)
    for stale in parts_dir.glob("part-*.md"):
        stale.unlink()

    total_changed = collected["total_changed"]

    # Build atomic item chunks to pack into pages <= max_part_bytes
    # Track per-environment and per-file metadata so the index can link to the exact part file.
    pages: list[dict] = []
    current_lines: list[str] = []
    current_bytes = 0
    current_item_count = 0
    current_files_set: list[str] = []
    header_reserve_bytes = 512
    budget = max_part_bytes - header_reserve_bytes

    file_to_parts: dict[str, list[int]] = {}
    env_to_parts: dict[str, list[int]] = {env: [] for env in updated_envs}
    mirrored_envs: dict[str, str] = {}
    total_rendered_items = 0

    def flush_current_page() -> None:
        nonlocal current_lines, current_bytes, current_item_count, current_files_set
        if not current_lines:
            return
        part_num = len(pages) + 1
        pages.append({
            "part_number": part_num,
            "filename": f"part-{part_num:03d}.md",
            "body_lines": current_lines,
            "item_count": current_item_count,
            "files": list(current_files_set),
        })
        current_lines = []
        current_bytes = 0
        current_item_count = 0
        current_files_set = []

    for env in updated_envs:
        env_data = collected["environments"].get(env) or {
            "files": [],
            "added": [],
            "removed": [],
            "changed": [],
        }
        items = env_data["changed"]
        if not items:
            continue

        # Check if an earlier environment has 100% identical actual Changed content
        mirror_of = None
        for earlier_env in updated_envs:
            if earlier_env == env:
                break
            if (
                len(items) > 100
                and environments_have_identical_category_diff(
                    collected, earlier_env, env, "changed"
                )
            ):
                mirror_of = earlier_env
                break

        if mirror_of:
            mirrored_envs[env] = mirror_of
            total_rendered_items += len(items)
            continue

        old_build = (previous_state.get(env) or {}).get("build", "baseline")
        new_build = (current_state.get(env) or {}).get("build", "unknown")
        base_ref, head_ref = _resolve_env_refs(
            env, previous_state, current_state, base_commit, head_commit
        )

        files_with_changed = [f_res for f_res in env_data["files"] if f_res["changed"]]
        for f_res in files_with_changed:
            f_path = f_res["path"]
            f_items = f_res["changed"]
            first_links = build_github_links(
                f_path,
                base_ref,
                head_ref,
                old_range=f_items[0]["old_range"],
                new_range=f_items[0]["new_range"],
                repo_url=repo_url,
            )

            for idx, item in enumerate(f_items, start=1):
                item_lines = _render_single_diff_item_lines(
                    idx, item, base_ref, head_ref, repo_url
                )
                if idx == 1 or not current_lines or f_path not in current_files_set:
                    section_header = [
                        f"## `{env}` · `{f_path}` ({old_build} → {new_build})",
                        "",
                        f"- **File**: `{f_path}` ({len(f_items)} changed item(s) total)",
                        f"- **GitHub File Diff**: [View file diff on GitHub]({first_links['file_diff_url']})",
                        "",
                    ]
                else:
                    section_header = []

                candidate_lines = section_header + item_lines
                candidate_bytes = len(("\n".join(candidate_lines) + "\n").encode("utf-8"))

                if current_lines and current_bytes + candidate_bytes > budget:
                    flush_current_page()
                    # Recompute section_header since this item now starts a fresh page
                    section_header = [
                        f"## `{env}` · `{f_path}` ({old_build} → {new_build} · continued)",
                        "",
                        f"- **File**: `{f_path}` ({len(f_items)} changed item(s) total)",
                        f"- **GitHub File Diff**: [View file diff on GitHub]({first_links['file_diff_url']})",
                        "",
                    ]
                    candidate_lines = section_header + item_lines
                    candidate_bytes = len(("\n".join(candidate_lines) + "\n").encode("utf-8"))

                part_num = len(pages) + 1
                if f_path not in current_files_set:
                    current_files_set.append(f_path)
                file_parts = file_to_parts.setdefault(f_path, [])
                if part_num not in file_parts:
                    file_parts.append(part_num)
                env_parts = env_to_parts.setdefault(env, [])
                if part_num not in env_parts:
                    env_parts.append(part_num)

                current_lines.extend(candidate_lines)
                current_bytes += candidate_bytes
                current_item_count += 1
                total_rendered_items += 1

    flush_current_page()

    written_sizes: list[int] = []
    total_pages = len(pages)
    for page in pages:
        part_num = page["part_number"]
        filename = page["filename"]
        nav_parts = ["[Index (`changes/changed.md`)](../changed.md)"]
        if part_num > 1:
            nav_parts.append(f"[← Part {part_num - 1:03d}](part-{part_num - 1:03d}.md)")
        if part_num < total_pages:
            nav_parts.append(f"[Part {part_num + 1:03d} →](part-{part_num + 1:03d}.md)")

        header_lines = [
            f"# Changed — Bundle Modifications Report (Part {part_num:03d} / {total_pages:03d})",
            "",
            f"- **Updated at**: `{now_text}`",
            f"- **Part**: `{part_num} / {total_pages}` (**{page['item_count']}** changed item(s) on this page)",
            f"- **Navigation**: {' · '.join(nav_parts)}",
            "",
        ]
        full_text = "\n".join(header_lines + page["body_lines"]).rstrip() + "\n"
        part_path = parts_dir / filename
        part_path.write_text(full_text, encoding="utf-8")
        size = part_path.stat().st_size
        written_sizes.append(size)

    # Render `changes/changed.md` as the navigable index & overview entry point
    index_lines = [
        "# Changed — Bundle Modifications Report",
        "",
        f"- **Updated at**: `{now_text}`",
        f"- **Environments updated**: {', '.join(f'`{env}`' for env in updated_envs) if updated_envs else 'none'}",
        f"- **Total Changed items**: **{total_changed}**",
        f"- **Report pages**: **{total_pages}** (`changes/changed/part-001.md` … `part-{total_pages:03d}.md`)" if total_pages else "- **Report pages**: **0**",
        f"- **Largest page**: `{max(written_sizes, default=0):,}` bytes",
        "- **Navigation**: [Summary (`CHANGES.md`)](../CHANGES.md) · [Build History (`HISTORY.md`)](../HISTORY.md) · [Added (`changes/added.md`)](added.md) · [Removed (`changes/removed.md`)](removed.md) · [Changed (`changes/changed.md`)](changed.md)",
        "",
        "Records fine-grained code replacements inside `bundles/` (after masking 2-character minified JS identifiers). "
        "Every independent modification hunk is listed across the fixed-name pages in `changes/changed/part-NNN.md` with before/after code and direct GitHub diff links.",
        "",
    ]

    if not updated_envs or total_changed == 0:
        index_lines.append("No changed bundle items were detected in this build update.")
    else:
        index_lines.extend([
            "## Changed Pages (`changes/changed/`)",
            "",
        ])
        for page, size in zip(pages, written_sizes):
            part_num = page["part_number"]
            filename = page["filename"]
            sample_files = ", ".join(f"`{p}`" for p in page["files"][:4])
            if len(page["files"]) > 4:
                sample_files += f", +{len(page['files']) - 4} more"
            index_lines.append(
                f"- [**Part {part_num:03d}** (`changed/{filename}`)](changed/{filename}) — "
                f"**{page['item_count']}** changed item(s) · {size:,} bytes · Files: {sample_files}"
            )
        index_lines.append("")

        for env in updated_envs:
            env_data = collected["environments"].get(env) or {
                "files": [],
                "added": [],
                "removed": [],
                "changed": [],
            }
            old_build = (previous_state.get(env) or {}).get("build", "baseline")
            new_build = (current_state.get(env) or {}).get("build", "unknown")
            base_ref, head_ref = _resolve_env_refs(
                env, previous_state, current_state, base_commit, head_commit
            )
            compare_url = f"{repo_url}/compare/{base_ref}...{head_ref}"
            items = env_data["changed"]
            files_with_changed = [f_res for f_res in env_data["files"] if f_res["changed"]]

            index_lines.extend([
                f"## `{env}` — `{old_build}` → `{new_build}`",
                "",
                f"- **Changed count**: **{len(items)}** across **{len(files_with_changed)}** file(s)",
                f"- **GitHub Compare**: [`{base_ref}...{head_ref}`]({compare_url})",
                "",
            ])

            if not items:
                index_lines.extend([f"No changed items in `{env}`.", ""])
                continue

            if env in mirrored_envs:
                mirror_of = mirrored_envs[env]
                index_lines.extend([
                    f"> `{env}` has identical `changed` bundle diff content as `{mirror_of}` (**{len(items)}** changed items across **{len(files_with_changed)}** files). Each file's direct GitHub diff links for `{env}` and the corresponding detail page in `changes/changed/` are listed below.",
                    "",
                ])
                for f_res in files_with_changed:
                    f_path = f_res["path"]
                    f_items = f_res["changed"]
                    mirror_path = f"bundles/{mirror_of}/{_strip_env_prefix(f_path, env)}"
                    part_nums = file_to_parts.get(mirror_path, [])
                    part_links_str = ", ".join(
                        f"[Part {pn:03d}](changed/part-{pn:03d}.md)" for pn in part_nums
                    )
                    links = build_github_links(
                        f_path,
                        base_ref,
                        head_ref,
                        old_range=f_items[0]["old_range"],
                        new_range=f_items[0]["new_range"],
                        repo_url=repo_url,
                    )
                    index_lines.append(
                        f"- `{f_path}` — **{len(f_items)}** changed item(s) · "
                        f"{part_links_str} · "
                        f"[GitHub File Diff]({links['file_diff_url']}) · "
                        f"[First Hunk]({links['hunk_url']})"
                    )
                index_lines.append("")
                continue

            for f_res in files_with_changed:
                f_path = f_res["path"]
                f_items = f_res["changed"]
                part_nums = file_to_parts.get(f_path, [])
                part_links_str = ", ".join(
                    f"[Part {pn:03d}](changed/part-{pn:03d}.md)" for pn in part_nums
                )
                links = build_github_links(
                    f_path,
                    base_ref,
                    head_ref,
                    old_range=f_items[0]["old_range"],
                    new_range=f_items[0]["new_range"],
                    repo_url=repo_url,
                )
                index_lines.append(
                    f"- `{f_path}` — **{len(f_items)}** changed item(s) · "
                    f"{part_links_str} · "
                    f"[GitHub File Diff]({links['file_diff_url']}) · "
                    f"[First Hunk]({links['hunk_url']})"
                )
            index_lines.append("")

    (changes_dir / "changed.md").write_text(
        "\n".join(index_lines).rstrip() + "\n", encoding="utf-8"
    )

    return {
        "total_changed": total_changed,
        "total_rendered_items": total_rendered_items,
        "pages": total_pages,
        "largest_page_bytes": max(written_sizes, default=0),
        "page_sizes": written_sizes,
    }


def write_fixed_change_reports(
    root: Path,
    previous_state: dict,
    current_state: dict,
    updated_envs: list[str],
    now_text: str,
    base_commit: str | None = None,
    head_commit: str | None = None,
    repo_url: str = REPO_URL,
    max_changed_part_bytes: int = MAX_CHANGED_PART_BYTES,
) -> dict:
    """Compute bundle diffs and overwrite `changes/added.md`, `changes/removed.md`, `changes/changed.md`, and `changes/changed/part-NNN.md`."""
    if base_commit is None:
        res = subprocess.run(
            ["git", "rev-parse", "HEAD"],
            cwd=root,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            check=False,
        )
        base_commit = res.stdout.strip() if res.returncode == 0 else "HEAD"

    collected = collect_bundle_diffs(
        root,
        base_ref=base_commit,
        head_ref=head_commit,
        environments=updated_envs,
    )

    changes_dir = root / "changes"
    changes_dir.mkdir(parents=True, exist_ok=True)

    for category, filename in (
        ("added", "added.md"),
        ("removed", "removed.md"),
    ):
        content = render_category_report(
            category=category,
            collected=collected,
            previous_state=previous_state,
            current_state=current_state,
            updated_envs=updated_envs,
            now_text=now_text,
            base_commit=base_commit,
            head_commit=head_commit,
            repo_url=repo_url,
        )
        (changes_dir / filename).write_text(content, encoding="utf-8")

    changed_pagination = write_paginated_changed_reports(
        root=root,
        collected=collected,
        previous_state=previous_state,
        current_state=current_state,
        updated_envs=updated_envs,
        now_text=now_text,
        base_commit=base_commit,
        head_commit=head_commit,
        repo_url=repo_url,
        max_part_bytes=max_changed_part_bytes,
    )
    collected["changed_pagination"] = changed_pagination
    return collected


def render_changes(
    previous_state: dict,
    current_state: dict,
    updated_envs: list,
    now_text: str,
    diff_report_path: str | None = None,
    collected_diffs: dict | None = None,
    base_commit: str | None = None,
    head_commit: str | None = None,
    repo_url: str = REPO_URL,
) -> str:
    """Render `CHANGES.md` as the entry point for the latest build update."""
    subject = (
        f"Bloxd build update — {now_text} ("
        + ", ".join(f"{env}={current_state[env]['build']}" for env in updated_envs)
        + ")"
    )
    lines = [
        subject,
        "",
        "Bundle files use stable Webpack paths; original CDN names and hashes remain in .monitor-state.json.",
        "Fixed reports: [Added](changes/added.md) · [Removed](changes/removed.md) · [Changed](changes/changed.md) · [Build History](HISTORY.md)",
    ]
    if diff_report_path:
        lines.extend(["", f"Readable per-file diff: [{diff_report_path}]({diff_report_path})"])

    if collected_diffs is not None:
        lines.extend([
            "",
            "| Environment | Previous Build | Current Build | Added | Removed | Changed | Size Delta | GitHub Diff |",
            "|---|---|---|---:|---:|---:|---:|---|",
        ])
        for environment in updated_envs:
            record = current_state[environment]
            previous = previous_state.get(environment) or {}
            old_build = previous.get("build", "baseline")
            new_build = record.get("build", "unknown")
            manifest_diff = diff_manifests(previous.get("files") or [], record.get("files") or [])
            env_diff = collected_diffs.get("environments", {}).get(environment)
            if env_diff is not None:
                added_cnt = len(env_diff["added"])
                removed_cnt = len(env_diff["removed"])
                changed_cnt = len(env_diff["changed"])
            else:
                added_cnt = len(manifest_diff["added"])
                removed_cnt = len(manifest_diff["removed"])
                changed_cnt = len(manifest_diff["changed"])
            base_ref, head_ref = _resolve_env_refs(
                environment, previous_state, current_state, base_commit, head_commit
            )
            compare_url = f"{repo_url}/compare/{base_ref}...{head_ref}"
            snapshot_url = (
                f"{repo_url}/commit/{head_ref}"
                if re.fullmatch(r"[0-9a-f]{40}", head_ref)
                else f"{repo_url}/tree/{head_ref}"
            )
            lines.append(
                f"| {environment} | `{old_build}` | `{new_build}` | "
                f"[{added_cnt}](changes/added.md) | [{removed_cnt}](changes/removed.md) | "
                f"[{changed_cnt}](changes/changed.md) | {human_delta(manifest_diff['size_delta'])} | "
                f"[Compare]({compare_url}) · [Snapshot]({snapshot_url}) |"
            )

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
        env_diff = (collected_diffs or {}).get("environments", {}).get(environment)
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
        if env_diff is not None:
            lines.append(
                f"+ Diff items (2-char JS identifiers filtered): "
                f"Added {len(env_diff['added'])}, Removed {len(env_diff['removed'])}, Changed {len(env_diff['changed'])}"
            )
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


HISTORY_HEADER = """# Bloxd Build History

All detected Bloxd build updates across `bloxd.io`, `preprod.bloxd.io`, and `staging.bloxd.io`.
New build entries are appended automatically on every detected build update; historical entries are never overwritten or deleted.

Each build snapshot is preserved in Git commit history and tagged as `build/<environment>/<build_id>`, allowing direct navigation to any historical snapshot, its reports (`CHANGES.md`, `changes/added.md`, `changes/removed.md`, `changes/changed.md`), and the exact GitHub Compare diff.

| 日時 (JST) | Environment | Build ID | Previous Build ID | Added | Removed | Changed | Size Delta | Snapshot / Commit | Diff / Reports |
|---|---|---|---|---:|---:|---:|---:|---|---|
"""


def format_history_row(
    timestamp_text: str,
    environment: str,
    build_id: str,
    previous_build_id: str,
    added_count: int,
    removed_count: int,
    changed_count: int,
    size_delta: int,
    base_ref: str | None = None,
    head_ref: str | None = None,
    repo_url: str = REPO_URL,
) -> str:
    """Format a single markdown table row for `HISTORY.md` using immutable tags or commit SHAs.

    Never generates `/blob/main/`, `/compare/...main`, or `/commits/main`.
    """
    clean_time = timestamp_text.replace(" JST", "").replace("T", " ").strip()
    if not base_ref or base_ref == "HEAD":
        resolved_base = build_tag_name(environment, previous_build_id)
    else:
        resolved_base = base_ref

    if not head_ref or head_ref == "HEAD":
        resolved_head = build_tag_name(environment, build_id)
    else:
        resolved_head = head_ref

    is_commit_sha = bool(re.fullmatch(r"[0-9a-f]{40}", resolved_head))
    short_label = resolved_head[:7] if is_commit_sha else resolved_head
    snapshot_url = (
        f"{repo_url}/commit/{resolved_head}"
        if is_commit_sha
        else f"{repo_url}/tree/{resolved_head}"
    )
    compare_url = f"{repo_url}/compare/{resolved_base}...{resolved_head}"
    changes_at_ref = f"{repo_url}/blob/{resolved_head}/CHANGES.md"
    return (
        f"| {clean_time} | {environment} | `{build_id}` | `{previous_build_id}` | "
        f"{added_count} | {removed_count} | {changed_count} | {human_delta(size_delta)} | "
        f"[`{short_label}`]({snapshot_url}) | [Compare]({compare_url}) · [Report]({changes_at_ref}) |"
    )


def update_history_file(
    history_path: Path,
    previous_state: dict,
    current_state: dict,
    updated_envs: list[str],
    now_text: str,
    collected_diffs: dict | None,
    base_commit: str | None = None,
    head_commit: str | None = None,
    repo_url: str = REPO_URL,
) -> None:
    """Append new build history rows to `HISTORY.md` without modifying or deleting past rows."""
    if history_path.is_file():
        existing = history_path.read_text(encoding="utf-8")
    else:
        existing = ""

    if not existing.strip():
        lines = HISTORY_HEADER.rstrip().splitlines()
    else:
        lines = existing.rstrip().splitlines()

    for env in updated_envs:
        record = current_state[env]
        prev = previous_state.get(env) or {}
        old_build = prev.get("build", "baseline")
        new_build = record.get("build", "unknown")
        manifest_diff = diff_manifests(prev.get("files") or [], record.get("files") or [])
        env_diff = (collected_diffs or {}).get("environments", {}).get(env)
        if env_diff is not None:
            added_cnt = len(env_diff["added"])
            removed_cnt = len(env_diff["removed"])
            changed_cnt = len(env_diff["changed"])
        else:
            added_cnt = len(manifest_diff["added"])
            removed_cnt = len(manifest_diff["removed"])
            changed_cnt = len(manifest_diff["changed"])

        base_ref, head_ref = _resolve_env_refs(
            env, previous_state, current_state, base_commit, head_commit
        )
        row = format_history_row(
            timestamp_text=now_text,
            environment=env,
            build_id=new_build,
            previous_build_id=old_build,
            added_count=added_cnt,
            removed_count=removed_cnt,
            changed_count=changed_cnt,
            size_delta=manifest_diff["size_delta"],
            base_ref=base_ref,
            head_ref=head_ref,
            repo_url=repo_url,
        )
        lines.append(row)

    history_path.write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")


def readable_diff_report_path(now_text: str, state: dict, updated_envs: list) -> str:
    """Return the fixed entry report path under `changes/`."""
    return "changes/changed.md"


def render_readable_diff_report(
    root: Path,
    title: str,
    base_ref: str = "HEAD",
    exclude_paths: set[str] | None = None,
    head_ref: str | None = None,
    only_bundles: bool = False,
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

    if head_ref:
        tracked = git_output("diff", "--name-only", "-z", base_ref, head_ref, "--").split("\0")
        untracked = []
    else:
        tracked = git_output("diff", "--name-only", "-z", base_ref, "--").split("\0")
        untracked = git_output("ls-files", "--others", "--exclude-standard", "-z").split("\0")
    paths = sorted({path for path in tracked + untracked if path})
    sections = []
    excluded = set(exclude_paths or ())
    included = binary_count = identifier_only_count = hunk_count = 0
    fence = chr(96) * 3

    for relative in paths:
        # Per-build reports are generated from bundle changes, never diffed recursively.
        if relative in excluded or relative.startswith(("diffs/", "changes/")):
            continue
        if only_bundles and not is_bundle_path(relative):
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
        if head_ref:
            new_result = subprocess.run(
                ["git", "show", f"{head_ref}:{relative}"],
                cwd=root,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                check=False,
            )
            new_exists = new_result.returncode == 0
            new_bytes = new_result.stdout if new_exists else b""
        else:
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


def split_top_level_file_sections(report: str) -> tuple[list[str], list[list[str]]]:
    """Split the report header from balanced top-level per-file <details> blocks."""
    prefix: list[str] = []
    blocks: list[list[str]] = []
    current: list[str] | None = None
    depth = 0
    seen_file_section = False
    for line in report.splitlines():
        if line == "<details>":
            if depth == 0:
                current = [line]
                seen_file_section = True
            else:
                assert current is not None
                current.append(line)
            depth += 1
            continue
        if line == "</details>":
            if depth <= 0 or current is None:
                raise RuntimeError("Unbalanced closing </details> in generated diff report")
            current.append(line)
            depth -= 1
            if depth == 0:
                blocks.append(current)
                current = None
            continue
        if depth:
            assert current is not None
            current.append(line)
        elif not seen_file_section:
            prefix.append(line)
    if depth or current is not None:
        raise RuntimeError("Unbalanced <details> in generated diff report")
    return prefix, blocks


def split_oversized_file_section(
    block: list[str], max_part_bytes: int
) -> list[list[str]]:
    """Split a large file wrapper between independent hunk boxes, if necessary."""
    encoded_size = len(("\n".join(block) + "\n").encode("utf-8"))
    if encoded_size <= max_part_bytes:
        return [block]

    nested: list[tuple[int, int, list[str]]] = []
    nested_start: int | None = None
    depth = 1
    for index, line in enumerate(block[1:], start=1):
        if line == "<details>":
            if depth == 1:
                nested_start = index
            depth += 1
        elif line == "</details>":
            depth -= 1
            if depth == 1 and nested_start is not None:
                nested.append((nested_start, index + 1, block[nested_start:index + 1]))
                nested_start = None
            elif depth < 0:
                raise RuntimeError("Unbalanced nested diff section")
    if depth != 0:
        raise RuntimeError("Unbalanced file wrapper while splitting an oversized diff section")
    if not nested:
        if encoded_size > MAX_SINGLE_DIFF_HUNK_BYTES:
            raise RuntimeError(
                f"One diff section is {encoded_size:,} bytes; refusing to create a GitHub-incompatible report"
            )
        return [block]

    prefix = block[:nested[0][0]]
    suffix = block[nested[-1][1]:]
    groups: list[list[list[str]]] = []
    current: list[list[str]] = []
    current_size = len(("\n".join(prefix + suffix) + "\n").encode("utf-8"))

    for _, _, hunk in nested:
        hunk_size = len(("\n".join(hunk) + "\n").encode("utf-8"))
        if hunk_size > MAX_SINGLE_DIFF_HUNK_BYTES:
            raise RuntimeError(
                f"One diff hunk is {hunk_size:,} bytes; refusing to create a GitHub-incompatible report"
            )
        if current and current_size + hunk_size > max_part_bytes:
            groups.append(current)
            current = []
            current_size = len(("\n".join(prefix + suffix) + "\n").encode("utf-8"))
        if hunk_size + current_size > MAX_SINGLE_DIFF_HUNK_BYTES:
            raise RuntimeError("A per-file diff section exceeds the safe GitHub file-size limit")
        current.append(hunk)
        current_size += hunk_size
    if current:
        groups.append(current)

    # Repeat the per-file wrapper and heading on every page fragment.
    return [prefix + [line for hunk in group for line in hunk] + suffix for group in groups]


def write_paginated_readable_diff_report(
    root: Path,
    title: str,
    index_relative_path: str,
    base_ref: str = "HEAD",
    head_ref: str | None = None,
    max_part_bytes: int = MAX_DIFF_REPORT_PART_BYTES,
) -> dict:
    """Write a navigable multi-page diff report without oversized GitHub files."""
    if max_part_bytes < 1024:
        raise ValueError("max_part_bytes must be at least 1024 bytes")
    index_path = Path(index_relative_path)
    if index_path.is_absolute() or ".." in index_path.parts or not str(index_path).startswith(("diffs/", "changes/")):
        raise ValueError("The report index must be inside diffs/ or changes/")

    report = render_readable_diff_report(root, title, base_ref=base_ref, head_ref=head_ref)
    prefix, file_blocks = split_top_level_file_sections(report)
    expanded_blocks: list[list[str]] = []
    for block in file_blocks:
        expanded_blocks.extend(split_oversized_file_section(block, max_part_bytes))

    pages: list[list[list[str]]] = []
    current_page: list[list[str]] = []
    current_size = 0
    page_budget = max_part_bytes - 1024
    for block in expanded_blocks:
        block_size = len(("\n".join(block) + "\n").encode("utf-8"))
        if current_page and current_size + block_size > page_budget:
            pages.append(current_page)
            current_page = []
            current_size = 0
        if block_size > page_budget and block_size > MAX_SINGLE_DIFF_HUNK_BYTES:
            raise RuntimeError(f"A file diff is too large to paginate safely: {block_size:,} bytes")
        current_page.append(block)
        current_size += block_size
    if current_page:
        pages.append(current_page)

    destination = root / index_path.parent
    parts_dir = destination / "parts"
    parts_dir.mkdir(parents=True, exist_ok=True)
    for stale in parts_dir.glob("part-*.md"):
        stale.unlink()

    part_links: list[str] = []
    written_sizes: list[int] = []
    for number, page_blocks in enumerate(pages, start=1):
        filename = f"part-{number:03d}.md"
        page = [
            f"# Readable build diff — {title}",
            "",
            f"- Part: {number} / {len(pages)}",
            f"- File sections: {len(page_blocks)}",
            "",
            *[line for block in page_blocks for line in block],
        ]
        content = "\n".join(page).rstrip() + "\n"
        page_path = parts_dir / filename
        page_path.write_text(content, encoding="utf-8")
        page_size = page_path.stat().st_size
        if page_size > MAX_SINGLE_DIFF_HUNK_BYTES:
            raise RuntimeError(f"Generated report page exceeds safe size: {page_path} ({page_size:,} bytes)")
        written_sizes.append(page_size)
        part_links.append(f"- [Part {number:03d}](parts/{filename}) — {len(page_blocks)} file sections")

    index_lines = list(prefix)
    index_lines.extend([
        "## Diff pages",
        "",
        f"- File sections: {len(expanded_blocks)}",
        f"- Pages: {len(pages)}",
        f"- Largest page: {max(written_sizes, default=0):,} bytes",
        "",
        *(part_links or ["No changed text or binary files were found."]),
    ])
    index_path_full = root / index_path
    index_path_full.parent.mkdir(parents=True, exist_ok=True)
    index_path_full.write_text("\n".join(index_lines).rstrip() + "\n", encoding="utf-8")

    result = {
        "index": str(index_path).replace("\\", "/"),
        "pages": len(pages),
        "file_sections": len(expanded_blocks),
        "largest_page_bytes": max(written_sizes, default=0),
        "total_page_bytes": sum(written_sizes),
    }
    print("Paginated readable diff report: " + json.dumps(result, ensure_ascii=False))
    return result


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
        "`CHANGES.md` summarizes the latest update and links to fixed diff reports (`changes/added.md`, `changes/removed.md`, `changes/changed.md` + `changes/changed/part-NNN.md`) and the cumulative build log (`HISTORY.md`).",
        "Each report is updated in place on every build and links directly to immutable GitHub file diffs, hunk anchors, and before/after source lines; JavaScript comparison masks only two-character identifiers.",
        "",
        "## Reports & History",
        "",
        "- [`CHANGES.md`](CHANGES.md) — Latest build update summary",
        "- [`changes/added.md`](changes/added.md) — Newly added bundle files and code insertions",
        "- [`changes/removed.md`](changes/removed.md) — Removed bundle files and code deletions",
        "- [`changes/changed.md`](changes/changed.md) — Paginated index of all fine-grained code modifications (`changes/changed/part-NNN.md`)",
        "- [`HISTORY.md`](HISTORY.md) — Cumulative history of all detected builds across environments",
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


def _install_post_commit_tag_hook(root: Path) -> None:
    """Install a Git post-commit hook that tags new build commits and pushes the tags."""
    git_dir = root / ".git"
    if not git_dir.is_dir():
        return
    hooks_dir = git_dir / "hooks"
    hooks_dir.mkdir(parents=True, exist_ok=True)
    hook_path = hooks_dir / "post-commit"
    hook_script = """#!/usr/bin/env bash
set -euo pipefail
ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"
python3 - << 'PY'
import json, subprocess, sys
from pathlib import Path
sys.path.insert(0, "scripts")
import monitor

state_path = Path(".monitor-state.json")
if not state_path.is_file():
    raise SystemExit(0)
state = json.loads(state_path.read_text(encoding="utf-8"))
remote_res = subprocess.run(["git", "remote"], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, check=False)
has_origin = "origin" in remote_res.stdout.splitlines()

for env, rec in state.items():
    build_id = rec.get("build")
    if not build_id:
        continue
    tag = monitor.build_tag_name(env, str(build_id))
    existing = subprocess.run(
        ["git", "rev-parse", "-q", "--verify", f"refs/tags/{tag}^{{commit}}"],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        check=False,
    )
    if existing.returncode != 0:
        monitor.ensure_build_tag(Path("."), env, str(build_id), target_commit="HEAD", push=has_origin)
PY
"""
    hook_path.write_text(hook_script, encoding="utf-8")
    hook_path.chmod(0o755)


def main() -> int:
    if len(sys.argv) > 1 and sys.argv[1] == "--tag-current-builds":
        push_flag = "--push" in sys.argv[2:]
        state = load_state()
        tags = ensure_build_tags_for_state(
            ROOT, state, target_commit="HEAD", push=push_flag
        )
        print("Ensured build tags: " + ", ".join(tags))
        return 0

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
        head_res = subprocess.run(
            ["git", "rev-parse", "HEAD"],
            cwd=ROOT,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            check=False,
        )
        base_commit = head_res.stdout.strip() if head_res.returncode == 0 else "HEAD"

        # Ensure previous build tags exist on base_commit if they haven't been created yet
        if base_commit != "HEAD":
            for env in updated:
                prev_build = (previous.get(env) or {}).get("build")
                if prev_build:
                    tag = build_tag_name(env, str(prev_build))
                    exists_res = subprocess.run(
                        ["git", "rev-parse", "-q", "--verify", f"refs/tags/{tag}^{{commit}}"],
                        cwd=ROOT,
                        stdout=subprocess.PIPE,
                        stderr=subprocess.PIPE,
                        text=True,
                        check=False,
                    )
                    if exists_res.returncode != 0:
                        ensure_build_tag(ROOT, env, str(prev_build), target_commit=base_commit, push=False)

        _install_post_commit_tag_hook(ROOT)

        STATE_PATH.write_text(
            json.dumps(persistent, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )
        README_PATH.write_text(render_readme(persistent), encoding="utf-8")
        now_text = datetime.now(JST).strftime("%Y-%m-%dT%H:%M JST")

        collected = write_fixed_change_reports(
            ROOT,
            previous_state=previous,
            current_state=persistent,
            updated_envs=updated,
            now_text=now_text,
            base_commit=base_commit,
        )
        report_path = readable_diff_report_path(now_text, persistent, updated)
        CHANGES_PATH.write_text(
            render_changes(
                previous,
                persistent,
                updated,
                now_text,
                report_path,
                collected_diffs=collected,
                base_commit=base_commit,
            ),
            encoding="utf-8",
        )
        update_history_file(
            HISTORY_PATH,
            previous_state=previous,
            current_state=persistent,
            updated_envs=updated,
            now_text=now_text,
            collected_diffs=collected,
            base_commit=base_commit,
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
