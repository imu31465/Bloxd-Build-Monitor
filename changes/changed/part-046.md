# Changed — Bundle Modifications Report (Part 046 / 050)

- **Updated at**: `2026-11-24T00:42 JST`
- **Part**: `46 / 50` (**369** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 045](part-045.md) · [Part 047 →](part-047.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (bbb6l5.0244a119 → w4ddu.56408518 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (812 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed)

#### 142. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2063` → after: `L2075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2075) · [Before (L2063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2063)

```diff
-             if (!(0, lq.H)(qq)) throw new Error(`Duplicate chunk at ${Oq.chunkX}, ${Oq.chunkY}, ${Oq.chunkZ}`);
+             if (!(0, wC.H)(CC)) throw new Error(`Duplicate chunk at ${bC.chunkX}, ${bC.chunkY}, ${bC.chunkZ}`);
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2066` → after: `L2078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2078) · [Before (L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2066)

```diff
-           return new cq.d(qq, {
+           return new qC.b(CC, {
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2081` → after: `L2093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2093) · [Before (L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2081)

```diff
-             rle: new Uint8Array([198, 1, 0, 1, 103, 3, 0, 1, 103, 27, 0, 5, 103, 12, 0, 1, 103, 3, 0, 1, 103, 11, 0, 3, 103, 3, 0, 1, 103, 3, 0, 1, 103, 5, 0, 5, 103, 7, 0, 1, 103, 3, 0, 1, 103, 5, 0, 5, 103, 6, 0, 3, 103, 8, 0, 5, 103, 6, 0, 3, 103, 19, 0, 3, 103, 225, 6, 0, 1,  … [truncated]
+             rle: (0, WC.e)("xgEAAWcDAAFnGwAFZwwAAWcDAAFnCwADZwMAAWcDAAFnBQAFZwcAAWcDAAFnBQAFZwYAA2cIAAVnBgADZxMAA2fhBgABZxcAAWcDAAFnAQAFZw4AAWcGAAVnAQAFZwQAAWcHAAVnBQADZwEAAWcBAANnAQABZwEABWcFAAVnBwAJZwEABWcGAANnCAAIZwMAA2cTAANnLAAD7QPNBAAXHAkABRwBAhEcCQABAgQcAQIPHAICCQACAgEcAgIB … [truncated]
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2091` → after: `L2103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2103) · [Before (L2091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2091)

```diff
-             rle: new Uint8Array([207, 1, 0, 1, 103, 3, 0, 1, 103, 27, 0, 5, 103, 28, 0, 3, 103, 247, 5, 0, 1, 163, 15, 7, 2, 1, 163, 15, 24, 0, 7, 163, 15, 116, 0, 1, 103, 3, 0, 1, 103, 27, 0, 5, 103, 6, 0, 1, 103, 21, 0, 3, 103, 5, 0, 5, 103, 23, 0, 1, 103, 3, 0, 5, 103, 23, 0,  … [truncated]
+             rle: (0, WC.e)("zwEAAWcDAAFnGwAFZxwAA2f3BQABow8HAgGjDxgAB6MPdAABZwMAAWcbAAVnBgABZxUAA2cFAAVnFwABZwMABWcXAAhnGQADZ7kFAAGjDwMCBhwCAgGjDxQAAaMPCQIBow8WAAKjDwYCAaMPGQAGow8aAAGWAQEAAZYBAgABDhYAAWcIAAEOFAAFZwUAAWcBDgFnEwAFZwQABWcTAANnAwABZwEABWcXAAhnGAAFZxwAA2eXBQABow8CAgsc … [truncated]
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2101` → after: `L2113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2113) · [Before (L2101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2101)

```diff
-             rle: new Uint8Array([139, 9, 0, 1, 103, 29, 0, 5, 103, 2, 0, 1, 103, 19, 0, 1, 103, 3, 0, 11, 103, 17, 0, 5, 103, 1, 0, 3, 103, 1, 0, 5, 103, 18, 0, 3, 103, 7, 0, 3, 103, 249, 5, 0, 8, 2, 24, 0, 1, 163, 15, 1, 2, 1, 163, 15, 3, 2, 2, 163, 15, 24, 0, 1, 14, 1, 163, 15, … [truncated]
+             rle: (0, WC.e)("iwkAAWcdAAVnAgABZxMAAWcDAAtnEQAFZwEAA2cBAAVnEgADZwcAA2f5BQAIAhgAAaMPAQIBow8DAgKjDxgAAQ4Bow8BAAOjDxoAAQ4EAAEOGQABZwEOAWcDAAEOGAAFZwEAAWcBDgFnAQABZwMAAWcOAAFnAgAPZwwABWcBAANnAQAFZwEAA2cNAAVnAQAIZxMAA2cDAANn2AUADRwCAhEABwIFHAICAaMPEQANAgGjDxIAB6MPBQIBow8T … [truncated]
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2111` → after: `L2123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2123) · [Before (L2111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2111)

```diff
-             rle: new Uint8Array([140, 9, 0, 1, 103, 3, 0, 1, 103, 21, 0, 1, 103, 3, 0, 1, 103, 1, 0, 5, 103, 1, 0, 1, 103, 19, 0, 5, 103, 2, 0, 8, 103, 18, 0, 3, 103, 6, 0, 5, 103, 28, 0, 3, 103, 251, 5, 0, 6, 2, 26, 0, 1, 163, 15, 5, 2, 27, 0, 5, 163, 15, 29, 0, 1, 14, 27, 0, 1, … [truncated]
+             rle: (0, WC.e)("jAkAAWcDAAFnFQABZwMAAWcBAAVnAQABZxMABWcCAAhnEgADZwYABWccAANn+wUABgIaAAGjDwUCGwAFow8dAAEOGwABZwMAAQ4VAAFnAwAGZwEOAWcSAAVnAQAJZxEABWcCAAhnEgADZwcAA2chAAPtA80FAAQCBQAIAg8AAaMPAwIFAAGjDwcCEAADow8FAAEOB6MPEQABlgEBDgUAAQ4DAAGWARUAAQ4EAAFnAQ4BZxcAAWcBDgFnAgAF … [truncated]
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2121` → after: `L2133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2133) · [Before (L2121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2121)

```diff
-             rle: new Uint8Array([244, 9, 0, 1, 103, 3, 0, 1, 103, 27, 0, 5, 103, 28, 0, 3, 103, 177, 7, 0, 1, 103, 3, 0, 1, 103, 8, 0, 1, 103, 18, 0, 5, 103, 6, 0, 5, 103, 17, 0, 3, 103, 7, 0, 5, 103, 28, 0, 3, 103, 178, 5, 0, 1, 163, 15, 6, 2, 1, 0, 1, 2, 5, 28, 1, 2, 18, 0, 1,  … [truncated]
+             rle: (0, WC.e)("9AkAAWcDAAFnGwAFZxwAA2exBwABZwMAAWcIAAFnEgAFZwYABWcRAANnBwAFZxwAA2eyBQABow8GAgEAAQIFHAECEgABow8EAgMAAQIDHAECFAADow8EAAICARwCAhUAAZYBBQABow8DAgGjDxwAAaMPAQIBow8dAAGWAQGjDwEOHwABDhQAAWcJAAFnAQ4BZxEABWcGAAVnEAAFZwYABWcRAANnCAADZ7EFAAICBRwBAggcAQIPAAGjDwEC … [truncated]
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2126` → after: `L2138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2138) · [Before (L2126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2126)

```diff
-             rle: new Uint8Array([128, 128, 2, 0])
+             rle: (0, WC.e)("gIACAA==")
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2136` → after: `L2148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2148) · [Before (L2136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2136)

```diff
-             rle: new Uint8Array([206, 18, 0, 1, 103, 3, 0, 1, 103, 27, 0, 5, 103, 28, 0, 3, 103, 34, 0, 1, 103, 3, 0, 1, 103, 27, 0, 5, 103, 28, 0, 3, 103, 146, 4, 0, 1, 2, 5, 28, 1, 2, 1, 0, 1, 2, 5, 28, 1, 2, 17, 0, 1, 163, 15, 1, 2, 3, 28, 2, 2, 1, 0, 2, 2, 3, 28, 2, 2, 18, 0, … [truncated]
+             rle: (0, WC.e)("zhIAAWcDAAFnGwAFZxwAA2ciAAFnAwABZxsABWccAANnkgQAAQIFHAECAQABAgUcAQIRAAGjDwECAxwCAgEAAgIDHAICEgABAgMcAQIDAAECAxwBAhMAAaMPAwIBow8DAAGjDwMCAaMPDgABZwMAAWcBAAMCBQADAgGWAQ4ABWcBAAOjDwUAA6MPEAADZwQAAZYBBQABlgF7AAFnHQAFZxsABWccAANnBAABZxIAAWcDAAFnBgAFZxAABmcD … [truncated]
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2146` → after: `L2158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2158) · [Before (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2146)

```diff
-             rle: new Uint8Array([6, 0, 1, 221, 12, 1, 29, 1, 213, 12, 5, 28, 1, 29, 24, 0, 2, 29, 4, 28, 1, 29, 1, 221, 12, 24, 0, 2, 221, 12, 4, 28, 1, 29, 27, 0, 3, 28, 1, 29, 1, 221, 12, 27, 0, 4, 29, 28, 0, 1, 213, 12, 2, 29, 1, 221, 12, 28, 0, 3, 221, 12, 184, 6, 0, 1, 221,  … [truncated]
+             rle: (0, WC.e)("BgAB3QwBHQHVDAUcAR0YAAIdBBwBHQHdDBgAAt0MBBwBHRsAAxwBHQHdDBsABB0cAAHVDAIdAd0MHAAD3Qy4BgAB3QwCHQkcAd0MBgAC3QwMAAHdDAEdCRwWAAHdDAHVDAccAR0XAAIdBhwB1QwXAAHdDAHVDAUcAdUMAd0MGAAB3QwEHAIdGgABHQIcAh0B3QwaAAHVDAIcAR0B3QwbAAHdDAIcAd0MHQACHB4AAhweAAIdHgACHR4AAt0M … [truncated]
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2151` → after: `L2163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2163) · [Before (L2151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2151)

```diff
-             rle: new Uint8Array([128, 40, 0, 1, 28, 31, 0, 1, 28, 31, 0, 1, 213, 12, 31, 0, 1, 29, 31, 0, 1, 221, 12, 255, 6, 0, 1, 28, 31, 0, 1, 28, 31, 0, 1, 28, 31, 0, 1, 28, 31, 0, 1, 28, 31, 0, 1, 28, 31, 0, 1, 29, 31, 0, 1, 29, 31, 0, 1, 221, 12, 255, 5, 0, 1, 28, 31, 0, 1, … [truncated]
+             rle: (0, WC.e)("gCgAARwfAAEcHwAB1QwfAAEdHwAB3Qz/BgABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAR0fAAHdDP8FAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEcHwAB1QwfAAEdHwAB3QzfBQABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAEdHwAB3QzfBQABHAEdAd0MHQABHAEdHgABHQHdDB4AAR0fAAHdDP8GAAIcAR0dAAEc … [truncated]
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2156` → after: `L2168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2168) · [Before (L2156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2156)

```diff
-             rle: new Uint8Array([142, 40, 0, 1, 221, 12, 252, 7, 0, 1, 221, 12, 1, 29, 1, 213, 12, 1, 221, 12, 29, 0, 1, 29, 1, 221, 12, 30, 0, 1, 221, 12, 188, 7, 0, 1, 213, 12, 1, 28, 1, 29, 2, 28, 1, 29, 26, 0, 1, 221, 12, 4, 29, 1, 221, 12, 27, 0, 1, 29, 1, 221, 12, 2, 29, 28 … [truncated]
+             rle: (0, WC.e)("jigAAd0M/AcAAd0MAR0B1QwB3QwdAAEdAd0MHgAB3Qy8BwAB1QwBHAEdAhwBHRoAAd0MBB0B3QwbAAEdAd0MAh0cAAHdDAEAAt0MmgcAAR0FHAHdDBkAAh0BHAEdAdUMAR0aAAHdDAEdAdUMAx0bAAHdDAHVDAPdDBwAAd0M/AYAAR0B1QwFHAHdDBgAAd0MAh0DHAEdGgAB3QwBHQMcAR0bAAHdDAIcAR0B3QwcAAEcAh0dAAHVDAEdAd0M … [truncated]
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2161` → after: `L2173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2173) · [Before (L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2161)

```diff
-             rle: new Uint8Array([128, 128, 2, 0])
+             rle: (0, WC.e)("gIACAA==")
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2166` → after: `L2178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2178) · [Before (L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2166)

```diff
-             rle: new Uint8Array([1, 0, 1, 221, 12, 1, 29, 5, 28, 2, 0, 1, 221, 12, 1, 29, 6, 28, 3, 0, 11, 28, 2, 0, 1, 221, 12, 5, 28, 3, 0, 1, 29, 6, 28, 3, 0, 11, 28, 3, 0, 5, 28, 3, 0, 1, 221, 12, 1, 29, 5, 28, 3, 0, 1, 213, 12, 10, 28, 3, 0, 5, 28, 4, 0, 1, 29, 5, 28, 3, 0,  … [truncated]
+             rle: (0, WC.e)("AQAB3QwBHQUcAgAB3QwBHQYcAwALHAIAAd0MBRwDAAEdBhwDAAscAwAFHAMAAd0MAR0FHAMAAdUMChwDAAUcBAABHQUcAwABHQocAwAFHAQAAd0MBRwDAAHdDAocAwAFHAUABBwBHQQAChwDAAUcBQAEHAEdBAAKHAMABBwBHQUABBwB3QwEAAEdAhwBHQYcAwAEHAEdBQAEHAUAAh0BHAHVDAYcAwAEHAHdDAUAAR0DHAUAAd0MAR0B1QwB … [truncated]
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2171` → after: `L2183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2183) · [Before (L2171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2171)

```diff
-             rle: new Uint8Array([3, 28, 29, 0, 3, 28, 29, 0, 3, 28, 29, 0, 2, 28, 1, 29, 29, 0, 2, 28, 1, 29, 29, 0, 2, 28, 1, 221, 12, 29, 0, 2, 28, 30, 0, 2, 28, 30, 0, 1, 28, 1, 213, 12, 30, 0, 1, 28, 1, 29, 30, 0, 1, 28, 1, 221, 12, 30, 0, 1, 28, 31, 0, 1, 28, 31, 0, 1, 28, 3 … [truncated]
+             rle: (0, WC.e)("AxwdAAMcHQADHB0AAhwBHR0AAhwBHR0AAhwB3QwdAAIcHgACHB4AARwB1QweAAEcAR0eAAEcAd0MHgABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEdHwABHR8AAd0M/wEAAhweAAIcHgACHB4AAhweAAIcHgABHAHVDB4AARwBHR4AARwB3QweAAEcHwAB1QwfAAHVDB8AAd0MnwUAARwfAAEdHwAB1Qwf … [truncated]
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2176` → after: `L2188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2188) · [Before (L2176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2176)

```diff
-             rle: new Uint8Array([128, 128, 2, 0])
+             rle: (0, WC.e)("gIACAA==")
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2181` → after: `L2193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2193) · [Before (L2181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2181)

```diff
-             rle: new Uint8Array([128, 128, 2, 0])
+             rle: (0, WC.e)("gIACAA==")
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2191` → after: `L2203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2203) · [Before (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2191)

```diff
-             rle: new Uint8Array([6, 0, 2, 28, 1, 213, 12, 1, 221, 12, 28, 0, 1, 29, 1, 28, 1, 29, 29, 0, 1, 29, 1, 213, 12, 1, 221, 12, 29, 0, 1, 221, 12, 1, 29, 31, 0, 1, 250, 9, 254, 6, 0, 5, 28, 1, 29, 6, 0, 4, 221, 12, 7, 0, 1, 29, 2, 28, 6, 0, 5, 28, 1, 221, 12, 17, 0, 1, 22 … [truncated]
+             rle: (0, WC.e)("BgACHAHVDAHdDBwAAR0BHAEdHQABHQHVDAHdDB0AAd0MAR0fAAH6Cf4GAAUcAR0GAATdDAcAAR0CHAYABRwB3QwRAAHdDAIcBgAFHBMAAhwGAAUcEwACHAYAAR0EHBMAAdUMARwGAAIdAhwBHRMAAdUMARwGAAHdDAHVDAIcAR0TAAHdDAEdBwAB3QwBHQEcAd0MFAAB1QwIAAHVDAEcFQAB3QwIAAHdDAEdHwAB1QwfAAHdDJwFAAEdBRwE … [truncated]
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2196` → after: `L2208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2208) · [Before (L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2196)

```diff
-             rle: new Uint8Array([128, 8, 0, 1, 28, 1, 29, 30, 0, 1, 28, 1, 221, 12, 30, 0, 1, 28, 31, 0, 1, 28, 31, 0, 1, 28, 31, 0, 1, 28, 31, 0, 1, 28, 31, 0, 1, 213, 12, 31, 0, 1, 29, 31, 0, 1, 221, 12, 223, 5, 0, 2, 28, 1, 221, 12, 29, 0, 2, 28, 30, 0, 2, 28, 30, 0, 2, 28, 30 … [truncated]
+             rle: (0, WC.e)("gAgAARwBHR4AARwB3QweAAEcHwABHB8AARwfAAEcHwABHB8AAdUMHwABHR8AAd0M3wUAAhwB3QwdAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHB4AAdUMARweAAIdHgAB3QwBHR8AAd0M/gQAAxwB3QwcAAIcAR0dAAIcAR0dAAIcAd0MHQACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHR4AAh0eAALdDP4EAAMcAd0MHAADHB0A … [truncated]
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2201` → after: `L2213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2213) · [Before (L2201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2201)

```diff
-             rle: new Uint8Array([145, 128, 1, 0, 1, 222, 12, 1, 221, 12, 1, 250, 9, 251, 7, 0, 1, 221, 12, 2, 28, 1, 29, 1, 221, 12, 1, 29, 27, 0, 1, 29, 1, 28, 1, 29, 1, 0, 1, 221, 12, 27, 0, 1, 29, 1, 28, 1, 221, 12, 1, 0, 1, 222, 12, 27, 0, 1, 250, 9, 1, 29, 2, 0, 1, 222, 12,  … [truncated]
+             rle: (0, WC.e)("kYABAAHeDAHdDAH6CfsHAAHdDAIcAR0B3QwBHRsAAR0BHAEdAQAB3QwbAAEdARwB3QwBAAHeDBsAAfoJAR0CAAHeDBwAAR0CAAHeDBwAAd0MHwAB3gy9BgABHQEcAfoJARwB1QwBHRoAAd0MARwBLQEcAt0MGwAB1QwBLQEdHQABHQEtAR0dAAHdDAEtAd0MHgABLR8AAR0fAAHdDJ0GAAHdDAIcAdUMAd0MHAAB1QwBHAH6CQHeDBwAAR0B … [truncated]
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2206` → after: `L2218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2218) · [Before (L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2206)

```diff
-             rle: new Uint8Array([128, 128, 2, 0])
+             rle: (0, WC.e)("gIACAA==")
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2211` → after: `L2223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2223) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2211)

```diff
-             rle: new Uint8Array([1, 29, 7, 28, 15, 0, 5, 28, 1, 221, 12, 3, 0, 1, 29, 7, 28, 15, 0, 1, 29, 3, 28, 1, 29, 4, 0, 1, 221, 12, 7, 28, 15, 0, 1, 213, 12, 3, 28, 1, 29, 5, 0, 7, 28, 15, 0, 1, 250, 9, 3, 28, 1, 221, 12, 5, 0, 7, 28, 16, 0, 3, 28, 6, 0, 7, 28, 16, 0, 1, 2 … [truncated]
+             rle: (0, WC.e)("AR0HHA8ABRwB3QwDAAEdBxwPAAEdAxwBHQQAAd0MBxwPAAHVDAMcAR0FAAccDwAB+gkDHAHdDAUABxwQAAMcBgAHHBAAAR0CHAYABxwQAALVDAEcBgAHHBAAAd0MAR0BHAYABxwRAAHdDAEdBgABHQYcEgABHQYAAR0FHAEdEgAB3QwGAAHdDAUcAdUMGgAFHAHdDBoABRwbAAUcGwAFHBsABRwbAAEdBBwbAAEdAxwBHRsAAd0MAxwBHRwA … [truncated]
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2216` → after: `L2228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2228) · [Before (L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2216)

```diff
-             rle: new Uint8Array([2, 28, 1, 29, 1, 221, 12, 28, 0, 2, 28, 1, 213, 12, 29, 0, 2, 28, 1, 221, 12, 29, 0, 2, 28, 30, 0, 2, 28, 30, 0, 2, 29, 30, 0, 2, 213, 12, 30, 0, 1, 221, 12, 1, 250, 9, 159, 6, 0, 2, 221, 12, 253, 247, 1, 0])
+             rle: (0, WC.e)("AhwBHQHdDBwAAhwB1QwdAAIcAd0MHQACHB4AAhweAAIdHgAC1QweAAHdDAH6CZ8GAALdDP33AQA=")
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2221` → after: `L2233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2233) · [Before (L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2221)

```diff
-             rle: new Uint8Array([128, 128, 2, 0])
+             rle: (0, WC.e)("gIACAA==")
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2226` → after: `L2238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2238) · [Before (L2226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2226)

```diff
-             rle: new Uint8Array([128, 128, 2, 0])
+             rle: (0, WC.e)("gIACAA==")
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2236` → after: `L2248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2248) · [Before (L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2236)

```diff
-             rle: new Uint8Array([1, 0, 1, 213, 12, 1, 29, 8, 28, 22, 0, 1, 221, 12, 1, 213, 12, 3, 29, 1, 213, 12, 4, 28, 23, 0, 1, 221, 12, 2, 29, 1, 213, 12, 1, 29, 4, 28, 24, 0, 4, 221, 12, 4, 28, 28, 0, 4, 28, 28, 0, 4, 28, 28, 0, 4, 28, 28, 0, 4, 28, 28, 0, 4, 28, 28, 0, 4,  … [truncated]
+             rle: (0, WC.e)("AQAB1QwBHQgcFgAB3QwB1QwDHQHVDAQcFwAB3QwCHQHVDAEdBBwYAATdDAQcHAAEHBwABBwcAAQcHAAEHBwABBwcAAQcHAAEHBwABBwcAAQcHAAEHBwAAxwBHRwAAR0CHAEdHAABHQIcAd0MHAAB3QwCHB4AAhweAAIcHgACHB4AAhweAAIcHgABHQEcHgABHQEcHgAB3QwB1QwfAAHVDB8AAd0MlwEAAh0JHBUAAd0MAx0B1QwGHBYAAd0M … [truncated]
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2241` → after: `L2253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2253) · [Before (L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2241)

```diff
-             rle: new Uint8Array([128, 112, 0, 1, 28, 31, 0, 1, 213, 12, 31, 0, 1, 29, 31, 0, 1, 221, 12, 159, 7, 0, 1, 28, 31, 0, 1, 28, 31, 0, 1, 213, 12, 31, 0, 1, 29, 31, 0, 1, 221, 12, 255, 6, 0, 1, 28, 31, 0, 1, 28, 31, 0, 1, 28, 31, 0, 1, 29, 31, 0, 1, 213, 12, 31, 0, 1, 22 … [truncated]
+             rle: (0, WC.e)("gHAAARwfAAHVDB8AAR0fAAHdDJ8HAAEcHwABHB8AAdUMHwABHR8AAd0M/wYAARwfAAEcHwABHB8AAR0fAAHVDB8AAd0M3wYAARwfAAEcHwABHR8AAdUMHwAB3Qz/BgABHR8AAR0fAAHdDL9vAA==")
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2246` → after: `L2258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2258) · [Before (L2246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2246)

```diff
-             rle: new Uint8Array([154, 120, 0, 1, 221, 12, 254, 7, 0, 2, 29, 1, 221, 12, 29, 0, 1, 221, 12, 1, 29, 31, 0, 1, 221, 12, 191, 7, 0, 1, 213, 12, 31, 0, 1, 221, 12, 202, 55, 0, 3, 28, 1, 221, 12, 28, 0, 1, 29, 1, 28, 1, 29, 29, 0, 1, 213, 12, 2, 29, 29, 0, 1, 221, 12, 1 … [truncated]
+             rle: (0, WC.e)("mngAAd0M/gcAAh0B3QwdAAHdDAEdHwAB3Qy/BwAB1QwfAAHdDMo3AAMcAd0MHAABHQEcAR0dAAHVDAIdHQAB3QwBHQHdDB4AAd0M/QYAAR0DHAEdGwABHQMcAR0bAAHdDAMcAd0MHAABHQEcAR0dAAIdAdUMHQAB3QwBHQHdDB4AAd0MvQYAAR0EHBsAAd0MAxwBHRwAAxwBHRwAAxwB3QwcAAHVDAEcAR0dAAMdHQAB3QwBHQHdDB4AAd0M … [truncated]
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2251` → after: `L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2263) · [Before (L2251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2251)

```diff
-             rle: new Uint8Array([128, 128, 2, 0])
+             rle: (0, WC.e)("gIACAA==")
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2256` → after: `L2268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2268) · [Before (L2256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2256)

```diff
-             rle: new Uint8Array([3, 0, 1, 29, 5, 28, 1, 29, 4, 0, 1, 221, 12, 2, 29, 1, 213, 12, 3, 29, 4, 28, 10, 0, 1, 221, 12, 5, 28, 1, 221, 12, 5, 0, 2, 221, 12, 4, 29, 4, 28, 11, 0, 1, 213, 12, 4, 28, 8, 0, 4, 221, 12, 4, 28, 11, 0, 1, 29, 3, 28, 1, 213, 12, 12, 0, 4, 28, 1 … [truncated]
+             rle: (0, WC.e)("AwABHQUcAR0EAAHdDAIdAdUMAx0EHAoAAd0MBRwB3QwFAALdDAQdBBwLAAHVDAQcCAAE3QwEHAsAAR0DHAHVDAwABBwLAAHdDAQdDAAEHAwAAdUMAh0B3QwMAAQcDAAD3QwNAAQcHAAEHBwABBwcAAQcHAAEHBwABBwcAAQcHAAEHBwAAR0DHBwAAdUMAxwcAAHdDAMcHQADHB0AAxwdAAMcHQADHB0AAhwBHR0AAhwB1QwdAAHVDAEcAd0M … [truncated]
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2261` → after: `L2273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2273) · [Before (L2261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2261)

```diff
-             rle: new Uint8Array([128, 128, 2, 0])
+             rle: (0, WC.e)("gIACAA==")
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2266` → after: `L2278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2278) · [Before (L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2266)

```diff
-             rle: new Uint8Array([128, 128, 2, 0])
+             rle: (0, WC.e)("gIACAA==")
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2271` → after: `L2283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2283) · [Before (L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2271)

```diff
-             rle: new Uint8Array([128, 128, 2, 0])
+             rle: (0, WC.e)("gIACAA==")
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2276` → after: `L2288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2288) · [Before (L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2276)

```diff
-           const Yq = new uq.e;
+           const QC = new FC.b;
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2279` → after: `L2291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2291) · [Before (L2279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2279)

```diff
-             if (!(0, lq.H)(qq)) throw new Error(`Duplicate chunk at ${Oq.chunkX}, ${Oq.chunkY}, ${Oq.chunkZ}`);
+             if (!(0, wC.H)(CC)) throw new Error(`Duplicate chunk at ${bC.chunkX}, ${bC.chunkY}, ${bC.chunkZ}`);
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2282` → after: `L2294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2294) · [Before (L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2282)

```diff
-           return new cq.d(qq, {
+           return new qC.b(CC, {
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2297` → after: `L2309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2309) · [Before (L2297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2297)

```diff
-             rle: new Uint8Array([82, 0, 3, 34, 28, 0, 5, 34, 27, 0, 5, 34, 27, 0, 1, 34, 1, 250, 9, 1, 34, 1, 250, 9, 1, 34, 59, 0, 1, 34, 1, 0, 1, 34, 1, 0, 1, 34, 26, 0, 7, 34, 24, 0, 9, 34, 22, 0, 11, 34, 21, 0, 11, 34, 21, 0, 10, 34, 22, 0, 10, 34, 23, 0, 3, 34, 1, 0, 1, 34,  … [truncated]
+             rle: (0, WC.e)("UgADIhwABSIbAAUiGwABIgH6CQEiAfoJASI7AAEiAQABIgEAASIaAAciGAAJIhYACyIVAAsiFQAKIhYACiIXAAMiAQABIgEAAyIXAAMiAwADIhYABCIDAAMiEwAIIgEAByIQABEiDwARIg8ABd0MByIF3QwVAAUiGwAFIhoAByIZAAgiFgANIg8AEyINABMiDQAB3QwRIgHdDA4AAd0MECIQAAHdDA8iEQAB3QwNIgHdDBYAAyIHAAPdDBIA … [truncated]
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2302` → after: `L2314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2314) · [Before (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2302)

```diff
-             rle: new Uint8Array([128, 16, 0, 1, 221, 12, 255, 7, 0, 1, 29, 1, 221, 12, 30, 0, 1, 29, 31, 0, 1, 250, 9, 191, 7, 0, 1, 28, 1, 29, 1, 221, 12, 29, 0, 1, 28, 1, 29, 30, 0, 1, 29, 1, 221, 12, 30, 0, 1, 29, 31, 0, 1, 221, 12, 255, 6, 0, 2, 28, 1, 213, 12, 1, 221, 12, 28 … [truncated]
+             rle: (0, WC.e)("gBAAAd0M/wcAAR0B3QweAAEdHwAB+gm/BwABHAEdAd0MHQABHAEdHgABHQHdDB4AAR0fAAHdDP8GAAIcAdUMAd0MHAACHAEdHQAB1QwBHQHdDB0AAh0eAALdDP4GAAMcAR0cAAIcAh0cAAIcAR0B3QwcAAEcAR0B3QwdAAHVDAEdHgABHQHdDB4AAd0M/wQAASIfAAEiHwABIh8AASIfAAEiHwABIh8ABBwBHRsABBwB3QwbAAMcAR0cAAIc … [truncated]
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2307` → after: `L2319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2319) · [Before (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2307)

```diff
-             rle: new Uint8Array([14, 0, 2, 221, 12, 9, 34, 2, 221, 12, 21, 0, 9, 221, 12, 211, 7, 0, 1, 221, 12, 15, 34, 1, 221, 12, 16, 0, 15, 34, 17, 0, 2, 221, 12, 11, 34, 2, 221, 12, 19, 0, 11, 221, 12, 160, 7, 0, 4, 34, 15, 0, 16, 34, 1, 221, 12, 15, 0, 15, 34, 1, 221, 12, 1 … [truncated]
+             rle: (0, WC.e)("DgAC3QwJIgLdDBUACd0M0wcAAd0MDyIB3QwQAA8iEQAC3QwLIgLdDBMAC90MoAcABCIPABAiAd0MDwAPIgHdDBAAA90MCSID3QwUAAciAt0MFwAH3QzRBgACIhIAAyIJAAHdDAIiEAADIgHdDAoAAd0MAyILAAUiAd0MDAAB3QwRIgHdDA4AAt0MBiID3QwEIgLdDBEADd0MzQYAAd0MAiITAAIiCQADIhEAAyIJAAHdDAMiDwADIgHdDAoA … [truncated]
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2312` → after: `L2324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2324) · [Before (L2312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2312)

```diff
-             rle: new Uint8Array([128, 48, 0, 1, 34, 31, 0, 1, 221, 12, 223, 7, 0, 1, 34, 1, 221, 12, 30, 0, 1, 34, 31, 0, 1, 221, 12, 191, 7, 0, 2, 34, 30, 0, 1, 34, 1, 221, 12, 30, 0, 1, 34, 31, 0, 1, 221, 12, 159, 7, 0, 2, 34, 30, 0, 2, 34, 30, 0, 1, 34, 1, 221, 12, 30, 0, 1, 3 … [truncated]
+             rle: (0, WC.e)("gDAAASIfAAHdDN8HAAEiAd0MHgABIh8AAd0MvwcAAiIeAAEiAd0MHgABIh8AAd0MnwcAAiIeAAIiHgABIgHdDB4AASIfAAHdDIAHAAIiHQACIgHdDB0AAiIeAAEiAd0MHgAB3QyABwACIh0AAyIdAAIiAd0MHQACIh4AASIB3QweAAHdDOAGAAIiAd0MHQACIh0AAyIdAAIiAd0MHQABIgHdDB4AAd0M4QYAASIB3QwdAAIiHgACIh0AAiIB … [truncated]
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2317` → after: `L2329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2329) · [Before (L2317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2317)

```diff
-             rle: new Uint8Array([7, 0, 2, 29, 22, 28, 1, 29, 7, 0, 1, 221, 12, 1, 29, 21, 28, 2, 29, 8, 0, 1, 221, 12, 21, 28, 1, 213, 12, 1, 221, 12, 9, 0, 1, 29, 19, 28, 1, 29, 1, 221, 12, 10, 0, 1, 213, 12, 1, 29, 1, 213, 12, 17, 28, 1, 213, 12, 11, 0, 1, 221, 12, 3, 29, 15, 2 … [truncated]
+             rle: (0, WC.e)("BwACHRYcAR0HAAHdDAEdFRwCHQgAAd0MFRwB1QwB3QwJAAEdExwBHQHdDAoAAdUMAR0B1QwRHAHVDAsAAd0MAx0PHAEdAd0MDAAC3QwBHQHVDA0cAh0PAAHdDAIdCxwBHQHVDAHdDBAAAd0MAdUMChwBHQHVDAHdDBIAAd0MAh0GHAMdAfoJFAADHQHVDAMcAh0B1QwB+gkVAALdDAMdAhwBHQLdDBgAAt0MAx0B3QwcAAHdDAIdHgAC3Qya … [truncated]
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2322` → after: `L2334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2334) · [Before (L2322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2322)

```diff
-             rle: new Uint8Array([1, 221, 12, 255, 7, 0, 1, 250, 9, 255, 247, 1, 0])
+             rle: (0, WC.e)("Ad0M/wcAAfoJ//cBAA==")
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2327` → after: `L2339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2339) · [Before (L2327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2327)

```diff
-             rle: new Uint8Array([13, 0, 13, 34, 1, 221, 12, 18, 0, 1, 221, 12, 11, 34, 1, 221, 12, 20, 0, 11, 34, 21, 0, 11, 221, 12, 155, 7, 0, 1, 221, 12, 235, 247, 1, 0])
+             rle: (0, WC.e)("DQANIgHdDBIAAd0MCyIB3QwUAAsiFQAL3QybBwAB3Qzr9wEA")
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2332` → after: `L2344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2344) · [Before (L2332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2332)

```diff
-             rle: new Uint8Array([128, 128, 2, 0])
+             rle: (0, WC.e)("gIACAA==")
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2342` → after: `L2354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2354) · [Before (L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2342)

```diff
-             rle: new Uint8Array([2, 0, 5, 28, 27, 0, 5, 28, 27, 0, 5, 28, 27, 0, 1, 29, 3, 28, 1, 213, 12, 27, 0, 1, 213, 12, 3, 28, 1, 29, 27, 0, 1, 221, 12, 3, 28, 1, 221, 12, 28, 0, 3, 28, 29, 0, 3, 28, 29, 0, 3, 28, 29, 0, 3, 28, 29, 0, 3, 28, 29, 0, 1, 29, 1, 28, 1, 29, 29,  … [truncated]
+             rle: (0, WC.e)("AgAFHBsABRwbAAUcGwABHQMcAdUMGwAB1QwDHAEdGwAB3QwDHAHdDBwAAxwdAAMcHQADHB0AAxwdAAMcHQABHQEcAR0dAAEdARwBHR0AAd0MAdUMAd0MHgABHR8AAd0MnAQABxwDAAH6CQYcAR0OAAccBAABHAEdBBwB1QwOAAccBAABHQHVDAQcAd0MDgABHQUcAR0EAAHVDAHdDAHVDAIcAR0PAAEdBRwBHQQAAd0MAQABHQIcAR0PAAHd … [truncated]
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2347` → after: `L2359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2359) · [Before (L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2347)

```diff
-             rle: new Uint8Array([128, 72, 0, 1, 28, 31, 0, 1, 213, 12, 31, 0, 1, 29, 31, 0, 1, 221, 12, 159, 7, 0, 2, 28, 30, 0, 2, 28, 30, 0, 1, 28, 31, 0, 1, 28, 31, 0, 1, 28, 31, 0, 1, 28, 31, 0, 1, 28, 31, 0, 1, 28, 31, 0, 1, 29, 31, 0, 1, 29, 31, 0, 1, 250, 9, 191, 5, 0, 2,  … [truncated]
+             rle: (0, WC.e)("gEgAARwfAAHVDB8AAR0fAAHdDJ8HAAIcHgACHB4AARwfAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAEdHwAB+gm/BQACHB4AAhweAAIcHgACHB4AARwBHR4AARwBHR4AARwB3QweAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAEdHwAB+gm/BAACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHB4AARwBHR4AARwBHR4AARwB3QweAAEcHwAB … [truncated]
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2352` → after: `L2364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2364) · [Before (L2352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2352)

```diff
-             rle: new Uint8Array([132, 16, 0, 1, 29, 31, 0, 1, 213, 12, 31, 0, 1, 221, 12, 190, 7, 0, 1, 29, 1, 28, 1, 29, 29, 0, 1, 250, 9, 1, 28, 1, 29, 30, 0, 1, 29, 1, 221, 12, 30, 0, 1, 29, 31, 0, 1, 250, 9, 255, 6, 0, 1, 221, 12, 132, 48, 0, 6, 34, 1, 221, 12, 25, 0, 2, 221, … [truncated]
+             rle: (0, WC.e)("hBAAAR0fAAHVDB8AAd0MvgcAAR0BHAEdHQAB+gkBHAEdHgABHQHdDB4AAR0fAAH6Cf8GAAHdDIQwAAYiAd0MGQAC3QwEIhwABN0MtwcABiIDAAEiAt0MFAAC3QwHIgHdDBgAAt0MBSIbAAXdDJYHAAMiCQAC3QwSAAUiGwAB3QwKIhYAAt0MCCIYAAjdDPMGAAQiCwACIg8AAd0MBCIKAALdDBAACCIYAALdDAoiFgAC3QwIIhgACN0M0gYA … [truncated]
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2357` → after: `L2369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2369) · [Before (L2357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2357)

```diff
-             rle: new Uint8Array([128, 128, 2, 0])
+             rle: (0, WC.e)("gIACAA==")
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2362` → after: `L2374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2374) · [Before (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2362)

```diff
-             rle: new Uint8Array([5, 0, 1, 29, 7, 28, 1, 221, 12, 1, 250, 9, 1, 0, 11, 28, 1, 221, 12, 9, 0, 1, 221, 12, 7, 28, 3, 0, 1, 213, 12, 9, 28, 1, 29, 11, 0, 7, 28, 3, 0, 1, 29, 9, 28, 1, 213, 12, 11, 0, 7, 28, 3, 0, 1, 221, 12, 9, 28, 1, 221, 12, 11, 0, 7, 28, 4, 0, 9, 2 … [truncated]
+             rle: (0, WC.e)("BQABHQccAd0MAfoJAQALHAHdDAkAAd0MBxwDAAHVDAkcAR0LAAccAwABHQkcAdUMCwAHHAMAAd0MCRwB3QwLAAccBAAJHAwABxwEAAgcAR0MAAccBAAIHAHVDAwABxwEAAgcAd0MDAAHHAQAAR0HHA0ABxwEAAHVDAccDQAB1QwGHAQAAd0MBxwNAAEdBRwBHQUABxwNAAHdDAUcAR0FAAccDgAFHAHdDAUABhwBHQ4ABRwGAAHVDAUcAdUM … [truncated]
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2367` → after: `L2379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2379) · [Before (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2367)

```diff
-             rle: new Uint8Array([128, 128, 2, 0])
+             rle: (0, WC.e)("gIACAA==")
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2372` → after: `L2384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2384) · [Before (L2372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2372)

```diff
-             rle: new Uint8Array([137, 8, 0, 1, 221, 12, 1, 29, 31, 0, 1, 29, 31, 0, 1, 221, 12, 181, 247, 1, 0])
+             rle: (0, WC.e)("iQgAAd0MAR0fAAEdHwAB3Qy19wEA")
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2377` → after: `L2389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2389) · [Before (L2377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2377)

```diff
-             rle: new Uint8Array([128, 128, 2, 0])
+             rle: (0, WC.e)("gIACAA==")
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2387` → after: `L2399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2399) · [Before (L2387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2387)

```diff
-             rle: new Uint8Array([1, 0, 1, 221, 12, 6, 29, 1, 221, 12, 1, 29, 1, 213, 12, 3, 29, 1, 221, 12, 1, 0, 5, 221, 12, 3, 29, 5, 221, 12, 5, 0, 1, 221, 12, 4, 29, 1, 221, 12, 1, 0, 1, 221, 12, 2, 213, 12, 1, 29, 1, 221, 12, 7, 0, 1, 221, 12, 1, 29, 1, 221, 12, 11, 0, 1, 22 … [truncated]
+             rle: (0, WC.e)("AQAB3QwGHQHdDAEdAdUMAx0B3QwBAAXdDAMdBd0MBQAB3QwEHQHdDAEAAd0MAtUMAR0B3QwHAAHdDAEdAd0MCwAB3QwBHQHVDAH6CQMAAR0B+gkB3QwJAAHdDA0AAfoJAd0MBAAB+gmWBwAB3QwBHQHVDAEdBRwBHQHVDAQdAdUMBB0FHAHdDAH6CQHdDAUAAh0C1QwFHQHVDAMdA9UMCB0IAAHVDAEdAdUMAh0B1QwKHQPdDAHVDAIdAdUM … [truncated]
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2397` → after: `L2409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2409) · [Before (L2397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2397)

```diff
-             rle: new Uint8Array([11, 0, 1, 28, 31, 0, 1, 35, 31, 0, 1, 29, 31, 0, 1, 26, 31, 0, 1, 26, 25, 0, 1, 26, 5, 0, 1, 26, 25, 0, 1, 129, 1, 5, 0, 1, 129, 1, 188, 1, 0, 1, 129, 1, 31, 0, 1, 129, 1, 217, 4, 0, 1, 221, 12, 3, 0, 1, 28, 1, 34, 5, 28, 1, 221, 12, 28, 0, 1, 29, … [truncated]
+             rle: (0, WC.e)("CwABHB8AASMfAAEdHwABGh8AARoZAAEaBQABGhkAAYEBBQABgQG8AQABgQEfAAGBAdkEAAHdDAMAARwBIgUcAd0MHAABHQEaAR0eAAEaAYEBGwADgQEBGgGBARoAAdUMAd4MAh0BGgGBARYAAoEBBxoCgQEVAAKBAQHgDAWBAQHgDAKBARYAAoEBAgABgQECAAKBARgAAoEBAQABgQEBAAKBAQHdDBkABYEBHAADgQEeAAGBAR8AAYEB+QQA … [truncated]
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2402` → after: `L2414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2414) · [Before (L2402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2402)

```diff
-             rle: new Uint8Array([128, 128, 2, 0])
+             rle: (0, WC.e)("gIACAA==")
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2412` → after: `L2424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2424) · [Before (L2412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2412)

```diff
-             rle: new Uint8Array([129, 8, 0, 1, 34, 1, 134, 1, 6, 0, 1, 34, 24, 0, 1, 222, 12, 222, 7, 0, 1, 140, 5, 1, 34, 1, 0, 5, 221, 12, 1, 0, 1, 34, 1, 140, 5, 21, 0, 1, 35, 9, 0, 1, 35, 21, 0, 1, 129, 1, 9, 0, 1, 129, 1, 31, 0, 1, 134, 1, 31, 0, 1, 222, 12, 246, 6, 0, 1, 34 … [truncated]
+             rle: (0, WC.e)("gQgAASIBhgEGAAEiGAAB3gzeBwABjAUBIgEABd0MAQABIgGMBRUAASMJAAEjFQABgQEJAAGBAR8AAYYBHwAB3gz2BgABIgXdDAECAd0MGgAF3QwdAAHfDLsHAAPdDAECAd0MAwIB3QwYAALdDAGMBQHdDAGMBQLdDBwAAdAFugcAAd0MAgIBzgEC3QwEAgHdDBYAAt0MAYwFAt0MAowFAt0MGgABzwUBjAUBzQUBAAHfDBwAAdEFmgcAAd0M … [truncated]
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2422` → after: `L2434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2434) · [Before (L2422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2422)

```diff
-             rle: new Uint8Array([129, 8, 0, 5, 221, 12, 3, 29, 5, 221, 12, 24, 0, 1, 221, 12, 1, 213, 12, 1, 250, 9, 30, 0, 1, 221, 12, 185, 7, 0, 2, 221, 12, 3, 29, 5, 28, 3, 221, 12, 21, 0, 8, 29, 2, 0, 1, 223, 12, 21, 0, 1, 250, 9, 2, 221, 12, 1, 213, 12, 3, 29, 1, 213, 12, 27 … [truncated]
+             rle: (0, WC.e)("gQgABd0MAx0F3QwYAAHdDAHVDAH6CR4AAd0MuQcAAt0MAx0FHAPdDBUACB0CAAHfDBUAAfoJAt0MAdUMAx0B1QwbAAEdA90MAR0bAAGIAQEAAdEMAd8MAYEBGwABgQEDAAGIARsAAYEBAwABiAEbAAGIAQMAAYEBGwABiAEDAAGBARsAAoEBAQACgQEcAAKIAQGBAbcFAAHdDAEdCRwC3QwUAAHdDAMdBBwCHRcAAx0C1QwEHRcAA90MAR0C … [truncated]
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2432` → after: `L2444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2444) · [Before (L2432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2432)

```diff
-             rle: new Uint8Array([4, 0, 2, 221, 12, 251, 7, 0, 3, 221, 12, 1, 213, 12, 3, 29, 2, 213, 12, 26, 0, 1, 250, 9, 5, 221, 12, 214, 7, 0, 2, 221, 12, 1, 213, 12, 5, 29, 2, 213, 12, 1, 29, 1, 221, 12, 22, 0, 2, 29, 1, 213, 12, 1, 29, 5, 221, 12, 23, 0, 1, 250, 9, 3, 221, 1 … [truncated]
+             rle: (0, WC.e)("BAAC3Qz7BwAD3QwB1QwDHQLVDBoAAfoJBd0M1gcAAt0MAdUMBR0C1QwBHQHdDBYAAh0B1QwBHQXdDBcAAfoJA90MugcAAt0MAdUMAR0DAgHVDAEdAdUMAh0WAAEdAdUMAwIDHQLdDBYAAt0MAR0BLgHVDAHdDAH6CQHdDBsAAYEBHwABiAEfAAGBAR8AAYYBHgABgQECiAEeAAGIAfoFAAHdDAHVDAMCAdUMAwIB1QwBHQHVDBUAAd0MAwIB … [truncated]
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2442` → after: `L2454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2454) · [Before (L2442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2442)

```diff
-             rle: new Uint8Array([3, 0, 7, 221, 12, 249, 7, 0, 1, 28, 3, 221, 12, 1, 29, 1, 28, 2, 221, 12, 24, 0, 1, 28, 3, 0, 1, 221, 12, 1, 29, 26, 0, 1, 28, 4, 0, 1, 29, 26, 0, 1, 28, 4, 0, 1, 221, 12, 26, 0, 1, 28, 254, 6, 0, 5, 29, 3, 28, 1, 29, 1, 221, 12, 22, 0, 1, 34, 3,  … [truncated]
+             rle: (0, WC.e)("AwAH3Qz5BwABHAPdDAEdARwC3QwYAAEcAwAB3QwBHRoAARwEAAEdGgABHAQAAd0MGgABHP4GAAUdAxwBHQHdDBYAASID3QwCHQHVDAIdFwABIgMAAd0MAx0B3QwXAAEiBAAD3QwYAAEiBgABHfcGAAEiAdUMBB0CHAEdARwB3QwVAAEiAtUMBx0WAAEiBd0MAR0B1QwB3QwBHRYAASICAAHQBQIAAt0MAQIB3QwdAAEdAYwFAdUMHwAB0wXV … [truncated]
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2452` → after: `L2464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2464) · [Before (L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2452)

```diff
-             rle: new Uint8Array([129, 8, 0, 1, 2, 22, 0, 1, 2, 8, 0, 1, 10, 1, 100, 1, 102, 1, 0, 1, 10, 1, 100, 1, 102, 1, 100, 1, 10, 1, 84, 4, 0, 1, 84, 1, 10, 1, 100, 1, 102, 1, 100, 4, 0, 1, 10, 232, 7, 0, 1, 100, 169, 3, 0, 1, 28, 30, 0, 1, 136, 1, 161, 4, 0, 1, 28, 20, 0,  … [truncated]
+             rle: (0, WC.e)("gQgAAQIWAAECCAABCgFkAWYBAAEKAWQBZgFkAQoBVAQAAVQBCgFkAWYBZAQAAQroBwABZKkDAAEcHgABiAGhBAABHBQAAWYSAAFkAwABZhsAAt4BHwAB3gEfAAHeAR8AAd4B9QEAARwfAAEcAYgBHQABiAEBVB0AAYgBHwABgQGoAQABMx4AAVQBMwFUHQABVAEzAVQdAAFUATMBVBsAAYEBAQABVAEzAVQbAAGBAQEAAVQBMwFUGwAFExsA … [truncated]
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2457` → after: `L2469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2469) · [Before (L2457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2457)

```diff
-             rle: new Uint8Array([128, 128, 2, 0])
+             rle: (0, WC.e)("gIACAA==")
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2467` → after: `L2479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2479) · [Before (L2467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2467)

```diff
-             rle: new Uint8Array([151, 8, 0, 1, 2, 1, 0, 4, 2, 26, 0, 1, 35, 5, 179, 7, 1, 35, 25, 0, 1, 35, 1, 179, 7, 1, 28, 1, 29, 2, 179, 7, 1, 35, 25, 0, 1, 35, 1, 135, 1, 1, 179, 7, 1, 135, 1, 1, 29, 1, 28, 1, 35, 25, 0, 1, 35, 1, 29, 1, 135, 1, 1, 228, 7, 2, 29, 1, 35, 25,  … [truncated]
+             rle: (0, WC.e)("lwgAAQIBAAQCGgABIwWzBwEjGQABIwGzBwEcAR0CswcBIxkAASMBhwEBswcBhwEBHQEcASMZAAEjAR0BhwEB5AcCHQEjGQABIwGBAQEdAeQHAbMHAYcBASMZAAEjAYEBAbMHAYEBAhwBIxkAASMCgQEBhwEBHAGHAQEjGQABIwKBAQGzBwGHAQEcASMZAAEjA4EBAYcBARwBIxkAASMDgQEChwEBIxkAASMBgQEBiAECgQEBhwEBIxkAASMB … [truncated]
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2472` → after: `L2484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2484) · [Before (L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2472)

```diff
-             rle: new Uint8Array([128, 149, 1, 0, 1, 129, 1, 31, 0, 1, 29, 31, 0, 1, 35, 31, 0, 1, 136, 1, 159, 2, 0, 2, 2, 30, 0, 3, 179, 7, 1, 129, 1, 28, 0, 1, 29, 1, 179, 7, 1, 135, 1, 29, 0, 2, 29, 1, 179, 7, 29, 0, 1, 129, 1, 1, 29, 1, 135, 1, 29, 0, 1, 135, 1, 1, 29, 30, 0, … [truncated]
+             rle: (0, WC.e)("gJUBAAGBAR8AAR0fAAEjHwABiAGfAgACAh4AA7MHAYEBHAABHQGzBwGHAR0AAh0BswcdAAGBAQEdAYcBHQABhwEBHR4AAocBHgABhwEBgQEeAAKBAR4AAoEBHgACgQEeAAKIAR4AAYgBHwABgQEfAAGHAR8AAYEBHwABIx8AAYgBHwABhwEBAAJkHAABgQEBAAJkHAADgQEBZBwAA4EBHgACIx8AAYEBnQIAAQIBAAICHAABgQEBswcBgQEB … [truncated]
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2477` → after: `L2489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2489) · [Before (L2477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2477)

```diff
-             rle: new Uint8Array([8, 0, 2, 2, 2, 0, 5, 2, 8, 0, 3, 2, 11, 0, 1, 100, 1, 179, 7, 1, 35, 3, 179, 7, 2, 129, 1, 1, 35, 1, 29, 6, 0, 1, 100, 3, 129, 1, 1, 179, 7, 12, 0, 1, 29, 1, 35, 3, 179, 7, 2, 129, 1, 1, 35, 1, 179, 7, 6, 0, 1, 100, 3, 129, 1, 1, 179, 7, 12, 0, 1, … [truncated]
+             rle: (0, WC.e)("CAACAgIABQIIAAMCCwABZAGzBwEjA7MHAoEBASMBHQYAAWQDgQEBswcMAAEdASMDswcCgQEBIwGzBwYAAWQDgQEBswcMAAEcASMBHQGzBwKIAQGBAQEjCAABiAEEgQELAAHdAQEjAYcBAYgBARwCgQEBIwcAAogBA4EBAYgBCwAB3QEBIwGBAQMcAYEBASMHAAGHAQWBAQsAAd0BASMCgQEBHAGIAQGHAQEjBgABHAaBAQsAAd0BASMCgQEB … [truncated]
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2482` → after: `L2494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2494) · [Before (L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2482)

```diff
-             rle: new Uint8Array([128, 128, 2, 0])
+             rle: (0, WC.e)("gIACAA==")
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2492` → after: `L2504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2504) · [Before (L2492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2492)

```diff
-             rle: new Uint8Array([144, 16, 0, 2, 2, 1, 0, 1, 2, 2, 0, 1, 2, 25, 0, 1, 135, 1, 1, 179, 7, 1, 0, 1, 28, 1, 0, 1, 179, 7, 1, 28, 1, 179, 7, 1, 135, 1, 23, 0, 1, 135, 1, 31, 0, 1, 179, 7, 31, 0, 1, 135, 1, 31, 0, 1, 135, 1, 31, 0, 1, 135, 1, 31, 0, 1, 129, 1, 31, 0, 1, … [truncated]
+             rle: (0, WC.e)("kBAAAgIBAAECAgABAhkAAYcBAbMHAQABHAEAAbMHARwBswcBhwEXAAGHAR8AAbMHHwABhwEfAAGHAR8AAYcBHwABgQEfAAGBAR8AAYEBHwABgQEFAAHeAQHdAQGIARcAAYEBBQAC3gEBiAEXAAGIAQQAA94BAYgBFwABgQEBFAMAAt4BARQBgQEXAAGBAQFYARoBAAHeAQHdAQEUAVgBgQEXAAEjARoBUAEaAQABFAFQARQBIxkAARoBWAEa … [truncated]
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2497` → after: `L2509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2509) · [Before (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2497)

```diff
-             rle: new Uint8Array([128, 81, 0, 1, 28, 31, 0, 1, 28, 31, 0, 1, 135, 1, 31, 0, 1, 135, 1, 31, 0, 1, 135, 1, 31, 0, 1, 135, 1, 31, 0, 1, 135, 1, 191, 13, 0, 1, 2, 31, 0, 1, 135, 1, 127, 0, 1, 219, 1, 31, 0, 1, 219, 1, 31, 0, 1, 219, 1, 161, 6, 0, 1, 2, 29, 0, 1, 135, 1 … [truncated]
+             rle: (0, WC.e)("gFEAARwfAAEcHwABhwEfAAGHAR8AAYcBHwABhwEfAAGHAb8NAAECHwABhwF/AAHbAR8AAdsBHwAB2wGhBgABAh0AAYcBArMHXQAB2wEfAAHbAR8AAdsBHwAB2wGgBgACAh0AAoEBAhwfAAEcngEAAYgBHwABHB8AARwfAAEcHwABiAEfAAGIAR8AAYgBHwABiAEfAAGIAR8AASP9AwABAgIAAQIcAAOHAQEcHQABHAKHAR0AA4cBHgABhwEf … [truncated]
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2502` → after: `L2514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2514) · [Before (L2502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2502)

```diff
-             rle: new Uint8Array([157, 120, 0, 2, 228, 7, 1, 20, 252, 7, 0, 1, 228, 7, 3, 20, 29, 0, 1, 20, 1, 0, 1, 20, 29, 0, 1, 228, 7, 190, 7, 0, 1, 228, 7, 1, 20, 1, 179, 7, 31, 0, 1, 26, 1, 179, 7, 30, 0, 1, 20, 1, 26, 30, 0, 1, 228, 7, 157, 7, 0, 1, 20, 1, 26, 31, 0, 1, 26, … [truncated]
+             rle: (0, WC.e)("nXgAAuQHART8BwAB5AcDFB0AARQBAAEUHQAB5Ae+BwAB5AcBFAGzBx8AARoBswceAAEUARoeAAHkB50HAAEUARofAAEaAbMHHwABGgHWAx8AARQfAAHkBx8AAeQH3AYAAeQHARoBswcfAAEaAbMHHgACGh4AAeQHnQcAAeQHAxodAAEaAQABFB0AAeQHvwcAAuQHARTgVwA=")
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2507` → after: `L2519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2519) · [Before (L2507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2507)

```diff
-             rle: new Uint8Array([128, 120, 0, 2, 228, 7, 254, 7, 0, 2, 20, 1, 228, 7, 30, 0, 1, 20, 31, 0, 1, 228, 7, 190, 7, 0, 1, 179, 7, 1, 20, 1, 228, 7, 29, 0, 1, 20, 31, 0, 1, 20, 31, 0, 1, 228, 7, 160, 7, 0, 2, 20, 29, 0, 1, 179, 7, 1, 20, 30, 0, 1, 26, 191, 7, 0, 1, 179,  … [truncated]
+             rle: (0, WC.e)("gHgAAuQH/gcAAhQB5AceAAEUHwAB5Ae+BwABswcBFAHkBx0AARQfAAEUHwAB5AegBwACFB0AAbMHARQeAAEavwcAAbMHARQB5AcdAAEaHwABFB8AAeQHnwcAAhQB5AceAAEUHwAB5Ae+BwAC5Af+VwA=")
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2512` → after: `L2524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2524) · [Before (L2512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2512)

```diff
-             rle: new Uint8Array([18, 0, 5, 2, 1, 0, 1, 2, 22, 0, 1, 179, 7, 1, 28, 1, 19, 1, 25, 5, 19, 1, 135, 1, 1, 179, 7, 1, 100, 20, 0, 1, 179, 7, 1, 28, 1, 47, 1, 0, 4, 16, 1, 206, 1, 1, 28, 23, 0, 1, 179, 7, 1, 146, 8, 1, 0, 5, 146, 8, 1, 179, 7, 23, 0, 1, 129, 1, 7, 0, 1, … [truncated]
+             rle: (0, WC.e)("EgAFAgEAAQIWAAGzBwEcARMBGQUTAYcBAbMHAWQUAAGzBwEcAS8BAAQQAc4BARwXAAGzBwGSCAEABZIIAbMHFwABgQEHAAGHARcAAYEBBwABhwEXAAGHAQcAAYcBFwABgQEHAAGHARcAAYEBBwABgQEXAAGBAQcAAYEBFwABgQEHAAGBARcAAYYBBwABhgEXAAGBAQcAAYEBHwABgQEeAAEUAYEBHQACGgGzBxwAAhodAAGBAQEaHgABswcf … [truncated]
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2517` → after: `L2529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2529) · [Before (L2517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2517)

```diff
-             rle: new Uint8Array([128, 128, 2, 0])
+             rle: (0, WC.e)("gIACAA==")
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2522` → after: `L2534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2534) · [Before (L2522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2522)

```diff
-             rle: new Uint8Array([128, 128, 2, 0])
+             rle: (0, WC.e)("gIACAA==")
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2527` → after: `L2539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2539) · [Before (L2527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2527)

```diff
-             rle: new Uint8Array([128, 128, 2, 0])
+             rle: (0, WC.e)("gIACAA==")
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2537` → after: `L2549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2549) · [Before (L2537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2537)

```diff
-             rle: new Uint8Array([4, 0, 1, 2, 1, 0, 2, 2, 1, 0, 1, 2, 2, 0, 1, 2, 23, 0, 3, 179, 7, 1, 136, 1, 1, 0, 2, 179, 7, 1, 136, 1, 2, 179, 7, 1, 0, 1, 135, 1, 21, 0, 2, 179, 7, 1, 136, 1, 3, 0, 1, 136, 1, 1, 29, 1, 179, 7, 1, 0, 1, 135, 1, 23, 0, 1, 136, 1, 3, 0, 1, 129, 1 … [truncated]
+             rle: (0, WC.e)("BAABAgEAAgIBAAECAgABAhcAA7MHAYgBAQACswcBiAECswcBAAGHARUAArMHAYgBAwABiAEBHQGzBwEAAYcBFwABiAEDAAGBAQEAAR0BAAGIARcAAYEBAwABiAEDAAGHARcAAYcBAwABgQEDAAGBARcAAYEBBwABiAEXAAGHAQcAAYgBFwABhwH7BQAFAgEAAQICAAMCFAABiAEEIgGzBwUiArMHEwABhwEBHAMiAbMHAR0BswcDIgGzBxQA … [truncated]
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2547` → after: `L2559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2559) · [Before (L2547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2547)

```diff
-             rle: new Uint8Array([75, 0, 4, 222, 1, 28, 0, 1, 222, 1, 1, 0, 1, 222, 1, 29, 0, 3, 222, 1, 29, 0, 3, 222, 1, 29, 0, 3, 222, 1, 29, 0, 2, 222, 1, 30, 0, 2, 222, 1, 30, 0, 2, 222, 1, 30, 0, 2, 222, 1, 30, 0, 2, 222, 1, 30, 0, 1, 222, 1, 249, 4, 0, 2, 2, 2, 0, 3, 2, 1,  … [truncated]
+             rle: (0, WC.e)("SwAE3gEcAAHeAQEAAd4BHQAD3gEdAAPeAR0AA94BHQAC3gEeAALeAR4AAt4BHgAC3gEeAALeAR4AAd4B+QQAAgICAAMCAQABAgIAAQICAAICDgAC3gEBHAizBwEcAbMHAhwDswcBHAwAA94BARwBiAEBgQEBHAGzBwGBAQGIAQKzBwGBAQEcArMHAogBArMHDQAB3gEBAAEcAwABiAEB7QcBeAHtBwGBAQIAAeoHAYgBARwBgQEBHAGIAQ8A … [truncated]
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2557` → after: `L2569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2569) · [Before (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2557)

```diff
-             rle: new Uint8Array([41, 0, 1, 222, 1, 2, 0, 1, 222, 1, 3, 0, 1, 222, 1, 1, 48, 23, 0, 2, 222, 1, 1, 0, 1, 222, 1, 3, 0, 2, 222, 1, 1, 0, 1, 222, 1, 20, 0, 3, 222, 1, 1, 0, 2, 222, 1, 2, 0, 2, 222, 1, 1, 0, 1, 222, 1, 20, 0, 3, 222, 1, 1, 0, 2, 222, 1, 2, 0, 2, 222, 1 … [truncated]
+             rle: (0, WC.e)("KQAB3gECAAHeAQMAAd4BATAXAALeAQEAAd4BAwAC3gEBAAHeARQAA94BAQAC3gECAALeAQEAAd4BFAAD3gEBAALeAQIAAt4BAQAB3gEUAAPeAQIAAd4BBQAB3gEVAALeAQIAAd4BBQAB3gGzBgABAgIAAQIBAAECAQABAgEAAwIBAAICAgABAgEAAgIFAAKBAQIcAQABHAEdAhwDHQIcAR0CHAEdARwCHQIcAR0BAAIdBgABgQECAAEdARwB … [truncated]
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2567` → after: `L2579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2579) · [Before (L2567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2567)

```diff
-             rle: new Uint8Array([38, 0, 1, 136, 1, 5, 0, 1, 136, 1, 25, 0, 1, 136, 1, 5, 0, 1, 136, 1, 25, 0, 1, 134, 1, 5, 0, 1, 134, 1, 25, 0, 1, 135, 1, 5, 0, 1, 129, 1, 25, 0, 1, 135, 1, 5, 0, 1, 136, 1, 25, 0, 2, 135, 1, 3, 129, 1, 2, 136, 1, 25, 0, 1, 135, 1, 1, 0, 1, 129,  … [truncated]
+             rle: (0, WC.e)("JgABiAEFAAGIARkAAYgBBQABiAEZAAGGAQUAAYYBGQABhwEFAAGBARkAAYcBBQABiAEZAAKHAQOBAQKIARkAAYcBAQABgQEBAAGBAQEAAYEBmgYABRwbAAMdAbMHAR0bAAKzBwEAAbMHASIbAAGzBwEiAQABIgGzBxsAAiIBAAGzBwEiGwACIgEAAiIZAAKHAQIiAhwBIgKBARcAAYcBBwABgQGXBgAJHBcAAYgBAbMHAuYHASMC5gcBHQGI … [truncated]
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2577` → after: `L2589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2589) · [Before (L2577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2577)

```diff
-             rle: new Uint8Array([39, 0, 1, 100, 251, 7, 0, 2, 222, 1, 3, 0, 2, 100, 13, 0, 2, 222, 1, 1, 0, 2, 100, 7, 0, 1, 222, 1, 7, 0, 1, 222, 1, 11, 0, 1, 222, 1, 11, 0, 1, 222, 1, 7, 0, 1, 222, 1, 31, 0, 1, 100, 31, 0, 1, 100, 31, 0, 1, 100, 183, 6, 0, 1, 46, 1, 2, 3, 0, 2, … [truncated]
+             rle: (0, WC.e)("JwABZPsHAALeAQMAAmQNAALeAQEAAmQHAAHeAQcAAd4BCwAB3gELAAHeAQcAAd4BHwABZB8AAWQfAAFktwYAAS4BAgMAAgIBAAECBwACAgIAAwIJAAGIAQGzBwEcAbMHAYgBAbMHARwBswcBiAEHAAGIAQGzBwEcAbMHAYgBAbMHARwBswcBiAEBZAUAAd0BAYgBAd4BAgABgQEB3gECZAGIAQcAAYgBAwABiAEB3gEBAAFkAYgBBgAB3QEB … [truncated]
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2587` → after: `L2599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2599) · [Before (L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2587)

```diff
-             rle: new Uint8Array([53, 0, 1, 100, 11, 0, 1, 222, 1, 31, 0, 1, 222, 1, 31, 0, 1, 222, 1, 3, 0, 1, 100, 27, 0, 1, 222, 1, 2, 0, 1, 100, 28, 0, 1, 222, 1, 2, 0, 1, 100, 28, 0, 1, 222, 1, 159, 6, 0, 1, 2, 1, 0, 2, 2, 1, 47, 3, 0, 3, 2, 1, 0, 3, 2, 1, 0, 2, 2, 13, 0, 1,  … [truncated]
+             rle: (0, WC.e)("NQABZAsAAd4BHwAB3gEfAAHeAQMAAWQbAAHeAQIAAWQcAAHeAQIAAWQcAAHeAZ8GAAECAQACAgEvAwADAgEAAwIBAAICDQAB3QEBiAEBswcBHAGzBwGIAQMAAYgBAbMHARwBswcBiAEBswcBHAGzBwGIAQEdARwBHQGIAQFkCQAB3QEBiAEDAAGBAQMAAYEBAwABiAEDAAGBAQMAAYgBCgAB3QEBgQEDAAGBAQMAAYEBAwABiAEDAAGIAQMA … [truncated]
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2597` → after: `L2609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2609) · [Before (L2597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2597)

```diff
-             rle: new Uint8Array([36, 0, 1, 100, 10, 0, 1, 100, 21, 0, 1, 100, 31, 0, 2, 100, 30, 0, 1, 100, 254, 6, 0, 1, 2, 3, 28, 1, 2, 2, 28, 25, 0, 4, 179, 7, 8, 0, 2, 100, 18, 0, 1, 29, 2, 179, 7, 29, 0, 3, 179, 7, 29, 0, 1, 100, 1, 28, 1, 34, 1, 100, 28, 0, 1, 100, 1, 28, 2 … [truncated]
+             rle: (0, WC.e)("JAABZAoAAWQVAAFkHwACZB4AAWT+BgABAgMcAQICHBkABLMHCAACZBIAAR0CswcdAAOzBx0AAWQBHAEiAWQcAAFkARzdBgAGHAECAQACHAEAAQIVAASzBwYAAbMHAgABZBIAAR0DswccAAEcA7MHAwACZBcAAhwCIgFkAQABZAIAAmQYAAEiAhwfAAIctwYAChwBAgEcFQAGswcFAAKzBwFkEQABHAazBwUAAh0BZBEAAhwBswcBHAKzBwEd … [truncated]
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2607` → after: `L2619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2619) · [Before (L2607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2607)

```diff
-             rle: new Uint8Array([7, 0, 1, 28, 128, 8, 0, 1, 28, 45, 0, 1, 100, 11, 0, 1, 100, 31, 0, 1, 150, 1, 159, 7, 0, 3, 2, 3, 0, 2, 28, 3, 0, 1, 2, 1, 0, 2, 2, 1, 0, 5, 2, 11, 0, 1, 136, 1, 1, 29, 1, 28, 1, 29, 1, 136, 1, 3, 222, 1, 1, 136, 1, 1, 29, 1, 28, 1, 29, 1, 136, 1 … [truncated]
+             rle: (0, WC.e)("BwABHIAIAAEcLQABZAsAAWQfAAGWAZ8HAAMCAwACHAMAAQIBAAICAQAFAgsAAYgBAR0BHAEdAYgBA94BAYgBAR0BHAEdAYgBAR0BHAEdAYgBAR0BHAEdAYgBAWQKAAGIAQFkAt4BAYcBA94BAYEBAQAC3gEBiAEB3gECAAGBAQFkAt4BAYgBAZYBCgABgQED3gEBhwED3gEBgQEBAALeAQGIAQHeAQQAAt4BDAABgQED3gEBgQED3gEBhwEB … [truncated]
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2617` → after: `L2629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2629) · [Before (L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2617)

```diff
-             rle: new Uint8Array([36, 0, 1, 100, 64, 0, 2, 100, 158, 7, 0, 3, 28, 1, 2, 2, 28, 25, 0, 4, 179, 7, 28, 0, 3, 179, 7, 29, 0, 3, 179, 7, 29, 0, 2, 28, 1, 34, 29, 0, 1, 129, 1, 1, 28, 30, 0, 2, 129, 1, 30, 0, 1, 28, 1, 129, 1, 30, 0, 2, 28, 253, 5, 0, 6, 28, 1, 2, 1, 0, … [truncated]
+             rle: (0, WC.e)("JAABZEAAAmSeBwADHAECAhwZAASzBxwAA7MHHQADswcdAAIcASIdAAGBAQEcHgACgQEeAAEcAYEBHgACHP0FAAYcAQIBAAIcFgAFswcGAAGzBxQAAR0EswcbAAEdARwDswccAAEdARwCIgFkAQABZAMAAWQYAAEiARwBHR8AARwBHVkAAoEB3AUAChwBAgEcAgITAAazBwUAArMHEgABHQazBwUAArMHAWQRAAEdARwBswcBAAOzBwUAArMH … [truncated]
```

#### 224. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2627` → after: `L2639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2639) · [Before (L2627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2627)

```diff
-             rle: new Uint8Array([36, 0, 2, 100, 222, 7, 0, 3, 2, 29, 0, 1, 34, 1, 129, 1, 1, 34, 31, 0, 1, 129, 1, 187, 7, 0, 1, 2, 1, 0, 3, 2, 26, 0, 1, 129, 1, 5, 34, 1, 129, 1, 28, 0, 1, 34, 1, 4, 1, 34, 30, 0, 1, 150, 1, 155, 7, 0, 4, 2, 1, 0, 1, 2, 25, 0, 1, 100, 7, 34, 25,  … [truncated]
+             rle: (0, WC.e)("JAACZN4HAAMCHQABIgGBAQEiHwABgQG7BwABAgEAAwIaAAGBAQUiAYEBHAABIgEEASIeAAGWAZsHAAQCAQABAhkAAWQHIhkAAYgBASIBBAEiAgQBgQEbAAGWAQHRDF0AAbMHHwABswcBAAIcHAABswcBAAIcHAABswcBAAKzBxwAAbMHAQACHRwAAbMHAQACHR4AAh38BAACAgEAAwIZAAGHAQUiAYcBGgABBAIiAQQBIhsAAZYBAQAB3gEB … [truncated]
```

#### 225. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2637` → after: `L2649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2649) · [Before (L2637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2637)

```diff
-             rle: new Uint8Array([2, 0, 2, 2, 30, 0, 3, 179, 7, 29, 0, 1, 179, 7, 1, 29, 1, 129, 1, 29, 0, 1, 28, 1, 226, 7, 30, 0, 1, 29, 31, 0, 2, 129, 1, 30, 0, 1, 136, 1, 1, 129, 1, 1, 136, 1, 29, 0, 2, 129, 1, 1, 136, 1, 29, 0, 1, 129, 1, 1, 226, 7, 254, 5, 0, 2, 2, 29, 0, 1, … [truncated]
+             rle: (0, WC.e)("AgACAh4AA7MHHQABswcBHQGBAR0AARwB4gceAAEdHwACgQEeAAGIAQGBAQGIAR0AAoEBAYgBHQABgQEB4gf+BQACAh0AAbMHARkBEwEAAYEBGwABgQEDAAEcGwABHAMAAYgBGwABiAEDAAGBARsAAR0DAAGBARsAAYEBAhMBAAGBARsAAYEBAcwBHgABiAH/BQACAh0AAbMHARkCEwEAARMBswcZAAGzBwG9BwQAARwZAAGIAQUAAR0ZAAGB … [truncated]
```

#### 226. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2647` → after: `L2659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2659) · [Before (L2647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2647)

```diff
-             rle: new Uint8Array([130, 16, 0, 1, 2, 2, 0, 1, 179, 7, 1, 46, 1, 29, 26, 0, 1, 135, 1, 3, 0, 1, 136, 1, 31, 0, 1, 136, 1, 31, 0, 1, 129, 1, 31, 0, 1, 134, 1, 30, 0, 2, 135, 1, 1, 129, 1, 30, 0, 1, 135, 1, 187, 6, 0, 2, 2, 1, 179, 7, 1, 129, 1, 1, 28, 2, 29, 25, 0, 2, … [truncated]
+             rle: (0, WC.e)("ghAAAQICAAGzBwEuAR0aAAGHAQMAAYgBHwABiAEfAAGBAR8AAYYBHgAChwEBgQEeAAGHAbsGAAICAbMHAYEBARwCHRkAAocBBQABiAEZAAGHAQUAAYcBHwABhwEfAAGGAR4AAYEBAYgBHwABgQG5BgABswcBzAED6AcBHAGzBxoAAYcB3QcAAR0BHAXoBwEdAQIXAAFkBwABgQF3AAGBAQcAAYcB2AYAARwF6AcBswcBAhYAAWQBiAEDAAHR … [truncated]
```

#### 227. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2657` → after: `L2669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2669) · [Before (L2657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2657)

```diff
-             rle: new Uint8Array([2, 0, 2, 2, 1, 179, 7, 1, 29, 2, 0, 2, 2, 23, 0, 1, 136, 1, 1, 179, 7, 1, 29, 3, 0, 1, 179, 7, 1, 29, 1, 136, 1, 1, 179, 7, 22, 0, 1, 136, 1, 2, 34, 3, 0, 1, 28, 1, 34, 1, 136, 1, 1, 179, 7, 22, 0, 2, 135, 1, 5, 0, 1, 34, 1, 129, 1, 23, 0, 1, 134, … [truncated]
+             rle: (0, WC.e)("AgACAgGzBwEdAgACAhcAAYgBAbMHAR0DAAGzBwEdAYgBAbMHFgABiAECIgMAARwBIgGIAQGzBxYAAocBBQABIgGBARcAAYYBBwABhgEfAAGBAdYGAAECBgABHQIAAbMHAS4UAAGzBwEcCQABhwEUAAEiAcwBCQABhwEUAAEiCgABgQGUBwABAgEAAR0IAAECFAABHQGzBwkAAYcBFAABswe/BwABswcEAAEd/gcAAbMHAQACHfsHAAMCAc8B … [truncated]
```

#### 228. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2667` → after: `L2679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2679) · [Before (L2667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2667)

```diff
-             rle: new Uint8Array([6, 0, 3, 2, 29, 0, 2, 179, 7, 1, 136, 1, 29, 0, 1, 34, 1, 0, 1, 129, 1, 184, 7, 0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 29, 1, 0, 1, 179, 7, 24, 0, 1, 135, 1, 1, 0, 2, 179, 7, 1, 135, 1, 1, 205, 1, 26, 0, 1, 129, 1, 1, 0, 2, 34, 1, 136, 1, 29, 0, 1, 3 … [truncated]
+             rle: (0, WC.e)("BgADAh0AArMHAYgBHQABIgEAAYEBuAcAAQIBAAECAQABAgEdAQABswcYAAGHAQEAArMHAYcBAc0BGgABgQEBAAIiAYgBHQABIgEAAYEBnAcAAQICAAEdAbMHAR0aAAGHAQEcHgABiAEfAAGBAR8AAYYB/wYAAQIBswcCAAGzBxoAAWQBswcfAAEiwAcAAgIEAAECFgACZAKzBwEcBAABhwEBiAEXAAGzBwEiBQABhwG6BwABAgEdAwACAhcA … [truncated]
```

#### 229. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2677` → after: `L2689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2689) · [Before (L2677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2677)

```diff
-             rle: new Uint8Array([2, 0, 2, 2, 30, 0, 1, 34, 1, 29, 30, 0, 2, 179, 7, 30, 0, 1, 34, 158, 7, 0, 1, 2, 31, 0, 1, 29, 1, 28, 30, 0, 1, 34, 1, 209, 12, 30, 0, 1, 34, 158, 7, 0, 1, 2, 1, 204, 1, 30, 0, 1, 28, 1, 29, 31, 0, 1, 179, 7, 68, 0, 1, 100, 30, 0, 1, 100, 30, 0,  … [truncated]
+             rle: (0, WC.e)("AgACAh4AASIBHR4AArMHHgABIp4HAAECHwABHQEcHgABIgHRDB4AASKeBwABAgHMAR4AARwBHR8AAbMHRAABZB4AAWQeAAJkuwYAAQIfAAGIAQMAAYgBGwABiAEDAAGIARsAAYEBAwABiAEBZBoAAYEBAwABgQEBZBoAAYYBAYcBAQABgQEBhgEbAAOHAQGBAQGIAR0AAmSgBgABAh8AAR0CZB0AAR0BZB4AASI8AAFkHwACZOAGAAEcAbMH … [truncated]
```

#### 230. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2687` → after: `L2699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2699) · [Before (L2687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2687)

```diff
-             rle: new Uint8Array([39, 0, 1, 100, 27, 0, 1, 222, 1, 3, 0, 1, 150, 1, 27, 0, 1, 222, 1, 6, 0, 1, 100, 31, 0, 1, 100, 32, 0, 1, 100, 215, 6, 0, 5, 2, 1, 0, 3, 2, 21, 0, 1, 179, 7, 1, 129, 1, 1, 179, 7, 1, 129, 1, 3, 179, 7, 1, 29, 3, 179, 7, 21, 0, 1, 129, 1, 1, 29, 2 … [truncated]
+             rle: (0, WC.e)("JwABZBsAAd4BAwABlgEbAAHeAQYAAWQfAAFkIAABZNcGAAUCAQADAhUAAbMHAYEBAbMHAYEBA7MHAR0DswcVAAGBAQEdAoEBBB0BgQECHBUAAR0BgQEBHQGBAQEdAoEBA4gBARwBZBMAAd0BAYEBAYgBAQADgQEBiAECgQEBiAEBHRQAAd0BAYgBAwABiAEGgQEaAASBAQKIARoAAogBA4EBAYgBGwABgQEBAAGBAQEAAYEB9QUAAgIBAAMC … [truncated]
```

#### 231. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2697` → after: `L2709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2709) · [Before (L2697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2697)

```diff
-             rle: new Uint8Array([37, 0, 1, 222, 1, 31, 0, 1, 222, 1, 190, 7, 0, 1, 2, 1, 0, 1, 2, 28, 0, 1, 100, 1, 179, 7, 1, 135, 1, 1, 29, 28, 0, 1, 150, 1, 1, 129, 1, 1, 136, 1, 1, 129, 1, 29, 0, 1, 129, 1, 1, 226, 7, 1, 136, 1, 29, 0, 1, 129, 1, 1, 226, 7, 1, 129, 1, 30, 0,  … [truncated]
+             rle: (0, WC.e)("JQAB3gEfAAHeAb4HAAECAQABAhwAAWQBswcBhwEBHRwAAZYBAYEBAYgBAYEBHQABgQEB4gcBiAEdAAGBAQHiBwGBAR4AAYgBAYEBHgABgQG9BgABAgMAAQIZAAHdAQGHAQGBAQEAAhQCswceAAGBAQEdHgABgQEBhgEeAAKBARwAARIBGAGBAQGIAR4AAYEBvQYAAgIBAAECGQABgQEBAAEUAhoBFAGBARgAAd4BBgABhwEYAAHeAQYAAYEB … [truncated]
```

#### 232. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2702` → after: `L2714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2714) · [Before (L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2702)

```diff
-           const Yq = new uq.e;
+           const QC = new FC.b;
```

#### 233. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2705` → after: `L2717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2717) · [Before (L2705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2705)

```diff
-             if (!(0, lq.H)(qq)) throw new Error(`Duplicate chunk at ${Oq.chunkX}, ${Oq.chunkY}, ${Oq.chunkZ}`);
+             if (!(0, wC.H)(CC)) throw new Error(`Duplicate chunk at ${bC.chunkX}, ${bC.chunkY}, ${bC.chunkZ}`);
```

#### 234. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2708` → after: `L2720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2720) · [Before (L2708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2708)

```diff
-           return new cq.d(qq, {
+           return new qC.b(CC, {
```

#### 235. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2723` → after: `L2735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2735) · [Before (L2723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2723)

```diff
-               rle: new Uint8Array([36, 0, 28, 28, 1, 0, 24, 28, 3, 29, 13, 28, 2, 29, 7, 28, 3, 29, 5, 28, 3, 29, 2, 28, 1, 29, 6, 0, 2, 29, 2, 194, 2, 5, 0, 2, 194, 2, 3, 29, 3, 0, 2, 29, 1, 0, 5, 29, 1, 194, 2, 4, 0, 3, 29, 2, 194, 2, 2, 29, 2, 0, 1, 29, 2, 0, 2, 194, 2, 3, 29, … [truncated]
+               rle: (0, WC.e)("JAAcHAEAGBwDHQ0cAh0HHAMdBRwDHQIcAR0GAAIdAsICBQACwgIDHQMAAh0BAAUdAcICBAADHQLCAgIdAgABHQIAAsICAx0CAAkdBAACHQMABR0CAAYdAgADHQEAAR0CwgIBHQQAAR0FAAMdAgAGHQLCAgQdAgABHQLCAoYGABocAgAMHAyBARQcDIEBFBwMHwYcBAABHQEfB38BHwx/AR8DfwHNAQF/BAABHQGBAQd/AYEBDH8BgQEFfw … [truncated]
```

#### 236. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2728` → after: `L2740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2740) · [Before (L2728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2728)

```diff
-               rle: new Uint8Array([32, 0, 4, 28, 28, 0, 7, 28, 25, 0, 1, 29, 7, 28, 27, 0, 1, 29, 30, 0, 2, 29, 28, 0, 1, 29, 1, 0, 2, 29, 28, 0, 4, 29, 156, 6, 0, 2, 28, 30, 0, 6, 28, 26, 0, 8, 28, 24, 0, 8, 28, 24, 0, 2, 127, 1, 31, 1, 29, 28, 0, 2, 127, 1, 129, 1, 1, 29, 28, 0 … [truncated]
+               rle: (0, WC.e)("IAAEHBwABxwZAAEdBxwbAAEdHgACHRwAAR0BAAIdHAAEHZwGAAIcHgAGHBoACBwYAAgcGAACfwEfAR0cAAJ/AYEBAR0cAAJ/AYEBAR0cAAJ/AR8dAAMf/QUABRwbAAccGQAIHBgAAxwBHQQcGAADfwEdHAADfwEdHAADfx0AA38dAAIcAR/9BQAGHBoABxwZAAgcGAADHAEdBBwYAAN/AR0cAAN/AR0cAAN/AR0cAAN/HQACHAEf/QUABh … [truncated]
```

#### 237. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2738` → after: `L2750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2750) · [Before (L2738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2738)

```diff
-               rle: new Uint8Array([36, 0, 19, 28, 10, 0, 11, 28, 3, 29, 11, 28, 6, 0, 11, 28, 3, 29, 4, 28, 6, 29, 3, 28, 5, 0, 3, 29, 2, 194, 2, 2, 29, 9, 0, 1, 29, 3, 194, 2, 3, 29, 2, 0, 2, 29, 5, 0, 6, 29, 2, 194, 2, 1, 29, 3, 0, 2, 29, 1, 0, 3, 29, 1, 194, 2, 2, 0, 1, 29, 1, … [truncated]
+               rle: (0, WC.e)("JAATHAoACxwDHQscBgALHAMdBBwGHQMcBQADHQLCAgIdCQABHQPCAgMdAgACHQUABh0CwgIBHQMAAh0BAAMdAcICAgABHQHCAgMAAR0FAAIdAgADHQLCAgcdAQADHQIAAcICAR0CAAEdBQABHQQABx0BwgICHQMACR0FAAEdAgAYHQ0ACR0FAAMdzAUAERwMABccBwAbHAUAGxwFAAEdAR8DfwEfBX8BHwN/AR8FfwEfA38BHwEdBgABgQ … [truncated]
```

#### 238. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2748` → after: `L2760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2760) · [Before (L2748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2748)

```diff
-               rle: new Uint8Array([2, 0, 6, 28, 26, 0, 2, 194, 2, 6, 0, 1, 29, 22, 0, 2, 29, 2, 194, 2, 2, 0, 2, 29, 1, 0, 1, 29, 21, 0, 5, 29, 1, 0, 3, 29, 23, 0, 3, 29, 3, 0, 2, 29, 1, 194, 2, 1, 29, 22, 0, 1, 29, 5, 0, 1, 29, 2, 194, 2, 1, 29, 29, 0, 3, 29, 183, 6, 0, 9, 28, 2 … [truncated]
+               rle: (0, WC.e)("AgAGHBoAAsICBgABHRYAAh0CwgICAAIdAQABHRUABR0BAAMdFwADHQMAAh0BwgIBHRYAAR0FAAEdAsICAR0dAAMdtwYACRwXAAEfB38BHwEdFQABHQGBAQd/AYEBAR0VAAEdAYEBB38BgQEBHRUAAR0BgQEHfwGBAQEdFQABHQGBAQd/AYEBFgABHQUfAhwCHwEdtgYACRwBHRYACX8BHRUAAR0JfwEdFQABHQG9Bwh/AcICFQABHQG9Bw … [truncated]
```

#### 239. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2758` → after: `L2770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2770) · [Before (L2758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2758)

```diff
-               rle: new Uint8Array([69, 0, 27, 28, 2, 0, 30, 28, 2, 0, 30, 28, 1, 0, 31, 28, 230, 6, 0, 26, 28, 4, 0, 28, 28, 2, 0, 94, 28, 54, 0, 2, 127, 26, 0, 7, 127, 23, 0, 9, 127, 23, 0, 9, 127, 24, 0, 8, 127, 24, 0, 7, 127, 26, 0, 4, 127, 237, 4, 0, 29, 28, 1, 0, 31, 28, 1,  … [truncated]
+               rle: (0, WC.e)("RQAbHAIAHhwCAB4cAQAfHOYGABocBAAcHAIAXhw2AAJ/GgAHfxcACX8XAAl/GAAIfxgAB38aAAR/7QQAHRwBAB8cAQBfHDYABH8YAAh/EwAOfxEAD38RAA9/EQAPfxIADX8TAA1/FAALfxcAA38CAAJ/8AMAGRwCAB4cAQB/HDUAB38XAAp/DgASfw0AFH8MABR/CwAVfwsAFX8LABR/DQATfw0ACX8CAAd/DwAHfwYAA38RAAR/tQMAGx … [truncated]
```

#### 240. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2763` → after: `L2775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2775) · [Before (L2763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2763)

```diff
-               rle: new Uint8Array([64, 0, 2, 28, 30, 0, 5, 28, 27, 0, 7, 28, 25, 0, 7, 28, 249, 6, 0, 3, 28, 29, 0, 6, 28, 26, 0, 6, 28, 26, 0, 7, 28, 25, 0, 8, 28, 248, 6, 0, 5, 28, 27, 0, 6, 28, 26, 0, 8, 28, 24, 0, 8, 28, 24, 0, 8, 28, 216, 6, 0, 1, 28, 31, 0, 6, 28, 26, 0, 6, … [truncated]
+               rle: (0, WC.e)("QAACHB4ABRwbAAccGQAHHPkGAAMcHQAGHBoABhwaAAccGQAIHPgGAAUcGwAGHBoACBwYAAgcGAAIHNgGAAEcHwAGHBoABhwaAAgcGAAIHBgACBzYBgADHB0ABhwaAAccGQAIHBgACBwYAAgc2AYABBwcAAYcGgAIHBgACBwYAAgcGAAIHDgAAX8fAAJ/HgACfx4AAn8eAAJ/HgACfx4AAX8fAAF/HwABf58EAAQcHAAHHBkACBwYAAgcGA … [truncated]
```

#### 241. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2768` → after: `L2780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2780) · [Before (L2768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2768)

```diff
-               rle: new Uint8Array([3, 0, 29, 28, 1, 0, 159, 1, 28, 5, 0, 9, 127, 4, 0, 4, 28, 15, 0, 13, 127, 4, 28, 15, 0, 13, 127, 4, 28, 15, 0, 13, 127, 4, 28, 10, 127, 4, 0, 15, 127, 3, 28, 10, 127, 4, 0, 15, 127, 3, 28, 10, 127, 4, 0, 15, 127, 2, 28, 1, 0, 10, 127, 5, 0, 13, … [truncated]
+               rle: (0, WC.e)("AwAdHAEAnwEcBQAJfwQABBwPAA1/BBwPAA1/BBwPAA1/BBwKfwQAD38DHAp/BAAPfwMcCn8EAA9/AhwBAAp/BQANfwQACn8FAA1/BAAKfwUADX8EAAp/BQANfwQACn8GAAt/BgAJfwYAC38GAAl/BgAKfwcACX8JAAZ/CgAHf+QCABwcAQCfARwGAAF/Ac8BBX8FAAQcDwANfwQcDwANfwQcDwANfwQcCn8FAA1/BBwKfwUADX8EHAp/BQ … [truncated]
```

#### 242. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L2773` → after: `L2785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR2785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L2785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2785) · [Before (L2773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L2773)

```diff
-               rle: new Uint8Array([5, 28, 27, 0, 7, 28, 25, 0, 8, 28, 24, 0, 8, 28, 24, 0, 8, 28, 24, 0, 8, 28, 120, 0, 2, 127, 30, 0, 2, 127, 30, 0, 2, 127, 30, 0, 3, 127, 29, 0, 3, 127, 29, 0, 3, 127, 29, 0, 3, 127, 29, 0, 3, 127, 29, 0, 2, 127, 30, 0, 2, 127, 30, 0, 2, 127, 15 … [truncated]
+               rle: (0, WC.e)("BRwbAAccGQAIHBgACBwYAAgcGAAIHHgAAn8eAAJ/HgACfx4AA38dAAN/HQADfx0AA38dAAN/HQACfx4AAn8eAAJ/ngMABBwcAAccGQAIHBgACBwYAAgcGAAIHHgAAn8eAAJ/HgACfx4AAn8eAAJ/HgACfx4AAn8eAAJ/HgACfx4AAn8eAAJ/ngMABBwcAAccGQAHHBkACBwYAAgcGAAIHHgAAX8fAAF/HwACfx4AAn8eAAJ/HgACfx4AAn … [truncated]
```

#### 243. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5358-L5359` → after: `L5370-L5371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5370-L5371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5370-L5371) · [Before (L5358-L5359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5358-L5359)

```diff
-                 Il: -15,
-                 Cl: -97
+                 oC: -15,
+                 fC: -97
```

#### 244. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5418-L5419` → after: `L5430-L5431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5430-L5431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5430-L5431) · [Before (L5418-L5419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5418-L5419)

```diff
-                 Il: -40,
-                 Cl: -97
+                 oC: -40,
+                 fC: -97
```

#### 245. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5492-L5493` → after: `L5504-L5505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5504-L5505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5504-L5505) · [Before (L5492-L5493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5492-L5493)

```diff
-                 Il: -60,
-                 Cl: -95
+                 oC: -60,
+                 fC: -95
```

#### 246. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5611-L5612` → after: `L5623-L5624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5623-L5624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5623-L5624) · [Before (L5611-L5612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5611-L5612)

```diff
-                 Il: -70,
-                 Cl: -95
+                 oC: -70,
+                 fC: -95
```

#### 247. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5697` → after: `L5709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5709) · [Before (L5697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5697)

```diff
-             sl: "ruinStoneSmall1",
+             QC: "ruinStoneSmall1",
```

#### 248. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5700` → after: `L5712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5712) · [Before (L5700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5700)

```diff
-             sl: "ruinStoneSmall2",
+             QC: "ruinStoneSmall2",
```

#### 249. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5703` → after: `L5715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5715) · [Before (L5703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5703)

```diff
-             sl: "ruinStoneSmall3",
+             QC: "ruinStoneSmall3",
```

#### 250. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5706` → after: `L5718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5718) · [Before (L5706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5706)

```diff
-             sl: "ruinStoneSmall4",
+             QC: "ruinStoneSmall4",
```

#### 251. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5709` → after: `L5721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5721) · [Before (L5709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5709)

```diff
-             sl: "ruinStoneMedium1",
+             QC: "ruinStoneMedium1",
```

#### 252. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5712` → after: `L5724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5724) · [Before (L5712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5712)

```diff
-             sl: "ruinStoneSmall5",
+             QC: "ruinStoneSmall5",
```

#### 253. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5715` → after: `L5727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5727) · [Before (L5715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5715)

```diff
-             sl: "ruinStoneSmall6",
+             QC: "ruinStoneSmall6",
```

#### 254. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5718` → after: `L5730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5730) · [Before (L5718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5718)

```diff
-             sl: "ruinStoneMedium2",
+             QC: "ruinStoneMedium2",
```

#### 255. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5721` → after: `L5733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5733) · [Before (L5721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5721)

```diff
-             sl: "ruinStoneMedium3",
+             QC: "ruinStoneMedium3",
```

#### 256. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5724` → after: `L5736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5736) · [Before (L5724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5724)

```diff
-             sl: "ruinStoneMedium4",
+             QC: "ruinStoneMedium4",
```

#### 257. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5727` → after: `L5739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5739) · [Before (L5727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5727)

```diff
-             sl: "ruinStoneMedium5",
+             QC: "ruinStoneMedium5",
```

#### 258. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5730` → after: `L5742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5742) · [Before (L5730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5730)

```diff
-             sl: "ruinStoneMedium6",
+             QC: "ruinStoneMedium6",
```

#### 259. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5733` → after: `L5745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5745) · [Before (L5733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5733)

```diff
-             sl: "ruinStoneMedium7",
+             QC: "ruinStoneMedium7",
```

#### 260. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5736` → after: `L5748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5748) · [Before (L5736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5736)

```diff
-             sl: "ruinStoneMedium8",
+             QC: "ruinStoneMedium8",
```

#### 261. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5739` → after: `L5751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5751) · [Before (L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5739)

```diff
-             sl: "ruinStoneMedium9",
+             QC: "ruinStoneMedium9",
```

#### 262. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5742` → after: `L5754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5754) · [Before (L5742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5742)

```diff
-             sl: "ruinStoneMedium10",
+             QC: "ruinStoneMedium10",
```

#### 263. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5745` → after: `L5757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5757) · [Before (L5745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5745)

```diff
-             sl: "ruinStoneMedium11",
+             QC: "ruinStoneMedium11",
```

#### 264. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5748` → after: `L5760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5760) · [Before (L5748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5748)

```diff
-             sl: "ruinStoneLarge1",
+             QC: "ruinStoneLarge1",
```

#### 265. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5751` → after: `L5763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5763) · [Before (L5751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5751)

```diff
-             sl: "ruinStoneLarge2",
+             QC: "ruinStoneLarge2",
```

#### 266. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5754` → after: `L5766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5766) · [Before (L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5754)

```diff
-             sl: "ruinStoneLarge3",
+             QC: "ruinStoneLarge3",
```

#### 267. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5758` → after: `L5770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5770) · [Before (L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5758)

```diff
-             sl: "treeMapleLarge1",
+             QC: "treeMapleLarge1",
```

#### 268. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5761` → after: `L5773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5773) · [Before (L5761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5761)

```diff
-             sl: "treeMapleLarge2",
+             QC: "treeMapleLarge2",
```

#### 269. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5766` → after: `L5778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5778) · [Before (L5766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5766)

```diff
-               sl: "ruinStoneSmall1",
+               QC: "ruinStoneSmall1",
```

#### 270. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5769` → after: `L5781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5781) · [Before (L5769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5769)

```diff
-               sl: "ruinStoneSmall2",
+               QC: "ruinStoneSmall2",
```

#### 271. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5772` → after: `L5784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5784) · [Before (L5772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5772)

```diff
-               sl: "ruinStoneSmall3",
+               QC: "ruinStoneSmall3",
```

#### 272. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5775` → after: `L5787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5787) · [Before (L5775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5775)

```diff
-               sl: "ruinStoneSmall4",
+               QC: "ruinStoneSmall4",
```

#### 273. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5778` → after: `L5790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5790) · [Before (L5778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5778)

```diff
-               sl: "ruinStoneMedium1",
+               QC: "ruinStoneMedium1",
```

#### 274. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5781` → after: `L5793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5793) · [Before (L5781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5781)

```diff
-               sl: "ruinStoneSmall5",
+               QC: "ruinStoneSmall5",
```

#### 275. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5784` → after: `L5796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5796) · [Before (L5784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5784)

```diff
-               sl: "ruinStoneSmall6",
+               QC: "ruinStoneSmall6",
```

#### 276. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5787` → after: `L5799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5799) · [Before (L5787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5787)

```diff
-               sl: "ruinStoneMedium2",
+               QC: "ruinStoneMedium2",
```

#### 277. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5790` → after: `L5802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5802) · [Before (L5790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5790)

```diff
-               sl: "ruinStoneMedium3",
+               QC: "ruinStoneMedium3",
```

#### 278. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5793` → after: `L5805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5805) · [Before (L5793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5793)

```diff
-               sl: "ruinStoneMedium4",
+               QC: "ruinStoneMedium4",
```

#### 279. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5796` → after: `L5808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5808) · [Before (L5796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5796)

```diff
-               sl: "ruinStoneMedium5",
+               QC: "ruinStoneMedium5",
```

#### 280. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5799` → after: `L5811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5811) · [Before (L5799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5799)

```diff
-               sl: "ruinStoneMedium6",
+               QC: "ruinStoneMedium6",
```

#### 281. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5802` → after: `L5814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5814) · [Before (L5802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5802)

```diff
-               sl: "ruinStoneMedium7",
+               QC: "ruinStoneMedium7",
```

#### 282. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5805` → after: `L5817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5817) · [Before (L5805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5805)

```diff
-               sl: "ruinStoneMedium8",
+               QC: "ruinStoneMedium8",
```

#### 283. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5808` → after: `L5820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5820) · [Before (L5808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5808)

```diff
-               sl: "ruinStoneMedium9",
+               QC: "ruinStoneMedium9",
```

#### 284. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5811` → after: `L5823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5823) · [Before (L5811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5811)

```diff
-               sl: "ruinStoneMedium10",
+               QC: "ruinStoneMedium10",
```

#### 285. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5814` → after: `L5826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5826) · [Before (L5814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5814)

```diff
-               sl: "ruinStoneMedium11",
+               QC: "ruinStoneMedium11",
```

#### 286. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5817` → after: `L5829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5829) · [Before (L5817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5817)

```diff
-               sl: "ruinStoneLarge1",
+               QC: "ruinStoneLarge1",
```

#### 287. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5820` → after: `L5832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5832) · [Before (L5820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5820)

```diff
-               sl: "ruinStoneLarge2",
+               QC: "ruinStoneLarge2",
```

#### 288. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5823` → after: `L5835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5835) · [Before (L5823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5823)

```diff
-               sl: "ruinStoneLarge3",
+               QC: "ruinStoneLarge3",
```

#### 289. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5827` → after: `L5839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5839) · [Before (L5827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5827)

```diff
-               sl: "treeMapleLarge1",
+               QC: "treeMapleLarge1",
```

#### 290. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5830` → after: `L5842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5842) · [Before (L5830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5830)

```diff
-               sl: "treeMapleLarge2",
+               QC: "treeMapleLarge2",
```

#### 291. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5837` → after: `L5849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5849) · [Before (L5837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5837)

```diff
-               sl: "treePineLarge1",
+               QC: "treePineLarge1",
```

#### 292. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5840` → after: `L5852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5852) · [Before (L5840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5840)

```diff
-               sl: "treePineLarge2",
+               QC: "treePineLarge2",
```

#### 293. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5845` → after: `L5857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5857) · [Before (L5845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5845)

```diff
-             sl: "dungeonDraugrSmall1",
+             QC: "dungeonDraugrSmall1",
```

#### 294. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5848` → after: `L5860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5860) · [Before (L5848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5848)

```diff
-             sl: "dungeonDraugrMedium1",
+             QC: "dungeonDraugrMedium1",
```

#### 295. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5851` → after: `L5863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5863) · [Before (L5851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5851)

```diff
-             sl: "dungeonDraugrLarge1",
+             QC: "dungeonDraugrLarge1",
```

#### 296. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5854` → after: `L5866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5866) · [Before (L5854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5854)

```diff
-             sl: "dungeonMagmaLarge1",
+             QC: "dungeonMagmaLarge1",
```

#### 297. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5859` → after: `L5871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5871) · [Before (L5859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5859)

```diff
-               sl: Eq
+               QC: zC
```

#### 298. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5868` → after: `L5880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5880) · [Before (L5868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5868)

```diff
-               sl: Eq,
+               QC: zC,
```

#### 299. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5881` → after: `L5893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5893) · [Before (L5881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5881)

```diff
-           if (gq > 100) throw new Error(`Total frequency of prefabs exceeds 100: ${gq}`);
+           if (ZC > 100) throw new Error(`Total frequency of prefabs exceeds 100: ${ZC}`);
```

#### 300. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5895` → after: `L5907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5907) · [Before (L5895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5895)

```diff
-             this.minDistanceFromOrigin = 0, this.offsettedHeight = -5, this.topsoilBlockType = void 0, this.lowsoilBlockType = void 0, this.topwaterBlockType = void 0, this.blockMetadata = void 0, this.Oa = void 0, this.treeMinDist = 5, this.hasScatteredLakes = !1, this._heightma … [truncated]
+             this.minDistanceFromOrigin = 0, this.offsettedHeight = -5, this.topsoilBlockType = void 0, this.lowsoilBlockType = void 0, this.topwaterBlockType = void 0, this.blockMetadata = void 0, this.Ig = void 0, this.treeMinDist = 5, this.hasScatteredLakes = !1, this._heightma … [truncated]
```

#### 301. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5898-L5899` → after: `L5910-L5911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5910-L5911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5910-L5911) · [Before (L5898-L5899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5898-L5899)

```diff
-                 [Aq.o.SURFACE]: xq,
-                 [Aq.o.UNDERGROUND]: hq(Aq.k.MEDIUM, rq)
+                 [oC.g.SURFACE]: fC,
+                 [oC.g.UNDERGROUND]: hC(oC.f.MEDIUM, vC)
```

#### 302. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5901` → after: `L5913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5913) · [Before (L5901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5901)

```diff
-             this.prefabDataPerType = Object.fromEntries(Object.values(Aq.o).filter((qq => Number.isInteger(qq))).map((qq => Number(qq))).map((qq => {
+             this.prefabDataPerType = Object.fromEntries(Object.values(oC.g).filter((CC => Number.isInteger(CC))).map((CC => Number(CC))).map((CC => {
```

#### 303. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5923` → after: `L5935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5935) · [Before (L5923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5923)

```diff
-                   if ("string" !== typeof Eq && Object.hasOwn(oq, Oq)) throw new Error(`Prefab definition "${Oq}" has a built-in prefab's name`);
+                   if ("string" !== typeof zC && Object.hasOwn(AC, bC)) throw new Error(`Prefab definition "${bC}" has a built-in prefab's name`);
```

#### 304. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5925-L5927` → after: `L5937-L5939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5937-L5939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5937-L5939) · [Before (L5925-L5927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5925-L5927)

```diff
-                   if (mq > cq) throw new Error(`Prefab ${Oq} has clearing radius ${mq} which is greater than the world generator's prefab radius ${cq}`);
-                   if (lq.groundingRadius > gq.maxPrefabGroundingRadius) throw new Error(`Prefab ${Oq} has grounding radius ${lq.groundingRadius} which is greater than the world generator's max prefab grounding radius of ${gq.maxPrefabGroundingRadius}`);
-                   if ("centre" !== lq.groundingPoints && 0 === lq.groundingPoints.length) throw new Error(`Prefab ${Oq} has no grounding points`);
+                   if (nC > qC) throw new Error(`Prefab ${bC} has clearing radius ${nC} which is greater than the world generator's prefab radius ${qC}`);
+                   if (wC.groundingRadius > ZC.maxPrefabGroundingRadius) throw new Error(`Prefab ${bC} has grounding radius ${wC.groundingRadius} which is greater than the world generator's max prefab grounding radius of ${ZC.maxPrefabGroundingRadius}`);
+                   if ("centre" !== wC.groundingPoints && 0 === wC.groundingPoints.length) throw new Error(`Prefab ${bC} has no grounding points`);
```

#### 305. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5929` → after: `L5941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5941) · [Before (L5929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5929)

```diff
-                   if (xq.x > gq.prefabSize || xq.y > gq.prefabSize || xq.z > gq.prefabSize) throw new Error(`Prefab ${Oq} has dimensions ${JSON.stringify(xq)} which are too large for the world generator's prefab size of ${gq.prefabSize}`);
+                   if (fC.x > ZC.prefabSize || fC.y > ZC.prefabSize || fC.z > ZC.prefabSize) throw new Error(`Prefab ${bC} has dimensions ${JSON.stringify(fC)} which are too large for the world generator's prefab size of ${ZC.prefabSize}`);
```

#### 306. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5944` → after: `L5956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5956) · [Before (L5944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5944)

```diff
-             this.floraGenerator = new xq(this.blockMetadata, this.Oa, `${this.seed}flora`, this.grassChance, this.tallGrassChance, this.cornChance, this.spectralGrassChance, this.pineGrassChance, this.pineFernChance, this.jungleTallGrassChance, this.catnipChance, this.autumnFernC … [truncated]
+             this.floraGenerator = new fC(this.blockMetadata, this.Ig, `${this.seed}flora`, this.grassChance, this.tallGrassChance, this.cornChance, this.spectralGrassChance, this.pineGrassChance, this.pineFernChance, this.jungleTallGrassChance, this.catnipChance, this.autumnFernC … [truncated]
```

#### 307. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5978` → after: `L5990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5990) · [Before (L5978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5978)

```diff
-               treeType: lq.w.Maple,
+               treeType: wC.t.Maple,
```

#### 308. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5981` → after: `L5993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5993) · [Before (L5981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5981)

```diff
-               treeType: lq.w.Pine,
+               treeType: wC.t.Pine,
```

#### 309. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5984` → after: `L5996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5996) · [Before (L5984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5984)

```diff
-               treeType: lq.w.Plum,
+               treeType: wC.t.Plum,
```

#### 310. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5987` → after: `L5999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR5999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5999) · [Before (L5987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5987)

```diff
-               treeType: lq.w.Cedar,
+               treeType: wC.t.Cedar,
```

#### 311. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5990` → after: `L6002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6002) · [Before (L5990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5990)

```diff
-               treeType: lq.w.Aspen,
+               treeType: wC.t.Aspen,
```

#### 312. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5993` → after: `L6005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6005) · [Before (L5993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5993)

```diff
-               treeType: lq.w.Jungle,
+               treeType: wC.t.Jungle,
```

#### 313. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5996` → after: `L6008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6008) · [Before (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5996)

```diff
-               treeType: lq.w.Palm,
+               treeType: wC.t.Palm,
```

#### 314. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5999` → after: `L6011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6011) · [Before (L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L5999)

```diff
-               treeType: lq.w.AutumnMaple,
+               treeType: wC.t.AutumnMaple,
```

#### 315. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6002` → after: `L6014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6014) · [Before (L6002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6002)

```diff
-               treeType: lq.w.Pear,
+               treeType: wC.t.Pear,
```

#### 316. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6005` → after: `L6017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6017) · [Before (L6005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6005)

```diff
-               treeType: lq.w.Cherry,
+               treeType: wC.t.Cherry,
```

#### 317. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6008` → after: `L6020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6020) · [Before (L6008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6008)

```diff
-               treeType: lq.w.Spectral,
+               treeType: wC.t.Spectral,
```

#### 318. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6011` → after: `L6023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6023) · [Before (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6011)

```diff
-               treeType: lq.w.Mango,
+               treeType: wC.t.Mango,
```

#### 319. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6014` → after: `L6026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6026) · [Before (L6014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6014)

```diff
-               treeType: lq.w.AutumnAspen,
+               treeType: wC.t.AutumnAspen,
```

#### 320. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6017` → after: `L6029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6029) · [Before (L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6017)

```diff
-               treeType: lq.w.Dead,
+               treeType: wC.t.Dead,
```

#### 321. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6020` → after: `L6032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6032) · [Before (L6020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6020)

```diff
-               treeType: lq.w.FallenLog,
+               treeType: wC.t.FallenLog,
```

#### 322. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6029` → after: `L6041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6041) · [Before (L6029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6029)

```diff
-             return `${qq}|${Eq}`
+             return `${CC}|${zC}`
```

#### 323. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6069` → after: `L6081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6081) · [Before (L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6069)

```diff
-             super(qq, Eq, gq, `${lq}Desert`, Oq, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null), this.key = "desert", this.grassChance = 0, this.tallGrassChance = 0, this.cactusChance = 6e-4, this.flowerPatchDistApart = 200, this.chiliPepperChance = 30, th … [truncated]
+             super(CC, zC, ZC, `${wC}Desert`, bC, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null), this.key = "desert", this.grassChance = 0, this.tallGrassChance = 0, this.cactusChance = 6e-4, this.flowerPatchDistApart = 200, this.chiliPepperChance = 30, th … [truncated]
```

#### 324. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6075` → after: `L6087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6087) · [Before (L6075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6075)

```diff
-             }], `${lq}DesertBiomeHeightMap`)
+             }], `${wC}DesertBiomeHeightMap`)
```

#### 325. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6085-L6086` → after: `L6097-L6098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6097-L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6097-L6098) · [Before (L6085-L6086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6085-L6086)

```diff
-             super(qq, Eq, gq, Oq, mq, hq(Aq.k.VERY_HIGH, [{
-               sl: "treePalmLarge1",
+             super(CC, zC, ZC, bC, nC, hC(oC.f.VERY_HIGH, [{
+               QC: "treePalmLarge1",
```

#### 326. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6089` → after: `L6101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6101) · [Before (L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6089)

```diff
-               sl: "treePalmLarge2",
+               QC: "treePalmLarge2",
```

#### 327. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6091` → after: `L6103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6103) · [Before (L6091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6091)

```diff
-             }])), this.key = "oasis", this.hasScatteredLakes = !0, this.maxPrefabDistFromLakeEdge = 18, this.tags.push(lq.c.OASIS), this._heightmapSimplex = new Yq.g([{
+             }])), this.key = "oasis", this.hasScatteredLakes = !0, this.maxPrefabDistFromLakeEdge = 18, this.tags.push(wC.e.OASIS), this._heightmapSimplex = new QC.h([{
```

#### 328. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6097` → after: `L6109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6109) · [Before (L6097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6097)

```diff
-             }], `${Oq}OasisBiomeHeightMap`)
+             }], `${bC}OasisBiomeHeightMap`)
```

#### 329. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6105` → after: `L6117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6117) · [Before (L6105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6105)

```diff
-             super(qq, Eq, gq, `${Yq}RedDesert`, lq), this.key = "redDesert", this.chiliPepperChance = 30, this.lavaChiliPepperChance = 30, this.topsoilBlockType = Eq["Red Sand"].id, this.lowsoilBlockType = Eq["Red Sand"].id
+             super(CC, zC, ZC, `${QC}RedDesert`, wC), this.key = "redDesert", this.chiliPepperChance = 30, this.lavaChiliPepperChance = 30, this.topsoilBlockType = zC["Red Sand"].id, this.lowsoilBlockType = zC["Red Sand"].id
```

#### 330. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6110` → after: `L6122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6122) · [Before (L6110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6110)

```diff
-             super(qq, Eq, gq, `${Oq}Plains`, mq, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : hq(Aq.k.MEDIUM, Pq, Qq)), this.key = "plains", this.grassChance = .162, this.tallGrassChance = .016, this.flowerPatchDistApart = 20, this.forgetMeNotChance = 100, thi … [truncated]
+             super(CC, zC, ZC, `${bC}Plains`, nC, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : hC(oC.f.MEDIUM, xC, JC)), this.key = "plains", this.grassChance = .162, this.tallGrassChance = .016, this.flowerPatchDistApart = 20, this.forgetMeNotChance = 100, thi … [truncated]
```

#### 331. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6116` → after: `L6128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6128) · [Before (L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6116)

```diff
-             }], `${Oq}PlainsBiomeHeightMap`)
+             }], `${bC}PlainsBiomeHeightMap`)
```

#### 332. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6126-L6127` → after: `L6138-L6139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6138-L6139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6138-L6139) · [Before (L6126-L6127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6126-L6127)

```diff
-             super(qq, Eq, gq, Yq, lq, hq(Aq.k.MEDIUM, [{
-               sl: "treeMapleLarge1",
+             super(CC, zC, ZC, QC, wC, hC(oC.f.MEDIUM, [{
+               QC: "treeMapleLarge1",
```

#### 333. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6130` → after: `L6142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6142) · [Before (L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6130)

```diff
-               sl: "treeMapleLarge2",
+               QC: "treeMapleLarge2",
```

#### 334. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6137` → after: `L6149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6149) · [Before (L6137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6137)

```diff
-             super(qq, Eq, gq, Yq, lq, hq(Aq.k.MEDIUM, Qq)), this.key = "snowyPlains", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 9e-4, this.tallGrassChance = 1e-4, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTuli … [truncated]
+             super(CC, zC, ZC, QC, wC, hC(oC.f.MEDIUM, JC)), this.key = "snowyPlains", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 9e-4, this.tallGrassChance = 1e-4, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTuli … [truncated]
```

#### 335. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6142` → after: `L6154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6154) · [Before (L6142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6142)

```diff
-             super(qq, Eq, gq, `${lq}Forest`, Oq, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : hq(Aq.k.MEDIUM, yq.ruins, yq.trees)), this.key = "forest", this.mapleTreeChance = 15, this.aspenTreeChance = 1, this.flowerPatchDistApart = 28, this.redMushroomChance … [truncated]
+             super(CC, zC, ZC, `${wC}Forest`, bC, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : hC(oC.f.MEDIUM, IC.ruins, IC.trees)), this.key = "forest", this.mapleTreeChance = 15, this.aspenTreeChance = 1, this.flowerPatchDistApart = 28, this.redMushroomChance … [truncated]
```

#### 336. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6148` → after: `L6160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6160) · [Before (L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6148)

```diff
-             }], `${lq}ForestBiomeHeightMap`)
+             }], `${wC}ForestBiomeHeightMap`)
```

#### 337. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6163` → after: `L6175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6175) · [Before (L6163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6163)

```diff
-             super(qq, Eq, gq, Yq, Oq, hq(Aq.k.MEDIUM, yq.ruins)), this.key = "autumnForest", this.flowerPatchDistApart = 13, this.fallenMapleLeavesChance = 800, this.pumpkinChance = 30, this.melonChance = 0, this.autumnFernChance = .01, this.autumnMapleTreeChance = 15, this.autum … [truncated]
+             super(CC, zC, ZC, QC, bC, hC(oC.f.MEDIUM, IC.ruins)), this.key = "autumnForest", this.flowerPatchDistApart = 13, this.fallenMapleLeavesChance = 800, this.pumpkinChance = 30, this.melonChance = 0, this.autumnFernChance = .01, this.autumnMapleTreeChance = 15, this.autum … [truncated]
```

#### 338. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6168-L6169` → after: `L6180-L6181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6180-L6181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6180-L6181) · [Before (L6168-L6169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6168-L6169)

```diff
-             super(qq, Eq, gq, Yq, lq, hq(Aq.k.HIGH, [{
-               sl: "treeJungleLarge1",
+             super(CC, zC, ZC, QC, wC, hC(oC.f.HIGH, [{
+               QC: "treeJungleLarge1",
```

#### 339. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6172` → after: `L6184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6184) · [Before (L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6172)

```diff
-               sl: "treeJungleLarge2",
+               QC: "treeJungleLarge2",
```

#### 340. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6175` → after: `L6187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6187) · [Before (L6175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6175)

```diff
-               sl: "rockJungleLarge1",
+               QC: "rockJungleLarge1",
```

#### 341. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6178` → after: `L6190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6190) · [Before (L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6178)

```diff
-               sl: "rockJungleLarge2",
+               QC: "rockJungleLarge2",
```

#### 342. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6181` → after: `L6193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6193) · [Before (L6181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6181)

```diff
-               sl: "rockJungleLarge3",
+               QC: "rockJungleLarge3",
```

#### 343. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6184` → after: `L6196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6196) · [Before (L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6184)

```diff
-               sl: "rockJungleLarge4",
+               QC: "rockJungleLarge4",
```

#### 344. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6187` → after: `L6199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6199) · [Before (L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6187)

```diff
-               sl: "rockJungleLarge5",
+               QC: "rockJungleLarge5",
```

#### 345. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6190` → after: `L6202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6202) · [Before (L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6190)

```diff
-               sl: "rockJungleLarge6",
+               QC: "rockJungleLarge6",
```

#### 346. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6197` → after: `L6209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6209) · [Before (L6197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6197)

```diff
-             super(qq, Eq, gq, Yq, lq, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : hq(Aq.k.MEDIUM, tq.ruins, tq.trees)), this.key = "pineForest", this.minDistanceFromOrigin = 200, this.grassChance = 0, this.tallGrassChance = 0, this.pineGrassChance = .02, this … [truncated]
+             super(CC, zC, ZC, QC, wC, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : hC(oC.f.MEDIUM, iC.ruins, iC.trees)), this.key = "pineForest", this.minDistanceFromOrigin = 200, this.grassChance = 0, this.tallGrassChance = 0, this.pineGrassChance = .02, this … [truncated]
```

#### 347. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6207` → after: `L6219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6219) · [Before (L6207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6207)

```diff
-             super(qq, Eq, gq, `${Yq}Blue`, lq), this.key = "bluebellForest", this.bluebellChance = 10, this.melonChance = 0, this.flowerPatchDistApart = 12, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.redMushroomChance = 0, this.fatRedMushroomChance … [truncated]
+             super(CC, zC, ZC, `${QC}Blue`, wC), this.key = "bluebellForest", this.bluebellChance = 10, this.melonChance = 0, this.flowerPatchDistApart = 12, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.redMushroomChance = 0, this.fatRedMushroomChance … [truncated]
```

#### 348. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6212` → after: `L6224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6224) · [Before (L6212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6212)

```diff
-             super(qq, Eq, gq, Yq, lq, hq(Aq.k.MEDIUM, yq.trees)), this.key = "cherryForest", this.mapleTreeChance = 1, this.aspenTreeChance = 1, this.cherryTreeChance = 15, this.flowerPatchDistApart = 12, this.defaultFlowerInsidePatchSpawnChance = .4, this.defaultFlowerPatchRadiu … [truncated]
+             super(CC, zC, ZC, QC, wC, hC(oC.f.MEDIUM, IC.trees)), this.key = "cherryForest", this.mapleTreeChance = 1, this.aspenTreeChance = 1, this.cherryTreeChance = 15, this.flowerPatchDistApart = 12, this.defaultFlowerInsidePatchSpawnChance = .4, this.defaultFlowerPatchRadiu … [truncated]
```

#### 349. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6217` → after: `L6229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6229) · [Before (L6217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6217)

```diff
-             super(qq, Eq, gq, `${lq}RollingHills`, Oq), this.key = "rollingHills", this.riceChance = 30, this.topsoilBlockType = Eq["Grass Block"].id, this.treeMinDist = 25, this.offsettedHeight = 20, this._heightmapSimplex = new Yq.g([{
+             super(CC, zC, ZC, `${wC}RollingHills`, bC), this.key = "rollingHills", this.riceChance = 30, this.topsoilBlockType = zC["Grass Block"].id, this.treeMinDist = 25, this.offsettedHeight = 20, this._heightmapSimplex = new QC.h([{
```

#### 350. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6223` → after: `L6235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6235) · [Before (L6223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6223)

```diff
-             }], `${lq}RollingHillsBiomeHeightMap`)
+             }], `${wC}RollingHillsBiomeHeightMap`)
```

#### 351. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6228` → after: `L6240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6240) · [Before (L6228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6228)

```diff
-             super(qq, Eq, gq, `${lq}SnowyMountains`, Oq), this.key = "snowyMountains", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.ridgedNoiseAmplitude = void 0, this.ridgedNoiseOctave1 = void 0, this. … [truncated]
+             super(CC, zC, ZC, `${wC}SnowyMountains`, bC), this.key = "snowyMountains", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.ridgedNoiseAmplitude = void 0, this.ridgedNoiseOctave1 = void 0, this. … [truncated]
```

#### 352. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6231` → after: `L6243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6243) · [Before (L6231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6231)

```diff
-             }], `${lq}SnowyMountainsBiomeRidgedNoise`), this.ridgedNoiseOctave2 = new Yq.g([{
+             }], `${wC}SnowyMountainsBiomeRidgedNoise`), this.ridgedNoiseOctave2 = new QC.h([{
```

#### 353. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6234` → after: `L6246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6246) · [Before (L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6234)

```diff
-             }], `${lq}SnowyMountainsBiomeRidgedNoiseOctave2`), this.nonRidgedNoise = new Yq.g([{
+             }], `${wC}SnowyMountainsBiomeRidgedNoiseOctave2`), this.nonRidgedNoise = new QC.h([{
```

#### 354. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6237` → after: `L6249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6249) · [Before (L6237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6237)

```diff
-             }], `${lq}SnowyMountainsBiomeNonRidgedNoise`), this.ridgedNoiseAmplitude = (0, Yq.v)(this.ridgedNoiseOctave1) + (0, Yq.v)(this.ridgedNoiseOctave2)
+             }], `${wC}SnowyMountainsBiomeNonRidgedNoise`), this.ridgedNoiseAmplitude = (0, QC.z)(this.ridgedNoiseOctave1) + (0, QC.z)(this.ridgedNoiseOctave2)
```

#### 355. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6252-L6253` → after: `L6264-L6265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6264-L6265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6264-L6265) · [Before (L6252-L6253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6252-L6253)

```diff
-             super(qq, Eq, gq, lq, Oq, hq(Aq.k.HIGH, [{
-               sl: "treeSpectralLarge1",
+             super(CC, zC, ZC, wC, bC, hC(oC.f.HIGH, [{
+               QC: "treeSpectralLarge1",
```

#### 356. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6256` → after: `L6268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6268) · [Before (L6256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6256)

```diff
-               sl: "treeSpectralLarge2",
+               QC: "treeSpectralLarge2",
```

#### 357. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6259` → after: `L6271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6271) · [Before (L6259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6259)

```diff
-               sl: "rockSnowLarge1",
+               QC: "rockSnowLarge1",
```

#### 358. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6262` → after: `L6274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6274) · [Before (L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6262)

```diff
-               sl: "rockSnowLarge2",
+               QC: "rockSnowLarge2",
```

#### 359. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6265` → after: `L6277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6277) · [Before (L6265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6265)

```diff
-               sl: "rockSnowLarge3",
+               QC: "rockSnowLarge3",
```

#### 360. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6268` → after: `L6280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6280) · [Before (L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6268)

```diff
-               sl: "ruinSnowSmall1",
+               QC: "ruinSnowSmall1",
```

#### 361. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6271` → after: `L6283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6283) · [Before (L6271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6271)

```diff
-               sl: "ruinSnowSmall2",
+               QC: "ruinSnowSmall2",
```

#### 362. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6274` → after: `L6286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6286) · [Before (L6274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6274)

```diff
-               sl: "ruinSnowSmall3",
+               QC: "ruinSnowSmall3",
```

#### 363. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6277` → after: `L6289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6289) · [Before (L6277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6277)

```diff
-               sl: "ruinSnowSmall4",
+               QC: "ruinSnowSmall4",
```

#### 364. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6280` → after: `L6292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6292) · [Before (L6280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6280)

```diff
-               sl: "ruinSnowMedium1",
+               QC: "ruinSnowMedium1",
```

#### 365. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6283` → after: `L6295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6295) · [Before (L6283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6283)

```diff
-               sl: "ruinSnowMedium2",
+               QC: "ruinSnowMedium2",
```

#### 366. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6286` → after: `L6298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6298) · [Before (L6286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6286)

```diff
-               sl: "ruinSnowLarge1",
+               QC: "ruinSnowLarge1",
```

#### 367. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6289` → after: `L6301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6301) · [Before (L6289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6289)

```diff
-               sl: "ruinSnowLarge2",
+               QC: "ruinSnowLarge2",
```

#### 368. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6291` → after: `L6303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6303) · [Before (L6291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6291)

```diff
-             }])), this.key = "frozenBadlandsPlains", this.minDistanceFromOrigin = 400, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChan … [truncated]
+             }])), this.key = "frozenBadlandsPlains", this.minDistanceFromOrigin = 400, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChan … [truncated]
```

#### 369. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6297` → after: `L6309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6309) · [Before (L6297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6297)

```diff
-             }], `${lq}FrozenBadlandsPlainsHeightMap`)
+             }], `${wC}FrozenBadlandsPlainsHeightMap`)
```

#### 370. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6302-L6303` → after: `L6314-L6315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6314-L6315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6314-L6315) · [Before (L6302-L6303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6302-L6303)

```diff
-             super(qq, Eq, gq, lq, Oq, hq(Aq.k.HIGH, [{
-               sl: "treeSpectralLarge1",
+             super(CC, zC, ZC, wC, bC, hC(oC.f.HIGH, [{
+               QC: "treeSpectralLarge1",
```

#### 371. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6306` → after: `L6318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6318) · [Before (L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6306)

```diff
-               sl: "treeSpectralLarge2",
+               QC: "treeSpectralLarge2",
```

#### 372. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6309` → after: `L6321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6321) · [Before (L6309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6309)

```diff
-               sl: "rockSnowLarge1",
+               QC: "rockSnowLarge1",
```

#### 373. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6312` → after: `L6324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6324) · [Before (L6312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6312)

```diff
-               sl: "rockSnowLarge2",
+               QC: "rockSnowLarge2",
```

#### 374. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6315` → after: `L6327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6327) · [Before (L6315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6315)

```diff
-               sl: "rockSnowLarge3",
+               QC: "rockSnowLarge3",
```

#### 375. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6318` → after: `L6330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6330) · [Before (L6318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6318)

```diff
-               sl: "ruinSnowSmall1",
+               QC: "ruinSnowSmall1",
```

#### 376. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6321` → after: `L6333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6333) · [Before (L6321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6321)

```diff
-               sl: "ruinSnowSmall2",
+               QC: "ruinSnowSmall2",
```

#### 377. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6324` → after: `L6336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6336) · [Before (L6324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6324)

```diff
-               sl: "ruinSnowSmall3",
+               QC: "ruinSnowSmall3",
```

#### 378. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6327` → after: `L6339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6339) · [Before (L6327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6327)

```diff
-               sl: "ruinSnowSmall4",
+               QC: "ruinSnowSmall4",
```

#### 379. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6330` → after: `L6342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6342) · [Before (L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6330)

```diff
-               sl: "ruinSnowMedium1",
+               QC: "ruinSnowMedium1",
```

#### 380. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6333` → after: `L6345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6345) · [Before (L6333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6333)

```diff
-               sl: "ruinSnowMedium2",
+               QC: "ruinSnowMedium2",
```

#### 381. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6336` → after: `L6348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6348) · [Before (L6336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6336)

```diff
-               sl: "ruinSnowLarge1",
+               QC: "ruinSnowLarge1",
```

#### 382. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6339` → after: `L6351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6351) · [Before (L6339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6339)

```diff
-               sl: "ruinSnowLarge2",
+               QC: "ruinSnowLarge2",
```

#### 383. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6341` → after: `L6353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6353) · [Before (L6341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6341)

```diff
-             }])), this.key = "frozenBadlandsForest", this.minDistanceFromOrigin = 400, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChan … [truncated]
+             }])), this.key = "frozenBadlandsForest", this.minDistanceFromOrigin = 400, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChan … [truncated]
```

#### 384. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6347` → after: `L6359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6359) · [Before (L6347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6347)

```diff
-             }], `${lq}FrozenBadlandsForestHeightMap`)
+             }], `${wC}FrozenBadlandsForestHeightMap`)
```

#### 385. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6352` → after: `L6364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6364) · [Before (L6352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6352)

```diff
-             super(qq, Eq, gq, `${Oq}Custom_${xq.oO}_${xq.PO}`, mq), this.key = "custom", this.grassChance = 0, this.tallGrassChance = 0, this.mapleTreeChance = 0, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.flowerPatchDistApart = null, this.treeMinD … [truncated]
+             super(CC, zC, ZC, `${bC}Custom_${fC.dC}_${fC.mC}`, nC), this.key = "custom", this.grassChance = 0, this.tallGrassChance = 0, this.mapleTreeChance = 0, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.flowerPatchDistApart = null, this.treeMinD … [truncated]
```

#### 386. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6358` → after: `L6370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6370) · [Before (L6358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6358)

```diff
-             }], `${Oq}CustomBiomeHeightMap`)
+             }], `${bC}CustomBiomeHeightMap`)
```

#### 387. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6362` → after: `L6374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6374) · [Before (L6362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6362)

```diff
-       61340: (qq, Eq, gq) => {
+       39590: (CC, zC, ZC) => {
```

#### 388. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6364-L6365` → after: `L6376-L6377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6376-L6377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6376-L6377) · [Before (L6364-L6365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6364-L6365)

```diff
-           c: () => uq,
-           f: () => Vq,
+           e: () => FC,
+           g: () => SC,
```

#### 389. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6369-L6375` → after: `L6381-L6387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6381-L6387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6381-L6387) · [Before (L6369-L6375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6369-L6375)

```diff
-         var Yq = gq(61286),
-           lq = gq(61268),
-           Oq = gq(61260),
-           mq = gq(598),
-           xq = gq(61292),
-           Aq = gq(4107),
-           cq = gq(61333);
+         var QC = ZC(39526),
+           wC = ZC(39503),
+           bC = ZC(39489),
+           nC = ZC(600),
+           fC = ZC(39535),
+           oC = ZC(4189),
+           qC = ZC(39583);
```

#### 390. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6378` → after: `L6390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6390) · [Before (L6378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6378)

```diff
-             this.biomePointGen = void 0, this.biomeOffsetSimplex = void 0, this.biomeOffsetBound = void 0, this.veryHighSurfacePrefabCells = new WeakMap, this.baseBiome = void 0, this.biomesTotalFrequency = void 0, this.jO = void 0, this.anyStrata = void 0, this.biomeFrequencies  … [truncated]
+             this.biomePointGen = void 0, this.biomeOffsetSimplex = void 0, this.biomeOffsetBound = void 0, this.veryHighSurfacePrefabCells = new WeakMap, this.baseBiome = void 0, this.biomesTotalFrequency = void 0, this.KC = void 0, this.anyStrata = void 0, this.biomeFrequencies  … [truncated]
```

#### 391. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6384` → after: `L6396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6396) · [Before (L6384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6384)

```diff
-             }], `${gq}BiomeOffsetSimplex`), this.biomeOffsetBound = Math.ceil((0, Oq.v)(this.biomeOffsetSimplex)), this.baseBiome = new Yq.g(lq, mq, qq, gq, {
+             }], `${ZC}BiomeOffsetSimplex`), this.biomeOffsetBound = Math.ceil((0, bC.z)(this.biomeOffsetSimplex)), this.baseBiome = new QC.h(wC, nC, CC, ZC, {
```

#### 392. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6386` → after: `L6398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6398) · [Before (L6386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6386)

```diff
-             }), this.baseBiome.init(), this.jO = Aq, this.anyStrata = Aq.some((qq => {
+             }), this.baseBiome.init(), this.KC = oC, this.anyStrata = oC.some((CC => {
```

#### 393. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6391-L6393` → after: `L6403-L6405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6403-L6405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6403-L6405) · [Before (L6391-L6393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6391-L6393)

```diff
-             })), this.biomesTotalFrequency = 0, this.biomeFrequencies = new Array(this.jO.length);
-             for (let Yq = 0; Yq < this.jO.length; Yq++) {
-               const qq = this.jO[Yq],
+             })), this.biomesTotalFrequency = 0, this.biomeFrequencies = new Array(this.KC.length);
+             for (let QC = 0; QC < this.KC.length; QC++) {
+               const CC = this.KC[QC],
```

#### 394. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6400` → after: `L6412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6412) · [Before (L6400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6400)

```diff
-                 if (lq.init(), lq.minDistanceFromOrigin > 0) throw new Error(`Alt Biomes cannot have non-zero minDistanceFromOrigin: biomeId = ${Yq}`);
+                 if (wC.init(), wC.minDistanceFromOrigin > 0) throw new Error(`Alt Biomes cannot have non-zero minDistanceFromOrigin: biomeId = ${QC}`);
```

#### 395. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6402-L6403` → after: `L6414-L6415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6414-L6415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6414-L6415) · [Before (L6402-L6403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6402-L6403)

```diff
-                 for (let Eq = 0; Eq < this.jO.length; Eq++)
-                   if (this.jO[Eq].biome === lq) {
+                 for (let zC = 0; zC < this.KC.length; zC++)
+                   if (this.KC[zC].biome === wC) {
```

#### 396. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6406-L6407` → after: `L6418-L6419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6418-L6419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6418-L6419) · [Before (L6406-L6407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6406-L6407)

```diff
-                   } if (!qq) throw new Error(`Alt Biome not found in list of biomes: biomeId = ${Yq}`)
-               } else if (Eq.minDistanceFromOrigin > 0) throw new Error(`Biome has non-zero minDistanceFromOrigin, but no altBiome: biomeId = ${Yq}`);
+                   } if (!CC) throw new Error(`Alt Biome not found in list of biomes: biomeId = ${QC}`)
+               } else if (zC.minDistanceFromOrigin > 0) throw new Error(`Biome has non-zero minDistanceFromOrigin, but no altBiome: biomeId = ${QC}`);
```

#### 397. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6458` → after: `L6470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6470) · [Before (L6458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6458)

```diff
-                     if (this.getBiomeForBiomePoint(qq).biome.hasPrefabs(lq.o.SURFACE, lq.k.VERY_HIGH)) {
+                     if (this.getBiomeForBiomePoint(CC).biome.hasPrefabs(wC.g.SURFACE, wC.f.VERY_HIGH)) {
```

#### 398. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6475` → after: `L6487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6487) · [Before (L6475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6475)

```diff
-             const Eq = (0, cq.h)(qq[0], qq[1]);
+             const zC = (0, qC.d)(CC[0], CC[1]);
```

#### 399. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6481` → after: `L6493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6493) · [Before (L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6481)

```diff
-               gq = new Aq.k(`${qq[0]}|${qq[1]}|${this.seed}`);
+               ZC = new oC.j(`${CC[0]}|${CC[1]}|${this.seed}`);
```

#### 400. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6483` → after: `L6495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6495) · [Before (L6483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6483)

```diff
-               lq = this.jO[Yq].biome;
+               wC = this.KC[QC].biome;
```

#### 401. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6485-L6487` → after: `L6497-L6499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6497-L6499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6497-L6499) · [Before (L6485-L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6485-L6487)

```diff
-               lq = this.jO[Yq].altBiome;
-               for (let qq = 0; qq < this.jO.length; qq++)
-                 if (this.jO[qq].biome === lq) {
+               wC = this.KC[QC].altBiome;
+               for (let CC = 0; CC < this.KC.length; CC++)
+                 if (this.KC[CC].biome === wC) {
```

#### 402. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6502` → after: `L6514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6514) · [Before (L6502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6502)

```diff
-               QO: gq,
+               HC: ZC,
```

#### 403. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6505-L6506` → after: `L6517-L6518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6517-L6518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6517-L6518) · [Before (L6505-L6506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6505-L6506)

```diff
-             } = this.jO[Eq], Oq = {
-               stoneTypeId: gq[Nq(Yq, lq, new Aq.k(`${qq[0]}|${qq[1]}|${this.seed}Modifiers`))].stoneId
+             } = this.KC[zC], bC = {
+               stoneTypeId: ZC[MC(QC, wC, new oC.j(`${CC[0]}|${CC[1]}|${this.seed}Modifiers`))].stoneId
```

#### 404. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6512-L6513` → after: `L6524-L6525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6524-L6525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6524-L6525) · [Before (L6512-L6513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6512-L6513)

```diff
-               biomeIds: new Oq.e(this.Oa, [qq, Eq]),
-               stoneTypeIds: new Oq.e(this.Oa, [qq, Eq])
+               biomeIds: new bC.e(this.Ig, [CC, zC]),
+               stoneTypeIds: new bC.e(this.Ig, [CC, zC])
```

#### 405. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6515-L6516` → after: `L6527-L6528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6527-L6528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6527-L6528) · [Before (L6515-L6516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6515-L6516)

```diff
-             for (let lq = qq; lq < qq + this.Oa; lq++)
-               for (let qq = Eq; qq < Eq + this.Oa; qq++) {
+             for (let wC = CC; wC < CC + this.Ig; wC++)
+               for (let CC = zC; CC < zC + this.Ig; CC++) {
```

#### 406. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6523` → after: `L6535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6535) · [Before (L6523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6523)

```diff
-             return this.jO[qq].biome
+             return this.KC[CC].biome
```

#### 407. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6532` → after: `L6544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6544) · [Before (L6532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6532)

```diff
-             QO: qq,
+             HC: CC,
```

#### 408. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6566` → after: `L6578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6578) · [Before (L6566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6566)

```diff
-             Oa: Eq,
+             Ig: zC,
```

#### 409. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6572-L6579` → after: `L6584-L6585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6584-L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6584-L6585) · [Before (L6572-L6579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6572-L6579)

```diff
-           const xq = new Yq.n(Eq, gq, lq, Oq, mq),
-             Aq = new Yq.z(Eq, gq, lq, Oq, mq),
-             cq = new Yq.E(Eq, gq, lq, Oq, mq),
-             uq = new Yq.O(Eq, gq, lq, Oq, mq),
-             Bq = new Yq.J(Eq, gq, lq, Oq, mq),
-             Nq = new Yq.r(Eq, gq, lq, Oq, mq),
-             aq = new Yq.K(Eq, gq, lq, Oq, mq),
-             Vq = new Yq.F(Eq, gq, lq, Oq, mq),
+           const fC = new QC.u(zC, ZC, wC, bC, nC),
+             oC = new QC.D(zC, ZC, wC, bC, nC),
```

#### 410. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6581` → after: `L6587-L6588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6587-L6588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6587-L6588) · [Before (L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6581)

```diff
-             jq = new Yq.T(Eq, gq, lq, Oq, mq),
+             FC = new QC.P(zC, ZC, wC, bC, nC),
+             WC = new QC.N(zC, ZC, wC, bC, nC),
```

#### 411. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6583-L6584` → after: `L6590-L6596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6590-L6596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6590-L6596) · [Before (L6583-L6584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6583-L6584)

```diff
-             oq = new Yq.e(Eq, gq, lq, Oq, mq),
-             Pq = new Yq.R(Eq, gq, lq, Oq, mq),
+             gC = new QC.O(zC, ZC, wC, bC, nC),
+             SC = new QC.K(zC, ZC, wC, bC, nC),
+             pC = new QC.L(zC, ZC, wC, bC, nC),
+             PC = new QC.U(zC, ZC, wC, bC, nC),
+             GC = new QC.C(zC, ZC, wC, bC, nC),
+             RC = new QC.d(zC, ZC, wC, bC, nC),
+             AC = new QC.Q(zC, ZC, wC, bC, nC),
```

#### 412. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6589-L6592` → after: `L6601-L6604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6601-L6604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6601-L6604) · [Before (L6589-L6592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6589-L6592)

```diff
-             vq = new Yq.Y(Eq, gq, lq, Oq, mq),
-             hq = new Yq.B(Eq, gq, lq, Oq, mq),
-             nq = new Yq.u(Eq, gq, lq, Oq, mq),
-             bq = new Yq.t(Eq, gq, lq, Oq, mq),
+             vC = new QC.Z(zC, ZC, wC, bC, nC),
+             eC = new QC.F(zC, ZC, wC, bC, nC),
+             hC = new QC.z(zC, ZC, wC, bC, nC),
+             KC = new QC.y(zC, ZC, wC, bC, nC),
```

#### 413. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6706` → after: `L6718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6718) · [Before (L6706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6706)

```diff
-             Oa: gq,
+             Ig: ZC,
```

#### 414. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6714-L6715` → after: `L6726-L6727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6726-L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6726-L6727) · [Before (L6714-L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6714-L6715)

```diff
-             const Eq = new Yq.m(gq, lq, Oq, xq, Aq, qq),
-               cq = qq.QO.map((qq => ({
+             const zC = new QC.q(ZC, wC, bC, fC, oC, CC),
+               qC = CC.HC.map((CC => ({
```

#### 415. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6728` → after: `L6740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6740) · [Before (L6728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6728)

```diff
-       61272: (qq, Eq, gq) => {
+       39606: (CC, zC, ZC) => {
```

#### 416. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6730` → after: `L6742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6742) · [Before (L6730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6730)

```diff
-           b: () => Vq
+           d: () => SC
```

#### 417. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6732-L6807` → after: `L6744-L6748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6744-L6748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6744-L6748) · [Before (L6732-L6807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6732-L6807)

```diff
-         var Yq = gq(61268),
-           lq = gq(61260),
-           Oq = gq(1635),
-           mq = gq.n(Oq),
-           xq = gq(598),
-           Aq = gq(2760),
-           cq = gq.n(Aq),
-           uq = gq(37725),
-           Bq = gq(61278),
-           Wq = gq(39085);
- 
-         function Nq(qq, Eq, gq) {
-           const Yq = new Wq.e;
-           for (const lq of gq) {
-             const qq = Yq.get(lq.chunkX, lq.chunkY, lq.chunkZ);
-             if (!(0, xq.H)(qq)) throw new Error(`Duplicate chunk at ${lq.chunkX}, ${lq.chunkY}, ${lq.chunkZ}`);
- ... (60 more removed lines; see GitHub link above)
+         var QC = ZC(39489),
+           wC = ZC(600),
+           bC = ZC(39503),
+           nC = ZC(39498),
+           fC = ZC(4189);
```

#### 418. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6809-L6839` → after: `L6750-L6751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6750-L6751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6750-L6751) · [Before (L6809-L6839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6809-L6839)

```diff
-           constructor(qq, Eq) {
-             this.Oa = Eq, this.chunkToFixedPointPrefabs = void 0;
-             const gq = {},
-               Yq = Eq + jq;
-             for (const {
-                 sl: lq,
-                 x: Oq,
-                 y: mq,
-                 z: xq
-               }
-               of qq) {
-               const qq = aq[lq];
-               if (void 0 === qq) throw new Error(`Fixed-point prefab "${lq}" has not been inlined into the build using the BloxdSchematicInliner tool.`);
-               const {
-                 dimensions: Aq
-               } = qq, cq = Aq.x, uq = Aq.y, Bq = Aq.z, Wq = Oq - (cq >> 1), Nq = xq - (Bq >> 1), Vq = Wq + cq - 1, dq = Nq + Bq - 1, jq = {
- ... (15 more removed lines; see GitHub link above)
+           constructor(CC, zC, ZC, QC) {
+             this.Ig = CC, this.pointsGenerator = zC, this.seed = QC, this.tempChunkCoord = [0, 0], this.chunkSearchRadius = void 0, this.chunkSearchRadius = Math.floor(.5 * ZC / this.Ig) + 1
```

#### 419. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6841-L6873` → after: `L6753-L6754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6753-L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6753-L6754) · [Before (L6841-L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6841-L6873)

```diff
-           getFixedPointPrefabInfoForChunk(qq, Eq) {
-             const gq = this.getKeyForChunk(qq, Eq),
-               Oq = this.chunkToFixedPointPrefabs[gq];
-             if (void 0 === Oq) return {
-               decodedFixedPointPrefabsForChunk: [],
-               nearestFixedPrefabInfoForChunk: null
-             };
-             const mq = [];
-             for (const Yq of Oq) {
-               const {
-                 schematic: qq,
-                 bottomLeftX: Eq,
-                 bottomLeftZ: gq,
-                 floorY: lq,
-                 ceilingY: Oq,
-                 topRightX: xq,
- ... (17 more removed lines; see GitHub link above)
+           getChunkCoordFromGlobalCoord(CC, zC) {
+             return this.tempChunkCoord[0] = Math.floor(CC / this.Ig), this.tempChunkCoord[1] = Math.floor(zC / this.Ig), this.tempChunkCoord
```

#### 420. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6875-L6882` → after: `L6756-L6761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6756-L6761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6756-L6761) · [Before (L6875-L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6875-L6882)

```diff
-           static smoothHeightmapForFixedPointPrefab(qq, Eq, gq, lq) {
-             if (null === lq) return null;
-             const Oq = lq.getOrGenerate(qq, Eq, Yq.i.DistanceToNearestFixedPrefab);
-             if (Oq > jq) return null;
-             let mq = Oq / jq;
-             mq *= mq;
-             const xq = lq.getOrGenerate(qq, Eq, Yq.i.HeightOfNearestFixedPrefab);
-             return Math.floor(gq * mq + (1 - mq) * xq)
+           getSurroundingFeatures(CC, zC) {
+             const ZC = this.getChunkCoordFromGlobalCoord(CC, zC),
+               QC = [];
+             for (let wC = ZC[0] - this.chunkSearchRadius; wC <= ZC[0] + this.chunkSearchRadius; wC++)
+               for (let CC = ZC[1] - this.chunkSearchRadius; CC <= ZC[1] + this.chunkSearchRadius; CC++) this.pointsGenerator.isPoint(wC, CC) && QC.push(this.getRandomPointInChunk(wC, CC));
+             return QC
```

#### 421. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6884-L6886` → after: `L6763-L6767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6763-L6767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6763-L6767) · [Before (L6884-L6886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6884-L6886)

```diff
-           static isNearFixedPointPrefab(qq, Eq, gq) {
-             if (null === gq) return !1;
-             return gq.getOrGenerate(qq, Eq, Yq.i.DistanceToNearestFixedPrefab) <= jq
+           getRandomPointInChunk(CC, zC) {
+             const ZC = CC * this.Ig,
+               QC = zC * this.Ig,
+               wC = new fC.j(`${CC}|${zC}|${this.seed}`);
+             return [ZC + Math.floor(wC.next() * this.Ig), QC + Math.floor(wC.next() * this.Ig)]
```

#### 422. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6888-L6890` → after: `L6769-L6774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6769-L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6769-L6774) · [Before (L6888-L6890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6888-L6890)

```diff
-           static isWithinFixedPointPrefab(qq, Eq, gq) {
-             if (null === gq) return !1;
-             return 0 === gq.getOrGenerate(qq, Eq, Yq.i.DistanceToNearestFixedPrefab)
+         }
+         var qC = ZC(39535),
+           FC = ZC(39583);
+         class WC {
+           constructor(CC, zC, ZC, QC) {
+             this.numCaveTypes = CC, this.caveTypeToBlockIds = zC, this.caveTypePrioritization = ZC, this.Ig = QC
```

#### 423. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6892-L6905` → after: `L6776-L6779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6776-L6779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6776-L6779) · [Before (L6892-L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6892-L6905)

```diff
-           static getBlockFromFixedPointPrefab(qq, Eq, gq, Yq) {
-             const {
-               bottomLeftX: lq,
-               bottomLeftZ: Oq,
-               floorY: mq,
-               ceilingY: xq,
-               topRightX: Aq,
-               topRightZ: cq
-             } = Yq;
-             if (qq < lq || Aq < qq || Eq < mq || xq < Eq || gq < Oq || cq < gq) return 0;
-             const uq = qq - lq,
-               Bq = Eq - mq,
-               Wq = gq - Oq;
-             return Yq.decodedPrefabSchematic.get(uq, Bq, Wq)
+         }
+         class NC extends WC {
+           constructor(CC, zC, ZC, QC, wC) {
+             super(CC, zC, ZC, QC), this.data = wC
```

#### 424. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6907-L6908` → after: `L6781-L6782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6781-L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6781-L6782) · [Before (L6907-L6908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6907-L6908)

```diff
-           getKeyForChunk(qq, Eq) {
-             return `${qq}|${Eq}`
+           getOrGenerate(CC, zC, ZC, QC) {
+             return this.data.getOrGenerate(CC, zC, ZC, QC)
```

#### 425. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6910-L6936` → after: `L6784-L6785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6784-L6785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6784-L6785) · [Before (L6910-L6936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6910-L6936)

```diff
-           getDecodedPrefabSchematic(qq) {
-             const Eq = qq.name,
-               gq = Vq.DECODED_FIXED_POINT_PREFAB_SCHEMATIC_CACHE.get(Eq);
-             if (!(0, xq.H)(gq)) return gq;
-             const {
-               dimensions: Yq
-             } = qq, lq = cq()(new Uint16Array(Yq.x * Yq.y * Yq.z), [Yq.x, Yq.y, Yq.z]);
-             for (let Oq = 0; Oq < Yq.x; Oq += xq.y)
-               for (let Eq = 0; Eq < Yq.y; Eq += xq.y)
-                 for (let gq = 0; gq < Yq.z; gq += xq.y) {
-                   const mq = cq()(new Uint16Array(xq.y * xq.y * xq.y), [xq.y, xq.y, xq.y]),
-                     Aq = qq.getRLEChunk((0, xq.Q)(Oq), (0, xq.Q)(Eq), (0, xq.Q)(gq));
-                   uq.decode(Aq, mq.data);
-                   const Bq = Math.min(xq.y, Yq.x - Oq),
-                     Wq = Math.min(xq.y, Yq.y - Eq),
-                     Nq = Math.min(xq.y, Yq.z - gq);
- ... (11 more removed lines; see GitHub link above)
+           viewJustInnerChunk() {
+             return new MC(this.numCaveTypes, this.caveTypeToBlockIds, this.caveTypePrioritization, this.Ig, this.data.viewJustInnerChunk())
```

#### 426. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6939-L6946` → after: `L6788-L6790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6788-L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6788-L6790) · [Before (L6939-L6946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6939-L6946)

```diff
-         Vq.DECODED_FIXED_POINT_PREFAB_SCHEMATIC_CACHE = new(mq())({
-           max: 100,
-           ttl: 6e4,
-           updateAgeOnGet: !0
-         });
-         class dq {
-           constructor(qq) {
-             this.fixedPointPrefabsForChunk = qq
+         class MC extends WC {
+           constructor(CC, zC, ZC, QC, wC) {
+             super(CC, zC, ZC, QC), this.data = wC
```

#### 427. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6948-L6960` → after: `L6792-L6793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6792-L6793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6792-L6793) · [Before (L6948-L6960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6948-L6960)

```diff
-           generateAndSet(qq, Eq, gq) {
-             let lq = jq + 1,
-               Oq = 0;
-             for (const Yq of this.fixedPointPrefabsForChunk) {
-               const {
-                 bottomLeftX: gq,
-                 bottomLeftZ: mq,
-                 topRightX: xq,
-                 topRightZ: Aq
-               } = Yq, cq = Math.max(gq - qq, 0, qq - xq) + Math.max(mq - Eq, 0, Eq - Aq);
-               cq < lq && (lq = cq, Oq = Yq.floorY)
-             }
-             gq.set(qq, Eq, Yq.i.DistanceToNearestFixedPrefab, lq), gq.set(qq, Eq, Yq.i.HeightOfNearestFixedPrefab, Oq)
+           getOrGenerate(CC, zC, ZC, QC) {
+             return this.data.get(CC, zC, ZC, QC)
```

#### 428. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6977-L6983` → after: `L6798-L6805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6798-L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6798-L6805) · [Before (L6977-L6983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6977-L6983)

```diff
-           return new Yq.g([{
-             amplitude: 11,
-             frequency: 1 / 4e3
-           }, {
-             amplitude: 4,
-             frequency: .001
-           }], `${qq}GlobalHeightmapOffset`)
+           const zC = CC.high - CC.low;
+           return {
+             low: CC.low,
+             high: CC.high,
+             midpoint: (CC.low + CC.high) / 2,
+             width: zC,
+             halfWidth: zC / 2
+           }
```

#### 429. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6986-L6987` → after: `L6808-L6809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6808-L6809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6808-L6809) · [Before (L6986-L6987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6986-L6987)

```diff
-           constructor(qq) {
-             this.globalHeightmap = qq
+           constructor(CC, zC, ZC, QC) {
+             this.Ig = zC, this.caveMetadataForChunkCache = void 0, this.caveMetadataForChunkCache = new RC(CC, zC, ZC, QC)
```

#### 430. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6989-L6995` → after: `L6811-L6834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6811-L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6811-L6834) · [Before (L6989-L6995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6989-L6995)

```diff
-           getNoWaterHeightmapVal(qq, Eq, gq) {
-             const Yq = qq,
-               lq = Eq;
-             let Oq = 0;
-             for (const {
-                 biome: xq,
-                 weight: Aq
+           static isInCave(CC, zC, ZC, QC) {
+             for (let wC = 0; wC < QC.numCaveTypes; wC++) {
+               const nC = QC.getOrGenerate(CC, ZC, wC, bC.b.FloorY),
+                 fC = QC.getOrGenerate(CC, ZC, wC, bC.b.CeilingY);
+               if (nC <= zC && zC <= fC) return !0
+             }
+             return !1
+           }
+           static addCavesToChunk(CC, zC, ZC, QC, wC, oC) {
+             const qC = new fC.j(`caveBlocks${zC}|${ZC}|${QC}`);
+             for (let fC = zC; fC < zC + oC.Ig; fC++)
+               for (let FC = QC; FC < QC + oC.Ig; FC++) {
+                 const WC = wC.get(fC, FC, bC.c.GroundHeight);
+                 for (const wC of oC.caveTypePrioritization) {
+                   const NC = oC.getOrGenerate(fC, FC, wC, bC.b.FloorY);
+                   if (NC === nC.n) continue;
+ ... (8 more added lines; see GitHub link above)
```

#### 431. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6997-L6999` → after: `L6836-L6844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6836-L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6836-L6844) · [Before (L6997-L6999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6997-L6999)

```diff
-               of gq) Oq += xq.getHeightmapVal(Yq, lq) * Aq;
-             const mq = this.globalHeightmap.getOctaves(Yq, lq);
-             return Math.floor(Oq) + Math.floor(mq)
+           }
+           getCaveHeightmapVals(CC, zC, ZC) {
+             const wC = [CC, zC],
+               nC = new pC(this.caveMetadataForChunkCache, ZC, this.Ig),
+               fC = this.caveMetadataForChunkCache.numCaveTypes,
+               oC = this.caveMetadataForChunkCache.caveTypeToBlockId,
+               qC = this.caveMetadataForChunkCache.caveTypePrioritization,
+               FC = QC.b.create(this.Ig, wC, fC, bC.b.NumFields, nC);
+             return new NC(fC, oC, qC, this.Ig, FC)
```

#### 432. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7003-L7004` → after: `L6848-L6849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6848-L6849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6848-L6849) · [Before (L7003-L7004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7003-L7004)

```diff
-           constructor(qq, Eq, gq, Yq, lq) {
-             this.closestBiomesForChunk = qq, this.nearestFixedPrefabInfoForChunk = Eq, this.noWaterHeightmapGenerator = gq, this.heightmapPerturb = Yq, this.waterBodyGenerator = lq
+           constructor(CC, zC, ZC) {
+             if (this.caveMetadataForChunkCache = CC, this.heightmapVals = zC, this.caveGeneratorsPerChunk = [], ZC !== wC.x) throw new Error(`Cave generation is not supported for chunk sizes other than ${wC.x}`)
```

#### 433. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7007-L7062` → after: `L6852-L6854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6852-L6854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6852-L6854) · [Before (L7007-L7062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7007-L7062)

```diff
-             const Yq = this.closestBiomesForChunk.getOrGenerate(qq, Eq),
-               lq = Math.floor(this.heightmapPerturb.getOctaves(qq, Eq)),
-               mq = Math.floor(this.heightmapPerturb.getOctaves(qq + 200, Eq + 778)),
-               xq = this.waterBodyGenerator.columnMayHaveScatteredLakes(Yq, qq, Eq),
-               Aq = this.getWithWaterHeightmapVal(qq + lq, Eq + mq, Yq, xq);
-             let {
-               groundHeight: cq,
-               waterHeight: uq,
-               cavesAllowedBelowY: Bq,
-               isLake: Wq
-             } = Aq;
-             const Nq = Yq[0].biome.carveGround(qq, Eq, cq);
-             null !== Nq && (cq = Nq, uq = Oq.p, Bq = Nq - Oq.h, Wq = 0), this.setHeightmapValuesWithFixedPrefabSmoothing(qq, Eq, lq, mq, gq, cq, uq, Bq, Wq)
-           }
-           getWithWaterHeightmapVal(qq, Eq, gq, Yq) {
-             const lq = this.noWaterHeightmapGenerator.getNoWaterHeightmapVal(qq, Eq, gq),
- ... (40 more removed lines; see GitHub link above)
+             const QC = (0, wC.Q)(CC),
+               bC = (0, wC.Q)(zC);
+             this.getOrCreateCaveGeneratorForChunk(QC, bC).generateAndSet(CC, zC, ZC)
```

#### 434. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7064-L7070` → after: `L6856-L6857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6856-L6857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6856-L6857) · [Before (L7064-L7070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7064-L7070)

```diff
-           shouldCurtailCave(qq, Eq, gq) {
-             if (gq) return !0;
-             const Yq = Math.max(Math.abs(qq), Math.abs(Eq));
-             if (Yq < 50) return !0;
-             const lq = Math.min(Math.abs((qq - 300) % 1e3), 1e3 - Math.abs((qq - 300) % 1e3)),
-               Oq = Math.min(Math.abs((Eq - 300) % 1e3), 1e3 - Math.abs((Eq - 300) % 1e3));
-             return Yq > 1e4 && Math.max(lq, Oq) < 50
+           getOrCreateCaveGeneratorForChunk(CC, zC) {
+             return void 0 === this.caveGeneratorsPerChunk[CC] && (this.caveGeneratorsPerChunk[CC] = []), void 0 === this.caveGeneratorsPerChunk[CC][zC] && (this.caveGeneratorsPerChunk[CC][zC] = this.caveMetadataForChunkCache.getOrCreateCaveGeneratorForChunk(CC, zC, this.heightmap … [truncated]
```

#### 435. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7085-L7096` → after: `L6861-L6862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6861-L6862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6861-L6862) · [Before (L7085-L7096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7085-L7096)

```diff
-           constructor(qq, Eq, gq, Yq, lq, Oq, mq) {
-             let xq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-               cq = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-               uq = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : void 0;
-             if (this.name = qq, this.seed = lq, this.minDist = void 0, this.variableDensitySettings = void 0, this.gridSize = void 0, this.cachedCells = Aq.partition(), this._tempCellCoord = [0, 0], this.useIsPoint = void 0, this.useKthClosestPoint = void 0, this.useJitteredGrid  … [truncated]
-               const qq = this.gridSize % Eq;
-               0 !== qq && (this.gridSize += Eq - qq)
-             } else {
-               const qq = this.gridSize % mq;
-               0 !== qq && (this.gridSize += mq - qq)
-             }
-             this.useIsPoint = gq, this.useKthClosestPoint = Yq
+           constructor(CC, zC, ZC, QC, wC, bC) {
+             this.heightmapVals = CC, this.spaghettiCaveMetadataForChunk = zC, this.pitCaveMetadataForChunk = ZC, this.ravineCaveMetadataForChunk = QC, this.sphereCaveMetadataForChunk = wC, this.numCaveTypes = bC
```

#### 436. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7098-L7100` → after: `L6864-L6865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6864-L6865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6864-L6865) · [Before (L7098-L7100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7098-L7100)

```diff
-           assertReachableFromChunkCentre(qq, Eq) {
-             const gq = qq / 2 + Eq - 1;
-             if (this.gridSize < gq) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${gq} (chunkSize=${qq}, halfBox=${Eq}). Points near chunk edges would be missed.`)
+           generateAndSet(CC, zC, ZC) {
+             this.setDefaultCaves(CC, zC, ZC), this.generateAndSetSpaghettiCaves(CC, zC, ZC), this.generateAndSetPitCaves(CC, zC, ZC), this.generateAndSetRavineCaves(CC, zC, ZC), this.generateAndSetSphereCaves(CC, zC, ZC), this.removeCavesNearWater(CC, zC, ZC)
```

#### 437. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7102-L7107` → after: `L6867-L6868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6867-L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6867-L6868) · [Before (L7102-L7107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7102-L7107)

```diff
-           isPoint(qq, Eq) {
-             const gq = this.getCellCoordFromGlobalCoord(qq, Eq),
-               {
-                 pointsSet: Yq
-               } = this.getCell(gq[0], gq[1]);
-             return !!Yq.has((0, xq.h)(qq, Eq))
+           setDefaultCaves(CC, zC, ZC) {
+             for (let QC = 0; QC < this.numCaveTypes; QC++) ZC.set(CC, zC, QC, bC.b.FloorY, nC.n), ZC.set(CC, zC, QC, bC.b.CeilingY, nC.n)
```

#### 438. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7109-L7117` → after: `L6870-L6888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6870-L6888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6870-L6888) · [Before (L7109-L7117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7109-L7117)

```diff
-           getClosestPoint(qq, Eq) {
-             const gq = this.getCellCoordFromGlobalCoord(qq, Eq),
-               lq = this.getCell(gq[0], gq[1]),
-               Oq = this._getPointsSurroundingCell(gq, lq);
-             let mq = [0, 0],
-               xq = 1e4;
-             for (const Aq of Oq) {
-               const gq = (0, Yq.B)(Aq, qq, Eq);
-               gq < xq && (mq = Aq, xq = gq)
+           generateAndSetSpaghettiCaves(CC, zC, ZC) {
+             for (const QC of this.spaghettiCaveMetadataForChunk) {
+               const wC = QC.caveEdgeNoiseGenerator.getOctaves(CC, zC);
+               if (wC >= PC.SPAGHETTI_CAVE_EDGE_CUTOFF) continue;
+               const fC = QC.caveHeightNoiseGenerator.getOctaves(CC, zC);
+               if (fC === nC.b) continue;
+               if (!(QC.caveHeightThreshold.low < fC && fC < QC.caveHeightThreshold.high)) continue;
+               let oC;
+               {
+                 let CC = 1 - Math.abs(fC - QC.caveHeightThreshold.midpoint) / QC.caveHeightThreshold.halfWidth;
+                 CC = Math.min(QC.caveHeightPercentageUpperBound, CC), oC = QC.caveHeightMax * CC
+               }
+               wC > 0 && (oC *= (PC.SPAGHETTI_CAVE_EDGE_CUTOFF - wC) / PC.SPAGHETTI_CAVE_EDGE_CUTOFF);
+               const qC = QC.caveXZPerturbNoiseGenerator.getOctaves(CC, zC),
+                 FC = QC.caveXZPerturbNoiseGenerator.getOctaves(CC + 980, zC - 370),
+                 WC = QC.caveYPerturbNoiseGenerator.getOctaves(CC + qC, zC + FC),
+ ... (3 more added lines; see GitHub link above)
```

#### 439. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7126-L7136` → after: `L6891-L6916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6891-L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6891-L6916) · [Before (L7126-L7136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7126-L7136)

```diff
-           getPointsAroundPoint(qq, Eq) {
-             const gq = this.getCellCoordFromGlobalCoord(qq, Eq),
-               Yq = this.getCell(gq[0], gq[1]);
-             return this._getPointsSurroundingCell(gq, Yq)
-           }
-           _getPointsSurroundingCell(qq, Eq) {
-             if (!Eq.surroundingPoints) {
-               const Oq = [...Eq.points];
-               for (let Eq = qq[0] - 1; Eq <= qq[0] + 1; Eq++)
-                 for (let mq = qq[1] - 1; mq <= qq[1] + 1; mq++) Yq = Eq, lq = mq, ((gq = qq)[0] !== Yq || gq[1] !== lq) && Oq.push(...this.getCell(Eq, mq).points);
-               Eq.surroundingPoints = Oq
+           generateAndSetPitCaves(CC, zC, ZC) {
+             for (const QC of this.pitCaveMetadataForChunk) {
+               const wC = QC.pitMinX,
+                 nC = QC.pitMaxX,
+                 fC = QC.pitMinZ,
+                 oC = QC.pitMaxZ;
+               if (CC < QC.reachMinX || CC > QC.reachMaxX || zC < QC.reachMinZ || zC > QC.reachMaxZ) continue;
+               const qC = CC + QC.pitXZPerturbNoiseGenerator.getOctaves(CC, zC),
+                 FC = zC + QC.pitXZPerturbNoiseGenerator.getOctaves(CC + 430, zC - 330);
+               if (qC < wC || qC > nC || FC < fC || FC > oC) continue;
+               const WC = null === QC.pitHeightPerturbNoiseGenerator,
+                 NC = QC.pitFloorYPerturbNoiseGenerator.getOctaves(CC, zC),
+                 MC = WC ? 0 : QC.pitHeightPerturbNoiseGenerator.getOctaves(CC, zC);
+               let gC = QC.pitFloorY + NC,
+                 SC = QC.pitFloorY + QC.pitHeight + MC;
+               const pC = 4,
+ ... (10 more added lines; see GitHub link above)
```

#### 440. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7141-L7446` → after: `L6919-L6947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6919-L6947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6919-L6947) · [Before (L7141-L7446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7141-L7446)

```diff
-           _getClosestPointsForGeneratedCell(qq, Eq, gq, lq) {
-             let Oq = [0, 0],
-               mq = 1e5;
-             for (const cq of qq.surroundingPoints) {
-               const qq = (0, Yq.B)(cq, Eq, gq);
-               qq < mq && (Oq = cq, mq = qq)
-             }
-             const xq = [{
-               pt: Oq,
-               distDiffFromFirstPt: 0,
-               weight: 0
-             }];
-             let Aq = lq;
-             for (let cq = 0; cq < qq.surroundingPoints.length; cq++) {
-               const uq = qq.surroundingPoints[cq];
-               if (uq[0] === Oq[0] && uq[1] === Oq[1]) continue;
- ... (290 more removed lines; see GitHub link above)
+           generateAndSetRavineCaves(CC, zC, ZC) {
+             for (const wC of this.ravineCaveMetadataForChunk) {
+               const nC = wC.ravineCentre,
+                 fC = wC.ravineWidth,
+                 oC = wC.ravineLength,
+                 qC = CC - nC[0],
+                 FC = zC - nC[1];
+               if (qC * qC + FC * FC > wC.reachDistanceSquared) continue;
+               if (Math.abs(qC * wC.axisNormalX + FC * wC.axisNormalZ) > wC.reachFromAxis) continue;
+               const WC = CC + wC.ravineXZPerturbNoiseGenerator.getOctaves(CC, zC),
+                 NC = zC + wC.ravineXZPerturbNoiseGenerator.getOctaves(CC + 430, zC - 330),
+                 MC = (0, QC.F)(nC, WC, NC);
+               if (MC > oC) continue;
+               const gC = [WC, NC],
+                 SC = nC,
+                 pC = [nC[0] + wC.ravineDirection[0], nC[1] + wC.ravineDirection[1]],
+ ... (13 more added lines; see GitHub link above)
```

#### 441. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7463` → after: `L6964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6964) · [Before (L7463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7463)

```diff
-               aq + 1 === this.heightmapVals.getOrGenerate(qq, Eq, Oq.g.GroundHeight) && aq++, gq.set(qq, Eq, Yq.caveType, Oq.c.FloorY, Nq), gq.set(qq, Eq, Yq.caveType, Oq.c.CeilingY, aq)
+               gC + 1 === this.heightmapVals.getOrGenerate(CC, zC, bC.c.GroundHeight) && gC++, ZC.set(CC, zC, QC.caveType, bC.b.FloorY, MC), ZC.set(CC, zC, QC.caveType, bC.b.CeilingY, gC)
```

#### 442. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7467-L7468` → after: `L6968-L6969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6968-L6969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6968-L6969) · [Before (L7467-L7468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7467-L7468)

```diff
-             const Yq = this.heightmapVals.getOrGenerate(qq, Eq, Oq.g.CavesAllowedBelowY);
-             if (Yq !== mq.k)
+             const QC = this.heightmapVals.getOrGenerate(CC, zC, bC.c.CavesAllowedBelowY);
+             if (QC !== nC.l)
```

#### 443. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7470-L7471` → after: `L6971-L6972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6971-L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6971-L6972) · [Before (L7470-L7471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7470-L7471)

```diff
-                 if (gq.get(qq, Eq, lq, Oq.c.CeilingY) <= Yq) continue;
-                 gq.get(qq, Eq, lq, Oq.c.FloorY) <= Yq ? gq.set(qq, Eq, lq, Oq.c.CeilingY, Yq) : (gq.set(qq, Eq, lq, Oq.c.FloorY, mq.n), gq.set(qq, Eq, lq, Oq.c.CeilingY, mq.n))
+                 if (ZC.get(CC, zC, wC, bC.b.CeilingY) <= QC) continue;
+                 ZC.get(CC, zC, wC, bC.b.FloorY) <= QC ? ZC.set(CC, zC, wC, bC.b.CeilingY, QC) : (ZC.set(CC, zC, wC, bC.b.FloorY, nC.n), ZC.set(CC, zC, wC, bC.b.CeilingY, nC.n))
```

#### 444. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7476` → after: `L6977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR6977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L6977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L6977) · [Before (L7476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7476)

```diff
-         const oq = new Bq.e("cave chunk metadata", 100, 6e4);
+         const GC = new FC.c("cave chunk metadata", 100, 6e4);
```

#### 445. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7624-L7625` → after: `L7125-L7126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7125-L7126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7125-L7126) · [Before (L7624-L7625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7624-L7625)

```diff
-                     caveEdgeNoiseGenerator: new Yq.g(gq.caveEdgeNoiseParams, `${qq}CaveCutoff${mq}${lq}`),
-                     caveHeightNoiseGenerator: new Yq.h(gq.caveHeightNoiseParams, gq.caveHeightNoiseThresholdParams, `${qq}Cave${mq}${lq}`),
+                     caveEdgeNoiseGenerator: new QC.h(ZC.caveEdgeNoiseParams, `${CC}CaveCutoff${nC}${wC}`),
+                     caveHeightNoiseGenerator: new QC.k(ZC.caveHeightNoiseParams, ZC.caveHeightNoiseThresholdParams, `${CC}Cave${nC}${wC}`),
```

#### 446. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7629-L7630` → after: `L7130-L7131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7130-L7131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7130-L7131) · [Before (L7629-L7630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7629-L7630)

```diff
-                     caveXZPerturbNoiseGenerator: new Yq.g(gq.caveXZPerturbNoiseParams, `${qq}CaveHeightPerturb${mq}${lq}`),
-                     caveYPerturbNoiseGenerator: new Yq.g(gq.caveYPerturbNoiseParams, `${qq}CaveHeightNoise${mq}${lq}`),
+                     caveXZPerturbNoiseGenerator: new QC.h(ZC.caveXZPerturbNoiseParams, `${CC}CaveHeightPerturb${nC}${wC}`),
+                     caveYPerturbNoiseGenerator: new QC.h(ZC.caveYPerturbNoiseParams, `${CC}CaveHeightNoise${nC}${wC}`),
```

#### 447. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7749-L7751` → after: `L7250-L7252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7250-L7252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7250-L7252) · [Before (L7749-L7751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7749-L7751)

```diff
-                       Wq = new Yq.g(Aq.pitXZPerturbNoiseParams, `${qq}DistPitPerturb${Oq}`),
-                       aq = `${qq}PitGen${Oq}`,
-                       Vq = new lq.c("cavePit", Aq.numChunksBetweenPits, !0, !1, aq, 100, Eq),
+                       NC = new QC.h(wC.pitXZPerturbNoiseParams, `${CC}DistPitPerturb${bC}`),
+                       gC = `${CC}PitGen${bC}`,
+                       SC = new qC.d("cavePit", wC.numChunksBetweenPits, !0, !1, gC, 100, zC),
```

#### 448. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7753` → after: `L7254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7254) · [Before (L7753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7753)

```diff
-                     console.assert(dq.chunkSearchRadius <= Aq.numChunksBetweenPits / 2, `Cannot have overlapping cave features (pits), ${dq.chunkSearchRadius} ${Aq.numChunksBetweenPits/2}`);
+                     console.assert(pC.chunkSearchRadius <= wC.numChunksBetweenPits / 2, `Cannot have overlapping cave features (pits), ${pC.chunkSearchRadius} ${wC.numChunksBetweenPits/2}`);
```

#### 449. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7757` → after: `L7258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7258) · [Before (L7757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7757)

```diff
-                       Pq = new Yq.g(Aq.pitFloorYPerturbNoiseParams, `${qq}yPitPerturb${Oq}`);
+                       AC = new QC.h(wC.pitFloorYPerturbNoiseParams, `${CC}yPitPerturb${bC}`);
```

#### 450. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7759-L7760` → after: `L7260-L7261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7260-L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7260-L7261) · [Before (L7759-L7760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7759-L7760)

```diff
-                     null !== Aq.pitHeightPerturbNoiseParams && (Qq = new Yq.g(Aq.pitHeightPerturbNoiseParams, `${qq}heightPitPerturb${Oq}`));
-                     const yq = new Yq.g(Aq.pitMidpointNoiseParams, `${qq}edgesPitPerturb${Oq}`),
+                     null !== wC.pitHeightPerturbNoiseParams && (xC = new QC.h(wC.pitHeightPerturbNoiseParams, `${CC}heightPitPerturb${bC}`));
+                     const JC = new QC.h(wC.pitMidpointNoiseParams, `${CC}edgesPitPerturb${bC}`),
```

#### 451. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7830` → after: `L7331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7331) · [Before (L7830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7830)

```diff
-                     Bq = new Yq.g(Aq.ravineXZPerturbNoiseParams, `${qq}DistRavPerturb${xq}`);
+                     WC = new QC.h(FC.ravineXZPerturbNoiseParams, `${CC}DistRavPerturb${nC}`);
```

#### 452. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7833-L7835` → after: `L7334-L7336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7334-L7336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7334-L7336) · [Before (L7833-L7835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7833-L7835)

```diff
-                   const Nq = new Yq.g(Aq.ravineYPerturbNoiseParams, `${qq}yRavinePerturb${xq}`),
-                     aq = `${qq}RavineGen${xq}`,
-                     Vq = new lq.c("caveRav", Aq.numChunksBetweenRavines, !0, !1, aq, 100, Eq),
+                   const MC = new QC.h(FC.ravineYPerturbNoiseParams, `${CC}yRavinePerturb${nC}`),
+                     gC = `${CC}RavineGen${nC}`,
+                     SC = new qC.d("caveRav", FC.numChunksBetweenRavines, !0, !1, gC, 100, zC),
```

#### 453. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7837` → after: `L7338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7338) · [Before (L7837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7837)

```diff
-                   console.assert(dq.chunkSearchRadius <= Aq.numChunksBetweenRavines / 2, `Cannot have overlapping cave features (ravines), ${dq.chunkSearchRadius} ${Aq.numChunksBetweenRavines/2}`);
+                   console.assert(pC.chunkSearchRadius <= FC.numChunksBetweenRavines / 2, `Cannot have overlapping cave features (ravines), ${pC.chunkSearchRadius} ${FC.numChunksBetweenRavines/2}`);
```

#### 454. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7842` → after: `L7343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7343) · [Before (L7842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7842)

```diff
-                     Qq = new cq.r(-1, 1);
+                     xC = new fC.q(-1, 1);
```

#### 455. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7884` → after: `L7385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7385) · [Before (L7884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7884)

```diff
-                     Bq = new Yq.g(Aq.sphereXZPerturbNoiseParams, `${qq}DistSpherePerturb${xq}`);
+                     WC = new QC.h(FC.sphereXZPerturbNoiseParams, `${CC}DistSpherePerturb${nC}`);
```

#### 456. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7887-L7888` → after: `L7388-L7389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7388-L7389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7388-L7389) · [Before (L7887-L7888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7887-L7888)

```diff
-                   const Nq = `${qq}SphereGen${xq}`,
-                     aq = new lq.c("caveSph", Aq.numChunksBetweenSpheres, !0, !1, Nq, 100, Eq),
+                   const MC = `${CC}SphereGen${nC}`,
+                     gC = new qC.d("caveSph", FC.numChunksBetweenSpheres, !0, !1, MC, 100, zC),
```

#### 457. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7890` → after: `L7391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7391) · [Before (L7890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7890)

```diff
-                   console.assert(Vq.chunkSearchRadius <= Aq.numChunksBetweenSpheres / 2, `Cannot have overlapping cave features (spheres), ${Vq.chunkSearchRadius} ${Aq.numChunksBetweenSpheres/2}`);
+                   console.assert(SC.chunkSearchRadius <= FC.numChunksBetweenSpheres / 2, `Cannot have overlapping cave features (spheres), ${SC.chunkSearchRadius} ${FC.numChunksBetweenSpheres/2}`);
```

#### 458. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7927` → after: `L7428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7428) · [Before (L7927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7927)

```diff
-             const Yq = [(0, Aq.x)(qq), (0, Aq.x)(Eq)],
+             const QC = [(0, wC.v)(CC), (0, wC.v)(zC)],
```

#### 459. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7945` → after: `L7446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7446) · [Before (L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7945)

```diff
-                   Aq = new cq.k(`pit${mq}|${xq}|${lq}${this.seed}`),
+                   qC = new fC.j(`pit${nC}|${oC}|${wC}${this.seed}`),
```

#### 460. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7955` → after: `L7456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7456) · [Before (L7955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7955)

```diff
-                   oq = null !== (gq = null === (Yq = Oq.pitCeilingThicknessDistribution) || void 0 === Yq ? void 0 : Yq.sample(Aq)) && void 0 !== gq ? gq : 0;
+                   RC = null !== (ZC = null === (QC = bC.pitCeilingThicknessDistribution) || void 0 === QC ? void 0 : QC.sample(qC)) && void 0 !== ZC ? ZC : 0;
```

#### 461. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7988` → after: `L7489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7489) · [Before (L7988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7988)

```diff
-                   xq = new cq.k(`rav${Oq}|${mq}|${gq}${this.seed}`),
+                   oC = new fC.j(`rav${bC}|${nC}|${ZC}${this.seed}`),
```

#### 462. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7994` → after: `L7495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7495) · [Before (L7994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7994)

```diff
-                 (0, Yq.A)(Nq);
+                 (0, QC.E)(MC);
```

#### 463. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8017-L8038` → after: `L7518-L8042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR7518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L7518-L8042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L7518-L8042) · [Before (L8017-L8038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8017-L8038)

```diff
-           buildSphereCaveMetadataForChunk(qq) {
-             const Eq = [];
-             for (let gq = 0; gq < this.sphereCaveMetadata.length; gq++) {
-               const Yq = this.sphereCaveMetadata[gq],
-                 lq = Yq.spherePointGenerator.getSurroundingFeatures(qq[0], qq[1]);
-               for (const qq of lq) {
-                 const lq = qq[0],
-                   Oq = qq[1],
-                   mq = new cq.k(`sph${lq}|${Oq}|${gq}${this.seed}`),
-                   xq = Yq.sphereRadiusDistribution.sample(mq),
-                   Aq = xq * xq,
-                   uq = Yq.sphereCentreYDistribution.sample(mq),
-                   Bq = xq + Math.SQRT2 * Yq.sphereXZPerturbNoiseGenerator.maxMagnitude();
-                 Eq.push({
-                   caveType: Yq.caveType,
-                   sphereRadiusSquared: Aq,
- ... (6 more removed lines; see GitHub link above)
+           buildSphereCaveMetadataForChunk(CC) {
+             const zC = [];
+             for (let ZC = 0; ZC < this.sphereCaveMetadata.length; ZC++) {
+               const QC = this.sphereCaveMetadata[ZC],
+                 wC = QC.spherePointGenerator.getSurroundingFeatures(CC[0], CC[1]);
+               for (const CC of wC) {
+                 const wC = CC[0],
+                   bC = CC[1],
+                   nC = new fC.j(`sph${wC}|${bC}|${ZC}${this.seed}`),
+                   oC = QC.sphereRadiusDistribution.sample(nC),
+                   qC = oC * oC,
+                   FC = QC.sphereCentreYDistribution.sample(nC),
+                   WC = oC + Math.SQRT2 * QC.sphereXZPerturbNoiseGenerator.maxMagnitude();
+                 zC.push({
+                   caveType: QC.caveType,
+                   sphereRadiusSquared: qC,
+ ... (509 more added lines; see GitHub link above)
```

#### 464. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8044-L8045` → after: `L8056-L8070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8056-L8070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8056-L8070) · [Before (L8044-L8045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8044-L8045)

```diff
-         var Qq = gq(571),
-           yq = gq(39085);
+       },
+       39613: (CC, zC, ZC) => {
+         ZC.r(zC), ZC.d(zC, {
+           WorldGenerator: () => Uz
+         });
+         var QC = ZC(39489),
+           wC = ZC(39535),
+           bC = ZC(39503),
+           nC = ZC(39498),
+           fC = ZC(37555),
+           oC = ZC(39606),
+           qC = ZC(574),
+           FC = ZC(600),
+           WC = ZC(38974),
+           NC = ZC(4189);
```

#### 465. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8060` → after: `L8085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8085) · [Before (L8060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8060)

```diff
-             return null !== (Eq = vq[this.suffixMapping[qq]]) && void 0 !== Eq ? Eq : []
+             return null !== (zC = SC[this.suffixMapping[CC]]) && void 0 !== zC ? zC : []
```

#### 466. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8079` → after: `L8104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8104) · [Before (L8079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8079)

```diff
-               Eq[gq] = (null !== (mq = Eq[gq]) && void 0 !== mq ? mq : 0) + 1, Eq[gq] >= nq && Yq.splice(Yq.indexOf(gq), 1)
+               zC[ZC] = (null !== (nC = zC[ZC]) && void 0 !== nC ? nC : 0) + 1, zC[ZC] >= PC && QC.splice(QC.indexOf(ZC), 1)
```

#### 467. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8146` → after: `L8171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8171) · [Before (L8146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8146)

```diff
-             return `r${qq}|m${Number(Eq)}`
+             return `r${CC}|m${Number(zC)}`
```

#### 468. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8180` → after: `L8205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8205) · [Before (L8180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8180)

```diff
-             const [, Nq, aq] = null !== (lq = fq.exec(Bq)) && void 0 !== lq ? lq : [];
+             const [, MC, gC] = null !== (wC = xC.exec(WC)) && void 0 !== wC ? wC : [];
```

#### 469. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8183` → after: `L8208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8208) · [Before (L8183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8183)

```diff
-               Wq = null !== (Vq = null === (dq = Oq[`${uq}|meta|${[Zq.split("").filter(((qq,Eq)=>Nq.split("").some((qq=>{const gq=Zq.indexOf(qq);return((Yq?3-gq:gq)+mq)%4===Eq})))).join(""),aq].filter(Boolean).join("|")}`]) || void 0 === dq ? void 0 : dq.id) && void 0 !== Vq ? Vq … [truncated]
+               NC = null !== (SC = null === (pC = bC[`${FC}|meta|${[AC.split("").filter(((CC,zC)=>MC.split("").some((CC=>{const ZC=AC.indexOf(CC);return((QC?3-ZC:ZC)+nC)%4===zC})))).join(""),gC].filter(Boolean).join("|")}`]) || void 0 === pC ? void 0 : pC.id) && void 0 !== SC ? SC … [truncated]
```

#### 470. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8188` → after: `L8213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8213) · [Before (L8188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8188)

```diff
-               let Eq = Bq.replace(`rot${cq}`, `rot${qq}`);
+               let zC = WC.replace(`rot${qC}`, `rot${CC}`);
```

#### 471. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8193` → after: `L8218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8218) · [Before (L8193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8193)

```diff
-                 Eq = `${lq[1]}|${qq.join("")}`
+                 zC = `${wC[1]}|${CC.join("")}`
```

#### 472. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8195-L8196` → after: `L8220-L8221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8220-L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8220-L8221) · [Before (L8195-L8196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8195-L8196)

```diff
-               const mq = `${uq}|${Eq}`;
-               if (Wq = null !== (jq = null === (Hq = Oq[mq]) || void 0 === Hq ? void 0 : Hq.id) && void 0 !== jq ? jq : null, null === Wq) {
+               const nC = `${FC}|${zC}`;
+               if (NC = null !== (PC = null === (GC = bC[nC]) || void 0 === GC ? void 0 : GC.id) && void 0 !== PC ? PC : null, null === NC) {
```

#### 473. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8204` → after: `L8229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8229) · [Before (L8204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8204)

```diff
-         var zq = gq(2760),
+         var iC = ZC(2823),
```

#### 474. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8206` → after: `L8231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8231) · [Before (L8206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8206)

```diff
-           pq = gq(61272);
+           eC = ZC(39505);
```

#### 475. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8211` → after: `L8236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8236) · [Before (L8211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8211)

```diff
-             const Aq = gq.getOrGenerate(qq, Eq, xq, Oq.c.FloorY);
+             const oC = ZC.getOrGenerate(CC, zC, fC, bC.b.FloorY);
```

#### 476. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8213` → after: `L8238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8238) · [Before (L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8213)

```diff
-             Jq(lq, Aq, gq.getOrGenerate(qq, Eq, xq, Oq.c.CeilingY))
+             YC(wC, oC, ZC.getOrGenerate(CC, zC, fC, bC.b.CeilingY))
```

#### 477. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8266` → after: `L8291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8291) · [Before (L8266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8266)

```diff
-             const Eq = `${sq.sample(qq)} ${this.mobType}`;
+             const zC = `${lC.sample(CC)} ${this.mobType}`;
```

#### 478. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8287` → after: `L8312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8312) · [Before (L8287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8287)

```diff
-                   Yq = null !== (gq = Eq.itemAttributesDistribution) && void 0 !== gq ? gq : null;
+                   QC = null !== (ZC = zC.itemAttributesDistribution) && void 0 !== ZC ? ZC : null;
```

#### 479. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8303` → after: `L8328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8328) · [Before (L8303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8303)

```diff
-             this.itemCategoryDistributions = Eq, this.shouldEnchantDistribution = new cq.d(qq.enchantmentProbability), this.enchantmentTier = qq.enchantmentTier
+             this.itemCategoryDistributions = zC, this.shouldEnchantDistribution = new NC.c(CC.enchantmentProbability), this.enchantmentTier = CC.enchantmentTier
```

#### 480. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8314-L8316` → after: `L8339-L8341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8339-L8341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8339-L8341) · [Before (L8314-L8316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8314-L8316)

```diff
-                   Wq = null !== (Yq = null === (lq = cq.amountDistribution) || void 0 === lq ? void 0 : lq.sample(qq)) && void 0 !== Yq ? Yq : null,
-                   Nq = null !== (Oq = null === (mq = cq.attributesDistribution) || void 0 === mq ? void 0 : mq.sample(qq)) && void 0 !== Oq ? Oq : {},
-                   aq = null !== (xq = this.getEnchantmentAttributesForItem(qq, Bq)) && void 0 !== xq ? xq : {};
+                   NC = null !== (QC = null === (wC = FC.amountDistribution) || void 0 === wC ? void 0 : wC.sample(CC)) && void 0 !== QC ? QC : null,
+                   MC = null !== (bC = null === (nC = FC.attributesDistribution) || void 0 === nC ? void 0 : nC.sample(CC)) && void 0 !== bC ? bC : {},
+                   gC = null !== (fC = this.getEnchantmentAttributesForItem(CC, WC)) && void 0 !== fC ? fC : {};
```

#### 481. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8323` → after: `L8348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8348) · [Before (L8323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8323)

```diff
-                       ...null !== (uq = Nq.customAttributes) && void 0 !== uq ? uq : {},
+                       ...null !== (oC = MC.customAttributes) && void 0 !== oC ? oC : {},
```

#### 482. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8617` → after: `L8642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8642) · [Before (L8617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8617)

```diff
-             name: `${qq} Pickaxe`,
+             name: `${CC} Pickaxe`,
```

#### 483. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8621` → after: `L8646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8646) · [Before (L8621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8621)

```diff
-             name: `${qq} Axe`,
+             name: `${CC} Axe`,
```

#### 484. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8625` → after: `L8650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8650) · [Before (L8625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8625)

```diff
-             name: `${qq} Spade`,
+             name: `${CC} Spade`,
```

#### 485. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8629` → after: `L8654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8654) · [Before (L8629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8629)

```diff
-             name: `${qq} Hoe`,
+             name: `${CC} Hoe`,
```

#### 486. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8636` → after: `L8661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8661) · [Before (L8636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8636)

```diff
-           if (Eq < 0 || Eq > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${Eq}`);
+           if (zC < 0 || zC > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${zC}`);
```

#### 487. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8660` → after: `L8685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8685) · [Before (L8660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8660)

```diff
-             name: `${qq} Sword`,
+             name: `${CC} Sword`,
```

#### 488. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8664` → after: `L8689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8689) · [Before (L8664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8664)

```diff
-             name: `${qq} Bow`,
+             name: `${CC} Bow`,
```

#### 489. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8668` → after: `L8693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8693) · [Before (L8668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8668)

```diff
-             name: `${qq} Crossbow`,
+             name: `${CC} Crossbow`,
```

#### 490. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8681` → after: `L8706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8706) · [Before (L8681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8681)

```diff
-           if (qq === Cq.STONE) throw new Error(`${qq} armour is not supported`);
+           if (CC === rC.STONE) throw new Error(`${CC} armour is not supported`);
```

#### 491. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8683` → after: `L8708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8708) · [Before (L8683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8683)

```diff
-               name: `${qq} Helmet`,
+               name: `${CC} Helmet`,
```

#### 492. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8687` → after: `L8712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8712) · [Before (L8687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8687)

```diff
-               name: `${qq} Chestplate`,
+               name: `${CC} Chestplate`,
```

#### 493. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8691` → after: `L8716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8716) · [Before (L8691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8691)

```diff
-               name: `${qq} Gauntlets`,
+               name: `${CC} Gauntlets`,
```

#### 494. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8695` → after: `L8720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8720) · [Before (L8695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8695)

```diff
-               name: `${qq} Leggings`,
+               name: `${CC} Leggings`,
```

#### 495. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8699` → after: `L8724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8724) · [Before (L8699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8699)

```diff
-               name: `${qq} Boots`,
+               name: `${CC} Boots`,
```

#### 496. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8956` → after: `L8981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8981) · [Before (L8956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8956)

```diff
-             const qq = new cq.k(`${this.seed}|${this.x}|${this.y}|${this.z}|lootChest`),
+             const CC = new NC.j(`${this.seed}|${this.x}|${this.y}|${this.z}|lootChest`),
```

#### 497. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8971` → after: `L8996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8996) · [Before (L8971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8971)

```diff
-             this.seed = void 0, this.Oa = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCent … [truncated]
+             this.seed = void 0, this.Ig = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCent … [truncated]
```

#### 498. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8974` → after: `L8999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8999) · [Before (L8974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8974)

```diff
-               Oa: gq,
+               Ig: ZC,
```

#### 499. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8980` → after: `L9005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9005) · [Before (L8980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8980)

```diff
-             aE.BLOCK_ID_MAPPINGS || (aE.BLOCK_ID_MAPPINGS = new Tq(Yq)), Uq || (Uq = new rq(mq)), this.seed = Eq, this.Oa = gq, this.invisibleSolidBlockId = Yq["Invisible Solid"].id, this.emptySpawnerBlockId = Yq["Empty Spawner Block"].id, this.chestToLootChestBlockId = new Qq.e( … [truncated]
+             wz.BLOCK_ID_MAPPINGS || (wz.BLOCK_ID_MAPPINGS = new IC(QC)), HC || (HC = new gC(nC)), this.seed = zC, this.Ig = ZC, this.invisibleSolidBlockId = QC["Invisible Solid"].id, this.emptySpawnerBlockId = QC["Empty Spawner Block"].id, this.chestToLootChestBlockId = new qC.e( … [truncated]
```

#### 500. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8987` → after: `L9012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9012) · [Before (L8987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8987)

```diff
-             for (const lq of Oq.q) cq[lq] = Yq[`${lq} Spawner Block`].id;
+             for (const wC of bC.j) FC[wC] = QC[`${wC} Spawner Block`].id;
```

#### 501. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9002` → after: `L9027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9027) · [Before (L9002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9002)

```diff
-                   Aq = new lq.c(`prefab|${qq}|${mq}`, xq.minDistanceBetweenPrefabs, !1, !0, Eq, Yq, gq, null, !0)
+                   oC = new wC.d(`prefab|${CC}|${nC}`, fC.minDistanceBetweenPrefabs, !1, !0, zC, QC, ZC, null, !0)
```

#### 502. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9016` → after: `L9041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9041) · [Before (L9016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9016)

```diff
-             return new cq.k(`${qq}|${Eq}|${this.seed}|prefabGenerator`)
+             return new NC.j(`${CC}|${zC}|${this.seed}|prefabGenerator`)
```

#### 503. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9045` → after: `L9070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9070) · [Before (L9045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9045)

```diff
-               cq = this.Oa >> 1,
+               qC = this.Ig >> 1,
```

#### 504. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9047` → after: `L9072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9072) · [Before (L9047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9047)

```diff
-               Bq = qq + this.Oa + this.prefabRadius,
+               NC = CC + this.Ig + this.prefabRadius,
```

#### 505. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9049` → after: `L9074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9074) · [Before (L9049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9049)

```diff
-               Nq = Eq + this.Oa + this.prefabRadius;
+               gC = zC + this.Ig + this.prefabRadius;
```

#### 506. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9057` → after: `L9082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9082) · [Before (L9057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9057)

```diff
-                 if (Vq === Oq.o.SURFACE && jq === Oq.k.VERY_HIGH && !xq.regionMayHaveVeryHighSurfacePrefabs(uq, Wq, Bq, Nq)) continue;
+                 if (pC === bC.g.SURFACE && GC === bC.f.VERY_HIGH && !fC.regionMayHaveVeryHighSurfacePrefabs(FC, MC, NC, gC)) continue;
```

#### 507. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9067` → after: `L9092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9092) · [Before (L9067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9067)

```diff
-                   if (Vq === Oq.o.SURFACE && !cq.canPlaceSurfacePrefab(Eq, xq)) continue;
+                   if (pC === bC.g.SURFACE && !qC.canPlaceSurfacePrefab(zC, fC)) continue;
```

#### 508. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9086` → after: `L9111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9111) · [Before (L9086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9086)

```diff
-                       console.error(`Invalid prefab rotation: ${Hq}`)
+                       console.error(`Invalid prefab rotation: ${RC}`)
```

#### 509. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9103` → after: `L9128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9128) · [Before (L9103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9103)

```diff
-                   if (Vq === Oq.o.SURFACE && null !== cq.maxSurfacePrefabRelief) {
+                   if (pC === bC.g.SURFACE && null !== qC.maxSurfacePrefabRelief) {
```

#### 510. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9110` → after: `L9135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9135) · [Before (L9110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9110)

```diff
-                   const bq = new yq.e;
+                   const KC = new WC.b;
```
