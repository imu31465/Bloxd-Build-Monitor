# Changed — Bundle Modifications Report (Part 051 / 104)

- **Updated at**: `2026-11-24T00:51 JST`
- **Part**: `51 / 104` (**406** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 050](part-050.md) · [Part 052 →](part-052.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/90.js` (3lwmg.ecbaa066 → w4ddu.56408518 · continued)

- **File**: `bundles/bloxd.io/chunks/js/90.js` (930 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20)

#### 273. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6441-L6443` → after: `L6441-L6443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6441-L6443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6441-L6443) · [Before (L6441-L6443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6441-L6443)

```diff
-       firstFreeAt(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         return Math.min(...kk.map((kk => this.freeAt(kk, ek))))
+       firstFreeAt(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         return Math.min(...CC.map((CC => this.freeAt(CC, zC))))
```

#### 274. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6448-L6450` → after: `L6448-L6450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6448-L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6448-L6450) · [Before (L6448-L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6448-L6450)

```diff
-       recent(kk, ek) {
-         var ik;
-         return (null !== (ik = this.calls.get(kk)) && void 0 !== ik ? ik : []).filter((kk => ek - kk < SS))
+       recent(CC, zC) {
+         var ZC;
+         return (null !== (ZC = this.calls.get(CC)) && void 0 !== ZC ? ZC : []).filter((CC => zC - CC < zb))
```

#### 275. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6454-L6455` → after: `L6454-L6455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6454-L6455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6454-L6455) · [Before (L6454-L6455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6454-L6455)

```diff
-     function rS(kk) {
-       return kk > 36e5
+     function Qb(CC) {
+       return CC > 36e5
```

#### 276. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6458-L6461` → after: `L6458-L6461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6458-L6461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6458-L6461) · [Before (L6458-L6461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6458-L6461)

```diff
-     function PS(kk, ek) {
-       var ik;
-       const Dk = null === (ik = kk.headers.get(ek)) || void 0 === ik ? void 0 : ik.trim();
-       return void 0 !== Dk && /^\d+$/.test(Dk) ? Number(Dk) : null
+     function wb(CC, zC) {
+       var ZC;
+       const QC = null === (ZC = CC.headers.get(zC)) || void 0 === ZC ? void 0 : ZC.trim();
+       return void 0 !== QC && /^\d+$/.test(QC) ? Number(QC) : null
```

#### 277. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6464-L6467` → after: `L6464-L6467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6464-L6467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6464-L6467) · [Before (L6464-L6467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6464-L6467)

```diff
-     function mS(kk) {
-       var ek;
-       const ik = null !== (ek = PS(kk, "retry-after")) && void 0 !== ek ? ek : PS(kk, "ratelimit-reset");
-       return null === ik ? null : 1e3 * ik
+     function bb(CC) {
+       var zC;
+       const ZC = null !== (zC = wb(CC, "retry-after")) && void 0 !== zC ? zC : wb(CC, "ratelimit-reset");
+       return null === ZC ? null : 1e3 * ZC
```

#### 278. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6470-L6473` → after: `L6470-L6473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6470-L6473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6470-L6473) · [Before (L6470-L6473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6470-L6473)

```diff
-     function MS(kk, ek) {
-       var ik;
-       const Dk = null !== (ik = mS(ek)) && void 0 !== ik ? ik : 0;
-       (429 === ek.status || rS(Dk) && 0 === PS(ek, "ratelimit-remaining")) && bS.markFull(kk, Date.now(), Dk)
+     function nb(CC, zC) {
+       var ZC;
+       const QC = null !== (ZC = bb(zC)) && void 0 !== ZC ? ZC : 0;
+       (429 === zC.status || Qb(QC) && 0 === wb(zC, "ratelimit-remaining")) && Zb.markFull(CC, Date.now(), QC)
```

#### 279. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6476-L6479` → after: `L6476-L6479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6476-L6479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6476-L6479) · [Before (L6476-L6479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6476-L6479)

```diff
-     function KS(kk) {
-       const ek = Date.now(),
-         ik = bS.freeAt(kk, ek) - ek;
-       return ik <= 0 ? null : rS(ik) ? "unavailable" : "busy"
+     function fb(CC) {
+       const zC = Date.now(),
+         ZC = Zb.freeAt(CC, zC) - zC;
+       return ZC <= 0 ? null : Qb(ZC) ? "unavailable" : "busy"
```

#### 280. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6482-L6483` → after: `L6482-L6483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6482-L6483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6482-L6483) · [Before (L6482-L6483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6482-L6483)

```diff
-     function xS(kk, ek) {
-       return `${function(kk){var ek;if("string"===typeof kk)return kk;if(429!==kk.status)return`http-${kk.status}`;if(rS(null!==(ek=mS(kk))&&void 0!==ek?ek:0))return"yearly-limit";const ik=PS(kk,"retry-after");return null===ik?"busy":`busy-ra${ik}`}(ek)}__${kk.replace(/[^A-Za-z0- … [truncated]
+     function ob(CC, zC) {
+       return `${function(CC){var zC;if("string"===typeof CC)return CC;if(429!==CC.status)return`http-${CC.status}`;if(Qb(null!==(zC=bb(CC))&&void 0!==zC?zC:0))return"yearly-limit";const ZC=wb(CC,"retry-after");return null===ZC?"busy":`busy-ra${ZC}`}(zC)}__${CC.replace(/[^A-Za-z0- … [truncated]
```

#### 281. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6485-L6487` → after: `L6485-L6487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6485-L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6485-L6487) · [Before (L6485-L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6485-L6487)

```diff
-     const nS = new class {
-         constructor(kk) {
-           this.loadReporter = kk, this.reportedCodes = new Set
+     const qb = new class {
+         constructor(CC) {
+           this.loadReporter = CC, this.reportedCodes = new Set
```

#### 282. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6489-L6491` → after: `L6489-L6491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6489-L6491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6489-L6491) · [Before (L6489-L6491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6489-L6491)

```diff
-         CU(kk, ek) {
-           const ik = xS(kk, ek);
-           "undefined" === typeof window || this.reportedCodes.has(ik) || this.reportedCodes.size >= 2 || (this.reportedCodes.add(ik), this.loadReporter().then((ek => {
+         Cg(CC, zC) {
+           const ZC = ob(CC, zC);
+           "undefined" === typeof window || this.reportedCodes.has(ZC) || this.reportedCodes.size >= 2 || (this.reportedCodes.add(ZC), this.loadReporter().then((zC => {
```

#### 283. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6493-L6497` → after: `L6493-L6497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6493-L6497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6493-L6497) · [Before (L6493-L6497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6493-L6497)

```diff
-               reportCappedWasmFailure: Dk
-             } = ek;
-             Dk("ai_helper_failed", `World Code AI: ${kk} failed`, ik)
-           })).catch((kk => {
-             console.error("World Code AI: couldn't report a failure", kk)
+               reportCappedWasmFailure: QC
+             } = zC;
+             QC("ai_helper_failed", `World Code AI: ${CC} failed`, ZC)
+           })).catch((CC => {
+             console.error("World Code AI: couldn't report a failure", CC)
```

#### 284. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6500-L6512` → after: `L6500-L6512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6500-L6512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6500-L6512) · [Before (L6500-L6512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6500-L6512)

```diff
-       }((() => ik.e(212).then((() => ik(35829))))),
-       US = /\n{3,}/,
-       HS = /<tool_call\b|<function=/;
- 
-     function wS(kk) {
-       const ek = kk.trimStart(),
-         ik = US.exec(ek),
-         Dk = HS.exec(ek);
-       if (null === ik || null !== Dk && Dk.index < ik.index) return null;
-       const fk = ek.slice(ik.index + ik[0].length);
-       return "" === fk.trim() ? null : fk
-     }
-     const lS = [{
+       }((() => ZC.e(209).then((() => ZC(36167))))),
+       Fb = /\n{3,}/,
+       Wb = /<tool_call\b|<function=/;
+ 
+     function Nb(CC) {
+       const zC = CC.trimStart(),
+         ZC = Fb.exec(zC),
+         QC = Wb.exec(zC);
+       if (null === ZC || null !== QC && QC.index < ZC.index) return null;
+       const wC = zC.slice(ZC.index + ZC[0].length);
+       return "" === wC.trim() ? null : wC
+     }
+     const Mb = [{
```

#### 285. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6531` → after: `L6531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6531) · [Before (L6531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6531)

```diff
-     const pS = {
+     const gb = {
```

#### 286. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6538-L6539` → after: `L6538-L6539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6538-L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6538-L6539) · [Before (L6538-L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6538-L6539)

```diff
-     function yS(kk) {
-       return [...lS, pS].find((ek => ek.name === kk))
+     function Sb(CC) {
+       return [...Mb, gb].find((zC => zC.name === CC))
```

#### 287. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6542-L6544` → after: `L6542-L6544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6542-L6544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6542-L6544) · [Before (L6542-L6544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6542-L6544)

```diff
-     function YS(kk) {
-       var ek, ik;
-       return null !== (ek = null === (ik = yS(kk)) || void 0 === ik ? void 0 : ik.callFormat) && void 0 !== ek ? ek : "simple"
+     function pb(CC) {
+       var zC, ZC;
+       return null !== (zC = null === (ZC = Sb(CC)) || void 0 === ZC ? void 0 : ZC.callFormat) && void 0 !== zC ? zC : "simple"
```

#### 288. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6547-L6548` → after: `L6547-L6548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6547-L6548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6547-L6548) · [Before (L6547-L6548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6547-L6548)

```diff
-     function LS(kk) {
-       var ek;
+     function Pb(CC) {
+       var zC;
```

#### 289. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6550-L6551` → after: `L6550-L6551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6550-L6551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6550-L6551) · [Before (L6550-L6551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6550-L6551)

```diff
-         format: null !== (ek = kk.callFormat) && void 0 !== ek ? ek : "simple",
-         nativeTools: !0 === kk.nativeTools
+         format: null !== (zC = CC.callFormat) && void 0 !== zC ? zC : "simple",
+         nativeTools: !0 === CC.nativeTools
```

#### 290. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6555-L6556` → after: `L6555-L6556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6555-L6556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6555-L6556) · [Before (L6555-L6556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6555-L6556)

```diff
-     function CS(kk, ek) {
-       return "function" === typeof kk ? kk(ek) : kk
+     function Gb(CC, zC) {
+       return "function" === typeof CC ? CC(zC) : CC
```

#### 291. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6558-L6564` → after: `L6558-L6564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6558-L6564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6558-L6564) · [Before (L6558-L6564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6558-L6564)

```diff
-     const AS = "TOO_COMPLEX",
-       jS = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${AS} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an  … [truncated]
-       sS = 24e4,
-       dS = ["tooLarge", "busy", "timeout", "turnedAway", "failed", "unavailable"];
-     class VS extends Error {
-       constructor(kk) {
-         super(`World Code AI ${kk}`), this.reason = kk
+     const Rb = "TOO_COMPLEX",
+       Ab = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${Rb} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an  … [truncated]
+       xb = 24e4,
+       Jb = ["tooLarge", "busy", "timeout", "turnedAway", "failed", "unavailable"];
+     class Ib extends Error {
+       constructor(CC) {
+         super(`World Code AI ${CC}`), this.reason = CC
```

#### 292. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6568-L6569` → after: `L6568-L6569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6568-L6569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6568-L6569) · [Before (L6568-L6569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6568-L6569)

```diff
-     function FS(kk) {
-       switch (kk) {
+     function ib(CC) {
+       switch (CC) {
```

#### 293. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6584-L6586` → after: `L6584-L6586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6584-L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6584-L6586) · [Before (L6584-L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6584-L6586)

```diff
-     function uS(kk, ek) {
-       var ik, Dk, fk, Sk, bk;
-       const rk = kk[null !== (ik = ek.index) && void 0 !== ik ? ik : 0] ??= {
+     function vb(CC, zC) {
+       var ZC, QC, wC, bC, nC;
+       const fC = CC[null !== (ZC = zC.index) && void 0 !== ZC ? ZC : 0] ??= {
```

#### 294. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6590` → after: `L6590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6590) · [Before (L6590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6590)

```diff
-       rk.name += null !== (Dk = null === (fk = ek.function) || void 0 === fk ? void 0 : fk.name) && void 0 !== Dk ? Dk : "", rk.args += null !== (Sk = null === (bk = ek.function) || void 0 === bk ? void 0 : bk.arguments) && void 0 !== Sk ? Sk : ""
+       fC.name += null !== (QC = null === (wC = zC.function) || void 0 === wC ? void 0 : wC.name) && void 0 !== QC ? QC : "", fC.args += null !== (bC = null === (nC = zC.function) || void 0 === nC ? void 0 : nC.arguments) && void 0 !== bC ? bC : ""
```

#### 295. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6593-L6594` → after: `L6593-L6594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6593-L6594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6593-L6594) · [Before (L6593-L6594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6593-L6594)

```diff
-     function qS(kk) {
-       return "mcp" === kk ? "simple" : kk
+     function eb(CC) {
+       return "mcp" === CC ? "simple" : CC
```

#### 296. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6597-L6599` → after: `L6597-L6599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6597-L6599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6597-L6599) · [Before (L6597-L6599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6597-L6599)

```diff
-     function IS(kk, ek, ik, Dk) {
-       let fk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-       return zS(kk, ek, ik, qS(Dk), fk).answer
+     function hb(CC, zC, ZC, QC) {
+       let wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+       return Kb(CC, zC, ZC, eb(QC), wC).answer
```

#### 297. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6602-L6605` → after: `L6602-L6605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6602-L6605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6602-L6605) · [Before (L6602-L6605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6602-L6605)

```diff
-     function zS(kk, ek, ik, Dk, fk) {
-       const Sk = ik.flatMap((kk => {
-         const ek = Ki(kk.name, kk.args);
-         return null === ek ? [] : [ff(ii(Dk), ek.name, ek.args)]
+     function Kb(CC, zC, ZC, QC, wC) {
+       const bC = ZC.flatMap((CC => {
+         const zC = FZ(CC.name, CC.args);
+         return null === zC ? [] : [Cw(zZ(QC), zC.name, zC.args)]
```

#### 298. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6607-L6614` → after: `L6607-L6614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6607-L6614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6607-L6614) · [Before (L6607-L6614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6607-L6614)

```diff
-       let bk = !1;
-       return 0 !== Sk.length || 0 !== ni(kk, Dk).length || kk.includes("```") || (Sk.push(...fk ? [] : function(kk, ek) {
-         let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-         const Dk = new Map;
-         for (const rk of xi(kk, ek)) {
-           const kk = Object.values(rk.args).some((kk => void 0 !== kk && ik.includes(kk.trim())));
-           var fk, Sk, bk;
-           "export_game" === rk.name || "switch_to_world_code" === rk.name || Ae(rk.name) || kk || Dk.set(`${rk.name} ${null!==(fk=rk.args.path)&&void 0!==fk?fk:""} ${null!==(Sk=rk.args.search)&&void 0!==Sk?Sk:""} ${null!==(bk=rk.args.name)&&void 0!==bk?bk:""}`, rk.source)
+       let nC = !1;
+       return 0 !== bC.length || 0 !== NZ(CC, QC).length || CC.includes("```") || (bC.push(...wC ? [] : function(CC, zC) {
+         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+         const QC = new Map;
+         for (const fC of WZ(CC, zC)) {
+           const CC = Object.values(fC.args).some((CC => void 0 !== CC && ZC.includes(CC.trim())));
+           var wC, bC, nC;
+           "export_game" === fC.name || "switch_to_world_code" === fC.name || Jz(fC.name) || CC || QC.set(`${fC.name} ${null!==(wC=fC.args.path)&&void 0!==wC?wC:""} ${null!==(bC=fC.args.search)&&void 0!==bC?bC:""} ${null!==(nC=fC.args.name)&&void 0!==nC?nC:""}`, fC.source)
```

#### 299. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6616-L6619` → after: `L6616-L6619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6616-L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6616-L6619) · [Before (L6616-L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6616-L6619)

```diff
-         return [...new Set(Dk.values())]
-       }(ek, Dk, Uf)), bk = Sk.length > 0), {
-         answer: [kk, ...Sk].join("\n\n").trim(),
-         hasCallsFromReasoning: bk
+         return [...new Set(QC.values())]
+       }(zC, QC, Fw)), nC = bC.length > 0), {
+         answer: [CC, ...bC].join("\n\n").trim(),
+         hasCallsFromReasoning: nC
```

#### 300. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6622-L6625` → after: `L6622-L6625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6622-L6625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6622-L6625) · [Before (L6622-L6625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6622-L6625)

```diff
-     async function QS(kk, ek) {
-       const ik = kk.getReader(),
-         Dk = new TextDecoder;
-       let fk = "";
+     async function Yb(CC, zC) {
+       const ZC = CC.getReader(),
+         QC = new TextDecoder;
+       let wC = "";
```

#### 301. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6628-L6632` → after: `L6628-L6632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6628-L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6628-L6632) · [Before (L6628-L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6628-L6632)

```diff
-           done: kk,
-           value: Sk
-         } = await ik.read();
-         if (kk) break;
-         fk += Dk.decode(Sk, {
+           done: CC,
+           value: bC
+         } = await ZC.read();
+         if (CC) break;
+         wC += QC.decode(bC, {
```

#### 302. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6635-L6641` → after: `L6635-L6641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6635-L6641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6635-L6641) · [Before (L6635-L6641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6635-L6641)

```diff
-         let bk = fk.indexOf("\n");
-         for (; - 1 !== bk;) {
-           const kk = fk.slice(0, bk).trim();
-           if (fk = fk.slice(bk + 1), bk = fk.indexOf("\n"), !kk.startsWith("data:")) continue;
-           const ik = kk.slice(5).trim();
-           if ("[DONE]" === ik) return;
-           let Dk;
+         let nC = wC.indexOf("\n");
+         for (; - 1 !== nC;) {
+           const CC = wC.slice(0, nC).trim();
+           if (wC = wC.slice(nC + 1), nC = wC.indexOf("\n"), !CC.startsWith("data:")) continue;
+           const ZC = CC.slice(5).trim();
+           if ("[DONE]" === ZC) return;
+           let QC;
```

#### 303. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6643` → after: `L6643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6643) · [Before (L6643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6643)

```diff
-             Dk = JSON.parse(ik)
+             QC = JSON.parse(ZC)
```

#### 304. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6647` → after: `L6647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6647) · [Before (L6647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6647)

```diff
-           ek(Dk)
+           zC(QC)
```

#### 305. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6652-L6653` → after: `L6652-L6653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6652-L6653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6652-L6653) · [Before (L6652-L6653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6652-L6653)

```diff
-     function vS(kk) {
-       return kk.map((kk => ({
+     function db(CC) {
+       return CC.map((CC => ({
```

#### 306. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6656-L6658` → after: `L6656-L6658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6656-L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6656-L6658) · [Before (L6656-L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6656-L6658)

```diff
-           name: kk.name,
-           description: kk.description,
-           parameters: kk.inputSchema
+           name: CC.name,
+           description: CC.description,
+           parameters: CC.inputSchema
```

#### 307. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6663-L6664` → after: `L6663-L6664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6663-L6664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6663-L6664) · [Before (L6663-L6664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6663-L6664)

```diff
-     function ES(kk) {
-       return "object" === typeof kk
+     function mb(CC) {
+       return "object" === typeof CC
```

#### 308. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6666-L6671` → after: `L6666-L6671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6666-L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6666-L6671) · [Before (L6666-L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6666-L6671)

```diff
-     async function hS(kk, ek, ik, Dk) {
-       let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
-       const Sk = KS(kk.name);
-       if (null !== Sk) return Sk;
-       bS.record(kk.name);
-       const bk = await fetch(vf, {
+     async function Hb(CC, zC, ZC, QC) {
+       let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
+       const bC = fb(CC.name);
+       if (null !== bC) return bC;
+       Zb.record(CC.name);
+       const nC = await fetch(dw, {
```

#### 309. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6677-L6678` → after: `L6677-L6678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6677-L6678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6677-L6678) · [Before (L6677-L6678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6677-L6678)

```diff
-           model: kk.name,
-           messages: ek,
+           model: CC.name,
+           messages: zC,
```

#### 310. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6680-L6681` → after: `L6680-L6681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6680-L6681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6680-L6681) · [Before (L6680-L6681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6680-L6681)

```diff
-           temperature: kk.temperature,
-           reasoning_effort: kk.reasoningEffort,
+           temperature: CC.temperature,
+           reasoning_effort: CC.reasoningEffort,
```

#### 311. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6686-L6687` → after: `L6686-L6687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6686-L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6686-L6687) · [Before (L6686-L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6686-L6687)

```diff
-           ...kk.nativeTools && fk.length > 0 ? {
-             tools: vS(fk)
+           ...CC.nativeTools && wC.length > 0 ? {
+             tools: db(wC)
```

#### 312. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6692` → after: `L6692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6692) · [Before (L6692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6692)

```diff
-         signal: ik
+         signal: ZC
```

#### 313. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6694-L6702` → after: `L6694-L6702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6694-L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6694-L6702) · [Before (L6694-L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6694-L6702)

```diff
-       if (MS(kk.name, bk), 429 === bk.status) return nS.CU(kk.name, bk), "unavailable" === KS(kk.name) ? "unavailable" : "busy";
-       if (!bk.ok || !bk.body) return console.warn(`World Code AI: ${kk.name} answered ${bk.status}`), nS.CU(kk.name, bk.ok ? "empty" : bk), bk.ok ? "failed" : 429 === (rk = bk.status) ? "busy" : 400 === rk || 413 === rk ? "tooLarge" : 401 === rk || 403 === rk ? "turnedAway" : "fa … [truncated]
-       var rk;
-       let Pk = "",
-         mk = "";
-       const Mk = [];
-       let Kk = !1,
-         xk = !1,
-         nk = null;
+       if (nb(CC.name, nC), 429 === nC.status) return qb.Cg(CC.name, nC), "unavailable" === fb(CC.name) ? "unavailable" : "busy";
+       if (!nC.ok || !nC.body) return console.warn(`World Code AI: ${CC.name} answered ${nC.status}`), qb.Cg(CC.name, nC.ok ? "empty" : nC), nC.ok ? "failed" : 429 === (fC = nC.status) ? "busy" : 400 === fC || 413 === fC ? "tooLarge" : 401 === fC || 403 === fC ? "turnedAway" : "fa … [truncated]
+       var fC;
+       let oC = "",
+         qC = "";
+       const FC = [];
+       let WC = !1,
+         NC = !1,
+         MC = null;
```

#### 314. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6704-L6710` → after: `L6704-L6710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6704-L6710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6704-L6710) · [Before (L6704-L6710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6704-L6710)

```diff
-         await async function(kk, ek, ik) {
-           await QS(kk, (kk => {
-             var Dk;
-             const fk = kk,
-               Sk = null === (Dk = fk.choices) || void 0 === Dk ? void 0 : Dk[0];
-             var bk, rk;
-             Sk && ek(null !== (bk = Sk.delta) && void 0 !== bk ? bk : {}, null !== (rk = Sk.finish_reason) && void 0 !== rk ? rk : null), fk.usage && (null === ik || void 0 === ik || ik(fk.usage))
+         await async function(CC, zC, ZC) {
+           await Yb(CC, (CC => {
+             var QC;
+             const wC = CC,
+               bC = null === (QC = wC.choices) || void 0 === QC ? void 0 : QC[0];
+             var nC, fC;
+             bC && zC(null !== (nC = bC.delta) && void 0 !== nC ? nC : {}, null !== (fC = bC.finish_reason) && void 0 !== fC ? fC : null), wC.usage && (null === ZC || void 0 === ZC || ZC(wC.usage))
```

#### 315. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6712-L6717` → after: `L6712-L6717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6712-L6717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6712-L6717) · [Before (L6712-L6717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6712-L6717)

```diff
-         }(bk.body, ((ek, ik) => {
-           var fk, Sk, bk, rk;
-           Kk ||= "length" === ik, mk += null !== (fk = null !== (Sk = ek.reasoning) && void 0 !== Sk ? Sk : ek.reasoning_content) && void 0 !== fk ? fk : "", Pk += null !== (bk = ek.content) && void 0 !== bk ? bk : "";
-           for (const kk of null !== (nk = ek.tool_calls) && void 0 !== nk ? nk : []) {
-             var nk;
-             xk ||= "" !== mk && "" === Pk.trim(), uS(Mk, kk)
+         }(nC.body, ((zC, ZC) => {
+           var wC, bC, nC, fC;
+           WC ||= "length" === ZC, qC += null !== (wC = null !== (bC = zC.reasoning) && void 0 !== bC ? bC : zC.reasoning_content) && void 0 !== wC ? wC : "", oC += null !== (nC = zC.content) && void 0 !== nC ? nC : "";
+           for (const CC of null !== (MC = zC.tool_calls) && void 0 !== MC ? MC : []) {
+             var MC;
+             NC ||= "" !== qC && "" === oC.trim(), vb(FC, CC)
```

#### 316. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6719-L6724` → after: `L6719-L6724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6719-L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6719-L6724) · [Before (L6719-L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6719-L6724)

```diff
-           const Uk = kk.nativeTools && xk ? null !== (rk = wS(Pk)) && void 0 !== rk ? rk : "" : Pk;
-           null === Dk || void 0 === Dk || Dk({
-             model: kk.name,
-             reasoningChars: mk.length,
-             answer: Uk,
-             isCalling: Mk.length > 0
+           const gC = CC.nativeTools && NC ? null !== (fC = Nb(oC)) && void 0 !== fC ? fC : "" : oC;
+           null === QC || void 0 === QC || QC({
+             model: CC.name,
+             reasoningChars: qC.length,
+             answer: gC,
+             isCalling: FC.length > 0
```

#### 317. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6726-L6727` → after: `L6726-L6727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6726-L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6726-L6727) · [Before (L6726-L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6726-L6727)

```diff
-         }), (kk => {
-           nk = kk
+         }), (CC => {
+           MC = CC
```

#### 318. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6730` → after: `L6730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6730) · [Before (L6730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6730)

```diff
-         DS(nk, ek, Pk + mk, 20 * Mk.length)
+         Vw(MC, zC, oC + qC, 20 * FC.length)
```

#### 319. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6732-L6733` → after: `L6732-L6733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6732-L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6732-L6733) · [Before (L6732-L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6732-L6733)

```diff
-       const Uk = aS(kk, Pk, mk, Mk, Kk, xk);
-       return null === Uk ? (nS.CU(kk.name, "empty"), "failed") : Uk
+       const gC = Eb(CC, oC, qC, FC, WC, NC);
+       return null === gC ? (qb.Cg(CC.name, "empty"), "failed") : gC
```

#### 320. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6736-L6749` → after: `L6736-L6749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6736-L6749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6736-L6749) · [Before (L6736-L6749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6736-L6749)

```diff
-     function aS(kk, ek, ik, Dk, fk) {
-       var Sk;
-       let bk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         rk = ek;
-       var Pk;
-       kk.nativeTools && bk && (rk = null !== (Pk = wS(rk)) && void 0 !== Pk ? Pk : rk);
-       rk = rk.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
-       const mk = zS(rk, ik, Dk, null !== (Sk = kk.callFormat) && void 0 !== Sk ? Sk : "simple", fk);
-       return "" === mk.answer ? null : {
-         model: kk.name,
-         answer: mk.answer,
-         reasoning: ik,
-         isCutShort: fk,
-         hasCallsFromReasoning: mk.hasCallsFromReasoning
+     function Eb(CC, zC, ZC, QC, wC) {
+       var bC;
+       let nC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         fC = zC;
+       var oC;
+       CC.nativeTools && nC && (fC = null !== (oC = Nb(fC)) && void 0 !== oC ? oC : fC);
+       fC = fC.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
+       const qC = Kb(fC, ZC, QC, null !== (bC = CC.callFormat) && void 0 !== bC ? bC : "simple", wC);
+       return "" === qC.answer ? null : {
+         model: CC.name,
+         answer: qC.answer,
+         reasoning: ZC,
+         isCutShort: wC,
+         hasCallsFromReasoning: qC.hasCallsFromReasoning
```

#### 321. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6753-L6754` → after: `L6753-L6754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6753-L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6753-L6754) · [Before (L6753-L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6753-L6754)

```diff
-     function WS(kk) {
-       return kk.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
+     function lb(CC) {
+       return CC.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
```

#### 322. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6757-L6758` → after: `L6757-L6758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6757-L6758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6757-L6758) · [Before (L6757-L6758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6757-L6758)

```diff
-     function tS(kk) {
-       return ES(kk) && !kk.isCutShort
+     function Xb(CC) {
+       return mb(CC) && !CC.isCutShort
```

#### 323. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6760-L6763` → after: `L6760-L6763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6760-L6763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6760-L6763) · [Before (L6760-L6763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6760-L6763)

```diff
-     async function XS(kk, ek, ik, Dk, fk) {
-       const Sk = kk.map((() => new AbortController)),
-         bk = () => {
-           for (const kk of Sk) kk.abort()
+     async function cb(CC, zC, ZC, QC, wC) {
+       const bC = CC.map((() => new AbortController)),
+         nC = () => {
+           for (const CC of bC) CC.abort()
```

#### 324. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6765` → after: `L6765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6765) · [Before (L6765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6765)

```diff
-       null !== ik && void 0 !== ik && ik.aborted && bk(), null === ik || void 0 === ik || ik.addEventListener("abort", bk, {
+       null !== ZC && void 0 !== ZC && ZC.aborted && nC(), null === ZC || void 0 === ZC || ZC.addEventListener("abort", nC, {
```

#### 325. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6768-L6782` → after: `L6768-L6782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6768-L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6768-L6782) · [Before (L6768-L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6768-L6782)

```diff
-       const rk = kk.map((() => {})),
-         Pk = kk.map((() => {}));
-       let mk = null;
-       const Mk = kk => void 0 !== kk && ("" !== WS(kk.answer).trim() || !0 === kk.isCalling);
-       let Kk = () => {};
-       kk.forEach(((kk, ik) => {
-         const bk = (0, pk.e)(sS, Sk[ik].signal);
-         hS(kk, CS(ek, kk), bk.signal, (kk => {
-           Pk[ik] = kk, null === mk && Mk(kk) && (mk = ik), mk === ik && (null === Dk || void 0 === Dk || Dk(kk))
-         }), fk).catch((ek => {
-           if (Sk[ik].signal.aborted) return "failed";
-           const Dk = bk.signal.aborted;
-           return console.warn(`World Code AI: ${kk.name} ${Dk?"took longer than 240 s":"couldn't be reached"}`, ek), nS.CU(kk.name, Dk ? "timeout" : "network"), Dk ? "timeout" : "failed"
-         })).then((kk => {
-           bk.clear(), rk[ik] = kk, mk !== ik || tS(kk) || (mk = null), Kk()
+       const fC = CC.map((() => {})),
+         oC = CC.map((() => {}));
+       let qC = null;
+       const FC = CC => void 0 !== CC && ("" !== lb(CC.answer).trim() || !0 === CC.isCalling);
+       let WC = () => {};
+       CC.forEach(((CC, ZC) => {
+         const nC = (0, GC.e)(xb, bC[ZC].signal);
+         Hb(CC, Gb(zC, CC), nC.signal, (CC => {
+           oC[ZC] = CC, null === qC && FC(CC) && (qC = ZC), qC === ZC && (null === QC || void 0 === QC || QC(CC))
+         }), wC).catch((zC => {
+           if (bC[ZC].signal.aborted) return "failed";
+           const QC = nC.signal.aborted;
+           return console.warn(`World Code AI: ${CC.name} ${QC?"took longer than 240 s":"couldn't be reached"}`, zC), qb.Cg(CC.name, QC ? "timeout" : "network"), QC ? "timeout" : "failed"
+         })).then((CC => {
+           nC.clear(), fC[ZC] = CC, qC !== ZC || Xb(CC) || (qC = null), WC()
```

#### 326. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6785-L6790` → after: `L6785-L6790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6785-L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6785-L6790) · [Before (L6785-L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6785-L6790)

```diff
-       const xk = () => {
-         var kk;
-         if (null !== mk) {
-           const kk = rk[mk];
-           return tS(kk) ? {
-             reply: kk
+       const NC = () => {
+         var CC;
+         if (null !== qC) {
+           const CC = fC[qC];
+           return Xb(CC) ? {
+             reply: CC
```

#### 327. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6793-L6795` → after: `L6793-L6795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6793-L6795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6793-L6795) · [Before (L6793-L6795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6793-L6795)

```diff
-         const ek = rk.find(tS);
-         if (ek) return {
-           reply: ek
+         const zC = fC.find(Xb);
+         if (zC) return {
+           reply: zC
```

#### 328. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6797-L6798` → after: `L6797-L6798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6797-L6798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6797-L6798) · [Before (L6797-L6798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6797-L6798)

```diff
-         if (!rk.includes(void 0)) return {
-           reply: null !== (kk = rk.find(ES)) && void 0 !== kk ? kk : null
+         if (!fC.includes(void 0)) return {
+           reply: null !== (CC = fC.find(mb)) && void 0 !== CC ? CC : null
```

#### 329. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6801-L6805` → after: `L6801-L6805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6801-L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6801-L6805) · [Before (L6801-L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6801-L6805)

```diff
-           const kk = rk.findIndex(((kk, ek) => void 0 === kk && Mk(Pk[ek])));
-           if (-1 !== kk) {
-             mk = kk;
-             const ek = Pk[kk];
-             ek && (null === Dk || void 0 === Dk || Dk(ek))
+           const CC = fC.findIndex(((CC, zC) => void 0 === CC && FC(oC[zC])));
+           if (-1 !== CC) {
+             qC = CC;
+             const zC = oC[CC];
+             zC && (null === QC || void 0 === QC || QC(zC))
```

#### 330. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6811-L6814` → after: `L6811-L6814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6811-L6814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6811-L6814) · [Before (L6811-L6814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6811-L6814)

```diff
-           if (null !== ik && void 0 !== ik && ik.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
-           const kk = xk();
-           if (kk) {
-             const ek = rk.filter((kk => "string" === typeof kk));
+           if (null !== ZC && void 0 !== ZC && ZC.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
+           const CC = NC();
+           if (CC) {
+             const zC = fC.filter((CC => "string" === typeof CC));
```

#### 331. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6816-L6817` → after: `L6816-L6817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6816-L6817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6816-L6817) · [Before (L6816-L6817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6816-L6817)

```diff
-               reply: kk.reply,
-               failures: ek
+               reply: CC.reply,
+               failures: zC
```

#### 332. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6820-L6821` → after: `L6820-L6821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6820-L6821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6820-L6821) · [Before (L6820-L6821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6820-L6821)

```diff
-           await new Promise((kk => {
-             Kk = kk
+           await new Promise((CC => {
+             WC = CC
```

#### 333. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6825-L6844` → after: `L6825-L6844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6825-L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6825-L6844) · [Before (L6825-L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6825-L6844)

```diff
-         null === ik || void 0 === ik || ik.removeEventListener("abort", bk), bk()
-       }
-     }
- 
-     function BS() {
-       let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
-       const ek = bS.firstFreeAt(lS.map((kk => kk.name)), kk);
-       return rS(ek - kk) ? kk : ek
-     }
-     async function cS(kk) {
-       var ek;
-       let ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const Dk = Date.now(),
-         fk = null !== (ek = ik.models) && void 0 !== ek ? ek : lS,
-         Sk = void 0 === ik.models ? function(kk, ek) {
-           let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
- ... (4 more removed lines; see GitHub link above)
+         null === ZC || void 0 === ZC || ZC.removeEventListener("abort", nC), nC()
+       }
+     }
+ 
+     function ub() {
+       let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
+       const zC = Zb.firstFreeAt(Mb.map((CC => CC.name)), CC);
+       return Qb(zC - CC) ? CC : zC
+     }
+     async function rb(CC) {
+       var zC;
+       let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const QC = Date.now(),
+         wC = null !== (zC = ZC.models) && void 0 !== zC ? zC : Mb,
+         bC = void 0 === ZC.models ? function(CC, zC) {
+           let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
+ ... (4 more added lines; see GitHub link above)
```

#### 334. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6846-L6848` → after: `L6846-L6848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6846-L6848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6846-L6848) · [Before (L6846-L6848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6846-L6848)

```diff
-                 model: ek
-               } = kk;
-               return ek
+                 model: zC
+               } = CC;
+               return zC
```

#### 335. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6850-L6861` → after: `L6850-L6861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6850-L6861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6850-L6861) · [Before (L6850-L6861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6850-L6861)

```diff
-             fk = [...Dk.filter((kk => ek(kk))), ...Dk.filter((kk => !ek(kk)))],
-             Sk = [];
-           for (let bk = 0; bk < fk.length; bk += 2) Sk.push(fk.slice(bk, bk + 2));
-           return Sk
-         }(fk, (kk => bS.freeAt(kk.name) <= Dk)) : fk.map((kk => [kk])),
-         bk = [];
-       for (const Pk of Sk) {
-         const ek = await XS(Pk, kk, ik.signal, ik.onProgress, ik.tools);
-         if (null !== ek.reply) {
-           const fk = Pk.find((kk => {
-             var ik;
-             return kk.name === (null === (ik = ek.reply) || void 0 === ik ? void 0 : ik.model)
+             wC = [...QC.filter((CC => zC(CC))), ...QC.filter((CC => !zC(CC)))],
+             bC = [];
+           for (let nC = 0; nC < wC.length; nC += 2) bC.push(wC.slice(nC, nC + 2));
+           return bC
+         }(wC, (CC => Zb.freeAt(CC.name) <= QC)) : wC.map((CC => [CC])),
+         nC = [];
+       for (const oC of bC) {
+         const zC = await cb(oC, CC, ZC.signal, ZC.onProgress, ZC.tools);
+         if (null !== zC.reply) {
+           const wC = oC.find((CC => {
+             var ZC;
+             return CC.name === (null === (ZC = zC.reply) || void 0 === ZC ? void 0 : ZC.model)
```

#### 336. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6864-L6865` → after: `L6864-L6865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6864-L6865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6864-L6865) · [Before (L6864-L6865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6864-L6865)

```diff
-             ...fk && !1 !== ik.canNudge ? await ZS(fk, CS(kk, fk), ek.reply, ik.signal, ik.onProgress, ik.tools) : ek.reply,
-             ms: Date.now() - Dk
+             ...wC && !1 !== ZC.canNudge ? await ab(wC, Gb(CC, wC), zC.reply, ZC.signal, ZC.onProgress, ZC.tools) : zC.reply,
+             ms: Date.now() - QC
```

#### 337. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6868` → after: `L6868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6868) · [Before (L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6868)

```diff
-         bk.push(...ek.failures)
+         nC.push(...zC.failures)
```

#### 338. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6870-L6871` → after: `L6870-L6871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6870-L6871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6870-L6871) · [Before (L6870-L6871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6870-L6871)

```diff
-       const rk = dS.find((kk => bk.includes(kk)));
-       throw new VS(null !== rk && void 0 !== rk ? rk : "failed")
+       const fC = Jb.find((CC => nC.includes(CC)));
+       throw new Ib(null !== fC && void 0 !== fC ? fC : "failed")
```

#### 339. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6873` → after: `L6873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6873) · [Before (L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6873)

```diff
-     const TS = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";
+     const sb = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";
```

#### 340. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6875-L6877` → after: `L6875-L6877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6875-L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6875-L6877) · [Before (L6875-L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6875-L6877)

```diff
-     function oS(kk) {
-       const ek = kk.trim();
-       return ek.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(ek) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(ek) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
+     function Tb(CC) {
+       const zC = CC.trim();
+       return zC.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(zC) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(zC) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
```

#### 341. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6884` → after: `L6884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6884) · [Before (L6884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6884)

```diff
-         }(ik, null !== (bk = kk.callFormat) && void 0 !== bk ? bk : "simple")) return ik;
+         }(ZC, null !== (nC = CC.callFormat) && void 0 !== nC ? nC : "simple")) return ZC;
```

#### 342. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6895` → after: `L6895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6895) · [Before (L6895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6895)

```diff
-         return ES(ek) && "" !== ek.answer.trim() ? ek : ik
+         return mb(zC) && "" !== zC.answer.trim() ? zC : ZC
```

#### 343. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6898` → after: `L6898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6898) · [Before (L6898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6898)

```diff
-         return nS.CU(kk.name, mk.signal.aborted ? "timeout" : "network"), ik
+         return qb.Cg(CC.name, qC.signal.aborted ? "timeout" : "network"), ZC
```

#### 344. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6951-L6952` → after: `L6951-L6952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6951-L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6951-L6952) · [Before (L6951-L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6951-L6952)

```diff
-         if (MS(kk, ik), 429 === ik.status) return nS.CU(kk, ik), "busy";
-         if (!ik.ok) return nS.CU(kk, ik), null;
+         if (nb(CC, ZC), 429 === ZC.status) return qb.Cg(CC, ZC), "busy";
+         if (!ZC.ok) return qb.Cg(CC, ZC), null;
```

#### 345. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6954` → after: `L6954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6954) · [Before (L6954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6954)

```diff
-           mk = String(null !== (fk = null === (Sk = Pk.choices) || void 0 === Sk || null === (bk = Sk[0]) || void 0 === bk || null === (rk = bk.message) || void 0 === rk ? void 0 : rk.content) && void 0 !== fk ? fk : "");
+           qC = String(null !== (wC = null === (bC = oC.choices) || void 0 === bC || null === (nC = bC[0]) || void 0 === nC || null === (fC = nC.message) || void 0 === fC ? void 0 : fC.content) && void 0 !== wC ? wC : "");
```

#### 346. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6958` → after: `L6958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6958) · [Before (L6958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6958)

```diff
-           }(mk) ? mk : null
+           }(qC) ? qC : null
```

#### 347. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6961` → after: `L6961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6961) · [Before (L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6961)

```diff
-         return nS.CU(kk, Dk.signal.aborted ? "timeout" : "network"), null
+         return qb.Cg(CC, QC.signal.aborted ? "timeout" : "network"), null
```

#### 348. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6970-L6971` → after: `L6970-L6971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6970-L6971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6970-L6971) · [Before (L6970-L6971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6970-L6971)

```diff
-       const kk = JS.f.getItem(kb);
-       return null !== kk && "object" === typeof kk ? kk : {}
+       const CC = Ub.i.getItem(Bb);
+       return null !== CC && "object" === typeof CC ? CC : {}
```

#### 349. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6981` → after: `L6981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6981) · [Before (L6981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6981)

```diff
-         return null === this.player ? null : null !== (kk = null !== (ek = this.unsaved.get(this.player)) && void 0 !== ek ? ek : eb()[this.player]) && void 0 !== kk ? kk : null
+         return null === this.player ? null : null !== (CC = null !== (zC = this.unsaved.get(this.player)) && void 0 !== zC ? zC : Ob()[this.player]) && void 0 !== CC ? CC : null
```

#### 350. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6992-L6993` → after: `L6992-L6993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6992-L6993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6992-L6993) · [Before (L6992-L6993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6992-L6993)

```diff
-           } = await Promise.resolve().then((() => ik(1104)));
-           return null !== (kk = null === (ek = Dk.peekCurrentUserContext()) || void 0 === ek ? void 0 : ek.whamm) && void 0 !== kk ? kk : null
+           } = await Promise.resolve().then((() => ZC(1078)));
+           return null !== (CC = null === (zC = QC.peekCurrentUserContext()) || void 0 === zC ? void 0 : zC.whamm) && void 0 !== CC ? CC : null
```

#### 351. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6998` → after: `L6998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L6998) · [Before (L6998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L6998)

```diff
-         null !== this.player && (JS.f.setItem(kb, {
+         null !== this.player && (Ub.i.setItem(Bb, {
```

#### 352. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7021` → after: `L7021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7021) · [Before (L7021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7021)

```diff
-       const ik = `\n[... ${kk.length-ek} more characters cut]`;
+       const ZC = `\n[... ${CC.length-zC} more characters cut]`;
```

#### 353. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7026-L7027` → after: `L7026-L7027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7026-L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7026-L7027) · [Before (L7026-L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7026-L7027)

```diff
-     var Mb = ik(600),
-       Kb = ik(4340);
+     var nn = ZC(603),
+       fn = ZC(4315);
```

#### 354. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7049` → after: `L7049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7049) · [Before (L7049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7049)

```diff
-         clientVersion: String(Mb.c),
+         clientVersion: String(nn.e),
```

#### 355. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7064` → after: `L7064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7064) · [Before (L7064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7064)

```diff
-         this.CU = kk, this.chatId = (0, Kb.d)(12), this.open = new Map
+         this.Cg = CC, this.chatId = (0, fn.d)(12), this.open = new Map
```

#### 356. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7068` → after: `L7068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7068) · [Before (L7068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7068)

```diff
-         ik && (clearTimeout(ik.timer), ek || (this.open.delete(kk), this.send(ik.CU)))
+         ZC && (clearTimeout(ZC.timer), zC || (this.open.delete(CC), this.send(ZC.Cg)))
```

#### 357. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7073` → after: `L7073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7073) · [Before (L7073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7073)

```diff
-         if (Dk) return void(Dk.CU.responses.length < rb && Dk.CU.responses.push(Ub(ik)));
+         if (QC) return void(QC.Cg.responses.length < Qn && QC.Cg.responses.push(Wn(ZC)));
```

#### 358. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7076` → after: `L7076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7076) · [Before (L7076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7076)

```diff
-           CU: fk
+           Cg: wC
```

#### 359. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7086` → after: `L7086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7086) · [Before (L7086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7086)

```diff
-           this.open.delete(kk), this.send(ek.CU)
+           this.open.delete(CC), this.send(zC.Cg)
```

#### 360. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7092` → after: `L7092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7092) · [Before (L7092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7092)

```diff
-         })(kk) && this.CU(kk)
+         })(CC) && this.Cg(CC)
```

#### 361. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7107` → after: `L7107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7107) · [Before (L7107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7107)

```diff
-             CU: ek
+             Cg: zC
```

#### 362. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7118` → after: `L7118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7118) · [Before (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7118)

```diff
-       "yes" === kk && ik.length > 0 && Lb(ik.map((kk => kk.CU)))
+       "yes" === CC && ZC.length > 0 && Gn(ZC.map((CC => CC.Cg)))
```

#### 363. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7121` → after: `L7121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7121) · [Before (L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7121)

```diff
-       const ek = Promise.resolve().then((() => ik(41041)));
+       const zC = Promise.resolve().then((() => ZC(41278)));
```

#### 364. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7131-L7132` → after: `L7131-L7132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7131-L7132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7131-L7132) · [Before (L7131-L7132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7131-L7132)

```diff
-     var Cb = ik(314),
-       Ab = ik(165);
+     var Rn = ZC(326),
+       An = ZC(134);
```

#### 365. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7189` → after: `L7189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7189) · [Before (L7189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7189)

```diff
-       return "https:" !== ek.protocol && ("http:" !== ek.protocol || !ik) || ek.username || ek.password || ek.search ? null : `${ek.origin}${ek.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
+       return "https:" !== zC.protocol && ("http:" !== zC.protocol || !ZC) || zC.username || zC.password || zC.search ? null : `${zC.origin}${zC.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
```

#### 366. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7198` → after: `L7198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7198) · [Before (L7198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7198)

```diff
-         super(`AI key request: ${kk}`), this.problem = kk, this.retryAfterMs = ek, this.status = ik, this.detail = Dk
+         super(`AI key request: ${CC}`), this.problem = CC, this.retryAfterMs = zC, this.status = ZC, this.detail = QC
```

#### 367. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7203` → after: `L7203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7203) · [Before (L7203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7203)

```diff
-       return ("" === ek ? kk : kk.split(ek).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
+       return ("" === zC ? CC : CC.split(zC).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
```

#### 368. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7210` → after: `L7210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7210) · [Before (L7210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7210)

```diff
-           return `${ik} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
+           return `${ZC} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
```

#### 369. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7214` → after: `L7214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7214) · [Before (L7214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7214)

```diff
-           return `${ik} can't find that model. Check its name.`;
+           return `${ZC} can't find that model. Check its name.`;
```

#### 370. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7216` → after: `L7216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7216) · [Before (L7216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7216)

```diff
-           return "anthropic" === ek ? "Claude didn't accept your key: check it, or make a new one." : "custom" === ek ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollam … [truncated]
+           return "anthropic" === zC ? "Claude didn't accept your key: check it, or make a new one." : "custom" === zC ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollam … [truncated]
```

#### 371. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7218` → after: `L7218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7218) · [Before (L7218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7218)

```diff
-           return "custom" === ek ? "That server stopped your key for now: it has used all it can." : `${ik} stopped your key for now: it has used all it can. Check it on ${ik}'s website.`;
+           return "custom" === zC ? "That server stopped your key for now: it has used all it can." : `${ZC} stopped your key for now: it has used all it can. Check it on ${ZC}'s website.`;
```

#### 372. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7220` → after: `L7220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7220) · [Before (L7220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7220)

```diff
-           return `${ik} doesn't work from where you are.`;
+           return `${ZC} doesn't work from where you are.`;
```

#### 373. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7224` → after: `L7224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7224) · [Before (L7224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7224)

```diff
-           return `${ik} had a problem with that. Try again in a minute.`
+           return `${ZC} had a problem with that. Try again in a minute.`
```

#### 374. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7250` → after: `L7250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7250) · [Before (L7250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7250)

```diff
-         }(ek)) throw new Error(`AI key request to an unknown host for ${kk}`);
+         }(zC)) throw new Error(`AI key request to an unknown host for ${CC}`);
```

#### 375. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7259` → after: `L7259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7259) · [Before (L7259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7259)

```diff
-         throw console.warn(`AI key request: ${kk} answered ${fk.status}`), new Ib(function(kk, ek, ik) {
+         throw console.warn(`AI key request: ${CC} answered ${wC.status}`), new Yn(function(CC, zC, ZC) {
```

#### 376. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7266` → after: `L7266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7266) · [Before (L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7266)

```diff
-           return Number.isFinite(ik) ? 1e3 * ik : Math.max(0, Date.parse(ek) - Date.now()) || void 0
+           return Number.isFinite(ZC) ? 1e3 * ZC : Math.max(0, Date.parse(zC) - Date.now()) || void 0
```

#### 377. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7273` → after: `L7273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7273) · [Before (L7273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7273)

```diff
-             ik = "string" === typeof fk ? fk : kk
+             ZC = "string" === typeof wC ? wC : CC
```

#### 378. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7322` → after: `L7322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7322) · [Before (L7322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7322)

```diff
-         Nik: bk,
+         wQC: nC,
```

#### 379. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7330` → after: `L7330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7330) · [Before (L7330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7330)

```diff
-         const bk = null !== (ik = null === (Dk = kk.match(/```/g)) || void 0 === Dk ? void 0 : Dk.length) && void 0 !== ik ? ik : 0,
+         const nC = null !== (ZC = null === (QC = CC.match(/```/g)) || void 0 === QC ? void 0 : QC.length) && void 0 !== ZC ? ZC : 0,
```

#### 380. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7343` → after: `L7343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7343) · [Before (L7343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7343)

```diff
-         written: rk ? Kk : void 0,
+         written: fC ? WC : void 0,
```

#### 381. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7355` → after: `L7355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7355) · [Before (L7355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7355)

```diff
-       const Dk = null !== (ik = ek.tools) && void 0 !== ik ? ik : [];
+       const QC = null !== (ZC = zC.tools) && void 0 !== ZC ? ZC : [];
```

#### 382. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7406` → after: `L7406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7406) · [Before (L7406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7406)

```diff
-             models: (null !== (ek = (await ik.json()).data) && void 0 !== ek ? ek : []).map((kk => ({
+             models: (null !== (zC = (await ZC.json()).data) && void 0 !== zC ? zC : []).map((CC => ({
```

#### 383. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7433` → after: `L7433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7433) · [Before (L7433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7433)

```diff
-           return await QS(null !== (fk = Sk.body) && void 0 !== fk ? fk : new ReadableStream, (ek => {
+           return await Yb(null !== (wC = bC.body) && void 0 !== wC ? wC : new ReadableStream, (zC => {
```

#### 384. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7438-L7439` → after: `L7438-L7439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7438-L7439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7438-L7439) · [Before (L7438-L7439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7438-L7439)

```diff
-             rk += null !== (fk = null !== (Sk = null === lk || void 0 === lk || null === (Kk = lk.delta) || void 0 === Kk ? void 0 : Kk.reasoning) && void 0 !== Sk ? Sk : null === lk || void 0 === lk || null === (xk = lk.delta) || void 0 === xk ? void 0 : xk.reasoning_content) && … [truncated]
-             for (const kk of null !== (pk = null === lk || void 0 === lk || null === (yk = lk.delta) || void 0 === yk ? void 0 : yk.tool_calls) && void 0 !== pk ? pk : []) {
+             fC += null !== (wC = null !== (bC = null === PC || void 0 === PC || null === (WC = PC.delta) || void 0 === WC ? void 0 : WC.reasoning) && void 0 !== bC ? bC : null === PC || void 0 === PC || null === (NC = PC.delta) || void 0 === NC ? void 0 : NC.reasoning_content) && … [truncated]
+             for (const CC of null !== (GC = null === PC || void 0 === PC || null === (RC = PC.delta) || void 0 === RC ? void 0 : RC.tool_calls) && void 0 !== GC ? GC : []) {
```

#### 385. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7452` → after: `L7452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7452) · [Before (L7452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7452)

```diff
-             Nik: Pk,
+             wQC: oC,
```

#### 386. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7472` → after: `L7472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7472) · [Before (L7472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7472)

```diff
-         return await tb(Eb, kk, (async kk => Wb("openrouter", `${jb.openrouter.baseUrl}/key`, {
+         return await rn(En, CC, (async CC => un("openrouter", `${xn.openrouter.baseUrl}/key`, {
```

#### 387. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7493` → after: `L7493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7493) · [Before (L7493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7493)

```diff
-             models: (null !== (ek = (await ik.json()).data) && void 0 !== ek ? ek : []).map((kk => ({
+             models: (null !== (zC = (await ZC.json()).data) && void 0 !== zC ? zC : []).map((CC => ({
```

#### 388. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7526` → after: `L7526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7526) · [Before (L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7526)

```diff
-           await QS(null !== (Sk = bk.body) && void 0 !== Sk ? Sk : new ReadableStream, (ek => {
+           await Yb(null !== (bC = nC.body) && void 0 !== bC ? bC : new ReadableStream, (zC => {
```

#### 389. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7531-L7532` → after: `L7531-L7532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7531-L7532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7531-L7532) · [Before (L7531-L7532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7531-L7532)

```diff
-             if ("content_block_start" === Sk.type && "tool_use" === (null === (Dk = Sk.content_block) || void 0 === Dk ? void 0 : Dk.type)) Kk.set(null !== (nk = Sk.index) && void 0 !== nk ? nk : Kk.size, {
-               name: null !== (Uk = Sk.content_block.name) && void 0 !== Uk ? Uk : "",
+             if ("content_block_start" === bC.type && "tool_use" === (null === (QC = bC.content_block) || void 0 === QC ? void 0 : QC.type)) WC.set(null !== (MC = bC.index) && void 0 !== MC ? MC : WC.size, {
+               name: null !== (gC = bC.content_block.name) && void 0 !== gC ? gC : "",
```

#### 390. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7537-L7538` → after: `L7537-L7538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7537-L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7537-L7538) · [Before (L7537-L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7537-L7538)

```diff
-               rk += null !== (Hk = null === (wk = Sk.delta) || void 0 === wk ? void 0 : wk.text) && void 0 !== Hk ? Hk : "", Pk += null !== (lk = null === (pk = Sk.delta) || void 0 === pk ? void 0 : pk.thinking) && void 0 !== lk ? lk : "";
-               const kk = Kk.get(null !== (yk = Sk.index) && void 0 !== yk ? yk : -1);
+               fC += null !== (SC = null === (pC = bC.delta) || void 0 === pC ? void 0 : pC.text) && void 0 !== SC ? SC : "", oC += null !== (PC = null === (GC = bC.delta) || void 0 === GC ? void 0 : GC.thinking) && void 0 !== PC ? PC : "";
+               const CC = WC.get(null !== (RC = bC.index) && void 0 !== RC ? RC : -1);
```

#### 391. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7540` → after: `L7540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7540) · [Before (L7540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7540)

```diff
-               if (kk && "input_json_delta" === (null === (Yk = Sk.delta) || void 0 === Yk ? void 0 : Yk.type)) kk.args += null !== (Lk = Sk.delta.partial_json) && void 0 !== Lk ? Lk : ""
+               if (CC && "input_json_delta" === (null === (AC = bC.delta) || void 0 === AC ? void 0 : AC.type)) CC.args += null !== (xC = bC.delta.partial_json) && void 0 !== xC ? xC : ""
```

#### 392. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7556` → after: `L7556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7556) · [Before (L7556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7556)

```diff
-             Nik: mk,
+             wQC: qC,
```

#### 393. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7582` → after: `L7582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7582) · [Before (L7582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7582)

```diff
-             models: (null !== (ek = (await ik.json()).models) && void 0 !== ek ? ek : []).filter((kk => {
+             models: (null !== (zC = (await ZC.json()).models) && void 0 !== zC ? zC : []).filter((CC => {
```

#### 394. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7605` → after: `L7605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7605) · [Before (L7605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7605)

```diff
-           const bk = await Wb("gemini", `${this.baseUrl}/models/${encodeURIComponent(kk)}:streamGenerateContent?alt=sse`, {
+           const nC = await un("gemini", `${this.baseUrl}/models/${encodeURIComponent(CC)}:streamGenerateContent?alt=sse`, {
```

#### 395. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7624` → after: `L7624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7624) · [Before (L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7624)

```diff
-           return await QS(null !== (Sk = bk.body) && void 0 !== Sk ? Sk : new ReadableStream, (ek => {
+           return await Yb(null !== (bC = nC.body) && void 0 !== bC ? bC : new ReadableStream, (zC => {
```

#### 396. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7628` → after: `L7628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7628) · [Before (L7628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7628)

```diff
-             for (const kk of null !== (nk = null === xk || void 0 === xk || null === (Uk = xk.content) || void 0 === Uk ? void 0 : Uk.parts) && void 0 !== nk ? nk : []) {
+             for (const CC of null !== (MC = null === NC || void 0 === NC || null === (gC = NC.content) || void 0 === gC ? void 0 : gC.parts) && void 0 !== MC ? MC : []) {
```

#### 397. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7631-L7632` → after: `L7631-L7632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7631-L7632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7631-L7632) · [Before (L7631-L7632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7631-L7632)

```diff
-                 name: null !== (Hk = kk.functionCall.name) && void 0 !== Hk ? Hk : "",
-                 args: JSON.stringify(null !== (wk = kk.functionCall.args) && void 0 !== wk ? wk : {})
+                 name: null !== (SC = CC.functionCall.name) && void 0 !== SC ? SC : "",
+                 args: JSON.stringify(null !== (pC = CC.functionCall.args) && void 0 !== pC ? pC : {})
```

#### 398. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7636` → after: `L7636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7636) · [Before (L7636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7636)

```diff
-                 Pk += null !== (lk = kk.text) && void 0 !== lk ? lk : ""
+                 oC += null !== (PC = CC.text) && void 0 !== PC ? PC : ""
```

#### 399. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7639` → after: `L7639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7639) · [Before (L7639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7639)

```diff
-                 rk += null !== (pk = kk.text) && void 0 !== pk ? pk : ""
+                 fC += null !== (GC = CC.text) && void 0 !== GC ? GC : ""
```

#### 400. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7651` → after: `L7651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7651) · [Before (L7651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7651)

```diff
-             Nik: mk,
+             wQC: qC,
```

#### 401. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7676` → after: `L7676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7676) · [Before (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7676)

```diff
-           return new ob("custom", null !== ik && void 0 !== ik ? ik : "", ek)
+           return new Dn("custom", null !== ZC && void 0 !== ZC ? ZC : "", zC)
```

#### 402. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7804` → after: `L7804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7804) · [Before (L7804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7804)

```diff
-         name: null !== (Dk = null === fk || void 0 === fk ? void 0 : fk.name) && void 0 !== Dk ? Dk : ek,
+         name: null !== (QC = null === wC || void 0 === wC ? void 0 : wC.name) && void 0 !== QC ? QC : zC,
```

#### 403. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7828` → after: `L7828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7828) · [Before (L7828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7828)

```diff
-       return null !== (ek = kk.find((kk => "smart" === kk.tier))) && void 0 !== ek ? ek : kk[0]
+       return null !== (zC = CC.find((CC => "smart" === CC.tier))) && void 0 !== zC ? zC : CC[0]
```

#### 404. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7834` → after: `L7834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7834) · [Before (L7834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7834)

```diff
-       return null !== (ek = kk.name) && void 0 !== ek ? ek : qb(kk.provider, kk.baseUrl, ik)
+       return null !== (zC = CC.name) && void 0 !== zC ? zC : Kn(CC.provider, CC.baseUrl, ZC)
```

#### 405. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7851` → after: `L7851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7851) · [Before (L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7851)

```diff
-         return new URL(null !== (ek = kk.baseUrl) && void 0 !== ek ? ek : "").protocol.startsWith("http")
+         return new URL(null !== (zC = CC.baseUrl) && void 0 !== zC ? zC : "").protocol.startsWith("http")
```

#### 406. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7857` → after: `L7857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7857) · [Before (L7857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7857)

```diff
-     function mr(kk) {
+     function of(CC) {
```

#### 407. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7861` → after: `L7861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7861) · [Before (L7861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7861)

```diff
-         return console.warn(`AI Helper: no ${kk}`, ek), null
+         return console.warn(`AI Helper: no ${CC}`, zC), null
```

#### 408. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7873` → after: `L7873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7873) · [Before (L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7873)

```diff
-         this.state = null !== Dk && void 0 !== Dk && Dk.remember ? null !== fk && void 0 !== fk && fk.remember ? fk : {
+         this.state = null !== QC && void 0 !== QC && QC.remember ? null !== wC && void 0 !== wC && wC.remember ? wC : {
```

#### 409. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7876` → after: `L7876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7876) · [Before (L7876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7876)

```diff
-         } : null !== (ik = null !== Dk && void 0 !== Dk ? Dk : fk) && void 0 !== ik ? ik : br, this.ownsRemembered = this.state.remember && null !== fk
+         } : null !== (ZC = null !== QC && void 0 !== QC ? QC : wC) && void 0 !== ZC ? ZC : bf, this.ownsRemembered = this.state.remember && null !== wC
```

#### 410. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7893-L7894` → after: `L7893-L7894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7893-L7894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7893-L7894) · [Before (L7893-L7894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7893-L7894)

```diff
-           rk = "custom" !== kk.provider ? kk.provider : null !== (Dk = null === bk || void 0 === bk ? void 0 : bk.id) && void 0 !== Dk ? Dk : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
-           Pk = void 0 === ek ? Dr(kk.models) : null !== (fk = kk.models.find((kk => kk.id === ek))) && void 0 !== fk ? fk : kk.models[0],
+           fC = "custom" !== CC.provider ? CC.provider : null !== (QC = null === nC || void 0 === nC ? void 0 : nC.id) && void 0 !== QC ? QC : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
+           oC = void 0 === zC ? Zf(CC.models) : null !== (wC = CC.models.find((CC => CC.id === zC))) && void 0 !== wC ? wC : CC.models[0],
```

#### 411. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7909` → after: `L7909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7909) · [Before (L7909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7909)

```diff
-           nk = xk ? this.state.keys.filter((kk => kk.id !== rk)).map((kk => kk.id === ik ? Mk : kk)) : Kk ? [...this.state.keys, Mk] : this.state.keys.map((kk => kk.id === rk ? Mk : kk)),
+           MC = NC ? this.state.keys.filter((CC => CC.id !== fC)).map((CC => CC.id === ZC ? FC : CC)) : WC ? [...this.state.keys, FC] : this.state.keys.map((CC => CC.id === fC ? FC : CC)),
```

#### 412. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7928` → after: `L7928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L7928) · [Before (L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L7928)

```diff
-             return "" === ik ? fk : {
+             return "" === ZC ? wC : {
```

#### 413. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8023` → after: `L8023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8023) · [Before (L8023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8023)

```diff
-           Dk = (null !== (ek = null === ik || void 0 === ik ? void 0 : ik.keys) && void 0 !== ek ? ek : []).filter((kk => this.state.keys.every((ek => !rr(ek, kk)))));
+           QC = (null !== (zC = null === ZC || void 0 === ZC ? void 0 : ZC.keys) && void 0 !== zC ? zC : []).filter((CC => this.state.keys.every((zC => !nf(zC, CC)))));
```

#### 414. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8067` → after: `L8067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8067) · [Before (L8067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8067)

```diff
-           return Array.isArray(ek.keys) && ek.keys.every(Pr) ? ek : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
+           return Array.isArray(zC.keys) && zC.keys.every(ff) ? zC : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
```

#### 415. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8072` → after: `L8072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8072) · [Before (L8072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8072)

```diff
-     }(mr("sessionStorage"), mr("localStorage"));
+     }(of("sessionStorage"), of("localStorage"));
```

#### 416. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8109` → after: `L8109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8109) · [Before (L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8109)

```diff
-       const rk = null !== (ik = null === bk || void 0 === bk ? void 0 : bk.trim()) && void 0 !== ik ? ik : "";
+       const fC = null !== (ZC = null === nC || void 0 === nC ? void 0 : nC.trim()) && void 0 !== ZC ? ZC : "";
```

#### 417. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8123` → after: `L8123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8123) · [Before (L8123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8123)

```diff
-       kk.storageArea === mr("localStorage") && kk.key === Sr && Mr.otherTabChanged(kk.newValue)
+       CC.storageArea === of("localStorage") && CC.key === wf && qf.otherTabChanged(CC.newValue)
```

#### 418. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8139` → after: `L8139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8139) · [Before (L8139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8139)

```diff
-               return 0 !== (null !== (ik = null === (Dk = ek.tools) || void 0 === Dk ? void 0 : Dk.length) && void 0 !== ik ? ik : 0) && kk instanceof Ib && "failed" === kk.problem && (400 === kk.status || 404 === kk.status && /\btool/i.test(null !== (fk = kk.detail) && void 0 != … [truncated]
+               return 0 !== (null !== (ZC = null === (QC = zC.tools) || void 0 === QC ? void 0 : QC.length) && void 0 !== ZC ? ZC : 0) && CC instanceof Yn && "failed" === CC.problem && (400 === CC.status || 404 === CC.status && /\btool/i.test(null !== (wC = CC.detail) && void 0 != … [truncated]
```

#### 419. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8154` → after: `L8154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8154) · [Before (L8154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8154)

```diff
-         return await (Pk = Math.min(null !== (bk = null !== (rk = Kk.retryAfterMs) && void 0 !== rk ? rk : ik.retryWaitMs) && void 0 !== bk ? bk : 3e3, 2e4), mk = ik.signal, new Promise(((kk, ek) => {
+         return await (oC = Math.min(null !== (nC = null !== (fC = WC.retryAfterMs) && void 0 !== fC ? fC : ZC.retryWaitMs) && void 0 !== nC ? nC : 3e3, 2e4), qC = ZC.signal, new Promise(((CC, zC) => {
```

#### 420. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8166` → after: `L8166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8166) · [Before (L8166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8166)

```diff
-     var Ur = ik(3595);
+     var Mf = ZC(3578);
```

#### 421. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8283` → after: `L8283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8283) · [Before (L8283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8283)

```diff
-           return `Super Bot.xd opens once your account is a week old: ${Ir((null!==(ek=kk.availableFrom)&&void 0!==ek?ek:ik)-ik)} to go.`;
+           return `Super Bot.xd opens once your account is a week old: ${mf((null!==(zC=CC.availableFrom)&&void 0!==zC?zC:ZC)-ZC)} to go.`;
```

#### 422. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8285` → after: `L8285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8285) · [Before (L8285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8285)

```diff
-           return kk.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(kk,ek){const ik=Math.ceil((kk-ek)/36e5);if(ik<=24)return ik<=1?"within the hour":`in ${ik} hours`;return`in ${Ir(kk-ek)}`}(kk.resetsAt,ik)}.` : "0 usage remaining - upgrade to Supe … [truncated]
+           return CC.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(CC,zC){const ZC=Math.ceil((CC-zC)/36e5);if(ZC<=24)return ZC<=1?"within the hour":`in ${ZC} hours`;return`in ${mf(CC-zC)}`}(CC.resetsAt,ZC)}.` : "0 usage remaining - upgrade to Supe … [truncated]
```

#### 423. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8316` → after: `L8316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8316) · [Before (L8316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8316)

```diff
-       return `Usage left: ${kk.left}`
+       return `Usage left: ${CC.left}`
```

#### 424. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8320-L8321` → after: `L8320-L8321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8320-L8321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8320-L8321) · [Before (L8320-L8321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8320-L8321)

```diff
-       const ek = Math.max(1, Math.ceil(kk / Cb.g));
-       return 1 === ek ? "1 day" : `${ek} days`
+       const zC = Math.max(1, Math.ceil(CC / Rn.e));
+       return 1 === zC ? "1 day" : `${zC} days`
```

#### 425. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8326` → after: `L8326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8326) · [Before (L8326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8326)

```diff
-       if (ik) return `${ik} Bot.xd is answering instead.`;
+       if (ZC) return `${ZC} Bot.xd is answering instead.`;
```

#### 426. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8345` → after: `L8345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8345) · [Before (L8345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8345)

```diff
-           return kk.messages.length > 12 || kk.messages.some((kk => kk.content.length > Gf)) || (null !== (ek = null === (ik = kk.toolsJson) || void 0 === ik ? void 0 : ik.length) && void 0 !== ek ? ek : 0) > 1e5 || (null !== (Dk = null === (fk = kk.request) || void 0 === fk ? vo … [truncated]
+           return CC.messages.length > 12 || CC.messages.some((CC => CC.content.length > jw)) || (null !== (zC = null === (ZC = CC.toolsJson) || void 0 === ZC ? void 0 : ZC.length) && void 0 !== zC ? zC : 0) > 1e5 || (null !== (QC = null === (wC = CC.request) || void 0 === wC ? vo … [truncated]
```

#### 427. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8370-L8372` → after: `L8370-L8372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8370-L8372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8370-L8372) · [Before (L8370-L8372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8370-L8372)

```diff
-     var Er = ik(26),
-       hr = ik(22),
-       ar = ik(2239);
+     var Xf = ZC(28),
+       uf = ZC(20),
+       rf = ZC(2206);
```

#### 428. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8376` → after: `L8376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8376) · [Before (L8376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8376)

```diff
-       Wr ??= Promise.resolve().then((() => ik(2250))), Wr.then((kk => {
+       sf ??= Promise.resolve().then((() => ZC(2218))), sf.then((CC => {
```

#### 429. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8398` → after: `L8398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8398) · [Before (L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8398)

```diff
-         }] = await Promise.all([Promise.resolve().then((() => ik(1333))), ik.e(353).then((() => ik(60696)))]);
+         }] = await Promise.all([Promise.resolve().then((() => ZC(1307))), ZC.e(354).then((() => ZC(60953)))]);
```

#### 430. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8405` → after: `L8405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8405) · [Before (L8405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8405)

```diff
-                   Er.j.tm("OpenStoreFromCodeEditor"), (0, ar.m)({
+                   Xf.o.bp("OpenStoreFromCodeEditor"), (0, rf.n)({
```

#### 431. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8410-L8411` → after: `L8410-L8411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8410-L8411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8410-L8411) · [Before (L8410-L8411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8410-L8411)

```diff
-                   const kk = Er.j.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
-                     null === hr.b.get("openEverythingMenuName") && (Er.j.unsubscribe(kk), Lr.refresh())
+                   const CC = Xf.o.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
+                     null === uf.b.get("openEverythingMenuName") && (Xf.o.unsubscribe(CC), Af.refresh())
```

#### 432. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8594` → after: `L8594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8594) · [Before (L8594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8594)

```diff
-       return kk.length > 4 && kk.endsWith("ies") ? `${kk.slice(0,-3)}y` : kk.length > 3 && kk.endsWith("s") && !kk.endsWith("ss") ? kk.slice(0, -1) : kk
+       return CC.length > 4 && CC.endsWith("ies") ? `${CC.slice(0,-3)}y` : CC.length > 3 && CC.endsWith("s") && !CC.endsWith("ss") ? CC.slice(0, -1) : CC
```

#### 433. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8610` → after: `L8610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8610) · [Before (L8610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8610)

```diff
-         fk = kP(ek ? kk : (0, Ue.p)(kk, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, Ue.i, (() => "projectRequire"))),
+         wC = zo(zC ? CC : (0, Mz.v)(CC, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, Mz.n, (() => "projectRequire"))),
```

#### 434. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8613` → after: `L8613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8613) · [Before (L8613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8613)

```diff
-         for (const fk of (0, Ue.e)(kk, /(global|window|document|process|require)\b\s*[.([]/g, Ue.i)) Dk.has(fk[1]) || Sk.has(fk[1]) || (Dk.add(fk[1]), ik.push(`Line ${ek+1} uses "${fk[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
+         for (const wC of (0, Mz.f)(CC, /(global|window|document|process|require)\b\s*[.([]/g, Mz.n)) QC.has(wC[1]) || bC.has(wC[1]) || (QC.add(wC[1]), ZC.push(`Line ${zC+1} uses "${wC[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
```

#### 435. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8628` → after: `L8628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8628) · [Before (L8628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8628)

```diff
-         const nk = [null !== (Sk = ek[Dk - 2]) && void 0 !== Sk ? Sk : "", null !== (bk = ek[Dk - 1]) && void 0 !== bk ? bk : "", kk.slice(0, mk)].join(" ");
+         const MC = [null !== (bC = zC[QC - 2]) && void 0 !== bC ? bC : "", null !== (nC = zC[QC - 1]) && void 0 !== nC ? nC : "", CC.slice(0, qC)].join(" ");
```

#### 436. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8630-L8631` → after: `L8630-L8631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8630-L8631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8630-L8631) · [Before (L8630-L8631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8630-L8631)

```diff
-         const Uk = null !== (rk = null === (Pk = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(Kk)) || void 0 === Pk ? void 0 : Pk[1]) && void 0 !== rk ? rk : "coins";
-         ik.push(`Line ${Dk+1} sets the saved "${Uk}" back to ${xk} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${Uk}") is null.`)
+         const gC = null !== (fC = null === (oC = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(WC)) || void 0 === oC ? void 0 : oC[1]) && void 0 !== fC ? fC : "coins";
+         ZC.push(`Line ${QC+1} sets the saved "${gC}" back to ${NC} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${gC}") is null.`)
```

#### 437. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8637` → after: `L8637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8637) · [Before (L8637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8637)

```diff
-       const Dk = null !== (ek = null === (ik = kk.split("### Parameters:")[1]) || void 0 === ik ? void 0 : ik.split("###")[0]) && void 0 !== ek ? ek : "",
+       const QC = null !== (zC = null === (ZC = CC.split("### Parameters:")[1]) || void 0 === ZC ? void 0 : ZC.split("###")[0]) && void 0 !== zC ? zC : "",
```

#### 438. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8685-L8687` → after: `L8685-L8687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8685-L8687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8685-L8687) · [Before (L8685-L8687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8685-L8687)

```diff
-         fk = `\\((?:[^()]*[\\s,])?${Dk}(?![\\w$])[^()]*\\)`,
-         Sk = new RegExp(`(?:const|let|var)\\s+${Dk}(?![\\w$])|${Dk}\\s*(?:\\+?=(?![=>])|=>)|${fk}\\s*=>|function\\s*[\\w$]*\\s*${fk}`, "g");
-       return 1 === (0, Ue.e)(kk, Sk, Ue.i).length ? null === (ik = new RegExp(`\\b(?:const|let|var)\\s+${Dk}\\s*=\\s*${SP}\\s*(?:;|//|$)`, "m").exec(kk)) || void 0 === ik ? void 0 : ik[1] : void 0
+         wC = `\\((?:[^()]*[\\s,])?${QC}(?![\\w$])[^()]*\\)`,
+         bC = new RegExp(`(?:const|let|var)\\s+${QC}(?![\\w$])|${QC}\\s*(?:\\+?=(?![=>])|=>)|${wC}\\s*=>|function\\s*[\\w$]*\\s*${wC}`, "g");
+       return 1 === (0, Mz.f)(CC, bC, Mz.n).length ? null === (ZC = new RegExp(`\\b(?:const|let|var)\\s+${QC}\\s*=\\s*${no}\\s*(?:;|//|$)`, "m").exec(CC)) || void 0 === ZC ? void 0 : ZC[1] : void 0
```

#### 439. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8696-L8697` → after: `L8696-L8697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8696-L8697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8696-L8697) · [Before (L8696-L8697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8696-L8697)

```diff
-           Dk = -1 === ik ? ek : ek.slice(0, ik + 1);
-         return Dk.length > 110 ? `${Dk.slice(0,107)}...` : Dk
+           QC = -1 === ZC ? zC : zC.slice(0, ZC + 1);
+         return QC.length > 110 ? `${QC.slice(0,107)}...` : QC
```

#### 440. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8699` → after: `L8699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8699) · [Before (L8699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8699)

```diff
-       return Dk = "api" === kk ? `api.${ek}(${fP(ik).join(", ")})${fk?` \u2014 ${fk}`:""}` : "callback" === kk ? `${ek}(${fP(ik).join(", ")})${fk?` \u2014 ${fk}`:""}` : "clientOption" === kk ? `${ek}: ${function(kk){var ek,ik;return null!==(ek=null===(ik=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
+       return QC = "api" === CC ? `api.${zC}(${bo(ZC).join(", ")})${wC?` \u2014 ${wC}`:""}` : "callback" === CC ? `${zC}(${bo(ZC).join(", ")})${wC?` \u2014 ${wC}`:""}` : "clientOption" === CC ? `${zC}: ${function(CC){var zC,ZC;return null!==(zC=null===(ZC=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
```

#### 441. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8701` → after: `L8701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8701) · [Before (L8701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8701)

```diff
-         ek.map((kk => `"${kk}"`)).join(" or ")
+         zC.map((CC => `"${CC}"`)).join(" or ")
```

#### 442. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8703` → after: `L8703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8703) · [Before (L8703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8703)

```diff
-       The closest name is "${ek[0]}", which may be something
+       The closest name is "${zC[0]}", which may be something
```

#### 443. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8705` → after: `L8705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8705) · [Before (L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8705)

```diff
-       `}function xP(kk){return kk.split("\n").slice(1).map((kk=>kk.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((kk=>""!==kk&&!kk.startsWith("#")))}class nP{constructor(kk){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
+       `}function Mo(CC){return CC.split("\n").slice(1).map((CC=>CC.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((CC=>""!==CC&&!CC.startsWith("#")))}class go{constructor(CC){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
```

#### 444. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8709` → after: `L8709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8709) · [Before (L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8709)

```diff
-       `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();ek.push({name:ik,text:fk})}return ek}(ik))ek.push(PP(kk,Dk,fk))};ik("api",kk.apiReference),ik("callback",kk.callbacks),ik("clientOption",kk.clientOptions),ik("snippet",kk.snippets),ik("howTo",kk.howTo);const Dk=function(){const kk … [truncated]
+       `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();zC.push({name:ZC,text:wC})}return zC}(ZC))zC.push(qo(CC,QC,wC))};ZC("api",CC.apiReference),ZC("callback",CC.callbacks),ZC("clientOption",CC.clientOptions),ZC("snippet",CC.snippets),ZC("howTo",CC.howTo);const QC=function(){const CC … [truncated]
```

#### 445. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8720-L8721` → after: `L8720-L8721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8720-L8721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8720-L8721) · [Before (L8720-L8721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8720-L8721)

```diff
-       n\ nUsage: \`${kk.signature}\`\n\n\`\`\`js\n${kk.example}\n\`\`\``)),
-   ek = HD.map((kk => `## ${kk.name}\nPrefab (${kk.kind}, ${kk.category}): put in with use_prefab. ${qD(kk,!1)}`));
+       n\ nUsage: \`${CC.signature}\`\n\n\`\`\`js\n${CC.example}\n\`\`\``)),
+   zC = NQ.map((CC => `## ${CC.name}\nPrefab (${CC.kind}, ${CC.category}): put in with use_prefab. ${hQ(CC,!1)}`));
```

#### 446. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8723-L8724` → after: `L8723-L8724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8723-L8724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8723-L8724) · [Before (L8723-L8724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8723-L8724)

```diff
-     helpers: `# Ready-made functions\n\n${kk.join("\n\n")}\n`,
-     prefabs: `# Prefabs\n\n${ek.join("\n\n")}\n`
+     helpers: `# Ready-made functions\n\n${CC.join("\n\n")}\n`,
+     prefabs: `# Prefabs\n\n${zC.join("\n\n")}\n`
```

#### 447. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8732` → after: `L8732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8732) · [Before (L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8732)

```diff
-     this.wordCounts.set(kk, (null !== (fk = this.wordCounts.get(kk)) && void 0 !== fk ? fk : 0) + 1)
+     this.wordCounts.set(CC, (null !== (wC = this.wordCounts.get(CC)) && void 0 !== wC ? wC : 0) + 1)
```

#### 448. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8737` → after: `L8737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8737) · [Before (L8737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8737)

```diff
-   const Dk = null !== (ek = null === (ik = kk.split("## Mob Variations")[1]) || void 0 === ik ? void 0 : ik.split("```")[1]) && void 0 !== ek ? ek : "",
+   const QC = null !== (zC = null === (ZC = CC.split("## Mob Variations")[1]) || void 0 === ZC ? void 0 : ZC.split("```")[1]) && void 0 !== zC ? zC : "",
```

#### 449. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8760` → after: `L8760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8760) · [Before (L8760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8760)

```diff
-       return null !== (ek = kk[1]) && void 0 !== ek ? ek : kk[2]
+       return null !== (zC = CC[1]) && void 0 !== zC ? zC : CC[2]
```

#### 450. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8767` → after: `L8767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8767) · [Before (L8767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8767)

```diff
-     for (const fk of (0, Ue.e)(kk, /([\w$]+)\s*\(/g, Ue.i)) {
+     for (const wC of (0, Mz.f)(CC, /([\w$]+)\s*\(/g, Mz.n)) {
```

#### 451. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8771` → after: `L8771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8771) · [Before (L8771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8771)

```diff
-       Sk.has(bk) || Dk.has(bk) || rk || "api" !== (null === (ik = this.byName.get(bk)) || void 0 === ik ? void 0 : ik.kind) || Sk.set(bk, `Line ${ek+1} calls ${bk} without "api.", so it throws there. Did you mean api.${bk}?`)
+       bC.has(nC) || QC.has(nC) || fC || "api" !== (null === (ZC = this.byName.get(nC)) || void 0 === ZC ? void 0 : ZC.kind) || bC.set(nC, `Line ${zC+1} calls ${nC} without "api.", so it throws there. Did you mean api.${nC}?`)
```

#### 452. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8780-L8781` → after: `L8780-L8781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8780-L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8780-L8781) · [Before (L8780-L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8780-L8781)

```diff
-     const ek = this.find(kk.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((kk => "api" === kk.kind)).slice(0, 2).map((kk => `api.${kk.name}`));
-     return `api.${kk} doesn't exist.${ek.length?` Did you mean ${ek.join(" or ")}?`:""}`
+     const zC = this.find(CC.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((CC => "api" === CC.kind)).slice(0, 2).map((CC => `api.${CC.name}`));
+     return `api.${CC} doesn't exist.${zC.length?` Did you mean ${zC.join(" or ")}?`:""}`
```

#### 453. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8801` → after: `L8801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8801) · [Before (L8801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8801)

```diff
-         xk = Kk ? null === (Pk = new RegExp(`(?:^|[{,])\\s*${Kk.replaceAll("$","\\$")}\\s*:\\s*${SP}`, "m").exec(kk)) || void 0 === Pk ? void 0 : Pk[1] : void 0,
+         NC = WC ? null === (oC = new RegExp(`(?:^|[{,])\\s*${WC.replaceAll("$","\\$")}\\s*:\\s*${no}`, "m").exec(CC)) || void 0 === oC ? void 0 : oC[1] : void 0,
```

#### 454. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8803-L8804` → after: `L8803-L8804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8803-L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8803-L8804) · [Before (L8803-L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8803-L8804)

```diff
-         Uk = null !== (mk = null === (Mk = new RegExp(`\\?\\s*${SP}\\s*:\\s*${SP}$`).exec(Dk)) || void 0 === Mk ? void 0 : Mk.slice(1)) && void 0 !== mk ? mk : [];
-       for (const kk of [null !== (Hk = null !== xk && void 0 !== xk ? xk : nk) && void 0 !== Hk ? Hk : Dk, ...Uk]) {
+         gC = null !== (qC = null === (FC = new RegExp(`\\?\\s*${no}\\s*:\\s*${no}$`).exec(QC)) || void 0 === FC ? void 0 : FC.slice(1)) && void 0 !== qC ? qC : [];
+       for (const CC of [null !== (SC = null !== NC && void 0 !== NC ? NC : MC) && void 0 !== SC ? SC : QC, ...gC]) {
```

#### 455. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8812` → after: `L8812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8812) · [Before (L8812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8812)

```diff
-   return [...ik].map((kk => `"${kk}" isn't an item or block name.${KP(this.suggestNames(kk))}`))
+   return [...ZC].map((CC => `"${CC}" isn't an item or block name.${No(this.suggestNames(CC))}`))
```

#### 456. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8827` → after: `L8827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8827) · [Before (L8827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8827)

```diff
-       return `"${ek}" isn't a block or item name, so comparing with it is never true. Did you mean "${ik}"?`
+       return `"${zC}" isn't a block or item name, so comparing with it is never true. Did you mean "${ZC}"?`
```

#### 457. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8832-L8833` → after: `L8832-L8833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8832-L8833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8832-L8833) · [Before (L8832-L8833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8832-L8833)

```diff
-       ik = this.blockNames.has(ek) || !this.itemAndBlockNames.includes(ek) ? void 0 : [`Block of ${ek}`, `${ek} Block`].find((kk => this.blockNames.has(kk)));
-     !ik || kk.includes(`"${ik}"`) || kk.includes(`'${ik}'`) || bk.set(ek, ik)
+       ZC = this.blockNames.has(zC) || !this.itemAndBlockNames.includes(zC) ? void 0 : [`Block of ${zC}`, `${zC} Block`].find((CC => this.blockNames.has(CC)));
+     !ZC || CC.includes(`"${ZC}"`) || CC.includes(`'${ZC}'`) || nC.set(zC, ZC)
```

#### 458. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8837` → after: `L8837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8837) · [Before (L8837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8837)

```diff
-     return `"${ek}" is an item, not a block, so no block is ever called that. Did you mean "${ik}"?`
+     return `"${zC}" is an item, not a block, so no block is ever called that. Did you mean "${ZC}"?`
```

#### 459. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8854-L8855` → after: `L8854-L8855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8854-L8855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8854-L8855) · [Before (L8854-L8855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8854-L8855)

```diff
-       } : Dk.names.length > 0 || Dk.isDecided ? Dk : {
-         names: ik.length <= 2 ? ik : [],
+       } : QC.names.length > 0 || QC.isDecided ? QC : {
+         names: ZC.length <= 2 ? ZC : [],
```

#### 460. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8859` → after: `L8859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8859) · [Before (L8859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8859)

```diff
-     return `"${kk}" isn't a block or item name, so comparing a block with it is never true.${KP(fk)}`
+     return `"${CC}" isn't a block or item name, so comparing a block with it is never true.${No(wC)}`
```

#### 461. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8874-L8875` → after: `L8874-L8875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8874-L8875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8874-L8875) · [Before (L8874-L8875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8874-L8875)

```diff
-           name: null !== (fk = ik[1]) && void 0 !== fk ? fk : ik[2],
-           body: kk.slice(ik.index, null !== (Sk = null === (bk = ek[Dk + 1]) || void 0 === bk ? void 0 : bk.index) && void 0 !== Sk ? Sk : kk.length)
+           name: null !== (wC = ZC[1]) && void 0 !== wC ? wC : ZC[2],
+           body: CC.slice(ZC.index, null !== (bC = null === (nC = zC[QC + 1]) || void 0 === nC ? void 0 : nC.index) && void 0 !== bC ? bC : CC.length)
```

#### 462. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8883` → after: `L8883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8883) · [Before (L8883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8883)

```diff
-         if (kk.text.includes(`"${Dk}"`)) continue;
+         if (CC.text.includes(`"${QC}"`)) continue;
```

#### 463. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8885-L8886` → after: `L8885-L8886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8885-L8886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8885-L8886) · [Before (L8885-L8886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8885-L8886)

```diff
-           bk = Sk.length > 0 ? `Did you mean ${Sk.map((kk=>`"${kk}"`)).join(" or ")}?` : /Return false/i.test(kk.text) ? `To stop it, return false instead of "${Dk}".` : "Check Show Docs for what it can return.";
-         ek.add(`${ik} can't use "${Dk}" to stop anything. ${bk}`)
+           nC = bC.length > 0 ? `Did you mean ${bC.map((CC=>`"${CC}"`)).join(" or ")}?` : /Return false/i.test(CC.text) ? `To stop it, return false instead of "${QC}".` : "Check Show Docs for what it can return.";
+         zC.add(`${ZC} can't use "${QC}" to stop anything. ${nC}`)
```

#### 464. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8908` → after: `L8908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8908) · [Before (L8908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8908)

```diff
-     Sk = null !== (ek = this.namesByLowerCase.get(ik)) && void 0 !== ek ? ek : this.namesByLowerCase.get(fk);
+     bC = null !== (zC = this.namesByLowerCase.get(ZC)) && void 0 !== zC ? zC : this.namesByLowerCase.get(wC);
```

#### 465. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8940` → after: `L8940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8940) · [Before (L8940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8940)

```diff
-       kk && Dk.set(kk, (null !== (ik = Dk.get(kk)) && void 0 !== ik ? ik : 0) + ek)
+       CC && QC.set(CC, (null !== (ZC = QC.get(CC)) && void 0 !== ZC ? ZC : 0) + zC)
```

#### 466. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8946` → after: `L8946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8946) · [Before (L8946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8946)

```diff
-   for (const Kk of `${kk}\n${ek}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
+   for (const WC of `${CC}\n${zC}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
```

#### 467. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8948` → after: `L8948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8948) · [Before (L8948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8948)

```diff
-     fk(this.byName.get(null !== (rk = null !== (Pk = Kk[1]) && void 0 !== Pk ? Pk : Kk[2]) && void 0 !== rk ? rk : Kk[3]), Kk[1] || Kk[2] ? 4 : 2)
+     wC(this.byName.get(null !== (fC = null !== (oC = WC[1]) && void 0 !== oC ? oC : WC[2]) && void 0 !== fC ? fC : WC[3]), WC[1] || WC[2] ? 4 : 2)
```

#### 468. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8950` → after: `L8950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8950) · [Before (L8950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8950)

```diff
-   for (const Kk of (0, Ue.e)(ek, /([A-Za-z_$][\w$]*)\s*\(/g, Ue.i)) {
+   for (const WC of (0, Mz.f)(zC, /([A-Za-z_$][\w$]*)\s*\(/g, Mz.n)) {
```

#### 469. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8959-L8960` → after: `L8959-L8960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8959-L8960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8959-L8960) · [Before (L8959-L8960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8959-L8960)

```diff
-       const ik = 1 / Math.log2(2 + (null !== (Mk = this.wordCounts.get(ek)) && void 0 !== Mk ? Mk : 0));
-       Kk.nameWords.has(ek) ? kk += 3 * ik : Kk.textWords.has(ek) && (kk += ik)
+       const ZC = 1 / Math.log2(2 + (null !== (FC = this.wordCounts.get(zC)) && void 0 !== FC ? FC : 0));
+       WC.nameWords.has(zC) ? CC += 3 * ZC : WC.textWords.has(zC) && (CC += ZC)
```

#### 470. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8976` → after: `L8976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L8976) · [Before (L8976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L8976)

```diff
-   return null !== (ek = null !== (ik = this.byName.get(Dk)) && void 0 !== ik ? ik : this.sections.find((kk => kk.name.toLowerCase() === fk))) && void 0 !== ek ? ek : null
+   return null !== (zC = null !== (ZC = this.byName.get(QC)) && void 0 !== ZC ? ZC : this.sections.find((CC => CC.name.toLowerCase() === wC))) && void 0 !== zC ? zC : null
```

#### 471. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9013` → after: `L9013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9013) · [Before (L9013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9013)

```diff
-         Dk = new RegExp(`(^|[^\\w$.])${ik}\\s*\\(`),
+         QC = new RegExp(`(^|[^\\w$.])${ZC}\\s*\\(`),
```

#### 472. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9039` → after: `L9039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9039) · [Before (L9039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9039)

```diff
-         when: `in ${ik[1]}`,
+         when: `in ${ZC[1]}`,
```

#### 473. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9046` → after: `L9046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9046) · [Before (L9046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9046)

```diff
-     rk = Sk && ek ? ` ${Sk}` : "",
+     fC = bC && zC ? ` ${bC}` : "",
```

#### 474. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9050-L9051` → after: `L9050-L9051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9050-L9051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9050-L9051) · [Before (L9050-L9051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9050-L9051)

```diff
-     const kk = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (mk = null === (Mk = fk[0]) || void 0 === Mk ? void 0 : Mk.trim()) && void 0 !== mk ? mk : ""),
-       ek = null === (Kk = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (xk = null === (nk = fk[1]) || void 0 === nk ? void 0 : nk.trim()) && void 0 !== xk ? xk : "")) || void 0 === Kk ? void 0 : Kk[1],
+     const CC = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (qC = null === (FC = wC[0]) || void 0 === FC ? void 0 : FC.trim()) && void 0 !== qC ? qC : ""),
+       zC = null === (WC = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (NC = null === (MC = wC[1]) || void 0 === MC ? void 0 : MC.trim()) && void 0 !== NC ? NC : "")) || void 0 === WC ? void 0 : WC[1],
```

#### 475. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9054` → after: `L9054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9054) · [Before (L9054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9054)

```diff
-         return /^(a|an|the)\s/i.test(ek) || !/^[a-z]/i.test(ek) ? ek : `${/^[aeiou]/i.test(ek)?"an":"a"} ${ek}`
+         return /^(a|an|the)\s/i.test(zC) || !/^[a-z]/i.test(zC) ? zC : `${/^[aeiou]/i.test(zC)?"an":"a"} ${zC}`
```

#### 476. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9056` → after: `L9056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9056) · [Before (L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9056)

```diff
-     return ik && null !== kk && void 0 !== kk && kk[3] ? `api.${Pk[1]} needs ${ik}, but it got ${kk[3]}${rk}.` : kk ? `api.${Pk[1]} couldn't use its ${Uk=Number(kk[1]),1===Uk?"first":2===Uk?"second":3===Uk?"third":4===Uk?"fourth":`#${Uk}`} argument${rk}.${ik?` It needs ${ik}.`:"" … [truncated]
+     return ZC && null !== CC && void 0 !== CC && CC[3] ? `api.${oC[1]} needs ${ZC}, but it got ${CC[3]}${fC}.` : CC ? `api.${oC[1]} couldn't use its ${gC=Number(CC[1]),1===gC?"first":2===gC?"second":3===gC?"third":4===gC?"fourth":`#${gC}`} argument${fC}.${ZC?` It needs ${ZC}.`:"" … [truncated]
```

#### 477. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9060` → after: `L9060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9060) · [Before (L9060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9060)

```diff
-   if (Hk) return Hk[1] ? `${Hk[1]} isn't a function${rk}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${rk}. Check each name it calls is spelt exactly right.`;
+   if (SC) return SC[1] ? `${SC[1]} isn't a function${fC}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${fC}. Check each name it calls is spelt exactly right.`;
```

#### 478. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9062` → after: `L9062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9062) · [Before (L9062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9062)

```diff
-   if (wk) return `${wk[1]} isn't defined${rk}. Check the spelling, or create it before using it.`;
+   if (pC) return `${pC[1]} isn't defined${fC}. Check the spelling, or create it before using it.`;
```

#### 479. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9066-L9067` → after: `L9066-L9067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9066-L9067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9066-L9067) · [Before (L9066-L9067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9066-L9067)

```diff
-     const kk = null !== (pk = lk[1]) && void 0 !== pk ? pk : lk[3];
-     return `Your code tried to read${kk?` .${kk}`:" something"} from ${lk[2]}${rk}: a value it expected wasn't there.`
+     const CC = null !== (GC = PC[1]) && void 0 !== GC ? GC : PC[3];
+     return `Your code tried to read${CC?` .${CC}`:" something"} from ${PC[2]}${fC}: a value it expected wasn't there.`
```

#### 480. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9069` → after: `L9069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9069) · [Before (L9069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9069)

```diff
-   return `Your code hit an error${rk}: ${bk.replace(/^\w*Error:\s*/,"")}`
+   return `Your code hit an error${fC}: ${nC.replace(/^\w*Error:\s*/,"")}`
```

#### 481. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9148` → after: `L9148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9148) · [Before (L9148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9148)

```diff
-   return kk.replaceAll(`"${ek}"`, `"${ik}"`).replaceAll(`'${ek}'`, `'${ik}'`)
+   return CC.replaceAll(`"${zC}"`, `"${ZC}"`).replaceAll(`'${zC}'`, `'${ZC}'`)
```

#### 482. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9152` → after: `L9152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9152) · [Before (L9152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9152)

```diff
-   const ik = kk => sk().isIdentifier(kk) ? kk.text === ek : kk.elements.some((kk => !sk().isOmittedExpression(kk) && ik(kk.name))),
+   const ZC = CC => vC().isIdentifier(CC) ? CC.text === zC : CC.elements.some((CC => !vC().isOmittedExpression(CC) && ZC(CC.name))),
```

#### 483. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9165` → after: `L9165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9165) · [Before (L9165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9165)

```diff
-       return (null === kk || void 0 === kk || null === (ik = kk.name) || void 0 === ik ? void 0 : ik.text) === ek || void 0 !== Dk && (sk().isNamespaceImport(Dk) ? Dk.name.text === ek : Dk.elements.some((kk => kk.name.text === ek)))
+       return (null === CC || void 0 === CC || null === (ZC = CC.name) || void 0 === ZC ? void 0 : ZC.text) === zC || void 0 !== QC && (vC().isNamespaceImport(QC) ? QC.name.text === zC : QC.elements.some((CC => CC.name.text === zC)))
```

#### 484. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9179` → after: `L9179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9179) · [Before (L9179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9179)

```diff
-             text: `${ik}${ek}${ik}`
+             text: `${ZC}${zC}${ZC}`
```

#### 485. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9191` → after: `L9191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9191) · [Before (L9191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9191)

```diff
-                 edit: Sk(fk, sk().isShorthandPropertyAssignment(kk) ? `${Dk}: ${ik}` : Dk),
+                 edit: bC(wC, vC().isShorthandPropertyAssignment(CC) ? `${QC}: ${ZC}` : QC),
```

#### 486. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9193` → after: `L9193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9193) · [Before (L9193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9193)

```diff
-                 fU: rk
+                 lM: fC
```

#### 487. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9206` → after: `L9206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9206) · [Before (L9206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9206)

```diff
-         return Ii(kk, bk.flatMap((kk => kk.depth !== ek || kk.fU ? [] : [kk.edit])))
+         return YZ(CC, nC.flatMap((CC => CC.depth !== zC || CC.lM ? [] : [CC.edit])))
```

#### 488. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9244` → after: `L9244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9244) · [Before (L9244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9244)

```diff
-               text: sk().isShorthandPropertyAssignment(mk) ? `${ek}: ${ik}` : ik
+               text: vC().isShorthandPropertyAssignment(qC) ? `${zC}: ${ZC}` : ZC
```

#### 489. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9254-L9255` → after: `L9254-L9255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9254-L9255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9254-L9255) · [Before (L9254-L9255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9254-L9255)

```diff
-       const ek = `(["'])${function(kk){return kk.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(ik)}\\1`;
-       return ("comparedBlock" === fk ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${ek}`, `${ek}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${ek}`, `${ek}\\s*[!=]==?`, `\\bcase\\s+${ek}\\s*:`, `\\.includes\\(\\s*${ek}\\s*\\)`]).reduce(((kk, ek) => kk.replace(new RegExp(ek, "g"), … [truncated]
+       const zC = `(["'])${function(CC){return CC.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(ZC)}\\1`;
+       return ("comparedBlock" === wC ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${zC}`, `${zC}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${zC}`, `${zC}\\s*[!=]==?`, `\\bcase\\s+${zC}\\s*:`, `\\.includes\\(\\s*${zC}\\s*\\)`]).reduce(((CC, zC) => CC.replace(new RegExp(zC, "g"), … [truncated]
```

#### 490. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9265` → after: `L9265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9265) · [Before (L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9265)

```diff
-   return "export" === kk.kind ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : "null" === kk.kind ? `The null given to ${kk.method} is gone.` : `"${kk.from}" is now "${kk.to}".`
+   return "export" === CC.kind ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : "null" === CC.kind ? `The null given to ${CC.method} is gone.` : `"${CC.from}" is now "${CC.to}".`
```

#### 491. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9267` → after: `L9267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9267) · [Before (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9267)

```diff
- var QP = ik(41021);
+ var co = ZC(41255);
```

#### 492. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9324` → after: `L9324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9324) · [Before (L9324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9324)

```diff
-       return fk ? `${Dk} didn't accept your key: it may be wrong or deleted.` : `${Dk} didn't accept your key: it may be wrong or deleted. Check it on ${Dk}'s website.`;
+       return wC ? `${QC} didn't accept your key: it may be wrong or deleted.` : `${QC} didn't accept your key: it may be wrong or deleted. Check it on ${QC}'s website.`;
```

#### 493. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9326` → after: `L9326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9326) · [Before (L9326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9326)

```diff
-       return fk ? `${Dk} stopped your key for now: it has used all it can.` : `${Dk} stopped your key for now: it has used all it can. Check it on ${Dk}'s website.`;
+       return wC ? `${QC} stopped your key for now: it has used all it can.` : `${QC} stopped your key for now: it has used all it can. Check it on ${QC}'s website.`;
```

#### 494. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9328` → after: `L9328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9328) · [Before (L9328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9328)

```diff
-       return `Too many requests to ${ik} right now. Wait a minute and try again.`;
+       return `Too many requests to ${ZC} right now. Wait a minute and try again.`;
```

#### 495. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9330` → after: `L9330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9330) · [Before (L9330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9330)

```diff
-       return `${Dk} can't find ${ik}. Pick another model, or press Check for new models in AI settings.`;
+       return `${QC} can't find ${ZC}. Pick another model, or press Check for new models in AI settings.`;
```

#### 496. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9332` → after: `L9332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9332) · [Before (L9332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9332)

```diff
-       return `${ik} took too long to answer.`;
+       return `${ZC} took too long to answer.`;
```

#### 497. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9334` → after: `L9334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9334) · [Before (L9334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9334)

```diff
-       return fk ? `Couldn't reach ${Dk}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${Dk}. Check your internet and your key.`;
+       return wC ? `Couldn't reach ${QC}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${QC}. Check your internet and your key.`;
```

#### 498. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9336` → after: `L9336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9336) · [Before (L9336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9336)

```diff
-       return `${Dk} doesn't work from where you are.`;
+       return `${QC} doesn't work from where you are.`;
```

#### 499. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9340` → after: `L9340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9340) · [Before (L9340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9340)

```diff
-       return `${ik} can't be used right now. Try again in a minute.`
+       return `${ZC} can't be used right now. Try again in a minute.`
```

#### 500. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9352` → after: `L9352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9352) · [Before (L9352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9352)

```diff
-       return `Not answered: ${Dk} didn't accept your key.`;
+       return `Not answered: ${QC} didn't accept your key.`;
```

#### 501. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9354` → after: `L9354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9354) · [Before (L9354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9354)

```diff
-       return `Not answered: ${Dk} couldn't find ${ik}.`;
+       return `Not answered: ${QC} couldn't find ${ZC}.`;
```

#### 502. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9356` → after: `L9356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9356) · [Before (L9356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9356)

```diff
-       return `Not answered: ${Dk} stopped your key for now.`;
+       return `Not answered: ${QC} stopped your key for now.`;
```

#### 503. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9358` → after: `L9358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9358) · [Before (L9358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9358)

```diff
-       return `Not answered: too many requests to ${ik}.`;
+       return `Not answered: too many requests to ${ZC}.`;
```

#### 504. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9360` → after: `L9360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9360) · [Before (L9360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9360)

```diff
-       return `Not answered: ${ik} took too long.`;
+       return `Not answered: ${ZC} took too long.`;
```

#### 505. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9362` → after: `L9362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9362) · [Before (L9362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9362)

```diff
-       return `Not answered: couldn't reach ${Dk}.`;
+       return `Not answered: couldn't reach ${QC}.`;
```

#### 506. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9364` → after: `L9364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9364) · [Before (L9364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9364)

```diff
-       return `Not answered: ${Dk} doesn't work from where you are.`;
+       return `Not answered: ${QC} doesn't work from where you are.`;
```

#### 507. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9368` → after: `L9368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9368) · [Before (L9368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9368)

```diff
-       return `Not answered: ${ik} couldn't be used.`
+       return `Not answered: ${ZC} couldn't be used.`
```

#### 508. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9386` → after: `L9386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9386) · [Before (L9386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9386)

```diff
-       ...QP.f,
+       ...co.d,
```

#### 509. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9519` → after: `L9519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9519) · [Before (L9519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9519)

```diff
-       return "" === kk ? "no key needed" : kk.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === ek ? `key \u2026${kk.slice(-4)}` : `${(null!==(ik=null===(Dk=/^[a-zA-Z]+-/.exec(kk))||void 0===Dk?void 0:Dk[0])&&void 0!==ik?ik:kk.slice(0,4)).slice(0,6)}\u2026${kk.slice(-4)}`
+       return "" === CC ? "no key needed" : CC.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === zC ? `key \u2026${CC.slice(-4)}` : `${(null!==(ZC=null===(QC=/^[a-zA-Z]+-/.exec(CC))||void 0===QC?void 0:QC[0])&&void 0!==ZC?ZC:CC.slice(0,4)).slice(0,6)}\u2026${CC.slice(-4)}`
```

#### 510. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9541` → after: `L9541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9541) · [Before (L9541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9541)

```diff
-         "aria-label": `Edit ${Sk} key`,
+         "aria-label": `Edit ${bC} key`,
```

#### 511. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9546` → after: `L9546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9546) · [Before (L9546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9546)

```diff
-         "aria-label": `Rename ${Sk} key`,
+         "aria-label": `Rename ${bC} key`,
```

#### 512. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9567` → after: `L9567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9567) · [Before (L9567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9567)

```diff
-     lk = `${xk}-${null!==(ek=null===Mk||void 0===Mk?void 0:Mk.keyId)&&void 0!==ek?ek:"botxd"}-${null!==(ik=null===Mk||void 0===Mk?void 0:Mk.modelId)&&void 0!==ik?ik:"botxd"}`.replace(/[^\w-]/g, "_"),
+     PC = `${NC}-${null!==(zC=null===FC||void 0===FC?void 0:FC.keyId)&&void 0!==zC?zC:"botxd"}-${null!==(ZC=null===FC||void 0===FC?void 0:FC.modelId)&&void 0!==ZC?ZC:"botxd"}`.replace(/[^\w-]/g, "_"),
```

#### 513. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9571-L9573` → after: `L9571-L9573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9571-L9573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9571-L9573) · [Before (L9571-L9573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9571-L9573)

```diff
-     "data-key-id": null !== (fk = null === Mk || void 0 === Mk ? void 0 : Mk.keyId) && void 0 !== fk ? fk : "botxd",
-     "data-model-id": null !== (rk = null === Mk || void 0 === Mk ? void 0 : Mk.modelId) && void 0 !== rk ? rk : "botxd",
-     title: null !== Hk && void 0 !== Hk ? Hk : void 0,
+     "data-key-id": null !== (wC = null === FC || void 0 === FC ? void 0 : FC.keyId) && void 0 !== wC ? wC : "botxd",
+     "data-model-id": null !== (fC = null === FC || void 0 === FC ? void 0 : FC.modelId) && void 0 !== fC ? fC : "botxd",
+     title: null !== SC && void 0 !== SC ? SC : void 0,
```

#### 514. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9581` → after: `L9581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9581) · [Before (L9581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9581)

```diff
-       "aria-describedby": mk ? lk : void 0,
+       "aria-describedby": qC ? PC : void 0,
```

#### 515. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9608` → after: `L9608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9608) · [Before (L9608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9608)

```diff
-     oV: Pk,
+     lY: oC,
```

#### 516. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9631` → after: `L9631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9631) · [Before (L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9631)

```diff
-           at: null !== (ik = kk.usedAt) && void 0 !== ik ? ik : 0,
+           at: null !== (ZC = CC.usedAt) && void 0 !== ZC ? ZC : 0,
```

#### 517. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9654` → after: `L9654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9654) · [Before (L9654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9654)

```diff
-     uk = `${ek}-model`,
+     YC = `${zC}-model`,
```

#### 518. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9667` → after: `L9667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9667) · [Before (L9667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9667)

```diff
-       }, null !== (Dk = null === ik || void 0 === ik ? void 0 : ik.modelId) && void 0 !== Dk ? Dk : "botxd")
+       }, null !== (QC = null === ZC || void 0 === ZC ? void 0 : ZC.modelId) && void 0 !== QC ? QC : "botxd")
```

#### 519. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9675` → after: `L9675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9675) · [Before (L9675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9675)

```diff
-       hint: null !== lk && void 0 !== lk ? lk : `Bloxd's better AI. ${wk.status?qr(wk.status):""}`.trim(),
+       hint: null !== PC && void 0 !== PC ? PC : `Bloxd's better AI. ${pC.status?df(pC.status):""}`.trim(),
```

#### 520. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9681` → after: `L9681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9681) · [Before (L9681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9681)

```diff
-         yr(null !== (kk = null === (ek = wk.status) || void 0 === ek ? void 0 : ek.provider) && void 0 !== kk ? kk : "ovh") && Lr.Un()
+         Gf(null !== (CC = null === (zC = pC.status) || void 0 === zC ? void 0 : zC.provider) && void 0 !== CC ? CC : "ovh") && Af.CM()
```

#### 521. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9686` → after: `L9686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9686) · [Before (L9686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9686)

```diff
-           if (yr(null !== (ek = null === kk || void 0 === kk ? void 0 : kk.provider) && void 0 !== ek ? ek : "ovh")) return Lr.Un(), !0;
+           if (Gf(null !== (zC = null === CC || void 0 === CC ? void 0 : CC.provider) && void 0 !== zC ? zC : "ovh")) return Af.CM(), !0;
```

#### 522. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9694` → after: `L9694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9694) · [Before (L9694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9694)

```diff
-             }] = await Promise.all([Promise.resolve().then((() => ik(1333))), ik.e(354).then((() => ik(60701)))]), Dk = kk.showPromptPopup({
+             }] = await Promise.all([Promise.resolve().then((() => ZC(1307))), ZC.e(355).then((() => ZC(60961)))]), QC = CC.showPromptPopup({
```

#### 523. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9705` → after: `L9705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9705) · [Before (L9705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9705)

```diff
-             }(), Lr.Un(), !0)
+             }(), Af.CM(), !0)
```

#### 524. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9718-L9719` → after: `L9718-L9719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9718-L9719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9718-L9719) · [Before (L9718-L9719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9718-L9719)

```diff
-         uk = lk ? null !== (ek = kk.models.find((ek => ek.id === kk.usedModelId))) && void 0 !== ek ? ek : Dr(kk.models) : void 0,
-         Ik = null !== (ik = null === (Dk = Ck[kk.id]) || void 0 === Dk ? void 0 : Dk.trim().toLowerCase()) && void 0 !== ik ? ik : "",
+         YC = PC ? null !== (zC = CC.models.find((zC => zC.id === CC.usedModelId))) && void 0 !== zC ? zC : Zf(CC.models) : void 0,
+         mC = null !== (ZC = null === (QC = JC[CC.id]) || void 0 === QC ? void 0 : QC.trim().toLowerCase()) && void 0 !== ZC ? ZC : "",
```

#### 525. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9732` → after: `L9732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9732) · [Before (L9732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9732)

```diff
-             keyName: null !== (fk = kk.name) && void 0 !== fk ? fk : "",
+             keyName: null !== (wC = CC.name) && void 0 !== wC ? wC : "",
```

#### 526. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9748` → after: `L9748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9748) · [Before (L9748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9748)

```diff
-             "aria-label": `Check ${wk} for new models`,
+             "aria-label": `Check ${pC} for new models`,
```

#### 527. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9756` → after: `L9756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9756) · [Before (L9756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9756)

```diff
-             "aria-label": `Remove ${wk} key`,
+             "aria-label": `Remove ${pC} key`,
```

#### 528. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9764` → after: `L9764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9764) · [Before (L9764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9764)

```diff
-             "aria-label": `Remove ${wk} key?`,
+             "aria-label": `Remove ${pC} key?`,
```

#### 529. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9770` → after: `L9770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9770) · [Before (L9770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9770)

```diff
-               "aria-label": `Yes, remove ${wk} key`,
+               "aria-label": `Yes, remove ${pC} key`,
```

#### 530. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9777` → after: `L9777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9777) · [Before (L9777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9777)

```diff
-               "aria-label": `No, keep ${wk} key`,
+               "aria-label": `No, keep ${pC} key`,
```

#### 531. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9791-L9793` → after: `L9791-L9793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9791-L9793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9791-L9793) · [Before (L9791-L9793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9791-L9793)

```diff
-           "aria-label": `Find a model from ${wk}`,
-           placeholder: `Find a model (${kk.models.length})`,
-           value: null !== (Uk = Ck[kk.id]) && void 0 !== Uk ? Uk : "",
+           "aria-label": `Find a model from ${pC}`,
+           placeholder: `Find a model (${CC.models.length})`,
+           value: null !== (gC = JC[CC.id]) && void 0 !== gC ? gC : "",
```

#### 532. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9809` → after: `L9809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9809) · [Before (L9809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9809)

```diff
-           "aria-label": `Show all ${wk} models`,
+           "aria-label": `Show all ${pC} models`,
```

#### 533. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9845` → after: `L9845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9845) · [Before (L9845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9845)

```diff
-         children: ek ? fk : Sk
+         children: zC ? wC : bC
```

#### 534. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9965` → after: `L9965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L9965) · [Before (L9965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L9965)

```diff
-           children: [1 === rk.length ? "Forget your key" : `Forget all ${rk.length} keys`, " in this browser?", (0, bk.jsx)("button", {
+           children: [1 === fC.length ? "Forget your key" : `Forget all ${fC.length} keys`, " in this browser?", (0, nC.jsx)("button", {
```

#### 535. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10029` → after: `L10029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10029) · [Before (L10029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10029)

```diff
-                 text: `${ek} listed no models, so your models stay as they were.`
+                 text: `${zC} listed no models, so your models stay as they were.`
```

#### 536. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10035` → after: `L10035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10035) · [Before (L10035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10035)

```diff
-                 text: `${ek}'s models are up to date.`
+                 text: `${zC}'s models are up to date.`
```

#### 537. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10049` → after: `L10049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10049) · [Before (L10049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10049)

```diff
-         oV: kk => {
+         lY: CC => {
```

#### 538. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10104` → after: `L10104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10104) · [Before (L10104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10104)

```diff
-         null === (ik = null !== Dk && void 0 !== Dk ? Dk : rk.current) || void 0 === ik || ik.scrollIntoView({
+         null === (ZC = null !== QC && void 0 !== QC ? QC : fC.current) || void 0 === ZC || ZC.scrollIntoView({
```

#### 539. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10124` → after: `L10124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10124) · [Before (L10124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10124)

```diff
-         children: Pk ? `An API key works like a password for ${Pk.shortName}'s AI (it isn't your ${Pk.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
+         children: oC ? `An API key works like a password for ${oC.shortName}'s AI (it isn't your ${oC.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
```

#### 540. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10126` → after: `L10126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10126) · [Before (L10126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10126)

```diff
-         children: ["You make it on ", Pk ? `${Pk.shortName}'s website` : (0, bk.jsx)(rm, {}), ", and see how much you've used or delete it there."]
+         children: ["You make it on ", oC ? `${oC.shortName}'s website` : (0, nC.jsx)(Fq, {}), ", and see how much you've used or delete it there."]
```

#### 541. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10128` → after: `L10128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10128) · [Before (L10128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10128)

```diff
-         children: ["Your key stays in this browser and only goes to ", null !== (ek = null === Pk || void 0 === Pk ? void 0 : Pk.shortName) && void 0 !== ek ? ek : "that company", ", never to Bloxd."]
+         children: ["Your key stays in this browser and only goes to ", null !== (zC = null === oC || void 0 === oC ? void 0 : oC.shortName) && void 0 !== zC ? zC : "that company", ", never to Bloxd."]
```

#### 542. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10187` → after: `L10187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10187) · [Before (L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10187)

```diff
-   } = Kr(), [xk, nk] = (0, Dk.useState)(null !== (ek = null === Pk || void 0 === Pk ? void 0 : Pk.provider) && void 0 !== ek ? ek : null), [Uk, Hk] = (0, Dk.useState)(!!Pk), [wk, lk] = (0, Dk.useState)(""), pk = null !== (ik = null === Pk || void 0 === Pk ? void 0 : Pk.key) && vo … [truncated]
+   } = Ff(), [NC, MC] = (0, QC.useState)(null !== (zC = null === oC || void 0 === oC ? void 0 : oC.provider) && void 0 !== zC ? zC : null), [gC, SC] = (0, QC.useState)(!!oC), [pC, PC] = (0, QC.useState)(""), GC = null !== (ZC = null === oC || void 0 === oC ? void 0 : oC.key) && vo … [truncated]
```

#### 543. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10189` → after: `L10189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10189) · [Before (L10189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10189)

```diff
-     return kk === (null === Pk || void 0 === Pk ? void 0 : Pk.provider) && ("custom" !== kk || (null !== (ek = ub(Lk)) && void 0 !== ek ? ek : "") === (null !== (ik = Pk.baseUrl) && void 0 !== ik ? ik : ""))
+     return CC === (null === oC || void 0 === oC ? void 0 : oC.provider) && ("custom" !== CC || (null !== (zC = hn(xC)) && void 0 !== zC ? zC : "") === (null !== (ZC = oC.baseUrl) && void 0 !== ZC ? ZC : ""))
```

#### 544. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10192-L10193` → after: `L10192-L10193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10192-L10193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10192-L10193) · [Before (L10192-L10193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10192-L10193)

```diff
-     return "" === ek && "" !== pk && Ak(kk) ? pk : ek
-   }, [dk, Vk] = (0, Dk.useState)(""), [Fk, uk] = (0, Dk.useState)(null !== (Sk = null === Pk || void 0 === Pk ? void 0 : Pk.name) && void 0 !== Sk ? Sk : ""), [qk, Ik] = (0, Dk.useState)(!1), [zk, Qk] = (0, Dk.useState)(null), [vk, Ek] = (0, Dk.useState)(""), [hk, ak] = (0, Dk.us … [truncated]
+     return "" === zC && "" !== GC && IC(CC) ? GC : zC
+   }, [eC, hC] = (0, QC.useState)(""), [KC, YC] = (0, QC.useState)(null !== (bC = null === oC || void 0 === oC ? void 0 : oC.name) && void 0 !== bC ? bC : ""), [dC, mC] = (0, QC.useState)(!1), [HC, EC] = (0, QC.useState)(null), [lC, XC] = (0, QC.useState)(""), [cC, uC] = (0, QC.us … [truncated]
```

#### 545. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10224` → after: `L10224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10224) · [Before (L10224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10224)

```diff
-           baseUrl: "custom" === xk && null !== (kk = ub(Lk)) && void 0 !== kk ? kk : void 0,
+           baseUrl: "custom" === NC && null !== (CC = hn(xC)) && void 0 !== CC ? CC : void 0,
```

#### 546. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10231` → after: `L10231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10231) · [Before (L10231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10231)

```diff
-         const ik = null !== xk && void 0 !== xk ? xk : Fb(ek),
+         const ZC = null !== NC && void 0 !== NC ? NC : en(zC),
```

#### 547. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10246-L10247` → after: `L10246-L10247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10246-L10247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10246-L10247) · [Before (L10246-L10247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10246-L10247)

```diff
-             baseUrl: null !== fk && void 0 !== fk ? fk : void 0,
-             modelName: qk ? dk : void 0
+             baseUrl: null !== wC && void 0 !== wC ? wC : void 0,
+             modelName: dC ? eC : void 0
```

#### 548. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10253` → after: `L10253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10253) · [Before (L10253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10253)

```diff
-           Ek(null !== (bk = null === (rk = null !== mk && void 0 !== mk ? mk : Dr(kk)) || void 0 === rk ? void 0 : rk.id) && void 0 !== bk ? bk : "")
+           XC(null !== (nC = null === (fC = null !== qC && void 0 !== qC ? qC : Zf(CC)) || void 0 === fC ? void 0 : fC.id) && void 0 !== nC ? nC : "")
```

#### 549. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10259-L10260` → after: `L10259-L10260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10259-L10260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10259-L10260) · [Before (L10259-L10260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10259-L10260)

```diff
-           const bk = "badKey" !== fk || Uk ? "" : ` If it isn't from ${jb[ik].shortName}, pick the company it's from.`;
-           tk(`${Qb(fk,ik)}${bk}`)
+           const nC = "badKey" !== wC || gC ? "" : ` If it isn't from ${xn[ZC].shortName}, pick the company it's from.`;
+           sC(`${mn(wC,ZC)}${nC}`)
```

#### 550. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10270` → after: `L10270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10270) · [Before (L10270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10270)

```diff
-         value: null !== xk && void 0 !== xk ? xk : "",
+         value: null !== NC && void 0 !== NC ? NC : "",
```

#### 551. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10298` → after: `L10298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10298) · [Before (L10298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10298)

```diff
-       }), (!Pk || Lk !== (null !== (rk = Pk.baseUrl) && void 0 !== rk ? rk : "")) && (0, bk.jsx)(mm, {})]
+       }), (!oC || xC !== (null !== (fC = oC.baseUrl) && void 0 !== fC ? fC : "")) && (0, nC.jsx)(Nq, {})]
```

#### 552. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10370` → after: `L10370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10370) · [Before (L10370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10370)

```diff
-           keyId: null !== xk && void 0 !== xk ? xk : "",
+           keyId: null !== NC && void 0 !== NC ? NC : "",
```

#### 553. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10394` → after: `L10394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10394) · [Before (L10394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10394)

```diff
-         placeholder: xk && "custom" !== xk ? `Like My ${jb[xk].shortName}` : "Like Home server",
+         placeholder: NC && "custom" !== NC ? `Like My ${xn[NC].shortName}` : "Like Home server",
```

#### 554. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10420` → after: `L10420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10420) · [Before (L10420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10420)

```diff
-         children: hk ? ck ? "Testing the connection\u2026" : "Testing your key\u2026" : Gk ? `Save and use ${Gk.name}` : ck ? "Test connection" : "Test key"
+         children: cC ? tC ? "Testing the connection\u2026" : "Testing your key\u2026" : UC ? `Save and use ${UC.name}` : tC ? "Test connection" : "Test key"
```

#### 555. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10425-L10427` → after: `L10425-L10427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10425-L10427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10425-L10427) · [Before (L10425-L10427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10425-L10427)

```diff
- var xm = ik(1172),
-   nm = ik(36489),
-   Um = ik(36486);
+ var Sq = ZC(1143),
+   pq = ZC(36750),
+   Pq = ZC(36747);
```

#### 556. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10438-L10439` → after: `L10438-L10439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10438-L10439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10438-L10439) · [Before (L10438-L10439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10438-L10439)

```diff
-   } = (0, xm.D)();
-   return (0, bk.jsx)(Um.j, {
+   } = (0, Sq.y)();
+   return (0, nC.jsx)(Pq.h, {
```

#### 557. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10442` → after: `L10442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10442) · [Before (L10442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10442)

```diff
-     text: Sk(`codeEditorAiTutorial:${ek}`),
+     text: bC(`codeEditorAiTutorial:${zC}`),
```

#### 558. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10490` → after: `L10490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10490) · [Before (L10490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10490)

```diff
-   return kk.model.name.toLowerCase().startsWith(ek.toLowerCase()) ? kk.model.name : `${ek} \xb7 ${kk.model.name}`
+   return CC.model.name.toLowerCase().startsWith(zC.toLowerCase()) ? CC.model.name : `${zC} \xb7 ${CC.model.name}`
```

#### 559. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10540` → after: `L10540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10540) · [Before (L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10540)

```diff
-     yk = pk ? "Bot.xd (free) \xb7 once" : mk ? pm(mk) : Kk ? Hr : "Bot.xd (free)";
+     RC = GC ? "Bot.xd (free) \xb7 once" : qC ? xq(qC) : WC ? gf : "Bot.xd (free)";
```

#### 560. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10552` → after: `L10552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10552) · [Before (L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10552)

```diff
-       "aria-label": `AI model: ${yk}`,
+       "aria-label": `AI model: ${RC}`,
```

#### 561. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10570` → after: `L10570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10570) · [Before (L10570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10570)

```diff
-         title: `Allow AI to make edits to my code is ${ik?"on":"off"}, in AI settings`,
+         title: `Allow AI to make edits to my code is ${ZC?"on":"off"}, in AI settings`,
```

#### 562. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10638` → after: `L10638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10638) · [Before (L10638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10638)

```diff
-       ik(null !== (ek = kk.error) && void 0 !== ek ? ek : new Error("IndexedDB transaction failed"))
+       ZC(null !== (zC = CC.error) && void 0 !== zC ? zC : new Error("IndexedDB transaction failed"))
```

#### 563. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10641` → after: `L10641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10641) · [Before (L10641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10641)

```diff
-       ik(null !== (ek = kk.error) && void 0 !== ek ? ek : new Error("IndexedDB transaction aborted"))
+       ZC(null !== (zC = CC.error) && void 0 !== zC ? zC : new Error("IndexedDB transaction aborted"))
```

#### 564. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10645` → after: `L10645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10645) · [Before (L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10645)

```diff
- var Cm = ik(36512);
+ var vq = ZC(36781);
```

#### 565. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10676` → after: `L10676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10676) · [Before (L10676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10676)

```diff
-           if (ek) return kk.includes(`"${ek}"`) ? `"${ek}"` : kk.includes(ek) ? ek : void 0
+           if (zC) return CC.includes(`"${zC}"`) ? `"${zC}"` : CC.includes(zC) ? zC : void 0
```

#### 566. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10680` → after: `L10680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10680) · [Before (L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10680)

```diff
-         className: Sk()("WorldCodeAiDiffLine", `WorldCodeAiDiff-${kk.kind}`, Dk && "WorldCodeAiDiff-marked"),
+         className: bC()("WorldCodeAiDiffLine", `WorldCodeAiDiff-${CC.kind}`, QC && "WorldCodeAiDiff-marked"),
```

#### 567. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10743` → after: `L10743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10743) · [Before (L10743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10743)

```diff
-   return fk(kk) === fk(ek) ? Dk : fk(kk) === fk(ek - 864e5) ? `yesterday ${Dk}` : function(kk, ek) {
+   return wC(CC) === wC(zC) ? QC : wC(CC) === wC(zC - 864e5) ? `yesterday ${QC}` : function(CC, zC) {
```

#### 568. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10746` → after: `L10746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10746) · [Before (L10746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10746)

```diff
-     if (ik < 60) return `${ik} min ago`;
+     if (ZC < 60) return `${ZC} min ago`;
```

#### 569. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10748` → after: `L10748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10748) · [Before (L10748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10748)

```diff
-     if (Dk < 24) return `${Dk} h ago`;
+     if (QC < 24) return `${QC} h ago`;
```

#### 570. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10750` → after: `L10750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10750) · [Before (L10750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10750)

```diff
-     return 1 === fk ? "1 day ago" : `${fk} days ago`
+     return 1 === wC ? "1 day ago" : `${wC} days ago`
```

#### 571. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10757-L10758` → after: `L10757-L10758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10757-L10758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10757-L10758) · [Before (L10757-L10758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10757-L10758)

```diff
-     const Sk = null !== (Dk = kk.files[ik]) && void 0 !== Dk ? Dk : "";
-     return (null !== (fk = ek[ik]) && void 0 !== fk ? fk : "") === Sk ? [] : [{
+     const bC = null !== (QC = CC.files[ZC]) && void 0 !== QC ? QC : "";
+     return (null !== (wC = zC[ZC]) && void 0 !== wC ? wC : "") === bC ? [] : [{
```

#### 572. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10770` → after: `L10770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10770) · [Before (L10770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10770)

```diff
-   return `${(Dk>ek/2?ik.slice(0,Dk):ik).replace(/[\s,;:.]+$/,"")}\u2026`
+   return `${(QC>zC/2?ZC.slice(0,QC):ZC).replace(/[\s,;:.]+$/,"")}\u2026`
```

#### 573. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10781` → after: `L10781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10781) · [Before (L10781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10781)

```diff
-   const [mk, Mk] = (0, Dk.useState)(!1), [Kk, xk] = (0, Dk.useState)(!1), nk = ek.did ? `Before: ${ek.did}` : ek.label, Uk = um(nk), Hk = ek.did && ek.label.startsWith('Before "') ? ek.label.slice(7) : null, wk = null === Hk ? null : um(Hk, 50), lk = null !== wk && null !== Hk && … [truncated]
+   const [qC, FC] = (0, QC.useState)(!1), [WC, NC] = (0, QC.useState)(!1), MC = zC.did ? `Before: ${zC.did}` : zC.label, gC = Hq(MC), SC = zC.did && zC.label.startsWith('Before "') ? zC.label.slice(7) : null, pC = null === SC ? null : Hq(SC, 50), PC = null !== pC && null !== SC && … [truncated]
```

#### 574. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10806-L10807` → after: `L10806-L10807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10806-L10807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10806-L10807) · [Before (L10806-L10807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10806-L10807)

```diff
-     const Sk = null !== (Dk = ek.files[kk]) && void 0 !== Dk ? Dk : "",
-       bk = null !== (fk = ik[kk]) && void 0 !== fk ? fk : "";
+     const bC = null !== (QC = zC.files[CC]) && void 0 !== QC ? QC : "",
+       nC = null !== (wC = ZC[CC]) && void 0 !== wC ? wC : "";
```

#### 575. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10821` → after: `L10821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10821) · [Before (L10821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10821)

```diff
-         children: [Kk || !Uk ? nk : Uk, (Uk || lk) && (0, bk.jsx)("button", {
+         children: [WC || !gC ? MC : gC, (gC || PC) && (0, nC.jsx)("button", {
```

#### 576. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10833` → after: `L10833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10833) · [Before (L10833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10833)

```diff
-           children: ["You asked: ", Kk || !lk ? Hk : lk]
+           children: ["You asked: ", WC || !PC ? SC : PC]
```

#### 577. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10914` → after: `L10914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10914) · [Before (L10914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10914)

```diff
-     rY: fk,
+     xR: wC,
```

#### 578. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10938` → after: `L10938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L10938) · [Before (L10938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L10938)

```diff
-           "aria-label": `Delete note: ${kk}`,
+           "aria-label": `Delete note: ${CC}`,
```

#### 579. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11077` → after: `L11077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11077) · [Before (L11077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11077)

```diff
-       }, `${ek}:${kk}`)))
+       }, `${zC}:${CC}`)))
```

#### 580. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11080` → after: `L11080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11080) · [Before (L11080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11080)

```diff
-       children: ["Apply ", ik - Dk > 1 ? `steps ${Dk+1} to ${ik}` : `step ${ik}`, " to your code and try it, then build step ", ik + 1, "."]
+       children: ["Apply ", ZC - QC > 1 ? `steps ${QC+1} to ${ZC}` : `step ${ZC}`, " to your code and try it, then build step ", ZC + 1, "."]
```

#### 581. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11082` → after: `L11082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11082) · [Before (L11082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11082)

```diff
-       ...QP.f,
+       ...co.d,
```

#### 582. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11087` → after: `L11087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11087) · [Before (L11087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11087)

```diff
-       children: Dk < ik ? `Build step ${ik+1} anyway` : `Build step ${ik+1}`
+       children: QC < ZC ? `Build step ${ZC+1} anyway` : `Build step ${ZC+1}`
```

#### 583. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11099` → after: `L11099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11099) · [Before (L11099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11099)

```diff
-   return `${kk}\n\nYou asked me: "${ek}" ${null===ik?"I don't mind: choose what works best.":`My answer: ${ik.replace(/\.$/,"")}.`} Build it now, without asking again.`
+   return `${CC}\n\nYou asked me: "${zC}" ${null===ZC?"I don't mind: choose what works best.":`My answer: ${ZC.replace(/\.$/,"")}.`} Build it now, without asking again.`
```

#### 584. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11118-L11119` → after: `L11118-L11119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11118-L11119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11118-L11119) · [Before (L11118-L11119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11118-L11119)

```diff
-           ...QP.f,
-           key: `${ek}:${kk}`,
+           ...co.d,
+           key: `${zC}:${CC}`,
```

#### 585. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11152` → after: `L11152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11152) · [Before (L11152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11152)

```diff
-         ...QP.f,
+         ...co.d,
```

#### 586. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11325` → after: `L11325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11325) · [Before (L11325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11325)

```diff
-       Lk = null !== yk && void 0 !== yk ? yk : fk;
+       xC = null !== RC && void 0 !== RC ? RC : wC;
```

#### 587. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11329-L11331` → after: `L11329-L11331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11329-L11331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11329-L11331) · [Before (L11329-L11331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11329-L11331)

```diff
-       raw: null !== (Pk = null === Yk || void 0 === Yk ? void 0 : Yk.text) && void 0 !== Pk ? Pk : "",
-       start: null !== (mk = null === Yk || void 0 === Yk ? void 0 : Yk.start) && void 0 !== mk ? mk : 0,
-       end: null !== (Mk = null === Yk || void 0 === Yk ? void 0 : Yk.end) && void 0 !== Mk ? Mk : 0,
+       raw: null !== (oC = null === AC || void 0 === AC ? void 0 : AC.text) && void 0 !== oC ? oC : "",
+       start: null !== (qC = null === AC || void 0 === AC ? void 0 : AC.start) && void 0 !== qC ? qC : 0,
+       end: null !== (FC = null === AC || void 0 === AC ? void 0 : AC.end) && void 0 !== FC ? FC : 0,
```

#### 588. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11374` → after: `L11374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11374) · [Before (L11374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11374)

```diff
-     Sk = ik, fk = `${bk=ik.includes(kk)&&!ik.includes(Dk)?Dk:kk}${Sk.slice(0,200).replace(/\\/g,"\\\\").replace('"'===bk?/"/g:/'/g,`\\${bk}`).replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/[\u0000- … [truncated]
+     bC = ZC, wC = `${nC=ZC.includes(CC)&&!ZC.includes(QC)?QC:CC}${bC.slice(0,200).replace(/\\/g,"\\\\").replace('"'===nC?/"/g:/'/g,`\\${nC}`).replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/[\u0000- … [truncated]
```

#### 589. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11383` → after: `L11383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11383) · [Before (L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11383)

```diff
-     const ik = Math.min(3, (null !== (ek = String(kk).split(".")[1]) && void 0 !== ek ? ek : "").length);
+     const ZC = Math.min(3, (null !== (zC = String(CC).split(".")[1]) && void 0 !== zC ? zC : "").length);
```

#### 590. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11398` → after: `L11398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11398) · [Before (L11398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11398)

```diff
-   return "boolean" === typeof kk ? kk ? "on" : "off" : "number" === typeof kk ? String(kk) : kk.length > 20 ? `\u201c${kk.slice(0,19)}\u2026\u201d` : `\u201c${kk}\u201d`
+   return "boolean" === typeof CC ? CC ? "on" : "off" : "number" === typeof CC ? String(CC) : CC.length > 20 ? `\u201c${CC.slice(0,19)}\u2026\u201d` : `\u201c${CC}\u201d`
```

#### 591. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11403` → after: `L11403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11403) · [Before (L11403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11403)

```diff
-   if (0 === kk.length) return `Before ${ek} settings`;
+   if (0 === CC.length) return `Before ${zC} settings`;
```

#### 592. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11405-L11407` → after: `L11405-L11407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11405-L11407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11405-L11407) · [Before (L11405-L11407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11405-L11407)

```diff
-     Dk = kk.slice(0, ik).map((kk => `${kk.name} ${kk.from} \u2192 ${kk.to}`)),
-     fk = kk.length > ik ? ` and ${kk.length-ik} more` : "";
-   return `Before ${ek} settings: ${Dk.join(", ")}${fk}`
+     QC = CC.slice(0, ZC).map((CC => `${CC.name} ${CC.from} \u2192 ${CC.to}`)),
+     wC = CC.length > ZC ? ` and ${CC.length-ZC} more` : "";
+   return `Before ${zC} settings: ${QC.join(", ")}${wC}`
```

#### 593. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11415` → after: `L11415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11415) · [Before (L11415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11415)

```diff
-     ek.add(null !== (ik = null !== (Dk = fk[1]) && void 0 !== Dk ? Dk : fk[2]) && void 0 !== ik ? ik : fk[3])
+     zC.add(null !== (ZC = null !== (QC = wC[1]) && void 0 !== QC ? QC : wC[2]) && void 0 !== ZC ? ZC : wC[3])
```

#### 594. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11458` → after: `L11458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11458) · [Before (L11458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11458)

```diff
-     const Sk = null !== (fk = Rm.get(ek)) && void 0 !== fk ? fk : [];
+     const bC = null !== (wC = CF.get(zC)) && void 0 !== wC ? wC : [];
```

#### 595. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11510` → after: `L11510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11510) · [Before (L11510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11510)

```diff
-   return null !== (ek = DM.get(kk)) && void 0 !== ek ? ek : "CONFIG" === kk ? "Settings" : void 0
+   return null !== (zC = bF.get(CC)) && void 0 !== zC ? zC : "CONFIG" === CC ? "Settings" : void 0
```

#### 596. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11536` → after: `L11536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11536) · [Before (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11536)

```diff
-         name: void 0 === Sk ? null : null !== (fk = KM(Sk)) && void 0 !== fk ? fk : null,
+         name: void 0 === bC ? null : null !== (wC = MF(bC)) && void 0 !== wC ? wC : null,
```

#### 597. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11588` → after: `L11588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11588) · [Before (L11588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11588)

```diff
-   return rk.every((kk => rM(kk.removed) && rM(kk.added))) ? rk : [kk]
+   return fC.every((CC => qF(CC.removed) && qF(CC.added))) ? fC : [CC]
```

#### 598. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11640` → after: `L11640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11640) · [Before (L11640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11640)

```diff
-   return Dk ? null !== (ek = null !== (ik = Dk[1]) && void 0 !== ik ? ik : Dk[2]) && void 0 !== ek ? ek : Dk[3] : void 0
+   return QC ? null !== (zC = null !== (ZC = QC[1]) && void 0 !== ZC ? ZC : QC[2]) && void 0 !== zC ? zC : QC[3] : void 0
```

#### 599. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11668` → after: `L11668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11668) · [Before (L11668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11668)

```diff
-   return kk.length <= 1 ? null !== (ek = kk[0]) && void 0 !== ek ? ek : "" : `${kk.slice(0,-1).join(", ")} and ${kk[kk.length-1]}`
+   return CC.length <= 1 ? null !== (zC = CC[0]) && void 0 !== zC ? zC : "" : `${CC.slice(0,-1).join(", ")} and ${CC[CC.length-1]}`
```

#### 600. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11683` → after: `L11683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11683) · [Before (L11683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11683)

```diff
-     return (0, Ue.e)(ek, /[A-Za-z_$][\w$]{2,}(?!\s*:(?!:))/g, Ue.i).map((kk => kk[0])).filter((kk => !pM.has(kk)))
+     return (0, Mz.f)(zC, /[A-Za-z_$][\w$]{2,}(?!\s*:(?!:))/g, Mz.n).map((CC => CC[0])).filter((CC => !AF.has(CC)))
```

#### 601. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11689` → after: `L11689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11689) · [Before (L11689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11689)

```diff
-   const Dk = (null !== (ik = kk.parts) && void 0 !== ik ? ik : []).map((kk => {
+   const QC = (null !== (ZC = CC.parts) && void 0 !== ZC ? ZC : []).map((CC => {
```

#### 602. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11737` → after: `L11737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11737) · [Before (L11737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11737)

```diff
-               return ik ? [null !== (ek = ik[1]) && void 0 !== ek ? ek : ik[2]] : []
+               return ZC ? [null !== (zC = ZC[1]) && void 0 !== zC ? zC : ZC[2]] : []
```

#### 603. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11741` → after: `L11741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11741) · [Before (L11741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11741)

```diff
-               return Kk.has(kk) ? `"${ek}"` : ek
+               return WC.has(CC) ? `"${zC}"` : zC
```

#### 604. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11749` → after: `L11749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11749) · [Before (L11749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11749)

```diff
-                   return null !== (ek = Pk.get(kk)) && void 0 !== ek ? ek : kk
+                   return null !== (zC = oC.get(CC)) && void 0 !== zC ? zC : CC
```

#### 605. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11752` → after: `L11752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11752) · [Before (L11752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11752)

```diff
-               ek = [Sk.length > 0 ? `${kk(Sk)} \u2014 changed` : "", bk.length > 0 ? `${kk(bk)} \u2014 added` : "", rk.length > 0 ? `${kk(rk)} \u2014 taken out` : ""].filter(Boolean),
+               zC = [bC.length > 0 ? `${CC(bC)} \u2014 changed` : "", nC.length > 0 ? `${CC(nC)} \u2014 added` : "", fC.length > 0 ? `${CC(fC)} \u2014 taken out` : ""].filter(Boolean),
```

#### 606. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11763` → after: `L11763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11763) · [Before (L11763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11763)

```diff
-           const Uk = [Sk.length > 0 ? `changes ${HM(Sk.map(xk))}` : "", bk.length > 0 ? `adds ${HM(bk.map(xk))}` : "", rk.length > 0 ? `takes out ${HM(rk.map(xk))}` : ""].filter(Boolean);
+           const gC = [bC.length > 0 ? `changes ${PF(bC.map(NC))}` : "", nC.length > 0 ? `adds ${PF(nC.map(NC))}` : "", fC.length > 0 ? `takes out ${PF(fC.map(NC))}` : ""].filter(Boolean);
```

#### 607. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11779` → after: `L11779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11779) · [Before (L11779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11779)

```diff
-                 named: `${ik} \u2014 changed`,
+                 named: `${ZC} \u2014 changed`,
```

#### 608. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11785` → after: `L11785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11785) · [Before (L11785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11785)

```diff
-                 named: `Changes ${/\bfunction\b|=>/.test(kk)?`"${wM(ek)}"`:wM(ek)}`,
+                 named: `Changes ${/\bfunction\b|=>/.test(CC)?`"${GF(zC)}"`:GF(zC)}`,
```

#### 609. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11794` → after: `L11794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11794) · [Before (L11794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11794)

```diff
-             named: 0 === kk.added.length ? `Takes out lines from line ${ik}` : `Changes line ${ik}`,
+             named: 0 === CC.added.length ? `Takes out lines from line ${ZC}` : `Changes line ${ZC}`,
```

#### 610. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11819` → after: `L11819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11819) · [Before (L11819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11819)

```diff
-           return Dk[ek] && null !== (ik = kk.uses) && void 0 !== ik ? ik : []
+           return QC[zC] && null !== (ZC = CC.uses) && void 0 !== ZC ? ZC : []
```

#### 611. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11823` → after: `L11823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11823) · [Before (L11823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11823)

```diff
-           return Dk[ek] || (null !== (ik = kk.uses) && void 0 !== ik ? ik : []).some((kk => fk.has(kk)))
+           return QC[zC] || (null !== (ZC = CC.uses) && void 0 !== ZC ? ZC : []).some((CC => wC.has(CC)))
```

#### 612. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11830` → after: `L11830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11830) · [Before (L11830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11830)

```diff
-           const Dk = (null !== (rk = kk.takesOut) && void 0 !== rk ? rk : []).filter((kk => ("CONFIG" === kk || Rm.has(kk)) && !bk.has(kk)));
+           const QC = (null !== (fC = CC.takesOut) && void 0 !== fC ? fC : []).filter((CC => ("CONFIG" === CC || CF.has(CC)) && !nC.has(CC)));
```

#### 613. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11834` → after: `L11834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11834) · [Before (L11834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11834)

```diff
-           }, ek, ik) || void 0 !== kk.why && eM(ik, kM(kk.why)) || (null !== (Pk = kk.removedUses) && void 0 !== Pk ? Pk : []).some((kk => fk.has(kk))) ? void 0 : "takesOut"
+           }, zC, ZC) || void 0 !== CC.why && QF(ZC, ZF(CC.why)) || (null !== (oC = CC.removedUses) && void 0 !== oC ? oC : []).some((CC => wC.has(CC))) ? void 0 : "takesOut"
```

#### 614. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11853` → after: `L11853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11853) · [Before (L11853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11853)

```diff
-         Mk = !fk && mk ? mk : ik,
+         FC = !wC && qC ? qC : ZC,
```

#### 615. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11870` → after: `L11870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11870) · [Before (L11870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11870)

```diff
-       return `${null!==(ek=kk.also)&&void 0!==ek?ek:""}|${kk.label}|${null!==(ik=kk.detail)&&void 0!==ik?ik:""}`
+       return `${null!==(zC=CC.also)&&void 0!==zC?zC:""}|${CC.label}|${null!==(ZC=CC.detail)&&void 0!==ZC?ZC:""}`
```

#### 616. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11879` → after: `L11879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11879) · [Before (L11879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11879)

```diff
-       label: `${ik.label} (line ${ek})`
+       label: `${ZC.label} (line ${zC})`
```

#### 617. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11907` → after: `L11907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11907) · [Before (L11907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11907)

```diff
-       return (0, Ue.e)(kk, sM, dM).map((kk => [kk.index, kk.index + kk[0].length]))
+       return (0, Mz.f)(CC, hF, KF).map((CC => [CC.index, CC.index + CC[0].length]))
```

#### 618. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11914` → after: `L11914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11914) · [Before (L11914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11914)

```diff
-   for (const Sk of kk.matchAll(new RegExp(`(^|[.!?]\\s+|\\n\\s*)I(?:'ve|\u2019ve| have)?( also)? (${CM})\\b`, "g"))) {
+   for (const bC of CC.matchAll(new RegExp(`(^|[.!?]\\s+|\\n\\s*)I(?:'ve|\u2019ve| have)?( also)? (${iF})\\b`, "g"))) {
```

#### 619. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11924` → after: `L11924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11924) · [Before (L11924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11924)

```diff
-         words: `${Sk[2]?"It also":"This"} ${LM[Sk[3]]}`
+         words: `${bC[2]?"It also":"This"} ${IF[bC[3]]}`
```

#### 620. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11926` → after: `L11926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11926) · [Before (L11926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11926)

```diff
-       for (const kk of Pk.matchAll(new RegExp(`\\b(and|then|also) (${CM})\\b(?!\\s+(?:of|by|from|with|when|if|in|on|at|to|for|so|as|after|before|into)\\b)`, "g"))) ik(fk + kk.index) || Dk.push({
+       for (const CC of oC.matchAll(new RegExp(`\\b(and|then|also) (${iF})\\b(?!\\s+(?:of|by|from|with|when|if|in|on|at|to|for|so|as|after|before|into)\\b)`, "g"))) ZC(wC + CC.index) || QC.push({
```

#### 621. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11929` → after: `L11929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11929) · [Before (L11929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11929)

```diff
-         words: `${kk[1]} ${LM[kk[2]]}`
+         words: `${CC[1]} ${IF[CC[2]]}`
```

#### 622. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11942` → after: `L11942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11942) · [Before (L11942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11942)

```diff
-       words: `will ${fk=Sk[1],"has"===fk?"have":fk.endsWith("ies")?`${fk.slice(0,-3)}y`:/(?:ch|sh|x|zz|o|ss)es$/.test(fk)?fk.slice(0,-2):fk.slice(0,-1)}`
+       words: `will ${wC=bC[1],"has"===wC?"have":wC.endsWith("ies")?`${wC.slice(0,-3)}y`:/(?:ch|sh|x|zz|o|ss)es$/.test(wC)?wC.slice(0,-2):wC.slice(0,-1)}`
```

#### 623. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11976` → after: `L11976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L11976) · [Before (L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L11976)

```diff
-   }, lk = `WorldCodeAiSetting-${ek}-${ik.key}`;
+   }, PC = `WorldCodeAiSetting-${zC}-${ZC.key}`;
```

#### 624. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12004` → after: `L12004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12004) · [Before (L12004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12004)

```diff
-         "aria-label": `Less ${Kk}`,
+         "aria-label": `Less ${WC}`,
```

#### 625. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12016` → after: `L12016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12016) · [Before (L12016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12016)

```diff
-         value: null !== rk && void 0 !== rk ? rk : String(ik.value),
+         value: null !== fC && void 0 !== fC ? fC : String(ZC.value),
```

#### 626. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12027` → after: `L12027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12027) · [Before (L12027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12027)

```diff
-         "aria-label": `More ${Kk}`,
+         "aria-label": `More ${WC}`,
```

#### 627. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12115` → after: `L12115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12115) · [Before (L12115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12115)

```diff
-   if (kk > 9e4) return `It starts in about ${Math.ceil(kk/6e4)} minutes.`;
+   if (CC > 9e4) return `It starts in about ${Math.ceil(CC/6e4)} minutes.`;
```

#### 628. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12118` → after: `L12118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12118) · [Before (L12118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12118)

```diff
-   return ek >= 60 ? "It starts in about a minute." : `It starts in about ${ek} seconds.`
+   return zC >= 60 ? "It starts in about a minute." : `It starts in about ${zC} seconds.`
```

#### 629. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12120` → after: `L12120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12120) · [Before (L12120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12120)

```diff
- var vM = ik(1187);
+ var cF = ZC(1152);
```

#### 630. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12126` → after: `L12126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12126) · [Before (L12126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12126)

```diff
-     ik.set(fk, (null !== (Dk = ik.get(fk)) && void 0 !== Dk ? Dk : 0) + 1)
+     ZC.set(wC, (null !== (QC = ZC.get(wC)) && void 0 !== QC ? QC : 0) + 1)
```

#### 631. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12130` → after: `L12130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12130) · [Before (L12130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12130)

```diff
-     const Dk = null !== (ek = ik.get(kk)) && void 0 !== ek ? ek : 0;
+     const QC = null !== (zC = ZC.get(CC)) && void 0 !== zC ? zC : 0;
```

#### 632. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12137` → after: `L12137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12137) · [Before (L12137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12137)

```diff
-     if (null !== ek && void 0 !== ek && ek.aborted) return void Dk((0, vM.i)(ek));
+     if (null !== zC && void 0 !== zC && zC.aborted) return void QC((0, cF.g)(zC));
```

#### 633. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12140` → after: `L12140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12140) · [Before (L12140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12140)

```diff
-       clearTimeout(fk), Dk((0, vM.i)(ek))
+       clearTimeout(wC), QC((0, cF.g)(zC))
```

#### 634. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12157` → after: `L12157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12157) · [Before (L12157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12157)

```diff
-     const mk = null !== (bk = rk.find((kk => bS.freeAt(kk) <= Date.now()))) && void 0 !== bk ? bk : rk[0],
+     const qC = null !== (nC = fC.find((CC => Zb.freeAt(CC) <= Date.now()))) && void 0 !== nC ? nC : fC[0],
```

#### 635. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12174` → after: `L12174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12174) · [Before (L12174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12174)

```diff
-       return [...null !== (ek = kk.why) && void 0 !== ek ? ek : [], ...(null !== (ik = kk.parts) && void 0 !== ik ? ik : []).map((kk => kk.why)), ...EM(kk.before, kk.after)]
+       return [...null !== (zC = CC.why) && void 0 !== zC ? zC : [], ...(null !== (ZC = CC.parts) && void 0 !== ZC ? ZC : []).map((CC => CC.why)), ...uF(CC.before, CC.after)]
```

#### 636. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12185` → after: `L12185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12185) · [Before (L12185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12185)

```diff
-           Dk = kk > 6e3 ? kk : af;
+           QC = CC > 6e3 ? CC : Ew;
```

#### 637. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12199-L12201` → after: `L12199-L12201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12199-L12201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12199-L12201) · [Before (L12199-L12201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12199-L12201)

```diff
-   const Dk = ek && null !== (ik = kk[ek]) && void 0 !== ik ? ik : [],
-     fk = Dk.length >= 2 ? Dk : Object.values(kk).flat();
-   return fk.length < 2 ? "Usually under a minute." : `Usually ${function(kk){const ek=Math.max(5,5*Math.round(kk/5e3));if(ek<60)return`about ${ek} seconds`;const ik=10*Math.round(kk/1e4),Dk=Math.floor(ik/60),fk=ik%60,Sk=`${Dk} ${1===Dk?"minute":"minutes"}`;return 0===fk?`about ${ … [truncated]
+   const QC = zC && null !== (ZC = CC[zC]) && void 0 !== ZC ? ZC : [],
+     wC = QC.length >= 2 ? QC : Object.values(CC).flat();
+   return wC.length < 2 ? "Usually under a minute." : `Usually ${function(CC){const zC=Math.max(5,5*Math.round(CC/5e3));if(zC<60)return`about ${zC} seconds`;const ZC=10*Math.round(CC/1e4),QC=Math.floor(ZC/60),wC=ZC%60,bC=`${QC} ${1===QC?"minute":"minutes"}`;return 0===wC?`about ${ … [truncated]
```

#### 638. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12203` → after: `L12203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12203) · [Before (L12203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12203)

```diff
- var BM = ik(36521);
+ var DF = ZC(36788);
```

#### 639. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12220` → after: `L12220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12220) · [Before (L12220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12220)

```diff
-   return `Moving to ${kk} code\u2026`
+   return `Moving to ${CC} code\u2026`
```

#### 640. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12224` → after: `L12224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12224) · [Before (L12224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12224)

```diff
-   return kk.fromLine === kk.toLine ? `line ${kk.fromLine}` : `lines ${kk.fromLine}-${kk.toLine}`
+   return CC.fromLine === CC.toLine ? `line ${CC.fromLine}` : `lines ${CC.fromLine}-${CC.toLine}`
```

#### 641. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12228-L12229` → after: `L12228-L12229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12228-L12229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12228-L12229) · [Before (L12228-L12229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12228-L12229)

```diff
-   const ek = kk.text.length > 4e3 ? `${kk.text.slice(0,4e3)}\n...` : kk.text;
-   return `The part I picked (${kk.path}, ${ZM(kk)}):\n\`\`\`\n${ek}\n\`\`\``
+   const zC = CC.text.length > 4e3 ? `${CC.text.slice(0,4e3)}\n...` : CC.text;
+   return `The part I picked (${CC.path}, ${UF(CC)}):\n\`\`\`\n${zC}\n\`\`\``
```

#### 642. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12236` → after: `L12236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12236) · [Before (L12236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12236)

```diff
-       return `Explain what this part of my code does, in 2 or 3 short sentences. Don't change any code.\n\n${OM(kk)}`;
+       return `Explain what this part of my code does, in 2 or 3 short sentences. Don't change any code.\n\n${BF(CC)}`;
```

#### 643. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12238` → after: `L12238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12238) · [Before (L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12238)

```diff
-       return `Fix what is wrong in this part of my code. Change only what it needs.\n\n${OM(kk)}`;
+       return `Fix what is wrong in this part of my code. Change only what it needs.\n\n${BF(CC)}`;
```

#### 644. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12240` → after: `L12240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12240) · [Before (L12240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12240)

```diff
-       return `${ek.trim()}\n\nChange only this part of my code, unless more is needed for it to work.\n\n${OM(kk)}`
+       return `${zC.trim()}\n\nChange only this part of my code, unless more is needed for it to work.\n\n${BF(CC)}`
```

#### 645. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12249` → after: `L12249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12249) · [Before (L12249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12249)

```diff
-       return `Explain ${ik}`;
+       return `Explain ${ZC}`;
```

#### 646. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12251` → after: `L12251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12251) · [Before (L12251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12251)

```diff
-       return `Fix ${ik}`;
+       return `Fix ${ZC}`;
```

#### 647. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12253` → after: `L12253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12253) · [Before (L12253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12253)

```diff
-       return `${ek.trim()} (${ik})`
+       return `${zC.trim()} (${ZC})`
```

#### 648. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12256-L12260` → after: `L12256-L12260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12256-L12260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12256-L12260) · [Before (L12256-L12260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12256-L12260)

```diff
- var NM = ik(40957),
-   RM = ik(4707),
-   JM = ik(40936),
-   kK = ik(40950),
-   eK = ik(40945);
+ var VF = ZC(41191),
+   CW = ZC(4696),
+   zW = ZC(41177),
+   ZW = ZC(41188),
+   QW = ZC(41179);
```

#### 649. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12283` → after: `L12283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12283) · [Before (L12283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12283)

```diff
-         ["/globals.d.ts", eK.e],
+         ["/globals.d.ts", QW.b],
```

#### 650. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12286` → after: `L12286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12286) · [Before (L12286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12286)

```diff
-     ik = NM.g(NM.e(fk), [...fk.keys()], sk(), {
+     ZC = VF.h(VF.e(wC), [...wC.keys()], vC(), {
```

#### 651. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12308` → after: `L12308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12308) · [Before (L12308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12308)

```diff
-   return fk(kk), Dk && Oi(Dk, kk) ? Dk : void 0
+   return wC(CC), QC && DZ(QC, CC) ? QC : void 0
```

#### 652. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12327` → after: `L12327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12327) · [Before (L12327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12327)

```diff
-   if (Dk) return `"${Dk}"`;
+   if (QC) return `"${QC}"`;
```

#### 653. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12332` → after: `L12332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12332) · [Before (L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12332)

```diff
-   if (fk.length > 0) return fk.slice(0, 2).map((kk => `"${kk}"`)).join(" or ");
+   if (wC.length > 0) return wC.slice(0, 2).map((CC => `"${CC}"`)).join(" or ");
```

#### 654. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12342` → after: `L12342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12342) · [Before (L12342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12342)

```diff
-   return bk ? `"${bk.option}"` : void 0
+   return nC ? `"${nC.option}"` : void 0
```

#### 655. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12368-L12369` → after: `L12368-L12369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12368-L12369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12368-L12369) · [Before (L12368-L12369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12368-L12369)

```diff
-       ik = null !== (Mk = null === (Kk = kk.split("\n")[ek]) || void 0 === Kk ? void 0 : Kk.trim()) && void 0 !== Mk ? Mk : "",
-       Dk = ik.length > 40 ? `${ik.slice(0,37)}...` : ik,
+       ZC = null !== (FC = null === (WC = CC.split("\n")[zC]) || void 0 === WC ? void 0 : WC.trim()) && void 0 !== FC ? FC : "",
+       QC = ZC.length > 40 ? `${ZC.slice(0,37)}...` : ZC,
```

#### 656. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12371` → after: `L12371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12371) · [Before (L12371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12371)

```diff
-     Pk.add(`Line ${ek+1} stops all of this code from running: "${Dk}" (${fk}).`)
+     oC.add(`Line ${zC+1} stops all of this code from running: "${QC}" (${wC}).`)
```

#### 657. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12379-L12381` → after: `L12379-L12381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12379-L12381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12379-L12381) · [Before (L12379-L12381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12379-L12381)

```diff
-         ik = null !== (Ck = null === (jk = kk.split("\n")[ek]) || void 0 === jk ? void 0 : jk.trim()) && void 0 !== Ck ? Ck : "",
-         Dk = ik.length > 40 ? `${ik.slice(0,37)}...` : ik;
-       Pk.add(`Line ${ek+1} never runs: "${Dk}" comes after a return, which ends the function first.`);
+         ZC = null !== (JC = null === (iC = CC.split("\n")[zC]) || void 0 === iC ? void 0 : iC.trim()) && void 0 !== JC ? JC : "",
+         QC = ZC.length > 40 ? `${ZC.slice(0,37)}...` : ZC;
+       oC.add(`Line ${zC+1} never runs: "${QC}" comes after a return, which ends the function first.`);
```

#### 658. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12386` → after: `L12386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12386) · [Before (L12386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12386)

```diff
-       const ek = ak.start + (null !== (dk = ak.length) && void 0 !== dk ? dk : 0),
+       const zC = uC.start + (null !== (eC = uC.length) && void 0 !== eC ? eC : 0),
```

#### 659. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12389` → after: `L12389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12389) · [Before (L12389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12389)

```diff
-         fk = new RegExp(`^${ik.replaceAll("$","\\$")}\\s*=[^=]`, "m").test(kk),
+         wC = new RegExp(`^${ZC.replaceAll("$","\\$")}\\s*=[^=]`, "m").test(CC),
```

#### 660. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12392-L12393` → after: `L12392-L12393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12392-L12393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12392-L12393) · [Before (L12392-L12393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12392-L12393)

```diff
-         Mk = new RegExp(`//\\s*(?:const|let|var)\\s+${ik.replaceAll("$","\\$")}\\b`).test(kk),
-         Kk = new RegExp(`typeof\\s+${ik.replaceAll("$","\\$")}\\b`).test(kk);
+         FC = new RegExp(`//\\s*(?:const|let|var)\\s+${ZC.replaceAll("$","\\$")}\\b`).test(CC),
+         WC = new RegExp(`typeof\\s+${ZC.replaceAll("$","\\$")}\\b`).test(CC);
```

#### 661. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12398` → after: `L12398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12398) · [Before (L12398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12398)

```diff
-       Pk.add(Uk ? `Line ${nk+1} uses "${ik}", which is never set, so it throws there. Did you mean "${Uk}"?` : `Line ${nk+1} uses "${ik}", which isn't set there, so it throws when that line runs.`);
+       oC.add(gC ? `Line ${MC+1} uses "${ZC}", which is never set, so it throws there. Did you mean "${gC}"?` : `Line ${MC+1} uses "${ZC}", which isn't set there, so it throws when that line runs.`);
```

#### 662. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12404` → after: `L12404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12404) · [Before (L12404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12404)

```diff
-     const ik = ak.start + (null !== (nk = ak.length) && void 0 !== nk ? nk : 0),
+     const ZC = uC.start + (null !== (MC = uC.length) && void 0 !== MC ? MC : 0),
```

#### 663. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12411` → after: `L12411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12411) · [Before (L12411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12411)

```diff
-       Wk = Kk.length > 40 ? `${Kk.slice(0,37)}...` : Kk;
+       rC = WC.length > 40 ? `${WC.slice(0,37)}...` : WC;
```

#### 664. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12415-L12417` → after: `L12415-L12417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12415-L12417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12415-L12417) · [Before (L12415-L12417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12415-L12417)

```diff
-         ik = null !== (Fk = null === kk || void 0 === kk || null === (uk = kk[1]) || void 0 === uk ? void 0 : uk.replace("-", " to ")) && void 0 !== Fk ? Fk : "a different number of",
-         fk = Number(null !== (qk = null === kk || void 0 === kk ? void 0 : kk[2]) && void 0 !== qk ? qk : Dk.arguments.length);
-       Pk.add(`${Sk} needs ${ik} ${"1"===ik?"value":"values"}, but this line gives it ${fk}.`);
+         ZC = null !== (KC = null === CC || void 0 === CC || null === (YC = CC[1]) || void 0 === YC ? void 0 : YC.replace("-", " to ")) && void 0 !== KC ? KC : "a different number of",
+         wC = Number(null !== (dC = null === CC || void 0 === CC ? void 0 : CC[2]) && void 0 !== dC ? dC : QC.arguments.length);
+       oC.add(`${bC} needs ${ZC} ${"1"===ZC?"value":"values"}, but this line gives it ${wC}.`);
```

#### 665. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12426` → after: `L12426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12426) · [Before (L12426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12426)

```diff
-         mk = (null !== (Ik = null === kk || void 0 === kk ? void 0 : kk.properties) && void 0 !== Ik ? Ik : []).flatMap((kk => kk.name && (sk().isIdentifier(kk.name) || sk().isStringLiteral(kk.name)) ? [{
+         qC = (null !== (mC = null === CC || void 0 === CC ? void 0 : CC.properties) && void 0 !== mC ? mC : []).flatMap((CC => CC.name && (vC().isIdentifier(CC.name) || vC().isStringLiteral(CC.name)) ? [{
```

#### 666. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12430` → after: `L12430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12430) · [Before (L12430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12430)

```diff
-         Mk = null !== (zk = null === (Qk = ek.match(/'([^']*)' does not exist/)) || void 0 === Qk ? void 0 : Qk[1]) && void 0 !== zk ? zk : Wk,
+         FC = null !== (HC = null === (EC = zC.match(/'([^']*)' does not exist/)) || void 0 === EC ? void 0 : EC[1]) && void 0 !== HC ? HC : rC,
```

#### 667. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12432` → after: `L12432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12432) · [Before (L12432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12432)

```diff
-         xk = Kk.length > 0 ? Kk : [{
+         NC = WC.length > 0 ? WC : [{
```

#### 668. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12436` → after: `L12436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12436) · [Before (L12436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12436)

```diff
-         nk = ik ? ` It takes ${Ni(rk,ik)}.` : " Check Show Docs for its settings.";
+         MC = ZC ? ` It takes ${LZ(fC,ZC)}.` : " Check Show Docs for its settings.";
```

#### 669. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12442-L12443` → after: `L12442-L12443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12442-L12443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12442-L12443) · [Before (L12442-L12443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12442-L12443)

```diff
-         const kk = (0, Ak.c)(Zr, ek),
-           ik = void 0 !== kk && bk.includes(kk) && !mk.some((ik => ik.name === kk || ik.name !== ek && (0, Ak.c)(Zr, ik.name) === kk));
+         const CC = (0, IC.d)(Lf, zC),
+           ZC = void 0 !== CC && nC.includes(CC) && !qC.some((ZC => ZC.name === CC || ZC.name !== zC && (0, IC.d)(Lf, ZC.name) === CC));
```

#### 670. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12445` → after: `L12445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12445) · [Before (L12445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12445)

```diff
-         void 0 !== fk && rk.getTypeAtLocation(fk).getCallSignatures().length > 0 || bk.includes(ek) || (Dk = ik ? `"${kk}"` : KK(ek, bk)), Pk.add(`${Sk} has no setting called "${ek}".${Dk?` Did you mean ${Dk}?`:nk}`)
+         void 0 !== wC && fC.getTypeAtLocation(wC).getCallSignatures().length > 0 || nC.includes(zC) || (QC = ZC ? `"${CC}"` : MW(zC, nC)), oC.add(`${bC} has no setting called "${zC}".${QC?` Did you mean ${QC}?`:MC}`)
```

#### 671. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12449` → after: `L12449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12449) · [Before (L12449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12449)

```diff
-     const tk = null !== (Uk = null === Mk || void 0 === Mk ? void 0 : Mk.initializer) && void 0 !== Uk ? Uk : fk,
+     const sC = null !== (gC = null === FC || void 0 === FC ? void 0 : FC.initializer) && void 0 !== gC ? gC : wC,
```

#### 672. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12453` → after: `L12453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12453) · [Before (L12453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12453)

```diff
-       Tk = null !== (Hk = null === tk || void 0 === tk ? void 0 : tk.getText(bk)) && void 0 !== Hk ? Hk : Kk,
+       DC = null !== (SC = null === sC || void 0 === sC ? void 0 : sC.getText(nC)) && void 0 !== SC ? SC : WC,
```

#### 673. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12457` → after: `L12457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12457) · [Before (L12457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12457)

```diff
-       const ek = null === (vk = new RegExp(`(?:^|[{,])\\s*${Zk.replaceAll("$","\\$")}\\s*:\\s*(["'])([^"'\\n]*)\\1`, "m").exec(kk)) || void 0 === vk ? void 0 : vk[2];
+       const zC = null === (lC = new RegExp(`(?:^|[{,])\\s*${jC.replaceAll("$","\\$")}\\s*:\\s*(["'])([^"'\\n]*)\\1`, "m").exec(CC)) || void 0 === lC ? void 0 : lC[2];
```

#### 674. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12460` → after: `L12460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12460) · [Before (L12460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12460)

```diff
-         Pk.add(`${Sk} has no ${ck} called "${ek}" (${Tk}).${kk?` Did you mean ${kk}?`:""}`)
+         oC.add(`${bC} has no ${tC} called "${zC}" (${DC}).${CC?` Did you mean ${CC}?`:""}`)
```

#### 675. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12466` → after: `L12466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12466) · [Before (L12466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12466)

```diff
-       const kk = tk && sk().isStringLiteral(tk) ? tk : void 0,
+       const CC = sC && vC().isStringLiteral(sC) ? sC : void 0,
```

#### 676. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12468-L12469` → after: `L12468-L12469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12468-L12469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12468-L12469) · [Before (L12468-L12469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12468-L12469)

```diff
-         ik = kk && !Mk ? `${Sk} has no ${ck} called ${Ek=Wk,Ek.startsWith('"')?Ek:`"${Ek}"`}.` : `${Sk} can't take ${Wk} there.`;
-       Pk.add(`${ik}${ek?` Did you mean ${ek}?`:" Check Show Docs for what it takes."}`);
+         ZC = CC && !FC ? `${bC} has no ${tC} called ${XC=rC,XC.startsWith('"')?XC:`"${XC}"`}.` : `${bC} can't take ${rC} there.`;
+       oC.add(`${ZC}${zC?` Did you mean ${zC}?`:" Check Show Docs for what it takes."}`);
```

#### 677. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12474` → after: `L12474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12474) · [Before (L12474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12474)

```diff
-       Pk.add(`${Sk} needs ${Ok} in ${Wk}: it takes ${Ni(rk,Xk)}.`);
+       oC.add(`${bC} needs ${yC} in ${rC}: it takes ${LZ(fC,TC)}.`);
```

#### 678. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12478` → after: `L12478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/90.js#L12478) · [Before (L12478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/90.js#L12478)

```diff
-       Pk.add(`${Sk} can't take ${Wk} there: it takes ${Ni(rk,Xk)}.`);
+       oC.add(`${bC} can't take ${rC} there: it takes ${LZ(fC,TC)}.`);
```
