import hashlib
import importlib.util
import json
import sys
import tempfile
import unittest
from pathlib import Path
from unittest import mock

SCRIPTS_DIR = Path(__file__).resolve().parents[1] / "scripts"

_wi_spec = importlib.util.spec_from_file_location("wasm_inspect", SCRIPTS_DIR / "wasm_inspect.py")
wasm_inspect = importlib.util.module_from_spec(_wi_spec)
assert _wi_spec.loader is not None
sys.modules["wasm_inspect"] = wasm_inspect
_wi_spec.loader.exec_module(wasm_inspect)

_monitor_spec = importlib.util.spec_from_file_location("monitor_wasm_test", SCRIPTS_DIR / "monitor.py")
monitor = importlib.util.module_from_spec(_monitor_spec)
assert _monitor_spec.loader is not None
sys.modules["monitor_wasm_test"] = monitor
_monitor_spec.loader.exec_module(monitor)

I32 = 0x7F
F64 = 0x7C
FUNCREF = 0x70


def uleb(n: int) -> bytes:
    out = bytearray()
    while True:
        b = n & 0x7F
        n >>= 7
        if n:
            out.append(b | 0x80)
        else:
            out.append(b)
            return bytes(out)


def sleb(n: int) -> bytes:
    out = bytearray()
    more = True
    while more:
        b = n & 0x7F
        n >>= 7
        if (n == 0 and not b & 0x40) or (n == -1 and b & 0x40):
            more = False
        else:
            b |= 0x80
        out.append(b)
    return bytes(out)


def section(sid: int, payload: bytes) -> bytes:
    return bytes([sid]) + uleb(len(payload)) + payload


def functype(params: list, results: list) -> bytes:
    return bytes([0x60]) + uleb(len(params)) + bytes(params) + uleb(len(results)) + bytes(results)


def build_module(with_name_section: bool = True, extra_export: bool = False) -> bytes:
    """Hand-built minimal wasm module per the W3C binary format."""
    parts = [b"\x00asm", (1).to_bytes(4, "little")]
    # type section: 0: () -> () ; 1: (i32) -> ()
    parts.append(section(1, uleb(2) + functype([], []) + functype([I32], [])))
    # import section: wbg.foo : func type 0
    parts.append(section(2, uleb(1) + uleb(3) + b"wbg" + uleb(3) + b"foo" + bytes([0x00]) + uleb(0)))
    # function section: one defined function of type 1
    parts.append(section(3, uleb(1) + uleb(1)))
    # table section: funcref min 1
    parts.append(section(4, uleb(1) + bytes([FUNCREF]) + uleb(0) + uleb(1)))
    # memory section: min 1
    parts.append(section(5, uleb(1) + uleb(0) + uleb(1)))
    # global section: immutable i32 = 0
    parts.append(section(6, uleb(1) + bytes([I32, 0x00]) + bytes([0x41, 0x00, 0x0B])))
    # export section: run -> func 1 (optionally run2 too)
    exp = uleb(3) + b"run" + bytes([0x00]) + uleb(1)
    count = 1
    if extra_export:
        exp += uleb(4) + b"run2" + bytes([0x00]) + uleb(1)
        count = 2
    parts.append(section(7, uleb(count) + exp))
    # element section: active table 0, offset 0, [func 1]
    parts.append(section(9, uleb(1) + uleb(0) + bytes([0x41, 0x00, 0x0B]) + uleb(1) + uleb(1)))
    # datacount
    parts.append(section(12, uleb(1)))
    # code section: locals (1 x i32); local.get 0; i32.const 42; i32.add; call 0; end
    body = uleb(1) + uleb(1) + bytes([I32]) + bytes([0x20, 0x00, 0x41, 0x2A, 0x6A, 0x10, 0x00, 0x0B])
    parts.append(section(10, uleb(1) + uleb(len(body)) + body))
    # data section: active memory 0, offset 0, "Hello, wasm world!"
    blob = b"Hello, wasm world!"
    parts.append(section(11, uleb(1) + uleb(0) + bytes([0x41, 0x00, 0x0B]) + uleb(len(blob)) + blob))
    if with_name_section:
        mod_name_payload = uleb(7) + b"testmod"
        sub0 = bytes([0x00]) + uleb(len(mod_name_payload)) + mod_name_payload
        fn_payload = uleb(1) + uleb(1) + uleb(8) + b"run_impl"
        sub1 = bytes([0x01]) + uleb(len(fn_payload)) + fn_payload
        content = uleb(4) + b"name" + sub0 + sub1
        parts.append(bytes([0]) + uleb(len(content)) + content)
    return b"".join(parts)


class ReaderTests(unittest.TestCase):
    def test_uleb128_roundtrip(self):
        for value in (0, 1, 127, 128, 624485, 2**31 - 1, 2**32 - 1):
            reader = wasm_inspect.Reader(uleb(value))
            self.assertEqual(reader.u32(), value)

    def test_sleb128_roundtrip(self):
        for value in (0, 1, -1, 63, -64, -65, 123456, -123456):
            reader = wasm_inspect.Reader(sleb(value))
            self.assertEqual(reader.sleb(32), value)

    def test_u32_rejects_overlong(self):
        reader = wasm_inspect.Reader(b"\x80" * 6)
        with self.assertRaises(wasm_inspect.WasmParseError):
            reader.u32()


class WasmInspectTests(unittest.TestCase):
    def test_parse_minimal_module(self):
        facts = wasm_inspect.parse_module(build_module())
        self.assertEqual(facts["header"]["version"], 1)
        self.assertEqual(facts["types"]["count"], 2)
        self.assertEqual(facts["functions"]["imported"], 1)
        self.assertEqual(facts["functions"]["defined"], 1)
        self.assertEqual(facts["functions"]["scan_ok"], 1)
        self.assertEqual(facts["functions"]["scan_degraded"], 0)
        self.assertEqual(facts["imports"][0]["module"], "wbg")
        self.assertEqual(facts["imports"][0]["name"], "foo")
        self.assertEqual(facts["imports"][0]["type"], "() -> ()")
        self.assertEqual(facts["exports"][0]["name"], "run")
        self.assertEqual(facts["exports"][0]["kind"], "func")
        self.assertEqual(facts["exports"][0]["type"], "(i32) -> ()")
        self.assertEqual(facts["custom"]["module_name"], "testmod")
        self.assertEqual(facts["function_names"], {"1": "run_impl"})
        self.assertEqual(facts["data"]["segments"], 1)
        self.assertEqual(facts["data"]["bytes"], 18)
        self.assertTrue(any(s["text"] == "Hello, wasm world!" for s in facts["strings"]))
        self.assertEqual(facts["opcodes"].get("call"), 1)
        self.assertEqual(facts["elements"]["entries"], 1)
        self.assertEqual(facts["parse_errors"], [])
        self.assertEqual(len(facts["sections"]), 12)

    def test_parse_rejects_bad_magic(self):
        with self.assertRaises(wasm_inspect.WasmParseError):
            wasm_inspect.parse_module(b"NOTW" + b"\x01\x00\x00\x00")

    def test_parse_rejects_unsupported_version(self):
        with self.assertRaises(wasm_inspect.WasmParseError):
            wasm_inspect.parse_module(b"\x00asm" + (2).to_bytes(4, "little"))

    def test_degraded_body_marks_scan(self):
        module = bytearray(build_module(with_name_section=False))
        # corrupt the code body: replace the known instruction sequence with an
        # unknown opcode so the scanner must degrade that single function.
        idx = module.find(bytes([0x20, 0x00, 0x41, 0x2A]))
        module[idx] = 0x06  # legacy try opcode (unsupported)
        facts = wasm_inspect.parse_module(bytes(module))
        self.assertEqual(facts["functions"]["defined"], 1)
        self.assertEqual(facts["functions"]["scan_degraded"], 1)
        self.assertEqual(facts["functions"]["scan_ok"], 0)
        self.assertEqual(facts["exports"][0]["name"], "run")

    def test_compare_facts_detects_changes(self):
        old = {"facts": wasm_inspect.parse_module(build_module())}
        new = {"facts": wasm_inspect.parse_module(build_module(extra_export=True))}
        delta = wasm_inspect.compare_facts(old, new)
        self.assertTrue(delta["changed"])
        notes = " ".join(delta["notes"])
        self.assertIn("export signatures", notes)
        self.assertIn("+1", notes)

    def test_compare_facts_identical(self):
        facts = wasm_inspect.parse_module(build_module())
        delta = wasm_inspect.compare_facts({"facts": facts}, {"facts": facts})
        self.assertFalse(delta["changed"])

    def test_render_module_markdown(self):
        facts = wasm_inspect.parse_module(build_module())
        context = {
            "module": "testmod",
            "environment": "bloxd.io",
            "build": "build1.aaaa1111",
            "url": "https://bloxd.io/static/media/testmod.0011223344.wasm",
            "sha256": "ab" * 32,
            "analyzed_at": "2026-11-21T12:00:00+09:00",
        }
        text = wasm_inspect.render_module_markdown(facts, context)
        self.assertIn("# WASM module: `testmod`", text)
        self.assertIn("## Overview", text)
        self.assertIn("## Imports", text)
        self.assertIn("`wbg.foo`", text)
        self.assertIn("## Exports", text)
        self.assertIn("`run`", text)
        self.assertIn("## Sections", text)
        self.assertIn("## Functions", text)
        self.assertIn("Hello, wasm world!", text)
        self.assertIn("`testmod`", text)
        self.assertIn("run_impl", text)

    def test_cli_json_and_md(self):
        with tempfile.TemporaryDirectory() as tmp:
            src = Path(tmp) / "testmod.0011223344.wasm"
            src.write_bytes(build_module())
            out_json = Path(tmp) / "out.json"
            out_md = Path(tmp) / "out.md"
            rc = wasm_inspect.main([str(src), "--json", str(out_json), "--md", str(out_md)])
            self.assertEqual(rc, 0)
            envelope = json.loads(out_json.read_text())
            self.assertEqual(envelope["facts"]["functions"]["defined"], 1)
            self.assertIn("# WASM module: `testmod`", out_md.read_text())


class MonitorWasmIntegrationTests(unittest.TestCase):
    def setUp(self):
        self._tmp = tempfile.TemporaryDirectory()
        self.root = Path(self._tmp.name)
        self._old = (monitor.BUNDLES_DIR, monitor.WASM_DIR, monitor.WASM_CACHE_DIR)
        monitor.BUNDLES_DIR = self.root / "bundles"
        monitor.WASM_DIR = self.root / "wasm"
        monitor.WASM_CACHE_DIR = self.root / "wasm-cache"

    def tearDown(self):
        monitor.BUNDLES_DIR, monitor.WASM_DIR, monitor.WASM_CACHE_DIR = self._old
        self._tmp.cleanup()

    def _write_chunk(self, environment: str, content: bytes) -> Path:
        chunk = monitor.BUNDLES_DIR / environment / "chunks" / "js" / "alpha.js"
        chunk.parent.mkdir(parents=True, exist_ok=True)
        chunk.write_bytes(content)
        return chunk

    def test_scan_wasm_references(self):
        environment = "bloxd.io"
        self._write_chunk(
            environment,
            b'exports = kd.p + "static/media/bloxd_wasm_bg.0011223344.wasm";'
            b'other = "static/media/bloxd_wasm_anim_bg.99aabbccdd.wasm"',
        )
        refs = monitor.scan_wasm_references(environment)
        self.assertEqual(set(refs), {"bloxd_wasm_bg", "bloxd_wasm_anim_bg"})
        self.assertEqual(refs["bloxd_wasm_bg"]["filename"], "bloxd_wasm_bg.0011223344.wasm")
        self.assertEqual(refs["bloxd_wasm_anim_bg"]["cdn_hash"], "99aabbccdd")

    def test_scan_wasm_references_ignores_plain_wasm_text(self):
        environment = "bloxd.io"
        self._write_chunk(environment, b"wasmUrl: 'https://cdn.example.com/draco_encoder.wasm'")
        refs = monitor.scan_wasm_references(environment)
        self.assertEqual(refs, {})

    def test_update_wasm_analysis_lifecycle(self):
        environment = "bloxd.io"
        module_bytes = build_module()
        chunk = self._write_chunk(environment, b'p + "static/media/testmod.0011223344.wasm"')

        fetch_calls = []

        def fake_fetch(url, destination):
            fetch_calls.append(url)
            destination.parent.mkdir(parents=True, exist_ok=True)
            destination.write_bytes(module_bytes)
            return hashlib.sha256(module_bytes).hexdigest(), len(module_bytes)

        with mock.patch.object(monitor, "fetch_bundle", side_effect=fake_fetch):
            record = monitor.update_wasm_analysis(environment, {"build": "build1.aaaa1111"}, {})
        self.assertIsNotNone(record)
        self.assertEqual(list(record["modules"]), ["testmod"])
        self.assertEqual(record["changed"], ["testmod"])
        self.assertEqual(record["removed"], [])
        self.assertEqual(record["errors"], [])

        report = monitor.WASM_DIR / environment / "testmod.md"
        facts_path = monitor.WASM_DIR / environment / "testmod.facts.json"
        index = monitor.WASM_DIR / environment / "index.md"
        self.assertTrue(report.is_file())
        self.assertTrue(facts_path.is_file())
        self.assertTrue(index.is_file())
        self.assertIn("# WASM module: `testmod`", report.read_text())
        self.assertIn("| Module | Size |", index.read_text())

        envelope = json.loads(facts_path.read_text())
        self.assertEqual(envelope["facts"]["functions"]["defined"], 1)
        self.assertEqual(envelope["facts"]["exports"][0]["name"], "run")
        self.assertEqual(envelope["history"][0]["build"], "build1.aaaa1111")
        self.assertEqual(record["modules"]["testmod"]["summary"]["functions"], 1)
        self.assertEqual(record["modules"]["testmod"]["summary"]["module_id"], "testmod")

        # second run: nothing changed -> no new downloads, nothing marked changed
        with mock.patch.object(monitor, "fetch_bundle", side_effect=fake_fetch):
            record2 = monitor.update_wasm_analysis(
                environment, {"build": "build1.aaaa1111"}, {"wasm": record}
            )
        self.assertEqual(record2["changed"], [])
        self.assertEqual(len(fetch_calls), 1)

        # removal: the chunk no longer references the module
        chunk.unlink()
        record3 = monitor.update_wasm_analysis(
            environment, {"build": "build2.bbbb2222"}, {"wasm": record2}
        )
        self.assertEqual(record3["removed"], ["testmod"])
        self.assertEqual(record3["modules"], {})
        self.assertFalse(report.exists())
        self.assertFalse(facts_path.exists())
        self.assertIn("`testmod`", index.read_text())

    def test_update_wasm_analysis_without_references(self):
        environment = "bloxd.io"
        self._write_chunk(environment, b"console.log('no wasm here');")
        record = monitor.update_wasm_analysis(environment, {"build": "x.00000001"}, {})
        self.assertIsNone(record)
        self.assertFalse((monitor.WASM_DIR / environment).exists())

    def test_update_wasm_analysis_survives_download_failure(self):
        environment = "bloxd.io"
        self._write_chunk(environment, b'p + "static/media/broken.0011223344.wasm"')

        def failing_fetch(url, destination):
            raise RuntimeError("boom")

        with mock.patch.object(monitor, "fetch_bundle", side_effect=failing_fetch):
            record = monitor.update_wasm_analysis(environment, {"build": "b.00000001"}, {})
        self.assertIsNotNone(record)
        self.assertEqual(record["modules"], {})
        self.assertEqual(record["errors"], ["broken: boom"])


if __name__ == "__main__":
    unittest.main()
