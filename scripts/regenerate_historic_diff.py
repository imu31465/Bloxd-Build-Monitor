#!/usr/bin/env python3
"""Generate a complete, paginated readable report for a historical build commit."""
from __future__ import annotations

import difflib
import hashlib
import html
import json
import re
import subprocess
from pathlib import Path

import monitor

ROOT = Path(__file__).resolve().parents[1]
REQUEST_PATH = ROOT / ".diff-preview-request"
MAX_PART_CHARS = 1_500_000
TICK = chr(96) 


def run_git(*args: str, binary: bool = False):
    result = subprocess.run(
        ["git", *args],
        cwd=ROOT,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=False,
    )
    if result.returncode:
        raise RuntimeError(
            f"git {' '.join(args)} failed: "
            + result.stderr.decode("utf-8", "replace").strip()
        )
    return result.stdout if binary else result.stdout.decode("utf-8", "replace")


def get_blob(ref: str, path: str) -> bytes | None:
    result = subprocess.run(
        ["git", "show", f"{ref}:{path}"],
        cwd=ROOT,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=False,
    )
    return result.stdout if result.returncode == 0 else None


def markdown_file_block(path: str, old_bytes: bytes | None, new_bytes: bytes | None):
    old_exists = old_bytes is not None
    new_exists = new_bytes is not None
    old_bytes = old_bytes or b""
    new_bytes = new_bytes or b""
    status = "new" if not old_exists else ("deleted" if not new_exists else "modified")
    safe_path = html.escape(path)

    if b"\0" in old_bytes or b"\0" in new_bytes:
        old_hash = hashlib.sha256(old_bytes).hexdigest()[:16] if old_exists else "—"
        new_hash = hashlib.sha256(new_bytes).hexdigest()[:16] if new_exists else "—"
        lines = [
            "<details>",
            f"<summary><code>{safe_path}</code> · {status} · binary</summary>",
            "",
            f"- Previous: {len(old_bytes):,} bytes · SHA-256 {old_hash}" if old_exists else "- Previous: file did not exist",
            f"- Current: {len(new_bytes):,} bytes · SHA-256 {new_hash}" if new_exists else "- Current: file deleted",
            "- Binary content is represented by size and SHA-256 because it cannot be shown as a line diff.",
            "",
            "</details>",
            "",
        ]
        return "\n".join(lines), {"binary": 1, "filtered": 0, "hunks": 0, "add": 0, "del": 0}

    try:
        old_text = old_bytes.decode("utf-8")
        new_text = new_bytes.decode("utf-8")
    except UnicodeDecodeError:
        old_hash = hashlib.sha256(old_bytes).hexdigest()[:16] if old_exists else "—"
        new_hash = hashlib.sha256(new_bytes).hexdigest()[:16] if new_exists else "—"
        lines = [
            "<details>",
            f"<summary><code>{safe_path}</code> · {status} · non-UTF-8 binary</summary>",
            "",
            f"- Previous: {len(old_bytes):,} bytes · SHA-256 {old_hash}" if old_exists else "- Previous: file did not exist",
            f"- Current: {len(new_bytes):,} bytes · SHA-256 {new_hash}" if new_exists else "- Current: file deleted",
            "",
            "</details>",
            "",
        ]
        return "\n".join(lines), {"binary": 1, "filtered": 0, "hunks": 0, "add": 0, "del": 0}

    is_js = Path(path).suffix.lower() in {".js", ".mjs", ".cjs"}
    compare_old = monitor.normalize_minified_js_identifiers(old_text) if is_js else old_text
    compare_new = monitor.normalize_minified_js_identifiers(new_text) if is_js else new_text

    diff_lines = list(difflib.unified_diff(
        compare_old.splitlines(),
        compare_new.splitlines(),
        fromfile=f"a/{path}",
        tofile=f"b/{path}",
        lineterm="",
        n=3,
    ))

    if not diff_lines:
        if is_js and old_text != new_text and compare_old == compare_new:
            lines = [
                "<details>",
                f"<summary><code>{safe_path}</code> · {status} · only two-character identifier churn</summary>",
                "",
                "All differences in this file were limited to two-character JavaScript identifiers and are intentionally suppressed.",
                "",
                "</details>",
                "",
            ]
            return "\n".join(lines), {"binary": 0, "filtered": 1, "hunks": 0, "add": 0, "del": 0}
        return "", {"binary": 0, "filtered": 0, "hunks": 0, "add": 0, "del": 0}

    additions = sum(line.startswith("+") and not line.startswith("+++") for line in diff_lines)
    deletions = sum(line.startswith("-") and not line.startswith("---") for line in diff_lines)
    hunks = monitor.split_unified_hunks(diff_lines)
    lines = [
        "<details>",
        f"<summary><code>{safe_path}</code> · {status} · +{additions} / -{deletions}</summary>",
        "",
    ]
    if is_js:
        lines.extend([
            "JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.",
            "",
        ])

    for number, hunk in enumerate(hunks, start=1):
        header = hunk[0]
        match = re.match(r"@@ .*? @@\s*(.*)", header)
        context = html.escape((match.group(1).strip() if match else "")[:100] or "Change")
        hunk_additions = sum(line.startswith("+") for line in hunk[1:])
        hunk_deletions = sum(line.startswith("-") for line in hunk[1:])
        lines.extend([
            "<details>",
            f"<summary>Hunk {number} · {context} · +{hunk_additions} / -{hunk_deletions}</summary>",
            "",
            TICK * 3 + "diff",
            *hunk,
            TICK * 3,
            "",
            "</details>",
            "",
        ])
    lines.extend(["</details>", ""])
    return "\n".join(lines), {
        "binary": 0, "filtered": 0, "hunks": len(hunks),
        "add": additions, "del": deletions,
    }


def main() -> int:
    request = json.loads(REQUEST_PATH.read_text(encoding="utf-8"))
    base_ref = request["base"]
    head_ref = request["head"]
    output_dir = request["output_dir"]

    if not re.fullmatch(r"[0-9a-f]{40}", base_ref) or not re.fullmatch(r"[0-9a-f]{40}", head_ref):
        raise ValueError("The request must use full 40-character commit SHAs.")
    if not output_dir.startswith("diffs/") or ".." in Path(output_dir).parts:
        raise ValueError("The report output directory must be inside diffs/.")

    # Confirm both commits are available in the full-history checkout.
    run_git("cat-file", "-e", f"{base_ref}^{{commit}}")
    run_git("cat-file", "-e", f"{head_ref}^{{commit}}")

    paths = [
        path for path in run_git("diff", "--name-only", "-z", base_ref, head_ref, "--").split("\0")
        if path and not path.startswith("diffs/")
    ]
    if not paths:
        raise RuntimeError("No changed files exist between the requested commits.")

    destination = ROOT / output_dir
    parts_dir = destination / "parts"
    parts_dir.mkdir(parents=True, exist_ok=True)
    for stale_part in parts_dir.glob("part-*.md"):
        stale_part.unlink()

    part_number = 0
    current_blocks: list[str] = []
    current_paths: list[str] = []
    current_size = 0
    part_index = []
    path_to_part = {}
    totals = {"files": 0, "binary": 0, "filtered": 0, "hunks": 0, "add": 0, "del": 0}

    def flush_part():
        nonlocal part_number, current_blocks, current_paths, current_size
        if not current_blocks:
            return
        part_number += 1
        filename = f"part-{part_number:03d}.md"
        content = [
            f"# Historical build diff — part {part_number:03d}",
            "",
            f"- Base: {base_ref}",
            f"- Build: {head_ref}",
            f"- Files in this part: {len(current_paths)}",
            "",
            *current_blocks,
        ]
        (parts_dir / filename).write_text("\n".join(content).rstrip() + "\n", encoding="utf-8")
        part_index.append({
            "filename": filename,
            "files": list(current_paths),
            "chars": current_size,
        })
        for path in current_paths:
            path_to_part[path] = filename
        current_blocks = []
        current_paths = []
        current_size = 0

    for number, path in enumerate(paths, start=1):
        old_bytes = get_blob(base_ref, path)
        new_bytes = get_blob(head_ref, path)
        block, metrics = markdown_file_block(path, old_bytes, new_bytes)
        totals["files"] += 1
        for key in ("binary", "filtered", "hunks", "add", "del"):
            totals[key] += metrics[key]
        if not block:
            continue
        if current_blocks and current_size + len(block) > MAX_PART_CHARS:
            flush_part()
        current_blocks.append(block)
        current_paths.append(path)
        current_size += len(block)
        if number % 25 == 0:
            print(f"Rendered {number}/{len(paths)} changed files...")
    flush_part()

    part_links = []
    for part in part_index:
        display = ", ".join(part["files"][:4])
        if len(part["files"]) > 4:
            display += f", +{len(part['files']) - 4} more"
        part_links.extend([
            f"### [{part['filename']}]({part['filename']})",
            "",
            f"- Files: {len(part['files'])} · {part['chars']:,} characters",
            f"- Includes: {display}",
            "",
        ])

    css_path = "bundles/bloxd.io/chunks/css/76.css"
    js_path = "bundles/bloxd.io/chunks/js/207.js"
    example_links = []
    for label, path in (("CSS 76", css_path), ("JavaScript 207", js_path)):
        part = path_to_part.get(path)
        if part:
            example_links.append(f"- {label}: [open {part}](parts/{part})")

    index = [
        "# Complete historical build diff — 2026-11-18 15:07 JST",
        "",
        f"Comparison: [{base_ref}](https://github.com/imu31465/Bloxd-Build-Monitor/commit/{base_ref}) → [{head_ref}](https://github.com/imu31465/Bloxd-Build-Monitor/commit/{head_ref})",
        "",
        "Every changed file from the historical build is represented below. Files are grouped into smaller pages so the diff remains navigable. Each file has its own collapsible box, and every independent hunk has a nested collapsible box.",
        "",
        f"- Changed files examined: {totals['files']}",
        f"- Report pages: {len(part_index)}",
        f"- Individual diff hunks: {totals['hunks']}",
        f"- Additions after JavaScript identifier filtering: {totals['add']:,}",
        f"- Deletions after JavaScript identifier filtering: {totals['del']:,}",
        f"- Files with only two-character identifier churn: {totals['filtered']}",
        f"- Binary files represented by size and SHA-256: {totals['binary']}",
        "",
        "JavaScript comparison suppresses only identifiers exactly two characters long. String literals, comments, properties, object keys, and all other tokens remain in the diff. Binary files are represented by size and SHA-256 because line diffs are not applicable.",
        "",
        "## Requested examples",
        "",
        *example_links,
        "",
        "## All diff pages",
        "",
        *part_links,
    ]
    index_path = destination / "index.md"
    index_path.write_text("\n".join(index).rstrip() + "\n", encoding="utf-8")

    changes_path = ROOT / "CHANGES.md"
    changes = changes_path.read_text(encoding="utf-8")
    changes = changes.replace(
        "diffs/9ad456477d01-readable-preview.md",
        f"{output_dir}/index.md",
    )
    changes_path.write_text(changes, encoding="utf-8")

    print(json.dumps({
        "changed_files": totals["files"],
        "report_pages": len(part_index),
        "hunks": totals["hunks"],
        "additions": totals["add"],
        "deletions": totals["del"],
        "filtered_only_files": totals["filtered"],
        "binary_files": totals["binary"],
        "requested_examples": example_links,
        "index": f"{output_dir}/index.md",
    }, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
