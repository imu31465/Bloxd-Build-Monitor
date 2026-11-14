import hashlib
import importlib.util
import json
import tempfile
import unittest
from pathlib import Path
from unittest import mock

SCRIPT = Path(__file__).resolve().parents[1] / "scripts" / "monitor.py"
SPEC = importlib.util.spec_from_file_location("monitor", SCRIPT)
monitor = importlib.util.module_from_spec(SPEC)
assert SPEC.loader is not None
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
        original_root, original_bundles = monitor.ROOT, monitor.BUNDLES_DIR
        monitor.ROOT = root
        monitor.BUNDLES_DIR = root / "bundles"
        self.addCleanup(setattr, monitor, "ROOT", original_root)
        self.addCleanup(setattr, monitor, "BUNDLES_DIR", original_bundles)

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
            stored = monitor.BUNDLES_DIR / "bloxd.io" / "chunk.aaaa1111.chunk.js"
            stored.parent.mkdir(parents=True)
            stored.write_bytes(b"pretty printed bytes")

            def fail(*args, **kwargs):
                raise AssertionError("network must not be used")

            with mock.patch.object(monitor.urllib.request, "urlopen", side_effect=fail):
                name, needs = monitor.prepare_bundle(
                    "static/js/chunk.aaaa1111.chunk.js",
                    "bloxd.io",
                    {"chunk.aaaa1111.chunk.js": {
                        "path": "bundles/bloxd.io/chunk.aaaa1111.chunk.js",
                        "sha256": hashlib.sha256(b"pretty printed bytes").hexdigest(),
                        "size": 20,
                    }},
                    previous_beautified=True,
                    main_name="build123.main.deadbeef.js",
                )
            self.assertEqual((name, needs), ("chunk.aaaa1111.chunk.js", False))

    def test_prepare_copies_from_sibling_environment(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            self.patch_paths(root)
            sibling = monitor.BUNDLES_DIR / "bloxd.io" / "chunk.aaaa1111.chunk.js"
            sibling.parent.mkdir(parents=True)
            sibling.write_bytes(b"shared beautified bytes")

            def fail(*args, **kwargs):
                raise AssertionError("network must not be used")

            with mock.patch.object(monitor.urllib.request, "urlopen", side_effect=fail):
                name, needs = monitor.prepare_bundle(
                    "static/js/chunk.aaaa1111.chunk.js", "staging.bloxd.io",
                    {}, previous_beautified=True, main_name="build123.main.deadbeef.js",
                )
            copied = monitor.BUNDLES_DIR / "staging.bloxd.io" / "chunk.aaaa1111.chunk.js"
            self.assertEqual((name, needs), ("chunk.aaaa1111.chunk.js", False))
            self.assertEqual(copied.read_bytes(), b"shared beautified bytes")

    def test_prepare_redownloads_when_previous_snapshot_was_raw(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            self.patch_paths(root)
            stale = monitor.BUNDLES_DIR / "bloxd.io" / "chunk.aaaa1111.chunk.js"
            stale.parent.mkdir(parents=True)
            stale.write_bytes(b"raw minified leftovers")
            body = b"fresh raw bytes"
            self.patch_responses([
                FakeResponse(body=body, content_type="application/javascript"),
            ])
            name, needs = monitor.prepare_bundle(
                "static/js/chunk.aaaa1111.chunk.js", "bloxd.io",
                {"chunk.aaaa1111.chunk.js": {
                    "path": "bundles/bloxd.io/chunk.aaaa1111.chunk.js",
                    "sha256": hashlib.sha256(b"raw minified leftovers").hexdigest(),
                    "size": 20,
                }},
                previous_beautified=False,
                main_name="build123.main.deadbeef.js",
            )
            self.assertEqual((name, needs), ("chunk.aaaa1111.chunk.js", True))
            self.assertEqual(stale.read_bytes(), body)

    def test_prepare_refreshes_unknown_local_file(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            self.patch_paths(root)
            unknown = monitor.BUNDLES_DIR / "bloxd.io" / "chunk.aaaa1111.chunk.js"
            unknown.parent.mkdir(parents=True)
            unknown.write_bytes(b"orphan bytes")
            self.patch_responses([
                FakeResponse(body=b"fresh bytes", content_type="application/javascript"),
            ])
            name, needs = monitor.prepare_bundle(
                "static/js/chunk.aaaa1111.chunk.js", "bloxd.io",
                {}, previous_beautified=True, main_name="build123.main.deadbeef.js",
            )
            self.assertEqual((name, needs), ("chunk.aaaa1111.chunk.js", True))
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
            bundle_path = root / "bundles" / "bloxd.io" / "build123.main.deadbeef.js"
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
                    "bundle_path": "bundles/bloxd.io/build123.main.deadbeef.js",
                    "bundle_sha256": "abc123",
                    "bundle_size": 21,
                    "beautified": False,
                    "files": [
                        {
                            "path": "bundles/bloxd.io/build123.main.deadbeef.js",
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
            responses = [FakeResponse(body=HOME_HTML.encode(), content_type="text/html"),
                         FakeResponse(body=main_body, content_type="application/javascript")]
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
            self.assertEqual(len(record["files"]), 5)
            self.assertEqual(
                [entry["path"] for entry in record["files"]],
                [
                    "bundles/bloxd.io/build123.16.bbbb2222.chunk.js",
                    "bundles/bloxd.io/build123.25.cccc3333.chunk.css",
                    "bundles/bloxd.io/build123.alphaChunk.aaaa1111.chunk.js",
                    "bundles/bloxd.io/build123.main.cafe0000.css",
                    "bundles/bloxd.io/build123.main.deadbeef.js",
                ],
            )
            self.assertEqual(record["bundle_path"], "bundles/bloxd.io/build123.main.deadbeef.js")
            self.assertEqual(record["bundle_sha256"], hashlib.sha256(main_body).hexdigest())
            self.assertEqual(record["css_path"], "bundles/bloxd.io/build123.main.cafe0000.css")
            for name, body in bodies.items():
                self.assertEqual((env_dir / name).read_bytes(), body)
            self.assertFalse(old_file.exists())  # stale build file pruned

    def test_main_leaves_files_untouched_when_nothing_changed(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            self.patch_paths(root)
            self.patch_beautify(False)
            state_path, readme_path = self.patch_state_files(root)
            state = {}
            for host in monitor.SITES:
                rel = f"bundles/{host}/build123.main.deadbeef.js"
                bundle = root / rel
                bundle.parent.mkdir(parents=True, exist_ok=True)
                bundle.write_bytes(b"console.log('cached');")
                state[host] = {
                    "build": "build123.deadbeef",
                    "build_name": "build123",
                    "asset_hash": "deadbeef",
                    "build_url": f"https://{host}/static/js/build123.main.deadbeef.js",
                    "checked_at": "2026-11-14T06:00:00+09:00",
                    "bundle_path": rel,
                    "bundle_sha256": "abc123",
                    "bundle_size": 21,
                    "files": [{"path": rel, "sha256": "abc123", "size": 21}],
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

    def test_readme_lists_main_bundle_and_archived_summary(self):
        state = {
            host: {
                "checked_at": "2026-11-14T06:00:00+09:00",
                "build": "build123.deadbeef",
                "build_name": "build123",
                "asset_hash": "deadbeef",
                "build_url": f"https://{host}/static/js/build123.main.deadbeef.js",
                "bundle_path": f"bundles/{host}/build123.main.deadbeef.js",
                "bundle_sha256": "a" * 64,
                "bundle_size": 2226995,
                "css_path": f"bundles/{host}/build123.main.cafe0000.css",
                "css_sha256": "b" * 64,
                "css_size": 50000,
                "files": [
                    {"path": f"bundles/{host}/build123.main.deadbeef.js", "sha256": "a" * 64, "size": 2226995},
                    {"path": f"bundles/{host}/chunk.aaaa1111.chunk.js", "sha256": "c" * 64, "size": 1000},
                ],
            }
            for host in monitor.SITES
        }
        rendered = monitor.render_readme(state)
        self.assertIn("| Environment | Checked at (JST) | Build | Main bundle |", rendered)
        self.assertIn("build123.deadbeef", rendered)
        self.assertIn("`bundles/bloxd.io/build123.main.deadbeef.js`", rendered)
        self.assertIn("2.12 MB", rendered)
        self.assertIn("a" * 12, rendered)  # shortened digest in the table
        self.assertIn(
            "https://preprod.bloxd.io/static/js/build123.main.deadbeef.js", rendered
        )  # source URL in the details section
        self.assertIn("a" * 64, rendered)  # full digest in the details section
        self.assertIn("archived build files: 2", rendered)
        self.assertNotIn("chunk.aaaa1111", rendered)  # chunks stay out of README


    # --- bundle naming ---

    def test_bundle_filename_uses_original_hashed_name(self):
        self.assertEqual(monitor.bundle_filename("98edle", "ddaae6c4"), "98edle.main.ddaae6c4.js")

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
                    {"path": "bundles/bloxd.io/98edle.15.0df02689.chunk.js", "sha256": "0" * 64, "size": 1000},
                    {"path": "bundles/bloxd.io/98edle.clientGame-frontline-frontlineClient.0df02689.chunk.css",
                     "sha256": "0" * 64, "size": 400},
                ],
            }
        }
        current_state = {
            "bloxd.io": {
                "build": "98edle.91fe22aa",
                "files": [
                    {"path": "bundles/bloxd.io/98edle.15.91fe22aa.chunk.js", "sha256": "1" * 64, "size": 1500},
                    {"path": "bundles/bloxd.io/98edle.clientGame-frontline-frontlineClient.91fe22aa.chunk.css",
                     "sha256": "1" * 64, "size": 300},
                ],
            }
        }
        rendered = monitor.render_changes(previous_state, current_state, ["bloxd.io"], "2026-11-14T15:00 JST")
        self.assertIn("98edle.ddaae6c4 → 98edle.91fe22aa", rendered)
        self.assertIn("changed 2 / added 0 / removed 0 / unchanged 0", rendered)
        self.assertIn("`chunk.css:clientGame-frontline-frontlineClient` 0df02689 → 91fe22aa", rendered)
        self.assertIn("largest size changes", rendered)
        self.assertIn("All changed files (2)", rendered)

    def test_render_changes_baseline_section(self):
        current_state = {
            "bloxd.io": {
                "build": "98edle.ddaae6c4",
                "files": [{"path": "bundles/bloxd.io/98edle.main.ddaae6c4.js", "sha256": "0" * 64, "size": 2226995}],
            }
        }
        rendered = monitor.render_changes({}, current_state, ["bloxd.io"], "2026-11-14T15:00 JST")
        self.assertIn("baseline snapshot: 1 build files", rendered)
        self.assertIn("per-build diffs start from the next build change", rendered)


if __name__ == "__main__":
    unittest.main()
