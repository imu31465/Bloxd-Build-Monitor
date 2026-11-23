# Changed — Bundle Modifications Report (Part 112 / 137)

- **Updated at**: `2026-11-24T07:07 JST`
- **Part**: `112 / 137` (**461** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 111](part-111.md) · [Part 113 →](part-113.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/fa-renderer.js` (w4ddu.56408518 → 31kiid.1299b0d6 · continued)

- **File**: `bundles/bloxd.io/chunks/js/fa-renderer.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741)

#### 9. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L212` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L212) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L212)

```diff
-       return CC && "object" === MC(CC) && CC.prefix && CC.iconName && CC.icon ? CC : QC.parse.icon ? QC.parse.icon(CC) : null === CC ? null : CC && "object" === MC(CC) && CC.prefix && CC.iconName ? CC : Array.isArray(CC) && 2 === CC.length ? {
+       return kk && "object" === jk(kk) && kk.prefix && kk.iconName && kk.icon ? kk : Xk.parse.icon ? Xk.parse.icon(kk) : null === kk ? null : kk && "object" === jk(kk) && kk.prefix && kk.iconName ? kk : Array.isArray(kk) && 2 === kk.length ? {
```

#### 10. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L337` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L337) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L337)

```diff
-                 return wC.startsWith("webkit") ? CC[(ZC = wC, ZC.charAt(0).toUpperCase() + ZC.slice(1))] = bC : CC[wC] = bC, CC
+                 return Tk.startsWith("webkit") ? kk[(Ik = Tk, Ik.charAt(0).toUpperCase() + Ik.slice(1))] = ik : kk[Tk] = ik, kk
```

#### 11. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L341` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L341)

```diff
-               0 === zC.indexOf("aria-") || 0 === zC.indexOf("data-") ? CC.attrs[zC.toLowerCase()] = QC : CC.attrs[GC(zC)] = QC
+               0 === Fk.indexOf("aria-") || 0 === Fk.indexOf("data-") ? kk.attrs[Fk.toLowerCase()] = Xk : kk.attrs[xk(Fk)] = Xk
```

#### 12. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L369-L370` → after: `L369-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L369-L370) · [Before (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L369-L370)

```diff
-   4911: (CC, zC, ZC) => {
-     var QC = ZC(4915);
+   4953: (kk, Fk, Ik) => {
+     var Xk = Ik(4960);
```

#### 13. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L413-L414` → after: `L413-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L413-L414) · [Before (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L413-L414)

```diff
-   4903: (CC, zC, ZC) => {
-     CC.exports = ZC(4911)()
+   4946: (kk, Fk, Ik) => {
+     kk.exports = Ik(4953)()
```

#### 14. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L416` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L416) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L416)

```diff
-   4915: CC => {
+   4960: kk => {
```

#### 15. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L419)

```diff
-   6670: (CC, zC, ZC) => {
+   6656: (kk, Fk, Ik) => {
```

#### 16. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L565` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L565) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L565)

```diff
-       return "symbol" == typeof zC ? zC : zC + ""
+       return "symbol" == typeof Fk ? Fk : Fk + ""
```

#### 17. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1586` → after: `L1586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L1586) · [Before (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L1586)

```diff
-         ZC = void 0 === zC ? mC : zC,
+         Ik = void 0 === Fk ? pk : Fk,
```

#### 18. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1590` → after: `L1590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L1590) · [Before (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L1590)

```diff
-         bC = CC in wZ.styles ? CC : null;
+         ik = kk in iI.styles ? kk : null;
```

#### 19. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1631` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L1631) · [Before (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L1631)

```diff
-             QC ? ZC = QC : CC && zC.push(CC)
+             Xk ? Ik = Xk : kk && Fk.push(kk)
```

#### 20. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1834` → after: `L1834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L1834) · [Before (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L1834)

```diff
-           zC = void 0 === CC ? iC : CC;
+           Fk = void 0 === kk ? zk : kk;
```

#### 21. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1871` → after: `L1871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L1871) · [Before (L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L1871)

```diff
-         MC = QC.found ? QC : ZC,
+         jk = Xk.found ? Xk : Ik,
```

#### 22. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2056` → after: `L2056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L2056) · [Before (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L2056)

```diff
-       nQ = az.measurePerformance && eC && eC.mark && eC.measure ? eC : {
+       lX = BF.measurePerformance && vk && vk.mark && vk.measure ? vk : {
```

#### 23. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2086` → after: `L2086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L2086) · [Before (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L2086)

```diff
-         ZC = void 0 === zC ? "svg" === CC.tag ? NQ : MQ : zC;
+         Ik = void 0 === Fk ? "svg" === kk.tag ? jX : eX : Fk;
```

#### 24. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2137` → after: `L2137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L2137) · [Before (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L2137)

```diff
-       var ZC = "function" === typeof zC ? zC : FQ;
+       var Ik = "function" === typeof Fk ? Fk : tX;
```

#### 25. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2162` → after: `L2162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L2162) · [Before (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L2162)

```diff
-           ZC = void 0 === zC ? FQ : zC,
+           Ik = void 0 === Fk ? tX : Fk,
```

#### 26. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2164` → after: `L2164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L2164) · [Before (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L2164)

```diff
-           wC = void 0 === QC ? FQ : QC,
+           Tk = void 0 === Xk ? tX : Xk,
```

#### 27. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2166` → after: `L2166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L2166) · [Before (L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L2166)

```diff
-           nC = void 0 === bC ? FQ : bC,
+           yk = void 0 === ik ? tX : ik,
```

#### 28. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2168` → after: `L2168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L2168) · [Before (L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L2168)

```diff
-           oC = void 0 === fC ? iC : fC;
+           ak = void 0 === lk ? zk : lk;
```

#### 29. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2307` → after: `L2307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L2307) · [Before (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L2307)

```diff
-           QC = void 0 === ZC ? jz : ZC,
+           Xk = void 0 === Ik ? AF : Ik,
```

#### 30. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2359` → after: `L2359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L2359) · [Before (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L2359)

```diff
-                 QC = (zC || {}).icon ? zC : yZ(zC || {}),
+                 Xk = (Fk || {}).icon ? Fk : gI(Fk || {}),
```

#### 31. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2361` → after: `L2361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L2361) · [Before (L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L2361)

```diff
-               return wC && (wC = (wC || {}).icon ? wC : yZ(wC || {})), CC(QC, oC(oC({}, ZC), {}, {
+               return Tk && (Tk = (Tk || {}).icon ? Tk : gI(Tk || {})), kk(Xk, ak(ak({}, Ik), {}, {
```

#### 32. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2378` → after: `L2378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L2378) · [Before (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L2378)

```diff
-               ZC = void 0 === zC ? iC : zC,
+               Ik = void 0 === Fk ? zk : Fk,
```

#### 33. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2518` → after: `L2518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L2518) · [Before (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L2518)

```diff
-                 QC = void 0 === ZC ? jz : ZC,
+                 Xk = void 0 === Ik ? AF : Ik,
```

#### 34. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2821` → after: `L2821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L2821) · [Before (L2821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L2821)

```diff
-           return CC.includes("(") ? CC : CC.split(",").map((function(CC) {
+           return kk.includes("(") ? kk : kk.split(",").map((function(kk) {
```

#### 35. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2914` → after: `L2914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L2914) · [Before (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L2914)

```diff
-               ZC = void 0 === zC ? iC : zC;
+               Ik = void 0 === Fk ? zk : Fk;
```

#### 36. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L3280` → after: `L3280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R3280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L3280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/fa-renderer.js#L3280) · [Before (L3280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/fa-renderer.js#L3280)

```diff
-   6685: CC => {
+   6665: kk => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/frameDebug.js` (w4ddu.56408518 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/frameDebug.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084)

#### 1. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/frameDebug.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/frameDebug.js#L4)

```diff
-   34014: (CC, zC, ZC) => {
+   34020: (kk, Fk, Ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/frameDebug.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/frameDebug.js#L14)

```diff
-       e: () => QC
+       d: () => Xk
```

#### 3. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/frameDebug.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/frameDebug.js#L17)

```diff
-   34008: (CC, zC, ZC) => {
+   34018: (kk, Fk, Ik) => {
```

#### 4. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L28-L33` → after: `L28-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/frameDebug.js#L28-L33) · [Before (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/frameDebug.js#L28-L33)

```diff
-     var QC = ZC(4733),
-       wC = ZC(4719),
-       bC = ZC(34014),
-       nC = ZC(2800),
-       fC = ZC(1045),
-       oC = ZC(2947);
+     var Xk = Ik(4799),
+       Tk = Ik(4794),
+       ik = Ik(34020),
+       yk = Ik(2744),
+       lk = Ik(1084),
+       ak = Ik(2877);
```

#### 5. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/frameDebug.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/frameDebug.js#L38)

```diff
-           this.add(zC.startTime, zC.duration, zC.blockingDuration, (0, fC.p)(zC))
+           this.add(Fk.startTime, Fk.duration, Fk.blockingDuration, (0, lk.m)(Fk))
```

#### 6. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/frameDebug.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/frameDebug.js#L41)

```diff
-         }, null !== (0, oC.b)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, oC.b)("longtask", this.onLongTask) ? "longtask" : null
+         }, null !== (0, ak.d)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, ak.d)("longtask", this.onLongTask) ? "longtask" : null
```

#### 7. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L57-L61` → after: `L57-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L57-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/frameDebug.js#L57-L61) · [Before (L57-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/frameDebug.js#L57-L61)

```diff
-         const nC = "loaf" === this.kind && ZC > 0 ? ` (blocking ${wC.toFixed(0)}, script ${bC.toFixed(0)})` : "";
-         return `${ZC} ${this.kind} ${QC.toFixed(0)} ms${nC}`
-       }
-     }
-     var FC = ZC(34016);
+         const yk = "loaf" === this.kind && Ik > 0 ? ` (blocking ${Tk.toFixed(0)}, script ${ik.toFixed(0)})` : "";
+         return `${Ik} ${this.kind} ${Xk.toFixed(0)} ms${yk}`
+       }
+     }
+     var Lk = Ik(34023);
```

#### 8. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/frameDebug.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/frameDebug.js#L64)

```diff
-       return zC < 0 || CC < zC ? CC : CC - zC
+       return Fk < 0 || kk < Fk ? kk : kk - Fk
```

#### 9. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L111-L114` → after: `L111-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L111-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/frameDebug.js#L111-L114) · [Before (L111-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/frameDebug.js#L111-L114)

```diff
-             const ZC = [`chunks +${WC(CC.chunksReceived,zC.chunksReceived)} got`, `+${WC(CC.chunksCancelled,zC.chunksCancelled)} cancelled`];
-             CC.chunksStored >= 0 && ZC.push(`${CC.chunksStored} stored`);
-             const QC = `jobs +${WC(CC.jobsSent,zC.jobsSent)} sent, +${WC(CC.jobsDone,zC.jobsDone)} done, ${CC.jobsInFlight} in flight`;
-             return `${ZC.join(", ")}; ${QC}; workers ${CC.workersLive} live, ${CC.workersRetired} retired`
+             const Ik = [`chunks +${tk(kk.chunksReceived,Fk.chunksReceived)} got`, `+${tk(kk.chunksCancelled,Fk.chunksCancelled)} cancelled`];
+             kk.chunksStored >= 0 && Ik.push(`${kk.chunksStored} stored`);
+             const Xk = `jobs +${tk(kk.jobsSent,Fk.jobsSent)} sent, +${tk(kk.jobsDone,Fk.jobsDone)} done, ${kk.jobsInFlight} in flight`;
+             return `${Ik.join(", ")}; ${Xk}; workers ${kk.workersLive} live, ${kk.workersRetired} retired`
```

#### 10. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/frameDebug.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/frameDebug.js#L123)

```diff
-         if ((nC > 0 || fC > 0) && (ZC.push((0, FC.f)({
+         if ((yk > 0 || lk > 0) && (Ik.push((0, Lk.e)({
```

#### 11. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/frameDebug.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/frameDebug.js#L127)

```diff
-         const oC = `load ${Math.round((CC-this.lastMs)/1e3)}s: ${ZC.join("; ")}`;
+         const ak = `load ${Math.round((kk-this.lastMs)/1e3)}s: ${Ik.join("; ")}`;
```

#### 12. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L144` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/frameDebug.js#L144) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/frameDebug.js#L144)

```diff
-         return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${CC} other, longest ${this.longest} in ${(0,bC.b)(this.longestMs)} ms at ${this.longestAhead} ahead`
+         return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${kk} other, longest ${this.longest} in ${(0,ik.b)(this.longestMs)} ms at ${this.longestAhead} ahead`
```

#### 13. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L182` → after: `L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/frameDebug.js#L182) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/frameDebug.js#L182)

```diff
-           this.ahead = CC.headerWord(QC.O.Pacing) & QC.kb.AheadMask, this.frame(zC, ZC, wC, bC, CC.headerWord(QC.O.RenderUs) / 1e3, CC.headerWord(QC.O.TicksRun), nC, CC.headerWord(QC.O.RenderPending))
+           this.ahead = kk.headerWord(Xk.F.Pacing) & Xk.cb.AheadMask, this.frame(Fk, Ik, Tk, ik, kk.headerWord(Xk.F.RenderUs) / 1e3, kk.headerWord(Xk.F.TicksRun), yk, kk.headerWord(Xk.F.RenderPending))
```

#### 14. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L199-L200` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/frameDebug.js#L199-L200) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/frameDebug.js#L199-L200)

```diff
-             const QC = [`long frame ${(0,bC.b)(ZC.intervalMs)} ms ending at ${(0,bC.b)(ZC.endMs)} ms: main ${(0,bC.b)(ZC.mainMs)} (render ${(0,bC.b)(ZC.renderMs)}, ${ZC.ticks} ticks ${(0,bC.b)(ZC.tickMs)}), outside ${(0,bC.b)(ZC.intervalMs-ZC.mainMs)}`, `${ZC.rafs} rafs`];
-             ZC.pendingBefore >= 0 && QC.push(`pending ${ZC.pendingBefore} -> ${ZC.pendingAfter} (max ${ZC.pendingMax})`), QC.push(this.longTasks.describe(ZC.endMs - ZC.intervalMs, ZC.endMs)), (0, nC.i)("frame", QC.join("; "))
+             const Xk = [`long frame ${(0,ik.b)(Ik.intervalMs)} ms ending at ${(0,ik.b)(Ik.endMs)} ms: main ${(0,ik.b)(Ik.mainMs)} (render ${(0,ik.b)(Ik.renderMs)}, ${Ik.ticks} ticks ${(0,ik.b)(Ik.tickMs)}), outside ${(0,ik.b)(Ik.intervalMs-Ik.mainMs)}`, `${Ik.rafs} rafs`];
+             Ik.pendingBefore >= 0 && Xk.push(`pending ${Ik.pendingBefore} -> ${Ik.pendingAfter} (max ${Ik.pendingMax})`), Xk.push(this.longTasks.describe(Ik.endMs - Ik.intervalMs, Ik.endMs)), (0, yk.g)("frame", Xk.join("; "))
```

#### 15. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/frameDebug.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/frameDebug.js#L210)

```diff
-             null !== zC && (0, nC.i)("frame", zC)
+             null !== Fk && (0, yk.g)("frame", Fk)
```

#### 16. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L217` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/frameDebug.js#L217) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/frameDebug.js#L217)

```diff
-         this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, nC.i)("frame", `start: ${CC} client, ${zC}, dpr ${window.devicePixelRatio}, long tasks ${null!==(ZC=this.longTasks.kind)&& … [truncated]
+         this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, yk.g)("frame", `start: ${kk} client, ${Fk}, dpr ${window.devicePixelRatio}, long tasks ${null!==(Ik=this.longTasks.kind)&& … [truncated]
```

#### 17. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L231` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/frameDebug.js#L231) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/frameDebug.js#L231)

```diff
-         this.flushTimer = setTimeout(this.flush, CC ? SC : gC)
+         this.flushTimer = setTimeout(this.flush, kk ? wk : ek)
```

#### 18. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/frameDebug.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/frameDebug.js#L257)

```diff
-         if (0 === zC.frames) return zC.undrawn.count > 0 && (0, nC.i)("frame", `${CC}s: no frames drawn, ${zC.undrawn.describe()}; pending max ${ZC.pendingMax}`), zC.undrawn.count > 0;
+         if (0 === Fk.frames) return Fk.undrawn.count > 0 && (0, yk.g)("frame", `${kk}s: no frames drawn, ${Fk.undrawn.describe()}; pending max ${Ik.pendingMax}`), Fk.undrawn.count > 0;
```

#### 19. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L259-L260` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/frameDebug.js#L259-L260) · [Before (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/frameDebug.js#L259-L260)

```diff
-           wC = [`${zC.frames} frames, median ${(0,bC.b)((0,bC.e)(QC,.5))} p95 ${(0,bC.b)((0,bC.e)(QC,.95))} max ${(0,bC.b)(zC.maxMs)} ms, ${zC.slow} over 50, ${zC.shown+zC.dropped} over ${PC}`, `${ZC.rafs} rafs, ${zC.undrawn.describe()}`, `main ${(0,bC.b)(ZC.mainMs)} ms (render $ … [truncated]
-         return ZC.pendingMax >= 0 && wC.push(`pending max ${ZC.pendingMax}`), this.ahead >= 0 && wC.push(`${this.ahead} frames ahead`), wC.push(`outliers ${zC.shown} logged, ${zC.dropped} dropped`), (0, nC.i)("frame", `${CC}s: ${wC.join("; ")}`), !0
+           Tk = [`${Fk.frames} frames, median ${(0,ik.b)((0,ik.d)(Xk,.5))} p95 ${(0,ik.b)((0,ik.d)(Xk,.95))} max ${(0,ik.b)(Fk.maxMs)} ms, ${Fk.slow} over 50, ${Fk.shown+Fk.dropped} over ${Jk}`, `${Ik.rafs} rafs, ${Fk.undrawn.describe()}`, `main ${(0,ik.b)(Ik.mainMs)} ms (render $ … [truncated]
+         return Ik.pendingMax >= 0 && Tk.push(`pending max ${Ik.pendingMax}`), this.ahead >= 0 && Tk.push(`${this.ahead} frames ahead`), Tk.push(`outliers ${Fk.shown} logged, ${Fk.dropped} dropped`), (0, yk.g)("frame", `${kk}s: ${Tk.join("; ")}`), !0
```

#### 20. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L269` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/frameDebug.js#L269) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/frameDebug.js#L269)

```diff
-   34016: (CC, zC, ZC) => {
+   34023: (kk, Fk, Ik) => {
```

#### 21. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L271` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/frameDebug.js#L271) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/frameDebug.js#L271)

```diff
-       return `hidden ${CC.changes} changes, ${Math.round(CC.hiddenMs)} ms`
+       return `hidden ${kk.changes} changes, ${Math.round(kk.hiddenMs)} ms`
```

#### 22. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/frameDebug.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/frameDebug.js#L275)

```diff
-       f: () => QC
+       e: () => Xk
```

#### 23. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/frameDebug.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/frameDebug.js#L282)

```diff
-         this.changes++, document.hidden ? this.hiddenSinceMs = CC : this.hiddenSinceMs >= 0 && (this.hiddenMs += CC - this.hiddenSinceMs, this.hiddenSinceMs = -1)
+         this.changes++, document.hidden ? this.hiddenSinceMs = kk : this.hiddenSinceMs >= 0 && (this.hiddenMs += kk - this.hiddenSinceMs, this.hiddenSinceMs = -1)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/icons-brands.js` (w4ddu.56408518 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/icons-brands.js` (30 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621)

#### 1. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L4)

```diff
-   8026: (CC, zC) => {
+   8013: (kk, Fk) => {
```

#### 2. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L13)

```diff
-     }, zC.g = zC.d
+     }, Fk.e = Fk.d
```

#### 3. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L15)

```diff
-   8029: (CC, zC) => {
+   8017: (kk, Fk) => {
```

#### 4. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L20)

```diff
-     zC.b = {
+     Fk.c = {
```

#### 5. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L24)

```diff
-     }, zC.d = zC.b
+     }, Fk.f = Fk.c
```

#### 6. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L26)

```diff
-   8038: (CC, zC) => {
+   8025: (kk, Fk) => {
```

#### 7. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L31)

```diff
-     zC.e = {
+     Fk.b = {
```

#### 8. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L35)

```diff
-     }, zC.f = zC.e
+     }, Fk.c = Fk.b
```

#### 9. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L37)

```diff
-   8047: (CC, zC) => {
+   8029: (kk, Fk) => {
```

#### 10. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L42)

```diff
-     zC.b = {
+     Fk.e = {
```

#### 11. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L46` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L46) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L46)

```diff
-     }, zC.f = zC.b
+     }, Fk.h = Fk.e
```

#### 12. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L48` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L48) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L48)

```diff
-   8050: (CC, zC) => {
+   8035: (kk, Fk) => {
```

#### 13. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L57` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L57) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L57)

```diff
-     }, zC.e = zC.b
+     }, Fk.d = Fk.b
```

#### 14. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L59)

```diff
-   8053: (CC, zC) => {
+   8040: (kk, Fk) => {
```

#### 15. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L64)

```diff
-     zC.e = {
+     Fk.c = {
```

#### 16. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L68)

```diff
-     }, zC.i = zC.e
+     }, Fk.e = Fk.c
```

#### 17. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L70` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L70) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L70)

```diff
-   8057: (CC, zC) => {
+   8042: (kk, Fk) => {
```

#### 18. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L79` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L101) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L79)

```diff
-     }, zC.g = zC.e
+     }, Fk.f = Fk.e
```

#### 19. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L81-L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L103) · [Before (L81-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L81-L103)

```diff
-   8066: (CC, zC) => {
-     var ZC = "twitch",
-       QC = [],
-       wC = "f1e8",
-       bC = "M359.4 103.5l-38.6 0 0 109.7 38.6 0 0-109.7zM253.2 103l-38.6 0 0 109.8 38.6 0 0-109.8zM89 0l-96.5 91.4 0 329.2 115.8 0 0 91.4 96.5-91.4 77.3 0 173.8-164.6 0-256-366.9 0zM417.3 237.8l-77.2 73.1-77.2 0-67.6 64 0-64-86.9 0 0-274.3 308.9 0 0 201.2z";
-     zC.d = {
-       prefix: "fab",
-       iconName: ZC,
-       icon: [448, 512, QC, wC, bC]
-     }, zC.g = zC.d
-   },
-   8069: (CC, zC) => {
-     var ZC = "windows",
-       QC = [],
-       wC = "f17a",
-       bC = "M0 93.7l183.6-25.3 0 177.4-183.6 0 0-152.1zM0 418.3l183.6 25.3 0-175.2-183.6 0 0 149.9zm203.8 28l244.2 33.7 0-211.6-244.2 0 0 177.9zm0-380.6l0 180.1 244.2 0 0-213.8-244.2 33.7z";
- ... (7 more removed lines; see GitHub link above)
+   8060: (kk, Fk) => {
```

#### 20. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L108` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L108) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L108)

```diff
-     zC.c = {
+     Fk.b = {
```

#### 21. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L112)

```diff
-     }, zC.d = zC.c
+     }, Fk.f = Fk.b
```

#### 22. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L114` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L114) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L114)

```diff
-   8078: (CC, zC) => {
+   8062: (kk, Fk) => {
```

#### 23. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L119` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L119)

```diff
-     zC.c = {
+     Fk.d = {
```

#### 24. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L123)

```diff
-     }, zC.f = zC.c
+     }, Fk.f = Fk.d
```

#### 25. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L125)

```diff
-   8017: (CC, zC, ZC) => {
+   8008: (kk, Fk, Ik) => {
```

#### 26. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L129` → after: `L129-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L129-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L129-L131) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L129)

```diff
-     var QC = ZC(8026),
+     var Xk = Ik(8013),
+       Tk = Ik(8017),
+       ik = Ik(8025),
```

#### 27. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L131-L132` → after: `L133-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L133-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L133-L135) · [Before (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L131-L132)

```diff
-       bC = ZC(8038),
-       nC = ZC(8047),
+       lk = Ik(8035),
+       ak = Ik(8040),
+       qk = Ik(8042),
```

#### 28. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L134-L139` → after: `L137-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L137-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L137-L139) · [Before (L134-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L134-L139)

```diff
-       oC = ZC(8053),
-       qC = ZC(8057),
-       FC = ZC(8066),
-       WC = ZC(8069),
-       NC = ZC(8076),
-       MC = ZC(8078);
+       tk = Ik(8052),
+       Zk = Ik(8060),
+       jk = Ik(8062);
```

#### 29. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L141-L147` → after: `L141-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L141-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L141-L147) · [Before (L141-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L141-L147)

```diff
-       apple: QC.g,
-       chrome: wC.d,
-       discord: bC.f,
-       "google-play": nC.f,
-       instagram: fC.e,
-       "reddit-alien": oC.i,
-       tiktok: qC.g,
+       apple: Xk.e,
+       chrome: Tk.f,
+       discord: ik.c,
+       "google-play": yk.h,
+       instagram: lk.d,
+       "reddit-alien": ak.e,
+       tiktok: qk.c,
```

#### 30. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L149-L150` → after: `L149-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-brands.js#L149-L150) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-brands.js#L149-L150)

```diff
-       windows: WC.h,
-       "x-twitter": NC.d,
+       windows: tk.f,
+       "x-twitter": Zk.f,
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/icons-duotone.js` (w4ddu.56408518 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/icons-duotone.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd)

#### 1. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-duotone.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-duotone.js#L4)

```diff
-   8004: (CC, zC) => {
+   7997: (kk, Fk) => {
```

#### 2. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-duotone.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-duotone.js#L9)

```diff
-     zC.e = {
+     Fk.b = {
```

#### 3. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-duotone.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-duotone.js#L13)

```diff
-     }, zC.g = zC.e
+     }, Fk.c = Fk.b
```

#### 4. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-duotone.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-duotone.js#L15)

```diff
-   8010: (CC, zC) => {
+   8001: (kk, Fk) => {
```

#### 5. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-duotone.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-duotone.js#L20)

```diff
-     zC.b = {
+     Fk.c = {
```

#### 6. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-duotone.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-duotone.js#L24)

```diff
-     }, zC.d = zC.b
+     }, Fk.d = Fk.c
```

#### 7. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-duotone.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-duotone.js#L26)

```diff
-   8001: (CC, zC, ZC) => {
+   7990: (kk, Fk, Ik) => {
```

#### 8. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-duotone.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-duotone.js#L30-L31)

```diff
-     var QC = ZC(8004),
-       wC = ZC(8010);
+     var Xk = Ik(7997),
+       Tk = Ik(8001);
```

#### 9. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-duotone.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-duotone.js#L33)

```diff
-       "hat-santa": QC.g,
+       "hat-santa": Xk.c,
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/icons-regular.js` (w4ddu.56408518 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/icons-regular.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8)

#### 1. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-regular.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-regular.js#L4)

```diff
-   7975: (CC, zC) => {
+   7954: (kk, Fk) => {
```

#### 2. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-regular.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-regular.js#L9)

```diff
-     zC.c = {
+     Fk.b = {
```

#### 3. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-regular.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-regular.js#L13)

```diff
-     }, zC.f = zC.c
+     }, Fk.e = Fk.b
```

#### 4. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-regular.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-regular.js#L15)

```diff
-   7977: (CC, zC) => {
+   7961: (kk, Fk) => {
```

#### 5. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-regular.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-regular.js#L20)

```diff
-     zC.c = {
+     Fk.e = {
```

#### 6. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-regular.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-regular.js#L24)

```diff
-     }, zC.e = zC.c
+     }, Fk.i = Fk.e
```

#### 7. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-regular.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-regular.js#L26)

```diff
-   7981: (CC, zC) => {
+   7970: (kk, Fk) => {
```

#### 8. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L37-L39` → after: `L37-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L37-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-regular.js#L37-L39) · [Before (L37-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-regular.js#L37-L39)

```diff
-   7989: (CC, zC, ZC) => {
-     var QC = ZC(7994);
-     zC.d = {
+   7976: (kk, Fk, Ik) => {
+     var Xk = Ik(7983);
+     Fk.e = {
```

#### 9. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-regular.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-regular.js#L43)

```diff
-     }, zC.e = zC.d, QC.prefix, QC.iconName, QC.width, QC.height, QC.aliases, QC.unicode, QC.svgPathData, QC.aliases
+     }, Fk.h = Fk.e, Xk.prefix, Xk.iconName, Xk.width, Xk.height, Xk.aliases, Xk.unicode, Xk.svgPathData, Xk.aliases
```

#### 10. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-regular.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-regular.js#L45)

```diff
-   7994: (CC, zC) => {
+   7983: (kk, Fk) => {
```

#### 11. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-regular.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-regular.js#L59)

```diff
-   7972: (CC, zC, ZC) => {
+   7946: (kk, Fk, Ik) => {
```

#### 12. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L63-L67` → after: `L63-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L63-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-regular.js#L63-L67) · [Before (L63-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-regular.js#L63-L67)

```diff
-     var QC = ZC(7975),
-       wC = ZC(7977),
-       bC = ZC(7981),
-       nC = ZC(7989),
-       fC = ZC(7994);
+     var Xk = Ik(7954),
+       Tk = Ik(7961),
+       ik = Ik(7970),
+       yk = Ik(7976),
+       lk = Ik(7983);
```

#### 13. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L69-L70` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-regular.js#L69-L70) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-regular.js#L69-L70)

```diff
-       copy: QC.f,
-       flag: wC.e,
+       copy: Xk.e,
+       flag: Tk.i,
```

#### 14. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L72` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-regular.js#L72) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-regular.js#L72)

```diff
-       "user-friends": nC.e,
+       "user-friends": yk.h,
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/icons-solid.js` (w4ddu.56408518 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/icons-solid.js` (76 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6)

#### 1. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L4)

```diff
-   6699: (CC, zC, ZC) => {
+   6673: (kk, Fk, Ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L8-L10` → after: `L8-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L8-L13) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L8-L10)

```diff
-     var QC = ZC(6704),
-       wC = ZC(6711),
-       bC = ZC(6726),
+     var Xk = Ik(6681),
+       Tk = Ik(6695),
+       ik = Ik(6708),
+       yk = Ik(6716),
+       lk = Ik(6699),
+       ak = Ik(6724),
```

#### 3. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L12-L23` → after: `L15-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L15-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L15-L19) · [Before (L12-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L12-L23)

```diff
-       fC = ZC(6717),
-       oC = ZC(6734),
-       qC = ZC(6741),
-       FC = ZC(6746),
-       WC = ZC(6748),
-       NC = ZC(6750),
-       MC = ZC(6755),
-       gC = ZC(6757),
-       SC = ZC(6764),
-       pC = ZC(6769),
-       PC = ZC(6778),
-       GC = ZC(6762),
+       Lk = Ik(6738),
+       tk = Ik(6744),
+       Zk = Ik(6753),
+       jk = Ik(6761),
+       ek = Ik(6768),
```

#### 4. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L28-L30` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L22-L25) · [Before (L28-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L28-L30)

```diff
-       IC = ZC(6790),
-       iC = ZC(6797),
-       vC = ZC(6803),
+       Jk = Ik(6792),
+       xk = Ik(6775),
+       Pk = Ik(6799),
+       Kk = Ik(6802),
```

#### 5. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L32-L33` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L27) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L32-L33)

```diff
-       hC = ZC(6810),
-       KC = ZC(6816),
+       sk = Ik(6815),
```

#### 6. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L35` → after: `L29-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L29-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L29-L30) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L35)

```diff
-       dC = ZC(6825),
+       zk = Ik(6827),
+       Sk = Ik(6831),
```

#### 7. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L37-L38` → after: `L32-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L32-L33) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L37-L38)

```diff
-       HC = ZC(6840),
-       EC = ZC(6846),
+       Ek = Ik(6838),
+       Ok = Ik(6842),
```

#### 8. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L42-L54` → after: `L36-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L36-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L36-L52) · [Before (L42-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L42-L54)

```diff
-       uC = ZC(6863),
-       rC = ZC(6868),
-       sC = ZC(6877),
-       TC = ZC(6884),
-       aC = ZC(6888),
-       tC = ZC(1017),
-       DC = ZC(6893),
-       jC = ZC(6899),
-       yC = ZC(6905),
-       LC = ZC(6912),
-       UC = ZC(6921),
-       BC = ZC(6928),
-       OC = ZC(6930),
+       pk = Ik(6862),
+       uk = Ik(6864),
+       bk = Ik(6867),
+       Rk = Ik(6872),
+       Uk = Ik(6876),
+       Ck = Ik(6883),
+       Nk = Ik(6886),
+       ck = Ik(6895),
+       Wk = Ik(6897),
+       fk = Ik(6901),
+       Bk = Ik(6906),
+       dk = Ik(1072),
+       Yk = Ik(6911),
+       Ak = Ik(6918),
+       gk = Ik(6927),
+       mk = Ik(6934),
+ ... (1 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L57-L65` → after: `L55-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L55-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L55-L65) · [Before (L57-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L57-L65)

```diff
-       Cz = ZC(6953),
-       zz = ZC(6962),
-       Zz = ZC(6971),
-       Qz = ZC(6974),
-       wz = ZC(6979),
-       bz = ZC(6988),
-       nz = ZC(6997),
-       fz = ZC(7002),
-       oz = ZC(7014),
+       Mk = Ik(6951),
+       kF = Ik(6960),
+       FF = Ik(6965),
+       IF = Ik(6967),
+       XF = Ik(6969),
+       TF = Ik(6975),
+       iF = Ik(6977),
+       yF = Ik(6982),
+       lF = Ik(6995),
+       aF = Ik(7e3),
+       qF = Ik(7009),
```

#### 10. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L67-L69` → after: `L67-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L67-L69) · [Before (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L67-L69)

```diff
-       Fz = ZC(7023),
-       Wz = ZC(7026),
-       Nz = ZC(7037),
+       tF = Ik(7021),
+       ZF = Ik(7027),
+       jF = Ik(7033),
```

#### 11. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L73-L79` → after: `L73-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L73-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L73-L80) · [Before (L73-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L73-L79)

```diff
-       pz = ZC(7072),
-       Pz = ZC(7077),
-       Gz = ZC(7082),
-       Rz = ZC(7088),
-       Az = ZC(7093),
-       xz = ZC(7008),
-       Jz = ZC(7102),
+       JF = Ik(7065),
+       xF = Ik(7071),
+       PF = Ik(7078),
+       KF = Ik(7086),
+       QF = Ik(7094),
+       sF = Ik(7007),
+       VF = Ik(7100),
+       zF = Ik(7105),
```

#### 12. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L83-L94` → after: `L83-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L83-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L83-L95) · [Before (L83-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L83-L94)

```diff
-       ez = ZC(7122),
-       hz = ZC(7125),
-       Kz = ZC(7139),
-       Yz = ZC(7131),
-       dz = ZC(7151),
-       mz = ZC(7160),
-       Hz = ZC(7168),
-       Ez = ZC(7173),
-       lz = ZC(7178),
-       Xz = ZC(7187),
-       cz = ZC(7194),
-       uz = ZC(7198),
+       vF = Ik(7121),
+       EF = Ik(7126),
+       OF = Ik(7133),
+       nF = Ik(7129),
+       GF = Ik(7149),
+       pF = Ik(7154),
+       uF = Ik(7158),
+       bF = Ik(7165),
+       RF = Ik(7174),
+       UF = Ik(7181),
+       CF = Ik(7185),
+       NF = Ik(7192),
+       cF = Ik(7196),
```

#### 13. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L96-L102` → after: `L97-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L97-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L97-L107) · [Before (L96-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L96-L102)

```diff
-       sz = ZC(7210),
-       Tz = ZC(7219),
-       az = ZC(7225),
-       tz = ZC(6909),
-       Dz = ZC(7230),
-       jz = ZC(7232),
-       yz = ZC(7241),
+       fF = Ik(7212),
+       BF = Ik(7214),
+       dF = Ik(6929),
+       YF = Ik(7218),
+       AF = Ik(7224),
+       gF = Ik(7226),
+       mF = Ik(7233),
+       hF = Ik(7235),
+       rF = Ik(7172),
+       DF = Ik(7239),
+       MF = Ik(7245),
```

#### 14. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L104-L108` → after: `L109-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L109-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L109-L116) · [Before (L104-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L104-L108)

```diff
-       Uz = ZC(7254),
-       Bz = ZC(7175),
-       Oz = ZC(7257),
-       kz = ZC(7266),
-       Vz = ZC(7275),
+       FI = Ik(7252),
+       II = Ik(7258),
+       XI = Ik(7265),
+       TI = Ik(7272),
+       iI = Ik(7288),
+       yI = Ik(7295),
+       lI = Ik(7299),
+       aI = Ik(7302),
```

#### 15. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L110-L117` → after: `L118-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L118-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L118-L122) · [Before (L110-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L110-L117)

```diff
-       zZ = ZC(7290),
-       ZZ = ZC(7296),
-       QZ = ZC(7304),
-       wZ = ZC(7317),
-       bZ = ZC(7321),
-       nZ = ZC(7325),
-       fZ = ZC(7333),
-       oZ = ZC(7308),
+       LI = Ik(7307),
+       tI = Ik(7310),
+       ZI = Ik(7319),
+       jI = Ik(7323),
+       eI = Ik(7332),
```

#### 16. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L120-L126` → after: `L125-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L125-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L125-L133) · [Before (L120-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L120-L126)

```diff
-       WZ = ZC(7356),
-       NZ = ZC(7362),
-       MZ = ZC(7368),
-       gZ = ZC(7372),
-       SZ = ZC(7375),
-       pZ = ZC(7380),
-       PZ = ZC(7387),
+       JI = Ik(7352),
+       xI = Ik(7360),
+       PI = Ik(7363),
+       KI = Ik(7367),
+       QI = Ik(7369),
+       sI = Ik(7374),
+       VI = Ik(7376),
+       zI = Ik(7378),
+       SI = Ik(7382),
```

#### 17. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L128-L130` → after: `L135-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L135-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L135-L137) · [Before (L128-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L128-L130)

```diff
-       RZ = ZC(7398),
-       AZ = ZC(7400),
-       xZ = ZC(7409),
+       vI = Ik(7399),
+       EI = Ik(7401),
+       OI = Ik(7407),
```

#### 18. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L132` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L139) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L132)

```diff
-       IZ = ZC(7420),
+       GI = Ik(7423),
```

#### 19. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L135-L140` → after: `L144-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L144-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L144-L155) · [Before (L135-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L135-L140)

```diff
-       eZ = ZC(7445),
-       hZ = ZC(7452),
-       KZ = ZC(7460),
-       YZ = ZC(7469),
-       dZ = ZC(7483),
-       mZ = ZC(7488),
+       UI = Ik(7446),
+       CI = Ik(7453),
+       NI = Ik(7462),
+       cI = Ik(7141),
+       WI = Ik(7464),
+       fI = Ik(7466),
+       BI = Ik(7472),
+       dI = Ik(7029),
+       YI = Ik(7390),
+       AI = Ik(7481),
+       gI = Ik(7489),
+       mI = Ik(7491),
```

#### 20. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L143` → after: `L158-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L158-L159) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L143)

```diff
-       lZ = ZC(7509),
+       DI = Ik(6690),
+       MI = Ik(7508),
```

#### 21. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L145-L163` → after: `L161-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L161-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L161-L173) · [Before (L145-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L145-L163)

```diff
-       cZ = ZC(7517),
-       uZ = ZC(7520),
-       rZ = ZC(7142),
-       sZ = ZC(7527),
-       TZ = ZC(7530),
-       aZ = ZC(7538),
-       tZ = ZC(7033),
-       DZ = ZC(7435),
-       jZ = ZC(7546),
-       yZ = ZC(7550),
-       LZ = ZC(7556),
-       UZ = ZC(7562),
-       BZ = ZC(7569),
-       OZ = ZC(6706),
-       kZ = ZC(7573),
-       VZ = ZC(7575),
- ... (3 more removed lines; see GitHub link above)
+       FX = Ik(7522),
+       IX = Ik(7526),
+       XX = Ik(7531),
+       TX = Ik(7548),
+       iX = Ik(7551),
+       yX = Ik(7554),
+       lX = Ik(7559),
+       aX = Ik(7566),
+       qX = Ik(7539),
+       LX = Ik(6987),
+       tX = Ik(7571),
+       ZX = Ik(7577),
+       jX = Ik(7586),
```

#### 22. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L165-L166` → after: `L175-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L175-L176) · [Before (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L165-L166)

```diff
-       wQ = ZC(7601),
-       bQ = ZC(7607),
+       wX = Ik(7592),
+       HX = Ik(7606),
```

#### 23. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L168-L173` → after: `L178-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L178-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L178-L182) · [Before (L168-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L168-L173)

```diff
-       fQ = ZC(7619),
-       oQ = ZC(7594),
-       qQ = ZC(6992),
-       FQ = ZC(7626),
-       WQ = ZC(7634),
-       NQ = ZC(7636),
+       xX = Ik(7621),
+       PX = Ik(7624),
+       KX = Ik(7631),
+       QX = Ik(7633),
+       sX = Ik(7642),
```

#### 24. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L175-L177` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L184) · [Before (L175-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L175-L177)

```diff
-       gQ = ZC(7641),
-       SQ = ZC(7647),
-       pQ = ZC(7651),
+       zX = Ik(7648),
```

#### 25. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L179-L181` → after: `L186-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L186-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L186-L189) · [Before (L179-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L179-L181)

```diff
-       GQ = ZC(7665),
-       RQ = ZC(7674),
-       AQ = ZC(7682),
+       oX = Ik(7419),
+       vX = Ik(7659),
+       EX = Ik(7667),
+       OX = Ik(7676),
```

#### 26. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L183-L186` → after: `L191-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L191-L192) · [Before (L183-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L183-L186)

```diff
-       JQ = ZC(7689),
-       IQ = ZC(7694),
-       iQ = ZC(7700),
-       vQ = ZC(7475),
+       GX = Ik(7690),
+       pX = Ik(7698),
```

#### 27. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L188-L189` → after: `L194-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L194-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L194-L195) · [Before (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L188-L189)

```diff
-       hQ = ZC(7714),
-       KQ = ZC(7720),
+       bX = Ik(7713),
+       RX = Ik(7722),
```

#### 28. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L191-L196` → after: `L197-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L197-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L197-L202) · [Before (L191-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L191-L196)

```diff
-       dQ = ZC(7733),
-       mQ = ZC(7741),
-       HQ = ZC(7749),
-       EQ = ZC(7751),
-       lQ = ZC(7758),
-       XQ = ZC(7767),
+       CX = Ik(7734),
+       NX = Ik(7062),
+       cX = Ik(7743),
+       WX = Ik(7750),
+       fX = Ik(7753),
+       BX = Ik(7762),
```

#### 29. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L198-L199` → after: `L204-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L204-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L204-L206) · [Before (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L198-L199)

```diff
-       uQ = ZC(7065),
-       rQ = ZC(7779),
+       YX = Ik(7773),
+       AX = Ik(7780),
+       gX = Ik(7783),
```

#### 30. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L201-L208` → after: `L208-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L208-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L208-L215) · [Before (L201-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L201-L208)

```diff
-       TQ = ZC(7790),
-       aQ = ZC(7797),
-       tQ = ZC(7799),
-       DQ = ZC(7805),
-       jQ = ZC(7812),
-       yQ = ZC(7821),
-       LQ = ZC(7830),
-       UQ = ZC(7833),
+       hX = Ik(7794),
+       rX = Ik(7802),
+       DX = Ik(7804),
+       MX = Ik(7813),
+       kT = Ik(7822),
+       FT = Ik(7825),
+       IT = Ik(7832),
+       XT = Ik(7838),
```

#### 31. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L210-L231` → after: `L217-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L217-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L217-L231) · [Before (L210-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L210-L231)

```diff
-       OQ = ZC(7846),
-       kQ = ZC(7855),
-       VQ = ZC(7864),
-       Cw = ZC(7866),
-       zw = ZC(7874),
-       Zw = ZC(7882),
-       Qw = ZC(7886),
-       ww = ZC(7891),
-       bw = ZC(7899),
-       nw = ZC(7906),
-       fw = ZC(7912),
-       ow = ZC(7914),
-       qw = ZC(7923),
-       Fw = ZC(7931),
-       Ww = ZC(7935),
-       Nw = ZC(7939),
- ... (6 more removed lines; see GitHub link above)
+       iT = Ik(7843),
+       yT = Ik(7848),
+       lT = Ik(7856),
+       aT = Ik(7859),
+       qT = Ik(7868),
+       LT = Ik(7873),
+       tT = Ik(7877),
+       ZT = Ik(7885),
+       jT = Ik(7893),
+       eT = Ik(7902),
+       wT = Ik(7911),
+       HT = Ik(7917),
+       JT = Ik(7924),
+       xT = Ik(7930),
+       PT = Ik(7939);
```

#### 32. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L233-L236` → after: `L233-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L233-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L233-L236) · [Before (L233-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L233-L236)

```diff
-       add: QC.g,
-       "angle-double-up": wC.e,
-       "angle-down": bC.e,
-       "angle-up": nC.d,
+       add: Xk.c,
+       "angle-double-up": Tk.f,
+       "angle-down": ik.h,
+       "angle-up": yk.e,
```

#### 33. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L238-L240` → after: `L238-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L238-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L238-L240) · [Before (L238-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L238-L240)

```diff
-       "arrow-down-to-line": oC.e,
-       "arrow-left": qC.f,
-       "arrow-right": FC.e,
+       "arrow-down-to-line": ak.g,
+       "arrow-left": qk.e,
+       "arrow-right": Lk.c,
```

#### 34. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L242` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L242) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L242)

```diff
-       "arrow-up-from-line": NC.g,
+       "arrow-up-from-line": Zk.e,
```

#### 35. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L244` → after: `L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L244) · [Before (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L244)

```diff
-       arrows: gC.e,
+       arrows: ek.d,
```

#### 36. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L249-L251` → after: `L249-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L249-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L249-L251) · [Before (L249-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L249-L251)

```diff
-       award: RC.f,
-       backpack: AC.f,
-       ban: xC.g,
+       award: Pk.g,
+       backpack: Kk.g,
+       ban: Qk.h,
```

#### 37. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L253-L255` → after: `L253-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L253-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L253-L255) · [Before (L253-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L253-L255)

```diff
-       bee: IC.f,
-       bell: iC.i,
-       "block-question": vC.f,
+       bee: Vk.c,
+       bell: zk.d,
+       "block-question": Sk.g,
```

#### 38. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L257)

```diff
-       boot: hC.i,
+       boot: Ek.e,
```

#### 39. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L259-L263` → after: `L259-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L259-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L259-L263) · [Before (L259-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L259-L263)

```diff
-       camera: YC.g,
-       "caret-down": dC.h,
-       "caret-left": mC.e,
-       "caret-right": HC.g,
-       "caret-up": EC.f,
+       camera: nk.f,
+       "caret-down": Gk.d,
+       "caret-left": pk.d,
+       "caret-right": uk.i,
+       "caret-up": bk.g,
```

#### 40. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L266-L268` → after: `L266-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L266-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L266-L268) · [Before (L266-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L266-L268)

```diff
-       "chess-knight": cC.i,
-       "chess-rook": uC.f,
-       "child-reaching": rC.e,
+       "chess-knight": Ck.e,
+       "chess-rook": Nk.g,
+       "child-reaching": ck.i,
```

#### 41. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L272-L273` → after: `L272-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L272-L273) · [Before (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L272-L273)

```diff
-       "circle-question": tC.f,
-       "circle-xmark": DC.g,
+       "circle-question": dk.e,
+       "circle-xmark": Yk.e,
```

#### 42. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L275-L276` → after: `L275-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L275-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L275-L276) · [Before (L275-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L275-L276)

```diff
-       cog: yC.e,
-       coins: LC.d,
+       cog: gk.g,
+       coins: mk.f,
```

#### 43. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L278-L279` → after: `L278-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L278-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L278-L279) · [Before (L278-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L278-L279)

```diff
-       commenting: BC.h,
-       compress: OC.c,
+       commenting: rk.d,
+       compress: Dk.e,
```

#### 44. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L281-L293` → after: `L281-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L281-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L281-L293) · [Before (L281-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L281-L293)

```diff
-       cookie: VC.i,
-       copy: Cz.g,
-       crosshairs: zz.h,
-       crown: Zz.e,
-       cube: Qz.d,
-       cubes: wz.g,
-       cut: bz.g,
-       dice: nz.c,
-       dizzy: fz.g,
-       "door-closed": oz.f,
-       "door-open": qz.i,
-       download: Fz.f,
-       edit: Wz.d,
+       cookie: kF.f,
+       copy: FF.i,
+       crosshairs: IF.g,
+       crown: XF.g,
+       cube: TF.h,
+       cubes: iF.i,
+       cut: yF.f,
+       dice: lF.f,
+       dizzy: aF.d,
+       "door-closed": qF.d,
+       "door-open": LF.g,
+       download: tF.h,
+       edit: ZF.h,
```

#### 45. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L295-L297` → after: `L295-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L295-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L295-L297) · [Before (L295-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L295-L297)

```diff
-       "ellipsis-h": Mz.e,
-       exclamation: gz.h,
-       "exclamation-triangle": Sz.i,
+       "ellipsis-h": eF.f,
+       exclamation: wF.g,
+       "exclamation-triangle": HF.g,
```

#### 46. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L299-L302` → after: `L299-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L299-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L299-L302) · [Before (L299-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L299-L302)

```diff
-       "external-link": Pz.h,
-       eye: Gz.f,
-       "eye-slash": Rz.f,
-       "face-diagonal-mouth": Az.d,
+       "external-link": xF.e,
+       eye: PF.e,
+       "eye-slash": KF.h,
+       "face-diagonal-mouth": QF.h,
```

#### 47. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L307` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L307) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L307)

```diff
-       "feather-alt": vz.e,
+       "feather-alt": oF.c,
```

#### 48. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L309-L310` → after: `L309-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L309-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L309-L310) · [Before (L309-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L309-L310)

```diff
-       "file-alt": hz.f,
-       "file-clipboard": Kz.d,
+       "file-alt": EF.e,
+       "file-clipboard": OF.c,
```

#### 49. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L313-L321` → after: `L313-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L313-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L313-L321) · [Before (L313-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L313-L321)

```diff
-       film: mz.g,
-       fire: Hz.f,
-       "fist-raised": Ez.h,
-       flag: lz.f,
-       folder: Xz.g,
-       "folder-image": cz.h,
-       "folder-open": uz.g,
-       gamepad: rz.f,
-       "gamepad-modern": sz.g,
+       film: pF.f,
+       fire: uF.g,
+       "fist-raised": bF.g,
+       flag: RF.h,
+       folder: UF.h,
+       "folder-image": CF.i,
+       "folder-open": NF.i,
+       gamepad: cF.g,
+       "gamepad-modern": WF.e,
```

#### 50. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L323` → after: `L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L323) · [Before (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L323)

```diff
-       gavel: az.f,
+       gavel: BF.c,
```

#### 51. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L325-L329` → after: `L325-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L325-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L325-L329) · [Before (L325-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L325-L329)

```diff
-       gem: Dz.f,
-       globe: jz.d,
-       "grid-2": yz.f,
-       hammer: Lz.f,
-       "hand-back-point-up": Uz.c,
+       gem: YF.d,
+       globe: AF.e,
+       "grid-2": gF.i,
+       hammer: mF.i,
+       "hand-back-point-up": hF.d,
```

#### 52. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L332-L334` → after: `L332-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L332-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L332-L334) · [Before (L332-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L332-L334)

```diff
-       "hand-point-left": kz.f,
-       "hand-wave": Vz.g,
-       "hands-clapping": CZ.e,
+       "hand-point-left": MF.g,
+       "hand-wave": kI.h,
+       "hands-clapping": FI.c,
```

#### 53. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L336` → after: `L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L336) · [Before (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L336)

```diff
-       heart: ZZ.h,
+       heart: XI.e,
```

#### 54. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L338` → after: `L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L338) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L338)

```diff
-       history: wZ.h,
+       history: iI.f,
```

#### 55. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L341-L342` → after: `L341-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L341-L342) · [Before (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L341-L342)

```diff
-       "hourglass-empty": fZ.c,
-       house: Gw.e,
+       "hourglass-empty": aI.f,
+       house: PT.f,
```

#### 56. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L344-L351` → after: `L344-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L344-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L344-L351) · [Before (L344-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L344-L351)

```diff
-       image: qZ.i,
-       "image-slash": FZ.d,
-       "info-circle": WZ.c,
-       joystick: NZ.f,
-       "layer-group": MZ.h,
-       "left-from-bracket": gZ.d,
-       lightbulb: SZ.f,
-       link: pZ.f,
+       image: LI.f,
+       "image-slash": tI.g,
+       "info-circle": ZI.f,
+       joystick: jI.g,
+       "layer-group": eI.f,
+       "left-from-bracket": wI.f,
+       lightbulb: HI.g,
+       link: JI.c,
```

#### 57. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L356` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L356) · [Before (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L356)

```diff
-       lock: xZ.f,
+       lock: sI.d,
```

#### 58. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L359-L360` → after: `L359-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L359-L360) · [Before (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L359-L360)

```diff
-       male: iZ.f,
-       "map-marker-check": vZ.g,
+       male: SI.d,
+       "map-marker-check": oI.e,
```

#### 59. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L362` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L362) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L362)

```diff
-       "map-marker-xmark": hZ.d,
+       "map-marker-xmark": EI.e,
```

#### 60. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L366-L372` → after: `L366-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L366-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L366-L372) · [Before (L366-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L366-L372)

```diff
-       mouse: mZ.c,
-       music: HZ.i,
-       "music-slash": EZ.g,
-       navicon: lZ.f,
-       palette: XZ.g,
-       pants: cZ.g,
-       "party-horn": uZ.g,
+       mouse: pI.f,
+       music: uI.f,
+       "music-slash": bI.h,
+       navicon: RI.d,
+       palette: UI.f,
+       pants: CI.f,
+       "party-horn": NI.f,
```

#### 61. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L374-L376` → after: `L374-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L374-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L374-L376) · [Before (L374-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L374-L376)

```diff
-       pause: sZ.c,
-       pen: TZ.f,
-       "pen-field": aZ.g,
+       pause: WI.d,
+       pen: fI.e,
+       "pen-field": BI.f,
```

#### 62. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L380-L383` → after: `L380-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L380-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L380-L383) · [Before (L380-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L380-L383)

```diff
-       "person-arrow-up-from-line": yZ.e,
-       "person-falling-burst": LZ.f,
-       "person-military-pointing": UZ.g,
-       play: BZ.f,
+       "person-arrow-up-from-line": gI.g,
+       "person-falling-burst": mI.c,
+       "person-military-pointing": hI.i,
+       play: rI.d,
```

#### 63. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L385-L387` → after: `L385-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L385-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L385-L387) · [Before (L385-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L385-L387)

```diff
-       "plus-circle": kZ.g,
-       "power-off": VZ.g,
-       "ranking-star": CQ.i,
+       "plus-circle": MI.c,
+       "power-off": kX.e,
+       "ranking-star": FX.d,
```

#### 64. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L392-L394` → after: `L392-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L392-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L392-L394) · [Before (L392-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L392-L394)

```diff
-       "rocket-launch": bQ.h,
-       "rotate-forward": nQ.f,
-       "rotate-left": fQ.c,
+       "rocket-launch": yX.g,
+       "rotate-forward": lX.g,
+       "rotate-left": aX.f,
```

#### 65. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L399-L400` → after: `L399-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L399-L400) · [Before (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L399-L400)

```diff
-       "shield-alt": NQ.e,
-       "shield-blank": MQ.d,
+       "shield-alt": jX.g,
+       "shield-blank": eX.e,
```

#### 66. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L402-L407` → after: `L402-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L402-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L402-L407) · [Before (L402-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L402-L407)

```diff
-       shirt: SQ.g,
-       shoe: pQ.f,
-       "shopping-cart": PQ.e,
-       "sign-out-alt": GQ.i,
-       skull: RQ.i,
-       smile: AQ.g,
+       shirt: HX.h,
+       shoe: JX.i,
+       "shopping-cart": xX.i,
+       "sign-out-alt": PX.f,
+       skull: KX.h,
+       smile: QX.f,
```

#### 67. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L410` → after: `L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L410) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L410)

```diff
-       "square-dashed": iQ.g,
+       "square-dashed": SX.f,
```

#### 68. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L412-L420` → after: `L412-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L412-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L412-L420) · [Before (L412-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L412-L420)

```diff
-       star: eQ.g,
-       "star-christmas": IQ.g,
-       store: hQ.i,
-       subtract: KQ.i,
-       "sun-bright": YQ.g,
-       swords: dQ.i,
-       sync: mQ.f,
-       "t-shirt": Pw.c,
-       "tachometer-alt": HQ.g,
+       star: vX.f,
+       "star-christmas": zX.f,
+       store: EX.h,
+       subtract: OX.f,
+       "sun-bright": nX.f,
+       swords: GX.f,
+       sync: pX.g,
+       "t-shirt": xT.d,
+       "tachometer-alt": uX.d,
```

#### 69. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L422` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L422) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L422)

```diff
-       terminal: lQ.c,
+       terminal: RX.f,
```

#### 70. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L429-L433` → after: `L429-L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L429-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L429-L433) · [Before (L429-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L429-L433)

```diff
-       upload: TQ.f,
-       user: aQ.g,
-       "user-astronaut": tQ.g,
-       "user-check": DQ.f,
-       "user-clock": jQ.i,
+       upload: fX.d,
+       user: BX.f,
+       "user-astronaut": dX.d,
+       "user-check": YX.g,
+       "user-clock": AX.e,
```

#### 71. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L437-L442` → after: `L437-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L437-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L437-L442) · [Before (L437-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L437-L442)

```diff
-       "user-minus": BQ.c,
-       "user-plus": OQ.g,
-       "user-slash": kQ.f,
-       "user-unlock": VQ.h,
-       "users-crown": Cw.c,
-       "users-gear": zw.e,
+       "user-minus": rX.e,
+       "user-plus": DX.d,
+       "user-slash": MX.g,
+       "user-unlock": kT.c,
+       "users-crown": FT.f,
+       "users-gear": IT.g,
```

#### 72. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L444` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L444) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L444)

```diff
-       "video-camera": Qw.e,
+       "video-camera": TT.g,
```

#### 73. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L446)

```diff
-       "volume-down": bw.e,
+       "volume-down": yT.g,
```

#### 74. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L448-L450` → after: `L448-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L448-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L448-L450) · [Before (L448-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L448-L450)

```diff
-       "volume-medium": fw.e,
-       "volume-slash": ow.d,
-       warning: qw.e,
+       "volume-medium": aT.d,
+       "volume-slash": qT.h,
+       warning: LT.g,
```

#### 75. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L453-L454` → after: `L453-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L453-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L453-L454) · [Before (L453-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L453-L454)

```diff
-       "wifi-strong": Nw.f,
-       wrench: Mw.f,
+       "wifi-strong": jT.h,
+       wrench: eT.h,
```

#### 76. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L456-L457` → after: `L456-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L456-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/icons-solid.js#L456-L457) · [Before (L456-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/icons-solid.js#L456-L457)

```diff
-       xmark: Sw.d,
-       zap: pw.d
+       xmark: HT.h,
+       zap: JT.f
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/itemSprites.js` (w4ddu.56408518 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/itemSprites.js` (1729 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c)

#### 1. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L4-L1749` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L4) · [Before (L4-L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L4-L1749)

```diff
-   50784: (CC, zC, ZC) => {
-     var QC = {
-       "./67.png": 50787,
-       "./67_projectile_base.png": 50789,
-       "./67_projectile_boosted.png": 50796,
-       "./AK-47.png": 50805,
-       "./AWP.png": 50810,
-       "./Block-19.png": 50812,
-       "./DMR.png": 50817,
-       "./Deagle.png": 50821,
-       "./Double-barreled.png": 50827,
-       "./FMR.png": 50836,
-       "./GPMG.png": 50843,
-       "./M16.png": 50849,
-       "./M1911.png": 50854,
-       "./MP40.png": 50860,
- ... (1730 more removed lines; see GitHub link above)
+   51036: (kk, Fk, Ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1769` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L24) · [Before (L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1769)

```diff
-       return null !== (zC = oC.get(CC)) && void 0 !== zC ? zC : ""
+       return null !== (Fk = ak.get(kk)) && void 0 !== Fk ? Fk : ""
```

#### 3. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1774` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L29) · [Before (L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1774)

```diff
-       return null === zC ? null : "" === zC ? ZC(50612) : ZC(50784)(`./${zC}.png`)
+       return null === Fk ? null : "" === Fk ? Ik(50860) : Ik(51038)(`./${Fk}.png`)
```

#### 4. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1777` → after: `L32-L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L32-L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L32-L1777) · [Before (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1777)

```diff
-   50787: (CC, zC, ZC) => {
+   51038: (kk, Fk, Ik) => {
+     var Xk = {
+       "./67.png": 51044,
+       "./67_projectile_base.png": 51053,
+       "./67_projectile_boosted.png": 51058,
+       "./AK-47.png": 51067,
+       "./AWP.png": 51072,
+       "./Block-19.png": 51075,
+       "./DMR.png": 51081,
+       "./Deagle.png": 51089,
+       "./Double-barreled.png": 51098,
+       "./FMR.png": 51100,
+       "./GPMG.png": 51104,
+       "./M16.png": 51112,
+       "./M1911.png": 51118,
+       "./MP40.png": 51123,
+ ... (1730 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1780` → after: `L1780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1780) · [Before (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1780)

```diff
-   50789: (CC, zC, ZC) => {
+   51053: (kk, Fk, Ik) => {
```

#### 6. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1783` → after: `L1783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1783) · [Before (L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1783)

```diff
-   50796: (CC, zC, ZC) => {
+   51058: (kk, Fk, Ik) => {
```

#### 7. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1786` → after: `L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1786) · [Before (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1786)

```diff
-   50805: (CC, zC, ZC) => {
+   51067: (kk, Fk, Ik) => {
```

#### 8. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1789` → after: `L1789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1789) · [Before (L1789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1789)

```diff
-   50810: (CC, zC, ZC) => {
+   51072: (kk, Fk, Ik) => {
```

#### 9. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1792` → after: `L1792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1792) · [Before (L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1792)

```diff
-   50812: (CC, zC, ZC) => {
+   51075: (kk, Fk, Ik) => {
```

#### 10. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1795` → after: `L1795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1795) · [Before (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1795)

```diff
-   50817: (CC, zC, ZC) => {
+   51081: (kk, Fk, Ik) => {
```

#### 11. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1798` → after: `L1798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1798) · [Before (L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1798)

```diff
-   50821: (CC, zC, ZC) => {
+   51089: (kk, Fk, Ik) => {
```

#### 12. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1801` → after: `L1801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1801) · [Before (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1801)

```diff
-   50827: (CC, zC, ZC) => {
+   51098: (kk, Fk, Ik) => {
```

#### 13. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1804` → after: `L1804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1804) · [Before (L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1804)

```diff
-   50836: (CC, zC, ZC) => {
+   51100: (kk, Fk, Ik) => {
```

#### 14. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1807` → after: `L1807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1807) · [Before (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1807)

```diff
-   50843: (CC, zC, ZC) => {
+   51104: (kk, Fk, Ik) => {
```

#### 15. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1810` → after: `L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1810) · [Before (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1810)

```diff
-   50849: (CC, zC, ZC) => {
+   51112: (kk, Fk, Ik) => {
```

#### 16. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1813` → after: `L1813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1813) · [Before (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1813)

```diff
-   50854: (CC, zC, ZC) => {
+   51118: (kk, Fk, Ik) => {
```

#### 17. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1816` → after: `L1816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1816) · [Before (L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1816)

```diff
-   50860: (CC, zC, ZC) => {
+   51123: (kk, Fk, Ik) => {
```

#### 18. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1819` → after: `L1819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1819) · [Before (L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1819)

```diff
-   50868: (CC, zC, ZC) => {
+   51125: (kk, Fk, Ik) => {
```

#### 19. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1822` → after: `L1822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1822) · [Before (L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1822)

```diff
-   50877: (CC, zC, ZC) => {
+   51133: (kk, Fk, Ik) => {
```

#### 20. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1825` → after: `L1825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1825) · [Before (L1825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1825)

```diff
-   50883: (CC, zC, ZC) => {
+   51136: (kk, Fk, Ik) => {
```

#### 21. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1828` → after: `L1828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1828) · [Before (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1828)

```diff
-   50886: (CC, zC, ZC) => {
+   51141: (kk, Fk, Ik) => {
```

#### 22. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1831` → after: `L1831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1831) · [Before (L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1831)

```diff
-   50890: (CC, zC, ZC) => {
+   51145: (kk, Fk, Ik) => {
```

#### 23. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1834` → after: `L1834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1834) · [Before (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1834)

```diff
-   50898: (CC, zC, ZC) => {
+   51154: (kk, Fk, Ik) => {
```

#### 24. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1837` → after: `L1837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1837) · [Before (L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1837)

```diff
-   50906: (CC, zC, ZC) => {
+   51162: (kk, Fk, Ik) => {
```

#### 25. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1840` → after: `L1840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1840) · [Before (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1840)

```diff
-   50913: (CC, zC, ZC) => {
+   51164: (kk, Fk, Ik) => {
```

#### 26. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1843` → after: `L1843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1843) · [Before (L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1843)

```diff
-   50915: (CC, zC, ZC) => {
+   51169: (kk, Fk, Ik) => {
```

#### 27. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1846` → after: `L1846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1846) · [Before (L1846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1846)

```diff
-   50920: (CC, zC, ZC) => {
+   51176: (kk, Fk, Ik) => {
```

#### 28. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1849` → after: `L1849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1849) · [Before (L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1849)

```diff
-   50923: (CC, zC, ZC) => {
+   51180: (kk, Fk, Ik) => {
```

#### 29. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1852` → after: `L1852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1852) · [Before (L1852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1852)

```diff
-   50930: (CC, zC, ZC) => {
+   51187: (kk, Fk, Ik) => {
```

#### 30. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1855` → after: `L1855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1855) · [Before (L1855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1855)

```diff
-   50939: (CC, zC, ZC) => {
+   51196: (kk, Fk, Ik) => {
```

#### 31. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1858` → after: `L1858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1858) · [Before (L1858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1858)

```diff
-   50946: (CC, zC, ZC) => {
+   51198: (kk, Fk, Ik) => {
```

#### 32. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1861` → after: `L1861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1861) · [Before (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1861)

```diff
-   50948: (CC, zC, ZC) => {
+   51206: (kk, Fk, Ik) => {
```

#### 33. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1864` → after: `L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1864) · [Before (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1864)

```diff
-   50952: (CC, zC, ZC) => {
+   51213: (kk, Fk, Ik) => {
```

#### 34. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1867` → after: `L1867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1867) · [Before (L1867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1867)

```diff
-   50960: (CC, zC, ZC) => {
+   51220: (kk, Fk, Ik) => {
```

#### 35. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1870` → after: `L1870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1870) · [Before (L1870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1870)

```diff
-   50964: (CC, zC, ZC) => {
+   51225: (kk, Fk, Ik) => {
```

#### 36. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1873` → after: `L1873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1873) · [Before (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1873)

```diff
-   50966: (CC, zC, ZC) => {
+   51229: (kk, Fk, Ik) => {
```

#### 37. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1876` → after: `L1876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1876) · [Before (L1876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1876)

```diff
-   50973: (CC, zC, ZC) => {
+   51234: (kk, Fk, Ik) => {
```

#### 38. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1879` → after: `L1879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1879) · [Before (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1879)

```diff
-   50975: (CC, zC, ZC) => {
+   51241: (kk, Fk, Ik) => {
```

#### 39. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1882` → after: `L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1882) · [Before (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1882)

```diff
-   50977: (CC, zC, ZC) => {
+   51244: (kk, Fk, Ik) => {
```

#### 40. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1885` → after: `L1885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1885) · [Before (L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1885)

```diff
-   50984: (CC, zC, ZC) => {
+   51251: (kk, Fk, Ik) => {
```

#### 41. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1888` → after: `L1888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1888) · [Before (L1888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1888)

```diff
-   50986: (CC, zC, ZC) => {
+   51255: (kk, Fk, Ik) => {
```

#### 42. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1891` → after: `L1891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1891) · [Before (L1891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1891)

```diff
-   50994: (CC, zC, ZC) => {
+   51257: (kk, Fk, Ik) => {
```

#### 43. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1894` → after: `L1894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1894) · [Before (L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1894)

```diff
-   50999: (CC, zC, ZC) => {
+   51263: (kk, Fk, Ik) => {
```

#### 44. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1897` → after: `L1897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1897) · [Before (L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1897)

```diff
-   51005: (CC, zC, ZC) => {
+   51270: (kk, Fk, Ik) => {
```

#### 45. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1900` → after: `L1900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1900) · [Before (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1900)

```diff
-   51014: (CC, zC, ZC) => {
+   51277: (kk, Fk, Ik) => {
```

#### 46. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1903` → after: `L1903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1903) · [Before (L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1903)

```diff
-   51017: (CC, zC, ZC) => {
+   51281: (kk, Fk, Ik) => {
```

#### 47. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1906` → after: `L1906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1906) · [Before (L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1906)

```diff
-   51020: (CC, zC, ZC) => {
+   51285: (kk, Fk, Ik) => {
```

#### 48. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1909` → after: `L1909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1909) · [Before (L1909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1909)

```diff
-   51028: (CC, zC, ZC) => {
+   51287: (kk, Fk, Ik) => {
```

#### 49. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1912` → after: `L1912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1912) · [Before (L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1912)

```diff
-   51033: (CC, zC, ZC) => {
+   51296: (kk, Fk, Ik) => {
```

#### 50. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1915` → after: `L1915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1915) · [Before (L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1915)

```diff
-   51035: (CC, zC, ZC) => {
+   51301: (kk, Fk, Ik) => {
```

#### 51. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1918` → after: `L1918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1918) · [Before (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1918)

```diff
-   51039: (CC, zC, ZC) => {
+   51307: (kk, Fk, Ik) => {
```

#### 52. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1921` → after: `L1921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1921) · [Before (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1921)

```diff
-   51048: (CC, zC, ZC) => {
+   51311: (kk, Fk, Ik) => {
```

#### 53. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1924` → after: `L1924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1924) · [Before (L1924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1924)

```diff
-   51053: (CC, zC, ZC) => {
+   51320: (kk, Fk, Ik) => {
```

#### 54. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1927` → after: `L1927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1927) · [Before (L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1927)

```diff
-   51062: (CC, zC, ZC) => {
+   51326: (kk, Fk, Ik) => {
```

#### 55. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1930` → after: `L1930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1930) · [Before (L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1930)

```diff
-   51066: (CC, zC, ZC) => {
+   51329: (kk, Fk, Ik) => {
```

#### 56. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1933` → after: `L1933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1933) · [Before (L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1933)

```diff
-   51075: (CC, zC, ZC) => {
+   51337: (kk, Fk, Ik) => {
```

#### 57. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1936` → after: `L1936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1936) · [Before (L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1936)

```diff
-   51081: (CC, zC, ZC) => {
+   51342: (kk, Fk, Ik) => {
```

#### 58. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1939` → after: `L1939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1939) · [Before (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1939)

```diff
-   51086: (CC, zC, ZC) => {
+   51344: (kk, Fk, Ik) => {
```

#### 59. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1942` → after: `L1942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1942) · [Before (L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1942)

```diff
-   51090: (CC, zC, ZC) => {
+   51349: (kk, Fk, Ik) => {
```

#### 60. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1945` → after: `L1945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1945) · [Before (L1945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1945)

```diff
-   51092: (CC, zC, ZC) => {
+   51352: (kk, Fk, Ik) => {
```

#### 61. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1948` → after: `L1948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1948) · [Before (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1948)

```diff
-   51096: (CC, zC, ZC) => {
+   51359: (kk, Fk, Ik) => {
```

#### 62. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1951` → after: `L1951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1951) · [Before (L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1951)

```diff
-   51099: (CC, zC, ZC) => {
+   51367: (kk, Fk, Ik) => {
```

#### 63. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1954` → after: `L1954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1954) · [Before (L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1954)

```diff
-   51105: (CC, zC, ZC) => {
+   51369: (kk, Fk, Ik) => {
```

#### 64. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1957` → after: `L1957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1957) · [Before (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1957)

```diff
-   51114: (CC, zC, ZC) => {
+   51377: (kk, Fk, Ik) => {
```

#### 65. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1960` → after: `L1960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1960) · [Before (L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1960)

```diff
-   51117: (CC, zC, ZC) => {
+   51380: (kk, Fk, Ik) => {
```

#### 66. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1963` → after: `L1963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1963) · [Before (L1963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1963)

```diff
-   51124: (CC, zC, ZC) => {
+   51385: (kk, Fk, Ik) => {
```

#### 67. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1966` → after: `L1966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1966) · [Before (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1966)

```diff
-   51131: (CC, zC, ZC) => {
+   51391: (kk, Fk, Ik) => {
```

#### 68. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1969` → after: `L1969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1969) · [Before (L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1969)

```diff
-   51140: (CC, zC, ZC) => {
+   51394: (kk, Fk, Ik) => {
```

#### 69. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1972` → after: `L1972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1972) · [Before (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1972)

```diff
-   51144: (CC, zC, ZC) => {
+   51402: (kk, Fk, Ik) => {
```

#### 70. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1975` → after: `L1975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1975) · [Before (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1975)

```diff
-   51149: (CC, zC, ZC) => {
+   51406: (kk, Fk, Ik) => {
```

#### 71. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1978` → after: `L1978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1978) · [Before (L1978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1978)

```diff
-   51158: (CC, zC, ZC) => {
+   51412: (kk, Fk, Ik) => {
```

#### 72. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1981` → after: `L1981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1981) · [Before (L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1981)

```diff
-   51165: (CC, zC, ZC) => {
+   51415: (kk, Fk, Ik) => {
```

#### 73. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1984` → after: `L1984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1984) · [Before (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1984)

```diff
-   51170: (CC, zC, ZC) => {
+   51417: (kk, Fk, Ik) => {
```

#### 74. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1987` → after: `L1987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1987) · [Before (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1987)

```diff
-   51172: (CC, zC, ZC) => {
+   51420: (kk, Fk, Ik) => {
```

#### 75. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1990` → after: `L1990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1990) · [Before (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1990)

```diff
-   51176: (CC, zC, ZC) => {
+   51428: (kk, Fk, Ik) => {
```

#### 76. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1993` → after: `L1993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1993) · [Before (L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1993)

```diff
-   51183: (CC, zC, ZC) => {
+   51437: (kk, Fk, Ik) => {
```

#### 77. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1996` → after: `L1996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1996) · [Before (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1996)

```diff
-   51192: (CC, zC, ZC) => {
+   51444: (kk, Fk, Ik) => {
```

#### 78. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1999` → after: `L1999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L1999) · [Before (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L1999)

```diff
-   51197: (CC, zC, ZC) => {
+   51446: (kk, Fk, Ik) => {
```

#### 79. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2002` → after: `L2002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2002) · [Before (L2002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2002)

```diff
-   51203: (CC, zC, ZC) => {
+   51449: (kk, Fk, Ik) => {
```

#### 80. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2005` → after: `L2005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2005) · [Before (L2005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2005)

```diff
-   51208: (CC, zC, ZC) => {
+   51452: (kk, Fk, Ik) => {
```

#### 81. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2008` → after: `L2008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2008) · [Before (L2008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2008)

```diff
-   51215: (CC, zC, ZC) => {
+   51460: (kk, Fk, Ik) => {
```

#### 82. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2011` → after: `L2011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2011) · [Before (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2011)

```diff
-   51217: (CC, zC, ZC) => {
+   51468: (kk, Fk, Ik) => {
```

#### 83. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2014` → after: `L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2014) · [Before (L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2014)

```diff
-   51223: (CC, zC, ZC) => {
+   51470: (kk, Fk, Ik) => {
```

#### 84. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2017` → after: `L2017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2017) · [Before (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2017)

```diff
-   51227: (CC, zC, ZC) => {
+   51472: (kk, Fk, Ik) => {
```

#### 85. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2020` → after: `L2020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2020) · [Before (L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2020)

```diff
-   51231: (CC, zC, ZC) => {
+   51481: (kk, Fk, Ik) => {
```

#### 86. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2023` → after: `L2023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2023) · [Before (L2023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2023)

```diff
-   51237: (CC, zC, ZC) => {
+   51485: (kk, Fk, Ik) => {
```

#### 87. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2026` → after: `L2026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2026) · [Before (L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2026)

```diff
-   51242: (CC, zC, ZC) => {
+   51489: (kk, Fk, Ik) => {
```

#### 88. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2029` → after: `L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2029) · [Before (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2029)

```diff
-   51249: (CC, zC, ZC) => {
+   51496: (kk, Fk, Ik) => {
```

#### 89. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2032` → after: `L2032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2032) · [Before (L2032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2032)

```diff
-   51252: (CC, zC, ZC) => {
+   51498: (kk, Fk, Ik) => {
```

#### 90. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2035` → after: `L2035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2035) · [Before (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2035)

```diff
-   51254: (CC, zC, ZC) => {
+   51502: (kk, Fk, Ik) => {
```

#### 91. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2038` → after: `L2038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2038) · [Before (L2038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2038)

```diff
-   51259: (CC, zC, ZC) => {
+   51510: (kk, Fk, Ik) => {
```

#### 92. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2041` → after: `L2041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2041) · [Before (L2041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2041)

```diff
-   51266: (CC, zC, ZC) => {
+   51513: (kk, Fk, Ik) => {
```

#### 93. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2044` → after: `L2044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2044) · [Before (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2044)

```diff
-   51273: (CC, zC, ZC) => {
+   51520: (kk, Fk, Ik) => {
```

#### 94. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2047` → after: `L2047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2047) · [Before (L2047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2047)

```diff
-   51278: (CC, zC, ZC) => {
+   51524: (kk, Fk, Ik) => {
```

#### 95. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2050` → after: `L2050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2050) · [Before (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2050)

```diff
-   51285: (CC, zC, ZC) => {
+   51527: (kk, Fk, Ik) => {
```

#### 96. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2053` → after: `L2053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2053) · [Before (L2053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2053)

```diff
-   51291: (CC, zC, ZC) => {
+   51534: (kk, Fk, Ik) => {
```

#### 97. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2056` → after: `L2056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2056) · [Before (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2056)

```diff
-   51295: (CC, zC, ZC) => {
+   51542: (kk, Fk, Ik) => {
```

#### 98. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2059` → after: `L2059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2059) · [Before (L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2059)

```diff
-   51299: (CC, zC, ZC) => {
+   51550: (kk, Fk, Ik) => {
```

#### 99. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2062` → after: `L2062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2062) · [Before (L2062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2062)

```diff
-   51302: (CC, zC, ZC) => {
+   51559: (kk, Fk, Ik) => {
```

#### 100. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2065` → after: `L2065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2065) · [Before (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2065)

```diff
-   51308: (CC, zC, ZC) => {
+   51561: (kk, Fk, Ik) => {
```

#### 101. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2068` → after: `L2068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2068) · [Before (L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2068)

```diff
-   51314: (CC, zC, ZC) => {
+   51568: (kk, Fk, Ik) => {
```

#### 102. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2071` → after: `L2071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2071) · [Before (L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2071)

```diff
-   51319: (CC, zC, ZC) => {
+   51576: (kk, Fk, Ik) => {
```

#### 103. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2074` → after: `L2074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2074) · [Before (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2074)

```diff
-   51324: (CC, zC, ZC) => {
+   51580: (kk, Fk, Ik) => {
```

#### 104. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2077` → after: `L2077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2077) · [Before (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2077)

```diff
-   51327: (CC, zC, ZC) => {
+   51588: (kk, Fk, Ik) => {
```

#### 105. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2080` → after: `L2080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2080) · [Before (L2080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2080)

```diff
-   51334: (CC, zC, ZC) => {
+   51591: (kk, Fk, Ik) => {
```

#### 106. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2083` → after: `L2083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2083) · [Before (L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2083)

```diff
-   51337: (CC, zC, ZC) => {
+   51595: (kk, Fk, Ik) => {
```

#### 107. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2086` → after: `L2086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2086) · [Before (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2086)

```diff
-   51343: (CC, zC, ZC) => {
+   51602: (kk, Fk, Ik) => {
```

#### 108. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2089` → after: `L2089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2089) · [Before (L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2089)

```diff
-   51347: (CC, zC, ZC) => {
+   51607: (kk, Fk, Ik) => {
```

#### 109. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2092` → after: `L2092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2092) · [Before (L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2092)

```diff
-   51356: (CC, zC, ZC) => {
+   51614: (kk, Fk, Ik) => {
```

#### 110. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2095` → after: `L2095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2095) · [Before (L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2095)

```diff
-   51359: (CC, zC, ZC) => {
+   51617: (kk, Fk, Ik) => {
```

#### 111. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2098` → after: `L2098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2098) · [Before (L2098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2098)

```diff
-   51362: (CC, zC, ZC) => {
+   51625: (kk, Fk, Ik) => {
```

#### 112. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2101` → after: `L2101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2101) · [Before (L2101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2101)

```diff
-   51367: (CC, zC, ZC) => {
+   51630: (kk, Fk, Ik) => {
```

#### 113. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2104` → after: `L2104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2104) · [Before (L2104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2104)

```diff
-   51374: (CC, zC, ZC) => {
+   51637: (kk, Fk, Ik) => {
```

#### 114. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2107` → after: `L2107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2107) · [Before (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2107)

```diff
-   51382: (CC, zC, ZC) => {
+   51644: (kk, Fk, Ik) => {
```

#### 115. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2110` → after: `L2110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2110) · [Before (L2110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2110)

```diff
-   51387: (CC, zC, ZC) => {
+   51646: (kk, Fk, Ik) => {
```

#### 116. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2113` → after: `L2113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2113) · [Before (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2113)

```diff
-   51391: (CC, zC, ZC) => {
+   51654: (kk, Fk, Ik) => {
```

#### 117. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2116` → after: `L2116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2116) · [Before (L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2116)

```diff
-   51394: (CC, zC, ZC) => {
+   51656: (kk, Fk, Ik) => {
```

#### 118. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2119` → after: `L2119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2119) · [Before (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2119)

```diff
-   51401: (CC, zC, ZC) => {
+   51662: (kk, Fk, Ik) => {
```

#### 119. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2122` → after: `L2122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2122) · [Before (L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2122)

```diff
-   51408: (CC, zC, ZC) => {
+   51664: (kk, Fk, Ik) => {
```

#### 120. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2125` → after: `L2125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2125) · [Before (L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2125)

```diff
-   51412: (CC, zC, ZC) => {
+   51671: (kk, Fk, Ik) => {
```

#### 121. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2128` → after: `L2128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2128) · [Before (L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2128)

```diff
-   51420: (CC, zC, ZC) => {
+   51676: (kk, Fk, Ik) => {
```

#### 122. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2131` → after: `L2131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2131) · [Before (L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2131)

```diff
-   51424: (CC, zC, ZC) => {
+   51681: (kk, Fk, Ik) => {
```

#### 123. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2134` → after: `L2134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2134) · [Before (L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2134)

```diff
-   51430: (CC, zC, ZC) => {
+   51684: (kk, Fk, Ik) => {
```

#### 124. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2137` → after: `L2137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2137) · [Before (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2137)

```diff
-   51432: (CC, zC, ZC) => {
+   51693: (kk, Fk, Ik) => {
```

#### 125. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2140` → after: `L2140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2140) · [Before (L2140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2140)

```diff
-   51435: (CC, zC, ZC) => {
+   51700: (kk, Fk, Ik) => {
```

#### 126. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2143` → after: `L2143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2143) · [Before (L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2143)

```diff
-   51443: (CC, zC, ZC) => {
+   51709: (kk, Fk, Ik) => {
```

#### 127. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2146` → after: `L2146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2146) · [Before (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2146)

```diff
-   51449: (CC, zC, ZC) => {
+   51711: (kk, Fk, Ik) => {
```

#### 128. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2149` → after: `L2149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2149) · [Before (L2149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2149)

```diff
-   51453: (CC, zC, ZC) => {
+   51720: (kk, Fk, Ik) => {
```

#### 129. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2152` → after: `L2152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2152) · [Before (L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2152)

```diff
-   51457: (CC, zC, ZC) => {
+   51725: (kk, Fk, Ik) => {
```

#### 130. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2155` → after: `L2155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2155) · [Before (L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2155)

```diff
-   51462: (CC, zC, ZC) => {
+   51727: (kk, Fk, Ik) => {
```

#### 131. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2158` → after: `L2158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2158) · [Before (L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2158)

```diff
-   51470: (CC, zC, ZC) => {
+   51735: (kk, Fk, Ik) => {
```

#### 132. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2161` → after: `L2161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2161) · [Before (L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2161)

```diff
-   51478: (CC, zC, ZC) => {
+   51742: (kk, Fk, Ik) => {
```

#### 133. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2164` → after: `L2164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2164) · [Before (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2164)

```diff
-   51483: (CC, zC, ZC) => {
+   51744: (kk, Fk, Ik) => {
```

#### 134. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2167` → after: `L2167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2167) · [Before (L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2167)

```diff
-   51488: (CC, zC, ZC) => {
+   51747: (kk, Fk, Ik) => {
```

#### 135. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2170` → after: `L2170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2170) · [Before (L2170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2170)

```diff
-   51490: (CC, zC, ZC) => {
+   51750: (kk, Fk, Ik) => {
```

#### 136. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2173` → after: `L2173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2173) · [Before (L2173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2173)

```diff
-   51498: (CC, zC, ZC) => {
+   51756: (kk, Fk, Ik) => {
```

#### 137. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2176` → after: `L2176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2176) · [Before (L2176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2176)

```diff
-   51502: (CC, zC, ZC) => {
+   51765: (kk, Fk, Ik) => {
```

#### 138. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2179` → after: `L2179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2179) · [Before (L2179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2179)

```diff
-   51509: (CC, zC, ZC) => {
+   51774: (kk, Fk, Ik) => {
```

#### 139. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2182` → after: `L2182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2182) · [Before (L2182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2182)

```diff
-   51512: (CC, zC, ZC) => {
+   51783: (kk, Fk, Ik) => {
```

#### 140. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2185` → after: `L2185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2185) · [Before (L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2185)

```diff
-   51517: (CC, zC, ZC) => {
+   51785: (kk, Fk, Ik) => {
```

#### 141. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2188` → after: `L2188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2188) · [Before (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2188)

```diff
-   51521: (CC, zC, ZC) => {
+   51789: (kk, Fk, Ik) => {
```

#### 142. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2191` → after: `L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2191) · [Before (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2191)

```diff
-   51524: (CC, zC, ZC) => {
+   51797: (kk, Fk, Ik) => {
```

#### 143. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2194` → after: `L2194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2194) · [Before (L2194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2194)

```diff
-   51531: (CC, zC, ZC) => {
+   51799: (kk, Fk, Ik) => {
```

#### 144. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2197` → after: `L2197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2197) · [Before (L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2197)

```diff
-   51540: (CC, zC, ZC) => {
+   51801: (kk, Fk, Ik) => {
```

#### 145. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2200` → after: `L2200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2200) · [Before (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2200)

```diff
-   51542: (CC, zC, ZC) => {
+   51807: (kk, Fk, Ik) => {
```

#### 146. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2203` → after: `L2203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2203) · [Before (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2203)

```diff
-   51550: (CC, zC, ZC) => {
+   51809: (kk, Fk, Ik) => {
```

#### 147. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2206` → after: `L2206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2206) · [Before (L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2206)

```diff
-   51555: (CC, zC, ZC) => {
+   51814: (kk, Fk, Ik) => {
```

#### 148. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2209` → after: `L2209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2209) · [Before (L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2209)

```diff
-   51559: (CC, zC, ZC) => {
+   51820: (kk, Fk, Ik) => {
```

#### 149. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2212` → after: `L2212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2212) · [Before (L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2212)

```diff
-   51568: (CC, zC, ZC) => {
+   51829: (kk, Fk, Ik) => {
```

#### 150. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2215` → after: `L2215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2215) · [Before (L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2215)

```diff
-   51575: (CC, zC, ZC) => {
+   51833: (kk, Fk, Ik) => {
```

#### 151. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2218` → after: `L2218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2218) · [Before (L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2218)

```diff
-   51583: (CC, zC, ZC) => {
+   51841: (kk, Fk, Ik) => {
```

#### 152. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2221` → after: `L2221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2221) · [Before (L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2221)

```diff
-   51586: (CC, zC, ZC) => {
+   51849: (kk, Fk, Ik) => {
```

#### 153. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2224` → after: `L2224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2224) · [Before (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2224)

```diff
-   51593: (CC, zC, ZC) => {
+   51852: (kk, Fk, Ik) => {
```

#### 154. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2227` → after: `L2227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2227) · [Before (L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2227)

```diff
-   51600: (CC, zC, ZC) => {
+   51861: (kk, Fk, Ik) => {
```

#### 155. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2230` → after: `L2230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2230) · [Before (L2230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2230)

```diff
-   51608: (CC, zC, ZC) => {
+   51870: (kk, Fk, Ik) => {
```

#### 156. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2233` → after: `L2233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2233) · [Before (L2233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2233)

```diff
-   51613: (CC, zC, ZC) => {
+   51875: (kk, Fk, Ik) => {
```

#### 157. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2236` → after: `L2236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2236) · [Before (L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2236)

```diff
-   51620: (CC, zC, ZC) => {
+   51884: (kk, Fk, Ik) => {
```

#### 158. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2239` → after: `L2239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2239) · [Before (L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2239)

```diff
-   51622: (CC, zC, ZC) => {
+   51886: (kk, Fk, Ik) => {
```

#### 159. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2242` → after: `L2242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2242) · [Before (L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2242)

```diff
-   51629: (CC, zC, ZC) => {
+   51893: (kk, Fk, Ik) => {
```

#### 160. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2245` → after: `L2245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2245) · [Before (L2245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2245)

```diff
-   51633: (CC, zC, ZC) => {
+   51900: (kk, Fk, Ik) => {
```

#### 161. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2248` → after: `L2248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2248) · [Before (L2248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2248)

```diff
-   51636: (CC, zC, ZC) => {
+   51902: (kk, Fk, Ik) => {
```

#### 162. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2251` → after: `L2251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2251) · [Before (L2251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2251)

```diff
-   51644: (CC, zC, ZC) => {
+   51908: (kk, Fk, Ik) => {
```

#### 163. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2254` → after: `L2254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2254) · [Before (L2254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2254)

```diff
-   51649: (CC, zC, ZC) => {
+   51912: (kk, Fk, Ik) => {
```

#### 164. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2257` → after: `L2257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2257) · [Before (L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2257)

```diff
-   51656: (CC, zC, ZC) => {
+   51919: (kk, Fk, Ik) => {
```

#### 165. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2260` → after: `L2260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2260) · [Before (L2260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2260)

```diff
-   51662: (CC, zC, ZC) => {
+   51928: (kk, Fk, Ik) => {
```

#### 166. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2263` → after: `L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2263) · [Before (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2263)

```diff
-   51664: (CC, zC, ZC) => {
+   51933: (kk, Fk, Ik) => {
```

#### 167. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2266` → after: `L2266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2266) · [Before (L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2266)

```diff
-   51672: (CC, zC, ZC) => {
+   51939: (kk, Fk, Ik) => {
```

#### 168. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2269` → after: `L2269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2269) · [Before (L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2269)

```diff
-   51679: (CC, zC, ZC) => {
+   51944: (kk, Fk, Ik) => {
```

#### 169. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2272` → after: `L2272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2272) · [Before (L2272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2272)

```diff
-   51687: (CC, zC, ZC) => {
+   51947: (kk, Fk, Ik) => {
```

#### 170. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2275` → after: `L2275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2275) · [Before (L2275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2275)

```diff
-   51695: (CC, zC, ZC) => {
+   51950: (kk, Fk, Ik) => {
```

#### 171. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2278` → after: `L2278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2278) · [Before (L2278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2278)

```diff
-   51699: (CC, zC, ZC) => {
+   51958: (kk, Fk, Ik) => {
```

#### 172. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2281` → after: `L2281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2281) · [Before (L2281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2281)

```diff
-   51702: (CC, zC, ZC) => {
+   51962: (kk, Fk, Ik) => {
```

#### 173. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2284` → after: `L2284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2284) · [Before (L2284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2284)

```diff
-   51711: (CC, zC, ZC) => {
+   51964: (kk, Fk, Ik) => {
```

#### 174. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2287` → after: `L2287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2287) · [Before (L2287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2287)

```diff
-   51718: (CC, zC, ZC) => {
+   51973: (kk, Fk, Ik) => {
```

#### 175. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2290` → after: `L2290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2290) · [Before (L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2290)

```diff
-   51725: (CC, zC, ZC) => {
+   51975: (kk, Fk, Ik) => {
```

#### 176. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2293` → after: `L2293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2293) · [Before (L2293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2293)

```diff
-   51734: (CC, zC, ZC) => {
+   51981: (kk, Fk, Ik) => {
```

#### 177. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2296` → after: `L2296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2296) · [Before (L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2296)

```diff
-   51741: (CC, zC, ZC) => {
+   51987: (kk, Fk, Ik) => {
```

#### 178. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2299` → after: `L2299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2299) · [Before (L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2299)

```diff
-   51743: (CC, zC, ZC) => {
+   51996: (kk, Fk, Ik) => {
```

#### 179. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2302` → after: `L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2302) · [Before (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2302)

```diff
-   51752: (CC, zC, ZC) => {
+   52005: (kk, Fk, Ik) => {
```

#### 180. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2305` → after: `L2305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2305) · [Before (L2305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2305)

```diff
-   51754: (CC, zC, ZC) => {
+   52008: (kk, Fk, Ik) => {
```

#### 181. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2308` → after: `L2308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2308) · [Before (L2308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2308)

```diff
-   51762: (CC, zC, ZC) => {
+   52012: (kk, Fk, Ik) => {
```

#### 182. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2311` → after: `L2311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2311) · [Before (L2311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2311)

```diff
-   51765: (CC, zC, ZC) => {
+   52016: (kk, Fk, Ik) => {
```

#### 183. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2314` → after: `L2314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2314) · [Before (L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2314)

```diff
-   51773: (CC, zC, ZC) => {
+   52019: (kk, Fk, Ik) => {
```

#### 184. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2317` → after: `L2317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2317) · [Before (L2317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2317)

```diff
-   51779: (CC, zC, ZC) => {
+   52027: (kk, Fk, Ik) => {
```

#### 185. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2320` → after: `L2320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2320) · [Before (L2320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2320)

```diff
-   51783: (CC, zC, ZC) => {
+   52033: (kk, Fk, Ik) => {
```

#### 186. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2323` → after: `L2323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2323) · [Before (L2323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2323)

```diff
-   51789: (CC, zC, ZC) => {
+   52038: (kk, Fk, Ik) => {
```

#### 187. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2326` → after: `L2326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2326) · [Before (L2326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2326)

```diff
-   51793: (CC, zC, ZC) => {
+   52047: (kk, Fk, Ik) => {
```

#### 188. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2329` → after: `L2329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2329) · [Before (L2329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2329)

```diff
-   51801: (CC, zC, ZC) => {
+   52053: (kk, Fk, Ik) => {
```

#### 189. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2332` → after: `L2332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2332) · [Before (L2332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2332)

```diff
-   51805: (CC, zC, ZC) => {
+   52061: (kk, Fk, Ik) => {
```

#### 190. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2335` → after: `L2335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2335) · [Before (L2335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2335)

```diff
-   51810: (CC, zC, ZC) => {
+   52066: (kk, Fk, Ik) => {
```

#### 191. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2338` → after: `L2338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2338) · [Before (L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2338)

```diff
-   51819: (CC, zC, ZC) => {
+   52071: (kk, Fk, Ik) => {
```

#### 192. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2341` → after: `L2341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2341) · [Before (L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2341)

```diff
-   51821: (CC, zC, ZC) => {
+   52073: (kk, Fk, Ik) => {
```

#### 193. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2344` → after: `L2344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2344) · [Before (L2344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2344)

```diff
-   51830: (CC, zC, ZC) => {
+   52080: (kk, Fk, Ik) => {
```

#### 194. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2347` → after: `L2347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2347) · [Before (L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2347)

```diff
-   51835: (CC, zC, ZC) => {
+   52085: (kk, Fk, Ik) => {
```

#### 195. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2350` → after: `L2350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2350) · [Before (L2350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2350)

```diff
-   51839: (CC, zC, ZC) => {
+   52087: (kk, Fk, Ik) => {
```

#### 196. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2353` → after: `L2353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2353) · [Before (L2353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2353)

```diff
-   51844: (CC, zC, ZC) => {
+   52089: (kk, Fk, Ik) => {
```

#### 197. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2356` → after: `L2356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2356) · [Before (L2356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2356)

```diff
-   51848: (CC, zC, ZC) => {
+   52092: (kk, Fk, Ik) => {
```

#### 198. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2359` → after: `L2359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2359) · [Before (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2359)

```diff
-   51853: (CC, zC, ZC) => {
+   52098: (kk, Fk, Ik) => {
```

#### 199. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2362` → after: `L2362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2362) · [Before (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2362)

```diff
-   51856: (CC, zC, ZC) => {
+   52106: (kk, Fk, Ik) => {
```

#### 200. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2365` → after: `L2365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2365) · [Before (L2365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2365)

```diff
-   51859: (CC, zC, ZC) => {
+   52110: (kk, Fk, Ik) => {
```

#### 201. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2368` → after: `L2368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2368) · [Before (L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2368)

```diff
-   51863: (CC, zC, ZC) => {
+   52115: (kk, Fk, Ik) => {
```

#### 202. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2371` → after: `L2371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2371) · [Before (L2371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2371)

```diff
-   51872: (CC, zC, ZC) => {
+   52124: (kk, Fk, Ik) => {
```

#### 203. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2374` → after: `L2374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2374) · [Before (L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2374)

```diff
-   51876: (CC, zC, ZC) => {
+   52133: (kk, Fk, Ik) => {
```

#### 204. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2377` → after: `L2377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2377) · [Before (L2377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2377)

```diff
-   51878: (CC, zC, ZC) => {
+   52141: (kk, Fk, Ik) => {
```

#### 205. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2380` → after: `L2380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2380) · [Before (L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2380)

```diff
-   51880: (CC, zC, ZC) => {
+   52145: (kk, Fk, Ik) => {
```

#### 206. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2383` → after: `L2383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2383) · [Before (L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2383)

```diff
-   51887: (CC, zC, ZC) => {
+   52149: (kk, Fk, Ik) => {
```

#### 207. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2386` → after: `L2386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2386) · [Before (L2386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2386)

```diff
-   51894: (CC, zC, ZC) => {
+   52157: (kk, Fk, Ik) => {
```

#### 208. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2389` → after: `L2389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2389) · [Before (L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2389)

```diff
-   51897: (CC, zC, ZC) => {
+   52164: (kk, Fk, Ik) => {
```

#### 209. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2392` → after: `L2392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2392) · [Before (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2392)

```diff
-   51902: (CC, zC, ZC) => {
+   52169: (kk, Fk, Ik) => {
```

#### 210. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2395` → after: `L2395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2395) · [Before (L2395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2395)

```diff
-   51906: (CC, zC, ZC) => {
+   52173: (kk, Fk, Ik) => {
```

#### 211. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2398` → after: `L2398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2398) · [Before (L2398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2398)

```diff
-   51910: (CC, zC, ZC) => {
+   52182: (kk, Fk, Ik) => {
```

#### 212. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2401` → after: `L2401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2401) · [Before (L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2401)

```diff
-   51914: (CC, zC, ZC) => {
+   52191: (kk, Fk, Ik) => {
```

#### 213. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2404` → after: `L2404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2404) · [Before (L2404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2404)

```diff
-   51922: (CC, zC, ZC) => {
+   52194: (kk, Fk, Ik) => {
```

#### 214. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2407` → after: `L2407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2407) · [Before (L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2407)

```diff
-   51929: (CC, zC, ZC) => {
+   52197: (kk, Fk, Ik) => {
```

#### 215. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2410` → after: `L2410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2410) · [Before (L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2410)

```diff
-   51937: (CC, zC, ZC) => {
+   52202: (kk, Fk, Ik) => {
```

#### 216. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2413` → after: `L2413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2413) · [Before (L2413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2413)

```diff
-   51939: (CC, zC, ZC) => {
+   52207: (kk, Fk, Ik) => {
```

#### 217. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2416` → after: `L2416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2416) · [Before (L2416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2416)

```diff
-   51941: (CC, zC, ZC) => {
+   52210: (kk, Fk, Ik) => {
```

#### 218. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2419` → after: `L2419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2419) · [Before (L2419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2419)

```diff
-   51945: (CC, zC, ZC) => {
+   52216: (kk, Fk, Ik) => {
```

#### 219. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2422` → after: `L2422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2422) · [Before (L2422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2422)

```diff
-   51954: (CC, zC, ZC) => {
+   52224: (kk, Fk, Ik) => {
```

#### 220. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2425` → after: `L2425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2425) · [Before (L2425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2425)

```diff
-   51962: (CC, zC, ZC) => {
+   52227: (kk, Fk, Ik) => {
```

#### 221. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2428` → after: `L2428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2428) · [Before (L2428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2428)

```diff
-   51971: (CC, zC, ZC) => {
+   52231: (kk, Fk, Ik) => {
```

#### 222. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2431` → after: `L2431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2431) · [Before (L2431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2431)

```diff
-   51974: (CC, zC, ZC) => {
+   52238: (kk, Fk, Ik) => {
```

#### 223. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2434` → after: `L2434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2434) · [Before (L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2434)

```diff
-   51977: (CC, zC, ZC) => {
+   52244: (kk, Fk, Ik) => {
```

#### 224. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2437` → after: `L2437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2437) · [Before (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2437)

```diff
-   51986: (CC, zC, ZC) => {
+   52249: (kk, Fk, Ik) => {
```

#### 225. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2440` → after: `L2440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2440) · [Before (L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2440)

```diff
-   51989: (CC, zC, ZC) => {
+   52256: (kk, Fk, Ik) => {
```

#### 226. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2443` → after: `L2443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2443) · [Before (L2443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2443)

```diff
-   51998: (CC, zC, ZC) => {
+   52265: (kk, Fk, Ik) => {
```

#### 227. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2446` → after: `L2446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2446) · [Before (L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2446)

```diff
-   52005: (CC, zC, ZC) => {
+   52274: (kk, Fk, Ik) => {
```

#### 228. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2449` → after: `L2449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2449) · [Before (L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2449)

```diff
-   52010: (CC, zC, ZC) => {
+   52276: (kk, Fk, Ik) => {
```

#### 229. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2452` → after: `L2452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2452) · [Before (L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2452)

```diff
-   52018: (CC, zC, ZC) => {
+   52282: (kk, Fk, Ik) => {
```

#### 230. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2455` → after: `L2455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2455) · [Before (L2455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2455)

```diff
-   52025: (CC, zC, ZC) => {
+   52291: (kk, Fk, Ik) => {
```

#### 231. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2458` → after: `L2458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2458) · [Before (L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2458)

```diff
-   52034: (CC, zC, ZC) => {
+   52299: (kk, Fk, Ik) => {
```

#### 232. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2461` → after: `L2461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2461) · [Before (L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2461)

```diff
-   52043: (CC, zC, ZC) => {
+   52306: (kk, Fk, Ik) => {
```

#### 233. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2464` → after: `L2464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2464) · [Before (L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2464)

```diff
-   52047: (CC, zC, ZC) => {
+   52308: (kk, Fk, Ik) => {
```

#### 234. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2467` → after: `L2467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2467) · [Before (L2467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2467)

```diff
-   52050: (CC, zC, ZC) => {
+   52313: (kk, Fk, Ik) => {
```

#### 235. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2470` → after: `L2470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2470) · [Before (L2470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2470)

```diff
-   52055: (CC, zC, ZC) => {
+   52322: (kk, Fk, Ik) => {
```

#### 236. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2473` → after: `L2473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2473) · [Before (L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2473)

```diff
-   52059: (CC, zC, ZC) => {
+   52329: (kk, Fk, Ik) => {
```

#### 237. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2476` → after: `L2476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2476) · [Before (L2476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2476)

```diff
-   52062: (CC, zC, ZC) => {
+   52338: (kk, Fk, Ik) => {
```

#### 238. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2479` → after: `L2479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2479) · [Before (L2479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2479)

```diff
-   52068: (CC, zC, ZC) => {
+   52343: (kk, Fk, Ik) => {
```

#### 239. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2482` → after: `L2482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2482) · [Before (L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2482)

```diff
-   52076: (CC, zC, ZC) => {
+   52348: (kk, Fk, Ik) => {
```

#### 240. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2485` → after: `L2485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2485) · [Before (L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2485)

```diff
-   52081: (CC, zC, ZC) => {
+   52352: (kk, Fk, Ik) => {
```

#### 241. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2488` → after: `L2488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2488) · [Before (L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2488)

```diff
-   52089: (CC, zC, ZC) => {
+   52361: (kk, Fk, Ik) => {
```

#### 242. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2491` → after: `L2491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2491) · [Before (L2491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2491)

```diff
-   52097: (CC, zC, ZC) => {
+   52366: (kk, Fk, Ik) => {
```

#### 243. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2494` → after: `L2494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2494) · [Before (L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2494)

```diff
-   52102: (CC, zC, ZC) => {
+   52373: (kk, Fk, Ik) => {
```

#### 244. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2497` → after: `L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2497) · [Before (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2497)

```diff
-   52104: (CC, zC, ZC) => {
+   52376: (kk, Fk, Ik) => {
```

#### 245. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2500` → after: `L2500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2500) · [Before (L2500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2500)

```diff
-   52112: (CC, zC, ZC) => {
+   52383: (kk, Fk, Ik) => {
```

#### 246. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2503` → after: `L2503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2503) · [Before (L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2503)

```diff
-   52116: (CC, zC, ZC) => {
+   52390: (kk, Fk, Ik) => {
```

#### 247. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2506` → after: `L2506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2506) · [Before (L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2506)

```diff
-   52125: (CC, zC, ZC) => {
+   52395: (kk, Fk, Ik) => {
```

#### 248. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2509` → after: `L2509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2509) · [Before (L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2509)

```diff
-   52133: (CC, zC, ZC) => {
+   52400: (kk, Fk, Ik) => {
```

#### 249. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2512` → after: `L2512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2512) · [Before (L2512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2512)

```diff
-   52139: (CC, zC, ZC) => {
+   52408: (kk, Fk, Ik) => {
```

#### 250. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2515` → after: `L2515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2515) · [Before (L2515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2515)

```diff
-   52146: (CC, zC, ZC) => {
+   52415: (kk, Fk, Ik) => {
```

#### 251. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2518` → after: `L2518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2518) · [Before (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2518)

```diff
-   52155: (CC, zC, ZC) => {
+   52424: (kk, Fk, Ik) => {
```

#### 252. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2521` → after: `L2521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2521) · [Before (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2521)

```diff
-   52160: (CC, zC, ZC) => {
+   52427: (kk, Fk, Ik) => {
```

#### 253. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2524` → after: `L2524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2524) · [Before (L2524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2524)

```diff
-   52165: (CC, zC, ZC) => {
+   52432: (kk, Fk, Ik) => {
```

#### 254. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2527` → after: `L2527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2527) · [Before (L2527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2527)

```diff
-   52169: (CC, zC, ZC) => {
+   52437: (kk, Fk, Ik) => {
```

#### 255. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2530` → after: `L2530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2530) · [Before (L2530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2530)

```diff
-   52176: (CC, zC, ZC) => {
+   52440: (kk, Fk, Ik) => {
```

#### 256. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2533` → after: `L2533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2533) · [Before (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2533)

```diff
-   52179: (CC, zC, ZC) => {
+   52447: (kk, Fk, Ik) => {
```

#### 257. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2536` → after: `L2536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2536) · [Before (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2536)

```diff
-   52186: (CC, zC, ZC) => {
+   52456: (kk, Fk, Ik) => {
```

#### 258. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2539` → after: `L2539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2539) · [Before (L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2539)

```diff
-   52194: (CC, zC, ZC) => {
+   52458: (kk, Fk, Ik) => {
```

#### 259. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2542` → after: `L2542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2542) · [Before (L2542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2542)

```diff
-   52200: (CC, zC, ZC) => {
+   52463: (kk, Fk, Ik) => {
```

#### 260. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2545` → after: `L2545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2545) · [Before (L2545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2545)

```diff
-   52204: (CC, zC, ZC) => {
+   52467: (kk, Fk, Ik) => {
```

#### 261. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2548` → after: `L2548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2548) · [Before (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2548)

```diff
-   52211: (CC, zC, ZC) => {
+   52472: (kk, Fk, Ik) => {
```

#### 262. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2551` → after: `L2551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2551) · [Before (L2551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2551)

```diff
-   52214: (CC, zC, ZC) => {
+   52477: (kk, Fk, Ik) => {
```

#### 263. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2554` → after: `L2554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2554) · [Before (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2554)

```diff
-   52223: (CC, zC, ZC) => {
+   52483: (kk, Fk, Ik) => {
```

#### 264. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2557` → after: `L2557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2557) · [Before (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2557)

```diff
-   52229: (CC, zC, ZC) => {
+   52488: (kk, Fk, Ik) => {
```

#### 265. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2560` → after: `L2560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2560) · [Before (L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2560)

```diff
-   52237: (CC, zC, ZC) => {
+   52497: (kk, Fk, Ik) => {
```

#### 266. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2563` → after: `L2563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2563) · [Before (L2563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2563)

```diff
-   52242: (CC, zC, ZC) => {
+   52506: (kk, Fk, Ik) => {
```

#### 267. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2566` → after: `L2566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2566) · [Before (L2566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2566)

```diff
-   52245: (CC, zC, ZC) => {
+   52509: (kk, Fk, Ik) => {
```

#### 268. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2569` → after: `L2569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2569) · [Before (L2569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2569)

```diff
-   52248: (CC, zC, ZC) => {
+   52514: (kk, Fk, Ik) => {
```

#### 269. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2572` → after: `L2572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2572) · [Before (L2572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2572)

```diff
-   52254: (CC, zC, ZC) => {
+   52517: (kk, Fk, Ik) => {
```

#### 270. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2575` → after: `L2575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2575) · [Before (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2575)

```diff
-   52256: (CC, zC, ZC) => {
+   52520: (kk, Fk, Ik) => {
```

#### 271. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2578` → after: `L2578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2578) · [Before (L2578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2578)

```diff
-   52263: (CC, zC, ZC) => {
+   52526: (kk, Fk, Ik) => {
```

#### 272. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2581` → after: `L2581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2581) · [Before (L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2581)

```diff
-   52268: (CC, zC, ZC) => {
+   52532: (kk, Fk, Ik) => {
```

#### 273. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2584` → after: `L2584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2584) · [Before (L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2584)

```diff
-   52272: (CC, zC, ZC) => {
+   52536: (kk, Fk, Ik) => {
```

#### 274. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2587` → after: `L2587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2587) · [Before (L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2587)

```diff
-   52281: (CC, zC, ZC) => {
+   52541: (kk, Fk, Ik) => {
```

#### 275. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2590` → after: `L2590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2590) · [Before (L2590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2590)

```diff
-   52285: (CC, zC, ZC) => {
+   52543: (kk, Fk, Ik) => {
```

#### 276. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2593` → after: `L2593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2593) · [Before (L2593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2593)

```diff
-   52293: (CC, zC, ZC) => {
+   52546: (kk, Fk, Ik) => {
```

#### 277. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2596` → after: `L2596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2596) · [Before (L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2596)

```diff
-   52296: (CC, zC, ZC) => {
+   52554: (kk, Fk, Ik) => {
```

#### 278. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2599` → after: `L2599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2599) · [Before (L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2599)

```diff
-   52299: (CC, zC, ZC) => {
+   52557: (kk, Fk, Ik) => {
```

#### 279. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2602` → after: `L2602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2602) · [Before (L2602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2602)

```diff
-   52307: (CC, zC, ZC) => {
+   52564: (kk, Fk, Ik) => {
```

#### 280. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2605` → after: `L2605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2605) · [Before (L2605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2605)

```diff
-   52314: (CC, zC, ZC) => {
+   52572: (kk, Fk, Ik) => {
```

#### 281. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2608` → after: `L2608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/itemSprites.js#L2608) · [Before (L2608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/itemSprites.js#L2608)

```diff
-   52320: (CC, zC, ZC) => {
+   52579: (kk, Fk, Ik) => {
```
