import hashlib
import importlib.util
import json
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path
from unittest import mock

SCRIPT = Path(__file__).resolve().parents[1] / "scripts" / "monitor.py"
SPEC = importlib.util.spec_from_file_location("monitor", SCRIPT)
monitor = importlib.util.module_from_spec(SPEC)
assert SPEC.loader is not None
sys.modules["monitor"] = monitor
SPEC.loader.exec_module(monitor)

RUNTIME_SNIPPET = (
    'r.u=WW=>"static/js/build123."+({15:"alphaChunk"}[WW]||WW)+"."+'
    '{15:"aaaa1111",16:"bbbb2222"}[WW]+".chunk.js",'
    'r.miniCssF=WW=>"static/css/build123."+({}[WW]||WW)+"."+'
    '{25:"cccc3333"}[WW]+".chunk.css"'
)
HOME_HTML = (
    '<script src="/static/js/build123.main.deadbeef.js"></script>'
    '<link href="/static/css/build123.main.cafe0000.css">'
)


class FakeResponse:
    def __init__(self, body=b"", content_type="application/javascript", status=200):
        self.status = status
        self.headers = {"Content-Type": content_type}
        self._body = body
        self._read = False

    def read(self, size=-1):
        if self._read:
            return b""
        self._read = True
        return self._body

    def __enter__(self):
        return self

    def __exit__(self, *args):
        return False


class MonitorTests(unittest.TestCase):
    def patch_paths(self, root: Path) -> None:
        original_root = monitor.ROOT
        original_bundles = monitor.BUNDLES_DIR
        original_changes_dir = monitor.CHANGES_DIR
        original_added = monitor.ADDED_REPORT_PATH
        original_removed = monitor.REMOVED_REPORT_PATH
        original_changed = monitor.CHANGED_REPORT_PATH
        original_changes = monitor.CHANGES_PATH
        original_history = monitor.HISTORY_PATH

        monitor.ROOT = root
        monitor.BUNDLES_DIR = root / "bundles"
        monitor.CHANGES_DIR = root / "changes"
        monitor.ADDED_REPORT_PATH = monitor.CHANGES_DIR / "added.md"
        monitor.REMOVED_REPORT_PATH = monitor.CHANGES_DIR / "removed.md"
        monitor.CHANGED_REPORT_PATH = monitor.CHANGES_DIR / "changed.md"
        monitor.CHANGED_PARTS_DIR = monitor.CHANGES_DIR / "changed"
        monitor.CHANGES_PATH = root / "CHANGES.md"
        monitor.HISTORY_PATH = root / "HISTORY.md"

        self.addCleanup(setattr, monitor, "ROOT", original_root)
        self.addCleanup(setattr, monitor, "BUNDLES_DIR", original_bundles)
        self.addCleanup(setattr, monitor, "CHANGES_DIR", original_changes_dir)
        self.addCleanup(setattr, monitor, "ADDED_REPORT_PATH", original_added)
        self.addCleanup(setattr, monitor, "REMOVED_REPORT_PATH", original_removed)
        self.addCleanup(setattr, monitor, "CHANGED_REPORT_PATH", original_changed)
        self.addCleanup(setattr, monitor, "CHANGED_PARTS_DIR", original_changed.parent / "changed")
        self.addCleanup(setattr, monitor, "CHANGES_PATH", original_changes)
        self.addCleanup(setattr, monitor, "HISTORY_PATH", original_history)

    def patch_workers(self, count: int) -> None:
        original = monitor.WORKERS
        monitor.WORKERS = count
        self.addCleanup(setattr, monitor, "WORKERS", original)

    def patch_beautify(self, enabled: bool) -> None:
        original = monitor.BEAUTIFY
        monitor.BEAUTIFY = enabled
        self.addCleanup(setattr, monitor, "BEAUTIFY", original)

    def patch_state_files(self, root: Path) -> tuple[Path, Path]:
        state_path = root / ".monitor-state.json"
        readme_path = root / "README.md"
        original_state, original_readme = monitor.STATE_PATH, monitor.README_PATH
        monitor.STATE_PATH = state_path
        monitor.README_PATH = readme_path
        self.addCleanup(setattr, monitor, "STATE_PATH", original_state)
        self.addCleanup(setattr, monitor, "README_PATH", original_readme)
        return state_path, readme_path

    def patch_responses(self, responses) -> None:
        calls = iter(responses)

        def fake_urlopen(request, timeout=None):
            return next(calls)

        patcher = mock.patch.object(monitor.urllib.request, "urlopen", side_effect=fake_urlopen)
        patcher.start()
        self.addCleanup(patcher.stop)

    # --- bundle reference extraction ---

    def test_extracts_relative_bundle_for_each_environment(self):
        for host in monitor.SITES:
            with self.subTest(host=host):
                html = '<script src="/static/js/build123.main.deadbeef.js"></script>'
                self.assertEqual(
                    monitor.find_main_bundle(html, host),
                    (f"https://{host}/static/js/build123.main.deadbeef.js", "build123", "deadbeef"),
                )

    def test_extracts_matching_absolute_bundle(self):
        html = '<script src="https://preprod.bloxd.io/static/js/pre123.main.abcdef12.js"></script>'
        self.assertEqual(
            monitor.find_main_bundle(html, "preprod.bloxd.io"),
            ("https://preprod.bloxd.io/static/js/pre123.main.abcdef12.js", "pre123", "abcdef12"),
        )

    def test_ignores_absolute_bundle_from_another_environment(self):
        html = '<script src="https://staging.bloxd.io/static/js/stg123.main.abcdef12.js"></script>'
        with self.assertRaises(RuntimeError):
            monitor.find_main_bundle(html, "bloxd.io")

    def test_rejects_missing_bundle(self):
        with self.assertRaises(RuntimeError):
            monitor.find_main_bundle("<html>no bundle reference</html>", "bloxd.io")

    def test_find_main_css_relative(self):
        self.assertEqual(monitor.find_main_css(HOME_HTML, "bloxd.io"), "static/css/build123.main.cafe0000.css")

    def test_find_main_css_skips_other_host_and_handles_absent(self):
        html = '<link href="https://staging.bloxd.io/static/css/stg123.main.abcdef12.css">'
        self.assertEqual(monitor.find_main_css(html, "bloxd.io"), None)
        self.assertEqual(monitor.find_main_css("<html></html>", "bloxd.io"), None)

    # --- webpack chunk map parsing ---

    def test_parse_runtime_assets_lists_all_chunks(self):
        assets = monitor.parse_runtime_assets("var r;" + RUNTIME_SNIPPET + ";")
        self.assertEqual(
            assets,
            [
                "static/css/build123.25.cccc3333.chunk.css",
                "static/js/build123.16.bbbb2222.chunk.js",
                "static/js/build123.alphaChunk.aaaa1111.chunk.js",
            ],
        )

    def test_parse_runtime_assets_ignores_unrelated_maps(self):
        snippet = 'x.f=WW=>"static/img/"+({1:"a"}[WW]||WW)+"."+{1:"11111111"}[WW]+".png"'
        with self.assertRaises(RuntimeError):
            monitor.parse_runtime_assets(snippet)

    # --- stored-file preparation (beautify happens in place) ---

    def test_prepare_reuses_matching_stored_file_without_network(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            self.patch_paths(root)
            stored = monitor.BUNDLES_DIR / "bloxd.io" / "chunks" / "js" / "alphaChunk.js"
            stored.parent.mkdir(parents=True)
            stored.write_bytes(b"pretty printed bytes")
            entry = {
                "path": "bundles/bloxd.io/chunks/js/alphaChunk.js",
                "identity": "chunk.js:alphaChunk",
                "cdn_hash": "aaaa1111",
                "sha256": hashlib.sha256(b"pretty printed bytes").hexdigest(),
                "size": 20,
            }

            def fail(*args, **kwargs):
                raise AssertionError("network must not be used")

            with mock.patch.object(monitor.urllib.request, "urlopen", side_effect=fail):
                name, needs = monitor.prepare_bundle(
                    "static/js/build123.alphaChunk.aaaa1111.chunk.js",
                    "bloxd.io",
                    {"chunk.js:alphaChunk": entry},
                    previous_beautified=True,
                    main_name="build123.main.deadbeef.js",
                )
            self.assertEqual((name, needs), ("chunks/js/alphaChunk.js", False))

    def test_prepare_copies_from_sibling_environment(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            self.patch_paths(root)
            sibling = monitor.BUNDLES_DIR / "bloxd.io" / "chunks" / "js" / "alphaChunk.js"
            sibling.parent.mkdir(parents=True)
            sibling.write_bytes(b"shared beautified bytes")
            entry = {
                "path": "bundles/bloxd.io/chunks/js/alphaChunk.js",
                "identity": "chunk.js:alphaChunk",
                "cdn_hash": "aaaa1111",
                "sha256": hashlib.sha256(b"shared beautified bytes").hexdigest(),
                "size": 23,
            }

            def fail(*args, **kwargs):
                raise AssertionError("network must not be used")

            with mock.patch.object(monitor.urllib.request, "urlopen", side_effect=fail):
                name, needs = monitor.prepare_bundle(
                    "static/js/build123.alphaChunk.aaaa1111.chunk.js",
                    "staging.bloxd.io",
                    {},
                    previous_beautified=True,
                    main_name="build123.main.deadbeef.js",
                    cached_candidates_by_identity={
                        "chunk.js:alphaChunk": [(entry, True)]
                    },
                )
            copied = monitor.BUNDLES_DIR / "staging.bloxd.io" / "chunks" / "js" / "alphaChunk.js"
            self.assertEqual((name, needs), ("chunks/js/alphaChunk.js", False))
            self.assertEqual(copied.read_bytes(), b"shared beautified bytes")

    def test_prepare_redownloads_when_previous_snapshot_was_raw(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            self.patch_paths(root)
            stale = monitor.BUNDLES_DIR / "bloxd.io" / "chunks" / "js" / "alphaChunk.js"
            stale.parent.mkdir(parents=True)
            stale.write_bytes(b"raw minified leftovers")
            body = b"fresh raw bytes"
            self.patch_responses([
                FakeResponse(body=body, content_type="application/javascript"),
            ])
            entry = {
                "path": "bundles/bloxd.io/chunks/js/alphaChunk.js",
                "identity": "chunk.js:alphaChunk",
                "cdn_hash": "aaaa1111",
                "sha256": hashlib.sha256(b"raw minified leftovers").hexdigest(),
                "size": 20,
            }
            name, needs = monitor.prepare_bundle(
                "static/js/build123.alphaChunk.aaaa1111.chunk.js",
                "bloxd.io",
                {"chunk.js:alphaChunk": entry},
                previous_beautified=False,
                main_name="build123.main.deadbeef.js",
            )
            self.assertEqual((name, needs), ("chunks/js/alphaChunk.js", True))
            self.assertEqual(stale.read_bytes(), body)

    def test_prepare_refreshes_unknown_local_file(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            self.patch_paths(root)
            unknown = monitor.BUNDLES_DIR / "bloxd.io" / "chunks" / "js" / "alphaChunk.js"
            unknown.parent.mkdir(parents=True)
            unknown.write_bytes(b"orphan bytes")
            self.patch_responses([
                FakeResponse(body=b"fresh bytes", content_type="application/javascript"),
            ])
            name, needs = monitor.prepare_bundle(
                "static/js/build123.alphaChunk.aaaa1111.chunk.js",
                "bloxd.io",
                {},
                previous_beautified=True,
                main_name="build123.main.deadbeef.js",
            )
            self.assertEqual((name, needs), ("chunks/js/alphaChunk.js", True))
            self.assertEqual(unknown.read_bytes(), b"fresh bytes")

    def test_beautify_file_js_is_multiline_and_deterministic(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            original = monitor.BEAUTIFY
            monitor.BEAUTIFY = True
            self.addCleanup(setattr, monitor, "BEAUTIFY", original)
            one = root / "a.chunk.js"
            two = root / "b.chunk.js"
            one.write_bytes(b'var x={a:1,b:2};if(x.a){console.log(x.a,x.b)};')
            two.write_bytes(b'var x={a:1,b:2};if(x.a){console.log(x.a,x.b)};')
            monitor.beautify_file(str(one))
            monitor.beautify_file(str(two))
            text = one.read_text(encoding="utf-8")
            self.assertIn("\n", text)
            self.assertEqual(text, two.read_text(encoding="utf-8"))  # deterministic
            self.assertIn("console.log", text)  # semantics preserved

    def test_beautify_file_css(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            original = monitor.BEAUTIFY
            monitor.BEAUTIFY = True
            self.addCleanup(setattr, monitor, "BEAUTIFY", original)
            target = root / "a.chunk.css"
            target.write_bytes(b"body{color:red;margin:0}")
            monitor.beautify_file(str(target))
            text = target.read_text(encoding="utf-8")
            self.assertIn("\n", text)
            self.assertIn("color: red", text)

    def test_human_size(self):
        self.assertEqual(monitor.human_size(0), "0 B")
        self.assertEqual(monitor.human_size(1023), "1023 B")
        self.assertEqual(monitor.human_size(2048), "2.00 KB")
        self.assertEqual(monitor.human_size(2226995), "2.12 MB")

    def test_fetch_bundle_writes_file_and_returns_digest(self):
        body = b"console.log('bundle');"
        with tempfile.TemporaryDirectory() as tmp:
            destination = Path(tmp) / "env" / "build.main.deadbeef.js"
            with mock.patch.object(
                monitor.urllib.request, "urlopen", return_value=FakeResponse(body=body)
            ):
                digest, size = monitor.fetch_bundle("https://bloxd.io/static/js/x.js", destination)
            self.assertEqual(size, len(body))
            self.assertEqual(digest, hashlib.sha256(body).hexdigest())
            self.assertEqual(destination.read_bytes(), body)
            self.assertFalse(destination.with_name(destination.name + ".tmp").exists())

    def test_fetch_bundle_retries_rate_limit_and_honors_retry_after(self):
        url = "https://bloxd.io/static/js/x.js"
        body = b"console.log('retried bundle');"
        rate_limited = monitor.urllib.error.HTTPError(
            url, 429, "Too Many Requests", {"Retry-After": "7"}, None
        )
        with tempfile.TemporaryDirectory() as tmp:
            destination = Path(tmp) / "build.main.deadbeef.js"
            with (
                mock.patch.object(
                    monitor.urllib.request,
                    "urlopen",
                    side_effect=[rate_limited, FakeResponse(body=body)],
                ) as urlopen,
                mock.patch.object(monitor.time, "sleep") as sleep,
            ):
                digest, size = monitor.fetch_bundle(url, destination)
            self.assertEqual(urlopen.call_count, 2)
            sleep.assert_called_once_with(7.0)
            self.assertEqual(size, len(body))
            self.assertEqual(digest, hashlib.sha256(body).hexdigest())
            self.assertEqual(destination.read_bytes(), body)
            self.assertFalse(destination.with_name(destination.name + ".tmp").exists())

    def test_fetch_bundle_rejects_html_payload(self):
        with tempfile.TemporaryDirectory() as tmp:
            destination = Path(tmp) / "build.main.deadbeef.js"
            with mock.patch.object(
                monitor.urllib.request,
                "urlopen",
                return_value=FakeResponse(body=b"<html>blocked</html>", content_type="text/html"),
            ):
                with self.assertRaises(RuntimeError):
                    monitor.fetch_bundle("https://bloxd.io/static/js/x.js", destination)
            self.assertFalse(destination.exists())

    def test_probe_reuses_cached_bundle_when_build_unchanged(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            self.patch_paths(root)
            self.patch_beautify(False)
            bundle_path = root / "bundles" / "bloxd.io" / "main.js"
            bundle_path.parent.mkdir(parents=True)
            bundle_path.write_bytes(b"console.log('cached');")
            self.patch_responses([FakeResponse(body=HOME_HTML.encode(), content_type="text/html")])
            record = monitor.probe(
                "bloxd.io",
                "https://bloxd.io/",
                {
                    "build_name": "build123",
                    "asset_hash": "deadbeef",
                    "build_url": "https://bloxd.io/static/js/build123.main.deadbeef.js",
                    "storage_version": monitor.STORAGE_VERSION,
                    "bundle_path": "bundles/bloxd.io/main.js",
                    "bundle_sha256": "abc123",
                    "bundle_size": 21,
                    "beautified": False,
                    "files": [
                        {
                            "path": "bundles/bloxd.io/main.js",
                            "identity": "js:main",
                            "cdn_hash": "deadbeef",
                            "source_filename": "build123.main.deadbeef.js",
                            "sha256": "abc123",
                            "size": 21,
                        }
                    ],
                },
            )
        self.assertFalse(record["downloaded"])
        self.assertEqual(record["build"], "build123.deadbeef")
        self.assertEqual(record["bundle_sha256"], "abc123")
        self.assertEqual(len(record["files"]), 1)

    def test_probe_downloads_all_chunks_and_prunes_on_new_build(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            self.patch_paths(root)
            self.patch_workers(1)
            self.patch_beautify(False)
            old_file = root / "bundles" / "bloxd.io" / "oldbuild.main.bbbb2222.js"
            old_file.parent.mkdir(parents=True)
            old_file.write_bytes(b"old build")
            main_body = ("console.log('main');" + RUNTIME_SNIPPET).encode()
            bodies = {
                "build123.25.cccc3333.chunk.css": b".a{color:red}",
                "build123.main.cafe0000.css": b".main{}",
                "build123.16.bbbb2222.chunk.js": b"console.log(16)",
                "build123.alphaChunk.aaaa1111.chunk.js": b"console.log(alpha)",
            }
            responses = [
                FakeResponse(body=HOME_HTML.encode(), content_type="text/html"),
                FakeResponse(body=main_body, content_type="application/javascript"),
            ]
            planned_order = [
                "static/css/build123.25.cccc3333.chunk.css",
                "static/css/build123.main.cafe0000.css",
                "static/js/build123.16.bbbb2222.chunk.js",
                "static/js/build123.alphaChunk.aaaa1111.chunk.js",
            ]
            for rel in planned_order:
                name = rel.rsplit("/", 1)[1]
                responses.append(FakeResponse(body=bodies[name]))
            self.patch_responses(responses)
            record = monitor.probe(
                "bloxd.io",
                "https://bloxd.io/",
                {"build_name": "oldbuild", "asset_hash": "bbbb2222"},
            )
            env_dir = root / "bundles" / "bloxd.io"
            self.assertTrue(record["downloaded"])
            self.assertFalse(record["beautified"])
            self.assertEqual(record["storage_version"], monitor.STORAGE_VERSION)
            self.assertEqual(len(record["files"]), 5)
            self.assertEqual(
                [entry["path"] for entry in record["files"]],
                [
                    "bundles/bloxd.io/chunks/css/25.css",
                    "bundles/bloxd.io/chunks/js/16.js",
                    "bundles/bloxd.io/chunks/js/alphaChunk.js",
                    "bundles/bloxd.io/main.css",
                    "bundles/bloxd.io/main.js",
                ],
            )
            self.assertEqual(record["bundle_path"], "bundles/bloxd.io/main.js")
            self.assertEqual(record["bundle_sha256"], hashlib.sha256(main_body).hexdigest())
            self.assertEqual(record["css_path"], "bundles/bloxd.io/main.css")
            for source_name, body in bodies.items():
                identity, _ = monitor.file_identity(source_name)
                stored = env_dir / monitor.stable_storage_path(identity)
                self.assertEqual(stored.read_bytes(), body)
            self.assertFalse(old_file.exists())  # stale build file pruned

    def test_main_leaves_files_untouched_when_nothing_changed(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            self.patch_paths(root)
            self.patch_beautify(False)
            state_path, readme_path = self.patch_state_files(root)
            state = {}
            for host in monitor.SITES:
                rel = f"bundles/{host}/main.js"
                bundle = root / rel
                bundle.parent.mkdir(parents=True, exist_ok=True)
                bundle.write_bytes(b"console.log('cached');")
                state[host] = {
                    "build": "build123.deadbeef",
                    "build_name": "build123",
                    "asset_hash": "deadbeef",
                    "build_url": f"https://{host}/static/js/build123.main.deadbeef.js",
                    "checked_at": "2026-11-14T06:00:00+09:00",
                    "storage_version": monitor.STORAGE_VERSION,
                    "bundle_path": rel,
                    "bundle_sha256": "abc123",
                    "bundle_size": 21,
                    "beautified": False,
                    "files": [{
                        "path": rel,
                        "identity": "js:main",
                        "cdn_hash": "deadbeef",
                        "source_filename": "build123.main.deadbeef.js",
                        "sha256": "abc123",
                        "size": 21,
                    }],
                }
            state_path.write_text(json.dumps(state), encoding="utf-8")
            readme_path.write_text("original readme", encoding="utf-8")
            self.patch_responses(
                [FakeResponse(body=HOME_HTML.encode(), content_type="text/html") for _ in monitor.SITES]
            )
            self.assertEqual(monitor.main(), 0)
            stored = json.loads(state_path.read_text(encoding="utf-8"))
            self.assertEqual(stored["bloxd.io"]["checked_at"], "2026-11-14T06:00:00+09:00")
            self.assertEqual(readme_path.read_text(encoding="utf-8"), "original readme")
            self.assertFalse(monitor.ADDED_REPORT_PATH.exists())
            self.assertFalse(monitor.HISTORY_PATH.exists())

    def test_readme_lists_main_bundle_and_archived_summary(self):
        state = {
            host: {
                "checked_at": "2026-11-14T06:00:00+09:00",
                "build": "build123.deadbeef",
                "build_name": "build123",
                "asset_hash": "deadbeef",
                "build_url": f"https://{host}/static/js/build123.main.deadbeef.js",
                "bundle_path": f"bundles/{host}/main.js",
                "bundle_sha256": "a" * 64,
                "bundle_size": 2226995,
                "css_path": f"bundles/{host}/main.css",
                "css_sha256": "b" * 64,
                "css_size": 50000,
                "files": [
                    {"path": f"bundles/{host}/main.js", "identity": "js:main", "cdn_hash": "deadbeef",
                     "source_filename": "build123.main.deadbeef.js", "sha256": "a" * 64, "size": 2226995},
                    {"path": f"bundles/{host}/chunks/js/alphaChunk.js", "identity": "chunk.js:alphaChunk",
                     "cdn_hash": "aaaa1111", "source_filename": "build123.alphaChunk.aaaa1111.chunk.js",
                     "sha256": "c" * 64, "size": 1000},
                ],
            }
            for host in monitor.SITES
        }
        rendered = monitor.render_readme(state)
        self.assertIn("| Environment | Checked at (JST) | Build | Main bundle |", rendered)
        self.assertIn("build123.deadbeef", rendered)
        self.assertIn("bundles/bloxd.io/main.js", rendered)
        self.assertIn("2.12 MB", rendered)
        self.assertIn("a" * 12, rendered)
        self.assertIn("https://preprod.bloxd.io/static/js/build123.main.deadbeef.js", rendered)
        self.assertIn("a" * 64, rendered)
        self.assertIn("archived build files: 2", rendered)
        self.assertIn("changes/added.md", rendered)
        self.assertIn("changes/removed.md", rendered)
        self.assertIn("changes/changed.md", rendered)
        self.assertIn("HISTORY.md", rendered)
        self.assertNotIn("alphaChunk", rendered)

    # --- bundle naming ---

    def test_bundle_filename_uses_original_hashed_name(self):
        self.assertEqual(monitor.bundle_filename("98edle", "ddaae6c4"), "98edle.main.ddaae6c4.js")

    def test_stable_storage_path_ignores_build_and_cdn_hash(self):
        first, _ = monitor.file_identity("oldbuild.15.aaaaaaaa.chunk.js")
        second, _ = monitor.file_identity("newbuild.15.bbbbbbbb.chunk.js")
        self.assertEqual(first, second)
        self.assertEqual(monitor.stable_storage_path(first), "chunks/js/15.js")
        main_first, _ = monitor.file_identity("oldbuild.main.aaaaaaaa.js")
        main_second, _ = monitor.file_identity("newbuild.main.bbbbbbbb.js")
        self.assertEqual(main_first, main_second)
        self.assertEqual(monitor.stable_storage_path(main_first), "main.js")

    def test_file_identity_parses_kinds(self):
        self.assertEqual(
            monitor.file_identity("98edle.alphaChunk.aaaa1111.chunk.js"),
            ("chunk.js:alphaChunk", "aaaa1111"),
        )
        self.assertEqual(monitor.file_identity("98edle.15.85635705.chunk.js"), ("chunk.js:15", "85635705"))
        self.assertEqual(monitor.file_identity("98edle.main.ddaae6c4.js"), ("js:main", "ddaae6c4"))
        self.assertEqual(monitor.file_identity("90jf8k.main.a8dbe431.css"), ("css:main", "a8dbe431"))
        self.assertIsNone(monitor.file_identity("notes.txt"))

    def test_diff_manifests_pairs_same_lineage_files(self):
        def entry(name, size):
            return {"path": f"bundles/e/{name}", "sha256": "0" * 64, "size": size}

        previous = [
            entry("98edle.15.0df02689.chunk.js", 1000),      # changed
            entry("98edle.alphaChunk.aaaa1111.chunk.js", 500),  # removed
            entry("98edle.16.bbbb2222.chunk.js", 2000),      # unchanged
        ]
        current = [
            entry("98edle.15.91fe22aa.chunk.js", 1500),      # same lineage, new hash
            entry("98edle.16.bbbb2222.chunk.js", 2000),      # unchanged
            entry("98edle.wasmLoader.cafe0000.chunk.js", 700),  # added
        ]
        diff = monitor.diff_manifests(previous, current)
        self.assertEqual(
            diff["changed"],
            [("chunk.js:15", "0df02689", "91fe22aa", 1000, 1500)],
        )
        self.assertEqual(diff["added"], [("chunk.js:wasmLoader", "cafe0000", 700)])
        self.assertEqual(diff["removed"], [("chunk.js:alphaChunk", "aaaa1111", 500)])
        self.assertEqual(diff["unchanged_count"], 1)
        self.assertEqual(diff["size_delta"], 700)

    def test_render_changes_reports_named_chunks_and_deltas(self):
        previous_state = {
            "bloxd.io": {
                "build": "98edle.ddaae6c4",
                "files": [
                    {"path": "bundles/bloxd.io/chunks/js/15.js", "identity": "chunk.js:15",
                     "cdn_hash": "0df02689", "sha256": "0" * 64, "size": 1000},
                    {"path": "bundles/bloxd.io/chunks/css/clientGame-frontline-frontlineClient.css",
                     "identity": "chunk.css:clientGame-frontline-frontlineClient", "cdn_hash": "0df02689",
                     "sha256": "0" * 64, "size": 400},
                ],
            }
        }
        current_state = {
            "bloxd.io": {
                "build": "98edle.91fe22aa",
                "files": [
                    {"path": "bundles/bloxd.io/chunks/js/15.js", "identity": "chunk.js:15",
                     "cdn_hash": "91fe22aa", "sha256": "1" * 64, "size": 1500},
                    {"path": "bundles/bloxd.io/chunks/css/clientGame-frontline-frontlineClient.css",
                     "identity": "chunk.css:clientGame-frontline-frontlineClient", "cdn_hash": "91fe22aa",
                     "sha256": "1" * 64, "size": 300},
                ],
            }
        }
        rendered = monitor.render_changes(previous_state, current_state, ["bloxd.io"], "2026-11-14T15:00 JST")
        self.assertIn("98edle.ddaae6c4 → 98edle.91fe22aa", rendered)
        self.assertIn("changed 2, added 0, removed 0, unchanged 0", rendered)
        self.assertIn("chunks/css/clientGame-frontline-frontlineClient.css", rendered)
        self.assertIn("Largest changes", rendered)
        self.assertLess(len(rendered.splitlines()), 20)
        self.assertNotIn("All changed files", rendered)

    def test_render_changes_uses_diff_highlighting_and_report_link(self):
        previous_state = {
            "bloxd.io": {
                "build": "oldbuild.aaaaaaaa",
                "files": [{"identity": "js:main", "cdn_hash": "aaaaaaaa", "size": 100}],
            }
        }
        current_state = {
            "bloxd.io": {
                "build": "newbuild.bbbbbbbb",
                "files": [{"identity": "js:main", "cdn_hash": "bbbbbbbb", "size": 125}],
            }
        }
        rendered = monitor.render_changes(
            previous_state,
            current_state,
            ["bloxd.io"],
            "2026-11-18T15:00 JST",
            "changes/changed.md",
        )
        self.assertIn("```diff", rendered)
        self.assertIn("- Total size: 100 B", rendered)
        self.assertIn("+ Total size: 125 B (+25 B)", rendered)
        self.assertIn("[changes/changed.md]", rendered)

    def test_readable_diff_report_includes_all_files_and_splits_hunks(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)

            def git(*args):
                subprocess.run(
                    ["git", *args],
                    cwd=root,
                    check=True,
                    stdout=subprocess.PIPE,
                    stderr=subprocess.PIPE,
                )

            git("init", "-q")
            git("config", "user.name", "Test")
            git("config", "user.email", "test@example.invalid")

            css_old = [".a { color: red; }"] + [f".keep{i} {{ color: blue; }}" for i in range(10)] + [".b { color: red; }"]
            css_new = [".a { color: green; }"] + css_old[1:-1] + [".b { color: blue; }"]
            files = {
                "README.md": "old readme\n",
                "bundles/e/chunks/css/1.css": "\n".join(css_old) + "\n",
                "bundles/e/chunks/js/207.js": "const BB = TB.value;\nfunction xx() { return BB + 1; }\n",
                ".monitor-state.json": '{"old":"hash"}\n',
            }
            for relative, content in files.items():
                path = root / relative
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_text(content, encoding="utf-8")
            binary_path = root / "bundles/e/chunks/image.wasm"
            binary_path.parent.mkdir(parents=True, exist_ok=True)
            binary_path.write_bytes(b"\x00old")
            git("add", "-A")
            git("commit", "-qm", "baseline")

            (root / "README.md").write_text("new readme\n", encoding="utf-8")
            (root / "bundles/e/chunks/css/1.css").write_text(
                "\n".join(css_new) + "\n", encoding="utf-8"
            )
            (root / "bundles/e/chunks/js/207.js").write_text(
                "const CC = DD.value;\nfunction yy() { return CC + 2; }\n",
                encoding="utf-8",
            )
            (root / ".monitor-state.json").write_text('{"new":"hash"}\n', encoding="utf-8")
            binary_path.write_bytes(b"\x00new")

            report = monitor.render_readable_diff_report(root, "test build")

            self.assertIn("<summary><code>README.md</code>", report)
            self.assertIn("bundles/e/chunks/css/1.css", report)
            self.assertIn("Hunk 1", report)
            self.assertIn("Hunk 2", report)
            self.assertIn("bundles/e/chunks/js/207.js", report)
            self.assertIn("⟦2-char-id⟧", report)
            self.assertIn("return ⟦2-char-id⟧ + 2", report)
            self.assertNotIn("const BB", report)
            self.assertNotIn("const CC", report)
            self.assertIn(".monitor-state.json", report)
            self.assertIn("Binary file changed", report)
            self.assertIn("two-character identifiers", report)

    def test_paginated_diff_report_splits_files_and_writes_small_pages(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)

            def git(*args):
                subprocess.run(
                    ["git", *args], cwd=root, check=True,
                    stdout=subprocess.PIPE, stderr=subprocess.PIPE,
                )

            git("init", "-q")
            git("config", "user.name", "Test")
            git("config", "user.email", "test@example.invalid")
            names = [f"file-{number}.txt" for number in range(8)]
            for name in names:
                path = root / name
                path.write_text("\n".join(f"old-{name}-{line}-" + "x" * 80 for line in range(16)) + "\n", encoding="utf-8")
            git("add", "-A")
            git("commit", "-qm", "baseline")

            for name in names:
                path = root / name
                path.write_text("\n".join(f"new-{name}-{line}-" + "y" * 80 for line in range(16)) + "\n", encoding="utf-8")

            result = monitor.write_paginated_readable_diff_report(
                root, "test build", "diffs/test-build/index.md", max_part_bytes=9000,
            )
            index = (root / "diffs/test-build/index.md").read_text(encoding="utf-8")
            pages = sorted((root / "diffs/test-build/parts").glob("part-*.md"))
            self.assertGreater(result["pages"], 1)
            self.assertEqual(len(pages), result["pages"])
            self.assertIn("[Part 001](parts/part-001.md)", index)
            rendered_pages = "\n".join(page.read_text(encoding="utf-8") for page in pages)
            for name in names:
                self.assertIn(name, rendered_pages)
            self.assertLessEqual(result["largest_page_bytes"], 9000)
            self.assertTrue(all(page.stat().st_size <= 9000 for page in pages))

    def test_large_file_sections_keep_wrapper_and_use_explicit_head_ref(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)

            def git(*args):
                subprocess.run(
                    ["git", *args], cwd=root, check=True,
                    stdout=subprocess.PIPE, stderr=subprocess.PIPE,
                )

            relative = "bundles/e/chunks/css/large.css"
            path = root / relative
            path.parent.mkdir(parents=True, exist_ok=True)
            old_lines = []
            new_lines = []
            for number in range(16):
                old_lines.append(f".old-{number} {{ color: red; }}" + " " * 100)
                new_lines.append(f".new-{number} {{ color: green; }}" + " " * 100)
                for context in range(10):
                    line = f".keep-{number}-{context} {{ color: blue; }}"
                    old_lines.append(line)
                    new_lines.append(line)

            git("init", "-q")
            git("config", "user.name", "Test")
            git("config", "user.email", "test@example.invalid")
            path.write_text("\n".join(old_lines) + "\n", encoding="utf-8")
            git("add", "-A")
            git("commit", "-qm", "baseline")
            base_ref = subprocess.check_output(["git", "rev-parse", "HEAD"], cwd=root, text=True).strip()

            path.write_text("\n".join(new_lines) + "\n", encoding="utf-8")
            git("add", "-A")
            git("commit", "-qm", "target build")
            head_ref = subprocess.check_output(["git", "rev-parse", "HEAD"], cwd=root, text=True).strip()

            path.write_text("WORKTREE-ONLY-SENTINEL\n", encoding="utf-8")
            result = monitor.write_paginated_readable_diff_report(
                root,
                "large target build",
                "diffs/test-large/index.md",
                base_ref=base_ref,
                head_ref=head_ref,
                max_part_bytes=8192,
            )

            index = (root / "diffs/test-large/index.md").read_text(encoding="utf-8")
            pages = sorted((root / "diffs/test-large/parts").glob("part-*.md"))
            self.assertGreater(result["pages"], 1)
            self.assertEqual(result["pages"], len(pages))
            for page in pages:
                content = page.read_text(encoding="utf-8")
                self.assertIn(f"<summary><code>{relative}</code> · modified", content)
                self.assertIn("<details>\n<summary>Hunk", content)
                self.assertLessEqual(page.stat().st_size, 8192)
            combined = "\n".join(page.read_text(encoding="utf-8") for page in pages)
            self.assertIn(".new-0", combined)
            self.assertNotIn("WORKTREE-ONLY-SENTINEL", combined)
            self.assertIn("[Part 001](parts/part-001.md)", index)
            self.assertLess(index.count("\n\n\n"), 3)

    def test_split_oversized_file_section_repeats_file_wrapper(self):
        block = [
            "<details>",
            "<summary><code>large.js</code> · modified · +20 / -20</summary>",
            "JavaScript notes",
        ]
        for number in range(10):
            block.extend([
                "<details>",
                f"<summary>Hunk {number + 1}</summary>",
                "x" * 500,
                "</details>",
            ])
        block.append("</details>")

        fragments = monitor.split_oversized_file_section(block, max_part_bytes=1800)
        self.assertGreater(len(fragments), 1)
        for fragment in fragments:
            self.assertEqual(fragment[0], "<details>")
            self.assertIn("<summary><code>large.js</code>", fragment[1])
            self.assertEqual(fragment[-1], "</details>")
            self.assertIn("<summary>Hunk", "\n".join(fragment))

    def test_normalize_minified_js_identifiers_preserves_strings_and_properties(self):
        source = 'const BB = obj.id + config.xy + "BB"; // TB\nconst key = { id: BB };'
        normalized = monitor.normalize_minified_js_identifiers(source)
        self.assertIn("⟦2-char-id⟧", normalized)
        self.assertIn("obj.id", normalized)
        self.assertIn("config.xy", normalized)
        self.assertIn('"BB"', normalized)
        self.assertIn("id:", normalized)
        self.assertIn("// TB", normalized)
        self.assertIn("/ab+c/", monitor.normalize_minified_js_identifiers("const rx = /ab+c/;"))

    def test_normalizer_masks_identifiers_inside_embedded_worker_code_only(self):
        source = """const worker = '(()=>{var JJ=(JJ,cJ)=>JJ.exports;return cJ(1)} )()';"""
        normalized = monitor.normalize_minified_js_identifiers(source)
        self.assertIn("⟦2-char-id⟧", normalized)
        self.assertIn("exports", normalized)
        self.assertIn("'(()=>{", normalized)

        arguments_source = "function fn(BB, cJ, ...TB) { return BB + cJ + TB; }"
        arguments_normalized = monitor.normalize_minified_js_identifiers(arguments_source)
        self.assertNotIn("BB", arguments_normalized)
        self.assertNotIn("cJ", arguments_normalized)
        self.assertNotIn("TB", arguments_normalized)

        spread_source = "const copy = {...BB};"
        spread_normalized = monitor.normalize_minified_js_identifiers(spread_source)
        self.assertIn("...⟦2-char-id⟧", spread_normalized)
        self.assertNotIn("BB", spread_normalized)

        object_source = "const data = { xy, id: value, method(BB, cJ) { return cJ; } };"
        object_normalized = monitor.normalize_minified_js_identifiers(object_source)
        self.assertIn("{ xy,", object_normalized)
        self.assertIn("id:", object_normalized)
        self.assertIn("method(", object_normalized)
        self.assertNotIn("BB", object_normalized)
        self.assertNotIn("cJ", object_normalized)

        ordinary = 'const message = "No UI changes";'
        self.assertEqual(monitor.normalize_minified_js_identifiers(ordinary), ordinary)

    def test_workflow_preserves_every_build_commit(self):
        workflow_path = monitor.ROOT / ".github" / "workflows" / "monitor.yml"
        workflow = workflow_path.read_text(encoding="utf-8")
        self.assertIn("fetch-depth: 0", workflow)
        self.assertIn("git push origin main", workflow)
        self.assertNotIn("RETENTION:", workflow)
        self.assertNotIn("git push --force", workflow)
        self.assertNotIn("git rebase", workflow)
        self.assertNotIn("Rolling baseline", workflow)

    def test_render_changes_baseline_section(self):
        current_state = {
            "bloxd.io": {
                "build": "98edle.ddaae6c4",
                "files": [{"path": "bundles/bloxd.io/98edle.main.ddaae6c4.js", "sha256": "0" * 64, "size": 2226995}],
            }
        }
        rendered = monitor.render_changes({}, current_state, ["bloxd.io"], "2026-11-14T15:00 JST")
        self.assertIn("Baseline: 1 files", rendered)

    # =========================================================================
    # New specification tests (Section 10 requirements)
    # =========================================================================

    def test_classify_two_char_identifier_only_change_is_excluded(self):
        old_js = b"function AA(BB, CC) {\n  const DD = BB + CC;\n  return DD;\n}\n"
        new_js = b"function XX(YY, ZZ) {\n  const WW = YY + ZZ;\n  return WW;\n}\n"
        res = monitor.classify_bundle_file_diff(
            "bundles/bloxd.io/chunks/js/10.js", old_js, new_js
        )
        self.assertEqual(res["status"], "filtered")
        self.assertTrue(res["identifier_only"])
        self.assertEqual(res["added"], [])
        self.assertEqual(res["removed"], [])
        self.assertEqual(res["changed"], [])

    def test_classify_three_or_more_char_identifier_change_is_changed(self):
        old_js = b"function computeVelocity(playerSpeed) {\n  return playerSpeed * 2;\n}\n"
        new_js = b"function computeMomentum(targetSpeed) {\n  return targetSpeed * 2;\n}\n"
        res = monitor.classify_bundle_file_diff(
            "bundles/bloxd.io/chunks/js/10.js", old_js, new_js
        )
        self.assertEqual(res["status"], "modified")
        self.assertEqual(len(res["changed"]), 1)
        self.assertEqual(res["added"], [])
        self.assertEqual(res["removed"], [])
        self.assertIn("computeVelocity", "\n".join(res["changed"][0]["old_lines"]))
        self.assertIn("computeMomentum", "\n".join(res["changed"][0]["new_lines"]))

    def test_classify_numeric_change_is_changed(self):
        old_js = b"const speed = 10;\n"
        new_js = b"const speed = 15;\n"
        res = monitor.classify_bundle_file_diff(
            "bundles/bloxd.io/main.js", old_js, new_js
        )
        self.assertEqual(res["status"], "modified")
        self.assertEqual(len(res["changed"]), 1)
        self.assertEqual(res["changed"][0]["old_lines"], ["const speed = 10;"])
        self.assertEqual(res["changed"][0]["new_lines"], ["const speed = 15;"])

    def test_classify_string_literal_change_including_two_char_string_is_changed(self):
        old_js = b'const label = "hp";\nconst title = "Play Now";\n'
        new_js = b'const label = "mp";\nconst title = "Join Match";\n'
        res = monitor.classify_bundle_file_diff(
            "bundles/bloxd.io/main.js", old_js, new_js
        )
        self.assertEqual(res["status"], "modified")
        self.assertEqual(len(res["changed"]), 1)
        self.assertIn('"hp"', "\n".join(res["changed"][0]["old_lines"]))
        self.assertIn('"mp"', "\n".join(res["changed"][0]["new_lines"]))

    def test_classify_url_change_is_changed(self):
        old_js = b'const endpoint = "https://bloxd.io/api/v1/rooms";\n'
        new_js = b'const endpoint = "https://bloxd.io/api/v2/rooms";\n'
        res = monitor.classify_bundle_file_diff(
            "bundles/bloxd.io/main.js", old_js, new_js
        )
        self.assertEqual(len(res["changed"]), 1)
        self.assertIn("/api/v1/rooms", res["changed"][0]["old_lines"][0])
        self.assertIn("/api/v2/rooms", res["changed"][0]["new_lines"][0])

    def test_classify_condition_and_operator_change_is_changed(self):
        old_js = b"if (health > 0 && stamina >= 10) {\n  allowSprint = true;\n}\n"
        new_js = b"if (health >= 1 || stamina > 20) {\n  allowSprint = true;\n}\n"
        res = monitor.classify_bundle_file_diff(
            "bundles/bloxd.io/chunks/js/25.js", old_js, new_js
        )
        self.assertEqual(len(res["changed"]), 1)
        self.assertEqual(res["changed"][0]["old_range"], (1, 1))
        self.assertEqual(res["changed"][0]["new_range"], (1, 1))

    def test_classify_function_body_change_is_changed(self):
        old_js = b"function calcDamage(base) {\n  const bonus = 2;\n  return base + bonus;\n}\n"
        new_js = b"function calcDamage(base) {\n  const bonus = 5;\n  return (base + bonus) * 1.5;\n}\n"
        res = monitor.classify_bundle_file_diff(
            "bundles/bloxd.io/chunks/js/25.js", old_js, new_js
        )
        self.assertEqual(len(res["changed"]), 1)
        self.assertEqual(res["changed"][0]["old_range"], (2, 3))
        self.assertEqual(res["changed"][0]["new_range"], (2, 3))

    def test_classify_new_and_deleted_bundle_files(self):
        added_res = monitor.classify_bundle_file_diff(
            "bundles/bloxd.io/chunks/js/newFeature.js",
            None,
            b"export const feature = true;\n",
        )
        self.assertEqual(added_res["status"], "added")
        self.assertEqual(len(added_res["added"]), 1)
        self.assertEqual(added_res["added"][0]["kind"], "added_file")
        self.assertEqual(added_res["removed"], [])
        self.assertEqual(added_res["changed"], [])

        removed_res = monitor.classify_bundle_file_diff(
            "bundles/bloxd.io/chunks/js/oldFeature.js",
            b"export const legacy = false;\n",
            None,
        )
        self.assertEqual(removed_res["status"], "removed")
        self.assertEqual(len(removed_res["removed"]), 1)
        self.assertEqual(removed_res["removed"][0]["kind"], "removed_file")
        self.assertEqual(removed_res["added"], [])
        self.assertEqual(removed_res["changed"], [])

    def test_classify_pure_addition_pure_deletion_and_multiple_changes_in_same_file(self):
        old_js = (
            "const speed = 10;\n"
            "const keepA = 1;\n"
            "const keepB = 2;\n"
            "const removeMe = 'obsolete';\n"
            "const keepC = 3;\n"
            "const gravity = 9.8;\n"
        ).encode("utf-8")
        new_js = (
            "const speed = 15;\n"
            "const keepA = 1;\n"
            "const addedFlag = true;\n"
            "const keepB = 2;\n"
            "const keepC = 3;\n"
            "const gravity = 12.0;\n"
        ).encode("utf-8")

        res = monitor.classify_bundle_file_diff(
            "bundles/bloxd.io/chunks/js/physics.js", old_js, new_js
        )
        self.assertEqual(res["status"], "modified")
        # 2 independent Changed items (speed and gravity)
        self.assertEqual(len(res["changed"]), 2)
        self.assertEqual(res["changed"][0]["old_lines"], ["const speed = 10;"])
        self.assertEqual(res["changed"][0]["new_lines"], ["const speed = 15;"])
        self.assertEqual(res["changed"][1]["old_lines"], ["const gravity = 9.8;"])
        self.assertEqual(res["changed"][1]["new_lines"], ["const gravity = 12.0;"])
        # 1 pure Added item (addedFlag)
        self.assertEqual(len(res["added"]), 1)
        self.assertEqual(res["added"][0]["new_lines"], ["const addedFlag = true;"])
        # 1 pure Removed item (removeMe)
        self.assertEqual(len(res["removed"]), 1)
        self.assertEqual(res["removed"][0]["old_lines"], ["const removeMe = 'obsolete';"])

    def test_classify_css_changes(self):
        old_css = (
            ".hud {\n  color: red;\n}\n"
            ".keep {\n  margin: 0;\n}\n"
            ".old-banner {\n  display: block;\n}\n"
        ).encode("utf-8")
        new_css = (
            ".hud {\n  color: green;\n}\n"
            ".keep {\n  margin: 0;\n}\n"
            ".new-modal {\n  opacity: 0.9;\n}\n"
        ).encode("utf-8")

        res = monitor.classify_bundle_file_diff(
            "bundles/bloxd.io/main.css", old_css, new_css
        )
        self.assertEqual(res["status"], "modified")
        self.assertGreaterEqual(len(res["changed"]), 1)
        combined_old = "\n".join(l for item in res["changed"] for l in item["old_lines"])
        combined_new = "\n".join(l for item in res["changed"] for l in item["new_lines"])
        self.assertIn("color: red;", combined_old)
        self.assertIn("color: green;", combined_new)

    def test_non_bundle_files_excluded_from_diff_reports(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            self.patch_paths(root)

            def git(*args):
                subprocess.run(
                    ["git", *args],
                    cwd=root,
                    check=True,
                    stdout=subprocess.PIPE,
                    stderr=subprocess.PIPE,
                )

            git("init", "-q")
            git("config", "user.name", "Test")
            git("config", "user.email", "test@example.invalid")

            non_bundle_files = {
                "README.md": "initial readme\n",
                "CHANGES.md": "initial changes\n",
                "HISTORY.md": "initial history\n",
                ".monitor-state.json": "{}\n",
                "scripts/monitor.py": "# v1\n",
                "tests/test_monitor.py": "# test v1\n",
                ".github/workflows/monitor.yml": "name: test\n",
                "cloudflare/wrangler.jsonc": "{}\n",
                "bundles/bloxd.io/main.js": "const version = 1;\n",
            }
            for rel, content in non_bundle_files.items():
                p = root / rel
                p.parent.mkdir(parents=True, exist_ok=True)
                p.write_text(content, encoding="utf-8")
            git("add", "-A")
            git("commit", "-qm", "baseline")

            # Modify ONLY non-bundle files (README.md, CHANGES.md, monitor.py, etc.)
            for rel in non_bundle_files:
                if not rel.startswith("bundles/"):
                    (root / rel).write_text(f"modified {rel}\n", encoding="utf-8")

            collected = monitor.collect_bundle_diffs(root, base_ref="HEAD")
            self.assertEqual(collected["total_added"], 0)
            self.assertEqual(collected["total_removed"], 0)
            self.assertEqual(collected["total_changed"], 0)

    def test_github_diff_links_contain_valid_anchors_and_line_ranges(self):
        path = "bundles/bloxd.io/chunks/js/100.js"
        base_sha = "91993ebac13990ae01347fbe6affe057e07bbaa0"
        head_sha = "fa7e92f7f9f947a63acfec6ab5e7beb7604fb42e"
        links = monitor.build_github_links(
            path,
            base_sha,
            head_sha,
            old_range=(10, 16),
            new_range=(12, 18),
        )
        expected_hash = hashlib.sha256(path.encode("utf-8")).hexdigest()
        self.assertEqual(
            links["file_diff_url"],
            f"{monitor.REPO_URL}/compare/{base_sha}...{head_sha}#diff-{expected_hash}",
        )
        self.assertEqual(
            links["hunk_url"],
            f"{monitor.REPO_URL}/compare/{base_sha}...{head_sha}#diff-{expected_hash}R12",
        )
        self.assertEqual(
            links["after_url"],
            f"{monitor.REPO_URL}/blob/{head_sha}/{path}#L12-L18",
        )
        self.assertEqual(
            links["before_url"],
            f"{monitor.REPO_URL}/blob/{base_sha}/{path}#L10-L16",
        )

    def test_multi_environment_simultaneous_update_writes_fixed_reports_and_appends_history(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            self.patch_paths(root)

            def git(*args):
                subprocess.run(
                    ["git", *args],
                    cwd=root,
                    check=True,
                    stdout=subprocess.PIPE,
                    stderr=subprocess.PIPE,
                )

            git("init", "-q")
            git("config", "user.name", "Test")
            git("config", "user.email", "test@example.invalid")

            # Initial snapshot for bloxd.io and staging.bloxd.io
            for env in ("bloxd.io", "staging.bloxd.io"):
                main_js = root / "bundles" / env / "main.js"
                main_js.parent.mkdir(parents=True, exist_ok=True)
                main_js.write_text("const speed = 10;\nconst keep = true;\n", encoding="utf-8")
                old_chunk = root / "bundles" / env / "chunks" / "js" / "old.js"
                old_chunk.parent.mkdir(parents=True, exist_ok=True)
                old_chunk.write_text("export const obsolete = 1;\n", encoding="utf-8")

            git("add", "-A")
            git("commit", "-qm", "initial snapshot")
            base_sha = subprocess.check_output(
                ["git", "rev-parse", "HEAD"], cwd=root, text=True
            ).strip()

            # Update both environments and add a pre-existing history row
            monitor.HISTORY_PATH.write_text(
                monitor.HISTORY_HEADER
                + "| 2026-11-20 12:00 | bloxd.io | `init.00000000` | `baseline` | 1 | 0 | 0 | +1.00 KB | [`0000000`](https://example.invalid) | [Compare](https://example.invalid) |\n",
                encoding="utf-8",
            )

            for env, new_speed in (("bloxd.io", 15), ("staging.bloxd.io", 20)):
                main_js = root / "bundles" / env / "main.js"
                main_js.write_text(
                    f"const speed = {new_speed};\nconst keep = true;\nconst added = 'yes';\n",
                    encoding="utf-8",
                )
                old_chunk = root / "bundles" / env / "chunks" / "js" / "old.js"
                old_chunk.unlink()
                new_chunk = root / "bundles" / env / "chunks" / "js" / "new.js"
                new_chunk.write_text("export const fresh = 42;\n", encoding="utf-8")

            prev_state = {
                "bloxd.io": {
                    "build": "old.11111111",
                    "files": [
                        {"path": "bundles/bloxd.io/main.js", "identity": "js:main", "cdn_hash": "11111111", "size": 36},
                        {"path": "bundles/bloxd.io/chunks/js/old.js", "identity": "chunk.js:old", "cdn_hash": "22222222", "size": 26},
                    ],
                },
                "staging.bloxd.io": {
                    "build": "old.11111111",
                    "files": [
                        {"path": "bundles/staging.bloxd.io/main.js", "identity": "js:main", "cdn_hash": "11111111", "size": 36},
                        {"path": "bundles/staging.bloxd.io/chunks/js/old.js", "identity": "chunk.js:old", "cdn_hash": "22222222", "size": 26},
                    ],
                },
            }
            curr_state = {
                "bloxd.io": {
                    "build": "newA.aaaaaaaa",
                    "files": [
                        {"path": "bundles/bloxd.io/main.js", "identity": "js:main", "cdn_hash": "aaaaaaaa", "size": 56},
                        {"path": "bundles/bloxd.io/chunks/js/new.js", "identity": "chunk.js:new", "cdn_hash": "bbbbbbbb", "size": 24},
                    ],
                },
                "staging.bloxd.io": {
                    "build": "newB.cccccccc",
                    "files": [
                        {"path": "bundles/staging.bloxd.io/main.js", "identity": "js:main", "cdn_hash": "cccccccc", "size": 56},
                        {"path": "bundles/staging.bloxd.io/chunks/js/new.js", "identity": "chunk.js:new", "cdn_hash": "dddddddd", "size": 24},
                    ],
                },
            }
            updated = ["bloxd.io", "staging.bloxd.io"]
            now_text = "2026-11-20T20:00 JST"

            collected = monitor.write_fixed_change_reports(
                root,
                previous_state=prev_state,
                current_state=curr_state,
                updated_envs=updated,
                now_text=now_text,
                base_commit=base_sha,
            )
            monitor.CHANGES_PATH.write_text(
                monitor.render_changes(
                    prev_state,
                    curr_state,
                    updated,
                    now_text,
                    monitor.readable_diff_report_path(now_text, curr_state, updated),
                    collected_diffs=collected,
                    base_commit=base_sha,
                ),
                encoding="utf-8",
            )
            monitor.update_history_file(
                monitor.HISTORY_PATH,
                previous_state=prev_state,
                current_state=curr_state,
                updated_envs=updated,
                now_text=now_text,
                collected_diffs=collected,
                base_commit=base_sha,
            )

            # Verify no per-build diffs/ directory was created
            self.assertFalse((root / "diffs").exists())
            self.assertTrue(monitor.ADDED_REPORT_PATH.is_file())
            self.assertTrue(monitor.REMOVED_REPORT_PATH.is_file())
            self.assertTrue(monitor.CHANGED_REPORT_PATH.is_file())

            added_md = monitor.ADDED_REPORT_PATH.read_text(encoding="utf-8")
            removed_md = monitor.REMOVED_REPORT_PATH.read_text(encoding="utf-8")
            changed_md = monitor.CHANGED_REPORT_PATH.read_text(encoding="utf-8")
            changed_parts = sorted(monitor.CHANGED_PARTS_DIR.glob("part-*.md"))
            self.assertGreaterEqual(len(changed_parts), 1)
            changed_parts_text = "\n".join(p.read_text(encoding="utf-8") for p in changed_parts)
            history_md = monitor.HISTORY_PATH.read_text(encoding="utf-8")

            self.assertIn("bundles/bloxd.io/chunks/js/new.js", added_md)
            self.assertIn("+ const added = 'yes';", added_md)
            self.assertIn("bundles/bloxd.io/chunks/js/old.js", removed_md)
            self.assertIn("changed/part-001.md", changed_md)
            self.assertIn("- const speed = 10;", changed_parts_text)
            self.assertIn("+ const speed = 15;", changed_parts_text)
            self.assertIn("+ const speed = 20;", changed_parts_text)

            # History preserves earlier row and records both environments separately
            self.assertIn("`init.00000000`", history_md)
            self.assertIn("| 2026-11-20 20:00 | bloxd.io | `newA.aaaaaaaa` | `old.11111111` |", history_md)
            self.assertIn("| 2026-11-20 20:00 | staging.bloxd.io | `newB.cccccccc` | `old.11111111` |", history_md)

            # Verify snapshot commit & Git history restoration
            git("add", "-A")
            git("commit", "-qm", "second snapshot")
            second_sha = subprocess.check_output(
                ["git", "rev-parse", "HEAD"], cwd=root, text=True
            ).strip()
            restored_old = subprocess.check_output(
                ["git", "show", f"{base_sha}:bundles/bloxd.io/main.js"], cwd=root, text=True
            )
            restored_new = subprocess.check_output(
                ["git", "show", f"{second_sha}:bundles/bloxd.io/main.js"], cwd=root, text=True
            )
            self.assertIn("const speed = 10;", restored_old)
            self.assertIn("const speed = 15;", restored_new)

    # =========================================================================
    # REVISE-1 .. REVISE-6 verification tests
    # =========================================================================

    def test_revise_1_2_3_over_100_changed_items_all_published_and_paginated_within_budget(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            self.patch_paths(root)

            def git(*args):
                subprocess.run(
                    ["git", *args],
                    cwd=root,
                    check=True,
                    stdout=subprocess.PIPE,
                    stderr=subprocess.PIPE,
                )

            git("init", "-q")
            git("config", "user.name", "Test")
            git("config", "user.email", "test@example.invalid")

            # Build a JS file with 135 independent Changed hunks separated by unchanged context lines
            old_lines = []
            new_lines = []
            num_hunks = 135
            for idx in range(num_hunks):
                old_lines.append(f"const metricValue_{idx} = {idx * 10};")
                new_lines.append(f"const metricValue_{idx} = {idx * 10 + 5};")
                old_lines.append(f"const unchangedGuard_{idx} = true;")
                new_lines.append(f"const unchangedGuard_{idx} = true;")

            bundle_file = root / "bundles" / "bloxd.io" / "chunks" / "js" / "heavy.js"
            bundle_file.parent.mkdir(parents=True, exist_ok=True)
            bundle_file.write_text("\n".join(old_lines) + "\n", encoding="utf-8")
            git("add", "-A")
            git("commit", "-qm", "baseline")
            base_sha = subprocess.check_output(
                ["git", "rev-parse", "HEAD"], cwd=root, text=True
            ).strip()

            bundle_file.write_text("\n".join(new_lines) + "\n", encoding="utf-8")

            prev_state = {
                "bloxd.io": {
                    "build": "old.11111111",
                    "files": [{"path": "bundles/bloxd.io/chunks/js/heavy.js", "identity": "chunk.js:heavy", "cdn_hash": "11111111", "size": 1000}],
                }
            }
            curr_state = {
                "bloxd.io": {
                    "build": "new.22222222",
                    "files": [{"path": "bundles/bloxd.io/chunks/js/heavy.js", "identity": "chunk.js:heavy", "cdn_hash": "22222222", "size": 1050}],
                }
            }

            page_budget = 12_000  # small budget to force multiple pages
            collected = monitor.write_fixed_change_reports(
                root,
                previous_state=prev_state,
                current_state=curr_state,
                updated_envs=["bloxd.io"],
                now_text="2026-11-20T22:00 JST",
                base_commit=base_sha,
                max_changed_part_bytes=page_budget,
            )

            pagination = collected["changed_pagination"]
            self.assertEqual(collected["total_changed"], num_hunks)
            self.assertEqual(pagination["total_changed"], num_hunks)
            self.assertEqual(pagination["total_rendered_items"], num_hunks)
            self.assertGreater(pagination["pages"], 1)

            part_files = sorted(monitor.CHANGED_PARTS_DIR.glob("part-*.md"))
            self.assertEqual(len(part_files), pagination["pages"])

            # Verify every part file is within max_part_bytes
            for pf in part_files:
                self.assertLessEqual(pf.stat().st_size, page_budget)

            # Verify all 135 items appear individually with before/after code and GitHub links
            combined_parts = "\n".join(pf.read_text(encoding="utf-8") for pf in part_files)
            rendered_heading_count = sum(
                1 for line in combined_parts.splitlines() if line.startswith("#### ")
            )
            self.assertEqual(rendered_heading_count, num_hunks)
            for idx in range(num_hunks):
                self.assertIn(f"- const metricValue_{idx} = {idx * 10};", combined_parts)
                self.assertIn(f"+ const metricValue_{idx} = {idx * 10 + 5};", combined_parts)

            # Verify index links to every part file
            index_md = monitor.CHANGED_REPORT_PATH.read_text(encoding="utf-8")
            self.assertIn(f"**Total Changed items**: **{num_hunks}**", index_md)
            for part_num in range(1, pagination["pages"] + 1):
                self.assertIn(f"changed/part-{part_num:03d}.md", index_md)

    def test_revise_7_same_build_id_with_different_diff_content_is_not_omitted(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            self.patch_paths(root)

            def git(*args):
                subprocess.run(
                    ["git", *args],
                    cwd=root,
                    check=True,
                    stdout=subprocess.PIPE,
                    stderr=subprocess.PIPE,
                )

            git("init", "-q")
            git("config", "user.name", "Test")
            git("config", "user.email", "test@example.invalid")

            # Both environments have 110 changed hunks and identical Build IDs,
            # but staging has different actual code in hunk 0!
            for env in ("bloxd.io", "staging.bloxd.io"):
                lines = []
                for idx in range(110):
                    lines.append(f"const val_{idx} = {idx};")
                    lines.append(f"const keep_{idx} = true;")
                p = root / "bundles" / env / "main.js"
                p.parent.mkdir(parents=True, exist_ok=True)
                p.write_text("\n".join(lines) + "\n", encoding="utf-8")

            git("add", "-A")
            git("commit", "-qm", "baseline")
            base_sha = subprocess.check_output(
                ["git", "rev-parse", "HEAD"], cwd=root, text=True
            ).strip()

            for env, special in (("bloxd.io", "PROD_ONLY_VALUE"), ("staging.bloxd.io", "STAGING_ONLY_VALUE")):
                lines = []
                for idx in range(110):
                    val = f'"{special}"' if idx == 0 else str(idx + 100)
                    lines.append(f"const val_{idx} = {val};")
                    lines.append(f"const keep_{idx} = true;")
                p = root / "bundles" / env / "main.js"
                p.write_text("\n".join(lines) + "\n", encoding="utf-8")

            # Identical build IDs on both environments
            prev_state = {
                env: {"build": "sameOld.11111111", "files": []}
                for env in ("bloxd.io", "staging.bloxd.io")
            }
            curr_state = {
                env: {"build": "sameNew.22222222", "files": []}
                for env in ("bloxd.io", "staging.bloxd.io")
            }

            collected = monitor.write_fixed_change_reports(
                root,
                previous_state=prev_state,
                current_state=curr_state,
                updated_envs=["bloxd.io", "staging.bloxd.io"],
                now_text="2026-11-20T22:10 JST",
                base_commit=base_sha,
            )

            self.assertFalse(
                monitor.environments_have_identical_category_diff(
                    collected, "bloxd.io", "staging.bloxd.io", "changed"
                )
            )
            combined_parts = "\n".join(
                pf.read_text(encoding="utf-8")
                for pf in sorted(monitor.CHANGED_PARTS_DIR.glob("part-*.md"))
            )
            self.assertIn("PROD_ONLY_VALUE", combined_parts)
            self.assertIn("STAGING_ONLY_VALUE", combined_parts)

    def test_revise_8_9_changed_and_removed_links_point_to_exact_old_and_new_positions(self):
        old_js = (
            "const line1 = 1;\n"
            "const line2 = 2;\n"
            "const removedLine3 = 'deleted';\n"
            "const removedLine4 = 'also_deleted';\n"
            "const line5 = 5;\n"
            "const line6 = 6;\n"
            "const changedLine7 = 'before';\n"
        ).encode("utf-8")
        new_js = (
            "const line1 = 1;\n"
            "const line2 = 2;\n"
            "const line5 = 5;\n"
            "const line6 = 6;\n"
            "const changedLine7 = 'after';\n"
        ).encode("utf-8")

        path = "bundles/bloxd.io/main.js"
        res = monitor.classify_bundle_file_diff(path, old_js, new_js)
        self.assertEqual(len(res["removed"]), 1)
        self.assertEqual(len(res["changed"]), 1)

        removed_item = res["removed"][0]
        # Removed lines were at old lines 3..4, and new_range is None
        self.assertEqual(removed_item["old_range"], (3, 4))
        self.assertIsNone(removed_item["new_range"])

        base_ref = "build/bloxd.io/old.11111111"
        head_ref = "build/bloxd.io/new.22222222"
        expected_anchor = monitor.github_diff_anchor(path)

        rem_links = monitor.build_github_links(
            path,
            base_ref,
            head_ref,
            old_range=removed_item["old_range"],
            new_range=removed_item["new_range"],
        )
        # Removed hunk link MUST use L3 (old side line 3), NOT R, and before_url must point to base_ref #L3-L4
        self.assertTrue(rem_links["hunk_url"].endswith(f"#{expected_anchor}L3"))
        self.assertEqual(
            rem_links["before_url"],
            f"{monitor.REPO_URL}/blob/{base_ref}/{path}#L3-L4",
        )
        self.assertEqual(rem_links["after_url"], "")

        changed_item = res["changed"][0]
        # Changed line was at old line 7 and is now at new line 5
        self.assertEqual(changed_item["old_range"], (7, 7))
        self.assertEqual(changed_item["new_range"], (5, 5))
        chg_links = monitor.build_github_links(
            path,
            base_ref,
            head_ref,
            old_range=changed_item["old_range"],
            new_range=changed_item["new_range"],
        )
        self.assertTrue(chg_links["hunk_url"].endswith(f"#{expected_anchor}R5"))
        self.assertEqual(
            chg_links["after_url"],
            f"{monitor.REPO_URL}/blob/{head_ref}/{path}#L5",
        )
        self.assertEqual(
            chg_links["before_url"],
            f"{monitor.REPO_URL}/blob/{base_ref}/{path}#L7",
        )

    def test_revise_10_11_immutable_build_tags_and_history_links_never_use_main_or_overwrite_different_commit(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            self.patch_paths(root)

            def git(*args):
                subprocess.run(
                    ["git", *args],
                    cwd=root,
                    check=True,
                    stdout=subprocess.PIPE,
                    stderr=subprocess.PIPE,
                )

            git("init", "-q")
            git("config", "user.name", "Test")
            git("config", "user.email", "test@example.invalid")

            p = root / "bundles" / "bloxd.io" / "main.js"
            p.parent.mkdir(parents=True, exist_ok=True)
            p.write_text("const build = 1;\n", encoding="utf-8")
            git("add", "-A")
            git("commit", "-qm", "commit 1")
            sha1 = subprocess.check_output(["git", "rev-parse", "HEAD"], cwd=root, text=True).strip()

            # Create build tag for build 1
            tag1 = monitor.ensure_build_tag(root, "bloxd.io", "b1.aaaa1111", target_commit=sha1)
            self.assertEqual(tag1, "build/bloxd.io/b1.aaaa1111")
            # Re-running ensure_build_tag on the same commit is idempotent
            self.assertEqual(
                monitor.ensure_build_tag(root, "bloxd.io", "b1.aaaa1111", target_commit=sha1),
                tag1,
            )

            # Create a second build commit
            p.write_text("const build = 2;\n", encoding="utf-8")
            git("add", "-A")
            git("commit", "-qm", "commit 2")
            sha2 = subprocess.check_output(["git", "rev-parse", "HEAD"], cwd=root, text=True).strip()

            # Attempting to point existing tag1 at sha2 must raise RuntimeError without overwriting tag1
            with self.assertRaises(RuntimeError):
                monitor.ensure_build_tag(root, "bloxd.io", "b1.aaaa1111", target_commit=sha2)
            tag1_target = subprocess.check_output(
                ["git", "rev-parse", f"refs/tags/{tag1}^{{commit}}"], cwd=root, text=True
            ).strip()
            self.assertEqual(tag1_target, sha1)

            # Verify links generated without explicit head_commit use immutable build tags, never `main`
            prev_state = {"bloxd.io": {"build": "b1.aaaa1111", "files": []}}
            curr_state = {"bloxd.io": {"build": "b2.bbbb2222", "files": []}}
            collected = monitor.write_fixed_change_reports(
                root,
                previous_state=prev_state,
                current_state=curr_state,
                updated_envs=["bloxd.io"],
                now_text="2026-11-20T22:30 JST",
                base_commit=sha1,
                head_commit=None,
            )
            monitor.update_history_file(
                monitor.HISTORY_PATH,
                previous_state=prev_state,
                current_state=curr_state,
                updated_envs=["bloxd.io"],
                now_text="2026-11-20T22:30 JST",
                collected_diffs=collected,
                base_commit=sha1,
                head_commit=None,
            )
            history_after_b2 = monitor.HISTORY_PATH.read_text(encoding="utf-8")
            self.assertNotIn("/blob/main/", history_after_b2)
            self.assertNotIn("...main)", history_after_b2)
            self.assertNotIn("/commits/main", history_after_b2)
            self.assertIn("build/bloxd.io/b2.bbbb2222", history_after_b2)

            # Append a third build and confirm the row for b2 is completely unchanged
            prev_state_3 = {"bloxd.io": {"build": "b2.bbbb2222", "files": []}}
            curr_state_3 = {"bloxd.io": {"build": "b3.cccc3333", "files": []}}
            monitor.update_history_file(
                monitor.HISTORY_PATH,
                previous_state=prev_state_3,
                current_state=curr_state_3,
                updated_envs=["bloxd.io"],
                now_text="2026-11-20T23:00 JST",
                collected_diffs=collected,
                base_commit=sha2,
                head_commit=None,
            )
            history_after_b3 = monitor.HISTORY_PATH.read_text(encoding="utf-8")
            b2_lines_before = [l for l in history_after_b2.splitlines() if "| bloxd.io | `b2.bbbb2222` |" in l]
            b2_lines_after = [l for l in history_after_b3.splitlines() if "| bloxd.io | `b2.bbbb2222` |" in l]
            self.assertEqual(len(b2_lines_before), 1)
            self.assertEqual(b2_lines_before, b2_lines_after)


if __name__ == "__main__":
    unittest.main()
