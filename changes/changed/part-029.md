# Changed — Bundle Modifications Report (Part 029 / 140)

- **Updated at**: `2026-11-24T17:23 JST`
- **Part**: `29 / 140` (**434** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 028](part-028.md) · [Part 030 →](part-030.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/156.js` (mpd96o.85ad4551 → tz47m9.2cb7e113 · continued)

- **File**: `bundles/bloxd.io/chunks/js/156.js` (289 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4)

#### 80. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1188` → after: `L1188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1188) · [Before (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1188)

```diff
-       Tf = mm => Math.abs(mm.dx) >= 5e-4 || Math.abs(mm.dy) >= 5e-4 ? mm : {
+       Dw = DD => Math.abs(DD.dx) >= 5e-4 || Math.abs(DD.dy) >= 5e-4 ? DD : {
```

#### 81. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1217-L1218` → after: `L1217-L1218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1217-L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1217-L1218) · [Before (L1217-L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1217-L1218)

```diff
-           const fm = (0, hT.b)(mm.origin),
-             hm = (0, hT.b)(Tm),
+           const wD = (0, wz.e)(DD.origin),
+             pD = (0, wz.e)(zD),
```

#### 82. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1244` → after: `L1244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1244) · [Before (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1244)

```diff
-               Tm = mm ? (0, hT.B)(mm, (0, hT.z)(Rm.width, Rm.height, Om)) : {
+               zD = DD ? (0, wz.C)(DD, (0, wz.B)(RD.width, RD.height, ID)) : {
```

#### 83. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1252` → after: `L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1252) · [Before (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1252)

```diff
-               hm = FT(xm.to) ? fm : Tf(fm);
+               pD = Hz(rD.to) ? wD : Dw(wD);
```

#### 84. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1267-L1268` → after: `L1267-L1268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1267-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1267-L1268) · [Before (L1267-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1267-L1268)

```diff
-               am = (0, hT.v)(Am, Em, 40 / im),
-               xm = "cluster" === om && void 0 !== pm.cluster && null !== (0, hT.v)(Am, [{
+               KD = (0, wz.x)(sD, UD, 40 / gD),
+               rD = "cluster" === fD && void 0 !== AD.cluster && null !== (0, wz.x)(sD, [{
```

#### 85. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1272` → after: `L1272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1272) · [Before (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1272)

```diff
-               Dm = "menu" === om && void 0 !== pm.menu && (0, hT.c)(pm.menu, Am) && ("menu" === am || null !== am && (0, AT.w)(am, Ym.hudElements[am])),
+               cD = "menu" === fD && void 0 !== AD.menu && (0, wz.h)(AD.menu, sD) && ("menu" === KD || null !== KD && (0, pz.w)(KD, BD.hudElements[KD])),
```

#### 86. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1275` → after: `L1275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1275) · [Before (L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1275)

```diff
-               Vm = null !== Rm && void 0 !== Rm ? Rm : am;
+               nD = null !== RD && void 0 !== RD ? RD : KD;
```

#### 87. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1283` → after: `L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1283) · [Before (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1283)

```diff
-               }(mm.pointerId), !qm(Vm)) return void jm(Om && am ? am : Vm);
+               }(DD.pointerId), !GD(nD)) return void hD(ID && KD ? KD : nD);
```

#### 88. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1285` → after: `L1285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1285) · [Before (L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1285)

```diff
-             const [Km, Qm] = null !== (Tm = Ym.hudElements[Vm]) && void 0 !== Tm ? Tm : [0, 0], nm = {
+             const [OD, JD] = null !== (zD = BD.hudElements[nD]) && void 0 !== zD ? zD : [0, 0], ED = {
```

#### 89. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1305` → after: `L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1305) · [Before (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1305)

```diff
-                 centre: (0, hT.b)(pm[Vm]),
+                 centre: (0, wz.e)(AD[nD]),
```

#### 90. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1311` → after: `L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1311) · [Before (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1311)

```diff
-               tapPick: Om ? am : null
+               tapPick: ID ? KD : null
```

#### 91. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1322-L1323` → after: `L1322-L1323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1322-L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1322-L1323) · [Before (L1322-L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1322-L1323)

```diff
-             (fm.moved = !0, pm) && (fm.ringStyle = null !== (Em = null === (om = hm.current) || void 0 === om ? void 0 : om.getAttribute("style")) && void 0 !== Em ? Em : null);
-             const Ym = (0, hT.z)(Rm.width, Rm.height, Om);
+             (wD.moved = !0, AD) && (wD.ringStyle = null !== (UD = null === (fD = pD.current) || void 0 === fD ? void 0 : fD.getAttribute("style")) && void 0 !== UD ? UD : null);
+             const BD = (0, wz.B)(RD.width, RD.height, ID);
```

#### 92. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1331` → after: `L1331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1331) · [Before (L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1331)

```diff
-                 hm = null !== (qm = Qm(fm, mm)) && void 0 !== qm ? qm : {
+                 pD = null !== (GD = JD(wD, DD)) && void 0 !== GD ? GD : {
```

#### 93. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1338` → after: `L1338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1338) · [Before (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1338)

```diff
-                 Am = (0, hT.b)(fm.origin);
+                 sD = (0, wz.e)(wD.origin);
```

#### 94. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1340` → after: `L1340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1340) · [Before (L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1340)

```diff
-                 centre: mm ? (0, hT.b)(mm) : {
+                 centre: DD ? (0, wz.e)(DD) : {
```

#### 95. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1351` → after: `L1351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1351) · [Before (L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1351)

```diff
-                 let hm = (0, hT.h)(mm.box, Am / im, wm / im, Ym);
+                 let pD = (0, wz.m)(DD.box, sD / gD, LD / gD, BD);
```

#### 96. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1353-L1355` → after: `L1353-L1355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1353-L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1353-L1355) · [Before (L1353-L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1353-L1355)

```diff
-                 if (xm && Math.abs((0, hT.b)(fm.origin).x + hm.x - am) <= 8 / im) {
-                   const Tm = am - (0, hT.b)(fm.origin).x,
-                     Am = (0, hT.h)(mm.box, Tm, hm.y, Ym);
+                 if (rD && Math.abs((0, wz.e)(wD.origin).x + pD.x - KD) <= 8 / gD) {
+                   const zD = KD - (0, wz.e)(wD.origin).x,
+                     sD = (0, wz.m)(DD.box, zD, pD.y, BD);
```

#### 97. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1358` → after: `L1358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1358) · [Before (L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1358)

```diff
-                 const Dm = (0, hT.r)(fm.from, hm.x - mm.skew.x, hm.y - mm.skew.y, Rm.width, Rm.height);
+                 const cD = (0, wz.u)(wD.from, pD.x - DD.skew.x, pD.y - DD.skew.y, RD.width, RD.height);
```

#### 98. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1361` → after: `L1361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1361) · [Before (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1361)

```diff
-               nm = (0, hT.h)(jm.anchor.box, Am / im, wm / im, Ym),
+               ED = (0, wz.m)(hD.anchor.box, sD / gD, LD / gD, BD),
```

#### 99. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1363-L1364` → after: `L1363-L1364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1363-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1363-L1364) · [Before (L1363-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1363-L1364)

```diff
-               cm = (0, hT.b)(fm.origin),
-               zm = ((0, Sm.S)(fm.id) ? 20 : 6) / im;
+               XD = (0, wz.e)(wD.origin),
+               VD = ((0, TD.M)(wD.id) ? 20 : 6) / gD;
```

#### 100. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1372` → after: `L1372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1372) · [Before (L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1372)

```diff
-               Km(jm.anchor), fm.away = null !== (Zm = Qm(fm, Dm(fm.id))) && void 0 !== Zm ? Zm : jm.anchor, Km(fm.away)
+               OD(hD.anchor), wD.away = null !== (PD = JD(wD, cD(wD.id))) && void 0 !== PD ? PD : hD.anchor, OD(wD.away)
```

#### 101. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1381` → after: `L1381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1381) · [Before (L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1381)

```diff
-                 Tm.style.left = hm.left * im + "px", Tm.style.top = hm.top * im + "px", Tm.style.width = (hm.right - hm.left) * im + "px", Tm.style.height = (hm.bottom - hm.top) * im + "px", Tm.style.translate = `${((mm.to.dx-mm.from.dx)*Rm.width+fm.x)*im}px ${((mm.to.dy-mm.from. … [truncated]
+                 zD.style.left = pD.left * gD + "px", zD.style.top = pD.top * gD + "px", zD.style.width = (pD.right - pD.left) * gD + "px", zD.style.height = (pD.bottom - pD.top) * gD + "px", zD.style.translate = `${((DD.to.dx-DD.from.dx)*RD.width+wD.x)*gD}px ${((DD.to.dy-DD.from. … [truncated]
```

#### 102. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1401-L1402` → after: `L1401-L1402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1401-L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1401-L1402) · [Before (L1401-L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1401-L1402)

```diff
-         fm = Tm => (0, Sm.S)(Tm) && !mm.documentElement.classList.contains((0, aT.z)(Tm));
-       for (const xm of mm.querySelectorAll(`[${Cm}]`)) {
+         wD = zD => (0, TD.M)(zD) && !DD.documentElement.classList.contains((0, sz.C)(zD));
+       for (const rD of DD.querySelectorAll(`[${ND}]`)) {
```

#### 103. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1404` → after: `L1404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1404) · [Before (L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1404)

```diff
-           hm = (null !== mm && void 0 !== mm ? mm : xm).getBoundingClientRect();
+           pD = (null !== DD && void 0 !== DD ? DD : rD).getBoundingClientRect();
```

#### 104. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1415` → after: `L1415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1415) · [Before (L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1415)

```diff
-       const hm = mm => (0, hT.C)(Tm.filter((Tm => {
+       const pD = DD => (0, wz.G)(zD.filter((zD => {
```

#### 105. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1441` → after: `L1441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1441) · [Before (L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1441)

```diff
-             const hm = [...mm.querySelectorAll(`[${Cm}]:not(.HudPreviewGhost)`)].filter((mm => Gm.has(mm.getAttribute(Cm)))).map((mm => {
+             const pD = [...DD.querySelectorAll(`[${ND}]:not(.HudPreviewGhost)`)].filter((DD => dD.has(DD.getAttribute(ND)))).map((DD => {
```

#### 106. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1450` → after: `L1450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1450) · [Before (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1450)

```diff
-               Am = (0, hT.C)(hm);
+               sD = (0, wz.G)(pD);
```

#### 107. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1458-L1461` → after: `L1458-L1461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1458-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1458-L1461) · [Before (L1458-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1458-L1461)

```diff
-           Dm = am(Sm.i);
-         if (!wm || xm(Dm)) return Sm.i;
-         const im = (mm, Tm, fm) => Tm > mm ? 1 + (fm - mm) * (Sm.i - 1) / (Tm - mm) : Sm.i;
-         let Rm = Math.floor(Math.min(Sm.i, im(wm.w, Dm.w, hm), im(wm.h, Dm.h, Am)) / fm + 1e-6) * fm;
+           cD = KD(TD.h);
+         if (!LD || rD(cD)) return TD.h;
+         const gD = (DD, zD, wD) => zD > DD ? 1 + (wD - DD) * (TD.h - 1) / (zD - DD) : TD.h;
+         let RD = Math.floor(Math.min(TD.h, gD(LD.w, cD.w, pD), gD(LD.h, cD.h, sD)) / wD + 1e-6) * wD;
```

#### 108. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1505` → after: `L1505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1505) · [Before (L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1505)

```diff
-               [hm, Am, am, xm] = Tm ? (0, aT.q)(Tm, window.innerWidth, window.innerHeight, fm) : fm;
+               [pD, sD, KD, rD] = zD ? (0, sz.v)(zD, window.innerWidth, window.innerHeight, wD) : wD;
```

#### 109. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1534` → after: `L1534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1534) · [Before (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1534)

```diff
-         for (const fm of im.querySelectorAll(`[${Cm}]`)) Tm.observe(fm);
+         for (const wD of gD.querySelectorAll(`[${ND}]`)) zD.observe(wD);
```

#### 110. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1557` → after: `L1557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1557) · [Before (L1557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1557)

```diff
-             wm = "inventory" === am && fm.hudLocked.includes(am) && void 0 !== xm && !(0, Sm.P)(xm);
+             LD = "inventory" === KD && wD.hudLocked.includes(KD) && void 0 !== rD && !(0, TD.I)(rD);
```

#### 111. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1602` → after: `L1602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1602) · [Before (L1602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1602)

```diff
-       return pf[(0, hT.o)(pf.map((mm => Rm[mm])), pm, {
+       return Rw[(0, wz.t)(Rw.map((DD => RD[DD])), AD, {
```

#### 112. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1607-L1608` → after: `L1607-L1608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1607-L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1607-L1608) · [Before (L1607-L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1607-L1608)

```diff
-     function of() {
-       const [mm, Tm] = (0, TT.c)();
+     function Uw() {
+       const [DD, zD] = (0, Dz.d)();
```

#### 113. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1633` → after: `L1633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1633) · [Before (L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1633)

```diff
-       } = (0, hm.A)(), Km = of(), nm = (null !== (Tm = (0, Om.g)("maxAuraLevel")) && void 0 !== Tm ? Tm : 0) > 0, Jm = fm.hudLayouts[am], cm = (0, Am.useRef)(null), zm = (0, Am.useRef)(null), Zm = (0, Am.useRef)(null), km = (0, Am.useRef)(null), em = (0, Am.useRef)(null), Nm = (0 … [truncated]
+       } = (0, pD.E)(), OD = Uw(), ED = (null !== (zD = (0, ID.h)("maxAuraLevel")) && void 0 !== zD ? zD : 0) > 0, QD = wD.hudLayouts[KD], XD = (0, sD.useRef)(null), VD = (0, sD.useRef)(null), PD = (0, sD.useRef)(null), CD = (0, sD.useRef)(null), bD = (0, sD.useRef)(null), jD = (0 … [truncated]
```

#### 114. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1645` → after: `L1645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1645) · [Before (L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1645)

```diff
-         replicaKey: `${pm}:${Em}:${nm}`,
+         replicaKey: `${AD}:${UD}:${ED}`,
```

#### 115. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1657` → after: `L1657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1657) · [Before (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1657)

```diff
-         const Am = (0, hT.b)(Tm.inventory),
+         const sD = (0, wz.e)(zD.inventory),
```

#### 116. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1696` → after: `L1696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1696) · [Before (L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1696)

```diff
-           Tm ? wT((0, Sm.ib)(fm, am, mm, Tm)) : (TT(), tm(fm))
+           zD ? rz((0, TD.Z)(wD, KD, DD, zD)) : (Dz(), uD(wD))
```

#### 117. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1705` → after: `L1705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1705) · [Before (L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1705)

```diff
-           return Cm && Bm && null !== (Tm = Af(Cm).boxes[mm]) && void 0 !== Tm ? Tm : null
+           return ND && oD && null !== (zD = pw(ND).boxes[DD]) && void 0 !== zD ? zD : null
```

#### 118. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1728` → after: `L1728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1728) · [Before (L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1728)

```diff
-           (null !== (mm = null === (Tm = Jm.hudElements[Am]) || void 0 === Tm ? void 0 : Tm[2]) && void 0 !== mm ? mm : 1) > (null !== (fm = null === (hm = RT.current[Am]) || void 0 === hm ? void 0 : hm[2]) && void 0 !== fm ? fm : 1) && Rm(Am) && !(0, AT.w)(Am, Jm.hudElements[Am] … [truncated]
+           (null !== (DD = null === (zD = QD.hudElements[sD]) || void 0 === zD ? void 0 : zD[2]) && void 0 !== DD ? DD : 1) > (null !== (wD = null === (pD = gz.current[sD]) || void 0 === pD ? void 0 : pD[2]) && void 0 !== wD ? wD : 1) && RD(sD) && !(0, pz.w)(sD, QD.hudElements[sD] … [truncated]
```

#### 119. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1736` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1736) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1736)

```diff
-         const fm = (0, hT.B)(Tm, (0, hT.z)(Km.width, Km.height, Mm));
+         const wD = (0, wz.C)(zD, (0, wz.B)(OD.width, OD.height, mD));
```

#### 120. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1739` → after: `L1739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1739) · [Before (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1739)

```diff
-           const [Tm, Am] = null !== (hm = Jm.hudElements[mm]) && void 0 !== hm ? hm : [0, 0];
+           const [zD, sD] = null !== (pD = QD.hudElements[DD]) && void 0 !== pD ? pD : [0, 0];
```

#### 121. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1744` → after: `L1744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1744) · [Before (L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1744)

```diff
-           wT((0, Sm.ib)(fm, am, mm, {
+           rz((0, TD.Z)(wD, KD, DD, {
```

#### 122. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1759` → after: `L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1759) · [Before (L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1759)

```diff
-           wT((0, Sm.ob)(fm, am, mm)), Nm.current && (Nm.current.style.inset = (0, aT.q)(mm, Km.width, Km.height, lT(null !== Cm && void 0 !== Cm ? Cm : document)).map((mm => mm * Pm + "px")).join(" "))
+           rz((0, TD.db)(wD, KD, DD)), jD.current && (jD.current.style.inset = (0, sz.v)(DD, OD.width, OD.height, yz(null !== ND && void 0 !== ND ? ND : document)).map((DD => DD * iD + "px")).join(" "))
```

#### 123. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1762` → after: `L1762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1762) · [Before (L1762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1762)

```diff
-       const pT = new Set(Object.keys(Jm.hudElements).filter((mm => (0, Sm.u)(Jm.hudElements, mm)))),
+       const Rz = new Set(Object.keys(QD.hudElements).filter((DD => (0, TD.o)(QD.hudElements, DD)))),
```

#### 124. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1765` → after: `L1765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1765) · [Before (L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1765)

```diff
-         OT = (0, kT.g)(Km.width, Km.height),
+         fz = (0, Pz.e)(OD.width, OD.height),
```

#### 125. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1767` → after: `L1767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1767) · [Before (L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1767)

```diff
-           const Am = mm => (0, Sm.u)(fm.hudElements, mm) || (0, AT.u)(mm, fm, hm);
+           const sD = DD => (0, TD.o)(wD.hudElements, DD) || (0, pz.u)(DD, wD, pD);
```

#### 126. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1781` → after: `L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1781) · [Before (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1781)

```diff
-             return Tm !== wm.id && (0, hT.f)(fm, wm.box, 2)
+             return zD !== LD.id && (0, wz.j)(wD, LD.box, 2)
```

#### 127. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1786` → after: `L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1786) · [Before (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1786)

```diff
-         jT = (0, AT.H)(Jm, (0, AT.D)(om.rowIcons)).state,
+         Gz = (0, pz.E)(QD, (0, pz.A)(fD.rowIcons)).state,
```

#### 128. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1800` → after: `L1800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1800) · [Before (L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1800)

```diff
-           cluster: af(Cm, (0, hT.z)(Km.width, Km.height, Mm), zT)
+           cluster: sw(ND, (0, wz.B)(OD.width, OD.height, mD), Xz)
```

#### 129. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1834` → after: `L1834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1834) · [Before (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1834)

```diff
-               transform: `scale(${Pm})`
+               transform: `scale(${iD})`
```

#### 130. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1865-L1866` → after: `L1865-L1866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1865-L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1865-L1866) · [Before (L1865-L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1865-L1866)

```diff
-                 style: QT((0, hT.l)(hm, 40 / Pm))
-               }, `${fm}:${Tm}`)
+                 style: Oz((0, wz.q)(pD, 40 / iD))
+               }, `${wD}:${zD}`)
```

#### 131. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1875` → after: `L1875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1875) · [Before (L1875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1875)

```diff
-                 children: (0, Qm.jsx)(bm.c, {
+                 children: (0, JD.jsx)(xD.e, {
```

#### 132. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1923-L1924` → after: `L1923-L1924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1923-L1924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1923-L1924) · [Before (L1923-L1924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1923-L1924)

```diff
-       } = (0, hm.A)(), om = (0, Am.useRef)(null);
-       (0, mT.s)("popup", om, Rm),
+       } = (0, pD.E)(), fD = (0, sD.useRef)(null);
+       (0, qD.u)("popup", fD, RD),
```

#### 133. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1976-L1977` → after: `L1976-L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1976-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L1976-L1977) · [Before (L1976-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L1976-L1977)

```diff
-             return im[(0, hT.o)(Rm, pm, {
-               avoid: fm && null !== (hm = Tm[fm]) && void 0 !== hm ? hm : null
+             return gD[(0, wz.t)(RD, AD, {
+               avoid: wD && null !== (pD = zD[wD]) && void 0 !== pD ? pD : null
```

#### 134. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2020` → after: `L2020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2020) · [Before (L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2020)

```diff
-           }), (0, Qm.jsx)(im.e, {
+           }), (0, JD.jsx)(gD.f, {
```

#### 135. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2029` → after: `L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2029) · [Before (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2029)

```diff
-     const Vf = mm => `${Math.round(100*mm)}%`;
+     const hw = DD => `${Math.round(100*DD)}%`;
```

#### 136. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2039-L2040` → after: `L2039-L2040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2039-L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2039-L2040) · [Before (L2039-L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2039-L2040)

```diff
-       } = (0, hm.A)();
-       return (0, Qm.jsx)(om.m, {
+       } = (0, pD.E)();
+       return (0, JD.jsx)(fD.e, {
```

#### 137. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2043` → after: `L2043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2043) · [Before (L2043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2043)

```diff
-         max: Sm.i,
+         max: TD.h,
```

#### 138. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2062` → after: `L2062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2062) · [Before (L2062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2062)

```diff
-       } = (0, hm.A)(), {
+       } = (0, pD.E)(), {
```

#### 139. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2079` → after: `L2079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2079) · [Before (L2079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2079)

```diff
-       } = mm, Km = (0, Am.useRef)(null), nm = null !== xm && (Vm || !(0, Sm.S)(xm));
+       } = DD, OD = (0, sD.useRef)(null), ED = null !== rD && (nD || !(0, TD.M)(rD));
```

#### 140. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2082` → after: `L2082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2082) · [Before (L2082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2082)

```diff
-         const Tm = xm ? null === (mm = Km.current) || void 0 === mm ? void 0 : mm.querySelector(`[data-hud-row="${xm}"]`) : null;
+         const zD = rD ? null === (DD = OD.current) || void 0 === DD ? void 0 : DD.querySelector(`[data-hud-row="${rD}"]`) : null;
```

#### 141. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2095` → after: `L2095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2095) · [Before (L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2095)

```diff
-             mm - hm > 1500 ? am() : WT() ? Am = null : null === Am ? Am = mm : mm - Am >= 150 && (am(), function(mm) {
+             DD - pD > 1500 ? KD() : Yz() ? sD = null : null === sD ? sD = DD : DD - sD >= 150 && (KD(), function(DD) {
```

#### 142. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2118` → after: `L2118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2118) · [Before (L2118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2118)

```diff
-         children: Hm.filter((mm => fm.has(mm.id) && (Vm || !(0, Sm.S)(mm.id)))).map((fm => {
+         children: lD.filter((DD => wD.has(DD.id) && (nD || !(0, TD.M)(DD.id)))).map((wD => {
```

#### 143. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2121` → after: `L2121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2121) · [Before (L2121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2121)

```diff
-               return null !== (fm = mm[Tm]) && void 0 !== fm ? fm : Sm.m
+               return null !== (wD = DD[zD]) && void 0 !== wD ? wD : TD.k
```

#### 144. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2123` → after: `L2123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2123) · [Before (L2123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2123)

```diff
-             Am = (0, Sm.u)(am, fm.id),
+             sD = (0, TD.o)(KD, wD.id),
```

#### 145. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2139` → after: `L2139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2139) · [Before (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2139)

```diff
-                 "aria-expanded": nm ? Km : void 0,
+                 "aria-expanded": ED ? OD : void 0,
```

#### 146. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2206` → after: `L2206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2206) · [Before (L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2206)

```diff
-       } = (0, hm.A)(), Rm = of(), pm = (0, Am.useRef)(null), {
+       } = (0, pD.E)(), RD = Uw(), AD = (0, sD.useRef)(null), {
```

#### 147. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2212` → after: `L2212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2212) · [Before (L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2212)

```diff
-       const jm = (0, hT.w)(Ym ? om : Em, Rm.width, Rm.height, Tm.maxHeight),
+       const hD = (0, wz.z)(BD ? fD : UD, RD.width, RD.height, zD.maxHeight),
```

#### 148. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2221` → after: `L2221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2221) · [Before (L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2221)

```diff
-         Im = mm => (0, Qm.jsxs)(im.V, {
+         MD = DD => (0, JD.jsxs)(gD.Y, {
```

#### 149. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2228` → after: `L2228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2228) · [Before (L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2228)

```diff
-           children: [(0, Qm.jsx)(bm.c, {
+           children: [(0, JD.jsx)(xD.e, {
```

#### 150. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2261-L2264` → after: `L2261-L2264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2261-L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2261-L2264) · [Before (L2261-L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2261-L2264)

```diff
-     var nf = fm(2455),
-       Jf = fm(4341),
-       zf = fm(2427),
-       Zf = fm(2388);
+     var Jw = wD(2454),
+       Ew = wD(4436),
+       Qw = wD(2426),
+       Xw = wD(2396);
```

#### 151. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2266` → after: `L2266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2266) · [Before (L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2266)

```diff
-       const Tm = aT.m * ("sides" === mm ? window.innerWidth : window.innerHeight);
+       const zD = sz.o * ("sides" === DD ? window.innerWidth : window.innerHeight);
```

#### 152. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2275` → after: `L2275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2275) · [Before (L2275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2275)

```diff
-       ef = mm => `${mm}px`;
+       xw = DD => `${DD}px`;
```

#### 153. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2285-L2286` → after: `L2285-L2286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2285-L2286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2285-L2286) · [Before (L2285-L2286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2285-L2286)

```diff
-       } = (0, hm.A)(), wm = (0, aT.q)(null !== Tm && void 0 !== Tm ? Tm : Sf, window.innerWidth, window.innerHeight, lT(document).map(Math.round)), Dm = (0, Am.useRef)(null !== Tm && void 0 !== Tm ? Tm : Sf);
-       Dm.current = null !== Tm && void 0 !== Tm ? Tm : Sf;
+       } = (0, pD.E)(), LD = (0, sz.v)(null !== zD && void 0 !== zD ? zD : Cw, window.innerWidth, window.innerHeight, yz(document).map(Math.round)), cD = (0, sD.useRef)(null !== zD && void 0 !== zD ? zD : Cw);
+       cD.current = null !== zD && void 0 !== zD ? zD : Cw;
```

#### 154. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2289` → after: `L2289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2289) · [Before (L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2289)

```diff
-         return (0, Qm.jsx)(om.m, {
+         return (0, JD.jsx)(fD.e, {
```

#### 155. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2315` → after: `L2315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2315) · [Before (L2315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2315)

```diff
-           }), (0, Qm.jsx)(im.V, {
+           }), (0, JD.jsx)(gD.Y, {
```

#### 156. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2331` → after: `L2331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2331) · [Before (L2331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2331)

```diff
-       } = (0, hm.A)(), am = (0, Sm.hb)(), {
+       } = (0, pD.E)(), KD = (0, TD.Y)(), {
```

#### 157. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2333` → after: `L2333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2333) · [Before (L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2333)

```diff
-       } = (0, Rm.m)(["clientEscMenuOptions"]), wm = (0, nf.g)(), Dm = am.hudLayouts[wm], [pm, Em] = (0, Am.useState)(null), {
+       } = (0, RD.n)(["clientEscMenuOptions"]), LD = (0, Jw.j)(), cD = KD.hudLayouts[LD], [AD, UD] = (0, sD.useState)(null), {
```

#### 158. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2338-L2339` → after: `L2338-L2339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2338-L2339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2338-L2339) · [Before (L2338-L2339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2338-L2339)

```diff
-         const [fm, hm] = (0, Am.useState)((() => Sm.D.some((Tm => void 0 !== mm.hudElements[Tm] || mm.hudLocked.includes(Tm))))), am = (0, Am.useCallback)((mm => {
-           Tm(mm), (0, Sm.S)(mm) && hm(!0)
+         const [wD, pD] = (0, sD.useState)((() => TD.z.some((zD => void 0 !== DD.hudElements[zD] || DD.hudLocked.includes(zD))))), KD = (0, sD.useCallback)((DD => {
+           zD(DD), (0, TD.M)(DD) && pD(!0)
```

#### 159. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2349` → after: `L2349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2349) · [Before (L2349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2349)

```diff
-         Km((mm => (null === mm || void 0 === mm ? void 0 : mm.size) === hm.length && hm.every((Tm => mm.has(Tm))) ? mm : new Set(hm)))
+         OD((DD => (null === DD || void 0 === DD ? void 0 : DD.size) === pD.length && pD.every((zD => DD.has(zD))) ? DD : new Set(pD)))
```

#### 160. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2352` → after: `L2352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2352) · [Before (L2352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2352)

```diff
-       } = (0, Rm.m)(["gameState"]), bm = (0, zf.h)(), em = null !== (mm = null === (Tm = (0, Zf.q)()) || void 0 === Tm ? void 0 : Tm.icon) && void 0 !== mm ? mm : null, [Nm] = (0, Am.useState)((() => "inGame" === km ? function(mm, Tm, fm) {
+       } = (0, RD.n)(["gameState"]), xD = (0, Qw.j)(), bD = null !== (DD = null === (zD = (0, Xw.r)()) || void 0 === zD ? void 0 : zD.icon) && void 0 !== DD ? DD : null, [jD] = (0, sD.useState)((() => "inGame" === CD ? function(DD, zD, wD) {
```

#### 161. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2358` → after: `L2358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2358) · [Before (L2358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2358)

```diff
-           const mm = hm.querySelector(`.TouchSlot${Rm} > .TouchKey`);
+           const DD = pD.querySelector(`.TouchSlot${RD} > .TouchKey`);
```

#### 162. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2362` → after: `L2362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2362) · [Before (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2362)

```diff
-             const Tm = (null !== (xm = null === (wm = mm.querySelector(".TouchKeyLabel")) || void 0 === wm ? void 0 : wm.textContent) && void 0 !== xm ? xm : "").split(/\s+/).filter((mm => !/[\d\xd7]/.test(mm))).join(" ");
+             const zD = (null !== (rD = null === (LD = DD.querySelector(".TouchKeyLabel")) || void 0 === LD ? void 0 : LD.textContent) && void 0 !== rD ? rD : "").split(/\s+/).filter((DD => !/[\d\xd7]/.test(DD))).join(" ");
```

#### 163. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2367` → after: `L2367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2367) · [Before (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2367)

```diff
-             const fm = mm.querySelector(`.InGameUi ${Tm}`);
+             const wD = DD.querySelector(`.InGameUi ${zD}`);
```

#### 164. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2372` → after: `L2372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2372) · [Before (L2372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2372)

```diff
-           faces: Object.keys(Am).length > 0 ? Am : null,
+           faces: Object.keys(sD).length > 0 ? sD : null,
```

#### 165. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2376` → after: `L2376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2376) · [Before (L2376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2376)

```diff
-           items: im.length > 0 ? im : null,
+           items: gD.length > 0 ? gD : null,
```

#### 166. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2396` → after: `L2396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2396) · [Before (L2396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2396)

```diff
-       }(Xm), Cm = (0, Jf.m)(xm.joystickMode), rm = xm.touchActionButtons, lm = (0, Am.useMemo)((() => function(mm, Tm) {
+       }(SD), ND = (0, Ew.o)(rD.joystickMode), ZD = rD.touchActionButtons, kD = (0, sD.useMemo)((() => function(DD, zD) {
```

#### 167. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2420` → after: `L2420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2420) · [Before (L2420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2420)

```diff
-         const hm = (0, Sm.q)(),
+         const pD = (0, TD.n)(),
```

#### 168. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2422` → after: `L2422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2422) · [Before (L2422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2422)

```diff
-         (0, Sm.bb)(null !== (Tm = null === (fm = Gm.current) || void 0 === fm ? void 0 : fm.keepLocks(hm, Am)) && void 0 !== Tm ? Tm : Am)
+         (0, TD.V)(null !== (zD = null === (wD = dD.current) || void 0 === wD ? void 0 : wD.keepLocks(pD, sD)) && void 0 !== zD ? zD : sD)
```

#### 169. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2424` → after: `L2424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2424) · [Before (L2424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2424)

```diff
-         TT((fm => (0, Sm.ib)(fm, wm, mm, Tm)))
+         Dz((wD => (0, TD.Z)(wD, LD, DD, zD)))
```

#### 170. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2431` → after: `L2431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2431) · [Before (L2431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2431)

```diff
-           value: `move:${mm}`
+           value: `move:${DD}`
```

#### 171. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2434` → after: `L2434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2434) · [Before (L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2434)

```diff
-         TT((fm => (0, Sm.mb)(fm, wm, mm, Tm)))
+         Dz((wD => (0, TD.ab)(wD, LD, DD, zD)))
```

#### 172. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2439-L2440` → after: `L2439-L2440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2439-L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2439-L2440) · [Before (L2439-L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2439-L2440)

```diff
-         const Tm = (0, Sm.S)(mm) && !Nm.rowIcons.includes(mm);
-         return null === Im || Im.has(mm) || (0, Sm.u)(Dm.hudElements, mm) && !Tm
+         const zD = (0, TD.M)(DD) && !jD.rowIcons.includes(DD);
+         return null === MD || MD.has(DD) || (0, TD.o)(cD.hudElements, DD) && !zD
```

#### 173. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2461` → after: `L2461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2461) · [Before (L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2461)

```diff
-             value: `size:${mm}`
+             value: `size:${DD}`
```

#### 174. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2469` → after: `L2469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2469) · [Before (L2469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2469)

```diff
-             value: `${Tm?"hide":"show"}:${mm}`
+             value: `${zD?"hide":"show"}:${DD}`
```

#### 175. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2473` → after: `L2473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2473) · [Before (L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2473)

```diff
-           fT(mm, Sm.c)
+           zz(DD, TD.d)
```

#### 176. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2488` → after: `L2488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2488) · [Before (L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2488)

```diff
-           }) : hm || (Tm && mT.has(mm) ? fm("hudLayout:lockedNote") : Tm && "cluster" === mm ? fm("hudLayout:clusterNote") : Tm && "menu" === mm ? fm("hudLayout:menuNote") : Tm && (0, AT.w)(mm, Dm.hudElements[mm]) && iT(mm) ? fm("hudLayout:rowIconNote") : Tm && "arrows" === mm ?  … [truncated]
+           }) : pD || (zD && qD.has(DD) ? wD("hudLayout:lockedNote") : zD && "cluster" === DD ? wD("hudLayout:clusterNote") : zD && "menu" === DD ? wD("hudLayout:menuNote") : zD && (0, pz.w)(DD, cD.hudElements[DD]) && cz(DD) ? wD("hudLayout:rowIconNote") : zD && "arrows" === DD ?  … [truncated]
```

#### 177. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2558` → after: `L2558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2558) · [Before (L2558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2558)

```diff
-               TT((Tm => (0, Sm.ob)(Tm, wm, mm)))
+               Dz((zD => (0, TD.db)(zD, LD, DD)))
```

#### 178. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2564` → after: `L2564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2564) · [Before (L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2564)

```diff
-           }), (0, Qm.jsx)(om.e, {
+           }), (0, JD.jsx)(fD.b, {
```

#### 179. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2568` → after: `L2568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2568) · [Before (L2568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2568)

```diff
-               (0, Sm.$)(mm)
+               (0, TD.R)(DD)
```

#### 180. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2573` → after: `L2573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2573) · [Before (L2573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2573)

```diff
-           }), (0, Qm.jsx)(om.i, {
+           }), (0, JD.jsx)(fD.c, {
```

#### 181. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2575` → after: `L2575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2575) · [Before (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2575)

```diff
-             options: Sm.H.map((mm => ({
+             options: TD.A.map((DD => ({
```

#### 182. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2577` → after: `L2577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2577) · [Before (L2577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2577)

```diff
-               label: fm(`hudLayout:shape_${mm}`)
+               label: wD(`hudLayout:shape_${DD}`)
```

#### 183. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2589` → after: `L2589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2589) · [Before (L2589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2589)

```diff
-           }), (0, Qm.jsx)(om.m, {
+           }), (0, JD.jsx)(fD.e, {
```

#### 184. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2595` → after: `L2595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2595) · [Before (L2595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2595)

```diff
-             format: mm => `${Math.round(100*mm)}%`,
+             format: DD => `${Math.round(100*DD)}%`,
```

#### 185. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2602` → after: `L2602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2602) · [Before (L2602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2602)

```diff
-               (0, Sm.X)(mm), (0, cm.reportAnalyticsClick)({
+               (0, TD.P)(DD), (0, XD.reportAnalyticsClick)({
```

#### 186. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2608` → after: `L2608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2608) · [Before (L2608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2608)

```diff
-         }), (0, Qm.jsx)(im.O, {
+         }), (0, JD.jsx)(gD.R, {
```

#### 187. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2622` → after: `L2622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2622) · [Before (L2622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2622)

```diff
-               !0 === await mm.getResult() && (0, Sm.W)()
+               !0 === await DD.getResult() && (0, TD.N)()
```

#### 188. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2633` → after: `L2633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2633) · [Before (L2633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2633)

```diff
-       } = (0, hm.A)(), [Tm, fm] = (0, Am.useState)(!1), am = (0, Am.useRef)(null);
+       } = (0, pD.E)(), [zD, wD] = (0, sD.useState)(!1), KD = (0, sD.useRef)(null);
```

#### 189. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2656` → after: `L2656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2656) · [Before (L2656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2656)

```diff
-       } = (0, hm.A)(), {
+       } = (0, pD.E)(), {
```

#### 190. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2661` → after: `L2661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2661) · [Before (L2661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2661)

```diff
-       } = (0, Rm.m)(["clientEscMenuOptions"]).clientEscMenuOptions;
+       } = (0, RD.n)(["clientEscMenuOptions"]).clientEscMenuOptions;
```

#### 191. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2663` → after: `L2663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2663) · [Before (L2663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2663)

```diff
-         children: [(0, Qm.jsx)(om.i, {
+         children: [(0, JD.jsx)(fD.c, {
```

#### 192. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2665` → after: `L2665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2665) · [Before (L2665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2665)

```diff
-           options: Km.wb.map((Tm => ({
+           options: OD.nb.map((zD => ({
```

#### 193. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2671` → after: `L2671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2671) · [Before (L2671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2671)

```diff
-             Rm.c.setClientEscMenuOptions({
+             RD.e.setClientEscMenuOptions({
```

#### 194. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2676` → after: `L2676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2676) · [Before (L2676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2676)

```diff
-         }), (0, Qm.jsx)(om.e, {
+         }), (0, JD.jsx)(fD.b, {
```

#### 195. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2680` → after: `L2680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2680) · [Before (L2680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2680)

```diff
-             Rm.c.setClientEscMenuOptions({
+             RD.e.setClientEscMenuOptions({
```

#### 196. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2685` → after: `L2685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2685) · [Before (L2685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2685)

```diff
-         }), (0, Qm.jsx)(om.e, {
+         }), (0, JD.jsx)(fD.b, {
```

#### 197. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2689` → after: `L2689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2689) · [Before (L2689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2689)

```diff
-             Rm.c.setClientEscMenuOptions({
+             RD.e.setClientEscMenuOptions({
```

#### 198. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2694` → after: `L2694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2694) · [Before (L2694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2694)

```diff
-         }), (0, Qm.jsx)(om.e, {
+         }), (0, JD.jsx)(fD.b, {
```

#### 199. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2698` → after: `L2698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2698) · [Before (L2698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2698)

```diff
-             Rm.c.setClientEscMenuOptions({
+             RD.e.setClientEscMenuOptions({
```

#### 200. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2706` → after: `L2706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2706) · [Before (L2706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2706)

```diff
-       return (0, Qm.jsx)(Im.c, {})
+       return (0, JD.jsx)(MD.e, {})
```

#### 201. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2710` → after: `L2710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2710) · [Before (L2710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2710)

```diff
-       } = (0, hm.A)(), {
+       } = (0, pD.E)(), {
```

#### 202. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2712-L2713` → after: `L2712-L2713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2712-L2713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2712-L2713) · [Before (L2712-L2713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2712-L2713)

```diff
-       } = (0, Rm.m)(["clientEscMenuOptions"]);
-       return (0, Jm.c)() ? (0, Qm.jsx)(om.e, {
+       } = (0, RD.n)(["clientEscMenuOptions"]);
+       return (0, QD.c)() ? (0, JD.jsx)(fD.b, {
```

#### 203. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2717` → after: `L2717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2717) · [Before (L2717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2717)

```diff
-           Rm.c.setClientEscMenuOptions({
+           RD.e.setClientEscMenuOptions({
```

#### 204. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2730` → after: `L2730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2730) · [Before (L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2730)

```diff
-     var yf = fm(4309);
+     var iw = wD(4399);
```

#### 205. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2735` → after: `L2735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2735) · [Before (L2735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2735)

```diff
-       } = (0, hm.A)(), {
+       } = (0, pD.E)(), {
```

#### 206. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2739` → after: `L2739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2739) · [Before (L2739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2739)

```diff
-       } = (0, Rm.m)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), wm = (0, Om.g)("ezBridging"), Dm = (0, Om.g)("ezTowering"), qm = "inGame" !== xm || !0 === wm, jm = (0, Ym.g)() && ("inGame" !== xm || !0 === Dm), [, Im] = (0, Am.useReducer)((mm => mm + 1), 0), Km = (0, … [truncated]
+       } = (0, RD.n)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), LD = (0, ID.h)("ezBridging"), cD = (0, ID.h)("ezTowering"), GD = "inGame" !== rD || !0 === LD, hD = (0, BD.f)() && ("inGame" !== rD || !0 === cD), [, MD] = (0, sD.useReducer)((DD => DD + 1), 0), OD = (0, … [truncated]
```

#### 207. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2746` → after: `L2746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2746) · [Before (L2746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2746)

```diff
-           }), (0, Qm.jsx)(im.V, {
+           }), (0, JD.jsx)(gD.Y, {
```

#### 208. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2748` → after: `L2748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2748) · [Before (L2748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2748)

```diff
-               Rm.c.set({
+               RD.e.set({
```

#### 209. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2755` → after: `L2755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2755) · [Before (L2755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2755)

```diff
-           children: (0, Qm.jsx)(om.e, {
+           children: (0, JD.jsx)(fD.b, {
```

#### 210. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2759` → after: `L2759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2759) · [Before (L2759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2759)

```diff
-               (0, yf.d)(mm), Jm(mm)
+               (0, iw.b)(DD), QD(DD)
```

#### 211. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2762` → after: `L2762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2762) · [Before (L2762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2762)

```diff
-         }) : null, Tm && (0, Qm.jsx)(Hf, {}), qm && (0, Qm.jsx)(om.e, {
+         }) : null, zD && (0, JD.jsx)(Sw, {}), GD && (0, JD.jsx)(fD.b, {
```

#### 212. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2766` → after: `L2766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2766) · [Before (L2766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2766)

```diff
-             Rm.c.setClientEscMenuOptions({
+             RD.e.setClientEscMenuOptions({
```

#### 213. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2771` → after: `L2771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2771) · [Before (L2771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2771)

```diff
-         }), jm && (0, Qm.jsx)(om.e, {
+         }), hD && (0, JD.jsx)(fD.b, {
```

#### 214. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2775` → after: `L2775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2775) · [Before (L2775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2775)

```diff
-             Rm.c.setClientEscMenuOptions({
+             RD.e.setClientEscMenuOptions({
```

#### 215. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2780` → after: `L2780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2780) · [Before (L2780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2780)

```diff
-         }), (0, Qm.jsx)(om.e, {
+         }), (0, JD.jsx)(fD.b, {
```

#### 216. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2784` → after: `L2784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2784) · [Before (L2784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2784)

```diff
-             Rm.c.setClientEscMenuOptions({
+             RD.e.setClientEscMenuOptions({
```

#### 217. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2789` → after: `L2789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2789) · [Before (L2789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2789)

```diff
-         }), (0, Qm.jsx)(om.e, {
+         }), (0, JD.jsx)(fD.b, {
```

#### 218. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2793` → after: `L2793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2793) · [Before (L2793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2793)

```diff
-             Rm.c.setClientEscMenuOptions({
+             RD.e.setClientEscMenuOptions({
```

#### 219. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2798` → after: `L2798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2798) · [Before (L2798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2798)

```diff
-         }), "mouseOnly" !== (0, Em.d)() && (0, Qm.jsx)(om.m, {
+         }), "mouseOnly" !== (0, UD.e)() && (0, JD.jsx)(fD.e, {
```

#### 220. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2805` → after: `L2805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2805) · [Before (L2805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2805)

```diff
-             Rm.c.setClientEscMenuOptions({
+             RD.e.setClientEscMenuOptions({
```

#### 221. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2809` → after: `L2809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2809) · [Before (L2809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2809)

```diff
-         }), !(0, pm.isMobile)() && (0, Qm.jsx)(om.m, {
+         }), !(0, AD.isMobile)() && (0, JD.jsx)(fD.e, {
```

#### 222. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2816` → after: `L2816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2816) · [Before (L2816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2816)

```diff
-             Rm.c.setClientEscMenuOptions({
+             RD.e.setClientEscMenuOptions({
```

#### 223. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2827` → after: `L2827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2827) · [Before (L2827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2827)

```diff
-             defaultOpen: am.i.has(Tm.id),
+             defaultOpen: KD.h.has(zD.id),
```

#### 224. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2834` → after: `L2834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2834) · [Before (L2834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2834)

```diff
-           }, Tm.name.translationKey))), (0, Qm.jsx)(im.O, {
+           }, zD.name.translationKey))), (0, JD.jsx)(gD.R, {
```

#### 225. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2885` → after: `L2885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2885) · [Before (L2885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2885)

```diff
-       } = (0, hm.A)(), Em = (0, jm.d)(Tm), [om, Om] = (0, Am.useState)(!1), [Ym, Vm] = (0, Am.useState)("controls:clickToEnterNewBinding"), [Im, Km] = (0, Am.useState)(null), [nm, Jm] = (0, Am.useState)(null), cm = (0, Am.useRef)(null);
+       } = (0, pD.E)(), UD = (0, hD.c)(zD), [fD, ID] = (0, sD.useState)(!1), [BD, nD] = (0, sD.useState)("controls:clickToEnterNewBinding"), [MD, OD] = (0, sD.useState)(null), [ED, QD] = (0, sD.useState)(null), XD = (0, sD.useRef)(null);
```

#### 226. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2889` → after: `L2889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2889) · [Before (L2889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2889)

```diff
-       const zm = am.r[Tm].filter((mm => xm.g[mm]));
+       const VD = KD.u[zD].filter((DD => rD.l[DD]));
```

#### 227. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2894` → after: `L2894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2894) · [Before (L2894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2894)

```diff
-           return null !== (Tm = null === (fm = am.e.find((Tm => Tm.id === mm))) || void 0 === fm ? void 0 : fm.actions) && void 0 !== Tm ? Tm : []
+           return null !== (zD = null === (wD = KD.e.find((zD => zD.id === DD))) || void 0 === wD ? void 0 : wD.actions) && void 0 !== zD ? zD : []
```

#### 228. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2898-L2899` → after: `L2898-L2899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2898-L2899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2898-L2899) · [Before (L2898-L2899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2898-L2899)

```diff
-         const mm = am.r[hm];
-         for (const Tm of mm) zm.includes(Tm) && km.push(pm(am.u[hm].translationKey, am.u[hm].params))
+         const DD = KD.u[pD];
+         for (const zD of DD) VD.includes(zD) && CD.push(AD(KD.v[pD].translationKey, KD.v[pD].params))
```

#### 229. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2914` → after: `L2914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2914) · [Before (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2914)

```diff
-             children: [pm(am.u[Tm].translationKey, am.u[Tm].params), Rm && Em && (0, Qm.jsx)(qm.c, {
+             children: [AD(KD.v[zD].translationKey, KD.v[zD].params), RD && UD && (0, JD.jsx)(GD.c, {
```

#### 230. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2925` → after: `L2925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2925) · [Before (L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2925)

```diff
-                   children: (0, am.k)(mm)
+                   children: (0, KD.m)(DD)
```

#### 231. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2930` → after: `L2930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2930) · [Before (L2930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2930)

```diff
-                     const hm = (0, am.v)(Tm, mm);
+                     const pD = (0, KD.w)(zD, DD);
```

#### 232. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2951` → after: `L2951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2951) · [Before (L2951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2951)

```diff
-                   children: Im ? (0, am.k)(Im) : (0, Qm.jsx)("div", {
+                   children: MD ? (0, KD.m)(MD) : (0, JD.jsx)("div", {
```

#### 233. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2963` → after: `L2963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2963) · [Before (L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2963)

```diff
-                     xm.b.includes(Tm) ? (Jm(null), Km(Tm)) : (Jm("controls:keyIsReserved"), Km(null)), mm.preventDefault(), mm.stopPropagation()
+                     rD.d.includes(zD) ? (QD(null), OD(zD)) : (QD("controls:keyIsReserved"), OD(null)), DD.preventDefault(), DD.stopPropagation()
```

#### 234. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2967` → after: `L2967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2967) · [Before (L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2967)

```diff
-                     document.activeElement && document.activeElement.id === em() ? xm.b.includes(Tm) ? (Jm(null), Km(Tm)) : (Jm("controls:keyIsReserved"), Km(null)) : Vm("controls:enterNewBinding"), mm.stopPropagation()
+                     document.activeElement && document.activeElement.id === bD() ? rD.d.includes(zD) ? (QD(null), OD(zD)) : (QD("controls:keyIsReserved"), OD(null)) : nD("controls:enterNewBinding"), DD.stopPropagation()
```

#### 235. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2973` → after: `L2973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L2973) · [Before (L2973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L2973)

```diff
-               }), (0, Qm.jsx)(im.e, {
+               }), (0, JD.jsx)(gD.f, {
```

#### 236. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3002` → after: `L3002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3002) · [Before (L3002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3002)

```diff
-   8833: (mm, Tm, fm) => {
+   8887: (DD, zD, wD) => {
```

#### 237. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3006-L3008` → after: `L3006-L3008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3006-L3008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3006-L3008) · [Before (L3006-L3008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3006-L3008)

```diff
-     var hm = fm(59),
-       Am = fm(1089),
-       am = fm(1135);
+     var pD = wD(58),
+       sD = wD(1057),
+       KD = wD(1096);
```

#### 238. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3023` → after: `L3023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3023) · [Before (L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3023)

```diff
-         children: [(0, am.jsx)(Am.c, {
+         children: [(0, KD.jsx)(sD.e, {
```

#### 239. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3042` → after: `L3042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3042) · [Before (L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3042)

```diff
-   8842: (mm, Tm, fm) => {
+   8894: (DD, zD, wD) => {
```

#### 240. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3136` → after: `L3136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3136) · [Before (L3136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3136)

```diff
-       const fm = (mm, Tm, fm, hm) => Tm - mm > hm - fm ? fm - mm > Tm - hm ? hm - Tm : fm - mm : mm < fm ? fm - mm : Tm > hm ? hm - Tm : 0;
+       const wD = (DD, zD, wD, pD) => zD - DD > pD - wD ? wD - DD > zD - pD ? pD - zD : wD - DD : DD < wD ? wD - DD : zD > pD ? pD - zD : 0;
```

#### 241. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3158-L3160` → after: `L3158-L3159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3158-L3159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3158-L3159) · [Before (L3158-L3160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3158-L3160)

```diff
-       b: () => hm,
-       c: () => xm,
-       f: () => Em,
+       G: () => sD,
+       e: () => pD,
```

#### 242. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3162-L3166` → after: `L3161-L3166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3161-L3166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3161-L3166) · [Before (L3162-L3166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3162-L3166)

```diff
-       l: () => am,
-       o: () => Om,
-       r: () => Rm,
-       v: () => wm,
-       w: () => pm,
+       j: () => UD,
+       m: () => gD,
+       q: () => KD,
+       t: () => ID,
+       u: () => RD,
+       x: () => LD,
```

#### 243. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3170` → after: `L3170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3170) · [Before (L3170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3170)

```diff
-   8603: (mm, Tm, fm) => {
+   8679: (DD, zD, wD) => {
```

#### 244. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3173` → after: `L3173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3173) · [Before (L3173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3173)

```diff
-       h: () => hm
+       i: () => pD
```

#### 245. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3178` → after: `L3178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3178) · [Before (L3178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3178)

```diff
-   8606: (mm, Tm, fm) => {
+   8684: (DD, zD, wD) => {
```

#### 246. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3181-L3185` → after: `L3182-L3185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3182-L3185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3182-L3185) · [Before (L3181-L3185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3181-L3185)

```diff
-       h: () => qm,
-       k: () => Rm,
-       l: () => Vm,
-       o: () => Im,
-       p: () => Em
+       i: () => RD,
+       j: () => nD,
+       m: () => MD,
+       q: () => UD
```

#### 247. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3187-L3188` → after: `L3187-L3188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3187-L3188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3187-L3188) · [Before (L3187-L3188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3187-L3188)

```diff
-     var hm = fm(1668),
-       Am = fm(1722);
+     var pD = wD(1681),
+       sD = wD(1745);
```

#### 248. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3202` → after: `L3202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3202) · [Before (L3202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3202)

```diff
-       Rm = mm => !(!(0, Am.b)(mm) || mm.isContentEditable || mm.hasAttribute("data-pad-no-osk")) && (mm instanceof HTMLTextAreaElement || mm instanceof HTMLInputElement && im.includes(mm.type)),
+       RD = DD => !(!(0, sD.c)(DD) || DD.isContentEditable || DD.hasAttribute("data-pad-no-osk")) && (DD instanceof HTMLTextAreaElement || DD instanceof HTMLInputElement && gD.includes(DD.type)),
```

#### 249. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3211-L3212` → after: `L3211-L3212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3211-L3212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3211-L3212) · [Before (L3211-L3212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3211-L3212)

```diff
-           start: null !== (Tm = mm.selectionStart) && void 0 !== Tm ? Tm : hm.length,
-           end: null !== (fm = mm.selectionEnd) && void 0 !== fm ? fm : hm.length
+           start: null !== (zD = DD.selectionStart) && void 0 !== zD ? zD : pD.length,
+           end: null !== (wD = DD.selectionEnd) && void 0 !== wD ? wD : pD.length
```

#### 250. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3224` → after: `L3224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3224) · [Before (L3224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3224)

```diff
-     const Ym = (mm, Tm) => !!document.execCommand(mm, !1, Tm) || (Om || (Om = !0, console.warn(`execCommand("${mm}") failed; the on-screen keyboard is setting the value directly`)), !1),
+     const BD = (DD, zD) => !!document.execCommand(DD, !1, zD) || (ID || (ID = !0, console.warn(`execCommand("${DD}") failed; the on-screen keyboard is setting the value directly`)), !1),
```

#### 251. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3260` → after: `L3260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3260) · [Before (L3260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3260)

```diff
-   8785: (mm, Tm, fm) => {
+   8841: (DD, zD, wD) => {
```

#### 252. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3264-L3267` → after: `L3264-L3267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3264-L3267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3264-L3267) · [Before (L3264-L3267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3264-L3267)

```diff
-     var hm = fm(23),
-       Am = fm(2109),
-       am = fm(1354),
-       xm = fm(1389);
+     var pD = wD(20),
+       sD = wD(2116),
+       KD = wD(1355),
+       rD = wD(1383);
```

#### 253. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3269` → after: `L3269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3269) · [Before (L3269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3269)

```diff
-       if ((0, xm.h)()) {
+       if ((0, rD.f)()) {
```

#### 254. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3275-L3276` → after: `L3275-L3276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3275-L3276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3275-L3276) · [Before (L3275-L3276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3275-L3276)

```diff
-           }).getResult() || "inGame" !== hm.c.get("gameState")) return
-       }(0, Am.b)()
+           }).getResult() || "inGame" !== pD.e.get("gameState")) return
+       }(0, sD.e)()
```

#### 255. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3279` → after: `L3279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3279) · [Before (L3279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3279)

```diff
-   8788: (mm, Tm, fm) => {
+   8849: (DD, zD, wD) => {
```

#### 256. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3284` → after: `L3283-L3284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3283-L3284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3283-L3284) · [Before (L3284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3284)

```diff
-       g: () => Am,
+       h: () => rD,
+       j: () => sD,
```

#### 257. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3287` → after: `L3287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3287) · [Before (L3287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3287)

```diff
-     var hm = fm(1934);
+     var pD = wD(1962);
```

#### 258. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3289` → after: `L3289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3289) · [Before (L3289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3289)

```diff
-       am = mm => hm.j.includes(mm),
+       KD = DD => pD.e.includes(DD),
```

#### 259. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3294-L3295` → after: `L3294-L3295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3294-L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3294-L3295) · [Before (L3294-L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3294-L3295)

```diff
-           im = null !== Tm && mm.includes(Tm) ? Tm : null;
-         return null !== im && !am(im) && fm(im) ? im : null !== (hm = null !== (Am = null !== (xm = null !== (wm = Dm.find(fm)) && void 0 !== wm ? wm : Dm[0]) && void 0 !== xm ? xm : im) && void 0 !== Am ? Am : mm[0]) && void 0 !== hm ? hm : null
+           gD = null !== zD && DD.includes(zD) ? zD : null;
+         return null !== gD && !KD(gD) && wD(gD) ? gD : null !== (pD = null !== (sD = null !== (rD = null !== (LD = cD.find(wD)) && void 0 !== LD ? LD : cD[0]) && void 0 !== rD ? rD : gD) && void 0 !== sD ? sD : DD[0]) && void 0 !== pD ? pD : null
```

#### 260. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3299` → after: `L3299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3299) · [Before (L3299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3299)

```diff
-   8814: (mm, Tm, fm) => {
+   8870: (DD, zD, wD) => {
```

#### 261. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3301-L3302` → after: `L3301-L3302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3301-L3302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3301-L3302) · [Before (L3301-L3302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3301-L3302)

```diff
-       c: () => im,
-       e: () => Rm
+       d: () => gD,
+       f: () => RD
```

#### 262. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3304-L3309` → after: `L3304-L3309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3304-L3309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3304-L3309) · [Before (L3304-L3309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3304-L3309)

```diff
-     var hm = fm(59),
-       Am = fm(1449),
-       am = fm(1987),
-       xm = fm(1406),
-       wm = fm(1432),
-       Dm = fm(1135);
+     var pD = wD(58),
+       sD = wD(1442),
+       KD = wD(2e3),
+       rD = wD(1394),
+       LD = wD(1417),
+       cD = wD(1096);
```

#### 263. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3311` → after: `L3311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3311) · [Before (L3311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3311)

```diff
-         const mm = (0, xm.r)();
+         const DD = (0, rD.m)();
```

#### 264. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3313` → after: `L3313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3313) · [Before (L3313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3313)

```diff
-             (0, xm.n)()
+             (0, rD.i)()
```

#### 265. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3318` → after: `L3318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3318) · [Before (L3318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3318)

```diff
-         return (0, Dm.jsx)(wm.c, {
+         return (0, cD.jsx)(LD.b, {
```

#### 266. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3324` → after: `L3324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3324) · [Before (L3324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3324)

```diff
-         const Tm = (0, xm.r)(),
+         const zD = (0, rD.m)(),
```

#### 267. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3329` → after: `L3329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3329) · [Before (L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3329)

```diff
-   8613: (mm, Tm, fm) => {
+   8692: (DD, zD, wD) => {
```

#### 268. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3331-L3332` → after: `L3331-L3333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3331-L3333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3331-L3333) · [Before (L3331-L3332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3331-L3332)

```diff
-       d: () => hm,
-       f: () => im,
+       c: () => pD,
+       e: () => gD,
+       g: () => BD,
```

#### 269. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3339` → after: `L3339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3339) · [Before (L3339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3339)

```diff
-       y: () => Em
+       w: () => UD
```

#### 270. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3402` → after: `L3402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3402) · [Before (L3402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3402)

```diff
-   8601: (mm, Tm, fm) => {
+   8671: (DD, zD, wD) => {
```

#### 271. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3404-L3405` → after: `L3404-L3405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3404-L3405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3404-L3405) · [Before (L3404-L3405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3404-L3405)

```diff
-       B: () => Zm,
-       F: () => nm,
+       A: () => PD,
+       D: () => ED,
```

#### 272. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3409-L3410` → after: `L3409-L3411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3409-L3411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3409-L3411) · [Before (L3409-L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3409-L3410)

```diff
-       O: () => Rm,
-       e: () => jm,
+       N: () => RD,
+       c: () => hD,
+       d: () => VD,
```

#### 273. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3412-L3414` → after: `L3413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3413) · [Before (L3412-L3414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3412-L3414)

```diff
-       g: () => Qm,
-       i: () => Km,
-       l: () => Om,
+       j: () => OD,
```

#### 274. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3416` → after: `L3415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3415) · [Before (L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3416)

```diff
-       p: () => Em,
+       o: () => BD,
```

#### 275. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3418-L3419` → after: `L3417-L3419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3417-L3419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3417-L3419) · [Before (L3418-L3419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3418-L3419)

```diff
-       u: () => cm,
-       y: () => im
+       t: () => fD,
+       v: () => XD,
+       w: () => gD
```

#### 276. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3421-L3426` → after: `L3421-L3426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3421-L3426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3421-L3426) · [Before (L3421-L3426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3421-L3426)

```diff
-     var hm = fm(31),
-       Am = fm(1668),
-       am = fm(8603),
-       xm = fm(8606),
-       wm = fm(8613);
-     const Dm = mm => (0, xm.k)(mm),
+     var pD = wD(25),
+       sD = wD(1681),
+       KD = wD(8679),
+       rD = wD(8684),
+       LD = wD(8692);
+     const cD = DD => (0, rD.i)(DD),
```

#### 277. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3507` → after: `L3507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3507) · [Before (L3507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3507)

```diff
-         hm.j.gp(am.h, mm)
+         pD.l.KG(KD.i, DD)
```

#### 278. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3512` → after: `L3512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3512) · [Before (L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3512)

```diff
-           fm = null !== Tm && void 0 !== Tm ? Tm : mm;
+           wD = null !== zD && void 0 !== zD ? zD : DD;
```

#### 279. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3522` → after: `L3522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3522) · [Before (L3522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3522)

```diff
-         const fm = null !== (Tm = mm.closest(Vm)) && void 0 !== Tm ? Tm : mm.querySelector(Vm);
+         const wD = null !== (zD = DD.closest(nD)) && void 0 !== zD ? zD : DD.querySelector(nD);
```

#### 280. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3535` → after: `L3535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3535) · [Before (L3535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3535)

```diff
-         return null !== (Tm = [...mm.querySelectorAll("[data-pad-back]")].find(wm.n)) && void 0 !== Tm ? Tm : null
+         return null !== (zD = [...DD.querySelectorAll("[data-pad-back]")].find(LD.r)) && void 0 !== zD ? zD : null
```

#### 281. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3543` → after: `L3543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3543) · [Before (L3543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3543)

```diff
-         return null !== (Tm = null !== (fm = null !== (hm = mm.getAttribute("data-pad-key")) && void 0 !== hm ? hm : mm.getAttribute("href")) && void 0 !== fm ? fm : null === (Am = mm.querySelector("a[href]")) || void 0 === Am ? void 0 : Am.getAttribute("href")) && void 0 !== Tm  … [truncated]
+         return null !== (zD = null !== (wD = null !== (pD = DD.getAttribute("data-pad-key")) && void 0 !== pD ? pD : DD.getAttribute("href")) && void 0 !== wD ? wD : null === (sD = DD.querySelector("a[href]")) || void 0 === sD ? void 0 : sD.getAttribute("href")) && void 0 !== zD  … [truncated]
```

#### 282. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3546` → after: `L3546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3546) · [Before (L3546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3546)

```diff
-   8824: (mm, Tm, fm) => {
+   8883: (DD, zD, wD) => {
```

#### 283. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3551-L3553` → after: `L3551-L3553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3551-L3553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3551-L3553) · [Before (L3551-L3553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3551-L3553)

```diff
-     var hm = fm(23),
-       Am = fm(1321),
-       am = fm(105);
+     var pD = wD(20),
+       sD = wD(1332),
+       KD = wD(103);
```

#### 284. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3608` → after: `L3608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3608) · [Before (L3608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3608)

```diff
-           Am = null !== Tm && void 0 !== Tm ? Tm : hm.pattern;
+           sD = null !== zD && void 0 !== zD ? zD : pD.pattern;
```

#### 285. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3611` → after: `L3611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3611) · [Before (L3611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3611)

```diff
-         am - this.lastAnyAt < 40 && hm.priority < this.playingPriority || am - (null !== (fm = this.lastAt.get(mm)) && void 0 !== fm ? fm : -1 / 0) < hm.minGapMs || am < this.playingUntil && hm.priority < this.playingPriority || (this.lastAt.set(mm, am), this.lastAnyAt = am, this … [truncated]
+         KD - this.lastAnyAt < 40 && pD.priority < this.playingPriority || KD - (null !== (wD = this.lastAt.get(DD)) && void 0 !== wD ? wD : -1 / 0) < pD.minGapMs || KD < this.playingUntil && pD.priority < this.playingPriority || (this.lastAt.set(DD, KD), this.lastAnyAt = KD, this … [truncated]
```

#### 286. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3618` → after: `L3618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3618) · [Before (L3618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3618)

```diff
-       enabled: () => wm() && hm.c.get("isTouchScreen") && hm.c.get("clientEscMenuOptions").vibration && !(0, Am.f)()
+       enabled: () => LD() && pD.e.get("isTouchScreen") && pD.e.get("clientEscMenuOptions").vibration && !(0, sD.g)()
```

#### 287. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3621` → after: `L3621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3621) · [Before (L3621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3621)

```diff
-   8709: (mm, Tm, fm) => {
+   8792: (DD, zD, wD) => {
```

#### 288. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3642` → after: `L3642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3642) · [Before (L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3642)

```diff
-       const Am = null !== (hm = fm.excludedPlayers) && void 0 !== hm ? hm : [Tm];
+       const sD = null !== (pD = wD.excludedPlayers) && void 0 !== pD ? pD : [zD];
```

#### 289. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3646-L3649` → after: `L3646-L3649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3646-L3649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/156.js#L3646-L3649) · [Before (L3646-L3649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/156.js#L3646-L3649)

```diff
-       e: () => am,
-       g: () => Am,
-       i: () => xm,
-       l: () => hm
+       d: () => KD,
+       h: () => sD,
+       l: () => rD,
+       o: () => pD
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/157.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/157.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076)

#### 1. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L4-L7` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/157.js#L4-L5) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/157.js#L4-L7)

```diff
-   36689: (mm, Tm, fm) => {
-     fm.d(Tm, {
-       c: () => am,
-       d: () => Ym,
+   36586: (DD, zD, wD) => {
+     wD.d(zD, {
```

#### 2. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L10` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/157.js#L8-L9) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/157.js#L10)

```diff
-       i: () => Em,
+       j: () => GD,
+       k: () => LD,
```

#### 3. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L12-L18` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/157.js#L11-L18) · [Before (L12-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/157.js#L12-L18)

```diff
-       p: () => pm,
-       r: () => Im,
-       u: () => Om,
-       v: () => Vm
-     });
-     var hm = fm(23),
-       Am = fm(31);
+       q: () => hD,
+       s: () => AD,
+       v: () => MD,
+       y: () => ID,
+       z: () => nD
+     });
+     var pD = wD(20),
+       sD = wD(25);
```

#### 4. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/157.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/157.js#L25)

```diff
-         return (null !== (fm = mm.order) && void 0 !== fm ? fm : 0) - (null !== (hm = Tm.order) && void 0 !== hm ? hm : 0)
+         return (null !== (wD = DD.order) && void 0 !== wD ? wD : 0) - (null !== (pD = zD.order) && void 0 !== pD ? pD : 0)
```

#### 5. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/157.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/157.js#L42)

```diff
-       mm.panel && "clientGame" === hm.c.get("openInGameMenuName") && im(mm.id)
+       DD.panel && "clientGame" === pD.e.get("openInGameMenuName") && gD(DD.id)
```

#### 6. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/157.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/157.js#L68)

```diff
-       "inventory" !== hm.c.get("openInGameMenuName") && im(null)
+       "inventory" !== pD.e.get("openInGameMenuName") && gD(null)
```

#### 7. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L77-L86` → after: `L77-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L77-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/157.js#L77-L86) · [Before (L77-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/157.js#L77-L86)

```diff
-       return xm.set(mm.id, mm), Am.j.gp(am, wm(), !0), () => {
-         xm.get(mm.id) === mm && (xm.delete(mm.id), Am.j.gp(am, wm()))
-       }
-     }
-   },
-   36686: (mm, Tm, fm) => {
-     fm.d(Tm, {
-       e: () => wm,
-       h: () => qm,
-       j: () => jm,
+       return rD.set(DD.id, DD), sD.l.KG(KD, LD(), !0), () => {
+         rD.get(DD.id) === DD && (rD.delete(DD.id), sD.l.KG(KD, LD()))
+       }
+     }
+   },
+   36580: (DD, zD, wD) => {
+     wD.d(zD, {
+       c: () => LD,
+       g: () => GD,
+       i: () => hD,
```

#### 8. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L89-L90` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/157.js#L89-L90) · [Before (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/157.js#L89-L90)

```diff
-       s: () => Ym,
-       u: () => om,
+       r: () => BD,
+       t: () => fD,
```

#### 9. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L93-L96` → after: `L93-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L93-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/157.js#L93-L96) · [Before (L93-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/157.js#L93-L96)

```diff
-     var hm = fm(23),
-       Am = fm(31),
-       am = fm(1286),
-       xm = fm(36689);
+     var pD = wD(20),
+       sD = wD(25),
+       KD = wD(1299),
+       rD = wD(36586);
```

#### 10. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L109-L110` → after: `L109-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L109-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/157.js#L109-L110) · [Before (L109-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/157.js#L109-L110)

```diff
-       return Dm = fm, Am.j.gp(wm, Dm, !0), () => {
-         Dm === fm && (Dm = null, Om = !1, qm(), Am.j.gp(wm, null))
+       return cD = wD, sD.l.KG(LD, cD, !0), () => {
+         cD === wD && (cD = null, ID = !1, GD(), sD.l.KG(LD, null))
```

#### 11. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L127-L128` → after: `L127-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L127-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/157.js#L127-L128) · [Before (L127-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/157.js#L127-L128)

```diff
-       const mm = hm.c.get("openInGameMenuName");
-       "clientGame" !== mm && (Om = "inventory" === mm), (0, xm.i)() || (0, xm.e)(), (0, am.p)(am.c), hm.c.set({
+       const DD = pD.e.get("openInGameMenuName");
+       "clientGame" !== DD && (ID = "inventory" === DD), (0, rD.m)() || (0, rD.j)(), (0, KD.p)(KD.b), pD.e.set({
```

#### 12. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/157.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/157.js#L143)

```diff
-       "clientGame" === hm.c.get("openInGameMenuName") && hm.c.set({
+       "clientGame" === pD.e.get("openInGameMenuName") && pD.e.set({
```

#### 13. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L145-L148` → after: `L145-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L145-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/157.js#L145-L148) · [Before (L145-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/157.js#L145-L148)

```diff
-       }), mm || (0, xm.e)(), Om = !1
-     }
-   },
-   8702: (mm, Tm, fm) => {
+       }), DD || (0, rD.j)(), ID = !1
+     }
+   },
+   8785: (DD, zD, wD) => {
```

#### 14. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L152-L154` → after: `L152-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L152-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/157.js#L152-L154) · [Before (L152-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/157.js#L152-L154)

```diff
-     var hm = fm(8709),
-       Am = fm(653),
-       am = fm(135);
+     var pD = wD(8792),
+       sD = wD(619),
+       KD = wD(128);
```

#### 15. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L158-L159` → after: `L158-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/157.js#L158-L159) · [Before (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/157.js#L158-L159)

```diff
-       if ((0, Am.H)(mm)) return !0;
-       const xm = null !== (Tm = null === (fm = am.k[am.q]) || void 0 === fm ? void 0 : fm.adConfig.showRewardedAds) && void 0 !== Tm && Tm;
+       if ((0, sD.B)(DD)) return !0;
+       const rD = null !== (zD = null === (wD = KD.n[KD.v]) || void 0 === wD ? void 0 : wD.adConfig.showRewardedAds) && void 0 !== zD && zD;
```

#### 16. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/157.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/157.js#L164)

```diff
-             if ((0, hm.l)(Tm.items[mm], xm)) return !1
+             if ((0, pD.o)(zD.items[DD], rD)) return !1
```

#### 17. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/157.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/157.js#L169)

```diff
-   60672: (mm, Tm, fm) => {
+   60381: (DD, zD, wD) => {
```

#### 18. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L174-L177` → after: `L174-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L174-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/157.js#L174-L177) · [Before (L174-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/157.js#L174-L177)

```diff
-     var hm = fm(36686),
-       Am = fm(8702)
-   },
-   8709: (mm, Tm, fm) => {
+     var pD = wD(36580),
+       sD = wD(8785)
+   },
+   8792: (DD, zD, wD) => {
```

#### 19. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L198` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/157.js#L198) · [Before (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/157.js#L198)

```diff
-       const Am = null !== (hm = fm.excludedPlayers) && void 0 !== hm ? hm : [Tm];
+       const sD = null !== (pD = wD.excludedPlayers) && void 0 !== pD ? pD : [zD];
```

#### 20. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L202-L205` → after: `L202-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L202-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/157.js#L202-L205) · [Before (L202-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/157.js#L202-L205)

```diff
-       e: () => am,
-       g: () => Am,
-       i: () => xm,
-       l: () => hm
+       d: () => KD,
+       h: () => sD,
+       l: () => rD,
+       o: () => pD
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/158.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/158.js` (140 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056)

#### 1. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L4)

```diff
-   39241: (mm, Tm, fm) => {
+   39083: (DD, zD, wD) => {
```

#### 2. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L6-L7)

```diff
-       d: () => wm,
-       g: () => am
+       b: () => LD,
+       d: () => KD
```

#### 3. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L9)

```diff
-     var hm = fm(4037);
+     var pD = wD(4107);
```

#### 4. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L17)

```diff
-       this.YM = !1, this.stopPropagation = !1, this.bM = !1, this.disabled = !1
+       this.Dv = !1, this.stopPropagation = !1, this.Av = !1, this.disabled = !1
```

#### 5. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L23)

```diff
-         this.element = mm || document, this.YM = !!fm.YM, this.stopPropagation = !!fm.stopPropagation, this.bM = !!fm.bM, this.disabled = !!fm.disabled, this.filterEvents = (mm, Tm) => !0, this.ignoreEvent = mm => !1, this.down = new hm.EventEmitter, this.up = new hm.EventEmitter … [truncated]
+         this.element = DD || document, this.Dv = !!wD.Dv, this.stopPropagation = !!wD.stopPropagation, this.Av = !!wD.Av, this.disabled = !!wD.disabled, this.filterEvents = (DD, zD) => !0, this.ignoreEvent = DD => !1, this.down = new pD.EventEmitter, this.up = new pD.EventEmitter … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L26-L28` → after: `L26-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L26-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L26-L28) · [Before (L26-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L26-L28)

```diff
-           ATm: 0,
-           aTm: 0,
-           xTm: 0
+           IzD: 0,
+           BzD: 0,
+           GzD: 0
```

#### 7. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L63)

```diff
-         Dm(this.rM), Dm(this.pressCount), Dm(this.releaseCount)
+         cD(this.Fv), cD(this.pressCount), cD(this.releaseCount)
```

#### 8. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L141)

```diff
-             } return console.error(`Did not find touch id ${Em}`), [0, 0]
+             } return console.error(`Did not find touch id ${UD}`), [0, 0]
```

#### 9. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L145` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L145) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L145)

```diff
-       mm.rM.dx += fm, mm.rM.dy += hm
+       DD.Fv.dx += wD, DD.Fv.dy += pD
```

#### 10. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L161` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L161) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L161)

```diff
-       mm.rM.ATm += (Tm.deltaX || 0) * fm, mm.rM.aTm += (Tm.deltaY || 0) * fm, mm.rM.xTm += (Tm.deltaZ || 0) * fm
+       DD.Fv.IzD += (zD.deltaX || 0) * wD, DD.Fv.BzD += (zD.deltaY || 0) * wD, DD.Fv.GzD += (zD.deltaZ || 0) * wD
```

#### 11. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L165` → after: `L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L165) · [Before (L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L165)

```diff
-       if (!mm.bM) return Tm.preventDefault(), !1
+       if (!DD.Av) return zD.preventDefault(), !1
```

#### 12. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L233` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L233) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L233)

```diff
-       }))), "button" in hm || (fm.YM && !hm.defaultPrevented && hm.preventDefault(), fm.stopPropagation && hm.stopPropagation()))
+       }))), "button" in pD || (wD.Dv && !pD.defaultPrevented && pD.preventDefault(), wD.stopPropagation && pD.stopPropagation()))
```

#### 13. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L237` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L237) · [Before (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L237)

```diff
-       return mm ? !Tm : Tm
+       return DD ? !zD : zD
```

#### 14. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L240` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L240) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L240)

```diff
-   36768: (mm, Tm, fm) => {
+   36646: (DD, zD, wD) => {
```

#### 15. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L242-L243` → after: `L242-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L242-L243) · [Before (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L242-L243)

```diff
-       e: () => Ym,
-       i: () => qm
+       d: () => BD,
+       g: () => GD
```

#### 16. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L245-L250` → after: `L245-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L245-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L245-L250) · [Before (L245-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L245-L250)

```diff
-     var hm = fm(59),
-       Am = fm(1449),
-       am = fm(1946),
-       xm = fm(36708),
-       wm = fm(653),
-       Dm = fm(1080),
+     var pD = wD(58),
+       sD = wD(1442),
+       KD = wD(1973),
+       rD = wD(36593),
+       LD = wD(619),
+       cD = wD(1044),
```

#### 17. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L252` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L252) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L252)

```diff
-       Rm = fm(1135);
+       RD = wD(1096);
```

#### 18. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L259` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L259) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L259)

```diff
-         vy: null,
+         bZ: null,
```

#### 19. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L270` → after: `L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L270) · [Before (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L270)

```diff
-       clearTimeout(mm.timeout), mm.source = null, mm.direction = null, mm.writtenAngle = null, mm.vy && (mm.vy.style.rotate = "")
+       clearTimeout(DD.timeout), DD.source = null, DD.direction = null, DD.writtenAngle = null, DD.bZ && (DD.bZ.style.rotate = "")
```

#### 20. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L276` → after: `L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L276) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L276)

```diff
-           Fm: fm,
+           tD: wD,
```

#### 21. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L282)

```diff
-             const fm = null !== (Tm = om(mm)) && void 0 !== Tm ? Tm : pm.find((mm => null === mm.source));
+             const wD = null !== (zD = fD(DD)) && void 0 !== zD ? zD : AD.find((DD => null === DD.source));
```

#### 22. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L287` → after: `L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L287) · [Before (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L287)

```diff
-               vy: null,
+               bZ: null,
```

#### 23. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L296)

```diff
-       })), (0, am.e)("kill", (Tm => {
+       })), (0, KD.c)("kill", (zD => {
```

#### 24. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L304` → after: `L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L304) · [Before (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L304)

```diff
-         const mm = (0, xm.c)("turnDamageIndicators", qm);
+         const DD = (0, rD.h)("turnDamageIndicators", GD);
```

#### 25. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L312` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L312) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L312)

```diff
-             mm.vy = Tm
+             DD.bZ = zD
```

#### 26. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L315` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L315) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L315)

```diff
-             DamageIndicatorFullCircle: (0, wm.H)(mm.direction),
+             DamageIndicatorFullCircle: (0, LD.B)(DD.direction),
```

#### 27. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L324` → after: `L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L324) · [Before (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L324)

```diff
-         if (null === Tm.source || (0, wm.H)(Tm.direction)) continue;
+         if (null === zD.source || (0, LD.B)(zD.direction)) continue;
```

#### 28. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L326)

```diff
-         fm !== Tm.writtenAngle && (Tm.writtenAngle = fm, Tm.vy.style.rotate = `${fm}rad`)
+         wD !== zD.writtenAngle && (zD.writtenAngle = wD, zD.bZ.style.rotate = `${wD}rad`)
```

#### 29. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L330` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L330) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L330)

```diff
-   36582: (mm, Tm, fm) => {
+   36495: (DD, zD, wD) => {
```

#### 30. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L345` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L345) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L345)

```diff
-   34245: (mm, Tm, fm) => {
+   34174: (DD, zD, wD) => {
```

#### 31. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L347-L348` → after: `L347-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L347-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L347-L348) · [Before (L347-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L347-L348)

```diff
-       e: () => am,
-       i: () => Am
+       d: () => KD,
+       h: () => sD
```

#### 32. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L350)

```diff
-     var hm = fm(23);
+     var pD = wD(20);
```

#### 33. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L357` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L357) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L357)

```diff
-       return Am(hm.c.get("isTouchScreen"), hm.c.get("clientEscMenuOptions").touchActionButtons)
+       return sD(pD.e.get("isTouchScreen"), pD.e.get("clientEscMenuOptions").touchActionButtons)
```

#### 34. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L360` → after: `L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L360) · [Before (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L360)

```diff
-   40749: (mm, Tm, fm) => {
+   40585: (DD, zD, wD) => {
```

#### 35. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L364-L375` → after: `L364-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L364-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L364-L375) · [Before (L364-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L364-L375)

```diff
-     fm(40633);
-     var hm = fm(40639),
-       Am = fm(3729),
-       am = fm(23),
-       xm = fm(39192),
-       wm = fm(3672),
-       Dm = fm(39222),
-       im = fm(31),
-       Rm = fm(2760),
-       pm = fm(38530),
-       Em = fm(8792),
-       om = fm(40641);
+     wD(40468);
+     var pD = wD(40477),
+       sD = wD(3757),
+       KD = wD(20),
+       rD = wD(39047),
+       LD = wD(3688),
+       cD = wD(39066),
+       gD = wD(25),
+       RD = wD(2769),
+       AD = wD(38415),
+       UD = wD(8855),
+       fD = wD(40483);
```

#### 36. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L380-L383` → after: `L380-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L380-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L380-L383) · [Before (L380-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L380-L383)

```diff
-     var Ym = fm(40654),
-       qm = fm(8778),
-       jm = fm(39237);
-     const Vm = mm => mm.padSneakToggled || !!am.c.get("clientEscMenuOptions").crouchIsToggle && mm.crouchToggled,
+     var BD = wD(40499),
+       GD = wD(8833),
+       hD = wD(39079);
+     const nD = DD => DD.padSneakToggled || !!KD.e.get("clientEscMenuOptions").crouchIsToggle && DD.crouchToggled,
```

#### 37. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L386` → after: `L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L386) · [Before (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L386)

```diff
-           const mm = (0, Em.b)();
+           const DD = (0, UD.c)();
```

#### 38. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L388` → after: `L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L388) · [Before (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L388)

```diff
-           const fm = new om.b;
+           const wD = new fD.e;
```

#### 39. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L395` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L395) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L395)

```diff
-             const xm = (0, om.k)(Tm, am),
+             const rD = (0, fD.r)(zD, KD),
```

#### 40. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L399-L400` → after: `L399-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L399-L400) · [Before (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L399-L400)

```diff
-               XN: (xm.XN + wm.XN) * Dm,
-               yN: (xm.yN + wm.yN) * Dm
+               aT: (rD.aT + LD.aT) * cD,
+               qT: (rD.qT + LD.qT) * cD
```

#### 41. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L405` → after: `L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L405) · [Before (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L405)

```diff
-               mm.camera.Qv !== am && (mm.camera.Qv = am), hm = !0, Tm = (0, om.m)(fm, Am, xm, wm, performance.now())
+               DD.camera.qY !== KD && (DD.camera.qY = KD), pD = !0, zD = (0, fD.t)(wD, sD, rD, LD, performance.now())
```

#### 42. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L411` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L411) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L411)

```diff
-               mm.camera.Qv === am && (mm.camera.Qv = null)
+               DD.camera.qY === KD && (DD.camera.qY = null)
```

#### 43. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L417` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L417) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L417)

```diff
-             mm.update((0, Rm.d)(), Tm, fm, hm)
+             DD.update((0, RD.e)(), zD, wD, pD)
```

#### 44. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L421` → after: `L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L421) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L421)

```diff
-             const Tm = (0, Rm.d)();
+             const zD = (0, RD.e)();
```

#### 45. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L426-L428` → after: `L426-L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L426-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L426-L428) · [Before (L426-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L426-L428)

```diff
-     var Km = fm(40648);
-     fm(37751), fm(8668);
-     fm(8683).b;
+     var OD = wD(40495);
+     wD(37669), wD(8745);
+     wD(8765).d;
```

#### 46. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L430` → after: `L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L430) · [Before (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L430)

```diff
-       const mm = (0, Km.b)((() => {
+       const DD = (0, OD.e)((() => {
```

#### 47. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L443` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L443) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L443)

```diff
-             bodies: () => (0, xm.c)(),
+             bodies: () => (0, rD.b)(),
```

#### 48. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L446-L447` → after: `L446-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L446-L447) · [Before (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L446-L447)

```diff
-               const hm = (0, Rm.d)(),
-                 Am = hm.qI.tTm();
+               const pD = (0, RD.e)(),
+                 sD = pD.yJ.LwD();
```

#### 49. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L449` → after: `L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L449) · [Before (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L449)

```diff
-                 const Tm = (0, Ym.c)({
+                 const zD = (0, BD.e)({
```

#### 50. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L451-L452` → after: `L451-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L451-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L451-L452) · [Before (L451-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L451-L452)

```diff
-                   descending: hm.qI.mTm(hm.xH).shouldIgnoreCrouchingSpeedReduction(),
-                   canCrouch: !!hm.xI.canCrouch,
+                   descending: pD.yJ.gzD(pD.vW).shouldIgnoreCrouchingSpeedReduction(),
+                   canCrouch: !!pD.NJ.canCrouch,
```

#### 51. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L455` → after: `L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L455) · [Before (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L455)

```diff
-                 mm.crouchHeld = Tm.crouchHeld, Am.padSneakToggled = Tm.toggled, Am.crouchToggled = !1, (0, qm.f)(Tm.toggled)
+                 DD.crouchHeld = zD.crouchHeld, sD.padSneakToggled = zD.toggled, sD.crouchToggled = !1, (0, GD.e)(zD.toggled)
```

#### 52. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L472` → after: `L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L472) · [Before (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L472)

```diff
-               const fm = null === (Tm = (0, Rm.d)()) || void 0 === Tm ? void 0 : Tm.qI.tTm();
+               const wD = null === (zD = (0, RD.e)()) || void 0 === zD ? void 0 : zD.yJ.LwD();
```

#### 53. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L477-L479` → after: `L477-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L477-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L477-L479) · [Before (L477-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L477-L479)

```diff
-               const Tm = (0, Rm.d)(),
-                 fm = null === Tm || void 0 === Tm ? void 0 : Tm.qI.tTm();
-               "touch" === mm ? ((0, qm.f)(!1), null !== fm && void 0 !== fm && fm.padSneakToggled && (fm.padSneakToggled = !1, fm.isTouchscreen && !fm.gamepad && Tm.qI.ITm(Tm.xH).setCrouching(!!Tm.xI.canCrouch && fm.touchCrouch))) : "gamepad" === mm && fm && (0, qm.f)(Vm(fm))
+               const zD = (0, RD.e)(),
+                 wD = null === zD || void 0 === zD ? void 0 : zD.yJ.LwD();
+               "touch" === DD ? ((0, GD.e)(!1), null !== wD && void 0 !== wD && wD.padSneakToggled && (wD.padSneakToggled = !1, wD.isTouchscreen && !wD.gamepad && zD.yJ.TzD(zD.vW).setCrouching(!!zD.NJ.canCrouch && wD.touchCrouch))) : "gamepad" === DD && wD && (0, GD.e)(nD(wD))
```

#### 54. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L483` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L483) · [Before (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L483)

```diff
-               return !(null === (mm = (0, Rm.d)()) || void 0 === mm || !mm.xH)
+               return !(null === (DD = (0, RD.e)()) || void 0 === DD || !DD.vW)
```

#### 55. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L487-L488` → after: `L487-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L487-L488) · [Before (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L487-L488)

```diff
-               const Tm = (0, Rm.d)();
-               return !1 === (null === (mm = Tm.qI.sTm(Tm.xH)) || void 0 === mm ? void 0 : mm.isAlive)
+               const zD = (0, RD.e)();
+               return !1 === (null === (DD = zD.yJ.HzD(zD.vW)) || void 0 === DD ? void 0 : DD.isAlive)
```

#### 56. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L492` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L492) · [Before (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L492)

```diff
-               return !(null === (mm = (0, Rm.c)()) || void 0 === mm || null === (Tm = mm.client) || void 0 === Tm || !Tm.isReplayMode())
+               return !(null === (DD = (0, RD.b)()) || void 0 === DD || null === (zD = DD.client) || void 0 === zD || !zD.isReplayMode())
```

#### 57. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L496` → after: `L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L496) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L496)

```diff
-               return !(null === (mm = (0, Rm.c)()) || void 0 === mm || null === (Tm = mm.client) || void 0 === Tm || null === (fm = Tm.freeCameraController) || void 0 === fm || !fm.isEnabled())
+               return !(null === (DD = (0, RD.b)()) || void 0 === DD || null === (zD = DD.client) || void 0 === zD || null === (wD = zD.freeCameraController) || void 0 === wD || !wD.isEnabled())
```

#### 58. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L498` → after: `L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L498) · [Before (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L498)

```diff
-             targetsBlock: () => !!(0, Rm.d)().Qmm,
+             targetsBlock: () => !!(0, RD.e)().jDD,
```

#### 59. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L501-L502` → after: `L501-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L501-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L501-L502) · [Before (L501-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L501-L502)

```diff
-               const Tm = (0, Rm.d)();
-               return !(null !== (mm = Tm.qI.QTm(Tm.xH)) && void 0 !== mm && mm.getItemAtSelectedSlot())
+               const zD = (0, RD.e)();
+               return !(null !== (DD = zD.yJ.jzD(zD.vW)) && void 0 !== DD && DD.getItemAtSelectedSlot())
```

#### 60. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L505` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L505) · [Before (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L505)

```diff
-               const mm = (0, Rm.d)().xI;
+               const DD = (0, RD.e)().NJ;
```

#### 61. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L509` → after: `L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L509) · [Before (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L509)

```diff
-               im.j.gp("ScrollInventorySlot", mm)
+               gD.l.KG("ScrollInventorySlot", DD)
```

#### 62. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L511-L512` → after: `L511-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L511-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L511-L512) · [Before (L511-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L511-L512)

```diff
-             hasFullInventory: () => (0, Dm.c)((0, Rm.d)()),
-             hasLobbyTab: () => (0, jm.c)((0, Rm.d)().xI),
+             hasFullInventory: () => (0, cD.e)((0, RD.e)()),
+             hasLobbyTab: () => (0, hD.b)((0, RD.e)().NJ),
```

#### 63. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L515` → after: `L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L515) · [Before (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L515)

```diff
-               const Am = (0, Rm.d)();
+               const sD = (0, RD.e)();
```

#### 64. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L517-L519` → after: `L517-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L517-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L517-L519) · [Before (L517-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L517-L519)

```diff
-                 holdingGun: !(null === (mm = Am.qI.lTm(Am.xH)) || void 0 === mm || null === (Tm = mm.zK) || void 0 === Tm || !Tm.isGun()),
-                 customButtons: null !== (fm = Am.xI.customButtons) && void 0 !== fm ? fm : null,
-                 touchscreenActionButton: null !== (hm = Am.xI.touchscreenActionButton) && void 0 !== hm ? hm : null
+                 holdingGun: !(null === (DD = sD.yJ.qzD(sD.vW)) || void 0 === DD || null === (zD = DD.lE) || void 0 === zD || !zD.isGun()),
+                 customButtons: null !== (wD = sD.NJ.customButtons) && void 0 !== wD ? wD : null,
+                 touchscreenActionButton: null !== (pD = sD.NJ.touchscreenActionButton) && void 0 !== pD ? pD : null
```

#### 65. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L523` → after: `L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L523) · [Before (L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L523)

```diff
-               (0, wm.sendColyMessage)(Am.Qj, mm)
+               (0, LD.sendColyMessage)(sD.Yj, DD)
```

#### 66. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L527` → after: `L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L527) · [Before (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L527)

```diff
-         Tm = (0, hm.c)(),
+         zD = (0, pD.e)(),
```

#### 67. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L535` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L535) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L535)

```diff
-   36689: (mm, Tm, fm) => {
+   36586: (DD, zD, wD) => {
```

#### 68. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L541` → after: `L539-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L539-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L539-L540) · [Before (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L541)

```diff
-       i: () => Em,
+       j: () => GD,
+       k: () => LD,
```

#### 69. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L543-L546` → after: `L542-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L542-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L542-L546) · [Before (L543-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L543-L546)

```diff
-       p: () => pm,
-       r: () => Im,
-       u: () => Om,
-       v: () => Vm
+       q: () => hD,
+       s: () => AD,
+       v: () => MD,
+       y: () => ID,
+       z: () => nD
```

#### 70. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L548-L549` → after: `L548-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L548-L549) · [Before (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L548-L549)

```diff
-     var hm = fm(23),
-       Am = fm(31);
+     var pD = wD(20),
+       sD = wD(25);
```

#### 71. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L556` → after: `L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L556) · [Before (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L556)

```diff
-         return (null !== (fm = mm.order) && void 0 !== fm ? fm : 0) - (null !== (hm = Tm.order) && void 0 !== hm ? hm : 0)
+         return (null !== (wD = DD.order) && void 0 !== wD ? wD : 0) - (null !== (pD = zD.order) && void 0 !== pD ? pD : 0)
```

#### 72. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L573` → after: `L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L573) · [Before (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L573)

```diff
-       mm.panel && "clientGame" === hm.c.get("openInGameMenuName") && im(mm.id)
+       DD.panel && "clientGame" === pD.e.get("openInGameMenuName") && gD(DD.id)
```

#### 73. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L599` → after: `L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L599) · [Before (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L599)

```diff
-       "inventory" !== hm.c.get("openInGameMenuName") && im(null)
+       "inventory" !== pD.e.get("openInGameMenuName") && gD(null)
```

#### 74. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L608-L609` → after: `L608-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L608-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L608-L609) · [Before (L608-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L608-L609)

```diff
-       return xm.set(mm.id, mm), Am.j.gp(am, wm(), !0), () => {
-         xm.get(mm.id) === mm && (xm.delete(mm.id), Am.j.gp(am, wm()))
+       return rD.set(DD.id, DD), sD.l.KG(KD, LD(), !0), () => {
+         rD.get(DD.id) === DD && (rD.delete(DD.id), sD.l.KG(KD, LD()))
```

#### 75. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L613` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L613) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L613)

```diff
-   36686: (mm, Tm, fm) => {
+   36580: (DD, zD, wD) => {
```

#### 76. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L615-L617` → after: `L615-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L615-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L615-L617) · [Before (L615-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L615-L617)

```diff
-       e: () => wm,
-       h: () => qm,
-       j: () => jm,
+       c: () => LD,
+       g: () => GD,
+       i: () => hD,
```

#### 77. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L620-L621` → after: `L620-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L620-L621) · [Before (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L620-L621)

```diff
-       s: () => Ym,
-       u: () => om,
+       r: () => BD,
+       t: () => fD,
```

#### 78. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L624-L627` → after: `L624-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L624-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L624-L627) · [Before (L624-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L624-L627)

```diff
-     var hm = fm(23),
-       Am = fm(31),
-       am = fm(1286),
-       xm = fm(36689);
+     var pD = wD(20),
+       sD = wD(25),
+       KD = wD(1299),
+       rD = wD(36586);
```

#### 79. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L640-L641` → after: `L640-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L640-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L640-L641) · [Before (L640-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L640-L641)

```diff
-       return Dm = fm, Am.j.gp(wm, Dm, !0), () => {
-         Dm === fm && (Dm = null, Om = !1, qm(), Am.j.gp(wm, null))
+       return cD = wD, sD.l.KG(LD, cD, !0), () => {
+         cD === wD && (cD = null, ID = !1, GD(), sD.l.KG(LD, null))
```

#### 80. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L658-L659` → after: `L658-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L658-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L658-L659) · [Before (L658-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L658-L659)

```diff
-       const mm = hm.c.get("openInGameMenuName");
-       "clientGame" !== mm && (Om = "inventory" === mm), (0, xm.i)() || (0, xm.e)(), (0, am.p)(am.c), hm.c.set({
+       const DD = pD.e.get("openInGameMenuName");
+       "clientGame" !== DD && (ID = "inventory" === DD), (0, rD.m)() || (0, rD.j)(), (0, KD.p)(KD.b), pD.e.set({
```

#### 81. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L674` → after: `L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L674) · [Before (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L674)

```diff
-       "clientGame" === hm.c.get("openInGameMenuName") && hm.c.set({
+       "clientGame" === pD.e.get("openInGameMenuName") && pD.e.set({
```

#### 82. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L676` → after: `L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L676) · [Before (L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L676)

```diff
-       }), mm || (0, xm.e)(), Om = !1
+       }), DD || (0, rD.j)(), ID = !1
```

#### 83. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L679` → after: `L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L679) · [Before (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L679)

```diff
-   36578: (mm, Tm, fm) => {
+   36491: (DD, zD, wD) => {
```

#### 84. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L681` → after: `L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L681) · [Before (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L681)

```diff
-       b: () => Dm
+       c: () => cD
```

#### 85. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L683-L687` → after: `L683-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L683-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L683-L687) · [Before (L683-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L683-L687)

```diff
-     var hm = fm(339),
-       Am = fm(23),
-       am = fm(36582),
-       xm = fm(1635),
-       wm = fm(1957);
+     var pD = wD(338),
+       sD = wD(20),
+       KD = wD(36495),
+       rD = wD(1648),
+       LD = wD(1981);
```

#### 86. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L691` → after: `L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L691) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L691)

```diff
-       if (!Am.c.get("isKeydownEnabled") || mm.repeat) return;
+       if (!sD.e.get("isKeydownEnabled") || DD.repeat) return;
```

#### 87. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L693-L694` → after: `L693-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L693-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L693-L694) · [Before (L693-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L693-L694)

```diff
-       "Escape" === mm.key ? (0, xm.f)(mm) : null !== (fm = wm.r.OpenSettings) && void 0 !== fm && fm.includes(Rm) ? (0, xm.t)(mm, hm.n.SETTINGS) : null !== (Dm = wm.r.OpenCharacterCustomization) && void 0 !== Dm && Dm.includes(Rm) ? (0, am.d)() || (0, xm.t)(mm, hm.n.CUSTOMISATION … [truncated]
-         showDebugOverlay: !Am.c.get("showDebugOverlay")
+       "Escape" === DD.key ? (0, rD.l)(DD) : null !== (wD = LD.u.OpenSettings) && void 0 !== wD && wD.includes(RD) ? (0, rD.w)(DD, pD.l.SETTINGS) : null !== (cD = LD.u.OpenCharacterCustomization) && void 0 !== cD && cD.includes(RD) ? (0, KD.d)() || (0, rD.w)(DD, pD.l.CUSTOMISATION … [truncated]
+         showDebugOverlay: !sD.e.get("showDebugOverlay")
```

#### 88. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L698` → after: `L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L698) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L698)

```diff
-   39180: (mm, Tm, fm) => {
+   39038: (DD, zD, wD) => {
```

#### 89. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L700` → after: `L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L700) · [Before (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L700)

```diff
-       e: () => Dm
+       b: () => cD
```

#### 90. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L702-L704` → after: `L702-L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L702-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L702-L704) · [Before (L702-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L702-L704)

```diff
-     var hm = fm(8854),
-       Am = fm(36573),
-       am = fm(39187);
+     var pD = wD(8901),
+       sD = wD(36486),
+       KD = wD(39042);
```

#### 91. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L717` → after: `L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L717) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L717)

```diff
-       if (mm instanceof Am.e) return {
+       if (DD instanceof sD.c) return {
```

#### 92. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L721-L723` → after: `L721-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L721-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L721-L723) · [Before (L721-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L721-L723)

```diff
-       const fm = (0, hm.d)(mm),
-         Dm = "number" === typeof fm ? fm : 0;
-       return null !== (0, am.k)(Dm).name ? {
+       const wD = (0, pD.g)(DD),
+         cD = "number" === typeof wD ? wD : 0;
+       return null !== (0, KD.j)(cD).name ? {
```

#### 93. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L732` → after: `L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L732) · [Before (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L732)

```diff
-   8854: (mm, Tm, fm) => {
+   8901: (DD, zD, wD) => {
```

#### 94. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L734-L736` → after: `L734-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L734-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L734-L735) · [Before (L734-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L734-L736)

```diff
-       c: () => am,
-       d: () => xm,
-       h: () => wm,
+       e: () => KD,
+       g: () => rD,
```

#### 95. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L738` → after: `L737-L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L737-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L737-L738) · [Before (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L738)

```diff
-       m: () => Dm
+       m: () => gD,
+       q: () => cD
```

#### 96. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L740-L741` → after: `L740-L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L740-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L740-L741) · [Before (L740-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L740-L741)

```diff
-     var hm = fm(198),
-       Am = fm(4564);
+     var pD = wD(197),
+       sD = wD(4657);
```

#### 97. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L744` → after: `L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L744) · [Before (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L744)

```diff
-       return xm(mm) === hm.b.gameOrPluginOnPlayerAuthRejected.code
+       return rD(DD) === pD.e.gameOrPluginOnPlayerAuthRejected.code
```

#### 98. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L753` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L753) · [Before (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L753)

```diff
-       return null !== (Tm = Object.keys(Am.e).find((Tm => Am.e[Tm] === mm))) && void 0 !== Tm ? Tm : null
+       return null !== (zD = Object.keys(sD.b).find((zD => sD.b[zD] === DD))) && void 0 !== zD ? zD : null
```

#### 99. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L766` → after: `L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L766) · [Before (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L766)

```diff
-   36549: (mm, Tm, fm) => {
+   36467: (DD, zD, wD) => {
```

#### 100. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L768` → after: `L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L768) · [Before (L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L768)

```diff
-       d: () => Em,
+       b: () => UD,
```

#### 101. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L771` → after: `L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L771) · [Before (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L771)

```diff
-       l: () => pm
+       m: () => AD
```

#### 102. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L773-L776` → after: `L773-L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L773-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L773-L776) · [Before (L773-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L773-L776)

```diff
-     var hm = fm(354),
-       Am = fm(685),
-       am = fm(695),
-       xm = fm(37);
+     var pD = wD(351),
+       sD = wD(648),
+       KD = wD(663),
+       rD = wD(35);
```

#### 103. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L787` → after: `L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L787) · [Before (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L787)

```diff
-       (0, am.i)(mm, wm)
+       (0, KD.j)(DD, LD)
```

#### 104. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L796)

```diff
-       return (0, am.d)(mm, wm)
+       return (0, KD.e)(DD, LD)
```

#### 105. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L801` → after: `L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L801) · [Before (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L801)

```diff
-       const fm = (0, am.d)(Tm, wm),
+       const wD = (0, KD.e)(zD, LD),
```

#### 106. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L810-L814` → after: `L810-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L810-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L810-L814) · [Before (L810-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L810-L814)

```diff
-       return Em = null !== fm && null !== Rm && (0, am.f)(Tm, wm) && function(mm, Tm, fm) {
-           const Am = (0, hm.Pb)(mm),
-             am = (0, hm.Pb)(Tm),
-             xm = (0, hm.Jb)(mm),
-             wm = (0, hm.Jb)(Tm);
+       return UD = null !== wD && null !== RD && (0, KD.h)(zD, LD) && function(DD, zD, wD) {
+           const sD = (0, pD.Tb)(DD),
+             KD = (0, pD.Tb)(zD),
+             rD = (0, pD.Ob)(DD),
+             LD = (0, pD.Ob)(zD);
```

#### 107. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L816` → after: `L816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L816) · [Before (L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L816)

```diff
-         }(Rm, mm, pm) ? fm : (0, Am.b)(), (0, am.k)(Tm, wm, Em), Tm.setItem(Dm, mm),
+         }(RD, DD, AD) ? wD : (0, sD.e)(), (0, KD.l)(zD, LD, UD), zD.setItem(cD, DD),
```

#### 108. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L822` → after: `L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L822) · [Before (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L822)

```diff
-   36545: (mm, Tm, fm) => {
+   36463: (DD, zD, wD) => {
```

#### 109. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L824` → after: `L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L824) · [Before (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L824)

```diff
-       c: () => Qm,
+       b: () => JD,
```

#### 110. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L827-L844` → after: `L827-L844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L827-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L827-L844) · [Before (L827-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L827-L844)

```diff
-     var hm = fm(1041),
-       Am = fm(208),
-       am = fm(347),
-       xm = fm(658),
-       wm = fm(354),
-       Dm = fm(1047),
-       im = fm(675),
-       Rm = fm(713),
-       pm = fm(4460),
-       Em = fm(105),
-       om = fm(135),
-       Om = fm(1713),
-       Ym = fm(115),
-       qm = fm(36549),
-       jm = fm(37),
-       Vm = fm(690),
- ... (2 more removed lines; see GitHub link above)
+     var pD = wD(1008),
+       sD = wD(212),
+       KD = wD(348),
+       rD = wD(625),
+       LD = wD(351),
+       cD = wD(1017),
+       gD = wD(638),
+       RD = wD(676),
+       AD = wD(4540),
+       UD = wD(103),
+       fD = wD(128),
+       ID = wD(1737),
+       BD = wD(116),
+       GD = wD(36467),
+       hD = wD(35),
+       nD = wD(655),
+ ... (2 more added lines; see GitHub link above)
```

#### 111. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L848` → after: `L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L848) · [Before (L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L848)

```diff
-       return [...null !== (mm = navigator.languages) && void 0 !== mm ? mm : [null !== (Tm = navigator.language) && void 0 !== Tm ? Tm : "none"], "en-gb"]
+       return [...null !== (DD = navigator.languages) && void 0 !== DD ? DD : [null !== (zD = navigator.language) && void 0 !== zD ? zD : "none"], "en-gb"]
```

#### 112. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L852-L853` → after: `L852-L853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L852-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L852-L853) · [Before (L852-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L852-L853)

```diff
-       const cm = (0, hm.k)(Tm) ? (0, hm.n)(Tm) : null,
-         zm = mm.isLoggedIn() && void 0 !== (0, Am.c)(am.i, om.q) ? (0, Im.q)() : null,
+       const XD = (0, pD.l)(zD) ? (0, pD.o)(zD) : null,
+         VD = DD.isLoggedIn() && void 0 !== (0, sD.d)(KD.k, fD.v) ? (0, MD.u)() : null,
```

#### 113. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L859-L860` → after: `L859-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L859-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L859-L860) · [Before (L859-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L859-L860)

```diff
-             joinDiscord: !!jm.g.getItem("DiscordPressed"),
-             newGo: pm.d,
+             joinDiscord: !!hD.h.getItem("DiscordPressed"),
+             newGo: AD.b,
```

#### 114. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L871` → after: `L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L871) · [Before (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L871)

```diff
-             deviceType: (0, Ym.d)()
+             deviceType: (0, BD.e)()
```

#### 115. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L876-L878` → after: `L876-L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L876-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L876-L878) · [Before (L876-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L876-L878)

```diff
-           version: xm.d,
-           siteUsed: om.q,
-           subsiteUsed: om.w,
+           version: rD.e,
+           siteUsed: fD.v,
+           subsiteUsed: fD.D,
```

#### 116. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L880-L884` → after: `L880-L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L880-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L880-L884) · [Before (L880-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L880-L884)

```diff
-           visitSessionId: (0, Vm.f)(),
-           clientReason: im.s.reason,
-           budgetBasis: (0, Km.g)(),
-           ...null !== Rm.k && {
-             diagClaim: Rm.k.claimId
+           visitSessionId: (0, nD.d)(),
+           clientReason: gD.n.reason,
+           budgetBasis: (0, OD.i)(),
+           ...null !== RD.q && {
+             diagClaim: RD.q.claimId
```

#### 117. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L890-L891` → after: `L890-L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L890-L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L890-L891) · [Before (L890-L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L890-L891)

```diff
-       return null !== cm && (0, wm.Ac)(cm) ? (Zm.lobbyName = (0, hm.h)(cm, (0, hm.m)(Tm), fm), {
-         roomName: `classic_${Dm.e}`,
+       return null !== XD && (0, LD.Dc)(XD) ? (PD.lobbyName = (0, pD.k)(XD, (0, pD.m)(zD), wD), {
+         roomName: `classic_${cD.e}`,
```

#### 118. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L899` → after: `L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L899) · [Before (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L899)

```diff
-   39187: (mm, Tm, fm) => {
+   39042: (DD, zD, wD) => {
```

#### 119. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L902` → after: `L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L902) · [Before (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L902)

```diff
-       f: () => am,
+       c: () => KD,
```

#### 120. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L904-L905` → after: `L904-L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L904-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L904-L905) · [Before (L904-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L904-L905)

```diff
-       k: () => Rm,
-       m: () => Dm,
+       j: () => RD,
+       n: () => cD,
```

#### 121. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L908` → after: `L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L908) · [Before (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L908)

```diff
-     var hm = fm(198);
+     var pD = wD(197);
```

#### 122. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L913` → after: `L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L913) · [Before (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L913)

```diff
-       const Tm = mm.endsWith(hm.i);
+       const zD = DD.endsWith(pD.j);
```

#### 123. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L915` → after: `L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L915) · [Before (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L915)

```diff
-         text: (Tm ? mm.slice(0, -hm.i.length) : mm) || null,
+         text: (zD ? DD.slice(0, -pD.j.length) : DD) || null,
```

#### 124. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L923` → after: `L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L923) · [Before (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L923)

```diff
-       return null !== fm.name && "" === hm.b[fm.name].text && null !== Tm ? Tm : fm.reason
+       return null !== wD.name && "" === pD.e[wD.name].text && null !== zD ? zD : wD.reason
```

#### 125. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L930` → after: `L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L930) · [Before (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L930)

```diff
-       const Am = null !== (Tm = Object.keys(hm.b).find((Tm => hm.b[Tm].code === mm))) && void 0 !== Tm ? Tm : null;
+       const sD = null !== (zD = Object.keys(pD.e).find((zD => pD.e[zD].code === DD))) && void 0 !== zD ? zD : null;
```

#### 126. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L934` → after: `L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L934) · [Before (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L934)

```diff
-         reason: null !== fm && void 0 !== fm ? fm : `${wm}\nCode: ${mm}`,
+         reason: null !== wD && void 0 !== wD ? wD : `${LD}\nCode: ${DD}`,
```

#### 127. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L942` → after: `L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L942) · [Before (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L942)

```diff
-       } = hm.b[Am], Dm = mm === hm.b.outdatedVersion.code || mm === hm.b.loadRecaptchaError.code;
+       } = pD.e[sD], cD = DD === pD.e.outdatedVersion.code || DD === pD.e.loadRecaptchaError.code;
```

#### 128. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L946` → after: `L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L946) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L946)

```diff
-         reason: "" !== am ? am : null !== fm && void 0 !== fm ? fm : mm === hm.b.gameOrPluginKick.code ? im : `Code: ${mm}`,
+         reason: "" !== KD ? KD : null !== wD && void 0 !== wD ? wD : DD === pD.e.gameOrPluginKick.code ? gD : `Code: ${DD}`,
```

#### 129. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L948` → after: `L948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L948) · [Before (L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L948)

```diff
-         automaticallyReconnect: mm === hm.b.customGameUpdated.code || mm === hm.b.duplicateLobbyNameError.code,
+         automaticallyReconnect: DD === pD.e.customGameUpdated.code || DD === pD.e.duplicateLobbyNameError.code,
```

#### 130. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L953` → after: `L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L953) · [Before (L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L953)

```diff
-   36964: (mm, Tm, fm) => {
+   36821: (DD, zD, wD) => {
```

#### 131. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L955` → after: `L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L955) · [Before (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L955)

```diff
-       b: () => Am,
+       c: () => sD,
```

#### 132. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L958` → after: `L959-L960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L959-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L959-L960) · [Before (L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L958)

```diff
-       k: () => wm,
+       i: () => cD,
+       l: () => gD,
```

#### 133. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L960-L963` → after: `L962-L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L962-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L962-L963) · [Before (L960-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L960-L963)

```diff
-       o: () => im,
-       s: () => pm,
-       t: () => Rm,
-       u: () => xm
+       n: () => RD,
+       p: () => rD
```

#### 134. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L965` → after: `L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L965) · [Before (L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L965)

```diff
-     var hm = fm(1247);
+     var pD = wD(1245);
```

#### 135. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L974` → after: `L974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L974) · [Before (L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L974)

```diff
-       return "lobby" === mm.kind ? `lobby:${mm.path}` : `codeBlock:${mm.pos[0]},${mm.pos[1]},${mm.pos[2]}`
+       return "lobby" === DD.kind ? `lobby:${DD.path}` : `codeBlock:${DD.pos[0]},${DD.pos[1]},${DD.pos[2]}`
```

#### 136. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L980` → after: `L980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L980) · [Before (L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L980)

```diff
-         path: hm.i
+         path: pD.f
```

#### 137. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L1019` → after: `L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L1019) · [Before (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L1019)

```diff
-   39106: (mm, Tm, fm) => {
+   38950: (DD, zD, wD) => {
```

#### 138. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L1029` → after: `L1029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L1029) · [Before (L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L1029)

```diff
-       c: () => hm
+       d: () => pD
```

#### 139. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L1032` → after: `L1032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L1032) · [Before (L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L1032)

```diff
-   39098: (mm, Tm, fm) => {
+   38941: (DD, zD, wD) => {
```

#### 140. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L1042` → after: `L1042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/158.js#L1042) · [Before (L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/158.js#L1042)

```diff
-       e: () => hm
+       c: () => pD
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/159.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/159.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb)

#### 1. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/159.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/159.js#L4)

```diff
-   8876: (mm, Tm, fm) => {
+   8925: (DD, zD, wD) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/160.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/160.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786)

#### 1. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/160.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/160.js#L4)

```diff
-   8882: (mm, Tm, fm) => {
+   8931: (DD, zD, wD) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/161.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/161.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907)

#### 1. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/161.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/161.js#L4)

```diff
-   8884: (mm, Tm, fm) => {
+   8937: (DD, zD, wD) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/162.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/162.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e)

#### 1. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/162.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/162.js#L4)

```diff
-   8889: (mm, Tm, fm) => {
+   8939: (DD, zD, wD) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/163.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/163.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838)

#### 1. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/163.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/163.js#L4)

```diff
-   8892: (mm, Tm, fm) => {
+   8944: (DD, zD, wD) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/164.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/164.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711)

#### 1. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/164.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/164.js#L4)

```diff
-   8895: (mm, Tm, fm) => {
+   8950: (DD, zD, wD) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/165.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/165.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c)

#### 1. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/165.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/165.js#L4)

```diff
-   8901: (mm, Tm, fm) => {
+   8953: (DD, zD, wD) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/166.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/166.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122)

#### 1. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/166.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/166.js#L4)

```diff
-   8905: (mm, Tm, fm) => {
+   8957: (DD, zD, wD) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/167.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/167.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9)

#### 1. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/167.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/167.js#L4)

```diff
-   8910: (mm, Tm, fm) => {
+   8964: (DD, zD, wD) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/168.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/168.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf)

#### 1. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/168.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/168.js#L4)

```diff
-   8918: (mm, Tm, fm) => {
+   8966: (DD, zD, wD) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/169.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/169.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2)

#### 1. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/169.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/169.js#L4)

```diff
-   8926: (mm, Tm, fm) => {
+   8973: (DD, zD, wD) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/170.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/170.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251)

#### 1. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/170.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/170.js#L4)

```diff
-   8930: (mm, Tm, fm) => {
+   8982: (DD, zD, wD) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/171.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/171.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d)

#### 1. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/171.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/171.js#L4)

```diff
-   8933: (mm, Tm, fm) => {
+   8991: (DD, zD, wD) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/172.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/172.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413)

#### 1. `bundles/bloxd.io/chunks/js/172.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/172.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/172.js#L4)

```diff
-   8942: (mm, Tm, fm) => {
+   9e3: (DD, zD, wD) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/173.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/173.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e)

#### 1. `bundles/bloxd.io/chunks/js/173.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/173.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/173.js#L4)

```diff
-   8945: (mm, Tm, fm) => {
+   9008: (DD, zD, wD) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/174.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/174.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045)

#### 1. `bundles/bloxd.io/chunks/js/174.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/174.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/174.js#L4)

```diff
-   8952: (mm, Tm, fm) => {
+   9017: (DD, zD, wD) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/175.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/175.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9)

#### 1. `bundles/bloxd.io/chunks/js/175.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/175.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/175.js#L4)

```diff
-   8955: (mm, Tm, fm) => {
+   9023: (DD, zD, wD) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/176.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/176.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5c)

#### 1. `bundles/bloxd.io/chunks/js/176.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/176.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/176.js#L4)

```diff
-   8962: (mm, Tm, fm) => {
+   9028: (DD, zD, wD) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/177.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/177.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046)

#### 1. `bundles/bloxd.io/chunks/js/177.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/177.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/177.js#L4)

```diff
-   8966: (mm, Tm, fm) => {
+   9037: (DD, zD, wD) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/178.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/178.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2)

#### 1. `bundles/bloxd.io/chunks/js/178.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/178.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/178.js#L4)

```diff
-   8968: (mm, Tm, fm) => {
+   9042: (DD, zD, wD) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/179.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/179.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14)

#### 1. `bundles/bloxd.io/chunks/js/179.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/179.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/179.js#L4)

```diff
-   8971: (mm, Tm, fm) => {
+   9044: (DD, zD, wD) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/180.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/180.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19)

#### 1. `bundles/bloxd.io/chunks/js/180.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/180.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/180.js#L4)

```diff
-   8974: (mm, Tm, fm) => {
+   9047: (DD, zD, wD) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/181.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/181.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8)

#### 1. `bundles/bloxd.io/chunks/js/181.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/181.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/181.js#L4)

```diff
-   8977: (mm, Tm, fm) => {
+   9055: (DD, zD, wD) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/182.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/182.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3fa)

#### 1. `bundles/bloxd.io/chunks/js/182.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3faR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3fa) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/182.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/182.js#L4)

```diff
-   8986: (mm, Tm, fm) => {
+   9060: (DD, zD, wD) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/183.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/183.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72ad)

#### 1. `bundles/bloxd.io/chunks/js/183.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72adR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72ad) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/183.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/183.js#L4)

```diff
-   8988: (mm, Tm, fm) => {
+   9066: (DD, zD, wD) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/184.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/184.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e)

#### 1. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/184.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/184.js#L4)

```diff
-   8996: (mm, Tm, fm) => {
+   9071: (DD, zD, wD) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/185.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/185.js` (181 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072)

#### 1. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L4)

```diff
-   9127: (mm, Tm) => {
+   9186: (DD, zD) => {
```

#### 2. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L9-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L9-L10) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L9-L10)

```diff
-         Am = !mm.hostname.includes("trycloudflare.com") && !mm.hostname.includes("discordsays.com") && hm.length > 2 ? `/${hm[0]}` : "";
-       return mm.pathname.startsWith("/.proxy") ? `${mm.protocol}//${fm}${Am}${mm.pathname}${mm.search}` : `${mm.protocol}//${fm}/.proxy/colyseus${Am}${mm.pathname}${mm.search}`
+         sD = !DD.hostname.includes("trycloudflare.com") && !DD.hostname.includes("discordsays.com") && pD.length > 2 ? `/${pD[0]}` : "";
+       return DD.pathname.startsWith("/.proxy") ? `${DD.protocol}//${wD}${sD}${DD.pathname}${DD.search}` : `${DD.protocol}//${wD}/.proxy/colyseus${sD}${DD.pathname}${DD.search}`
```

#### 3. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L13-L16` → after: `L13-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L13-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L13-L16) · [Before (L13-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L13-L16)

```diff
-   9114: (mm, Tm, fm) => {
-     var hm, Am, am, xm, wm = fm(9018),
-       Dm = fm(9121),
-       im = fm(9086);
+   9179: (DD, zD, wD) => {
+     var pD, sD, KD, rD, LD = wD(9100),
+       cD = wD(9183),
+       gD = wD(9158);
```

#### 4. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L102-L103` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L102-L103) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L102-L103)

```diff
-               im = `Login with ${mm[0].toUpperCase()+mm.substring(1)}`,
-               Rm = this.http.client.getHttpEndpoint(`${Tm.prefix||`${this.settings.path}/provider`}/${mm}${Dm}`),
+               gD = `Login with ${DD[0].toUpperCase()+DD.substring(1)}`,
+               RD = this.http.client.getHttpEndpoint(`${zD.prefix||`${this.settings.path}/provider`}/${DD}${cD}`),
```

#### 5. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L111` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L111) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L111)

```diff
-                 wm.__classPrivateFieldGet(this, am, "f") && !wm.__classPrivateFieldGet(this, am, "f").closed || (wm.__classPrivateFieldSet(this, am, void 0, "f"), hm("Af"), window.removeEventListener("message", om))
+                 LD.__classPrivateFieldGet(this, KD, "f") && !LD.__classPrivateFieldGet(this, KD, "f").closed || (LD.__classPrivateFieldSet(this, KD, void 0, "f"), pD("sw"), window.removeEventListener("message", fD))
```

#### 6. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L130-L136` → after: `L130-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L130-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L130-L136) · [Before (L130-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L130-L136)

```diff
-   9012: (mm, Tm, fm) => {
-     var hm, Am = fm(9018),
-       am = fm(9023),
-       xm = fm(9026),
-       wm = fm(9103),
-       Dm = fm(9114),
-       im = fm(9127);
+   9091: (DD, zD, wD) => {
+     var pD, sD = wD(9100),
+       KD = wD(9107),
+       rD = wD(9116),
+       LD = wD(9172),
+       cD = wD(9179),
+       gD = wD(9186);
```

#### 7. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L210)

```diff
-             console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${hm.roomId}'...`);
+             console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${pD.roomId}'...`);
```

#### 8. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L215` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L215) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L215)

```diff
-                 yield this.consumeSeatReservation(mm, Tm, wm), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${hm.roomId}'`)
+                 yield this.consumeSeatReservation(DD, zD, LD), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${pD.roomId}'`)
```

#### 9. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L217` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L217) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L217)

```diff
-                 fm < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${fm} out of 8)`), setTimeout(am, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server log … [truncated]
+                 wD < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${wD} out of 8)`), setTimeout(KD, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server log … [truncated]
```

#### 10. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L227` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L227) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L227)

```diff
-                   mm && wm.Lk(128, new Uint8Array(mm))
+                   DD && LD.mC(128, new Uint8Array(DD))
```

#### 11. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L239` → after: `L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L239) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L239)

```diff
-           const am = (yield this.http.post(`matchmake/${mm}/${Tm}`, {
+           const KD = (yield this.http.post(`matchmake/${DD}/${zD}`, {
```

#### 12. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L252` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L252) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L252)

```diff
-         return new xm.hE(mm, Tm)
+         return new rD.tA(DD, zD)
```

#### 13. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L259` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L259) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L259)

```diff
-         for (const xm in Tm) Tm.hasOwnProperty(xm) && (hm += (hm ? "&" : "") + `${xm}=${Tm[xm]}`);
+         for (const rD in zD) zD.hasOwnProperty(rD) && (pD += (pD ? "&" : "") + `${rD}=${zD[rD]}`);
```

#### 14. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L261-L263` → after: `L261-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L261-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L261-L263) · [Before (L261-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L261-L263)

```diff
-         let Am = this.settings.secure ? `${fm}s://` : `${fm}://`;
-         mm.publicAddress ? Am += `${mm.publicAddress}` : Am += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
-         const am = `${Am}/${mm.processId}/${mm.roomId}?${hm}`;
+         let sD = this.settings.secure ? `${wD}s://` : `${wD}://`;
+         DD.publicAddress ? sD += `${DD.publicAddress}` : sD += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
+         const KD = `${sD}/${DD.processId}/${DD.roomId}?${pD}`;
```

#### 15. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L268-L269` → after: `L268-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L268-L269) · [Before (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L268-L269)

```diff
-         const Tm = mm.startsWith("/") ? mm : `/${mm}`;
-         let fm = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${Tm}`;
+         const zD = DD.startsWith("/") ? DD : `/${DD}`;
+         let wD = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${zD}`;
```

#### 16. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L278-L280` → after: `L278-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L278-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L278-L280) · [Before (L278-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L278-L280)

```diff
-   9033: (mm, Tm, fm) => {
-     var hm = fm(9042),
-       Am = fm(9055);
+   9124: (DD, zD, wD) => {
+     var pD = wD(9129),
+       sD = wD(9134);
```

#### 17. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L303-L304` → after: `L303-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L303-L304) · [Before (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L303-L304)

```diff
-   9103: (mm, Tm, fm) => {
-     var hm = fm(9023);
+   9172: (DD, zD, wD) => {
+     var pD = wD(9107);
```

#### 18. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L311` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L311) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L311)

```diff
-           Object.defineProperty(Tm, fm, hm.get ? hm : {
+           Object.defineProperty(zD, wD, pD.get ? pD : {
```

#### 19. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L320` → after: `L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L320) · [Before (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L320)

```diff
-     var am = Am(fm(9107));
+     var KD = sD(wD(9175));
```

#### 20. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L358` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L358) · [Before (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L358)

```diff
-   9073: (mm, Tm) => {
+   9147: (DD, zD) => {
```

#### 21. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L362-L371` → after: `L362-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L362-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L362-L371) · [Before (L362-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L362-L371)

```diff
-   9026: (mm, Tm, fm) => {
-     var hm = fm(9033),
-       Am = fm(9073),
-       am = fm(9080),
-       xm = fm(9086),
-       wm = fm(9091),
-       Dm = fm(9050),
-       im = fm(9095),
-       Rm = fm(9023),
-       pm = fm(9101);
+   9116: (DD, zD, wD) => {
+     var pD = wD(9124),
+       sD = wD(9147),
+       KD = wD(9156),
+       rD = wD(9158),
+       LD = wD(9163),
+       cD = wD(9131),
+       gD = wD(9165),
+       RD = wD(9107),
+       AD = wD(9170);
```

#### 22. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L374` → after: `L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L374) · [Before (L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L374)

```diff
-         this.onStateChange = wm.createSignal(), this.onError = wm.createSignal(), this.tV = wm.createSignal(), this.onJoin = wm.createSignal(), this.hasJoined = !1, this.onMessageHandlers = xm.createNanoEvents(), this.roomId = null, this.name = mm, this.packr = new pm.Packr, this … [truncated]
+         this.onStateChange = LD.createSignal(), this.onError = LD.createSignal(), this.dJ = LD.createSignal(), this.onJoin = LD.createSignal(), this.hasJoined = !1, this.onMessageHandlers = rD.createNanoEvents(), this.roomId = null, this.name = DD, this.packr = new AD.Packr, this … [truncated]
```

#### 23. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L376-L377` → after: `L376-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L376-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L376-L377) · [Before (L376-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L376-L377)

```diff
-           return null === (fm = console.warn) || void 0 === fm ? void 0 : fm.call(console, `colyseus.js - onError => (${mm}) ${Tm}`)
-         })), this.tV((() => this.YV()))
+           return null === (wD = console.warn) || void 0 === wD ? void 0 : wD.call(console, `colyseus.js - onError => (${DD}) ${zD}`)
+         })), this.dJ((() => this.YM()))
```

#### 24. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L386-L387` → after: `L386-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L386-L387) · [Before (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L386-L387)

```diff
-             if (!fm.hasJoined) return null === (hm = console.warn) || void 0 === hm || hm.call(console, `Room connection was closed unexpectedly (${mm.code}): ${mm.reason}`), void fm.onError.invoke(mm.code, mm.reason);
-             mm.code === Rm.CloseCode.DEVMODE_RESTART && Tm ? Tm() : (fm.tV.invoke(mm.code, mm.reason), fm.destroy())
+             if (!wD.hasJoined) return null === (pD = console.warn) || void 0 === pD || pD.call(console, `Room connection was closed unexpectedly (${DD.code}): ${DD.reason}`), void wD.onError.invoke(DD.code, DD.reason);
+             DD.code === RD.CloseCode.DEVMODE_RESTART && zD ? zD() : (wD.dJ.invoke(DD.code, DD.reason), wD.destroy())
```

#### 25. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L390` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L390) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L390)

```diff
-             null === (Tm = console.warn) || void 0 === Tm || Tm.call(console, `Room, onError (${mm.code}): ${mm.reason}`), fm.onError.invoke(mm.code, mm.reason)
+             null === (zD = console.warn) || void 0 === zD || zD.call(console, `Room, onError (${DD.code}): ${DD.reason}`), wD.onError.invoke(DD.code, DD.reason)
```

#### 26. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L399` → after: `L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L399) · [Before (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L399)

```diff
-           this.tV((mm => Tm(mm))), this.connection ? mm ? (this.packr.buffer[0] = Am.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.tV.invoke(Rm.CloseCode.CONSENTED)
+           this.dJ((DD => zD(DD))), this.connection ? DD ? (this.packr.buffer[0] = sD.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.dJ.invoke(RD.CloseCode.CONSENTED)
```

#### 27. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L432` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L432) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L432)

```diff
-         return this.qV.getState()
+         return this.LO.getState()
```

#### 28. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L435` → after: `L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L435) · [Before (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L435)

```diff
-         this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.tV.clear(), this.onMessageHandlers.events = {}, this.qV instanceof im.lN && (this.qV.JO.root.callbacks = {})
+         this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.dJ.clear(), this.onMessageHandlers.events = {}, this.LO instanceof gD.nS && (this.LO.cI.root.callbacks = {})
```

#### 29. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L445` → after: `L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L445) · [Before (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L445)

```diff
-           if (this.serializerId = Dm.decode.utf8Read(Tm, fm, Tm[fm.offset++]), !this.qV) {
+           if (this.serializerId = cD.decode.utf8Read(zD, wD, zD[wD.offset++]), !this.LO) {
```

#### 30. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L447` → after: `L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L447) · [Before (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L447)

```diff
-             this.qV = new mm
+             this.LO = new DD
```

#### 31. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L449` → after: `L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L449) · [Before (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L449)

```diff
-           Tm.byteLength > fm.offset && this.qV.handshake && this.qV.handshake(Tm, fm), this.reconnectionToken = `${this.roomId}:${mm}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = Am.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
+           zD.byteLength > wD.offset && this.LO.handshake && this.LO.handshake(zD, wD), this.reconnectionToken = `${this.roomId}:${DD}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = sD.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
```

#### 32. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L455-L456` → after: `L455-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L455-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L455-L456) · [Before (L455-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L455-L456)

```diff
-         else if (hm === Am.Protocol.ROOM_STATE) this.qV.setState(Tm, fm), this.onStateChange.invoke(this.qV.getState());
-         else if (hm === Am.Protocol.ROOM_STATE_PATCH) this.qV.patch(Tm, fm), this.onStateChange.invoke(this.qV.getState());
+         else if (pD === sD.Protocol.ROOM_STATE) this.LO.setState(zD, wD), this.onStateChange.invoke(this.LO.getState());
+         else if (pD === sD.Protocol.ROOM_STATE_PATCH) this.LO.patch(zD, wD), this.onStateChange.invoke(this.LO.getState());
```

#### 33. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L471` → after: `L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L471) · [Before (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L471)

```diff
-         this.onMessageHandlers.events[hm] ? this.onMessageHandlers.emit(hm, Tm) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", mm, Tm) : null === (fm = console.warn) || void 0 === fm || fm.call(console, `colyseus.js: onMessage() not registered for type '$ … [truncated]
+         this.onMessageHandlers.events[pD] ? this.onMessageHandlers.emit(pD, zD) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", DD, zD) : null === (wD = console.warn) || void 0 === wD || wD.call(console, `colyseus.js: onMessage() not registered for type '$ … [truncated]
```

#### 34. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L474` → after: `L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L474) · [Before (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L474)

```diff
-         this.qV && this.qV.teardown()
+         this.LO && this.LO.teardown()
```

#### 35. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L481` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L481) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L481)

```diff
-             return `i${mm}`;
+             return `i${DD}`;
```

#### 36. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L487` → after: `L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L487) · [Before (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L487)

```diff
-     Tm.hE = Em
+     zD.tA = UD
```

#### 37. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L489-L490` → after: `L489-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L489-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L489-L490) · [Before (L489-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L489-L490)

```diff
-   9121: (mm, Tm, fm) => {
-     var hm = fm(9018);
+   9183: (DD, zD, wD) => {
+     var pD = wD(9100);
```

#### 38. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L547` → after: `L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/185.js#L547) · [Before (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/185.js#L547)

```diff
-   9086: (mm, Tm) => {
+   9158: (DD, zD) => {
```
