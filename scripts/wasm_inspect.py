#!/usr/bin/env python3
"""Clean-room WebAssembly binary inspector for the Bloxd build monitor.

Parses WebAssembly modules strictly from the public W3C WebAssembly Core
Specification binary format (magic/version header, sections, LEB128 integers,
type/import/export/code layouts, custom `name`/`producers` sections).  No
third-party WASM tooling or external implementation source was consulted; this
is a from-scratch implementation of the specification.

Used by scripts/monitor.py on every detected build to archive readable
analysis reports under wasm/<environment>/<module>.md and machine-readable
facts under wasm/<environment>/<module>.facts.json.

CLI (standalone):
    python scripts/wasm_inspect.py module.wasm [--json out.json] [--md out.md]

Library:
    from wasm_inspect import parse_module, render_module_markdown, compare_facts
"""
from __future__ import annotations

import argparse
import hashlib
import json
import re
import struct
import sys
from collections import Counter
from pathlib import Path

SCHEMA_VERSION = 1

MAX_IMPORTS_TABLE = 400
MAX_EXPORTS_TABLE = 400
MAX_TOP_FUNCTIONS = 30
MAX_STRINGS = 60
MAX_STRING_TEXT = 200
MAX_NAME_ENTRIES = 2000
MAX_EXPORT_SIG_GROUPS = 40
MAX_CALLS_PER_FUNCTION = 64
HISTOGRAM_BUCKETS = (32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384)


class WasmParseError(Exception):
    """Raised when the binary violates the WebAssembly structure rules."""


SECTION_NAMES = {
    0: "custom",
    1: "type",
    2: "import",
    3: "function",
    4: "table",
    5: "memory",
    6: "global",
    7: "export",
    8: "start",
    9: "element",
    10: "code",
    11: "data",
    12: "datacount",
}

VALTYPE_NAMES = {
    0x7F: "i32",
    0x7E: "i64",
    0x7D: "f32",
    0x7C: "f64",
    0x7B: "v128",
    0x70: "funcref",
    0x6F: "externref",
}


class Reader:
    """Byte cursor with unsigned/signed LEB128 and primitive decoders."""

    __slots__ = ("data", "pos", "end")

    def __init__(self, data: bytes, pos: int = 0, end: int | None = None):
        self.data = data
        self.pos = pos
        self.end = len(data) if end is None else end

    def eof(self) -> bool:
        return self.pos >= self.end

    def u8(self) -> int:
        if self.pos >= self.end:
            raise WasmParseError("unexpected end of input")
        b = self.data[self.pos]
        self.pos += 1
        return b

    def bytes(self, n: int) -> bytes:
        if n < 0 or self.pos + n > self.end:
            raise WasmParseError("unexpected end of input")
        chunk = self.data[self.pos : self.pos + n]
        self.pos += n
        return chunk

    def u32(self) -> int:
        result = 0
        shift = 0
        while True:
            b = self.u8()
            result |= (b & 0x7F) << shift
            if not b & 0x80:
                return result
            shift += 7
            if shift > 28:
                raise WasmParseError("u32 LEB128 exceeds 5 bytes")

    def u64(self) -> int:
        result = 0
        shift = 0
        while True:
            b = self.u8()
            result |= (b & 0x7F) << shift
            if not b & 0x80:
                return result
            shift += 7
            if shift > 63:
                raise WasmParseError("u64 LEB128 exceeds 10 bytes")

    def sleb(self, bits: int) -> int:
        result = 0
        shift = 0
        max_bytes = (bits + 6) // 7
        count = 0
        while True:
            b = self.u8()
            count += 1
            result |= (b & 0x7F) << shift
            shift += 7
            if not b & 0x80:
                if shift < bits and b & 0x40:
                    result |= -(1 << shift)
                return result
            if count >= max_bytes:
                raise WasmParseError(f"s{bits} LEB128 exceeds {max_bytes} bytes")

    def name(self) -> str:
        length = self.u32()
        return self.bytes(length).decode("utf-8", "replace")

    def f32(self) -> float:
        return struct.unpack("<f", self.bytes(4))[0]

    def f64(self) -> float:
        return struct.unpack("<d", self.bytes(8))[0]


def _valtype(r: Reader) -> str:
    code = r.u8()
    name = VALTYPE_NAMES.get(code)
    if name is None:
        raise WasmParseError(f"unknown value type 0x{code:02x}")
    return name


def _valtype_byte(data: bytes, pos: int, end: int) -> tuple[str, int]:
    if pos >= end:
        raise WasmParseError("unexpected end of input")
    code = data[pos]
    name = VALTYPE_NAMES.get(code)
    if name is None:
        raise WasmParseError(f"unknown value type 0x{code:02x}")
    return name, pos + 1


def _functype(r: Reader) -> str:
    form = r.u8()
    if form != 0x60:
        raise WasmParseError(f"unknown type form 0x{form:02x} (GC extensions unsupported)")
    params = [_valtype(r) for _ in range(r.u32())]
    results = [_valtype(r) for _ in range(r.u32())]
    return f"({' '.join(params)}) -> ({' '.join(results)})"


def _limits(r: Reader) -> dict:
    flags = r.u32()
    is64 = bool(flags & 0x04)
    read = r.u64 if is64 else r.u32
    minimum = read()
    maximum = read() if flags & 0x01 else None
    return {
        "min": minimum,
        "max": maximum,
        "shared": bool(flags & 0x02),
        "index64": is64,
    }


def _tabletype(r: Reader) -> dict:
    elem = _valtype(r)
    limits = _limits(r)
    limits["element"] = elem
    return limits


def _blocktype(r: Reader) -> str | None:
    first = r.u8()
    if first == 0x40:
        return None
    result = first & 0x7F
    shift = 7
    while first & 0x80:
        first = r.u8()
        result |= (first & 0x7F) << shift
        shift += 7
        if shift > 35:
            raise WasmParseError("blocktype LEB128 too long")
    if shift < 33 and result & (1 << (shift - 1)):
        result |= -(1 << shift)
    if result < 0:
        code = result & 0x7F
        return VALTYPE_NAMES.get(code, f"valtype:0x{code:02x}")
    return f"type{result}"


# --- opcode tables (W3C core specification numbering) ------------------------

CORE_NAMES = {
    0x00: "unreachable", 0x01: "nop", 0x02: "block", 0x03: "loop", 0x04: "if",
    0x05: "else", 0x0B: "end", 0x0C: "br", 0x0D: "br_if", 0x0E: "br_table",
    0x0F: "return", 0x10: "call", 0x11: "call_indirect",
    0x1A: "drop", 0x1B: "select", 0x1C: "select_t",
    0x20: "local.get", 0x21: "local.set", 0x22: "local.tee",
    0x23: "global.get", 0x24: "global.set",
    0x25: "table.get", 0x26: "table.set",
    0x28: "i32.load", 0x29: "i64.load", 0x2A: "f32.load", 0x2B: "f64.load",
    0x2C: "i32.load8_s", 0x2D: "i32.load8_u", 0x2E: "i32.load16_s", 0x2F: "i32.load16_u",
    0x30: "i64.load8_s", 0x31: "i64.load8_u", 0x32: "i64.load16_s", 0x33: "i64.load16_u",
    0x34: "i64.load32_s", 0x35: "i64.load32_u",
    0x36: "i32.store", 0x37: "i64.store", 0x38: "f32.store", 0x39: "f64.store",
    0x3A: "i32.store8", 0x3B: "i32.store16",
    0x3C: "i64.store8", 0x3D: "i64.store16", 0x3E: "i64.store32",
    0x3F: "memory.size", 0x40: "memory.grow",
    0x41: "i32.const", 0x42: "i64.const", 0x43: "f32.const", 0x44: "f64.const",
    0x45: "i32.eqz", 0x46: "i32.eq", 0x47: "i32.ne", 0x48: "i32.lt_s", 0x49: "i32.lt_u",
    0x4A: "i32.gt_s", 0x4B: "i32.gt_u", 0x4C: "i32.le_s", 0x4D: "i32.le_u",
    0x4E: "i32.ge_s", 0x4F: "i32.ge_u",
    0x50: "i64.eqz", 0x51: "i64.eq", 0x52: "i64.ne", 0x53: "i64.lt_s", 0x54: "i64.lt_u",
    0x55: "i64.gt_s", 0x56: "i64.gt_u", 0x57: "i64.le_s", 0x58: "i64.le_u",
    0x59: "i64.ge_s", 0x5A: "i64.ge_u",
    0x5B: "f32.eq", 0x5C: "f32.ne", 0x5D: "f32.lt", 0x5E: "f32.gt", 0x5F: "f32.le", 0x60: "f32.ge",
    0x61: "f64.eq", 0x62: "f64.ne", 0x63: "f64.lt", 0x64: "f64.gt", 0x65: "f64.le", 0x66: "f64.ge",
    0x67: "i32.clz", 0x68: "i32.ctz", 0x69: "i32.popcnt", 0x6A: "i32.add", 0x6B: "i32.sub",
    0x6C: "i32.mul", 0x6D: "i32.div_s", 0x6E: "i32.div_u", 0x6F: "i32.rem_s", 0x70: "i32.rem_u",
    0x71: "i32.and", 0x72: "i32.or", 0x73: "i32.xor", 0x74: "i32.shl", 0x75: "i32.shr_s",
    0x76: "i32.shr_u", 0x77: "i32.rotl", 0x78: "i32.rotr",
    0x79: "i64.clz", 0x7A: "i64.ctz", 0x7B: "i64.popcnt", 0x7C: "i64.add", 0x7D: "i64.sub",
    0x7E: "i64.mul", 0x7F: "i64.div_s", 0x80: "i64.div_u", 0x81: "i64.rem_s", 0x82: "i64.rem_u",
    0x83: "i64.and", 0x84: "i64.or", 0x85: "i64.xor", 0x86: "i64.shl", 0x87: "i64.shr_s",
    0x88: "i64.shr_u", 0x89: "i64.rotl", 0x8A: "i64.rotr",
    0x8B: "f32.abs", 0x8C: "f32.neg", 0x8D: "f32.ceil", 0x8E: "f32.floor", 0x8F: "f32.trunc",
    0x90: "f32.nearest", 0x91: "f32.sqrt", 0x92: "f32.add", 0x93: "f32.sub", 0x94: "f32.mul",
    0x95: "f32.div", 0x96: "f32.min", 0x97: "f32.max", 0x98: "f32.copysign",
    0x99: "f64.abs", 0x9A: "f64.neg", 0x9B: "f64.ceil", 0x9C: "f64.floor", 0x9D: "f64.trunc",
    0x9E: "f64.nearest", 0x9F: "f64.sqrt", 0xA0: "f64.add", 0xA1: "f64.sub", 0xA2: "f64.mul",
    0xA3: "f64.div", 0xA4: "f64.min", 0xA5: "f64.max", 0xA6: "f64.copysign",
    0xA7: "i32.wrap_i64", 0xA8: "i32.trunc_f32_s", 0xA9: "i32.trunc_f32_u",
    0xAA: "i32.trunc_f64_s", 0xAB: "i32.trunc_f64_u",
    0xAC: "i64.extend_i32_s", 0xAD: "i64.extend_i32_u",
    0xAE: "i64.trunc_f32_s", 0xAF: "i64.trunc_f32_u",
    0xB0: "i64.trunc_f64_s", 0xB1: "i64.trunc_f64_u",
    0xB2: "f32.convert_i32_s", 0xB3: "f32.convert_i32_u",
    0xB4: "f32.convert_i64_s", 0xB5: "f32.convert_i64_u", 0xB6: "f32.demote_f64",
    0xB7: "f64.convert_i32_s", 0xB8: "f64.convert_i32_u",
    0xB9: "f64.convert_i64_s", 0xBA: "f64.convert_i64_u", 0xBB: "f64.promote_f32",
    0xBC: "i32.reinterpret_f32", 0xBD: "i64.reinterpret_f64",
    0xBE: "f32.reinterpret_i32", 0xBF: "f64.reinterpret_i64",
    0xC0: "i32.extend8_s", 0xC1: "i32.extend16_s",
    0xC2: "i64.extend8_s", 0xC3: "i64.extend16_s", 0xC4: "i64.extend32_s",
    0xD0: "ref.null", 0xD1: "ref.is_null", 0xD2: "ref.func",
}

# immediate kinds for core opcodes
CORE_IMMS = {
    0x02: "bt", 0x03: "bt", 0x04: "bt",
    0x0C: "u", 0x0D: "u", 0x0E: "brtable",
    0x10: "u", 0x11: "uu",
    0x1C: "valvec",
    0x20: "u", 0x21: "u", 0x22: "u", 0x23: "u", 0x24: "u", 0x25: "u", 0x26: "u",
    0x28: "memarg", 0x29: "memarg", 0x2A: "memarg", 0x2B: "memarg",
    0x2C: "memarg", 0x2D: "memarg", 0x2E: "memarg", 0x2F: "memarg",
    0x30: "memarg", 0x31: "memarg", 0x32: "memarg", 0x33: "memarg",
    0x34: "memarg", 0x35: "memarg",
    0x36: "memarg", 0x37: "memarg", 0x38: "memarg", 0x39: "memarg",
    0x3A: "memarg", 0x3B: "memarg", 0x3C: "memarg", 0x3D: "memarg", 0x3E: "memarg",
    0x3F: "u", 0x40: "u",
    0x41: "s32", 0x42: "s64", 0x43: "f32", 0x44: "f64",
    0xD0: "s33", 0xD2: "u",
}

FC_NAMES = {
    0x00: "i32.trunc_sat_f32_s", 0x01: "i32.trunc_sat_f32_u",
    0x02: "i32.trunc_sat_f64_s", 0x03: "i32.trunc_sat_f64_u",
    0x04: "i64.trunc_sat_f32_s", 0x05: "i64.trunc_sat_f32_u",
    0x06: "i64.trunc_sat_f64_s", 0x07: "i64.trunc_sat_f64_u",
    0x08: "memory.init", 0x09: "data.drop", 0x0A: "memory.copy", 0x0B: "memory.fill",
    0x0C: "table.init", 0x0D: "elem.drop", 0x0E: "table.copy",
    0x0F: "table.grow", 0x10: "table.size", 0x11: "table.fill",
}

FC_IMMS = {
    0x08: "uu", 0x09: "u", 0x0A: "uu", 0x0B: "u",
    0x0C: "uu", 0x0D: "u", 0x0E: "uu", 0x0F: "u", 0x10: "u", 0x11: "u",
}

# SIMD (0xFD) subopcodes with immediates that we decode reliably; every other
# SIMD subopcode is immediate-free in the current proposal.
FD_LANE_OPS = set(range(0x15, 0x23))  # extract/replace lane: 1 lane byte
FD_LOAD_STORE = set(range(0x00, 0x0C))  # v128 loads/store: memarg
FD_NAMES_KNOWN = {
    0x0C: "v128.const", 0x0D: "i8x16.shuffle",
    0x0F: "i8x16.splat", 0x10: "i16x8.splat", 0x11: "i32x4.splat",
    0x12: "i64x2.splat", 0x13: "f32x4.splat", 0x14: "f64x2.splat",
    0x15: "i8x16.extract_lane_s", 0x16: "i8x16.extract_lane_u",
    0x17: "i16x8.extract_lane_s", 0x18: "i16x8.extract_lane_u",
    0x19: "i32x4.extract_lane", 0x1A: "i64x2.extract_lane",
    0x1B: "f32x4.extract_lane", 0x1C: "f64x2.extract_lane",
    0x1D: "i8x16.replace_lane", 0x1E: "i16x8.replace_lane",
    0x1F: "i32x4.replace_lane", 0x20: "i64x2.replace_lane",
    0x21: "f32x4.replace_lane", 0x22: "f64x2.replace_lane",
}


def _skip_u32(data: bytes, pos: int, end: int) -> int:
    while True:
        if pos >= end:
            raise WasmParseError("immediate runs past function body")
        b = data[pos]
        pos += 1
        if not b & 0x80:
            return pos


def _skip_sleb(data: bytes, pos: int, end: int) -> int:
    while True:
        if pos >= end:
            raise WasmParseError("immediate runs past function body")
        b = data[pos]
        pos += 1
        if not b & 0x80:
            return pos


def _skip_blocktype(data: bytes, pos: int, end: int) -> int:
    if pos >= end:
        raise WasmParseError("immediate runs past function body")
    first = data[pos]
    pos += 1
    if first == 0x40 or not first & 0x80:
        return pos
    return _skip_sleb(data, pos, end)


def _read_u32_at(data: bytes, pos: int, end: int) -> tuple[int, int]:
    result = 0
    shift = 0
    while True:
        if pos >= end:
            raise WasmParseError("immediate runs past function body")
        b = data[pos]
        pos += 1
        result |= (b & 0x7F) << shift
        if not b & 0x80:
            return result, pos
        shift += 7
        if shift > 28:
            raise WasmParseError("u32 LEB128 exceeds 5 bytes")


def _scan_instructions(
    data: bytes,
    start: int,
    end: int,
    collect_detail: bool,
) -> tuple[Counter, int, list[int], bool]:
    """Scan one function body; returns (opcode counter, instruction count,
    call targets, degraded flag).  A body is valid only if the final `end`
    opcode lands exactly on `end`."""
    pos = start
    counter: Counter = Counter()
    instrs = 0
    calls: list[int] = []
    core_names = CORE_NAMES
    core_imms = CORE_IMMS
    fc_names = FC_NAMES
    fc_imms = FC_IMMS
    while pos < end:
        op = data[pos]
        pos += 1
        if op == 0x0B:  # end (block end or final end)
            counter["end"] += 1
            instrs += 1
            if pos == end:
                return counter, instrs, calls, False
            continue
        name = core_names.get(op)
        imm = core_imms.get(op)
        if name is not None and imm is None:
            counter[name] += 1
            instrs += 1
            continue
        if imm is not None:
            counter[name or hex(op)] += 1
            instrs += 1
            if imm == "u":
                if op == 0x10 and collect_detail and len(calls) < MAX_CALLS_PER_FUNCTION:
                    target, pos = _read_u32_at(data, pos, end)
                    calls.append(target)
                else:
                    pos = _skip_u32(data, pos, end)
            elif imm == "uu":
                pos = _skip_u32(data, pos, end)
                pos = _skip_u32(data, pos, end)
            elif imm == "memarg":
                pos = _skip_u32(data, pos, end)
                pos = _skip_u32(data, pos, end)
            elif imm == "bt":
                pos = _skip_blocktype(data, pos, end)
            elif imm == "brtable":
                count, pos = _read_u32_at(data, pos, end)
                for _ in range(count + 1):
                    pos = _skip_u32(data, pos, end)
            elif imm == "valvec":
                count, pos = _read_u32_at(data, pos, end)
                pos += count  # each value type is one byte
                if pos > end:
                    return counter, instrs, calls, True
            elif imm == "s32" or imm == "s64" or imm == "s33":
                pos = _skip_sleb(data, pos, end)
            elif imm == "f32":
                pos += 4
            elif imm == "f64":
                pos += 8
            if pos > end:
                return counter, instrs, calls, True
            continue
        if op == 0xFC:
            sub, pos = _read_u32_at(data, pos, end)
            sub_name = fc_names.get(sub)
            if sub_name is None:
                return counter, instrs, calls, True
            counter[sub_name] += 1
            instrs += 1
            sub_imm = fc_imms.get(sub)
            if sub_imm == "u":
                pos = _skip_u32(data, pos, end)
            elif sub_imm == "uu":
                pos = _skip_u32(data, pos, end)
                pos = _skip_u32(data, pos, end)
            if pos > end:
                return counter, instrs, calls, True
            continue
        if op == 0xFD:
            sub, pos = _read_u32_at(data, pos, end)
            if sub in FD_LOAD_STORE or sub in (0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5A, 0x5B):
                # loads / stores (incl. lane variants): memarg (+ lane byte)
                pos = _skip_u32(data, pos, end)
                pos = _skip_u32(data, pos, end)
                if sub >= 0x54:
                    pos += 1
            elif sub == 0x0C or sub == 0x0D:  # v128.const / i8x16.shuffle
                pos += 16
            elif sub in FD_LANE_OPS:
                pos += 1
            counter[FD_NAMES_KNOWN.get(sub, f"simd.0x{sub:02x}")] += 1
            instrs += 1
            if pos > end:
                return counter, instrs, calls, True
            continue
        # unknown opcode (0xFB GC ops, gaps, future extensions)
        return counter, instrs, calls, True
    return counter, instrs, calls, True


def _scan_expr_const(r: Reader, depth_guard: int = 64) -> str:
    """Decode a constant initializer expression (global/element/data offset)."""
    parts = []
    for _ in range(depth_guard):
        op = r.u8()
        if op == 0x0B:
            return " ".join(parts) if parts else "(empty)"
        if op == 0x41:
            parts.append(f"i32.const {r.sleb(32)}")
        elif op == 0x42:
            parts.append(f"i64.const {r.sleb(64)}")
        elif op == 0x43:
            parts.append(f"f32.const {r.f32()!r}")
        elif op == 0x44:
            parts.append(f"f64.const {r.f64()!r}")
        elif op == 0x23:
            parts.append(f"global.get {r.u32()}")
        elif op == 0xD0:
            r.sleb(33)
            parts.append("ref.null")
        elif op == 0xD2:
            parts.append(f"ref.func {r.u32()}")
        else:
            raise WasmParseError(f"unsupported opcode 0x{op:02x} in constant expression")
    raise WasmParseError("constant expression too deep")


STRING_RE = re.compile(rb"[\x20-\x7e]{6,}")


def _extract_strings(blobs: list[bytes]) -> list[dict]:
    seen: dict[str, int] = {}
    order: list[str] = []
    for blob in blobs:
        for match in STRING_RE.finditer(blob):
            text = match.group().decode("ascii")
            if text not in seen:
                seen[text] = len(text)
                order.append(text)
    order.sort(key=lambda t: -len(t))
    return [
        {"len": len(t), "text": t[:MAX_STRING_TEXT]}
        for t in order[:MAX_STRINGS]
    ]


def parse_module(data: bytes) -> dict:
    """Parse a WebAssembly binary into a JSON-safe facts dict."""
    if len(data) < 8 or data[:4] != b"\x00asm":
        raise WasmParseError("not a WebAssembly module (magic mismatch)")
    version = int.from_bytes(data[4:8], "little")
    if version not in (1,):
        raise WasmParseError(f"unsupported wasm version {version}")

    facts = {
        "schema": SCHEMA_VERSION,
        "header": {"version": version, "size": len(data)},
        "sections": [],
        "types": {"count": 0, "error": None, "sample": [], "param_result_summary": {}},
        "imports": [],
        "exports": [],
        "globals": [],
        "memories": [],
        "tables": [],
        "start": None,
        "elements": {"segments": 0, "entries": 0, "modes": {}},
        "data": {"segments": 0, "bytes": 0, "details": []},
        "functions": {
            "imported": 0,
            "defined": 0,
            "code_bytes": 0,
            "locals_total": 0,
            "scan_ok": 0,
            "scan_degraded": 0,
            "instruction_count": 0,
            "simd_ops": 0,
            "named": 0,
            "size_histogram": {},
            "top_by_size": [],
        },
        "opcodes": {},
        "custom": {"sections": [], "module_name": None, "producers": {}},
        "strings": [],
        "parse_errors": [],
    }

    types: list[str] = []
    type_error: str | None = None
    func_type_indices: list[int] = []
    imports: list[dict] = []
    exports: list[dict] = []
    func_import_sigs: list[str] = []
    name_map: dict[int, str] = {}
    opcode_totals: Counter = Counter()
    data_blobs: list[bytes] = []

    r = Reader(data, 8, len(data))
    imp_func = imp_table = imp_mem = imp_global = 0

    while not r.eof():
        sec_id = r.u8()
        sec_size = r.u32()
        sec_start = r.pos
        sec_end = sec_start + sec_size
        if sec_end > len(data):
            raise WasmParseError(f"section {sec_id} overruns file")
        sr = Reader(data, sec_start, sec_end)

        entry = {"id": sec_id, "name": SECTION_NAMES.get(sec_id, f"unknown{sec_id}"), "bytes": sec_size}
        try:
            if sec_id == 0:
                _parse_custom(sr, facts)
                entry["name"] = f"custom:{facts['custom']['sections'][-1]['name']}" if facts["custom"]["sections"] else "custom"
            elif sec_id == 1:
                count = sr.u32()
                try:
                    for _ in range(count):
                        types.append(_functype(sr))
                except WasmParseError as exc:
                    type_error = str(exc)
                    facts["parse_errors"].append(f"type section: {exc}")
                entry["count"] = count
            elif sec_id == 2:
                count = sr.u32()
                for _ in range(count):
                    module = sr.name()
                    field = sr.name()
                    kind = sr.u8()
                    if kind == 0:
                        typeidx = sr.u32()
                        sig = types[typeidx] if typeidx < len(types) else f"type{typeidx}?"
                        func_import_sigs.append(sig)
                        imports.append({
                            "module": module, "name": field, "kind": "func",
                            "index": imp_func, "type": sig,
                        })
                        imp_func += 1
                    elif kind == 1:
                        table = _tabletype(sr)
                        imports.append({
                            "module": module, "name": field, "kind": "table",
                            "index": imp_table, "type": f"{table['element']}[{table['min']}..{table['max']}]",
                        })
                        imp_table += 1
                    elif kind == 2:
                        limits = _limits(sr)
                        imports.append({
                            "module": module, "name": field, "kind": "memory",
                            "index": imp_mem,
                            "type": f"[{limits['min']}..{limits['max']}]",
                        })
                        imp_mem += 1
                    elif kind == 3:
                        vt = _valtype(sr)
                        mutable = sr.u8() == 1
                        imports.append({
                            "module": module, "name": field, "kind": "global",
                            "index": imp_global,
                            "type": f"{'mut ' if mutable else ''}{vt}",
                        })
                        imp_global += 1
                    elif kind == 4:
                        sr.u8()
                        typeidx = sr.u32()
                        imports.append({
                            "module": module, "name": field, "kind": "tag",
                            "index": 0, "type": f"type{typeidx}",
                        })
                    else:
                        raise WasmParseError(f"unknown import kind {kind}")
                entry["count"] = count
            elif sec_id == 3:
                count = sr.u32()
                for _ in range(count):
                    func_type_indices.append(sr.u32())
                entry["count"] = count
            elif sec_id == 4:
                count = sr.u32()
                for _ in range(count):
                    facts["tables"].append(_tabletype(sr))
                entry["count"] = count
            elif sec_id == 5:
                count = sr.u32()
                for _ in range(count):
                    facts["memories"].append(_limits(sr))
                entry["count"] = count
            elif sec_id == 6:
                count = sr.u32()
                for _ in range(count):
                    vt = _valtype(sr)
                    mutable = sr.u8() == 1
                    init = _scan_expr_const(sr)
                    facts["globals"].append({
                        "index": imp_global + len(facts["globals"]),
                        "type": vt, "mutable": mutable, "init": init,
                    })
                entry["count"] = count
            elif sec_id == 7:
                count = sr.u32()
                for _ in range(count):
                    name = sr.name()
                    kind = sr.u8()
                    idx = sr.u32()
                    kind_name = {0: "func", 1: "table", 2: "memory", 3: "global", 4: "tag"}.get(kind, f"kind{kind}")
                    sig = ""
                    if kind == 0:
                        if idx >= imp_func:
                            typeidx = func_type_indices[idx - imp_func] if (idx - imp_func) < len(func_type_indices) else None
                            sig = types[typeidx] if typeidx is not None and typeidx < len(types) else ""
                        elif idx < len(func_import_sigs):
                            sig = func_import_sigs[idx]
                    exports.append({
                        "name": name, "kind": kind_name, "index": idx, "type": sig,
                    })
                entry["count"] = count
            elif sec_id == 8:
                facts["start"] = sr.u32()
            elif sec_id == 9:
                count = sr.u32()
                modes: Counter = Counter()
                entries_total = 0
                for _ in range(count):
                    flags = sr.u32()
                    mode, entries = _parse_element_segment(sr, flags)
                    modes[mode] += 1
                    entries_total += entries
                facts["elements"]["segments"] = count
                facts["elements"]["entries"] = entries_total
                facts["elements"]["modes"] = dict(modes)
                entry["count"] = count
            elif sec_id == 10:
                count = sr.u32()
                bodies: list[tuple[int, int]] = []  # (body_start, body_size)
                local_total = 0
                for _ in range(count):
                    body_size = sr.u32()
                    body_start = sr.pos
                    bodies.append((body_start, body_size))
                    local_count = sr.u32()
                    for _ in range(local_count):
                        n = sr.u32()
                        _valtype(sr)
                        local_total += n
                    sr.pos = body_start + body_size
                facts["functions"]["defined"] = count
                facts["functions"]["code_bytes"] = sum(size for _, size in bodies)
                facts["functions"]["locals_total"] = local_total
                entry["count"] = count
                _analyze_bodies(data, bodies, facts, opcode_totals, types, func_type_indices)
            elif sec_id == 11:
                count = sr.u32()
                data_bytes = 0
                for _ in range(count):
                    flags = sr.u32()
                    offset = None
                    if flags == 0:
                        offset = _scan_expr_const(sr)
                    elif flags == 2:
                        sr.u32()
                        offset = _scan_expr_const(sr)
                    elif flags != 1:
                        raise WasmParseError(f"unknown data segment mode {flags}")
                    size = sr.u32()
                    blob = sr.bytes(size)
                    data_bytes += size
                    data_blobs.append(blob)
                    if len(facts["data"]["details"]) < 20:
                        facts["data"]["details"].append({"mode": flags, "offset": offset, "bytes": size})
                facts["data"]["segments"] = count
                facts["data"]["bytes"] = data_bytes
                entry["count"] = count
            elif sec_id == 12:
                facts["data"]["declared_segments"] = sr.u32()
            else:
                raise WasmParseError(f"unknown section id {sec_id}")
        except WasmParseError as exc:
            facts["parse_errors"].append(f"section {sec_id} ({SECTION_NAMES.get(sec_id, '?')}): {exc}")
        finally:
            sr.pos = sec_end

        facts["sections"].append(entry)
        r.pos = sec_end

    facts["types"]["count"] = len(types)
    facts["types"]["error"] = type_error
    facts["types"]["sample"] = types[:40]
    summary: Counter = Counter()
    for sig in types:
        parts = sig.split(" -> ")
        key = f"{parts[0]} -> {parts[1]}"
        summary[key] += 1
    facts["types"]["param_result_summary"] = dict(summary.most_common(12))
    facts["imports"] = imports
    facts["exports"] = exports
    facts["functions"]["imported"] = imp_func
    facts["opcodes"] = dict(opcode_totals.most_common(40))
    facts["strings"] = _extract_strings(data_blobs)

    # name section -> function name map
    name_data = facts["custom"].pop("_name_payload", None)
    if name_data:
        try:
            nr = Reader(name_data)
            while not nr.eof():
                sub_id = nr.u8()
                sub_size = nr.u32()
                sub_end = nr.pos + sub_size
                if sub_id == 0:
                    facts["custom"]["module_name"] = nr.name()
                elif sub_id == 1:
                    count = nr.u32()
                    for _ in range(count):
                        idx = nr.u32()
                        name_map[idx] = nr.name()
                elif sub_id == 2:
                    count = nr.u32()
                    for _ in range(count):
                        _ = nr.u32()  # funcidx
                        inner = nr.u32()
                        for _j in range(inner):
                            nr.u32()
                            nr.name()
                nr.pos = sub_end
        except WasmParseError:
            facts["parse_errors"].append("name section: malformed subsection")
    named_count = 0
    if name_map:
        for idx in range(facts["functions"]["imported"], facts["functions"]["imported"] + facts["functions"]["defined"]):
            if idx in name_map:
                named_count += 1
    facts["functions"]["named"] = named_count
    facts["function_names"] = (
        {str(k): v for k, v in sorted(name_map.items())}
        if name_map and len(name_map) <= MAX_NAME_ENTRIES
        else ({"truncated": len(name_map)} if name_map else {})
    )
    # annotate top functions with names where available
    for top in facts["functions"]["top_by_size"]:
        idx = top["index"]
        if idx in name_map:
            top["name"] = name_map[idx]
    return facts


def _parse_element_segment(sr: Reader, flags: int) -> tuple[str, int]:
    if flags == 0:
        _scan_expr_const(sr)
        count = sr.u32()
        for _ in range(count):
            sr.u32()
        return "active/funcidx", count
    if flags == 1:
        sr.u8()
        count = sr.u32()
        for _ in range(count):
            sr.u32()
        return "passive/funcidx", count
    if flags == 2:
        sr.u32()
        _scan_expr_const(sr)
        sr.u8()
        count = sr.u32()
        for _ in range(count):
            sr.u32()
        return "active-table/funcidx", count
    if flags == 3:
        sr.u8()
        count = sr.u32()
        for _ in range(count):
            sr.u32()
        return "declarative/funcidx", count
    if flags == 4:
        _scan_expr_const(sr)
        count = sr.u32()
        for _ in range(count):
            _scan_expr_const(sr)
        return "active/expr", count
    if flags == 5:
        _valtype(sr)
        count = sr.u32()
        for _ in range(count):
            _scan_expr_const(sr)
        return "passive/expr", count
    if flags == 6:
        sr.u32()
        _scan_expr_const(sr)
        _valtype(sr)
        count = sr.u32()
        for _ in range(count):
            _scan_expr_const(sr)
        return "active-table/expr", count
    if flags == 7:
        _valtype(sr)
        count = sr.u32()
        for _ in range(count):
            _scan_expr_const(sr)
        return "declarative/expr", count
    raise WasmParseError(f"unknown element segment flags {flags}")


def _analyze_bodies(
    data: bytes,
    bodies: list[tuple[int, int]],
    facts: dict,
    opcode_totals: Counter,
    types: list[str],
    func_type_indices: list[int],
) -> None:
    func_base = facts["functions"]["imported"]
    top_set = sorted(bodies, key=lambda b: -b[1])[:MAX_TOP_FUNCTIONS]
    top_starts = {b[0] for b in top_set}
    histogram: Counter = Counter()
    instr_total = 0
    simd_ops = 0
    for i, (body_start, body_size) in enumerate(bodies):
        index = func_base + i
        r = Reader(data, body_start, body_start + body_size)
        degraded = False
        local_count = 0
        try:
            decls = r.u32()
            for _ in range(decls):
                n = r.u32()
                _valtype(r)
                local_count += n
        except WasmParseError:
            degraded = True
        counter, instrs, calls, scan_degraded = _scan_instructions(
            data, r.pos, body_start + body_size, body_start in top_starts
        )
        if scan_degraded:
            degraded = True
        if body_size > HISTOGRAM_BUCKETS[-1]:
            histogram[f"> {HISTOGRAM_BUCKETS[-1]}"] += 1
        else:
            bucket = next(b for b in HISTOGRAM_BUCKETS if body_size <= b)
            histogram[f"<= {bucket}"] += 1
        if not degraded:
            facts["functions"]["scan_ok"] += 1
            instr_total += instrs
            opcode_totals.update(counter)
            simd_ops += sum(v for k, v in counter.items() if k.startswith(("v128.", "i8x16.", "i16x8.", "i32x4.", "i64x2.", "f32x4.", "f64x2.", "simd.")))
        else:
            facts["functions"]["scan_degraded"] += 1
        if body_start in top_starts:
            sig = ""
            typeidx = func_type_indices[i] if i < len(func_type_indices) else None
            if typeidx is not None and typeidx < len(types):
                sig = types[typeidx]
            facts["functions"]["top_by_size"].append({
                "index": index,
                "name": None,
                "type": sig,
                "locals": local_count,
                "body_bytes": body_size,
                "instructions": instrs,
                "top_opcodes": ", ".join(f"{k}×{v}" for k, v in counter.most_common(5)),
                "calls": calls[:16],
                "degraded": degraded,
            })
    hist_out = {f"<= {b}": histogram.get(f"<= {b}", 0) for b in HISTOGRAM_BUCKETS}
    hist_out[f"> {HISTOGRAM_BUCKETS[-1]}"] = histogram.get(f"> {HISTOGRAM_BUCKETS[-1]}", 0)
    facts["functions"]["size_histogram"] = hist_out
    facts["functions"]["instruction_count"] = instr_total
    facts["functions"]["simd_ops"] = simd_ops


def _parse_custom(sr: Reader, facts: dict) -> None:
    name = sr.name()
    payload_end = sr.end
    payload_start = sr.pos
    facts["custom"]["sections"].append({"name": name, "bytes": payload_end - payload_start})
    if name == "name":
        facts["custom"]["_name_payload"] = data_slice(sr.data, payload_start, payload_end)
    elif name == "producers":
        try:
            producers: dict[str, list[str]] = {}
            count = sr.u32()
            for _ in range(count):
                field = sr.name()
                values = []
                for _v in range(sr.u32()):
                    values.append(f"{sr.name()} {sr.name()}")
                producers[field] = values
            facts["custom"]["producers"] = producers
        except WasmParseError:
            pass


def data_slice(data: bytes, start: int, end: int) -> bytes:
    return data[start:end]


def _human_size(size: float) -> str:
    for unit in ("B", "KB", "MB", "GB"):
        if size < 1024 or unit == "GB":
            return f"{size:.1f} {unit}" if unit != "B" else f"{int(size)} B"
        size /= 1024
    return f"{size:.1f} GB"


def _sig_groups(entries: list[dict]) -> Counter:
    return Counter(e.get("type", "?") for e in entries if e.get("kind") == "func")


def compare_facts(old: dict | None, new: dict) -> dict:
    """Compute a readable delta between two facts payloads."""
    delta: dict = {"changed": False}
    if not old:
        return delta
    old_f = old.get("facts", old)
    new_f = new.get("facts", new)
    notes = []
    old_size = old_f.get("header", {}).get("size", 0)
    new_size = new_f.get("header", {}).get("size", 0)
    if old_size != new_size:
        notes.append(f"size {old_size:,} → {new_size:,} bytes ({new_size - old_size:+,})")
    old_fn = old_f.get("functions", {})
    new_fn = new_f.get("functions", {})
    if old_fn.get("defined") != new_fn.get("defined"):
        notes.append(f"defined functions {old_fn.get('defined', 0):,} → {new_fn.get('defined', 0):,}")
    if old_fn.get("imported") != new_fn.get("imported"):
        notes.append(f"imported functions {old_fn.get('imported', 0):,} → {new_fn.get('imported', 0):,}")
    if old_fn.get("code_bytes") != new_fn.get("code_bytes"):
        notes.append(f"code bytes {old_fn.get('code_bytes', 0):,} → {new_fn.get('code_bytes', 0):,}")
    old_data = old_f.get("data", {})
    new_data = new_f.get("data", {})
    if old_data.get("bytes") != new_data.get("bytes"):
        notes.append(f"data bytes {old_data.get('bytes', 0):,} → {new_data.get('bytes', 0):,}")

    old_module_name = old_f.get("custom", {}).get("module_name")
    new_module_name = new_f.get("custom", {}).get("module_name")
    if old_module_name != new_module_name and new_module_name:
        note = f"name-section module id `{old_module_name}` → `{new_module_name}`"
        if (
            old_module_name
            and new_module_name.rsplit(".", 1)[-1] == old_module_name.rsplit(".", 1)[-1]
        ):
            note += " (numeric version suffix unchanged — same module version, re-randomized prefix)"
        notes.append(note)

    old_exp = _sig_groups(old_f.get("exports", []))
    new_exp = _sig_groups(new_f.get("exports", []))
    export_changes = []
    for sig, count in new_exp.items():
        diff = count - old_exp.get(sig, 0)
        if diff > 0:
            export_changes.append(f"+{diff} × `{sig}`")
    for sig, count in old_exp.items():
        if sig not in new_exp and count:
            export_changes.append(f"-{count} × `{sig}`")
    if export_changes:
        notes.append("export signatures: " + "; ".join(export_changes[:MAX_EXPORT_SIG_GROUPS]))

    old_imp = _sig_groups(old_f.get("imports", []))
    new_imp = _sig_groups(new_f.get("imports", []))
    import_changes = []
    for sig, count in new_imp.items():
        diff = count - old_imp.get(sig, 0)
        if diff > 0:
            import_changes.append(f"+{diff} × `{sig}`")
    for sig, count in old_imp.items():
        if sig not in new_imp and count:
            import_changes.append(f"-{count} × `{sig}`")
    if import_changes:
        notes.append("import signatures: " + "; ".join(import_changes[:MAX_EXPORT_SIG_GROUPS]))

    old_names = {e.get("name") for e in old_f.get("exports", [])}
    new_names = {e.get("name") for e in new_f.get("exports", [])}
    churned = len(old_names & new_names)
    total = max(len(old_names), len(new_names), 1)
    if churned != total and old_names and new_names:
        notes.append(
            f"export identifiers rotated by the obfuscator: {churned}/{total} names kept"
            " (identifier names are randomly assigned per build; compare signatures instead)"
        )
    old_strings = {s.get("text") for s in old_f.get("strings", [])}
    new_strings = {s.get("text") for s in new_f.get("strings", [])}
    added_strings = sorted(new_strings - old_strings)[:12]
    removed_strings = sorted(old_strings - new_strings)[:12]
    if added_strings:
        notes.append("new embedded strings: " + "; ".join(f"`{s[:60]}`" for s in added_strings[:6]))
    if removed_strings:
        notes.append("removed embedded strings: " + "; ".join(f"`{s[:60]}`" for s in removed_strings[:6]))

    if notes:
        delta["changed"] = True
        delta["notes"] = notes
    return delta


def render_module_markdown(facts: dict, context: dict, delta: dict | None = None) -> str:
    """Render the per-module analysis report (English, matching repo style)."""
    module = context.get("module", "module")
    env = context.get("environment", "?")
    lines: list[str] = []
    add = lines.append

    add(f"# WASM module: `{module}`")
    add("")
    add(f"> environment **{env}** · build `{context.get('build', '?')}` · analyzed {context.get('analyzed_at', '?')}")
    add(f"> source: {context.get('url', '?')}")
    size = facts.get("header", {}).get("size", 0)
    sha = context.get("sha256", "")
    add(f"> {size:,} bytes ({_human_size(size)}) · sha256 `{sha[:16]}…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)")
    add("")

    if delta and delta.get("changed"):
        add("## Changes since the previous archived build")
        add("")
        for note in delta.get("notes", []):
            add(f"- {note}")
        add("")

    fn = facts.get("functions", {})
    imports = facts.get("imports", [])
    exports = facts.get("exports", [])
    data_info = facts.get("data", {})
    custom = facts.get("custom", {})

    add("## Overview")
    add("")
    add("| Metric | Value |")
    add("|---|---|")
    add(f"| Functions defined / imported | {fn.get('defined', 0):,} / {fn.get('imported', 0):,} |")
    add(f"| Exports / imports | {len(exports):,} / {len(imports):,} |")
    add(f"| Code bytes (function bodies) | {fn.get('code_bytes', 0):,} ({_human_size(fn.get('code_bytes', 0))}) |")
    add(f"| Total local variables | {fn.get('locals_total', 0):,} |")
    add(f"| Instructions (scanable bodies) | {fn.get('instruction_count', 0):,} |")
    add(f"| Data segments / bytes | {data_info.get('segments', 0):,} / {data_info.get('bytes', 0):,} |")
    add(f"| Element segments / entries | {facts.get('elements', {}).get('segments', 0):,} / {facts.get('elements', {}).get('entries', 0):,} |")
    add(f"| Memories / tables / globals | {len(facts.get('memories', []))} / {len(facts.get('tables', []))} / {len(facts.get('globals', []))} |")
    module_name = custom.get("module_name")
    if module_name:
        add(f"| name-section module id | `{module_name}` |")
    named = fn.get("named", 0)
    if named:
        add(f"| Named functions (name section) | {named:,} |")
    add(f"| Sections | {len(facts.get('sections', []))} |")
    add("")

    add("## Sections")
    add("")
    add("| id | Section | Bytes | Items |")
    add("|---|---|---:|---:|")
    for sec in facts.get("sections", []):
        add(f"| {sec['id']} | {sec['name']} | {sec['bytes']:,} | {sec.get('count', '—')} |")
    add("")

    types = facts.get("types", {})
    if types.get("count"):
        add("## Types")
        add("")
        add(f"{types['count']:,} function types{'; ' + 'top shapes: ' + ', '.join(f'`{k}` ×{v}' for k, v in list(types.get('param_result_summary', {}).items())[:8]) if types.get('param_result_summary') else ''}")
        if types.get("error"):
            add("")
            add(f"> type section parse stopped early: `{types['error']}`")
        add("")

    add("## Imports")
    add("")
    if imports:
        add(f"{len(imports):,} imported items (JS callbacks and shared state):")
        add("")
        rows = imports[:MAX_IMPORTS_TABLE]
        add("| # | module.name | kind | type |")
        add("|---:|---|---|---|")
        for i, imp in enumerate(rows):
            label = f"{imp['module']}.{imp['name']}"
            add(f"| {imp['index']} | `{label}` | {imp['kind']} | `{imp.get('type', '')}` |")
        if len(imports) > len(rows):
            add(f"| … | {len(imports) - len(rows)} more in `{module}.facts.json` | | |")
    else:
        add("none")
    add("")

    add("## Exports")
    add("")
    if exports:
        add(f"{len(exports):,} exported items — the API surface consumed by the JS glue:")
        add("")
        rows = exports[:MAX_EXPORTS_TABLE]
        add("| name | kind | index | type |")
        add("|---|---|---:|---|")
        for exp in rows:
            add(f"| `{exp['name']}` | {exp['kind']} | {exp['index']} | `{exp.get('type', '')}` |")
        if len(exports) > len(rows):
            add(f"| … | | | {len(exports) - len(rows)} more in `{module}.facts.json` |")
        add("")
        add("> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.")
    else:
        add("none")
    add("")

    memories = facts.get("memories", [])
    tables = facts.get("tables", [])
    globals_list = facts.get("globals", [])
    if memories or tables or globals_list:
        add("## Memory, tables, globals")
        add("")
        for i, mem in enumerate(memories):
            add(f"- memory {i}: min {mem['min']:,} pages · max " + (f"{mem['max']:,}" if mem.get("max") is not None else "∞") + f" · shared={mem.get('shared', False)}")
        for i, tab in enumerate(tables):
            add(f"- table {i}: {tab.get('element')} · min {tab['min']:,} · max " + (f"{tab['max']:,}" if tab.get("max") is not None else "∞"))
        mutable_globals = [g for g in globals_list if g.get("mutable")]
        add(f"- globals: {len(globals_list)} ({len(mutable_globals)} mutable); sample: " + ", ".join(f"`{g['type']}` = {g['init']}" for g in globals_list[:6]))
        add("")

    add("## Functions")
    add("")
    ok = fn.get("scan_ok", 0)
    degraded = fn.get("scan_degraded", 0)
    add(f"- {fn.get('defined', 0):,} bodies · {fn.get('code_bytes', 0):,} code bytes · avg {_human_size(fn.get('code_bytes', 0) / max(fn.get('defined', 0), 1))}")
    add(f"- instruction scan: {ok:,} bodies fully decoded, {degraded} degraded (unknown/extension opcodes)")
    if fn.get("simd_ops"):
        add(f"- SIMD instructions: {fn['simd_ops']:,}")
    hist = fn.get("size_histogram", {})
    if hist:
        add("")
        add("| Body size | Functions |")
        add("|---|---:|")
        for label, count in hist.items():
            if count:
                add(f"| {label} bytes | {count:,} |")
    top = fn.get("top_by_size", [])
    if top:
        add("")
        add("Largest functions:")
        add("")
        add("| # | type | locals | body bytes | instructions | dominant opcodes |")
        add("|---:|---|---:|---:|---:|---|")
        for t in top:
            name = t.get("name")
            label = f"{t['index']}" + (f" `{name}`" if name else "")
            add(f"| {label} | `{t.get('type', '')}` | {t['locals']:,} | {t['body_bytes']:,} | {t['instructions']:,} | {t.get('top_opcodes', '')} |")
    names = facts.get("function_names", {})
    if isinstance(names, dict) and names and "truncated" not in names:
        add("")
        add("<details><summary>Function names from the name section</summary>")
        add("")
        add("```")
        for idx, name in list(names.items())[:400]:
            add(f"{idx}: {name}")
        if len(names) > 400:
            add(f"… {len(names) - 400} more")
        add("```")
        add("")
        add("</details>")
    add("")

    strings = facts.get("strings", [])
    if strings:
        add("## Embedded strings (data segments)")
        add("")
        add(f"{len(strings)} printable strings ≥6 chars; largest:")
        add("")
        add("```")
        for s in strings[:20]:
            add(s["text"][:MAX_STRING_TEXT])
        add("```")
        add("")

    opcodes = facts.get("opcodes", {})
    if opcodes:
        add("## Opcode histogram (aggregated)")
        add("")
        add("| opcode | count |")
        add("|---|---:|")
        for name, count in list(opcodes.items())[:25]:
            add(f"| `{name}` | {count:,} |")
        add("")

    producers = custom.get("producers", {})
    if custom.get("sections"):
        add("## Custom sections")
        add("")
        for sec in custom["sections"]:
            add(f"- `{sec['name']}` · {sec['bytes']:,} bytes")
        if producers:
            add("")
            add("Producers:")
            for field, values in producers.items():
                add(f"- {field}: " + "; ".join(values))
        add("")

    errors = facts.get("parse_errors", [])
    add("## Analysis quality")
    add("")
    add(f"- sections consumed: {sum(1 for s in facts.get('sections', []))}, structural errors: {len(errors)}")
    add(f"- bodies fully decoded: {ok:,}/{fn.get('defined', 0):,} (degraded: {degraded})")
    if errors:
        add("")
        add("Parse notes:")
        for err in errors[:10]:
            add(f"- {err}")
    add("")
    return "\n".join(lines)


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Clean-room WebAssembly inspector (W3C binary format)")
    parser.add_argument("wasm", help="path to a .wasm binary")
    parser.add_argument("--json", help="write facts JSON to this path")
    parser.add_argument("--md", help="write markdown report to this path")
    args = parser.parse_args(argv)

    path = Path(args.wasm)
    data = path.read_bytes()
    digest = hashlib.sha256(data).hexdigest()
    facts = parse_module(data)
    context = {
        "module": path.name.rsplit(".", 2)[0] if path.name.count(".") >= 2 else path.stem,
        "environment": "standalone",
        "build": "-",
        "url": str(path),
        "sha256": digest,
        "analyzed_at": "-",
    }
    envelope = {"context": context, "facts": facts}
    if args.json:
        Path(args.json).write_text(json.dumps(envelope, indent=1) + "\n", encoding="utf-8")
        print(f"wrote {args.json}")
    if args.md:
        text = render_module_markdown(facts, context, None)
        Path(args.md).write_text(text, encoding="utf-8")
        print(f"wrote {args.md}")
    if not args.json and not args.md:
        print(json.dumps({
            "context": context,
            "facts": {
                "header": facts["header"],
                "functions": {k: facts["functions"][k] for k in ("defined", "imported", "code_bytes", "scan_ok", "scan_degraded", "instruction_count")},
                "exports": len(facts["exports"]),
                "imports": len(facts["imports"]),
                "data": {"segments": facts["data"]["segments"], "bytes": facts["data"]["bytes"]},
                "module_name": facts["custom"].get("module_name"),
                "parse_errors": facts["parse_errors"],
            },
        }, indent=1))
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except WasmParseError as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        raise SystemExit(1)
