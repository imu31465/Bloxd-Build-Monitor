import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
import regenerate_historic_diff as report_generator


class HistoricalReportIndexTests(unittest.TestCase):
    def test_part_links_target_parts_subdirectory(self):
        links = report_generator.render_part_index_links([
            {
                "filename": "part-001.md",
                "files": ["README.md", "bundles/example.js"],
                "chars": 1234,
            }
        ])

        self.assertEqual(links[0], "### [part-001.md](parts/part-001.md)")
        self.assertIn("- Files: 2 · 1,234 characters", links)
        self.assertIn("- Includes: README.md, bundles/example.js", links)


if __name__ == "__main__":
    unittest.main()
