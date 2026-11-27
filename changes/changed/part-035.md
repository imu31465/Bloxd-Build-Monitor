# Changed — Bundle Modifications Report (Part 035 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `35 / 86` (**422** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 034](part-034.md) · [Part 036 →](part-036.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (239 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3)

#### 176. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1142` → after: `L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1144) · [Before (L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1142)

```diff
-           OB.setVerticesBuffer(new YB.g(this.Lp(), lB, QB, pB), zB)
+           iW.setVerticesBuffer(new mW.g(this.VA(), lW, NW, AW), xW)
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1144` → after: `L1146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1146) · [Before (L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1144)

```diff
-         return OB._updatable = oB, OB._boundingInfo = new QB.e(this.extend.minimum, this.extend.maximum), OB.relink(), OB
+         return iW._updatable = PW, iW._boundingInfo = new NW.b(this.extend.minimum, this.extend.maximum), iW.relink(), iW
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1147-L1149` → after: `L1149-L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1149-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1149-L1151) · [Before (L1147-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1147-L1149)

```diff
-         const yB = BB[0].JF(),
-           JB = new jB.b(BB[0].name + "_merged", yB),
-           PB = new MB(oB.d.RandomId(), yB, void 0, !1, JB);
+         const cW = WW[0].bD(),
+           wW = new LW.e(WW[0].name + "_merged", cW),
+           ZW = new tW(PW.b.RandomId(), cW, void 0, !1, wW);
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1151` → after: `L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1153) · [Before (L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1151)

```diff
-           if (!jB.b.MergeMeshes(BB, OB, GB, JB, DB, QB)) return JB.dispose(), null
+           if (!LW.e.MergeMeshes(WW, iW, OW, wW, EW, NW)) return wW.dispose(), null
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1173-L1174` → after: `L1175-L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1175-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1175-L1176) · [Before (L1173-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1173-L1174)

```diff
-       let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new jB.b(BB, GB);
-       const DB = (0, JB.j)(OB),
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new LW.e(WW, OW);
+       const EW = (0, wW.i)(iW),
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1182-L1184` → after: `L1184-L1186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1184-L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1184-L1186) · [Before (L1182-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1182-L1184)

```diff
-         qB = new yB.e;
-       qB.positions = QB, qB.normals = null !== PB && void 0 !== PB ? PB : null, qB.uvs = null !== zB && void 0 !== zB ? zB : null, qB.indices = lB;
-       const ZB = new MB(oB.d.RandomId(), GB, qB, !1, YB);
+         bW = new cW.c;
+       bW.positions = NW, bW.normals = null !== ZW && void 0 !== ZW ? ZW : null, bW.uvs = null !== xW && void 0 !== xW ? xW : null, bW.indices = lW;
+       const jW = new tW(PW.b.RandomId(), OW, bW, !1, mW);
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1195` → after: `L1197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1197) · [Before (L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1195)

```diff
-       const DB = new jB.b(BB, GB),
+       const EW = new LW.e(WW, OW),
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1202` → after: `L1204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1204) · [Before (L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1202)

```diff
-       return Object.assign(new yB.e, {
+       return Object.assign(new cW.c, {
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1210` → after: `L1212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1212) · [Before (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1210)

```diff
-   39388: (BB, OB, GB) => {
+   39931: (WW, iW, OW) => {
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1212-L1214` → after: `L1214-L1216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1214-L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1214-L1216) · [Before (L1212-L1214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1212-L1214)

```diff
-       b: () => YB,
-       d: () => oB,
-       f: () => QB,
+       A: () => cW,
+       c: () => mW,
+       g: () => PW,
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1216-L1219` → after: `L1218-L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1218-L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1218-L1221) · [Before (L1216-L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1216-L1219)

```diff
-       j: () => jB,
-       n: () => JB,
-       r: () => MB,
-       v: () => yB
+       l: () => EW,
+       p: () => LW,
+       t: () => wW,
+       w: () => tW
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1244` → after: `L1246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1246) · [Before (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1244)

```diff
-         lZ: 12 + 9 * YB,
+         Sj: 12 + 9 * mW,
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1250` → after: `L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1252) · [Before (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1250)

```diff
-   39385: (BB, OB, GB) => {
+   39925: (WW, iW, OW) => {
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1252-L1253` → after: `L1254-L1255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1254-L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1254-L1255) · [Before (L1252-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1252-L1253)

```diff
-       b: () => ZB,
-       f: () => WB
+       d: () => jW,
+       g: () => sW
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1255-L1258` → after: `L1257-L1260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1257-L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1257-L1260) · [Before (L1255-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1255-L1258)

```diff
-     var YB = GB(37807),
-       DB = GB(37771),
-       QB = GB(37962),
-       oB = GB(39388);
+     var mW = OW(38285),
+       EW = OW(38235),
+       NW = OW(38431),
+       PW = OW(39931);
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1261` → after: `L1263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1263) · [Before (L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1261)

```diff
-         this.CP = BB, this.records = void 0, this.recordBits = void 0, this.deaths = void 0, this.cursor = 0, this.highWater = 0, this.uploadFrom = -1, this.uploadTo = 0, this.wrapTo = 0;
+         this.aZ = WW, this.records = void 0, this.recordBits = void 0, this.deaths = void 0, this.cursor = 0, this.highWater = 0, this.uploadFrom = -1, this.uploadTo = 0, this.wrapTo = 0;
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1263` → after: `L1265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1265) · [Before (L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1263)

```diff
-         this.records = new Float32Array(OB * oB.d), this.recordBits = new Uint32Array(this.records.buffer), this.deaths = new Float64Array(OB).fill(-1 / 0)
+         this.records = new Float32Array(iW * PW.g), this.recordBits = new Uint32Array(this.records.buffer), this.deaths = new Float64Array(iW).fill(-1 / 0)
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1272` → after: `L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1274) · [Before (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1272)

```diff
-         const OB = this.CP;
+         const iW = this.aZ;
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1284-L1285` → after: `L1286-L1287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1286-L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1286-L1287) · [Before (L1284-L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1284-L1285)

```diff
-           GB = this.highWater * oB.d;
-         for (let YB = oB.f.time; YB < GB; YB += oB.d) OB[YB] -= BB;
+           OW = this.highWater * PW.g;
+         for (let mW = PW.h.time; mW < OW; mW += PW.g) iW[mW] -= WW;
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1303-L1306` → after: `L1305-L1308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1305-L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1305-L1308) · [Before (L1303-L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1303-L1306)

```diff
-     var yB = GB(37885),
-       JB = GB(39394),
-       MB = GB(39403),
-       PB = GB(39412);
+     var cW = OW(38369),
+       wW = OW(39938),
+       tW = OW(39940),
+       ZW = OW(39948);
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1309` → after: `L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1311) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1309)

```diff
-         this.particleEmitterType = new MB.e, this.texture = null, this.blendMode = PB.g, this.emitRate = 10, this.manualEmitCount = -1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minSize = 1, this.maxSize = 1, this.updateSpeed = … [truncated]
+         this.particleEmitterType = new tW.d, this.texture = null, this.blendMode = ZW.d, this.emitRate = 10, this.manualEmitCount = -1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minSize = 1, this.maxSize = 1, this.updateSpeed = … [truncated]
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1313` → after: `L1315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1315) · [Before (L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1313)

```diff
-         return null !== (BB = lB(this).direction1) && void 0 !== BB ? BB : DB.Xp.Zero()
+         return null !== (WW = lW(this).direction1) && void 0 !== WW ? WW : EW.fA.Zero()
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1321` → after: `L1323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1323) · [Before (L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1321)

```diff
-         return null !== (BB = lB(this).direction2) && void 0 !== BB ? BB : DB.Xp.Zero()
+         return null !== (WW = lW(this).direction2) && void 0 !== WW ? WW : EW.fA.Zero()
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1329` → after: `L1331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1331) · [Before (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1329)

```diff
-         return null !== (BB = lB(this).minEmitBox) && void 0 !== BB ? BB : DB.Xp.Zero()
+         return null !== (WW = lW(this).minEmitBox) && void 0 !== WW ? WW : EW.fA.Zero()
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1337` → after: `L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1339) · [Before (L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1337)

```diff
-         return null !== (BB = lB(this).maxEmitBox) && void 0 !== BB ? BB : DB.Xp.Zero()
+         return null !== (WW = lW(this).maxEmitBox) && void 0 !== WW ? WW : EW.fA.Zero()
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1344` → after: `L1346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1346) · [Before (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1344)

```diff
-         const DB = new MB.e;
+         const EW = new tW.d;
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1348` → after: `L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1350) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1348)

```diff
-         return this.colorGradients ??= [], this.colorGradients.push(new JB.b(BB, OB, GB)), this.colorGradients.sort(pB), this
+         return this.colorGradients ??= [], this.colorGradients.push(new wW.d(WW, iW, OW)), this.colorGradients.sort(AW), this
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1357` → after: `L1359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1359) · [Before (L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1357)

```diff
-         return this.velocityGradients ??= [], this.velocityGradients.push(new JB.g(BB, OB, GB)), this.velocityGradients.sort(pB), this
+         return this.velocityGradients ??= [], this.velocityGradients.push(new wW.i(WW, iW, OW)), this.velocityGradients.sort(AW), this
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1363` → after: `L1365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1365) · [Before (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1363)

```diff
-         return this.colorRemapGradients ??= [], this.colorRemapGradients.push(new JB.g(BB, OB, GB)), this.colorRemapGradients.sort(pB), this
+         return this.colorRemapGradients ??= [], this.colorRemapGradients.push(new wW.i(WW, iW, OW)), this.colorRemapGradients.sort(AW), this
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1369` → after: `L1371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1371) · [Before (L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1369)

```diff
-         return this.rampGradients ??= [], this.rampGradients.push(new JB.d(BB, OB)), this.rampGradients.sort(pB), this
+         return this.rampGradients ??= [], this.rampGradients.push(new wW.g(WW, iW)), this.rampGradients.sort(AW), this
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1393-L1395` → after: `L1395-L1397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1395-L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1395-L1397) · [Before (L1393-L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1393-L1395)

```diff
-         super(), this.name = BB, this.host = GB, this.onDispose = NB, this.onAnimationEnd = null, this.ring = void 0, this.emitterValue = DB.Xp.Zero(), this.emitterDisposed = null, this.time = 0, this.epoch = 0, this.anchor = [0, 0, 0], this.shift = [0, 0, 0], this.liveUntil = -1 … [truncated]
-           position: new DB.Xp,
-           direction: new DB.Xp
+         super(), this.name = WW, this.host = OW, this.onDispose = UW, this.onAnimationEnd = null, this.ring = void 0, this.emitterValue = EW.fA.Zero(), this.emitterDisposed = null, this.time = 0, this.epoch = 0, this.anchor = [0, 0, 0], this.shift = [0, 0, 0], this.liveUntil = -1 … [truncated]
+           position: new EW.fA,
+           direction: new EW.fA
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1403` → after: `L1405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1405) · [Before (L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1403)

```diff
-         null === (OB = this.emitterDisposed) || void 0 === OB || OB.remove(), this.emitterDisposed = null, this.emitterValue = BB, BB && AB(BB) && (this.emitterDisposed = BB.lF.add((() => {
+         null === (iW = this.emitterDisposed) || void 0 === iW || iW.remove(), this.emitterDisposed = null, this.emitterValue = WW, WW && MW(WW) && (this.emitterDisposed = WW.jD.add((() => {
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1423` → after: `L1425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1425) · [Before (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1423)

```diff
-         return !this.Vp && null !== this.emitterValue && this.host.canDraw(this)
+         return !this.JA && null !== this.emitterValue && this.host.canDraw(this)
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1428` → after: `L1430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1430) · [Before (L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1428)

```diff
-         this.Vp || (this.Vp = !0, null === (BB = this.emitterDisposed) || void 0 === BB || BB.remove(), this.emitterDisposed = null, OB && ((0, QB.w)(this.texture), this.texture = null), this.host.remove(this), this.onDispose())
+         this.JA || (this.JA = !0, null === (WW = this.emitterDisposed) || void 0 === WW || WW.remove(), this.emitterDisposed = null, iW && ((0, NW.D)(this.texture), this.texture = null), this.host.remove(this), this.onDispose())
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1448` → after: `L1450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1450) · [Before (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1448)

```diff
-         this.started && this.stopped && !this.Vp && !this.hasLiveParticles() && (this.manualEmitCount > 0 && (this.manualEmitCount = 0), this.end())
+         this.started && this.stopped && !this.JA && !this.hasLiveParticles() && (this.manualEmitCount > 0 && (this.manualEmitCount = 0), this.end())
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1452` → after: `L1454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1454) · [Before (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1452)

```diff
-         return this.started = !1, null === (BB = this.onAnimationEnd) || void 0 === BB || BB.call(this), !!this.Vp || !!this.disposeOnStop && (this.host.disposeStopped(this), !0)
+         return this.started = !1, null === (WW = this.onAnimationEnd) || void 0 === WW || WW.call(this), !!this.JA || !!this.disposeOnStop && (this.host.disposeStopped(this), !0)
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1463` → after: `L1465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1465) · [Before (L1463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1463)

```diff
-       POB(BB, OB) {
+       YWW(WW, iW) {
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1479` → after: `L1481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1481) · [Before (L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1479)

```diff
-         } = PB, qB = oB.f, ZB = null === (OB = this.getColorGradients()) || void 0 === OB ? void 0 : OB[0], NB = ZB ? ZB.color1 : this.color1, RB = ZB ? null !== (GB = ZB.color2) && void 0 !== GB ? GB : ZB.color1 : this.color2;
+         } = ZW, bW = PW.h, jW = null === (iW = this.getColorGradients()) || void 0 === iW ? void 0 : iW[0], UW = jW ? jW.color1 : this.color1, kW = jW ? null !== (OW = jW.color2) && void 0 !== OW ? OW : jW.color1 : this.color2;
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1488` → after: `L1490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1490) · [Before (L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1488)

```diff
-           const ZB = BB * oB.d;
+           const jW = WW * PW.g;
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1504-L1505` → after: `L1506-L1507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1506-L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1506-L1507) · [Before (L1504-L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1504-L1505)

```diff
-       for (const DB of BB) DB.isReady() || (YB++, GB.length < RB && GB.push(`${OB} particle system ${DB.name}`));
-       return YB > GB.length && GB.push(`${YB-GB.length} more ${OB} particle systems`), GB
+       for (const EW of WW) EW.isReady() || (mW++, OW.length < kW && OW.push(`${iW} particle system ${EW.name}`));
+       return mW > OW.length && OW.push(`${mW-OW.length} more ${iW} particle systems`), OW
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1512` → after: `L1514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1514) · [Before (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1512)

```diff
-   44735: (BB, OB, GB) => {
+   53776: (WW, iW, OW) => {
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1514` → after: `L1516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1516) · [Before (L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1514)

```diff
-       e: () => ZB,
+       c: () => jW,
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1516-L1517` → after: `L1518-L1519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1518-L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1518-L1519) · [Before (L1516-L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1516-L1517)

```diff
-       j: () => oB,
-       k: () => JB
+       h: () => PW,
+       i: () => wW
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1519-L1521` → after: `L1521-L1523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1521-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1521-L1523) · [Before (L1519-L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1519-L1521)

```diff
-     var YB = GB(37885),
-       DB = GB(39394),
-       QB = GB(39388);
+     var mW = OW(38369),
+       EW = OW(39938),
+       NW = OW(39931);
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1524` → after: `L1526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1526) · [Before (L1524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1524)

```diff
-       const DB = QB.v;
+       const EW = NW.A;
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1532` → after: `L1534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1534) · [Before (L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1532)

```diff
-         OB[DB.colorPositions + QB] = BB.gradient, BB.color1.toArray(OB, DB.color1 + 4 * QB), (null !== (yB = BB.color2) && void 0 !== yB ? yB : BB.color1).toArray(OB, DB.color2 + 4 * QB)
+         iW[EW.colorPositions + NW] = WW.gradient, WW.color1.toArray(iW, EW.color1 + 4 * NW), (null !== (cW = WW.color2) && void 0 !== cW ? cW : WW.color1).toArray(iW, EW.color2 + 4 * NW)
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1535` → after: `L1537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1537) · [Before (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1535)

```diff
-         MB = zB(BB, JB, "lZ", YB);
+         tW = xW(WW, wW, "Sj", mW);
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1537` → after: `L1539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1539) · [Before (L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1537)

```diff
-       for (let QB = 0; QB < MB; QB++) RB(OB, DB.lZ + 4 * QB, JB[lB(JB, QB)]);
+       for (let NW = 0; NW < tW; NW++) kW(iW, EW.Sj + 4 * NW, wW[lW(wW, NW)]);
```

#### 224. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1547` → after: `L1549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1549) · [Before (L1547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1547)

```diff
-         texels: new Uint8Array(4 * QB.h)
+         texels: new Uint8Array(4 * NW.l)
```

#### 225. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1554` → after: `L1556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1556) · [Before (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1554)

```diff
-         for (let GB = 0; GB < QB.h; GB++) DB.h.GetCurrentGradient(GB / QB.h, BB, ((BB, OB, GB) => {
+         for (let OW = 0; OW < NW.l; OW++) EW.m.GetCurrentGradient(OW / NW.l, WW, ((WW, iW, OW) => {
```

#### 226. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1571` → after: `L1573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1573) · [Before (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1571)

```diff
-       return OB ? OB.length > QB.b ? (YB(`particleStops:${GB}`, `GPU particles use the first 2 and last ${QB.b-2} of more than ${QB.b} ${GB} gradient stops (${BB.name})`), QB.b) : OB.length : 0
+       return iW ? iW.length > NW.c ? (mW(`particleStops:${OW}`, `GPU particles use the first 2 and last ${NW.c-2} of more than ${NW.c} ${OW} gradient stops (${WW.name})`), NW.c) : iW.length : 0
```

#### 227. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1575` → after: `L1577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1577) · [Before (L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1575)

```diff
-       return OB < 2 || BB.length <= QB.b ? OB : BB.length - QB.b + OB
+       return iW < 2 || WW.length <= NW.c ? iW : WW.length - NW.c + iW
```

#### 228. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1577` → after: `L1579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1579) · [Before (L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1577)

```diff
-     const pB = new Float32Array(QB.n),
+     const AW = new Float32Array(NW.t),
```

#### 229. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1593` → after: `L1595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1595) · [Before (L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1593)

```diff
-       BB[OB] = GB.gradient, BB[OB + 1] = GB.factor1, BB[OB + 2] = null !== (YB = GB.factor2) && void 0 !== YB ? YB : GB.factor1
+       WW[iW] = OW.gradient, WW[iW + 1] = OW.factor1, WW[iW + 2] = null !== (mW = OW.factor2) && void 0 !== mW ? mW : OW.factor1
```

#### 230. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1596` → after: `L1598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1598) · [Before (L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1596)

```diff
-   42154: (BB, OB, GB) => {
+   42633: (WW, iW, OW) => {
```

#### 231. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1629` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1631) · [Before (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1629)

```diff
-       const oB = null !== (YB = DB.get(BB)) && void 0 !== YB ? YB : new Map;
+       const PW = null !== (mW = EW.get(WW)) && void 0 !== mW ? mW : new Map;
```

#### 232. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1631` → after: `L1633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1633) · [Before (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1631)

```diff
-       const jB = null !== (QB = oB.get(OB[0])) && void 0 !== QB ? QB : [];
+       const LW = null !== (NW = PW.get(iW[0])) && void 0 !== NW ? NW : [];
```

#### 233. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1644` → after: `L1646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1646) · [Before (L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1644)

```diff
-   39412: (BB, OB, GB) => {
+   39948: (WW, iW, OW) => {
```

#### 234. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1647-L1649` → after: `L1650-L1651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1650-L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1650-L1651) · [Before (L1647-L1649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1647-L1649)

```diff
-       g: () => DB,
-       k: () => yB,
-       o: () => PB
+       e: () => cW,
+       h: () => ZW
```

#### 235. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1651` → after: `L1653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1653) · [Before (L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1651)

```diff
-     var YB = GB(37880);
+     var mW = OW(38364);
```

#### 236. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1656-L1660` → after: `L1658-L1662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1658-L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1658-L1662) · [Before (L1656-L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1656-L1660)

```diff
-         [DB, YB.d.ALPHA_ONEONE],
-         [1, YB.d.ALPHA_COMBINE],
-         [2, YB.d.ALPHA_ADD],
-         [QB, YB.d.ALPHA_MULTIPLY],
-         [-1, YB.d.ALPHA_SUBTRACT]
+         [EW, mW.e.ALPHA_ONEONE],
+         [1, mW.e.ALPHA_COMBINE],
+         [2, mW.e.ALPHA_ADD],
+         [NW, mW.e.ALPHA_MULTIPLY],
+         [-1, mW.e.ALPHA_SUBTRACT]
```

#### 237. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1665` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1667) · [Before (L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1665)

```diff
-       return null !== (OB = jB.get(BB)) && void 0 !== OB ? OB : BB
+       return null !== (iW = LW.get(WW)) && void 0 !== iW ? iW : WW
```

#### 238. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1676` → after: `L1678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1678) · [Before (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1676)

```diff
-   44732: (BB, OB, GB) => {
+   53774: (WW, iW, OW) => {
```

#### 239. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1685` → after: `L1687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1687) · [Before (L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1685)

```diff
-       c: () => YB
+       b: () => mW
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/blockFaceTable.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/blockFaceTable.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b4ac518b35c9d3f935c61d13f62d92d392878c185332b13bbe748db0e960f853)

#### 1. `bundles/preprod.bloxd.io/chunks/js/blockFaceTable.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b4ac518b35c9d3f935c61d13f62d92d392878c185332b13bbe748db0e960f853R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b4ac518b35c9d3f935c61d13f62d92d392878c185332b13bbe748db0e960f853) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockFaceTable.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockFaceTable.js#L4)

```diff
-   63859: (BB, OB, GB) => {
+   64378: (WW, iW, OW) => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L4)

```diff
-   37071: (BB, OB, GB) => {
+   37628: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L11)

```diff
-     var YB = GB(37078);
+     var mW = OW(37636);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L72` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L72) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L72)

```diff
-     var JB = GB(37083);
+     var wW = OW(37640);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L83)

```diff
-       return `${OB}|${GB}|${BB}`
+       return `${iW}|${OW}|${WW}`
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L110)

```diff
-         return null !== (DB = await (0, JB.e)(QB, OB, GB)) && void 0 !== DB ? DB : (await AB(QB, OB, GB)).toDataURL()
+         return null !== (EW = await (0, wW.b)(NW, iW, OW)) && void 0 !== EW ? EW : (await MW(NW, iW, OW)).toDataURL()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L121-L124` → after: `L121-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L121-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L121-L124) · [Before (L121-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L121-L124)

```diff
-         const QB = (0, YB.k)(GB, DB),
-           oB = QB * YB.d.across,
-           jB = QB * YB.d.down,
-           JB = QB * YB.d.up,
+         const NW = (0, mW.i)(OW, EW),
+           PW = NW * mW.c.across,
+           LW = NW * mW.c.down,
+           wW = NW * mW.c.up,
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L143)

```diff
-             rect: OB.cropFaces ? QB : [0, 0, 1, 1],
+             rect: iW.cropFaces ? NW : [0, 0, 1, 1],
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L148)

```diff
-           NB = YB.g;
+           UW = mW.f;
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L155` → after: `L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L155) · [Before (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L155)

```diff
-         return (0, YB.n)(qB, GB, DB, (BB => 1 === ZB[BB])), qB
+         return (0, mW.k)(bW, OW, EW, (WW => 1 === jW[WW])), bW
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L161` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L161) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L161)

```diff
-         return "SlabBlock" === BB ? QB : "StairsBlock" === BB ? oB : DB
+         return "SlabBlock" === WW ? NW : "StairsBlock" === WW ? PW : EW
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L171` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L171) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L171)

```diff
-         const OB = await (0, JB.n)(BB),
+         const iW = await (0, wW.g)(WW),
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L184)

```diff
-   37083: (BB, OB, GB) => {
+   37640: (WW, iW, OW) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L186-L190` → after: `L186-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L186-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L186-L190) · [Before (L186-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L186-L190)

```diff
-       e: () => dB,
-       i: () => KB,
-       k: () => VB,
-       n: () => WB,
-       q: () => SB
+       b: () => hW,
+       c: () => HW,
+       f: () => KW,
+       g: () => sW,
+       h: () => SW
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L192-L194` → after: `L192-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L192-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L192-L194) · [Before (L192-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L192-L194)

```diff
-     var YB = GB(271),
-       DB = GB(92);
-     const QB = new(GB(37085).d)(new URL(GB.p + GB.u(3), GB.b), {
+     var mW = OW(259),
+       EW = OW(100);
+     const NW = new(OW(37646).e)(new URL(OW.p + OW.u(3), OW.b), {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L198-L199` → after: `L198-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L198-L199) · [Before (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L198-L199)

```diff
-     var oB = GB(1896),
-       jB = GB(2259);
+     var PW = OW(1755),
+       LW = OW(2289);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L218` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L218) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L218)

```diff
-           GB(new Error(`A block icon's texture did not load: ${BB.slice(0,100)}`))
+           OW(new Error(`A block icon's texture did not load: ${WW.slice(0,100)}`))
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L221` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L221) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L221)

```diff
-       return (0, jB.e)(OB)
+       return (0, LW.f)(iW)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L226` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L226) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L226)

```diff
-       lB || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${BB}`), lB = !0, null === (OB = MB) || void 0 === OB || OB.terminate(), MB = null, PB = null, NB.clear(), RB.clear();
+       lW || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${WW}`), lW = !0, null === (iW = tW) || void 0 === iW || iW.terminate(), tW = null, ZW = null, UW.clear(), kW.clear();
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L238` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L238) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L238)

```diff
-         if ("page" === YB.b.ios_icon_worker_v1 && (0, DB.isWebKit)()) return;
+         if ("page" === mW.d.ios_icon_worker_v1 && (0, EW.isWebKit)()) return;
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L244` → after: `L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L244) · [Before (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L244)

```diff
-           return void AB(`did not start (${String(jB)})`)
+           return void MW(`did not start (${String(LW)})`)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L255` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L255) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L255)

```diff
-           else if ("failed" === GB.type) AB(`failed a draw (${GB.message})`);
+           else if ("failed" === OW.type) MW(`failed a draw (${OW.message})`);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L261)

```diff
-           OB.preventDefault(), AB(`stopped (${OB.message||"its script did not load or run"})`), BB()
+           iW.preventDefault(), MW(`stopped (${iW.message||"its script did not load or run"})`), WW()
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L263-L264` → after: `L263-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L263-L264) · [Before (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L263-L264)

```diff
-         const GB = `did not start in ${JB/1e3} s`;
-         await (0, oB.h)(OB, JB, GB).catch((() => {
+         const OW = `did not start in ${wW/1e3} s`;
+         await (0, PW.o)(iW, wW, OW).catch((() => {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L275-L276` → after: `L275-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L275-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L275-L276) · [Before (L275-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L275-L276)

```diff
-         OB = `did not answer in ${yB/1e3} s`;
-       (0, oB.h)(BB, yB, OB).then((() => {
+         iW = `did not answer in ${cW/1e3} s`;
+       (0, PW.o)(WW, cW, iW).then((() => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L299` → after: `L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L299) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L299)

```diff
-           AB(`could not take an image (${String(DB)})`)
+           MW(`could not take an image (${String(EW)})`)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L361` → after: `L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L361) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L361)

```diff
-   37078: (BB, OB, GB) => {
+   37636: (WW, iW, OW) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L363-L364` → after: `L363-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L363-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L363-L365) · [Before (L363-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L363-L364)

```diff
-       d: () => YB,
-       g: () => yB,
+       c: () => mW,
+       f: () => cW,
+       i: () => PW,
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L366-L367` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L367) · [Before (L366-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L366-L367)

```diff
-       n: () => zB,
-       q: () => JB
+       n: () => wW
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L473` → after: `L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L473) · [Before (L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L473)

```diff
-   37085: (BB, OB, GB) => {
+   37646: (WW, iW, OW) => {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L475` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L475) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L475)

```diff
-       d: () => DB
+       e: () => EW
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L513` → after: `L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L513) · [Before (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L513)

```diff
-           if (OB > 0 && GB.searchParams.set("cache-bust", `${Date.now()}-${OB}`), await this.fetchWhole(GB, BB)) return this.scriptUrl = GB, !0;
+           if (iW > 0 && OW.searchParams.set("cache-bust", `${Date.now()}-${iW}`), await this.fetchWhole(OW, WW)) return this.scriptUrl = OW, !0;
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef)

#### 1. `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L197` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7efR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L197) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L197)

```diff
-     if (void 0 === YB) throw new Error(`no ${GB} was sent for ${OB.slice(0,100)}`);
+     if (void 0 === mW) throw new Error(`no ${OW} was sent for ${iW.slice(0,100)}`);
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L223` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7efR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L223) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L223)

```diff
-             OB(null !== (BB = GB.error) && void 0 !== BB ? BB : new Error("the icon did not encode"))
+             iW(null !== (WW = OW.error) && void 0 !== WW ? WW : new Error("the icon did not encode"))
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7efR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L290)

```diff
-               rect: DB.cropFaces ? QB : [0, 0, 1, 1],
+               rect: EW.cropFaces ? NW : [0, 0, 1, 1],
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L308` → after: `L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7efR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef) · [After (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L308) · [Before (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L308)

```diff
-           return "SlabBlock" === BB ? lB : "StairsBlock" === BB ? pB : zB
+           return "SlabBlock" === WW ? lW : "StairsBlock" === WW ? AW : xW
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17)

#### 1. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L4)

```diff
-   37095: (BB, OB, GB) => {
+   37663: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L6-L303` → after: `L6-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L6-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L6-L303) · [Before (L6-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L6-L303)

```diff
-       "./67 Statue.json": [42793, 304],
-       "./A Doe Through The Green.json": [42797, 305],
-       "./Artisan Bench.json": [42800, 306],
-       "./Aspen Door.json": [42802, 307],
-       "./Aspen Item Pedestal.json": [42808, 308],
-       "./Aspen Ladder.json": [42812, 309],
-       "./Aspen Trapdoor.json": [42820, 310],
-       "./Auto Miner.json": [42829, 311],
-       "./Bebek Bebek Bebek Statue.json": [42832, 312],
-       "./Bin.json": [42835, 313],
-       "./Black Banner.json": [42840, 314],
-       "./Black Bed.json": [42846, 315],
-       "./Black Carpet.json": [42855, 316],
-       "./Black Directional Arrow.json": [42858, 317],
-       "./Black Strongbed.json": [42860, 318],
-       "./Black Torch.json": [42866, 319],
- ... (282 more removed lines; see GitHub link above)
+       "./67 Statue.json": [43291, 312],
+       "./A Doe Through The Green.json": [43295, 313],
+       "./Artisan Bench.json": [43304, 314],
+       "./Aspen Door.json": [43312, 315],
+       "./Aspen Item Pedestal.json": [43318, 316],
+       "./Aspen Ladder.json": [43323, 317],
+       "./Aspen Trapdoor.json": [43329, 318],
+       "./Auto Miner.json": [43336, 319],
+       "./Bebek Bebek Bebek Statue.json": [43341, 320],
+       "./Bin.json": [43343, 321],
+       "./Black Banner.json": [43350, 322],
+       "./Black Bed.json": [43355, 323],
+       "./Black Carpet.json": [43360, 324],
+       "./Black Directional Arrow.json": [43363, 325],
+       "./Black Strongbed.json": [43372, 326],
+       "./Black Torch.json": [43379, 327],
+ ... (282 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L315` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L315) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L315)

```diff
-     DB.keys = () => Object.keys(YB), DB.id = 37095, BB.exports = DB
+     EW.keys = () => Object.keys(mW), EW.id = 37663, WW.exports = EW
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L317` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L317) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L317)

```diff
-   37083: (BB, OB, GB) => {
+   37640: (WW, iW, OW) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L319-L323` → after: `L319-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L319-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L319-L323) · [Before (L319-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L319-L323)

```diff
-       e: () => dB,
-       i: () => KB,
-       k: () => VB,
-       n: () => WB,
-       q: () => SB
+       b: () => hW,
+       c: () => HW,
+       f: () => KW,
+       g: () => sW,
+       h: () => SW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L325-L327` → after: `L325-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L325-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L325-L327) · [Before (L325-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L325-L327)

```diff
-     var YB = GB(271),
-       DB = GB(92);
-     const QB = new(GB(37085).d)(new URL(GB.p + GB.u(3), GB.b), {
+     var mW = OW(259),
+       EW = OW(100);
+     const NW = new(OW(37646).e)(new URL(OW.p + OW.u(3), OW.b), {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L331-L332` → after: `L331-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L331-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L331-L332) · [Before (L331-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L331-L332)

```diff
-     var oB = GB(1896),
-       jB = GB(2259);
+     var PW = OW(1755),
+       LW = OW(2289);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L351` → after: `L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L351) · [Before (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L351)

```diff
-           GB(new Error(`A block icon's texture did not load: ${BB.slice(0,100)}`))
+           OW(new Error(`A block icon's texture did not load: ${WW.slice(0,100)}`))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L354` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L354) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L354)

```diff
-       return (0, jB.e)(OB)
+       return (0, LW.f)(iW)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L359` → after: `L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L359) · [Before (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L359)

```diff
-       lB || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${BB}`), lB = !0, null === (OB = MB) || void 0 === OB || OB.terminate(), MB = null, PB = null, NB.clear(), RB.clear();
+       lW || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${WW}`), lW = !0, null === (iW = tW) || void 0 === iW || iW.terminate(), tW = null, ZW = null, UW.clear(), kW.clear();
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L371` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L371) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L371)

```diff
-         if ("page" === YB.b.ios_icon_worker_v1 && (0, DB.isWebKit)()) return;
+         if ("page" === mW.d.ios_icon_worker_v1 && (0, EW.isWebKit)()) return;
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L377` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L377) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L377)

```diff
-           return void AB(`did not start (${String(jB)})`)
+           return void MW(`did not start (${String(LW)})`)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L388` → after: `L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L388) · [Before (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L388)

```diff
-           else if ("failed" === GB.type) AB(`failed a draw (${GB.message})`);
+           else if ("failed" === OW.type) MW(`failed a draw (${OW.message})`);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L394` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L394) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L394)

```diff
-           OB.preventDefault(), AB(`stopped (${OB.message||"its script did not load or run"})`), BB()
+           iW.preventDefault(), MW(`stopped (${iW.message||"its script did not load or run"})`), WW()
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L396-L397` → after: `L396-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L396-L397) · [Before (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L396-L397)

```diff
-         const GB = `did not start in ${JB/1e3} s`;
-         await (0, oB.h)(OB, JB, GB).catch((() => {
+         const OW = `did not start in ${wW/1e3} s`;
+         await (0, PW.o)(iW, wW, OW).catch((() => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L408-L409` → after: `L408-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L408-L409) · [Before (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L408-L409)

```diff
-         OB = `did not answer in ${yB/1e3} s`;
-       (0, oB.h)(BB, yB, OB).then((() => {
+         iW = `did not answer in ${cW/1e3} s`;
+       (0, PW.o)(WW, cW, iW).then((() => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L432` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L432) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L432)

```diff
-           AB(`could not take an image (${String(DB)})`)
+           MW(`could not take an image (${String(EW)})`)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L494` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L494) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L494)

```diff
-   37091: (BB, OB, GB) => {
+   37654: (WW, iW, OW) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L501-L502` → after: `L501-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L501-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L501-L502) · [Before (L501-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L501-L502)

```diff
-     var YB = GB(37083),
-       DB = GB(37078);
+     var mW = OW(37640),
+       EW = OW(37636);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L504` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L504) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L504)

```diff
-       oB = GB(37095),
+       PW = OW(37663),
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L516` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L516) · [Before (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L516)

```diff
-       return null !== (OB = QB[BB]) && void 0 !== OB ? OB : [BB]
+       return null !== (iW = NW[WW]) && void 0 !== iW ? iW : [WW]
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L547` → after: `L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L547) · [Before (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L547)

```diff
-       return oB.width = OB, oB.height = OB, oB.getContext("2d").putImageData(new ImageData((0, DB.q)(YB, QB, OB, GB), OB, OB), 0, 0), oB.toDataURL()
+       return PW.width = iW, PW.height = iW, PW.getContext("2d").putImageData(new ImageData((0, EW.n)(mW, NW, iW, OW), iW, iW), 0, 0), PW.toDataURL()
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L551` → after: `L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L551) · [Before (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L551)

```diff
-       const DB = `${OB}|${GB}|${BB}`;
+       const EW = `${iW}|${OW}|${WW}`;
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L553` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L553) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L553)

```diff
-       return QB || (QB = (0, YB.i)(BB, (() => lB(BB)), OB, GB).then((YB => null !== YB && void 0 !== YB ? YB : pB(BB, OB, GB))), QB.then((GB => {
+       return NW || (NW = (0, mW.c)(WW, (() => lW(WW)), iW, OW).then((mW => null !== mW && void 0 !== mW ? mW : AW(WW, iW, OW))), NW.then((OW => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L566` → after: `L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L566) · [Before (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L566)

```diff
-       return null !== (OB = null === (GB = MB.get(BB)) || void 0 === GB ? void 0 : GB.url) && void 0 !== OB ? OB : null
+       return null !== (iW = null === (OW = tW.get(WW)) || void 0 === OW ? void 0 : OW.url) && void 0 !== iW ? iW : null
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L569` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L569) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L569)

```diff
-   37078: (BB, OB, GB) => {
+   37636: (WW, iW, OW) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L571-L572` → after: `L571-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L571-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L571-L573) · [Before (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L571-L572)

```diff
-       d: () => YB,
-       g: () => yB,
+       c: () => mW,
+       f: () => cW,
+       i: () => PW,
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L574-L575` → after: `L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L575) · [Before (L574-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L574-L575)

```diff
-       n: () => zB,
-       q: () => JB
+       n: () => wW
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L681` → after: `L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L681) · [Before (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L681)

```diff
-   37085: (BB, OB, GB) => {
+   37646: (WW, iW, OW) => {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L683` → after: `L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L683) · [Before (L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L683)

```diff
-       d: () => DB
+       e: () => EW
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L721` → after: `L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L721) · [Before (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L721)

```diff
-           if (OB > 0 && GB.searchParams.set("cache-bust", `${Date.now()}-${OB}`), await this.fetchWhole(GB, BB)) return this.scriptUrl = GB, !0;
+           if (iW > 0 && OW.searchParams.set("cache-bust", `${Date.now()}-${iW}`), await this.fetchWhole(OW, WW)) return this.scriptUrl = OW, !0;
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db)

#### 1. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L4-L5)

```diff
-   54036: (BB, OB, GB) => {
-     BB.exports = GB.p + "static/media/bloxd_wasm_anim_bg.871999dc0f27698e17e9.wasm"
+   54791: (WW, iW, OW) => {
+     WW.exports = OW.p + "static/media/bloxd_wasm_anim_bg.39cfafebdd7463cb374f.wasm"
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L7)

```diff
-   54029: (BB, OB, GB) => {
+   54787: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L15-L23` → after: `L15-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L15-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L15-L23) · [Before (L15-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L15-L23)

```diff
-       const oB = RB(BB, dB.rubw),
-         jB = KB,
-         yB = RB(OB, dB.rubw),
-         JB = KB,
-         MB = RB(GB, dB.rubw),
-         PB = KB,
-         zB = RB(YB, dB.rubw),
-         pB = KB,
-         qB = RB(DB, dB.rubw),
+       const PW = kW(WW, hW.VnNx),
+         LW = HW,
+         cW = kW(iW, hW.VnNx),
+         wW = HW,
+         tW = kW(OW, hW.VnNx),
+         ZW = HW,
+         xW = kW(mW, hW.VnNx),
+         AW = HW,
+         bW = kW(EW, hW.VnNx),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L28)

```diff
-         }(QB, dB.rubw),
+         }(NW, hW.VnNx),
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L30)

```diff
-       const SB = dB.uB0s(oB, jB, yB, JB, MB, PB, zB, pB, qB, ZB, WB, VB);
+       const SW = hW.Ncmb(PW, LW, cW, wW, tW, ZW, xW, AW, bW, jW, sW, KW);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L33-L39` → after: `L33-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L33-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L33-L39) · [Before (L33-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L33-L39)

```diff
-       return dB.UVD4(SB[0], 1 * SB[1], 1), fB
-     }
- 
-     function QB(BB, OB) {
-       const GB = WB(BB, dB.rubw, dB.knRL),
-         YB = KB,
-         DB = dB.a2OL(GB, YB, OB);
+       return hW.AlF0(SW[0], 1 * SW[1], 1), TW
+     }
+ 
+     function NW(WW, iW) {
+       const OW = sW(WW, hW.VnNx, hW.Rmm1),
+         mW = HW,
+         EW = hW.JLiP(OW, mW, iW);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L44)

```diff
-       dB.bPmF()
+       hW.xFkT()
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L50)

```diff
-         tUHU: {
+         rthQ: {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L52` → after: `L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L52) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L52)

```diff
-           alcT: function(BB, OB) {
+           Mjwu: function(WW, iW) {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L55` → after: `L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L55) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L55)

```diff
-           mNP4: function(BB, OB) {
+           dZ7X: function(WW, iW) {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L57-L58` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L57-L58) · [Before (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L57-L58)

```diff
-               YB = "string" === typeof GB ? GB : void 0;
-             var DB = NB(YB) ? 0 : WB(YB, dB.rubw, dB.knRL),
+               mW = "string" === typeof OW ? OW : void 0;
+             var EW = UW(mW) ? 0 : sW(mW, hW.VnNx, hW.Rmm1),
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L62)

```diff
-           FMyY: function(BB, OB) {
+           v1Mk: function(WW, iW) {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L65)

```diff
-           Ap2r: function(BB, OB) {
+           iaoL: function(WW, iW) {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L68)

```diff
-           dDx4: function(BB) {
+           lgNX: function(WW) {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L81-L82` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L81-L82) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L81-L82)

```diff
-       GyB: () => DB,
-       sy: () => QB,
+       lLW: () => EW,
+       sw: () => NW,
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L85` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L85) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L85)

```diff
-       VP: () => oB
+       qt: () => PW
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L173` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L173) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L173)

```diff
-       return kB = BB, dB = BB.exports, fB = OB, JB = null, zB = null, dB.rxZz(), dB
+       return JW = WW, hW = WW.exports, TW = iW, wW = null, xW = null, hW.zNwJ(), hW
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L197` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L197) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L197)

```diff
-           if (!BB.ok) throw new Error(`failed to fetch Wasm: ${BB.status} ${BB.statusText} fetching '${BB.url}'`);
+           if (!WW.ok) throw new Error(`failed to fetch Wasm: ${WW.status} ${WW.statusText} fetching '${WW.url}'`);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L224-L225` → after: `L224-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L224-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L224-L225) · [Before (L224-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L224-L225)

```diff
-     var FB = GB(3210),
-       iB = GB(7161);
+     var dW = OW(2388),
+       eW = OW(7625);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L229` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L229) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L229)

```diff
-         super((0, FB.C)(BB, OB), {
+         super((0, dW.A)(WW, iW), {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L245)

```diff
-           BB = await (0, FB.G)(new GB.U(GB(54036)), (0, iB.d)("bloxd_wasm_anim"))
+           WW = await (0, dW.B)(new OW.U(OW(54791)), (0, eW.c)("bloxd_wasm_anim"))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L247` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L247) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L247)

```diff
-           throw new LB((0, FB.M)(OB), OB)
+           throw new vW((0, dW.E)(iW), iW)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L262` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L262) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L262)

```diff
-         return QB.GyB(Object.entries(BB).flat(), [...OB.mobTypes], [...OB.vehicleTypes], [...OB.mobAiStates], [...OB.playerPoses], "builtIns" in DB ? DB.builtIns : void 0)
+         return NW.lLW(Object.entries(WW).flat(), [...iW.mobTypes], [...iW.vehicleTypes], [...iW.mobAiStates], [...iW.playerPoses], "builtIns" in EW ? EW.builtIns : void 0)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (532 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L4-L5)

```diff
-   54019: (BB, OB, GB) => {
-     BB.exports = GB.p + "static/media/bloxd_wasm_webgl_bg.f85111fea908c338c433.wasm"
+   54767: (WW, iW, OW) => {
+     WW.exports = OW.p + "static/media/bloxd_wasm_webgl_bg.2b5612c650a296033400.wasm"
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L7)

```diff
-   54010: (BB, OB, GB) => {
+   54761: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L13-L14` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L13-L14) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L13-L14)

```diff
-       EZ: () => DB,
-       IoB: () => QB,
+       WU: () => EW,
+       dmW: () => NW,
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L16)

```diff
-       sy: () => jB,
+       sw: () => LW,
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L19-L28` → after: `L19-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L19-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L19-L23) · [Before (L19-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L19-L28)

```diff
-       VP: () => yB,
-       hU: () => JB,
-       nDB: () => MB,
-       IP: () => PB,
-       FP: () => zB,
-       iP: () => lB,
-       LP: () => pB,
-       gP: () => qB,
-       rP: () => ZB,
-       XP: () => NB,
+       qt: () => cW,
+       eJ: () => wW,
+       HmW: () => tW,
+       dZ: () => ZW,
+       eZ: () => xW,
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L30-L41` → after: `L25-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L25-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L25-L44) · [Before (L30-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L30-L41)

```diff
-       hP: () => WB,
-       ZDB: () => AB,
-       FoB: () => VB,
-       NDB: () => SB,
-       ioB: () => nB,
-       LoB: () => UB,
-       WDB: () => fB,
-       goB: () => kB,
-       roB: () => dB,
-       VDB: () => KB,
-       eP: () => uB,
-       TP: () => mB
+       gZ: () => AW,
+       DZ: () => bW,
+       VZ: () => jW,
+       pZ: () => UW,
+       PEW: () => kW,
+       wU: () => sW,
+       BZ: () => MW,
+       OEW: () => KW,
+       emW: () => SW,
+       EEW: () => YW,
+       mEW: () => yW,
+       vmW: () => TW,
+       omW: () => JW,
+       DH: () => hW,
+       YmW: () => HW,
+       tPW: () => nW,
+ ... (4 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L50` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L53) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L50)

```diff
-         dO.opkY(BB, 0)
+         oi.V9tm(WW, 0)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L52-L53` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L55-L56) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L52-L53)

```diff
-       static ADB() {
-         return dO.IYDl() >>> 0
+       static TmW() {
+         return oi.c3AU() >>> 0
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L55-L56` → after: `L58-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L58-L59) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L55-L56)

```diff
-       XoB() {
-         return dO.rsWM(this.__wbg_ptr)
+       xPW() {
+         return oi.c354(this.__wbg_ptr)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L58-L59` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L61-L62) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L58-L59)

```diff
-       iQB() {
-         return dO.Gy3E(this.__wbg_ptr) >>> 0
+       lNW() {
+         return oi.qQML(this.__wbg_ptr) >>> 0
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L61-L62` → after: `L64-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L64-L65) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L61-L62)

```diff
-       woB(BB, OB, GB) {
-         return dO.wpDx(this.__wbg_ptr, BB, OB, GB) >>> 0
+       lPW(WW, iW, OW) {
+         return oi.aB8y(this.__wbg_ptr, WW, iW, OW) >>> 0
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L65` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L68) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L65)

```diff
-         return dO.ygKV(this.__wbg_ptr, BB, OB, GB) >>> 0
+         return oi.sJqO(this.__wbg_ptr, WW, iW, OW) >>> 0
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L67-L68` → after: `L70-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L70-L71) · [Before (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L67-L68)

```diff
-       EoB() {
-         return dO.vmjE(this.__wbg_ptr) >>> 0
+       APW() {
+         return oi.K7jP(this.__wbg_ptr) >>> 0
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L70-L71` → after: `L73-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L73-L74) · [Before (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L70-L71)

```diff
-       rQB(BB, OB, GB, YB, DB, QB, oB) {
-         return dO.VCGk(this.__wbg_ptr, BB, OB, GB, YB, DB, QB, oB)
+       jNW(WW, iW, OW, mW, EW, NW, PW) {
+         return oi.NijC(this.__wbg_ptr, WW, iW, OW, mW, EW, NW, PW)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L73-L74` → after: `L76-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L76-L77) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L73-L74)

```diff
-       coB(BB, OB, GB) {
-         return dO.RQbg(this.__wbg_ptr, BB, OB, GB) >>> 0
+       bPW(WW, iW, OW) {
+         return oi.ThEB(this.__wbg_ptr, WW, iW, OW) >>> 0
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L76-L77` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L79-L80) · [Before (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L76-L77)

```diff
-       hoB() {
-         return dO.g9Sk(this.__wbg_ptr) >>> 0
+       jPW() {
+         return oi.sjNI(this.__wbg_ptr) >>> 0
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L79-L80` → after: `L82-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L82-L83) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L79-L80)

```diff
-       aoB() {
-         return dO.mBKb(this.__wbg_ptr) >>> 0
+       UPW() {
+         return oi.jS83(this.__wbg_ptr) >>> 0
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L82-L83` → after: `L85-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L85-L86) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L82-L83)

```diff
-       ToB() {
-         return dO.fOqB(this.__wbg_ptr) >>> 0
+       sPW() {
+         return oi.PUpo(this.__wbg_ptr) >>> 0
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L86` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L89) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L86)

```diff
-         return dO.PFIE(this.__wbg_ptr, BB, OB, GB) >>> 0
+         return oi.FTJd(this.__wbg_ptr, WW, iW, OW) >>> 0
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L88-L89` → after: `L91-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L91-L92) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L88-L89)

```diff
-       aQB(BB, OB, GB) {
-         return dO.CEEw(this.__wbg_ptr, BB, OB, GB) >>> 0
+       SNW(WW, iW, OW) {
+         return oi.VJCo(this.__wbg_ptr, WW, iW, OW) >>> 0
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L91-L92` → after: `L94-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L94-L95) · [Before (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L91-L92)

```diff
-       XQB() {
-         return dO.Ot5g(this.__wbg_ptr) >>> 0
+       UNW() {
+         return oi.oxQf(this.__wbg_ptr) >>> 0
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L94-L95` → after: `L97-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L97-L98) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L94-L95)

```diff
-       gQB(BB) {
-         return dO.f3qV(this.__wbg_ptr, BB) >>> 0
+       bNW(WW) {
+         return oi.Xk2c(this.__wbg_ptr, WW) >>> 0
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L97-L98` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L100-L101) · [Before (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L97-L98)

```diff
-       wQB(BB, OB, GB, YB, DB, QB) {
-         return dO.pq9e(this.__wbg_ptr, BB, OB, GB, YB, DB, QB) >>> 0
+       kNW(WW, iW, OW, mW, EW, NW) {
+         return oi.KghN(this.__wbg_ptr, WW, iW, OW, mW, EW, NW) >>> 0
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L100-L101` → after: `L103-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L103-L104) · [Before (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L100-L101)

```diff
-       LQB() {
-         return dO.XhsU(this.__wbg_ptr) >>> 0
+       ANW() {
+         return oi.Cn8i(this.__wbg_ptr) >>> 0
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L103-L104` → after: `L106-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L106-L107) · [Before (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L103-L104)

```diff
-       boB() {
-         return dO.gIoh(this.__wbg_ptr) >>> 0
+       MPW() {
+         return oi.KZ9t(this.__wbg_ptr) >>> 0
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L106-L107` → after: `L109-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L109-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L109-L110) · [Before (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L106-L107)

```diff
-       CoB(BB) {
-         return dO.CpJu(this.__wbg_ptr, BB) >>> 0
+       SPW(WW) {
+         return oi.Q67K(this.__wbg_ptr, WW) >>> 0
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L109-L110` → after: `L112-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L112-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L112-L113) · [Before (L109-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L109-L110)

```diff
-       hQB(BB) {
-         return dO.KGPA(this.__wbg_ptr, BB) >>> 0
+       KNW(WW) {
+         return oi.hYug(this.__wbg_ptr, WW) >>> 0
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L112-L113` → after: `L115-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L115-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L115-L116) · [Before (L112-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L112-L113)

```diff
-       TQB(BB) {
-         return dO.txUl(this.__wbg_ptr, BB) >>> 0
+       yNW(WW) {
+         return oi.vW59(this.__wbg_ptr, WW) >>> 0
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L115-L116` → after: `L118-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L118-L119) · [Before (L115-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L115-L116)

```diff
-       HoB(BB) {
-         return dO.PDbE(this.__wbg_ptr, BB) >>> 0
+       YPW(WW) {
+         return oi.I2bb(this.__wbg_ptr, WW) >>> 0
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L118-L119` → after: `L121-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L121-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L121-L127) · [Before (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L118-L119)

```diff
-       voB(BB) {
-         return dO.p5Ir(this.__wbg_ptr, BB) >>> 0
+       yPW(WW) {
+         return oi.DtEx(this.__wbg_ptr, WW) >>> 0
+       }
+       ymW() {
+         const WW = oi.qPdx(this.__wbg_ptr);
+         var iW = zW(WW[0], WW[1]).slice();
+         return oi.fuyY(WW[0], 4 * WW[1], 4), iW
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L122` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L130) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L122)

```diff
-         return dO.wLKS(this.__wbg_ptr, BB, OB, GB, YB, DB, QB) >>> 0
+         return oi.rbMq(this.__wbg_ptr, WW, iW, OW, mW, EW, NW) >>> 0
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L124-L125` → after: `L132-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L132-L133) · [Before (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L124-L125)

```diff
-       xoB(BB) {
-         return 0 !== dO.vJfL(this.__wbg_ptr, BB)
+       hPW(WW) {
+         return 0 !== oi.EagL(this.__wbg_ptr, WW)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L128` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L136) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L128)

```diff
-         return dO.EAvO(this.__wbg_ptr) >>> 0
+         return oi.cuJP(this.__wbg_ptr) >>> 0
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L130-L131` → after: `L138-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L138-L139) · [Before (L130-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L130-L131)

```diff
-       BjB(BB, OB) {
-         return dO.bJJy(this.__wbg_ptr, BB, OB) >>> 0
+       HPW(WW, iW) {
+         return oi.PkP3(this.__wbg_ptr, WW, iW) >>> 0
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L133-L134` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L141-L142) · [Before (L133-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L133-L134)

```diff
-       OjB(BB) {
-         return dO.GLHW(this.__wbg_ptr, BB) >>> 0
+       nPW(WW) {
+         return oi.KCGz(this.__wbg_ptr, WW) >>> 0
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L137` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L145) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L137)

```diff
-         return dO.dOq2(this.__wbg_ptr) >>> 0
+         return oi.jMMJ(this.__wbg_ptr) >>> 0
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L139-L140` → after: `L147-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L147-L148) · [Before (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L139-L140)

```diff
-       GjB() {
-         return dO.cJPv(this.__wbg_ptr) >>> 0
+       uPW() {
+         return oi.Yzv4(this.__wbg_ptr) >>> 0
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L143` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L151) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L143)

```diff
-         return dO.tNXf(this.__wbg_ptr) >>> 0
+         return oi.bzBm(this.__wbg_ptr) >>> 0
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L145-L146` → after: `L153-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L153-L154) · [Before (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L145-L146)

```diff
-       YjB(BB, OB, GB, YB, DB) {
-         return dO.HSgB(this.__wbg_ptr, BB, OB, GB, YB, DB) >>> 0
+       oPW(WW, iW, OW, mW, EW) {
+         return oi.rVar(this.__wbg_ptr, WW, iW, OW, mW, EW) >>> 0
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L148-L149` → after: `L156-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L156-L157) · [Before (L148-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L148-L149)

```diff
-       DjB(BB, OB, GB) {
-         return dO.SHQo(this.__wbg_ptr, BB, OB, GB) >>> 0
+       dPW(WW, iW, OW) {
+         return oi.Pnkb(this.__wbg_ptr, WW, iW, OW) >>> 0
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L151-L152` → after: `L159-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L159-L160) · [Before (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L151-L152)

```diff
-       QjB(BB, OB, GB, YB) {
-         return dO.H2Jv(this.__wbg_ptr, BB, OB, GB, YB) >>> 0
+       ePW(WW, iW, OW, mW) {
+         return oi.rtEZ(this.__wbg_ptr, WW, iW, OW, mW) >>> 0
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L154-L155` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L162-L163) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L154-L155)

```diff
-       ojB(BB, OB, GB) {
-         return dO.sLBg(this.__wbg_ptr, BB, OB, GB) >>> 0
+       vPW(WW, iW, OW) {
+         return oi.XXcO(this.__wbg_ptr, WW, iW, OW) >>> 0
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L157-L158` → after: `L165-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L165-L166) · [Before (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L157-L158)

```diff
-       jjB(BB, OB) {
-         return dO.hmWK(this.__wbg_ptr, BB, OB) >>> 0
+       DPW(WW, iW) {
+         return oi.hFfz(this.__wbg_ptr, WW, iW) >>> 0
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L160-L161` → after: `L168-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L168-L169) · [Before (L160-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L160-L161)

```diff
-       eQB(BB) {
-         return dO.KZ0Q(this.__wbg_ptr, BB) >>> 0
+       YNW(WW) {
+         return oi.mfSY(this.__wbg_ptr, WW) >>> 0
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L164` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L172) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L164)

```diff
-         return dO.qnc7(this.__wbg_ptr) >>> 0
+         return oi.MzK1(this.__wbg_ptr) >>> 0
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L166-L167` → after: `L174-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L174-L175) · [Before (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L166-L167)

```diff
-       yjB() {
-         return dO.ZW6H(this.__wbg_ptr) >>> 0
+       VPW() {
+         return oi.fIln(this.__wbg_ptr) >>> 0
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L170` → after: `L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L178) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L170)

```diff
-         return dO.VUQe(this.__wbg_ptr) >>> 0
+         return oi.HQIL(this.__wbg_ptr) >>> 0
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L172-L173` → after: `L180-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L180-L181) · [Before (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L172-L173)

```diff
-       JjB() {
-         return dO.XzR3(this.__wbg_ptr) >>> 0
+       pPW() {
+         return oi.YMXc(this.__wbg_ptr) >>> 0
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L175-L176` → after: `L183-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L183-L184) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L175-L176)

```diff
-       MjB() {
-         return dO.i8dd(this.__wbg_ptr) >>> 0
+       fPW() {
+         return oi.OMov(this.__wbg_ptr) >>> 0
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L179` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L187) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L179)

```diff
-         const GB = dO.z0ME(BB, OB);
+         const OW = oi.O0Hw(WW, iW);
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L182-L183` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L190-L191) · [Before (L182-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L182-L183)

```diff
-       PjB(BB) {
-         return dO.ApPY(this.__wbg_ptr, BB) >>> 0
+       CPW(WW) {
+         return oi.T4Ah(this.__wbg_ptr, WW) >>> 0
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L186` → after: `L194-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L194-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L194-L197) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L186)

```diff
-         return dO.yUBO(this.__wbg_ptr) >>> 0
+         return oi.fgGB(this.__wbg_ptr) >>> 0
+       }
+       CNW(WW, iW) {
+         return oi.QvFG(this.__wbg_ptr, WW, iW) >>> 0
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L188-L189` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L199-L200) · [Before (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L188-L189)

```diff
-       yoB(BB, OB) {
-         return dO.h6TY(this.__wbg_ptr, BB, OB) >>> 0
+       DNW(WW) {
+         return oi.CzeU(this.__wbg_ptr, WW) >>> 0
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L191-L192` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L202-L203) · [Before (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L191-L192)

```diff
-       DoB(BB) {
-         return dO.FZvH(this.__wbg_ptr, BB) >>> 0
+       XPW(WW, iW, OW, mW) {
+         return oi.X0Z1(this.__wbg_ptr, WW, iW, OW, mW) >>> 0
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L194-L195` → after: `L205-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L205-L206) · [Before (L194-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L194-L195)

```diff
-       zjB(BB, OB, GB, YB) {
-         return dO.lKYy(this.__wbg_ptr, BB, OB, GB, YB) >>> 0
+       RNW(WW) {
+         return oi.r1D0(this.__wbg_ptr, WW) >>> 0
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L197-L198` → after: `L208-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L208-L209) · [Before (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L197-L198)

```diff
-       zoB(BB) {
-         return dO.BVMz(this.__wbg_ptr, BB) >>> 0
+       nNW() {
+         oi.ZO9V(this.__wbg_ptr)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L200-L201` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L211-L212) · [Before (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L200-L201)

```diff
-       sQB() {
-         dO.y55x(this.__wbg_ptr)
+       BPW() {
+         oi.zmyv(this.__wbg_ptr)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L203-L204` → after: `L214-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L214-L215) · [Before (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L203-L204)

```diff
-       NoB(BB) {
-         dO.uWN3(this.__wbg_ptr, BB)
+       zNW(WW) {
+         oi.wPtz(this.__wbg_ptr, WW)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L206-L207` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L217-L218) · [Before (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L206-L207)

```diff
-       ZoB(BB) {
-         return dO.zemt(this.__wbg_ptr, BB)
+       aNW(WW) {
+         return oi.Fgqz(this.__wbg_ptr, WW)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L209-L210` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L220-L221) · [Before (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L209-L210)

```diff
-       vQB() {
-         return dO.UWLq(this.__wbg_ptr) >>> 0
+       HNW() {
+         return oi.TYgZ(this.__wbg_ptr) >>> 0
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L213` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L224) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L213)

```diff
-         return dO.Ja6l(this.__wbg_ptr) >>> 0
+         return oi.CmWT(this.__wbg_ptr) >>> 0
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L215-L216` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L226-L227) · [Before (L215-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L215-L216)

```diff
-       MoB() {
-         return dO.HW8o(this.__wbg_ptr) >>> 0
+       BNW() {
+         return oi.AYIh(this.__wbg_ptr) >>> 0
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L218-L219` → after: `L229-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L229-L230) · [Before (L218-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L218-L219)

```diff
-       eoB(BB) {
-         return dO.pYIU(this.__wbg_ptr, BB) >>> 0
+       kPW(WW) {
+         return oi.fUrF(this.__wbg_ptr, WW) >>> 0
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L221-L222` → after: `L232-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L232-L233) · [Before (L221-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L221-L222)

```diff
-       ljB(BB) {
-         return dO.EY8R(this.__wbg_ptr, BB) >>> 0
+       qPW(WW) {
+         return oi.WRX8(this.__wbg_ptr, WW) >>> 0
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L224-L225` → after: `L235-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L235-L236) · [Before (L224-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L224-L225)

```diff
-       pjB(BB) {
-         return dO.peSs(this.__wbg_ptr, BB) >>> 0
+       RPW(WW) {
+         return oi.xJHL(this.__wbg_ptr, WW) >>> 0
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L227-L228` → after: `L238-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L238-L239) · [Before (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L227-L228)

```diff
-       qjB(BB) {
-         return dO.qcFV(this.__wbg_ptr, BB) >>> 0
+       GPW(WW) {
+         return oi.hrNW(this.__wbg_ptr, WW) >>> 0
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L231` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L242) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L231)

```diff
-         return dO.G56S(this.__wbg_ptr, BB, OB, GB) >>> 0
+         return oi.u6UW(this.__wbg_ptr, WW, iW, OW) >>> 0
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L233-L234` → after: `L244-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L244-L245) · [Before (L233-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L233-L234)

```diff
-       CQB(BB) {
-         return dO.GaCE(this.__wbg_ptr, BB) >>> 0
+       JNW(WW) {
+         return oi.vFDM(this.__wbg_ptr, WW) >>> 0
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L236-L237` → after: `L247-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L247-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L247-L248) · [Before (L236-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L236-L237)

```diff
-       FQB() {
-         return dO.RSEI(this.__wbg_ptr) >>> 0
+       xNW() {
+         return oi.wraj(this.__wbg_ptr) >>> 0
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L239-L240` → after: `L250-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L250-L251) · [Before (L239-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L239-L240)

```diff
-       ZjB(BB) {
-         return dO.ao2Y(this.__wbg_ptr, BB) >>> 0
+       IPW(WW) {
+         return oi.cQYU(this.__wbg_ptr, WW) >>> 0
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L242-L243` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L253-L254) · [Before (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L242-L243)

```diff
-       NjB(BB) {
-         dO.odI9(this.__wbg_ptr, BB)
+       aPW(WW) {
+         oi.mjJ7(this.__wbg_ptr, WW)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L245-L246` → after: `L256-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L256-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L256-L257) · [Before (L245-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L245-L246)

```diff
-       RjB(BB) {
-         return 0 !== dO.AfRi(this.__wbg_ptr, EB(BB))
+       rPW(WW) {
+         return 0 !== oi.IyzK(this.__wbg_ptr, BW(WW))
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L249` → after: `L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L260) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L249)

```diff
-         return dO.eYqR(this.__wbg_ptr, BB, OB, GB, YB) >>> 0
+         return oi.ZoKn(this.__wbg_ptr, WW, iW, OW, mW) >>> 0
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L251-L252` → after: `L262-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L262-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L262-L263) · [Before (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L251-L252)

```diff
-       RDB(BB, OB, GB) {
-         const YB = WO(BB, dO.wAMH, dO.M7qP),
+       SmW(WW, iW, OW) {
+         const mW = Si(WW, oi.OLp4, oi.e1t2),
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L254` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L265) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L254)

```diff
-           QB = qO(OB, dO.wAMH),
+           NW = ki(iW, oi.OLp4),
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L256` → after: `L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L267) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L256)

```diff
-           jB = NO(GB, dO.wAMH),
+           LW = Mi(OW, oi.OLp4),
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L258` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L269) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L258)

```diff
-         return 0 !== dO.rXqZ(this.__wbg_ptr, YB, DB, QB, oB, jB, yB)
+         return 0 !== oi.unRD(this.__wbg_ptr, mW, EW, NW, PW, LW, cW)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L260-L261` → after: `L271-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L271-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L271-L272) · [Before (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L260-L261)

```diff
-       WjB(BB) {
-         dO.qCd2(this.__wbg_ptr, BB)
+       zPW(WW) {
+         oi.jI2e(this.__wbg_ptr, WW)
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L263-L264` → after: `L274-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L274-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L274-L275) · [Before (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L263-L264)

```diff
-       AjB(BB, OB) {
-         return 0 !== dO.FuTN(this.__wbg_ptr, BB, OB)
+       FPW(WW, iW) {
+         return 0 !== oi.T8qh(this.__wbg_ptr, WW, iW)
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L266-L267` → after: `L277-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L277-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L277-L278) · [Before (L266-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L266-L267)

```diff
-       VjB(BB) {
-         return dO.KLEI(this.__wbg_ptr, BB) >>> 0
+       QPW(WW) {
+         return oi.aZJe(this.__wbg_ptr, WW) >>> 0
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L270` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L281) · [Before (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L270)

```diff
-         dO.uoNy(this.__wbg_ptr, BB, OB)
+         oi.r2PJ(this.__wbg_ptr, WW, iW)
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L272-L273` → after: `L283-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L283-L284) · [Before (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L272-L273)

```diff
-       soB(BB) {
-         dO.kjOv(this.__wbg_ptr, EB(BB))
+       JPW(WW) {
+         oi.C5GS(this.__wbg_ptr, BW(WW))
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L275-L276` → after: `L286-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L286-L287) · [Before (L275-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L275-L276)

```diff
-       SjB(BB) {
-         dO.CoTK(this.__wbg_ptr, BB)
+       WLW(WW) {
+         oi.FJZ4(this.__wbg_ptr, WW)
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L278-L279` → after: `L289-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L289-L290) · [Before (L278-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L278-L279)

```diff
-       cQB(BB, OB, GB) {
-         return dO.Qx16(this.__wbg_ptr, BB, OB, GB) >>> 0
+       MNW(WW, iW, OW) {
+         return oi.Vfaw(this.__wbg_ptr, WW, iW, OW) >>> 0
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L281-L282` → after: `L292-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L292-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L292-L293) · [Before (L281-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L281-L282)

```diff
-       HQB(BB) {
-         return dO.SpMf(this.__wbg_ptr, BB) >>> 0
+       hNW(WW) {
+         return oi.lNfo(this.__wbg_ptr, WW) >>> 0
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L284-L285` → after: `L295-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L295-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L295-L296) · [Before (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L284-L285)

```diff
-       njB(BB) {
-         dO.Bedz(this.__wbg_ptr, BB)
+       iLW(WW) {
+         oi.ijgS(this.__wbg_ptr, WW)
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L287` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L298) · [Before (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L287)

```diff
-       UjB(BB) {
+       amW(WW) {
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L290` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L301) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L290)

```diff
-         dO.j3QC(this.__wbg_ptr, OB)
+         oi.IE1t(this.__wbg_ptr, iW)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L292-L293` → after: `L303-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L303-L304) · [Before (L292-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L292-L293)

```diff
-       uDB(BB, OB, GB, YB, DB, QB) {
-         var oB = lO(BB) ? 0 : ZO(BB, dO.wAMH),
+       umW(WW, iW, OW, mW, EW, NW) {
+         var PW = ji(WW) ? 0 : si(WW, oi.OLp4),
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L295` → after: `L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L306) · [Before (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L295)

```diff
-         const yB = ZO(OB, dO.wAMH),
+         const cW = si(iW, oi.OLp4),
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L297` → after: `L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L308) · [Before (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L297)

```diff
-           MB = RO(GB, dO.wAMH),
+           tW = Ki(OW, oi.OLp4),
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L299` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L310) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L299)

```diff
-           zB = qO(YB, dO.wAMH),
+           xW = ki(mW, oi.OLp4),
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L301` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L312) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L301)

```diff
-         return 0 !== dO.i861(this.__wbg_ptr, oB, jB, yB, JB, MB, PB, zB, lB, DB, QB)
+         return 0 !== oi.bG1c(this.__wbg_ptr, PW, LW, cW, wW, tW, ZW, xW, lW, EW, NW)
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L303-L304` → after: `L314-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L314-L315) · [Before (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L303-L304)

```diff
-       fjB(BB, OB, GB, YB, DB) {
-         var QB = lO(DB) ? 0 : ZO(DB, dO.wAMH),
+       OLW(WW, iW, OW, mW, EW) {
+         var NW = ji(EW) ? 0 : si(EW, oi.OLp4),
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L306` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L317) · [Before (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L306)

```diff
-         dO.Bnyf(this.__wbg_ptr, BB, OB, GB, YB, QB, oB)
+         oi.nYF0(this.__wbg_ptr, WW, iW, OW, mW, NW, PW)
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L308-L309` → after: `L319-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L319-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L319-L320) · [Before (L308-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L308-L309)

```diff
-       kjB(BB, OB, GB, YB) {
-         const DB = RO(BB, dO.wAMH),
+       mLW(WW, iW, OW, mW) {
+         const EW = Ki(WW, oi.OLp4),
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L311` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L322) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L311)

```diff
-           oB = qO(OB, dO.wAMH),
+           PW = ki(iW, oi.OLp4),
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L313` → after: `L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L324) · [Before (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L313)

```diff
-           yB = RO(GB, dO.wAMH),
+           cW = Ki(OW, oi.OLp4),
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L315` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L326) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L315)

```diff
-         return 0 !== dO.AGlz(this.__wbg_ptr, DB, QB, oB, jB, yB, JB, lO(YB) ? 0 : EB(YB))
+         return 0 !== oi.sCaM(this.__wbg_ptr, EW, NW, PW, LW, cW, wW, ji(mW) ? 0 : BW(mW))
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L317-L318` → after: `L328-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L328-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L328-L329) · [Before (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L317-L318)

```diff
-       djB(BB) {
-         const OB = WO(BB, dO.wAMH, dO.M7qP),
+       ELW(WW) {
+         const iW = Si(WW, oi.OLp4, oi.e1t2),
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L320` → after: `L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L331) · [Before (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L320)

```diff
-         return 0 !== dO.W5Eh(this.__wbg_ptr, OB, GB)
+         return 0 !== oi.OAtz(this.__wbg_ptr, iW, OW)
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L322-L323` → after: `L333-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L333-L334) · [Before (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L322-L323)

```diff
-       KjB(BB) {
-         return dO.uXfj(this.__wbg_ptr, BB) >>> 0
+       NLW(WW) {
+         return oi.UZ1F(this.__wbg_ptr, WW) >>> 0
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L325-L326` → after: `L336-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L336-L337) · [Before (L325-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L325-L326)

```diff
-       SDB() {
-         return dO.ZD9Q(this.__wbg_ptr) >>> 0
+       hmW() {
+         return oi.YdAu(this.__wbg_ptr) >>> 0
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L328-L329` → after: `L339-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L339-L340) · [Before (L328-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L328-L329)

```diff
-       ujB() {
-         const BB = dO.Bict(this.__wbg_ptr);
+       PLW() {
+         const WW = oi.qEWD(this.__wbg_ptr);
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L331` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L342) · [Before (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L331)

```diff
-         return dO.RYlI(BB[0], 4 * BB[1], 4), OB
+         return oi.fuyY(WW[0], 4 * WW[1], 4), iW
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L333-L334` → after: `L344-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L344-L345) · [Before (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L333-L334)

```diff
-       mjB() {
-         const BB = dO.SuoK(this.__wbg_ptr);
+       LLW() {
+         const WW = oi.xmdi(this.__wbg_ptr);
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L338` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L349) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L338)

```diff
-         const OB = dO.sUyq(this.__wbg_ptr, BB);
+         const iW = oi.CLIh(this.__wbg_ptr, WW);
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L340` → after: `L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L351) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L340)

```diff
-         return dO.RYlI(OB[0], 8 * OB[1], 8), GB
+         return oi.fuyY(iW[0], 8 * iW[1], 8), OW
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L342-L343` → after: `L353-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L353-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L353-L354) · [Before (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L342-L343)

```diff
-       IjB() {
-         const BB = dO.rw3M(this.__wbg_ptr);
+       cLW() {
+         const WW = oi.iNEA(this.__wbg_ptr);
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L345` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L356) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L345)

```diff
-         return dO.RYlI(BB[0], 4 * BB[1], 4), OB
+         return oi.fuyY(WW[0], 4 * WW[1], 4), iW
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L347-L348` → after: `L358-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L358-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L358-L359) · [Before (L347-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L347-L348)

```diff
-       FjB(BB, OB, GB, YB, DB) {
-         return dO.tqMD(this.__wbg_ptr, BB, OB, GB, YB, DB) >>> 0
+       wLW(WW, iW, OW, mW, EW) {
+         return oi.OaSg(this.__wbg_ptr, WW, iW, OW, mW, EW) >>> 0
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L350-L351` → after: `L361-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L361-L362) · [Before (L350-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L350-L351)

```diff
-       ijB() {
-         const BB = dO.SCNd(this.__wbg_ptr);
+       tLW() {
+         const WW = oi.bhGY(this.__wbg_ptr);
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L353` → after: `L364-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L364-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L364-L369) · [Before (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L353)

```diff
-         return dO.RYlI(BB[0], 4 * BB[1], 4), OB
+         return oi.fuyY(WW[0], 4 * WW[1], 4), iW
+       }
+       TPW(WW, iW) {
+         const OW = ki(WW, oi.OLp4),
+           mW = di;
+         oi.UPT8(this.__wbg_ptr, OW, mW, iW)
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L355-L356` → after: `L371-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L371-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L371-L372) · [Before (L355-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L355-L356)

```diff
-       LjB() {
-         return dO.DWUl(this.__wbg_ptr) >>> 0
+       ZLW() {
+         return oi.tey6(this.__wbg_ptr) >>> 0
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L358-L359` → after: `L374-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L374-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L374-L375) · [Before (L358-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L358-L359)

```diff
-       gjB() {
-         return dO.xH3K(this.__wbg_ptr) >>> 0
+       xLW() {
+         return oi.BVzw(this.__wbg_ptr) >>> 0
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L370` → after: `L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L386) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L370)

```diff
-         dO.Vhnq(BB, 0)
+         oi.lKx5(WW, 0)
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L374` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L390) · [Before (L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L374)

```diff
-         return 0 !== dO.LAlq(this.__wbg_ptr, BB.__wbg_ptr)
+         return 0 !== oi.OXJq(this.__wbg_ptr, WW.__wbg_ptr)
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L377` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L393) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L377)

```diff
-         return 0 !== dO.HRo1(this.__wbg_ptr)
+         return 0 !== oi.cuZ8(this.__wbg_ptr)
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L380` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L396) · [Before (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L380)

```diff
-         const OB = dO.fmN0(this.__wbg_ptr, BB);
+         const iW = oi.rhjw(this.__wbg_ptr, WW);
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L382` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L398) · [Before (L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L382)

```diff
-         return dO.RYlI(OB[0], 1 * OB[1], 1), GB
+         return oi.fuyY(iW[0], 1 * iW[1], 1), OW
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L385` → after: `L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L401) · [Before (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L385)

```diff
-         dO.Nlxt(this.__wbg_ptr)
+         oi.L3wt(this.__wbg_ptr)
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L387-L388` → after: `L403-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L403-L404) · [Before (L387-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L387-L388)

```diff
-       rjB() {
-         return dO.wkF0(this.__wbg_ptr) >>> 0
+       WEW() {
+         return oi.n02j(this.__wbg_ptr) >>> 0
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L390-L391` → after: `L406-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L406-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L406-L407) · [Before (L390-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L390-L391)

```diff
-       XjB() {
-         return dO.uZW5(this.__wbg_ptr) >>> 0
+       iEW() {
+         return oi.tRQC(this.__wbg_ptr) >>> 0
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L394` → after: `L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L410) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L394)

```diff
-         return dO.ajHX(this.__wbg_ptr, BB) >>> 0
+         return oi.D8ms(this.__wbg_ptr, WW) >>> 0
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L396-L397` → after: `L412-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L412-L413) · [Before (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L396-L397)

```diff
-       EjB(BB, OB, GB, YB) {
-         const DB = ZO(YB, dO.wAMH),
+       gmW(WW, iW, OW, mW) {
+         const EW = si(mW, oi.OLp4),
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L399` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L415) · [Before (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L399)

```diff
-         return dO.Wy0P(this.__wbg_ptr, BB, OB, GB, DB, QB)
+         return oi.cTET(this.__wbg_ptr, WW, iW, OW, EW, NW)
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L401-L402` → after: `L417-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L417-L418) · [Before (L401-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L401-L402)

```diff
-       hjB() {
-         return 0 !== dO.nicl(this.__wbg_ptr)
+       ImW() {
+         return 0 !== oi.m2zc(this.__wbg_ptr)
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L404-L405` → after: `L420-L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L420-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L420-L421) · [Before (L404-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L404-L405)

```diff
-       ajB(BB, OB) {
-         const GB = ZO(OB, dO.wAMH),
+       DmW(WW, iW) {
+         const OW = si(iW, oi.OLp4),
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L407` → after: `L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L423) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L407)

```diff
-         dO.eIki(this.__wbg_ptr, BB, GB, YB)
+         oi.r5Dg(this.__wbg_ptr, WW, OW, mW)
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L410` → after: `L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L426) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L410)

```diff
-         const BB = dO.xGNZ();
+         const WW = oi.yW90();
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L414` → after: `L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L430) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L414)

```diff
-         return 0 !== dO.hMuz(this.__wbg_ptr, BB, OB, GB, YB)
+         return 0 !== oi.qx7u(this.__wbg_ptr, WW, iW, OW, mW)
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L417` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L433) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L417)

```diff
-         const OB = dO.cmrm(this.__wbg_ptr, BB);
+         const iW = oi.thPt(this.__wbg_ptr, WW);
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L419` → after: `L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L435) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L419)

```diff
-         return dO.RYlI(OB[0], 8 * OB[1], 8), GB
+         return oi.fuyY(iW[0], 8 * iW[1], 8), OW
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L421-L422` → after: `L437-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L437-L438) · [Before (L421-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L421-L422)

```diff
-       wjB() {
-         const BB = dO.jngP(this.__wbg_ptr);
+       QmW() {
+         const WW = oi.gwnU(this.__wbg_ptr);
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L424` → after: `L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L440) · [Before (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L424)

```diff
-         return dO.RYlI(BB[0], 4 * BB[1], 4), OB
+         return oi.fuyY(WW[0], 4 * WW[1], 4), iW
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L427` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L443) · [Before (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L427)

```diff
-         return dO.Ttm8(this.__wbg_ptr, BB) >>> 0
+         return oi.h0yk(this.__wbg_ptr, WW) >>> 0
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L430` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L446) · [Before (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L430)

```diff
-         dO.fkZy(this.__wbg_ptr, BB, OB, GB)
+         oi.cBPY(this.__wbg_ptr, WW, iW, OW)
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L432-L433` → after: `L448-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L448-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L448-L449) · [Before (L432-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L432-L433)

```diff
-       ejB(BB) {
-         const OB = ZO(BB, dO.wAMH),
+       zmW(WW) {
+         const iW = si(WW, oi.OLp4),
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L435` → after: `L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L451) · [Before (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L435)

```diff
-         return 0 !== dO.edAB(this.__wbg_ptr, OB, GB)
+         return 0 !== oi.Jbke(this.__wbg_ptr, iW, OW)
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L437-L438` → after: `L453-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L453-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L453-L454) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L437-L438)

```diff
-       TjB(BB, OB, GB, YB, DB, QB) {
-         const oB = NO(GB, dO.wAMH),
+       CmW(WW, iW, OW, mW, EW, NW) {
+         const PW = Mi(OW, oi.OLp4),
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L440` → after: `L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L456) · [Before (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L440)

```diff
-           yB = WO(YB, dO.wAMH, dO.M7qP),
+           cW = Si(mW, oi.OLp4, oi.e1t2),
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L442` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L458) · [Before (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L442)

```diff
-           MB = WO(DB, dO.wAMH, dO.M7qP),
+           tW = Si(EW, oi.OLp4, oi.e1t2),
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L444` → after: `L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L460) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L444)

```diff
-           zB = NO(QB, dO.wAMH),
+           xW = Mi(NW, oi.OLp4),
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L446` → after: `L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L462) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L446)

```diff
-         dO.vfk9(this.__wbg_ptr, BB, OB, oB, jB, yB, JB, MB, PB, zB, lB)
+         oi.stnL(this.__wbg_ptr, WW, iW, PW, LW, cW, wW, tW, ZW, xW, lW)
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L448-L449` → after: `L464-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L464-L465) · [Before (L448-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L448-L449)

```diff
-       CjB(BB, OB, GB, YB, DB) {
-         const QB = WO(OB, dO.wAMH, dO.M7qP),
+       BmW(WW, iW, OW, mW, EW) {
+         const NW = Si(iW, oi.OLp4, oi.e1t2),
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L451` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L467) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L451)

```diff
-         return dO.Z0lR(this.__wbg_ptr, BB, QB, oB, GB, YB, DB) >>> 0
+         return oi.gEAB(this.__wbg_ptr, WW, NW, PW, OW, mW, EW) >>> 0
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L453-L454` → after: `L469-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L469-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L469-L470) · [Before (L453-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L453-L454)

```diff
-       HjB(BB) {
-         dO.OWKL(this.__wbg_ptr, BB)
+       rmW(WW) {
+         oi.tYES(this.__wbg_ptr, WW)
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L456-L457` → after: `L472-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L472-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L472-L473) · [Before (L456-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L456-L457)

```diff
-       vjB(BB, OB, GB, YB, DB) {
-         const QB = WO(GB, dO.wAMH, dO.M7qP),
+       VmW(WW, iW, OW, mW, EW) {
+         const NW = Si(OW, oi.OLp4, oi.e1t2),
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L459` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L475) · [Before (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L459)

```diff
-         return dO.sub4(this.__wbg_ptr, BB, OB, QB, oB, YB, DB) >>> 0
+         return oi.iUb7(this.__wbg_ptr, WW, iW, NW, PW, mW, EW) >>> 0
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L461-L462` → after: `L477-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L477-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L477-L484) · [Before (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L461-L462)

```diff
-       sjB(BB, OB, GB, YB) {
-         dO.ktDs(this.__wbg_ptr, BB, OB, GB, YB)
+       XmW(WW, iW, OW, mW) {
+         const EW = Si(iW, oi.OLp4, oi.e1t2),
+           NW = di,
+           PW = Si(OW, oi.OLp4, oi.e1t2),
+           LW = di,
+           cW = Si(mW, oi.OLp4, oi.e1t2),
+           wW = di;
+         oi.yWWA(this.__wbg_ptr, WW, EW, NW, PW, LW, cW, wW)
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L464-L465` → after: `L486-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L486-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L486-L490) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L464-L465)

```diff
-       xjB(BB, OB, GB, YB, DB) {
-         const QB = WO(GB, dO.wAMH, dO.M7qP),
+       qmW(WW, iW, OW, mW) {
+         oi.YDkm(this.__wbg_ptr, WW, iW, OW, mW)
+       }
+       pmW(WW, iW, OW, mW, EW) {
+         const NW = Si(OW, oi.OLp4, oi.e1t2),
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L467` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L492) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L467)

```diff
-           jB = WO(YB, dO.wAMH, dO.M7qP),
+           LW = Si(mW, oi.OLp4, oi.e1t2),
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L469` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L494) · [Before (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L469)

```diff
-         return dO.b0t8(this.__wbg_ptr, BB, OB, QB, oB, jB, yB, DB) >>> 0
+         return oi.L1ij(this.__wbg_ptr, WW, iW, NW, PW, LW, cW, EW) >>> 0
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L471-L472` → after: `L496-L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L496-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L496-L497) · [Before (L471-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L471-L472)

```diff
-       bjB(BB, OB, GB, YB) {
-         const DB = WO(OB, dO.wAMH, dO.M7qP),
+       fmW(WW, iW, OW, mW) {
+         const EW = Si(iW, oi.OLp4, oi.e1t2),
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L474` → after: `L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L499) · [Before (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L474)

```diff
-           oB = qO(GB, dO.wAMH),
+           PW = ki(OW, oi.OLp4),
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L476` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L501) · [Before (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L476)

```diff
-         return dO.BZVY(this.__wbg_ptr, BB, DB, QB, oB, jB, YB) >>> 0
+         return oi.ld4g(this.__wbg_ptr, WW, EW, NW, PW, LW, mW) >>> 0
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L478` → after: `L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L503) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L478)

```diff
-       UjB(BB) {
+       amW(WW) {
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L481` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L506) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L481)

```diff
-         return 0 !== dO.UbsO(this.__wbg_ptr, OB)
+         return 0 !== oi.YYo5(this.__wbg_ptr, iW)
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L483-L484` → after: `L508-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L508-L509) · [Before (L483-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L483-L484)

```diff
-       uDB(BB, OB, GB, YB, DB) {
-         var QB = lO(BB) ? 0 : ZO(BB, dO.wAMH),
+       umW(WW, iW, OW, mW, EW) {
+         var NW = ji(WW) ? 0 : si(WW, oi.OLp4),
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L486` → after: `L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L511) · [Before (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L486)

```diff
-         const jB = ZO(OB, dO.wAMH),
+         const LW = si(iW, oi.OLp4),
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L488` → after: `L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L513) · [Before (L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L488)

```diff
-           JB = RO(GB, dO.wAMH),
+           wW = Ki(OW, oi.OLp4),
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L490` → after: `L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L515) · [Before (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L490)

```diff
-           PB = qO(YB, dO.wAMH),
+           ZW = ki(mW, oi.OLp4),
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L492` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L517) · [Before (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L492)

```diff
-         return 0 !== dO.gHwW(this.__wbg_ptr, QB, oB, jB, yB, JB, MB, PB, zB, DB)
+         return 0 !== oi.f766(this.__wbg_ptr, NW, PW, LW, cW, wW, tW, ZW, xW, EW)
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L494-L495` → after: `L519-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L519-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L519-L520) · [Before (L494-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L494-L495)

```diff
-       tjB() {
-         const BB = dO.D0kz(this.__wbg_ptr);
+       FmW() {
+         const WW = oi.jnUo(this.__wbg_ptr);
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L497` → after: `L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L522) · [Before (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L497)

```diff
-         return dO.RYlI(BB[0], 4 * BB[1], 4), OB
+         return oi.fuyY(WW[0], 4 * WW[1], 4), iW
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L499-L500` → after: `L524-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L524-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L524-L525) · [Before (L499-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L499-L500)

```diff
-       ByB(BB) {
-         const OB = dO.IcCt(this.__wbg_ptr, BB);
+       GmW(WW) {
+         const iW = oi.ZtRe(this.__wbg_ptr, WW);
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L502` → after: `L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L527) · [Before (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L502)

```diff
-         return dO.RYlI(OB[0], 1 * OB[1], 1), GB
+         return oi.fuyY(iW[0], 1 * iW[1], 1), OW
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L504-L505` → after: `L529-L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L529-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L529-L530) · [Before (L504-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L504-L505)

```diff
-       OyB(BB) {
-         const OB = dO.a9km(this.__wbg_ptr, BB);
+       RmW(WW) {
+         const iW = oi.rpT4(this.__wbg_ptr, WW);
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L507` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L532) · [Before (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L507)

```diff
-         return dO.RYlI(OB[0], 4 * OB[1], 4), GB
+         return oi.fuyY(iW[0], 4 * iW[1], 4), OW
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L522` → after: `L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L547) · [Before (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L522)

```diff
-         dO.qdjZ(BB, 0)
+         oi.CUoP(WW, 0)
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L527` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L552) · [Before (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L527)

```diff
-       const GB = WO(BB, dO.wAMH, dO.M7qP),
+       const OW = Si(WW, oi.OLp4, oi.e1t2),
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L529` → after: `L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L554) · [Before (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L529)

```diff
-         DB = dO.o7kj(GB, YB, OB);
+         EW = oi.tL6K(OW, mW, iW);
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L534` → after: `L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L559) · [Before (L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L534)

```diff
-       dO.Fgle()
+       oi.iEG4()
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L538` → after: `L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L563) · [Before (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L538)

```diff
-       return dO.UGwS(BB)
+       return oi.mOL5(WW)
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L542` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L567) · [Before (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L542)

```diff
-       return dO.YaKm()
+       return oi.X3M8()
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L546` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L571) · [Before (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L546)

```diff
-       return dO.lvV3() >>> 0
+       return oi.keWe() >>> 0
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L550` → after: `L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L575) · [Before (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L550)

```diff
-       return 0 !== dO.sxnu(BB)
+       return 0 !== oi.mxVj(WW)
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L554` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L579) · [Before (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L554)

```diff
-       return 0 !== dO.uUNT(BB)
+       return 0 !== oi.hrqg(WW)
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L558` → after: `L583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L583) · [Before (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L558)

```diff
-       dO.X7qv(BB)
+       oi.SIT7(WW)
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L562` → after: `L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L587) · [Before (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L562)

```diff
-       return dO.hKCs() >>> 0
+       return oi.xfBH() >>> 0
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L566` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L591) · [Before (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L566)

```diff
-       return dO.oyve() >>> 0
+       return oi.gzeo() >>> 0
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L570` → after: `L595-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L595-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L595-L599) · [Before (L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L570)

```diff
-       return 0 !== dO.dSwV()
+       return 0 !== oi.NBBh()
+     }
+ 
+     function kW(WW) {
+       oi.Dw1v(ji(WW) ? 0 : BW(WW))
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L574` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L603) · [Before (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L574)

```diff
-       return AO(dO.tZXQ(EB(BB), OB, EB(GB), YB, DB, QB, oB, lO(jB) ? 16777215 : jB ? 1 : 0, yB, lO(JB) ? Number.MAX_SAFE_INTEGER : JB >>> 0))
+       return Yi(oi.Fxee(BW(WW), iW, BW(OW), mW, EW, NW, PW, ji(LW) ? 16777215 : LW ? 1 : 0, cW, ji(wW) ? Number.MAX_SAFE_INTEGER : wW >>> 0))
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L578` → after: `L607-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L607-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L607-L611) · [Before (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L578)

```diff
-       return dO.kPbq() >>> 0
+       return oi.hrYU() >>> 0
+     }
+ 
+     function KW(WW, iW) {
+       oi.x0bA(WW, BW(iW))
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L582` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L615) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L582)

```diff
-       dO.OywN(BB, EB(OB))
+       oi.HIVS(WW, BW(iW))
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L586` → after: `L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L619) · [Before (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L586)

```diff
-       dO.UNYB(BB, EB(OB))
+       oi.xSQS(WW, BW(iW))
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L590` → after: `L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L623) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L590)

```diff
-       dO.hLMK(BB)
+       oi.xJ2Q(WW)
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L594` → after: `L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L627) · [Before (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L594)

```diff
-       dO.mfnM(BB)
+       oi.CAQS(WW)
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L598` → after: `L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L631) · [Before (L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L598)

```diff
-       const OB = ZO(BB, dO.wAMH),
+       const iW = si(WW, oi.OLp4),
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L600` → after: `L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L633) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L600)

```diff
-       return 0 !== dO.eCz2(OB, GB)
+       return 0 !== oi.RNrN(iW, OW)
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L604` → after: `L637-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L637-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L637-L641) · [Before (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L604)

```diff
-       var OB = lO(BB) ? 0 : ZO(BB, dO.wAMH),
+       oi.KXeS(WW)
+     }
+ 
+     function HW(WW) {
+       var iW = ji(WW) ? 0 : si(WW, oi.OLp4),
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L606` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L643) · [Before (L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L606)

```diff
-       const YB = dO.nVAW(OB, GB);
+       const mW = oi.CTBF(iW, OW);
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L608` → after: `L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L645) · [Before (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L608)

```diff
-       return 0 !== YB[0] && (DB = bB(YB[0], YB[1]), dO.RYlI(YB[0], 4 * YB[1], 4)), DB
+       return 0 !== mW[0] && (EW = rW(mW[0], mW[1]), oi.fuyY(mW[0], 4 * mW[1], 4)), EW
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L612` → after: `L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L649) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L612)

```diff
-       const BB = dO.jx4a();
+       const WW = oi.Lo4W();
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L614` → after: `L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L651) · [Before (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L614)

```diff
-       return 0 !== BB[0] && (OB = YO(BB[0], BB[1]), dO.RYlI(BB[0], 1 * BB[1], 1)), OB
+       return 0 !== WW[0] && (iW = Pi(WW[0], WW[1]), oi.fuyY(WW[0], 1 * WW[1], 1)), iW
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L618` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L655) · [Before (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L618)

```diff
-       const BB = dO.fZdJ();
+       const WW = oi.ivDn();
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L620` → after: `L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L657) · [Before (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L620)

```diff
-       return 0 !== BB[0] && (OB = YO(BB[0], BB[1]), dO.RYlI(BB[0], 1 * BB[1], 1)), OB
+       return 0 !== WW[0] && (iW = Pi(WW[0], WW[1]), oi.fuyY(WW[0], 1 * WW[1], 1)), iW
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L624` → after: `L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L661) · [Before (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L624)

```diff
-       const GB = dO.KcOn(BB, OB);
+       const OW = oi.N1vn(WW, iW);
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L626` → after: `L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L663) · [Before (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L626)

```diff
-       return 0 !== GB[0] && (YB = YO(GB[0], GB[1]), dO.RYlI(GB[0], 1 * GB[1], 1)), YB
+       return 0 !== OW[0] && (mW = Pi(OW[0], OW[1]), oi.fuyY(OW[0], 1 * OW[1], 1)), mW
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L632` → after: `L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L669) · [Before (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L632)

```diff
-         const GB = dO.h4nZ();
+         const OW = oi.LSHT();
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L635` → after: `L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L672) · [Before (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L635)

```diff
-         dO.RYlI(BB, OB, 1)
+         oi.fuyY(WW, iW, 1)
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L640` → after: `L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L677) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L640)

```diff
-       dO.qfMf(EB(BB))
+       oi.TjZM(BW(WW))
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L646` → after: `L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L683) · [Before (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L646)

```diff
-         i53q: function(BB, OB) {
+         ufhy: function(WW, iW) {
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L649` → after: `L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L686) · [Before (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L649)

```diff
-         E7OG: function(BB) {
+         amsI: function(WW) {
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L651` → after: `L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L688) · [Before (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L651)

```diff
-             GB = "boolean" === typeof OB ? OB : void 0;
+             OW = "boolean" === typeof iW ? iW : void 0;
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L654-L655` → after: `L691-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L691-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L691-L692) · [Before (L654-L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L654-L655)

```diff
-         iIbM: function(BB, OB) {
-           const GB = WO(aB(JO(OB)), dO.wAMH, dO.M7qP),
+         ybQM: function(WW, iW) {
+           const OW = Si(GW(xi(iW)), oi.OLp4, oi.e1t2),
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L659` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L696) · [Before (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L659)

```diff
-         S1Qr: function(BB) {
+         sJ3d: function(WW) {
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L662` → after: `L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L699) · [Before (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L662)

```diff
-         xilL: function(BB) {
+         IQxS: function(WW) {
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L666` → after: `L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L703) · [Before (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L666)

```diff
-         Mxyy: function(BB) {
+         O2Y7: function(WW) {
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L669` → after: `L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L706) · [Before (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L669)

```diff
-         d2CN: function(BB, OB) {
+         RigN: function(WW, iW) {
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L671` → after: `L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L708) · [Before (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L671)

```diff
-             YB = "number" === typeof GB ? GB : void 0;
+             mW = "number" === typeof OW ? OW : void 0;
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L674` → after: `L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L711) · [Before (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L674)

```diff
-         gdPH: function(BB) {
+         OOYU: function(WW) {
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L677` → after: `L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L714) · [Before (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L677)

```diff
-         YECH: function(BB, OB) {
+         icG7: function(WW, iW) {
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L679-L680` → after: `L716-L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L716-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L716-L717) · [Before (L679-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L679-L680)

```diff
-             YB = "string" === typeof GB ? GB : void 0;
-           var DB = lO(YB) ? 0 : WO(YB, dO.wAMH, dO.M7qP),
+             mW = "string" === typeof OW ? OW : void 0;
+           var EW = ji(mW) ? 0 : Si(mW, oi.OLp4, oi.e1t2),
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L684` → after: `L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L721) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L684)

```diff
-         Ln1Q: function(BB, OB) {
+         AU82: function(WW, iW) {
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L687` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L724) · [Before (L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L687)

```diff
-         tAkE: function(BB) {
+         kjR8: function(WW) {
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L690` → after: `L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L727) · [Before (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L690)

```diff
-         H4UT: function(BB, OB) {
+         e1az: function(WW, iW) {
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L693` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L730) · [Before (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L693)

```diff
-         PNXh: function(BB, OB) {
+         w3Oc: function(WW, iW) {
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L696` → after: `L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L733) · [Before (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L696)

```diff
-         hfr4: function() {
+         rz7F: function() {
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L701` → after: `L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L738) · [Before (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L701)

```diff
-         kCVD: function(BB, OB, GB) {
+         B4BN: function(WW, iW, OW) {
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L704` → after: `L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L741) · [Before (L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L704)

```diff
-         qIIE: function(BB, OB, GB) {
+         ksKL: function(WW, iW, OW) {
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L707` → after: `L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L744) · [Before (L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L707)

```diff
-         YkAW: function(BB, OB, GB) {
+         jGXk: function(WW, iW, OW) {
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L710` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L747) · [Before (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L710)

```diff
-         YfeA: function(BB, OB) {
+         Z0iX: function(WW, iW) {
```

#### 224. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L713` → after: `L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L750) · [Before (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L713)

```diff
-         Eset: function(BB, OB, GB, YB) {
+         IbjS: function(WW, iW, OW, mW) {
```

#### 225. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L716` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L753) · [Before (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L716)

```diff
-         IANW: function(BB, OB, GB, YB, DB, QB) {
+         NxJf: function(WW, iW, OW, mW, EW, NW) {
```

#### 226. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L719` → after: `L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L756) · [Before (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L719)

```diff
-         RsU2: function(BB, OB, GB) {
+         beZO: function(WW, iW, OW) {
```

#### 227. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L722` → after: `L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L759) · [Before (L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L722)

```diff
-         F2Ox: function(BB, OB, GB) {
+         EKe6: function(WW, iW, OW) {
```

#### 228. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L725` → after: `L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L762) · [Before (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L725)

```diff
-         IFuV: function(BB, OB, GB) {
+         zrPw: function(WW, iW, OW) {
```

#### 229. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L728` → after: `L765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L765) · [Before (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L728)

```diff
-         ELEo: function(BB, OB, GB) {
+         OIvu: function(WW, iW, OW) {
```

#### 230. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L731` → after: `L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L768) · [Before (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L731)

```diff
-         tfID: function(BB, OB, GB) {
+         KVy8: function(WW, iW, OW) {
```

#### 231. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L734` → after: `L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L771) · [Before (L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L734)

```diff
-         fZos: function(BB, OB, GB) {
+         kyaG: function(WW, iW, OW) {
```

#### 232. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L737` → after: `L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L774) · [Before (L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L737)

```diff
-         lehA: function(BB, OB, GB) {
+         XQNj: function(WW, iW, OW) {
```

#### 233. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L740` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L777) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L740)

```diff
-         slU7: function(BB, OB, GB) {
+         ghOC: function(WW, iW, OW) {
```

#### 234. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L743` → after: `L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L780) · [Before (L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L743)

```diff
-         xppf: function(BB, OB, GB) {
+         lTwZ: function(WW, iW, OW) {
```

#### 235. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L746` → after: `L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L783) · [Before (L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L746)

```diff
-         nb3m: function(BB, OB, GB) {
+         OrO0: function(WW, iW, OW) {
```

#### 236. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L749` → after: `L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L786) · [Before (L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L749)

```diff
-         g6x0: function(BB, OB) {
+         tfiv: function(WW, iW) {
```

#### 237. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L752` → after: `L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L789) · [Before (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L752)

```diff
-         iFfq: function(BB, OB) {
+         s9cP: function(WW, iW) {
```

#### 238. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L755` → after: `L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L792) · [Before (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L755)

```diff
-         CX9V: function(BB, OB, GB) {
+         hm2K: function(WW, iW, OW) {
```

#### 239. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L758` → after: `L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L795) · [Before (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L758)

```diff
-         FTYH: function(BB, OB, GB) {
+         axR9: function(WW, iW, OW) {
```

#### 240. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L761` → after: `L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L798) · [Before (L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L761)

```diff
-         Bhse: function(BB, OB, GB, YB, DB) {
+         SEBH: function(WW, iW, OW, mW, EW) {
```

#### 241. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L764` → after: `L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L801) · [Before (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L764)

```diff
-         hVhI: function(BB, OB, GB, YB, DB) {
+         H1pM: function(WW, iW, OW, mW, EW) {
```

#### 242. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L767` → after: `L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L804) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L767)

```diff
-         iFrA: function(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB, MB) {
+         FHGY: function(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW, tW) {
```

#### 243. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L770` → after: `L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L807) · [Before (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L770)

```diff
-         tmqO: function(BB, OB, GB, YB) {
+         lfcK: function(WW, iW, OW, mW) {
```

#### 244. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L773` → after: `L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L810) · [Before (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L773)

```diff
-         NofG: function(BB, OB, GB, YB) {
+         ePWS: function(WW, iW, OW, mW) {
```

#### 245. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L776` → after: `L813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L813) · [Before (L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L776)

```diff
-         qwNf: function(BB, OB, GB, YB, DB) {
+         X7l0: function(WW, iW, OW, mW, EW) {
```

#### 246. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L779` → after: `L816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L816) · [Before (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L779)

```diff
-         HZNF: function() {
+         pxYV: function() {
```

#### 247. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L784` → after: `L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L821) · [Before (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L784)

```diff
-         m4wg: function() {
+         fu93: function() {
```

#### 248. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L789` → after: `L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L826) · [Before (L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L789)

```diff
-         iQJr: function(BB) {
+         ubYF: function(WW) {
```

#### 249. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L792` → after: `L829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L829) · [Before (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L792)

```diff
-         SwYT: function() {
+         gEzY: function() {
```

#### 250. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L797` → after: `L834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L834) · [Before (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L797)

```diff
-         EUPm: function(BB, OB, GB, YB, DB) {
+         NQt9: function(WW, iW, OW, mW, EW) {
```

#### 251. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L800` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L837) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L800)

```diff
-         w3j6: function(BB, OB, GB, YB, DB) {
+         FDeX: function(WW, iW, OW, mW, EW) {
```

#### 252. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L803` → after: `L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L840) · [Before (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L803)

```diff
-         yFXF: function(BB, OB) {
+         e1N7: function(WW, iW) {
```

#### 253. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L806` → after: `L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L843) · [Before (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L806)

```diff
-         GKy6: function(BB, OB) {
+         oXa2: function(WW, iW) {
```

#### 254. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L809` → after: `L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L846) · [Before (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L809)

```diff
-         sEbc: function(BB, OB, GB, YB, DB) {
+         Wbqm: function(WW, iW, OW, mW, EW) {
```

#### 255. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L812` → after: `L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L849) · [Before (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L812)

```diff
-         gomE: function(BB, OB) {
+         D6EE: function(WW, iW) {
```

#### 256. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L815` → after: `L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L852) · [Before (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L815)

```diff
-         OFwB: function(BB, OB) {
+         jDjH: function(WW, iW) {
```

#### 257. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L818` → after: `L855-L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L855-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L855-L858) · [Before (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L818)

```diff
-         ZiaU: function(BB, OB, GB, YB, DB) {
+         DHjW: function(WW) {
+           xi(WW).close()
+         },
+         nTU9: function(WW, iW, OW, mW, EW) {
```

#### 258. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L821` → after: `L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L861) · [Before (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L821)

```diff
-         NWfm: function(BB, OB, GB, YB, DB) {
+         TM9F: function(WW, iW, OW, mW, EW) {
```

#### 259. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L824` → after: `L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L864) · [Before (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L824)

```diff
-         BDJ5: function(BB, OB) {
+         yVSn: function(WW, iW) {
```

#### 260. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L827` → after: `L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L867) · [Before (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L827)

```diff
-         Q55h: function(BB, OB) {
+         E2uN: function(WW, iW) {
```

#### 261. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L830` → after: `L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L870) · [Before (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L830)

```diff
-         EDa5: function(BB, OB, GB, YB, DB, QB) {
+         JCaY: function(WW, iW, OW, mW, EW, NW) {
```

#### 262. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L833` → after: `L873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L873) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L833)

```diff
-         kuoj: function(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
+         Xa97: function(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
```

#### 263. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L836` → after: `L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L876) · [Before (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L836)

```diff
-         TTQB: function(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
+         WWww: function(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
```

#### 264. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L839` → after: `L879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L879) · [Before (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L839)

```diff
-         h84q: function(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB) {
+         izFN: function(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW) {
```

#### 265. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L842` → after: `L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L882) · [Before (L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L842)

```diff
-         ARUM: function(BB) {
+         jmRX: function(WW) {
```

#### 266. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L846` → after: `L886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L886) · [Before (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L846)

```diff
-         dezV: function(BB) {
+         tS7S: function(WW) {
```

#### 267. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L850` → after: `L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L890) · [Before (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L850)

```diff
-         brYr: function() {
+         yCdL: function() {
```

#### 268. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L855` → after: `L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L895) · [Before (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L855)

```diff
-         UvP6: function(BB) {
+         hGey: function(WW) {
```
