# Changed — Bundle Modifications Report (Part 050 / 099)

- **Updated at**: `2026-11-26T22:08 JST`
- **Part**: `50 / 99` (**400** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 049](part-049.md) · [Part 051 →](part-051.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/88.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/88.js` (4593 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46)

#### 4246. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35789-L35791` → after: `L35610-L35612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35610-L35612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35610-L35612) · [Before (L35789-L35791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35789-L35791)

```diff
-           [OM.f.Rotation]: null,
-           [OM.f.Position]: null,
-           [OM.f.Scale]: null
+           [cU.d.Rotation]: null,
+           [cU.d.Position]: null,
+           [cU.d.Scale]: null
```

#### 4247. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35795-L35796` → after: `L35616-L35617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35616-L35617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35616-L35617) · [Before (L35795-L35796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35795-L35796)

```diff
-           if (void 0 === SM) throw new hM.c(`bone "${MM}": "${OM}" is not supported (only rotation, position and scale)`);
-           iM[SM] = this.compileChannel(rM[OM], SM, `${MM}.${OM}`)
+           if (void 0 === yU) throw new pU.c(`bone "${UU}": "${cU}" is not supported (only rotation, position and scale)`);
+           zU[yU] = this.compileChannel(XU[cU], yU, `${UU}.${cU}`)
```

#### 4248. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35800-L35802` → after: `L35621-L35623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35621-L35623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35621-L35623) · [Before (L35800-L35802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35800-L35802)

```diff
-           rotation: iM[OM.f.Rotation],
-           position: iM[OM.f.Position],
-           scale: iM[OM.f.Scale]
+           rotation: zU[cU.d.Rotation],
+           position: zU[cU.d.Position],
+           scale: zU[cU.d.Scale]
```

#### 4249. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35809` → after: `L35630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35630) · [Before (L35809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35809)

```diff
-           dataPoints: (0, hM.j)(MM, rM, iM),
+           dataPoints: (0, pU.k)(UU, XU, zU),
```

#### 4250. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35813` → after: `L35634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35634) · [Before (L35813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35813)

```diff
-         else if ((0, hM.g)(MM) && MM.post) SM.push({
+         else if ((0, pU.i)(UU) && UU.post) yU.push({
```

#### 4251. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35815-L35816` → after: `L35636-L35637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35636-L35637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35636-L35637) · [Before (L35815-L35816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35815-L35816)

```diff
-           dataPoints: (0, hM.j)(MM, rM, iM),
-           catmullRom: (0, hM.o)(MM, iM),
+           dataPoints: (0, pU.k)(UU, XU, zU),
+           catmullRom: (0, pU.p)(UU, zU),
```

#### 4252. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35820` → after: `L35641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35641) · [Before (L35820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35820)

```diff
-           if (!(0, hM.g)(MM)) throw new hM.c(`${iM} must be a value, an array or a map of keyframes`);
+           if (!(0, pU.i)(UU)) throw new pU.c(`${zU} must be a value, an array or a map of keyframes`);
```

#### 4253. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35823` → after: `L35644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35644) · [Before (L35823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35823)

```diff
-             if (OM.length > 2048) throw new hM.c(`${iM} has ${OM.length} keyframes, over the 2048 limit`);
+             if (cU.length > 2048) throw new pU.c(`${zU} has ${cU.length} keyframes, over the 2048 limit`);
```

#### 4254. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35826` → after: `L35647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35647) · [Before (L35826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35826)

```diff
-                 aM = `${iM}@${jM}`;
+                 AU = `${zU}@${QU}`;
```

#### 4255. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35828-L35830` → after: `L35649-L35651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35649-L35651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35649-L35651) · [Before (L35828-L35830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35828-L35830)

```diff
-                 time: (0, hM.n)(jM, iM),
-                 dataPoints: (0, hM.j)(OM, rM, aM),
-                 catmullRom: !!(0, hM.g)(OM) && (0, hM.o)(OM, aM),
+                 time: (0, pU.o)(QU, zU),
+                 dataPoints: (0, pU.k)(cU, XU, AU),
+                 catmullRom: !!(0, pU.i)(cU) && (0, pU.p)(cU, AU),
```

#### 4256. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35836` → after: `L35657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35657) · [Before (L35836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35836)

```diff
-         if (0 === SM.length) throw new hM.c(`${iM} has no keyframes`);
+         if (0 === yU.length) throw new pU.c(`${zU} has no keyframes`);
```

#### 4257. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35840-L35841` → after: `L35661-L35662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35661-L35662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35661-L35662) · [Before (L35840-L35841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35840-L35841)

```diff
-           if (SM[jM].time - SM[jM - 1].time < OM.i) throw new hM.c(`${iM} has two keyframes at ${SM[jM].time}s`);
-         return (0, hM.f)(SM), {
+           if (yU[QU].time - yU[QU - 1].time < cU.i) throw new pU.c(`${zU} has two keyframes at ${yU[QU].time}s`);
+         return (0, pU.h)(yU), {
```

#### 4258. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35867` → after: `L35688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35688) · [Before (L35867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35867)

```diff
-         return null !== (iM = OM.constant) && void 0 !== iM ? iM : OM
+         return null !== (zU = cU.constant) && void 0 !== zU ? zU : cU
```

#### 4259. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35870-L35871` → after: `L35691-L35692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35691-L35692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35691-L35692) · [Before (L35870-L35871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35870-L35871)

```diff
-         if ("number" === typeof MM) return (0, JM.p)(tM(MM, rM));
-         if ("string" !== typeof MM) throw new hM.c(`${rM}: expected a number or a Molang string`);
+         if ("number" === typeof UU) return (0, aU.m)(LU(UU, XU));
+         if ("string" !== typeof UU) throw new pU.c(`${XU}: expected a number or a Molang string`);
```

#### 4260. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35873` → after: `L35694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35694) · [Before (L35873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35873)

```diff
-         if (!this.variables.reserve(MM)) throw new hM.c(`${rM}: the pack reads too many different variables`);
+         if (!this.variables.reserve(UU)) throw new pU.c(`${XU}: the pack reads too many different variables`);
```

#### 4261. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35877-L35878` → after: `L35698-L35699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35698-L35699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35698-L35699) · [Before (L35877-L35878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35877-L35878)

```diff
-         if (!iM.ok) throw new hM.c(`${rM}: ${iM.error}`);
-         return null === iM.value.constant ? iM.value : (0, JM.p)(tM(iM.value.constant, rM))
+         if (!zU.ok) throw new pU.c(`${XU}: ${zU.error}`);
+         return null === zU.value.constant ? zU.value : (0, aU.m)(LU(zU.value.constant, XU))
```

#### 4262. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35883` → after: `L35704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35704) · [Before (L35883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35883)

```diff
-         if (null === iM || iM < 0 || iM > hM.d) throw new hM.c(`${rM} must be a constant number of seconds from 0 to ${hM.d}`);
+         if (null === zU || zU < 0 || zU > pU.d) throw new pU.c(`${XU} must be a constant number of seconds from 0 to ${pU.d}`);
```

#### 4263. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35896` → after: `L35717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35717) · [Before (L35896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35896)

```diff
-       if (!Number.isFinite(MM) || Math.abs(MM) > lM) throw new hM.c(`${rM}: ${MM} is not a finite number within \xb11000000`);
+       if (!Number.isFinite(UU) || Math.abs(UU) > kU) throw new pU.c(`${XU}: ${UU} is not a finite number within \xb11000000`);
```

#### 4264. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35901-L35904` → after: `L35722-L35725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35722-L35725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35722-L35725) · [Before (L35901-L35904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35901-L35904)

```diff
-       if (void 0 === MM || !1 === MM) return OM.h.Once;
-       if (!0 === MM) return OM.h.Loop;
-       if ("hold_on_last_frame" === MM) return OM.h.Hold;
-       throw new hM.c(`loop ${JSON.stringify(MM)} is not supported (true, false or "hold_on_last_frame")`)
+       if (void 0 === UU || !1 === UU) return cU.g.Once;
+       if (!0 === UU) return cU.g.Loop;
+       if ("hold_on_last_frame" === UU) return cU.g.Hold;
+       throw new pU.c(`loop ${JSON.stringify(UU)} is not supported (true, false or "hold_on_last_frame")`)
```

#### 4265. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35918` → after: `L35739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35739) · [Before (L35918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35918)

```diff
-                 severity: OM.e.Error,
+                 severity: cU.b.Error,
```

#### 4266. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35920` → after: `L35741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35741) · [Before (L35920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35920)

```diff
-                 message: `${SM.id} is already defined by another file; the first definition is kept`
+                 message: `${yU.id} is already defined by another file; the first definition is kept`
```

#### 4267. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35932` → after: `L35753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35753) · [Before (L35932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35932)

```diff
-         return null !== (rM = null !== (iM = this.byId.get(MM)) && void 0 !== iM ? iM : this.byShortName.get(MM)) && void 0 !== rM ? rM : null
+         return null !== (XU = null !== (zU = this.byId.get(UU)) && void 0 !== zU ? zU : this.byShortName.get(UU)) && void 0 !== XU ? XU : null
```

#### 4268. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35955` → after: `L35776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35776) · [Before (L35955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35955)

```diff
-   38555: (MM, rM, iM) => {
+   38326: (UU, XU, zU) => {
```

#### 4269. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35958-L35959` → after: `L35779-L35780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35779-L35780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35779-L35780) · [Before (L35958-L35959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35958-L35959)

```diff
-       e: () => jM,
-       g: () => aM
+       f: () => QU,
+       j: () => AU
```

#### 4270. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35961` → after: `L35782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35782) · [Before (L35961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35961)

```diff
-     var OM = iM(38515);
+     var cU = zU(38292);
```

#### 4271. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35970` → after: `L35791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35791) · [Before (L35970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35970)

```diff
-         case OM.h.Once:
+         case cU.g.Once:
```

#### 4272. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35972` → after: `L35793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35793) · [Before (L35972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35972)

```diff
-         case OM.h.Hold:
+         case cU.g.Hold:
```

#### 4273. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35974` → after: `L35795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35795) · [Before (L35974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35974)

```diff
-         case OM.h.Loop: {
+         case cU.g.Loop: {
```

#### 4274. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35997` → after: `L35818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35818) · [Before (L35997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L35997)

```diff
-       if (null !== mM && Math.abs(mM.time - rM) < OM.i ? hM = mM : null !== HM && Math.abs(HM.time - rM) < OM.i ? hM = HM : null === mM || !mM.step && null !== HM ? null !== HM && null === mM && (hM = HM) : hM = mM, null !== hM) return void QM(hM, rM, SM, jM);
+       if (null !== NU && Math.abs(NU.time - XU) < cU.i ? pU = NU : null !== IU && Math.abs(IU.time - XU) < cU.i ? pU = IU : null === NU || !NU.step && null !== IU ? null !== IU && null === NU && (pU = IU) : pU = NU, null !== pU) return void DU(pU, XU, yU, QU);
```

#### 4275. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36021` → after: `L35842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35842) · [Before (L36021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36021)

```diff
-           aM = MM[0 === SM ? SM : SM - 1],
+           AU = UU[0 === yU ? yU : yU - 1],
```

#### 4276. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36039` → after: `L35860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35860) · [Before (L36039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36039)

```diff
-       return "number" === typeof MM ? MM : MM.evaluate(rM)
+       return "number" === typeof UU ? UU : UU.evaluate(XU)
```

#### 4277. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36042` → after: `L35863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35863) · [Before (L36042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36042)

```diff
-   38515: (MM, rM, iM) => {
+   38292: (UU, XU, zU) => {
```

#### 4278. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36044-L36046` → after: `L35865-L35867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35865-L35867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35865-L35867) · [Before (L36044-L36046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36044-L36046)

```diff
-       e: () => aM,
-       f: () => SM,
-       h: () => jM,
+       b: () => AU,
+       d: () => yU,
+       g: () => QU,
```

#### 4279. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36060` → after: `L35881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35881) · [Before (L36060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36060)

```diff
-   38532: (MM, rM, iM) => {
+   38308: (UU, XU, zU) => {
```

#### 4280. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36062-L36063` → after: `L35883-L35884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35883-L35884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35883-L35884) · [Before (L36062-L36063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36062-L36063)

```diff
-       c: () => SM,
-       e: () => OM,
+       b: () => yU,
+       d: () => cU,
```

#### 4281. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36080` → after: `L35901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35901) · [Before (L36080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36080)

```diff
-         rM = hM(MM.blendWeight) + (null !== (iM = null === (OM = MM.animTimeUpdate) || void 0 === OM ? void 0 : OM.cost) && void 0 !== iM ? iM : 0);
+         XU = pU(UU.blendWeight) + (null !== (zU = null === (cU = UU.animTimeUpdate) || void 0 === cU ? void 0 : cU.cost) && void 0 !== zU ? zU : 0);
```

#### 4282. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36094` → after: `L35915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35915) · [Before (L36094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36094)

```diff
-       return iM && OM > 1 ? aM + SM + (OM >= 3 ? nM : OM) * rM : jM + SM + Math.min(PM, OM) * rM
+       return zU && cU > 1 ? AU + yU + (cU >= 3 ? oU : cU) * XU : QU + yU + Math.min(FU, cU) * XU
```

#### 4283. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36125` → after: `L35946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35946) · [Before (L36125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36125)

```diff
-   38540: (MM, rM, iM) => {
+   38313: (UU, XU, zU) => {
```

#### 4284. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36127-L36129` → after: `L35948-L35950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35948-L35950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35948-L35950) · [Before (L36127-L36129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36127-L36129)

```diff
-       d: () => aM,
-       e: () => jM,
-       g: () => SM,
+       b: () => AU,
+       f: () => QU,
+       j: () => yU,
```

#### 4285. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36131` → after: `L35952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35952) · [Before (L36131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36131)

```diff
-       n: () => nM
+       o: () => oU
```

#### 4286. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36133` → after: `L35954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35954) · [Before (L36133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36133)

```diff
-     var OM = iM(38524);
+     var cU = zU(38294);
```

#### 4287. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36155` → after: `L35976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35976) · [Before (L36155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36155)

```diff
-       nM[OM.h.LifeTime] = iM, nM[OM.h.DeltaTime] = jM, nM[OM.h.GroundSpeed] = rM[SM.GroundSpeed], nM[OM.h.ModifiedMoveSpeed] = rM[SM.GroundSpeed], nM[OM.h.ModifiedDistanceMoved] = aM, nM[OM.h.VerticalSpeed] = rM[SM.VerticalSpeed], nM[OM.h.IsOnGround] = rM[SM.OnGround], nM[OM.h.Is … [truncated]
+       oU[cU.i.LifeTime] = zU, oU[cU.i.DeltaTime] = QU, oU[cU.i.GroundSpeed] = XU[yU.GroundSpeed], oU[cU.i.ModifiedMoveSpeed] = XU[yU.GroundSpeed], oU[cU.i.ModifiedDistanceMoved] = AU, oU[cU.i.VerticalSpeed] = XU[yU.VerticalSpeed], oU[cU.i.IsOnGround] = XU[yU.OnGround], oU[cU.i.Is … [truncated]
```

#### 4288. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36164` → after: `L35985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35985) · [Before (L36164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36164)

```diff
-   38090: (MM, rM, iM) => {
+   37865: (UU, XU, zU) => {
```

#### 4289. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36169` → after: `L35990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35990) · [Before (L36169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36169)

```diff
-       h: () => aM,
+       g: () => AU,
```

#### 4290. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36171` → after: `L35992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L35992) · [Before (L36171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36171)

```diff
-       j: () => LM
+       m: () => YU
```

#### 4291. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36225` → after: `L36046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36046) · [Before (L36225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36225)

```diff
-   38502: (MM, rM, iM) => {
+   38272: (UU, XU, zU) => {
```

#### 4292. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36227-L36228` → after: `L36048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36048) · [Before (L36227-L36228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36227-L36228)

```diff
-       b: () => kM,
-       c: () => DM,
+       d: () => uU,
```

#### 4293. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36233-L36234` → after: `L36052-L36055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36052-L36055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36052-L36055) · [Before (L36233-L36234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36233-L36234)

```diff
-       n: () => vM,
-       q: () => XM
+       o: () => JU,
+       p: () => KU,
+       t: () => nU,
+       u: () => xU
```

#### 4294. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36236-L36240` → after: `L36057-L36061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36057-L36061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36057-L36061) · [Before (L36236-L36240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36236-L36240)

```diff
-     var OM = iM(620),
-       SM = iM(613),
-       jM = iM(37988),
-       aM = iM(38506),
-       PM = iM(38511);
+     var cU = zU(638),
+       yU = zU(633),
+       QU = zU(37780),
+       AU = zU(38277),
+       FU = zU(38286);
```

#### 4295. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36255-L36257` → after: `L36076-L36078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36076-L36078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36076-L36078) · [Before (L36255-L36257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36255-L36257)

```diff
-       if (void 0 === MM || "add" === MM) return aM.h.Add;
-       if ("override" === MM) return aM.h.Override;
-       throw new nM(`${rM} must be "add" or "override"`)
+       if (void 0 === UU || "add" === UU) return AU.g.Add;
+       if ("override" === UU) return AU.g.Override;
+       throw new oU(`${XU} must be "add" or "override"`)
```

#### 4296. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36262` → after: `L36083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36083) · [Before (L36262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36262)

```diff
-       if (!Array.isArray(MM) || 0 === MM.length || MM.length > 128) throw new nM(`${rM} must list 1-128 bone names`);
+       if (!Array.isArray(UU) || 0 === UU.length || UU.length > 128) throw new oU(`${XU} must list 1-128 bone names`);
```

#### 4297. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36264` → after: `L36085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36085) · [Before (L36264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36264)

```diff
-         if ("string" !== typeof iM || 0 === iM.length || iM.length > 128) throw new nM(`${rM} must list bone names`);
+         if ("string" !== typeof zU || 0 === zU.length || zU.length > 128) throw new oU(`${XU} must list bone names`);
```

#### 4298. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36270` → after: `L36091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36091) · [Before (L36270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36270)

```diff
-       if ("number" !== typeof MM || !Number.isFinite(MM) || MM < iM || MM > OM) throw new nM(`${SM} must be a number from ${iM} to ${OM}`);
+       if ("number" !== typeof UU || !Number.isFinite(UU) || UU < zU || UU > cU) throw new oU(`${yU} must be a number from ${zU} to ${cU}`);
```

#### 4299. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36275` → after: `L36096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36096) · [Before (L36275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36275)

```diff
-       if (!(0, PM.g)(MM)) throw new nM(`${rM} must be an object`);
+       if (!(0, FU.i)(UU)) throw new oU(`${XU} must be an object`);
```

#### 4300. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36281` → after: `L36102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36102) · [Before (L36281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36281)

```diff
-         if (!rM.includes(OM)) throw new nM(`${iM}: unknown key "${OM}"`)
+         if (!XU.includes(cU)) throw new oU(`${zU}: unknown key "${cU}"`)
```

#### 4301. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36283-L36286` → after: `L36104-L36107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36104-L36107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36104-L36107) · [Before (L36283-L36286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36283-L36286)

```diff
-     var dM = iM(38530),
-       yM = iM(38532),
-       lM = iM(38515),
-       EM = iM(38540);
+     var tU = zU(38302),
+       gU = zU(38308),
+       kU = zU(38292),
+       GU = zU(38313);
```

#### 4302. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36296` → after: `L36117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36117) · [Before (L36296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36296)

```diff
-           severity: lM.e.Error,
+           severity: kU.b.Error,
```

#### 4303. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36301` → after: `L36122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36122) · [Before (L36301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36301)

```diff
-       if (MM.length > UM) return OM(`file is ${MM.length} characters, over the ${UM} limit`);
+       if (UU.length > BU) return cU(`file is ${UU.length} characters, over the ${BU} limit`);
```

#### 4304. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36306` → after: `L36127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36127) · [Before (L36306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36306)

```diff
-         return OM(`invalid JSON: ${jM.message}`)
+         return cU(`invalid JSON: ${QU.message}`)
```

#### 4305. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36323` → after: `L36144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36144) · [Before (L36323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36323)

```diff
-         return (0, PM.g)(rM) && "string" === typeof rM.target ? rM.target : null
+         return (0, FU.i)(XU) && "string" === typeof XU.target ? XU.target : null
```

#### 4306. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36331` → after: `L36152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36152) · [Before (L36331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36331)

```diff
-         for (const [iM, OM] of EM.e) this.inputIndexByName.set(iM, OM)
+         for (const [zU, cU] of GU.f) this.inputIndexByName.set(zU, cU)
```

#### 4307. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36335` → after: `L36156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36156) · [Before (L36335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36335)

```diff
-         if (JM(rM, ["format_version", "target", "inputs", "variables", "layers", "actions"], "the file"), rM.format_version !== aM.d) throw new nM(`format_version must be "${aM.d}"`);
+         if (aU(XU, ["format_version", "target", "inputs", "variables", "layers", "actions"], "the file"), XU.format_version !== AU.e) throw new oU(`format_version must be "${AU.e}"`);
```

#### 4308. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36347-L36348` → after: `L36168-L36169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36168-L36169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36168-L36169) · [Before (L36347-L36348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36347-L36348)

```diff
-             const iM = this.compileLayer(MM, `layers[${rM}]`);
-             if (QM.has(iM.name)) throw new nM(`two layers are named "${iM.name}"`);
+             const zU = this.compileLayer(UU, `layers[${XU}]`);
+             if (DU.has(zU.name)) throw new oU(`two layers are named "${zU.name}"`);
```

#### 4309. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36362` → after: `L36183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36183) · [Before (L36362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36362)

```diff
-         if (mM > yM.c) throw new nM(`its layers cost ${mM} to play each frame, over the ${yM.c} limit: use fewer layers or lighter clips`);
+         if (NU > gU.b) throw new oU(`its layers cost ${NU} to play each frame, over the ${gU.b} limit: use fewer layers or lighter clips`);
```

#### 4310. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36370-L36371` → after: `L36191-L36192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36191-L36192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36191-L36192) · [Before (L36370-L36371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36370-L36371)

```diff
-           const OM = `inputs.${MM}`;
-           if (!eM.test(MM) || this.inputIndexByName.has(MM)) throw new nM(`${OM}: input names must be identifiers distinct from the engine inputs`);
+           const cU = `inputs.${UU}`;
+           if (!PU.test(UU) || this.inputIndexByName.has(UU)) throw new oU(`${cU}: input names must be identifiers distinct from the engine inputs`);
```

#### 4311. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36374` → after: `L36195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36195) · [Before (L36374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36374)

```diff
-           const jM = HM(SM.rise, 0, 0, 1e3, `${OM}.rise`),
+           const QU = IU(yU.rise, 0, 0, 1e3, `${cU}.rise`),
```

#### 4312. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36377-L36382` → after: `L36198-L36203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36198-L36203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36198-L36203) · [Before (L36377-L36382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36377-L36382)

```diff
-               from: this.engineInput(SM.from, `${OM}.from`),
-               gate: void 0 === SM.gate ? -1 : this.engineInput(SM.gate, `${OM}.gate`),
-               scale: HM(SM.scale, 1, -1e6, GM, `${OM}.scale`),
-               offset: HM(SM.offset, 0, -1e6, GM, `${OM}.offset`),
-               min: HM(SM.min, -1e6, -1e6, GM, `${OM}.min`),
-               max: HM(SM.max, GM, -1e6, GM, `${OM}.max`),
+               from: this.engineInput(yU.from, `${cU}.from`),
+               gate: void 0 === yU.gate ? -1 : this.engineInput(yU.gate, `${cU}.gate`),
+               scale: IU(yU.scale, 1, -1e6, ZU, `${cU}.scale`),
+               offset: IU(yU.offset, 0, -1e6, ZU, `${cU}.offset`),
+               min: IU(yU.min, -1e6, -1e6, ZU, `${cU}.min`),
+               max: IU(yU.max, ZU, -1e6, ZU, `${cU}.max`),
```

#### 4313. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36384` → after: `L36205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36205) · [Before (L36384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36384)

```diff
-               fall: HM(SM.fall, jM, 0, 1e3, `${OM}.fall`)
+               fall: IU(yU.fall, QU, 0, 1e3, `${cU}.fall`)
```

#### 4314. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36386-L36387` → after: `L36207-L36208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36207-L36208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36207-L36208) · [Before (L36386-L36387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36386-L36387)

```diff
-           if (aM.min > aM.max) throw new nM(`${OM}: min is above max`);
-           return this.inputIndexByName.set(MM, EM.g.Count + iM), aM
+           if (AU.min > AU.max) throw new oU(`${cU}: min is above max`);
+           return this.inputIndexByName.set(UU, GU.j.Count + zU), AU
```

#### 4315. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36398` → after: `L36219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36219) · [Before (L36398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36398)

```diff
-           if (!eM.test(aM)) throw new nM(`variables.${aM}: variable names must be identifiers`);
+           if (!PU.test(AU)) throw new oU(`variables.${AU}: variable names must be identifiers`);
```

#### 4316. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36400` → after: `L36221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36221) · [Before (L36400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36400)

```diff
-           if (jM.has(MM)) throw new nM(`variables.${aM}: another variable has this name in a different case`);
+           if (QU.has(UU)) throw new oU(`variables.${AU}: another variable has this name in a different case`);
```

#### 4317. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36406` → after: `L36227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36227) · [Before (L36406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36406)

```diff
-               value: HM(iM, 0, -1e6, GM, `variables.${aM}`)
+               value: IU(zU, 0, -1e6, ZU, `variables.${AU}`)
```

#### 4318. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36411` → after: `L36232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36232) · [Before (L36411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36411)

```diff
-           if (void 0 === PM) throw new nM(`variables.${aM} must be a number or name an engine input or one of the binding's inputs`);
+           if (void 0 === FU) throw new oU(`variables.${AU} must be a number or name an engine input or one of the binding's inputs`);
```

#### 4319. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36426-L36427` → after: `L36247-L36248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36247-L36248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36247-L36248) · [Before (L36426-L36427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36426-L36427)

```diff
-         if ("string" !== typeof OM || !eM.test(OM)) throw new nM(`${rM}.name must be an identifier`);
-         rM = `layer "${OM}"`;
+         if ("string" !== typeof cU || !PU.test(cU)) throw new oU(`${XU}.name must be an identifier`);
+         XU = `layer "${cU}"`;
```

#### 4320. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36432-L36433` → after: `L36253-L36254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36253-L36254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36253-L36254) · [Before (L36432-L36433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36432-L36433)

```diff
-           if (CM.some((MM => void 0 !== iM[MM]))) throw new nM(`${rM}: use either "states" or a single "clip"/"blend", not both`);
-           this.compileStates(hM(iM.states, `${rM}.states`), rM, SM), jM = null !== (PM = SM.get(aM.e)) && void 0 !== PM ? PM : null, SM.delete(aM.e)
+           if (RU.some((UU => void 0 !== zU[UU]))) throw new oU(`${XU}: use either "states" or a single "clip"/"blend", not both`);
+           this.compileStates(pU(zU.states, `${XU}.states`), XU, yU), QU = null !== (FU = yU.get(AU.f)) && void 0 !== FU ? FU : null, yU.delete(AU.f)
```

#### 4321. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36440-L36443` → after: `L36261-L36264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36261-L36264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36261-L36264) · [Before (L36440-L36443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36440-L36443)

```diff
-           mode: LM(iM.mode, `${rM}.mode`),
-           bones: mM(iM.bones, `${rM}.bones`),
-           weight: void 0 === iM.weight ? QM(1) : this.valueSource(iM.weight, `${rM}.weight`),
-           transitionSeconds: HM(iM.transition, .2, 0, 10, `${rM}.transition`),
+           mode: YU(zU.mode, `${XU}.mode`),
+           bones: NU(zU.bones, `${XU}.bones`),
+           weight: void 0 === zU.weight ? DU(1) : this.valueSource(zU.weight, `${XU}.weight`),
+           transitionSeconds: IU(zU.transition, .2, 0, 10, `${XU}.transition`),
```

#### 4322. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36450` → after: `L36271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36271) · [Before (L36450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36450)

```diff
-         if (0 === OM.length || OM.length > 64) throw new nM(`${rM}.states must list 1-64 states`);
+         if (0 === cU.length || cU.length > 64) throw new oU(`${XU}.states must list 1-64 states`);
```

#### 4323. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36452` → after: `L36273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36273) · [Before (L36452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36452)

```diff
-           if (PM !== aM.e && !this.options.stateNames.has(PM)) throw new nM(`${rM}: "${PM}" is not a state of this target`);
+           if (FU !== AU.f && !this.options.stateNames.has(FU)) throw new oU(`${XU}: "${FU}" is not a state of this target`);
```

#### 4324. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36459-L36460` → after: `L36280-L36281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36280-L36281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36280-L36281) · [Before (L36459-L36460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36459-L36460)

```diff
-               if (!Object.prototype.hasOwnProperty.call(MM, PM)) throw new nM(`${rM}: "${OM}" shares "${PM}", which the layer does not define`);
-               if (SM.has(OM)) throw new nM(`${rM}: "${OM}" shares itself through a cycle`);
+               if (!Object.prototype.hasOwnProperty.call(UU, FU)) throw new oU(`${XU}: "${cU}" shares "${FU}", which the layer does not define`);
+               if (yU.has(cU)) throw new oU(`${XU}: "${cU}" shares itself through a cycle`);
```

#### 4325. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36465` → after: `L36286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36286) · [Before (L36465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36465)

```diff
-             const QM = this.compileState(PM, OM, `${rM} state "${OM}"`);
+             const DU = this.compileState(FU, cU, `${XU} state "${cU}"`);
```

#### 4326. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36473-L36474` → after: `L36294-L36295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36294-L36295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36294-L36295) · [Before (L36473-L36474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36473-L36474)

```diff
-         const SM = void 0 === OM.rate ? QM(1) : this.valueSource(OM.rate, `${iM}.rate`);
-         if (SM.input < 0 && SM.constant < 0) throw new nM(`${iM}.rate must not be negative`);
+         const yU = void 0 === cU.rate ? DU(1) : this.valueSource(cU.rate, `${zU}.rate`);
+         if (yU.input < 0 && yU.constant < 0) throw new oU(`${zU}.rate must not be negative`);
```

#### 4327. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36479` → after: `L36300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36300) · [Before (L36479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36479)

```diff
-             if (OM > 32 || Math.abs(iM - 1 / OM) > 5e-4) throw new nM(`${rM} must divide a cycle evenly into at most 32 parts (1, 0.5, 0.333, 0.25, ...)`);
+             if (cU > 32 || Math.abs(zU - 1 / cU) > 5e-4) throw new oU(`${XU} must divide a cycle evenly into at most 32 parts (1, 0.5, 0.333, 0.25, ...)`);
```

#### 4328. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36481` → after: `L36302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36302) · [Before (L36481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36481)

```diff
-           }(OM.rest, `${iM}.rest`),
+           }(cU.rest, `${zU}.rest`),
```

#### 4329. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36483` → after: `L36304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36304) · [Before (L36483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36483)

```diff
-             if (jM > 0 && !MM.some((MM => MM.strideBlocks > 0))) throw new nM(`${iM}.rest needs a clip with a stride, as only a gait comes to rest`);
+             if (QU > 0 && !UU.some((UU => UU.strideBlocks > 0))) throw new oU(`${zU}.rest needs a clip with a stride, as only a gait comes to rest`);
```

#### 4330. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36487` → after: `L36308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36308) · [Before (L36487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36487)

```diff
-           if (void 0 !== OM.blend) throw new nM(`${iM}: use either "clip" or "blend"`);
+           if (void 0 !== cU.blend) throw new oU(`${zU}: use either "clip" or "blend"`);
```

#### 4331. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36491` → after: `L36312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36312) · [Before (L36491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36491)

```diff
-               clip: this.clip(OM.clip, `${iM}.clip`),
+               clip: this.clip(cU.clip, `${zU}.clip`),
```

#### 4332. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36493` → after: `L36314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36314) · [Before (L36493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36493)

```diff
-               strideBlocks: zM(OM.stride, `${iM}.stride`)
+               strideBlocks: EU(cU.stride, `${zU}.stride`)
```

#### 4333. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36500-L36503` → after: `L36321-L36324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36321-L36324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36321-L36324) · [Before (L36500-L36503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36500-L36503)

```diff
-         if (void 0 !== OM.stride) throw new nM(`${iM}: give each blend clip its own stride`);
-         if (void 0 === OM.blend) throw new nM(`${iM}: needs a "clip" or a "blend"`);
-         const PM = hM(OM.blend, `${iM}.blend`);
-         JM(PM, ["input", "clips"], `${iM}.blend`);
+         if (void 0 !== cU.stride) throw new oU(`${zU}: give each blend clip its own stride`);
+         if (void 0 === cU.blend) throw new oU(`${zU}: needs a "clip" or a "blend"`);
+         const FU = pU(cU.blend, `${zU}.blend`);
+         aU(FU, ["input", "clips"], `${zU}.blend`);
```

#### 4334. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36505-L36506` → after: `L36326-L36327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36326-L36327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36326-L36327) · [Before (L36505-L36506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36505-L36506)

```diff
-         if (!Array.isArray(LM) || 0 === LM.length || LM.length > 16) throw new nM(`${iM}.blend.clips must list 1-16 clips`);
-         const mM = LM.map(((MM, rM) => this.compileBlendChild(MM, `${iM}.blend.clips[${rM}]`)));
+         if (!Array.isArray(YU) || 0 === YU.length || YU.length > 16) throw new oU(`${zU}.blend.clips must list 1-16 clips`);
+         const NU = YU.map(((UU, XU) => this.compileBlendChild(UU, `${zU}.blend.clips[${XU}]`)));
```

#### 4335. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36508` → after: `L36329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36329) · [Before (L36508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36508)

```diff
-           if (mM[QM].at <= mM[QM - 1].at) throw new nM(`${iM}.blend.clips must be in increasing "at" order`);
+           if (NU[DU].at <= NU[DU - 1].at) throw new oU(`${zU}.blend.clips must be in increasing "at" order`);
```

#### 4336. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36512` → after: `L36333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36333) · [Before (L36512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36512)

```diff
-           blendInput: this.input(PM.input, `${iM}.blend.input`),
+           blendInput: this.input(FU.input, `${zU}.blend.input`),
```

#### 4337. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36523-L36524` → after: `L36344-L36345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36344-L36345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36344-L36345) · [Before (L36523-L36524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36523-L36524)

```diff
-         if (Array.isArray(MM) && (MM.length < 2 || MM.length > 3)) throw new nM(`${rM} must be [clip, at] or [clip, at, stride]`);
-         if (JM(iM, ["clip", "at", "stride"], rM), "number" !== typeof iM.at) throw new nM(`${rM}.at must be a number`);
+         if (Array.isArray(UU) && (UU.length < 2 || UU.length > 3)) throw new oU(`${XU} must be [clip, at] or [clip, at, stride]`);
+         if (aU(zU, ["clip", "at", "stride"], XU), "number" !== typeof zU.at) throw new oU(`${XU}.at must be a number`);
```

#### 4338. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36526-L36528` → after: `L36347-L36349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36347-L36349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36347-L36349) · [Before (L36526-L36528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36526-L36528)

```diff
-           clip: this.clip(iM.clip, `${rM}.clip`),
-           at: HM(iM.at, 0, -1e6, GM, `${rM}.at`),
-           strideBlocks: zM(iM.stride, `${rM}.stride`)
+           clip: this.clip(zU.clip, `${XU}.clip`),
+           at: IU(zU.at, 0, -1e6, ZU, `${XU}.at`),
+           strideBlocks: EU(zU.stride, `${XU}.stride`)
```

#### 4339. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36537-L36538` → after: `L36358-L36359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36358-L36359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36358-L36359) · [Before (L36537-L36538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36537-L36538)

```diff
-           const MM = `actions.${SM}`;
-           if (!eM.test(SM)) throw new nM(`${MM}: action names must be identifiers`);
+           const UU = `actions.${yU}`;
+           if (!PU.test(yU)) throw new oU(`${UU}: action names must be identifiers`);
```

#### 4340. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36541-L36542` → after: `L36362-L36363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36362-L36363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36362-L36363) · [Before (L36541-L36542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36541-L36542)

```diff
-           const jM = this.clip(iM.clip, `${MM}.clip`);
-           if (aM.j.has(SM) && jM.clip.loop !== lM.h.Once) throw new nM(`${MM}: the game plays this action, so its clip must end (not loop or hold on its last frame)`);
+           const QU = this.clip(zU.clip, `${UU}.clip`);
+           if (AU.i.has(yU) && QU.clip.loop !== kU.g.Once) throw new oU(`${UU}: the game plays this action, so its clip must end (not loop or hold on its last frame)`);
```

#### 4341. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36546-L36549` → after: `L36367-L36370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36367-L36370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36367-L36370) · [Before (L36546-L36549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36546-L36549)

```diff
-             mode: void 0 === iM.mode ? aM.h.Override : LM(iM.mode, `${MM}.mode`),
-             bones: mM(iM.bones, `${MM}.bones`),
-             fadeInSeconds: HM(iM.fadeIn, .1, 0, 10, `${MM}.fadeIn`),
-             fadeOutSeconds: HM(iM.fadeOut, .1, 0, 10, `${MM}.fadeOut`)
+             mode: void 0 === zU.mode ? AU.g.Override : YU(zU.mode, `${UU}.mode`),
+             bones: NU(zU.bones, `${UU}.bones`),
+             fadeInSeconds: IU(zU.fadeIn, .1, 0, 10, `${UU}.fadeIn`),
+             fadeOutSeconds: IU(zU.fadeOut, .1, 0, 10, `${UU}.fadeOut`)
```

#### 4342. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36555-L36558` → after: `L36376-L36379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36376-L36379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36376-L36379) · [Before (L36555-L36558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36555-L36558)

```diff
-         if ("string" !== typeof MM || 0 === MM.length) throw new nM(`${rM} must name a clip`);
-         const iM = (0, dM.i)(this.options.pools, MM);
-         if ("ambiguous" === iM) throw new nM(`${rM}: several clips are called "${MM}"; use the full animation name`);
-         if ("noClip" === iM) throw new nM(`${rM}: no clip named "${MM}"`);
+         if ("string" !== typeof UU || 0 === UU.length) throw new oU(`${XU} must name a clip`);
+         const zU = (0, tU.f)(this.options.pools, UU);
+         if ("ambiguous" === zU) throw new oU(`${XU}: several clips are called "${UU}"; use the full animation name`);
+         if ("noClip" === zU) throw new oU(`${XU}: no clip named "${UU}"`);
```

#### 4343. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36562-L36563` → after: `L36383-L36384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36383-L36384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36383-L36384) · [Before (L36562-L36563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36562-L36563)

```diff
-         const iM = "string" === typeof MM ? EM.e.get(MM) : void 0;
-         if (void 0 === iM) throw new nM(`${rM} must be one of ${[...EM.e.keys()].join(", ")}`);
+         const zU = "string" === typeof UU ? GU.f.get(UU) : void 0;
+         if (void 0 === zU) throw new oU(`${XU} must be one of ${[...GU.f.keys()].join(", ")}`);
```

#### 4344. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36568` → after: `L36389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36389) · [Before (L36568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36568)

```diff
-         if (void 0 === iM) throw new nM(`${rM} must name an engine input or one of the binding's inputs`);
+         if (void 0 === zU) throw new oU(`${XU} must name an engine input or one of the binding's inputs`);
```

#### 4345. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36582` → after: `L36403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36403) · [Before (L36582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36582)

```diff
-     var uM = iM(38547);
+     var CU = zU(38321);
```

#### 4346. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36589` → after: `L36410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36410) · [Before (L36589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36589)

```diff
-       ZM = new Set([...OM.m, ...SM.o, kM]),
+       fU = new Set([...cU.k, ...yU.k, uU]),
```

#### 4347. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36593-L36594` → after: `L36414-L36415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36414-L36415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36414-L36415) · [Before (L36593-L36594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36593-L36594)

```diff
-       NM = new Set(jM.e),
-       AM = new Set([...OM.p.filter((MM => !DM.has(MM))), ...NM]),
+       vU = new Set(QU.b),
+       VU = new Set([...cU.o.filter((UU => !rU.has(UU))), ...vU]),
```

#### 4348. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36602` → after: `L36423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36423) · [Before (L36602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36602)

```diff
-       return vM(MM) ? YM : ZM
+       return nU(UU) ? MU : fU
```

#### 4349. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36608` → after: `L36429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36429) · [Before (L36608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36608)

```diff
-         OM = iM ? xM : AM,
+         cU = zU ? sU : VU,
```

#### 4350. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36612` → after: `L36433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36433) · [Before (L36612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36612)

```diff
-             severity: lM.e.Error,
+             severity: kU.b.Error,
```

#### 4351. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36620-L36621` → after: `L36441-L36442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36441-L36442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36441-L36442) · [Before (L36620-L36621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36620-L36621)

```diff
-       if (!iM && (aM.length > RM || PM > pM)) return jM("animations", `${aM.length} files and ${PM} characters, over the ${RM} file or ${pM} character limit`), {
-         pool: new dM.d([]),
+       if (!zU && (AU.length > wU || FU > qU)) return QU("animations", `${AU.length} files and ${FU} characters, over the ${wU} file or ${qU} character limit`), {
+         pool: new tU.b([]),
```

#### 4352. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36640` → after: `L36461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36461) · [Before (L36640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36640)

```diff
-           void 0 !== MM && (zM.has(MM) ? jM(JM, `${MM} already has a clip file, ${zM.get(MM).name}`) : zM.set(MM, {
+           void 0 !== UU && (EU.has(UU) ? QU(aU, `${UU} already has a clip file, ${EU.get(UU).name}`) : EU.set(UU, {
```

#### 4353. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36646` → after: `L36467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36467) · [Before (L36646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36646)

```diff
-           null === MM ? jM(JM, 'has no target: set "target" to the mob or vehicle it animates') : DM.has(MM) && !iM ? jM(JM, `packs can't animate ${MM}`) : OM.has(MM) ? QM.has(MM) ? jM(JM, `${MM} already has a binding, in ${QM.get(MM).name}`) : QM.set(MM, {
+           null === UU ? QU(aU, 'has no target: set "target" to the mob or vehicle it animates') : rU.has(UU) && !zU ? QU(aU, `packs can't animate ${UU}`) : cU.has(UU) ? DU.has(UU) ? QU(aU, `${UU} already has a binding, in ${DU.get(UU).name}`) : DU.set(UU, {
```

#### 4354. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36649` → after: `L36470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36470) · [Before (L36649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36649)

```diff
-           }) : jM(JM, `${MM} isn't a mob or vehicle packs can animate`)
+           }) : QU(aU, `${UU} isn't a mob or vehicle packs can animate`)
```

#### 4355. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36658` → after: `L36479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36479) · [Before (L36658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36658)

```diff
-         HM = new dM.d(nM, (MM => mM.has(MM)));
+         IU = new tU.b(oU, (UU => NU.has(UU)));
```

#### 4356. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36663` → after: `L36484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36484) · [Before (L36663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36663)

```diff
-         pool: new dM.d([yM])
+         pool: new tU.b([gU])
```

#### 4357. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36703` → after: `L36524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36524) · [Before (L36703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36703)

```diff
-         diagnostics: [TM(SM.file, `${iM} has no built-in animation to play these clips: add a binding for it`)]
+         diagnostics: [bU(yU.file, `${zU} has no built-in animation to play these clips: add a binding for it`)]
```

#### 4358. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36705` → after: `L36526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36526) · [Before (L36705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36705)

```diff
-       const PM = bM(aM.text, `${SM.file} in the built-in ${iM} animation`, {
+       const FU = WU(AU.text, `${yU.file} in the built-in ${zU} animation`, {
```

#### 4359. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36721` → after: `L36542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36542) · [Before (L36721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36721)

```diff
-           return (0, dM.g)(rM.id)
+           return (0, tU.d)(XU.id)
```

#### 4360. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36725` → after: `L36546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36546) · [Before (L36725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36725)

```diff
-           diagnostics: [...PM.diagnostics, TM(SM.file, `none of its clips replaces one the ${iM} plays (${[...MM].join(", ")}): they play only by name`)]
+           diagnostics: [...FU.diagnostics, bU(yU.file, `none of its clips replaces one the ${zU} plays (${[...UU].join(", ")}): they play only by name`)]
```

#### 4361. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36733` → after: `L36554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36554) · [Before (L36733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36733)

```diff
-         severity: lM.e.Warning,
+         severity: kU.b.Warning,
```

#### 4362. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36739` → after: `L36560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36560) · [Before (L36739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36739)

```diff
-   38547: (MM, rM, iM) => {
+   38321: (UU, XU, zU) => {
```

#### 4363. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36741` → after: `L36562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36562) · [Before (L36741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36741)

```diff
-       b: () => SM,
+       c: () => yU,
```

#### 4364. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36743` → after: `L36564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36564) · [Before (L36743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36743)

```diff
-       i: () => jM
+       g: () => QU
```

#### 4365. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36745` → after: `L36566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36566) · [Before (L36745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36745)

```diff
-     var OM = iM(38515);
+     var cU = zU(38292);
```

#### 4366. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36750` → after: `L36571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36571) · [Before (L36750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36750)

```diff
-           return this.mask(MM.bones, `layer "${MM.name}"`)
+           return this.mask(UU.bones, `layer "${UU.name}"`)
```

#### 4367. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36753` → after: `L36574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36574) · [Before (L36753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36753)

```diff
-         for (const OM of MM.actions.values()) this.boneIndices(OM.clip.clip), iM.set(OM.name, this.mask(OM.bones, `action "${OM.name}"`));
+         for (const cU of UU.actions.values()) this.boneIndices(cU.clip.clip), zU.set(cU.name, this.mask(cU.bones, `action "${cU.name}"`));
```

#### 4368. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36768` → after: `L36589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36589) · [Before (L36768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36768)

```diff
-           this.animatesRig ||= MM.bones.some((MM => this.rig.namesBone(MM.name))), iM.length > 0 && this.warn(`${MM.id} animates bones ${this.rig.id} does not have: ${iM.map((MM=>MM.name)).join(", ")}`), this.boneIndicesByClip.set(MM, rM)
+           this.animatesRig ||= UU.bones.some((UU => this.rig.namesBone(UU.name))), zU.length > 0 && this.warn(`${UU.id} animates bones ${this.rig.id} does not have: ${zU.map((UU=>UU.name)).join(", ")}`), this.boneIndicesByClip.set(UU, XU)
```

#### 4369. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36777` → after: `L36598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36598) · [Before (L36777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36777)

```diff
-           MM < 0 ? (this.missing.add(OM), this.warn(`${rM} masks bone ${OM}, which ${this.rig.id} does not have`)) : iM[MM] = 1
+           UU < 0 ? (this.missing.add(cU), this.warn(`${XU} masks bone ${cU}, which ${this.rig.id} does not have`)) : zU[UU] = 1
```

#### 4370. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36783` → after: `L36604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36604) · [Before (L36783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36783)

```diff
-           severity: OM.e.Warning,
+           severity: cU.b.Warning,
```

#### 4371. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36816` → after: `L36637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36637) · [Before (L36816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36816)

```diff
-         for (const MM of null !== (rM = null === iM || void 0 === iM ? void 0 : iM.children) && void 0 !== rM ? rM : []) {
+         for (const UU of null !== (XU = null === zU || void 0 === zU ? void 0 : zU.children) && void 0 !== XU ? XU : []) {
```

#### 4372. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36822` → after: `L36643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36643) · [Before (L36822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36822)

```diff
-   38511: (MM, rM, iM) => {
+   38286: (UU, XU, zU) => {
```

#### 4373. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36826-L36830` → after: `L36647-L36651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36647-L36651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36647-L36651) · [Before (L36826-L36830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36826-L36830)

```diff
-       f: () => GM,
-       g: () => eM,
-       j: () => lM,
-       n: () => dM,
-       o: () => yM
+       h: () => ZU,
+       i: () => PU,
+       k: () => kU,
+       o: () => tU,
+       p: () => gU
```

#### 4374. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36832-L36833` → after: `L36653-L36654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36653-L36654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36653-L36654) · [Before (L36832-L36833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36832-L36833)

```diff
-     var OM = iM(38515),
-       SM = iM(38524);
+     var cU = zU(38292),
+       yU = zU(38294);
```

#### 4375. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36839` → after: `L36660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36660) · [Before (L36839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36839)

```diff
-       return "" === MM || "0" === MM || MM.length > SM.d ? MM : jM.test(MM) ? (-parseFloat(MM)).toString() : function(MM, rM) {
+       return "" === UU || "0" === UU || UU.length > yU.e ? UU : QU.test(UU) ? (-parseFloat(UU)).toString() : function(UU, XU) {
```

#### 4376. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36860` → after: `L36681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36681) · [Before (L36860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36860)

```diff
-         if (-1 === OM) return MM.includes("=") ? `${MM};${rM("")}` : rM(MM);
+         if (-1 === cU) return UU.includes("=") ? `${UU};${XU("")}` : XU(UU);
```

#### 4377. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36863` → after: `L36684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36684) · [Before (L36863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36863)

```diff
-         return jM.includes("=") ? `${MM};${rM("")}` : `${SM};${rM(jM)}`
+         return QU.includes("=") ? `${UU};${XU("")}` : `${yU};${XU(QU)}`
```

#### 4378. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36917` → after: `L36738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36738) · [Before (L36917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36917)

```diff
-       if (!(iM >= 0 && iM <= hM)) throw new HM(`${rM}: keyframe time "${MM}" must be a number of seconds from 0 to ${hM}`);
+       if (!(zU >= 0 && zU <= pU)) throw new IU(`${XU}: keyframe time "${UU}" must be a number of seconds from 0 to ${pU}`);
```

#### 4379. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36925` → after: `L36746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36746) · [Before (L36925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36925)

```diff
-       throw new HM(`${rM}: lerp_mode ${JSON.stringify(iM)} is not supported (linear or catmullrom)`)
+       throw new IU(`${XU}: lerp_mode ${JSON.stringify(zU)} is not supported (linear or catmullrom)`)
```

#### 4380. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36935` → after: `L36756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36756) · [Before (L36935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36935)

```diff
-         if (SM && !aM && jM.push(EM(SM, rM, iM)), 0 === jM.length) throw new HM(`${iM}: a keyframe needs "post" and optionally "pre"`);
+         if (yU && !AU && QU.push(GU(yU, XU, zU)), 0 === QU.length) throw new IU(`${zU}: a keyframe needs "post" and optionally "pre"`);
```

#### 4381. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36945` → after: `L36766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36766) · [Before (L36945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36945)

```diff
-           case OM.f.Position:
+           case cU.d.Position:
```

#### 4382. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36947` → after: `L36768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36768) · [Before (L36947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36947)

```diff
-           case OM.f.Rotation:
+           case cU.d.Rotation:
```

#### 4383. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36949` → after: `L36770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36770) · [Before (L36949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36949)

```diff
-           case OM.f.Scale:
+           case cU.d.Scale:
```

#### 4384. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36954` → after: `L36775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36775) · [Before (L36954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36954)

```diff
-           if ("number" !== typeof iM && "string" !== typeof iM) throw new HM(`${rM}: vector elements must be numbers or Molang strings`);
+           if ("number" !== typeof zU && "string" !== typeof zU) throw new IU(`${XU}: vector elements must be numbers or Molang strings`);
```

#### 4385. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36959` → after: `L36780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36780) · [Before (L36959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36959)

```diff
-         if (3 !== MM.length) throw new HM(`${rM}: vectors must have 1 or 3 elements`);
+         if (3 !== UU.length) throw new IU(`${XU}: vectors must have 1 or 3 elements`);
```

#### 4386. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36962` → after: `L36783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36783) · [Before (L36962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36962)

```diff
-       throw new HM(`${iM}: values must be numbers, Molang strings or [x, y, z]`)
+       throw new IU(`${zU}: values must be numbers, Molang strings or [x, y, z]`)
```

#### 4387. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36966` → after: `L36787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36787) · [Before (L36966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36966)

```diff
-       return "number" === typeof MM ? 0 === MM ? 0 : -MM : nM(MM)
+       return "number" === typeof UU ? 0 === UU ? 0 : -UU : oU(UU)
```

#### 4388. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36987` → after: `L36808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36808) · [Before (L36987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36987)

```diff
-   38497: (MM, rM, iM) => {
+   38266: (UU, XU, zU) => {
```

#### 4389. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36989` → after: `L36810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36810) · [Before (L36989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L36989)

```diff
-       e: () => Vr
+       d: () => TX
```

#### 4390. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37087` → after: `L36908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L36908) · [Before (L37087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37087)

```diff
-     var Kr = iM(38502);
+     var jX = zU(38272);
```

#### 4391. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37189` → after: `L37010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37010) · [Before (L37189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37189)

```diff
-       return Tr ??= (0, Kr.q)(qr, "builtIn"), Tr
+       return bX ??= (0, jX.u)(KX, "builtIn"), bX
```

#### 4392. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37192` → after: `L37013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37013) · [Before (L37192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37192)

```diff
-   38524: (MM, rM, iM) => {
+   38294: (UU, XU, zU) => {
```

#### 4393. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37266-L37268` → after: `L37087-L37089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37087-L37089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37087-L37089) · [Before (L37266-L37268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37266-L37268)

```diff
-     iM.d(rM, {
-       d: () => oM,
-       h: () => ZM,
+     zU.d(XU, {
+       e: () => iU,
+       i: () => fU,
```

#### 4394. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37270` → after: `L37091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37091) · [Before (L37270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37270)

```diff
-       p: () => NM
+       m: () => vU
```

#### 4395. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37272` → after: `L37093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37093) · [Before (L37272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37272)

```diff
-     var SM = iM(38090);
+     var yU = zU(37865);
```

#### 4396. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37299` → after: `L37120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37120) · [Before (L37299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37299)

```diff
-         in_out_quad: MM => MM < .5 ? 2 * MM * MM : (4 - 2 * MM) * MM - 1,
+         in_out_quad: UU => UU < .5 ? 2 * UU * UU : (4 - 2 * UU) * UU - 1,
```

#### 4397. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37302` → after: `L37123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37123) · [Before (L37302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37302)

```diff
-         in_out_cubic: MM => MM < .5 ? 4 * MM * MM * MM : (MM - 1) * (2 * MM - 2) * (2 * MM - 2) + 1,
+         in_out_cubic: UU => UU < .5 ? 4 * UU * UU * UU : (UU - 1) * (2 * UU - 2) * (2 * UU - 2) + 1,
```

#### 4398. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37305` → after: `L37126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37126) · [Before (L37305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37305)

```diff
-         in_out_quart: MM => MM < .5 ? 8 * MM * MM * MM * MM : 1 - 8 * (MM - 1) * (MM - 1) * (MM - 1) * (MM - 1),
+         in_out_quart: UU => UU < .5 ? 8 * UU * UU * UU * UU : 1 - 8 * (UU - 1) * (UU - 1) * (UU - 1) * (UU - 1),
```

#### 4399. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37308` → after: `L37129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37129) · [Before (L37308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37308)

```diff
-         in_out_quint: MM => MM < .5 ? 16 * MM * MM * MM * MM * MM : 1 + 16 * (MM - 1) * (MM - 1) * (MM - 1) * (MM - 1) * (MM - 1),
+         in_out_quint: UU => UU < .5 ? 16 * UU * UU * UU * UU * UU : 1 + 16 * (UU - 1) * (UU - 1) * (UU - 1) * (UU - 1) * (UU - 1),
```

#### 4400. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37311` → after: `L37132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37132) · [Before (L37311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37311)

```diff
-         in_out_expo: MM => 0 === MM || 1 === MM ? MM : 2 * MM < 1 ? .5 * 2 ** (10 * (2 * MM - 1)) : .5 * (2 - 2 ** (-10 * (2 * MM - 1))),
+         in_out_expo: UU => 0 === UU || 1 === UU ? UU : 2 * UU < 1 ? .5 * 2 ** (10 * (2 * UU - 1)) : .5 * (2 - 2 ** (-10 * (2 * UU - 1))),
```

#### 4401. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37328-L37329` → after: `L37149-L37150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37149-L37150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37149-L37150) · [Before (L37328-L37329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37328-L37329)

```diff
-         in_elastic: MM => 0 === MM || 1 === MM ? MM : -(2 ** (10 * (MM - 1))) * nM(MM - 1, .7),
-         out_elastic: MM => 0 === MM || 1 === MM ? MM : 2 ** (2 * MM * -10) * nM(2 * MM, .7) + 1,
+         in_elastic: UU => 0 === UU || 1 === UU ? UU : -(2 ** (10 * (UU - 1))) * oU(UU - 1, .7),
+         out_elastic: UU => 0 === UU || 1 === UU ? UU : 2 ** (2 * UU * -10) * oU(2 * UU, .7) + 1,
```

#### 4402. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37351` → after: `L37172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37172) · [Before (L37351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37351)

```diff
-         apply: rM => MM(rM * SM.d)
+         apply: XU => UU(XU * yU.b)
```

#### 4403. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37359` → after: `L37180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37180) · [Before (L37359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37359)

```diff
-         apply: rM => MM(rM) / SM.d
+         apply: XU => UU(XU) / yU.b
```

#### 4404. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37368` → after: `L37189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37189) · [Before (L37368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37368)

```diff
-         ["atan2", mM(((MM, rM) => Math.atan2(MM, rM) / SM.d))],
+         ["atan2", NU(((UU, XU) => Math.atan2(UU, XU) / yU.b))],
```

#### 4405. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37371-L37372` → after: `L37192-L37193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37192-L37193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37192-L37193) · [Before (L37371-L37372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37371-L37372)

```diff
-           const OM = MM > iM ? iM : MM;
-           return OM < rM ? rM : OM
+           const cU = UU > zU ? zU : UU;
+           return cU < XU ? XU : cU
```

#### 4406. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37401` → after: `L37222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37222) · [Before (L37401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37401)

```diff
-           return [`ease_${rM}`, rM.includes("elastic") || rM.includes("bounce") ? JM(OM, 2) : OM]
+           return [`ease_${XU}`, XU.includes("elastic") || XU.includes("bounce") ? aU(cU, 2) : cU]
```

#### 4407. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37496` → after: `L37317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37317) · [Before (L37496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37496)

```diff
-             if (OM < MM.length && uM.test(MM[OM])) throw new WM(`malformed number '${MM.slice(iM,OM+1)}'`, iM);
+             if (cU < UU.length && CU.test(UU[cU])) throw new OU(`malformed number '${UU.slice(zU,cU+1)}'`, zU);
```

#### 4408. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37514` → after: `L37335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37335) · [Before (L37514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37514)

```diff
-           if (void 0 === aM) throw new WM(`unexpected character '${OM}'`, iM);
+           if (void 0 === AU) throw new OU(`unexpected character '${cU}'`, zU);
```

#### 4409. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37529` → after: `L37350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37350) · [Before (L37529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37529)

```diff
-       kM = MM => MM.kind === pM.End ? "end of expression" : `'${MM.text}'`;
+       uU = UU => UU.kind === qU.End ? "end of expression" : `'${UU.text}'`;
```

#### 4410. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37579` → after: `L37400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37400) · [Before (L37579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37579)

```diff
-         if (this.depth--, null !== MM.constant) return lM(MM.constant) ? rM : iM;
+         if (this.depth--, null !== UU.constant) return kU(UU.constant) ? XU : zU;
```

#### 4411. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37594` → after: `L37415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37415) · [Before (L37594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37594)

```diff
-             PM = null !== (iM = OM(SM.text, rM, aM)) && void 0 !== iM ? iM : GM(SM.text, rM.evaluate, aM.evaluate);
+             FU = null !== (zU = cU(yU.text, XU, AU)) && void 0 !== zU ? zU : ZU(yU.text, XU.evaluate, AU.evaluate);
```

#### 4412. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37615` → after: `L37436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37436) · [Before (L37615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37615)

```diff
-         throw new WM(`expected an expression but found ${kM(MM)}`, MM.offset)
+         throw new OU(`expected an expression but found ${uU(UU)}`, UU.offset)
```

#### 4413. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37623` → after: `L37444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37444) · [Before (L37623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37623)

```diff
-         if (-1 === OM) throw new WM(`unknown identifier '${MM.text}'`, MM.offset);
+         if (-1 === cU) throw new OU(`unknown identifier '${UU.text}'`, UU.offset);
```

#### 4414. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37630` → after: `L37451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37451) · [Before (L37630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37630)

```diff
-             if (void 0 === rM) throw new WM(`unknown query '${MM.text}'`, MM.offset);
+             if (void 0 === XU) throw new OU(`unknown query '${UU.text}'`, UU.offset);
```

#### 4415. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37640` → after: `L37461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37461) · [Before (L37640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37640)

```diff
-             if (void 0 === rM) throw new WM(`unknown variable '${MM.text}'`, MM.offset);
+             if (void 0 === XU) throw new OU(`unknown variable '${UU.text}'`, UU.offset);
```

#### 4416. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37650` → after: `L37471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37471) · [Before (L37650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37650)

```diff
-         throw new WM(null !== (rM = wM.get(SM)) && void 0 !== rM ? rM : `unknown identifier '${MM.text}'`, MM.offset)
+         throw new OU(null !== (XU = dU.get(yU)) && void 0 !== XU ? XU : `unknown identifier '${UU.text}'`, UU.offset)
```

#### 4417. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37654` → after: `L37475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37475) · [Before (L37654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37654)

```diff
-         if (MM.startsWith("random") || MM.startsWith("die_roll")) throw new WM(`'${rM.text}' is non-deterministic and not supported`, rM.offset);
+         if (UU.startsWith("random") || UU.startsWith("die_roll")) throw new OU(`'${XU.text}' is non-deterministic and not supported`, XU.offset);
```

#### 4418. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37656` → after: `L37477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37477) · [Before (L37656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37656)

```diff
-         if (void 0 === iM) throw new WM(`unknown function '${rM.text}'`, rM.offset);
+         if (void 0 === zU) throw new OU(`unknown function '${XU.text}'`, XU.offset);
```

#### 4419. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37665` → after: `L37486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37486) · [Before (L37665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37665)

```diff
-         if (OM.length !== iM.arity) throw new WM(`'${rM.text}' takes ${iM.arity} argument(s) but was given ${OM.length}`, rM.offset);
+         if (cU.length !== zU.arity) throw new OU(`'${XU.text}' takes ${zU.arity} argument(s) but was given ${cU.length}`, XU.offset);
```

#### 4420. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37670` → after: `L37491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37491) · [Before (L37670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37670)

```diff
-           for (let QM = 1; QM < (null !== (nM = iM.cost) && void 0 !== nM ? nM : 1); QM++) {
+           for (let DU = 1; DU < (null !== (oU = zU.cost) && void 0 !== oU ? oU : 1); DU++) {
```

#### 4421. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37707` → after: `L37528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37528) · [Before (L37707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37707)

```diff
-           throw new WM(`expected '${MM}' but found ${kM(rM)}`, rM.offset)
+           throw new OU(`expected '${UU}' but found ${uU(XU)}`, XU.offset)
```

#### 4422. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37712` → after: `L37533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37533) · [Before (L37712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37712)

```diff
-         if (MM.kind !== pM.End) throw new WM(`unexpected ${kM(MM)}`, MM.offset)
+         if (UU.kind !== qU.End) throw new OU(`unexpected ${uU(UU)}`, UU.offset)
```

#### 4423. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37715` → after: `L37536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37536) · [Before (L37715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37715)

```diff
-     const xM = MM => Number.isFinite(MM) ? MM : 0;
+     const sU = UU => Number.isFinite(UU) ? UU : 0;
```

#### 4424. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37727` → after: `L37548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37548) · [Before (L37727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37727)

```diff
-         if (MM.length > oM) throw new WM(`expression is longer than ${oM} characters`, oM);
+         if (UU.length > iU) throw new OU(`expression is longer than ${iU} characters`, iU);
```

#### 4425. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37741` → after: `L37562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37562) · [Before (L37741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37741)

```diff
-           error: `${iM.message} at offset ${iM.offset}`
+           error: `${zU.message} at offset ${zU.offset}`
```

#### 4426. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37747` → after: `L37568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37568) · [Before (L37747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37747)

```diff
-   39439: (MM, rM, iM) => {
+   39221: (UU, XU, zU) => {
```

#### 4427. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37749-L37750` → after: `L37570-L37571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37570-L37571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37570-L37571) · [Before (L37749-L37750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37749-L37750)

```diff
-       e: () => PM,
-       i: () => nM
+       c: () => FU,
+       g: () => oU
```

#### 4428. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37752` → after: `L37573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37573) · [Before (L37752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37752)

```diff
-     var OM = iM(347),
+     var cU = zU(352),
```

#### 4429. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37754` → after: `L37575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37575) · [Before (L37754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37754)

```diff
-       jM = iM(39447),
+       QU = zU(39229),
```

#### 4430. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37765-L37766` → after: `L37586-L37587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37586-L37587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37586-L37587) · [Before (L37765-L37766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37765-L37766)

```diff
-         PU: function(MM, rM) {},
-         vW: null,
+         lG: function(UU, XU) {},
+         Cw: null,
```

#### 4431. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37769` → after: `L37590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37590) · [Before (L37769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37769)

```diff
-             const rM = MM.hU.iZ("collideEntitiesProjectile");
+             const XU = UU.xG.uH("collideEntitiesProjectile");
```

#### 4432. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37781-L37784` → after: `L37602-L37605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37602-L37605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37602-L37605) · [Before (L37781-L37784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37781-L37784)

```diff
-         jM = MM.hU.Av(rM),
-         aM = MM.hU.jK(rM),
-         PM = [jM.hm.base[0] + aM.width / 2, jM.hm.base[1] + aM.height / 2, jM.hm.base[2] + aM.width / 2];
-       SM().add(PM, PM, null !== (iM = aM.Am) && void 0 !== iM ? iM : MM.Am), LM(MM, MM.hU.getState(rM, "collideEntitiesProjectile"), OM, PM)
+         QU = UU.xG.Bx(XU),
+         AU = UU.xG.hK(XU),
+         FU = [QU.tN.base[0] + AU.width / 2, QU.tN.base[1] + AU.height / 2, QU.tN.base[2] + AU.width / 2];
+       yU().add(FU, FU, null !== (zU = AU.VN) && void 0 !== zU ? zU : UU.VN), YU(UU, UU.xG.getState(XU, "collideEntitiesProjectile"), cU, FU)
```

#### 4433. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37790` → after: `L37611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37611) · [Before (L37790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37790)

```diff
-       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : MM.hU.XE(rM.HZ);
+       let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU.xG.wG(XU.iH);
```

#### 4434. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37797-L37798` → after: `L37618-L37619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37618-L37619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37618-L37619) · [Before (L37797-L37798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37797-L37798)

```diff
-         if (!MM.hU.BMM(OM.HZ, "collideEntities")) continue;
-         if (!OM.TiM) continue;
+         if (!UU.xG.qXU(cU.iH, "collideEntities")) continue;
+         if (!cU.vcU) continue;
```

#### 4435. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37800` → after: `L37621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37621) · [Before (L37800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37800)

```diff
-         if (PM = rM._lastPos, nM = zM[SM], (PM[0] >= nM[0][0] && PM[0] <= nM[1][0] && PM[1] >= nM[0][1] && PM[1] <= nM[1][1] && PM[2] >= nM[0][2] && PM[2] <= nM[1][2] || Math.abs(LM) <= jM) && (rM.callback(OM.HZ), !MM.hU.BMM(rM.HZ, "collideEntitiesProjectile"))) break
+         if (FU = XU._lastPos, oU = EU[yU], (FU[0] >= oU[0][0] && FU[0] <= oU[1][0] && FU[1] >= oU[0][1] && FU[1] <= oU[1][1] && FU[2] >= oU[0][2] && FU[2] <= oU[1][2] || Math.abs(YU) <= QU) && (XU.callback(cU.iH), !UU.xG.qXU(XU.iH, "collideEntitiesProjectile"))) break
```

#### 4436. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37807` → after: `L37628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37628) · [Before (L37807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37807)

```diff
-       const rM = MM.hU.iZ("collideEntities");
+       const XU = UU.xG.uH("collideEntities");
```

#### 4437. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37810-L37812` → after: `L37631-L37633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37631-L37633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37631-L37633) · [Before (L37810-L37812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37810-L37812)

```diff
-         const aM = MM.hU.jK(rM[jM].HZ),
-           PM = rM[jM].KiM / 2,
-           nM = rM[jM].qiM / 2;
+         const AU = UU.xG.hK(XU[QU].iH),
+           FU = XU[QU].HcU / 2,
+           oU = XU[QU].McU / 2;
```

#### 4438. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37814-L37816` → after: `L37635-L37637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37635-L37637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37635-L37637) · [Before (L37814-L37816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37814-L37816)

```diff
-           [aM.siM[0] - PM, aM.siM[1] - nM, aM.siM[2] - PM],
-           [aM.siM[3] + PM, aM.siM[4] + nM, aM.siM[5] + PM]
-         ], SM().add(zM[jM][0], zM[jM][0], null !== (iM = aM.Am) && void 0 !== iM ? iM : MM.Am), SM().add(zM[jM][1], zM[jM][1], null !== (OM = aM.Am) && void 0 !== OM ? OM : MM.Am)
+           [AU.BcU[0] - FU, AU.BcU[1] - oU, AU.BcU[2] - FU],
+           [AU.BcU[3] + FU, AU.BcU[4] + oU, AU.BcU[5] + FU]
+         ], yU().add(EU[QU][0], EU[QU][0], null !== (zU = AU.VN) && void 0 !== zU ? zU : UU.VN), yU().add(EU[QU][1], EU[QU][1], null !== (cU = AU.VN) && void 0 !== cU ? cU : UU.VN)
```

#### 4439. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37821` → after: `L37642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37642) · [Before (L37821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37821)

```diff
-   38662: (MM, rM, iM) => {
+   38422: (UU, XU, zU) => {
```

#### 4440. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37823` → after: `L37644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37644) · [Before (L37823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37823)

```diff
-       d: () => QM,
+       c: () => DU,
```

#### 4441. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37826-L37828` → after: `L37647-L37649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37647-L37649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37647-L37649) · [Before (L37826-L37828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37826-L37828)

```diff
-     var OM = iM(38639),
-       SM = iM(6944),
-       jM = iM(6936);
+     var cU = zU(38404),
+       yU = zU(7056),
+       QU = zU(7054);
```

#### 4442. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37831-L37832` → after: `L37652-L37653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37652-L37653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37652-L37653) · [Before (L37831-L37832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37831-L37832)

```diff
-         this.HZ = void 0, this.maxSpeed = 4, this.moveForce = 80, this.responsiveness = 20, this.movingFriction = 0, this.standingFriction = 5, this.boatStandingFriction = .4, this.gliderFriction = 0, this.airMoveMult = 1, this.jumpForce = 0, this.jumpTime = 500, this.isGliding = … [truncated]
-           type: SM.n.DEFAULT,
+         this.iH = void 0, this.maxSpeed = 4, this.moveForce = 80, this.responsiveness = 20, this.movingFriction = 0, this.standingFriction = 5, this.boatStandingFriction = .4, this.gliderFriction = 0, this.airMoveMult = 1, this.jumpForce = 0, this.jumpTime = 500, this.isGliding = … [truncated]
+           type: yU.o.DEFAULT,
```

#### 4443. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37838` → after: `L37659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37659) · [Before (L37838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37838)

```diff
-         }, this.fb = 0, this.steeringHeading = 0, this._steeringHeadingPrevTick = 0, this._steeringActiveLastTick = !1, this._lastTickVelocity = [0, 0, 0], this._beenOnSolidGroundSinceBhopBounce = !0, this.movementType = SM.l.NORMAL, this.movementTypeLastTick = SM.l.NORMAL, this. … [truncated]
+         }, this.fb = 0, this.steeringHeading = 0, this._steeringHeadingPrevTick = 0, this._steeringActiveLastTick = !1, this._lastTickVelocity = [0, 0, 0], this._beenOnSolidGroundSinceBhopBounce = !0, this.movementType = yU.l.NORMAL, this.movementTypeLastTick = yU.l.NORMAL, this. … [truncated]
```

#### 4444. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37847` → after: `L37668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37668) · [Before (L37847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37847)

```diff
-         return this.Cm.hU.Av(this.HZ).atRestY() < 0
+         return this.WN.xG.Bx(this.iH).atRestY() < 0
```

#### 4445. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37853` → after: `L37674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37674) · [Before (L37853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37853)

```diff
-         return (0, OM.f)(this.Cm, this.HZ, !1)
+         return (0, cU.g)(this.WN, this.iH, !1)
```

#### 4446. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37859` → after: `L37680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37680) · [Before (L37859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37859)

```diff
-         MM === SM.l.GLIDING ? this.hitWhilstGliding = rM : this.hitWhilstFloating = rM
+         UU === yU.l.GLIDING ? this.hitWhilstGliding = XU : this.hitWhilstFloating = XU
```

#### 4447. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37865` → after: `L37686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37686) · [Before (L37865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37865)

```diff
-       const rM = MM.hU.nrM(MM.eD);
+       const XU = UU.xG.KXU(UU.pM);
```

#### 4448. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37874-L37875` → after: `L37695-L37696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37695-L37696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37695-L37696) · [Before (L37874-L37875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37874-L37875)

```diff
-         PU: (rM, iM) => {
-           iM.Cm = MM, PM = iM.isInCobweb, nM = iM.isInFluid
+         lG: (XU, zU) => {
+           zU.WN = UU, FU = zU.isInCobweb, oU = zU.isInFluid
```

#### 4449. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37877` → after: `L37698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37698) · [Before (L37877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37877)

```diff
-         vW: null,
+         Cw: null,
```

#### 4450. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37882` → after: `L37703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37703) · [Before (L37882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37882)

```diff
-   38142: (MM, rM, iM) => {
+   37902: (UU, XU, zU) => {
```

#### 4451. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37918` → after: `L37739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37739) · [Before (L37918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37918)

```diff
-   38782: (MM, rM, iM) => {
+   38549: (UU, XU, zU) => {
```

#### 4452. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37922` → after: `L37744-L37745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37744-L37745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37744-L37745) · [Before (L37922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37922)

```diff
-       f: () => HM,
+       e: () => YU,
+       g: () => EU,
```

#### 4453. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37927-L37928` → after: `L37748-L37749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37748-L37749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37748-L37749) · [Before (L37927-L37928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37927-L37928)

```diff
-       o: () => JM,
-       p: () => hM
+       n: () => aU,
+       o: () => pU
```

#### 4454. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37930-L37932` → after: `L37751-L37753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37751-L37753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37751-L37753) · [Before (L37930-L37932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37930-L37932)

```diff
-     var OM = iM(181),
-       SM = iM(9816),
-       jM = iM(38784);
+     var cU = zU(212),
+       yU = zU(9782),
+       QU = zU(38557);
```

#### 4455. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37935` → after: `L37756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37756) · [Before (L37935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37935)

```diff
-       return null !== rM && void 0 !== rM ? rM : MM ? 0 : OM.f.ezBridgeGrowMs
+       return null !== XU && void 0 !== XU ? XU : UU ? 0 : cU.f.ezBridgeGrowMs
```

#### 4456. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37960-L37961` → after: `L37781-L37782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37781-L37782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37781-L37782) · [Before (L37960-L37961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37960-L37961)

```diff
-       const rM = SM.k[MM];
-       return !!rM && (!(MM in jM.g) && (rM.model ? "Slab" === rM.model : !rM.twoDBlockItem))
+       const XU = yU.h[UU];
+       return !!XU && (!(UU in QU.f) && (XU.model ? "Slab" === XU.model : !XU.twoDBlockItem))
```

#### 4457. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37973` → after: `L37794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37794) · [Before (L37973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37973)

```diff
-       return HM(rM.startedAtMs, rM.endsAtMs, iM) >= OM ? rM : MM
+       return IU(XU.startedAtMs, XU.endsAtMs, zU) >= cU ? XU : UU
```

#### 4458. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37987` → after: `L37808-L37889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37808-L37889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37808-L37889) · [Before (L37987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37987)

```diff
-   38721: (MM, rM, iM) => {
+   38526: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => YU,
+       g: () => FU,
+       k: () => IU,
+       n: () => oU,
+       r: () => NU
+     });
+     var cU = zU(9885),
+       yU = zU(9782);
+     const QU = cU.g.map((UU => {
+         const XU = [];
+         for (let QU = 1; QU <= UU.reach; QU++) XU.push(yU.h[(0, cU.e)(UU.source, QU)].id);
+         const zU = "water" === UU.family;
+         return Object.freeze({
+           name: UU.kind,
+ ... (66 more added lines; see GitHub link above)
```

#### 4459. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37992-L37996` → after: `L37894-L37899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37894-L37899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37894-L37899) · [Before (L37992-L37996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37992-L37996)

```diff
-       C: () => JM,
-       d: () => dM,
-       h: () => CM,
-       j: () => GM,
-       n: () => eM,
+       A: () => gU,
+       D: () => aU,
+       e: () => tU,
+       g: () => RU,
+       k: () => ZU,
+       m: () => PU,
```

#### 4460. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L37998-L38001` → after: `L37901-L37903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37901-L37903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37901-L37903) · [Before (L37998-L38001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L37998-L38001)

```diff
-       r: () => aM,
-       v: () => jM,
-       x: () => nM,
-       z: () => yM
+       p: () => AU,
+       t: () => QU,
+       x: () => oU
```

#### 4461. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38025` → after: `L37927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37927) · [Before (L38025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38025)

```diff
-       return `~${function(MM){return MM.length<2?MM:":"===MM[1]?MM[0]:MM[0]+MM[1]}(rM)}~${MM}`
+       return `~${function(UU){return UU.length<2?UU:":"===UU[1]?UU[0]:UU[0]+UU[1]}(XU)}~${UU}`
```

#### 4462. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38071` → after: `L37973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L37973) · [Before (L38071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38071)

```diff
-       if (iM <= rM) return `t ${MM}`;
+       if (zU <= XU) return `t ${UU}`;
```

#### 4463. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38105` → after: `L38007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38007) · [Before (L38105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38105)

```diff
-   39177: (MM, rM, iM) => {
+   38945: (UU, XU, zU) => {
```

#### 4464. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38107-L38108` → after: `L38009-L38010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38009-L38010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38009-L38010) · [Before (L38107-L38108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38107-L38108)

```diff
-       b: () => nM,
-       e: () => PM,
+       d: () => oU,
+       f: () => FU,
```

#### 4465. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38111-L38113` → after: `L38013-L38015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38013-L38015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38013-L38015) · [Before (L38111-L38113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38111-L38113)

```diff
-     var OM = iM(6944),
-       SM = iM(332),
-       jM = iM(625);
+     var cU = zU(7056),
+       yU = zU(344),
+       QU = zU(646);
```

#### 4466. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38121` → after: `L38023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38023) · [Before (L38121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38121)

```diff
-       for (let rM = 0; rM < jM.r; rM++)
+       for (let XU = 0; XU < QU.s; XU++)
```

#### 4467. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38128` → after: `L38030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38030) · [Before (L38128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38128)

```diff
-       for (let OM = 0; OM < jM.r; OM++) {
+       for (let cU = 0; cU < QU.s; cU++) {
```

#### 4468. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38131` → after: `L38033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38033) · [Before (L38131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38131)

```diff
-         if (aM(SM)) rM += null !== (iM = SM.amount) && void 0 !== iM ? iM : 1
+         if (AU(yU)) XU += null !== (zU = yU.amount) && void 0 !== zU ? zU : 1
```

#### 4469. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38138` → after: `L38040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38040) · [Before (L38138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38138)

```diff
-       const aM = MM.hU.nrM(rM);
+       const AU = UU.xG.KXU(XU);
```

#### 4470. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38141-L38142` → after: `L38043-L38044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38043-L38044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38043-L38044) · [Before (L38141-L38142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38141-L38142)

```diff
-         const iM = null === (nM = MM.hU.urM(rM)) || void 0 === nM ? void 0 : nM.inventory;
-         iM && null !== PM(iM) && MM.bloxd.startGliderFuelCooldown(rM, aM, SM.g.getFirecrackerCooldownMultiplier(iM.getItemAtSelectedSlot()))
+         const zU = null === (oU = UU.xG.tzU(XU)) || void 0 === oU ? void 0 : oU.inventory;
+         zU && null !== FU(zU) && UU.bloxd.startGliderFuelCooldown(XU, AU, yU.f.getFirecrackerCooldownMultiplier(zU.getItemAtSelectedSlot()))
```

#### 4471. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38146` → after: `L38048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38048) · [Before (L38146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38146)

```diff
-   38977: (MM, rM, iM) => {
+   38752: (UU, XU, zU) => {
```

#### 4472. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38148-L38149` → after: `L38050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38050) · [Before (L38148-L38149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38148-L38149)

```diff
-       b: () => jM,
-       d: () => nM,
+       e: () => QU,
```

#### 4473. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38153-L38154` → after: `L38056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38056) · [Before (L38153-L38154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38153-L38154)

```diff
-       p: () => zM,
-       s: () => SM
+       o: () => yU
```

#### 4474. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38156` → after: `L38058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38058) · [Before (L38156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38156)

```diff
-     var OM = iM(4586);
+     var cU = zU(4619);
```

#### 4475. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38159` → after: `L38061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38061) · [Before (L38159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38159)

```diff
-       const rM = new OM.h(`blockBreakDrop|${MM}`);
+       const XU = new cU.l(`blockBreakDrop|${UU}`);
```

#### 4476. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38164` → after: `L38066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38066) · [Before (L38164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38164)

```diff
-       MM.gravityMultiplier = 2, MM.friction = 4, MM.vz = .02, MM.fm = 0, MM.fluidDrag = .2
+       UU.gravityMultiplier = 2, UU.friction = 4, UU.xE = .02, UU.HN = 0, UU.fluidDrag = .2
```

#### 4477. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38189` → after: `L38091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38091) · [Before (L38189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38189)

```diff
-   39474: (MM, rM, iM) => {
+   39255: (UU, XU, zU) => {
```

#### 4478. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38191-L38192` → after: `L38093-L38094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38093-L38094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38093-L38094) · [Before (L38191-L38192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38191-L38192)

```diff
-       d: () => jM,
-       g: () => zM
+       e: () => QU,
+       i: () => EU
```

#### 4479. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38194-L38195` → after: `L38096-L38097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38096-L38097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38096-L38097) · [Before (L38194-L38195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38194-L38195)

```diff
-     var OM = iM(39471),
-       SM = iM(39480);
+     var cU = zU(39250),
+       yU = zU(39260);
```

#### 4480. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38204` → after: `L38106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38106) · [Before (L38204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38204)

```diff
-       const zM = (0, OM.d)(rM),
+       const EU = (0, cU.b)(XU),
```

#### 4481. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38209-L38212` → after: `L38111-L38114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38111-L38114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38111-L38114) · [Before (L38209-L38212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38209-L38212)

```diff
-         JM = Math.min(Math.max(LM * MM, aM), SM.g),
-         dM = Math.min(Math.max(mM * MM, PM), SM.e),
-         yM = Math.max(HM * Math.min(MM, SM.g / LM), nM),
-         lM = Math.max(hM * Math.min(MM, SM.e / mM), QM);
+         aU = Math.min(Math.max(YU * UU, AU), yU.d),
+         tU = Math.min(Math.max(NU * UU, FU), yU.c),
+         gU = Math.max(IU * Math.min(UU, yU.d / YU), oU),
+         kU = Math.max(pU * Math.min(UU, yU.c / NU), DU);
```

#### 4482. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38218` → after: `L38120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38120) · [Before (L38218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38218)

```diff
-         shadowSize: jM * MM * (null !== (iM = zM.modelScale) && void 0 !== iM ? iM : 1)
+         shadowSize: QU * UU * (null !== (zU = EU.modelScale) && void 0 !== zU ? zU : 1)
```

#### 4483. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38222` → after: `L38124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38124) · [Before (L38222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38222)

```diff
-   38701: (MM, rM, iM) => {
+   38469: (UU, XU, zU) => {
```

#### 4484. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38225-L38226` → after: `L38128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38128) · [Before (L38225-L38226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38225-L38226)

```diff
-       g: () => QM,
-       j: () => PM
+       h: () => FU
```

#### 4485. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38228-L38229` → after: `L38130-L38131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38130-L38131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38130-L38131) · [Before (L38228-L38229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38228-L38229)

```diff
-     var OM = iM(38710),
-       SM = iM(3160),
+     var cU = zU(38473),
+       yU = zU(3134),
```

#### 4486. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38233` → after: `L38135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38135) · [Before (L38233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38233)

```diff
-       return `${MM}|${rM}|${iM}`
+       return `${UU}|${XU}|${zU}`
```

#### 4487. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38240` → after: `L38142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38142) · [Before (L38240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38240)

```diff
-     const nM = iM(181).f.HL;
+     const oU = zU(212).f.aY;
```

#### 4488. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38248` → after: `L38150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38150) · [Before (L38248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38248)

```diff
-   38616: (MM, rM, iM) => {
+   38382: (UU, XU, zU) => {
```

#### 4489. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38251` → after: `L38153-L38155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38153-L38155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38153-L38155) · [Before (L38251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38251)

```diff
-       e: () => bM,
+       h: () => WU,
+       l: () => wU,
+       j: () => CU,
```

#### 4490. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38253-L38257` → after: `L38157-L38159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38157-L38159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38157-L38159) · [Before (L38253-L38257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38253-L38257)

```diff
-       i: () => uM,
-       p: () => pM,
-       t: () => tM,
-       v: () => sM,
-       w: () => WM
+       o: () => LU,
+       r: () => SU,
+       v: () => OU
```

#### 4491. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38259-L38261` → after: `L38161-L38163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38161-L38163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38161-L38163) · [Before (L38259-L38261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38259-L38261)

```diff
-     var OM = iM(6944),
-       SM = iM(38623),
-       jM = iM(332);
+     var cU = zU(7056),
+       yU = zU(38388),
+       QU = zU(344);
```

#### 4492. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38263` → after: `L38165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38165) · [Before (L38263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38263)

```diff
-         vz: .25,
+         xE: .25,
```

#### 4493. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38273` → after: `L38175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38175) · [Before (L38273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38273)

```diff
-         canAutoStepByBlock: Object.fromEntries(jM.vc.map((MM => [MM, !0]))),
+         canAutoStepByBlock: Object.fromEntries(QU.xc.map((UU => [UU, !0]))),
```

#### 4494. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38282` → after: `L38184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38184) · [Before (L38282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38282)

```diff
-         speedMultiplierByBlock: Object.fromEntries(jM.vc.map((MM => [MM, 40]))),
+         speedMultiplierByBlock: Object.fromEntries(QU.xc.map((UU => [UU, 40]))),
```

#### 4495. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38289-L38290` → after: `L38191-L38192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38191-L38192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38191-L38192) · [Before (L38289-L38290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38289-L38290)

```diff
-         [OM.d.WOOD]: {},
-         [OM.d.OBSIDIAN]: {
+         [cU.f.WOOD]: {},
+         [cU.f.OBSIDIAN]: {
```

#### 4496. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38296` → after: `L38198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38198) · [Before (L38296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38296)

```diff
-         [OM.d.SPEED]: {
+         [cU.f.SPEED]: {
```

#### 4497. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38322` → after: `L38224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38224) · [Before (L38322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38322)

```diff
-         vz: 2.5,
+         xE: 2.5,
```

#### 4498. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38353` → after: `L38255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38255) · [Before (L38353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38353)

```diff
-         vz: 3,
+         xE: 3,
```

#### 4499. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38392-L38395` → after: `L38294-L38297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38294-L38297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38294-L38297) · [Before (L38392-L38395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38392-L38395)

```diff
-       [OM.e.KART]: {},
-       [OM.e.OFF_ROADER]: LM,
-       [OM.e.CAR]: {
-         vz: 2.75,
+       [cU.j.KART]: {},
+       [cU.j.OFF_ROADER]: YU,
+       [cU.j.CAR]: {
+         xE: 2.75,
```

#### 4500. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38420-L38425` → after: `L38322-L38327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38322-L38327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38322-L38327) · [Before (L38420-L38425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38420-L38425)

```diff
-       [OM.e.GOLD_MINING_DRILL]: mM("Gold Mining Drill", 5),
-       [OM.e.IRON_MINING_DRILL]: mM("Iron Mining Drill", 4),
-       [OM.e.DIAMOND_MINING_DRILL]: mM("Diamond Mining Drill", 6),
-       [OM.e.MOONSTONE_MINING_DRILL]: mM("Moonstone Mining Drill", 7),
-       [OM.e.ARMORED_CAR]: {
-         vz: 4.5,
+       [cU.j.GOLD_MINING_DRILL]: NU("Gold Mining Drill", 5),
+       [cU.j.IRON_MINING_DRILL]: NU("Iron Mining Drill", 4),
+       [cU.j.DIAMOND_MINING_DRILL]: NU("Diamond Mining Drill", 6),
+       [cU.j.MOONSTONE_MINING_DRILL]: NU("Moonstone Mining Drill", 7),
+       [cU.j.ARMORED_CAR]: {
+         xE: 4.5,
```

#### 4501. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38485-L38486` → after: `L38387-L38388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38387-L38388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38387-L38388) · [Before (L38485-L38486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38485-L38486)

```diff
-         [OM.h.WOOD]: {},
-         [OM.h.IRON]: {
+         [cU.k.WOOD]: {},
+         [cU.k.IRON]: {
```

#### 4502. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38489` → after: `L38391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38391) · [Before (L38489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38489)

```diff
-         [OM.h.GOLD]: {
+         [cU.k.GOLD]: {
```

#### 4503. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38492` → after: `L38394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38394) · [Before (L38492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38492)

```diff
-         [OM.h.DIAMOND]: {
+         [cU.k.DIAMOND]: {
```

#### 4504. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38515-L38530` → after: `L38417-L38432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38417-L38432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38417-L38432) · [Before (L38515-L38530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38515-L38530)

```diff
-         [OM.b.YELLOW]: EM("Yellow"),
-         [OM.b.WHITE]: EM("White"),
-         [OM.b.RED]: EM("Red"),
-         [OM.b.PURPLE]: EM("Purple"),
-         [OM.b.PINK]: EM("Pink"),
-         [OM.b.ORANGE]: EM("Orange"),
-         [OM.b.MAGENTA]: EM("Magenta"),
-         [OM.b.LIME]: EM("Lime"),
-         [OM.b.LIGHT_GRAY]: EM("Light Gray"),
-         [OM.b.LIGHT_BLUE]: EM("Light Blue"),
-         [OM.b.GREEN]: EM("Green"),
-         [OM.b.GRAY]: EM("Gray"),
-         [OM.b.CYAN]: EM("Cyan"),
-         [OM.b.BROWN]: EM("Brown"),
-         [OM.b.BLUE]: EM("Blue"),
-         [OM.b.BLACK]: EM("Black")
+         [cU.c.YELLOW]: GU("Yellow"),
+         [cU.c.WHITE]: GU("White"),
+         [cU.c.RED]: GU("Red"),
+         [cU.c.PURPLE]: GU("Purple"),
+         [cU.c.PINK]: GU("Pink"),
+         [cU.c.ORANGE]: GU("Orange"),
+         [cU.c.MAGENTA]: GU("Magenta"),
+         [cU.c.LIME]: GU("Lime"),
+         [cU.c.LIGHT_GRAY]: GU("Light Gray"),
+         [cU.c.LIGHT_BLUE]: GU("Light Blue"),
+         [cU.c.GREEN]: GU("Green"),
+         [cU.c.GRAY]: GU("Gray"),
+         [cU.c.CYAN]: GU("Cyan"),
+         [cU.c.BROWN]: GU("Brown"),
+         [cU.c.BLUE]: GU("Blue"),
+         [cU.c.BLACK]: GU("Black")
```

#### 4505. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38537` → after: `L38439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38439) · [Before (L38537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38537)

```diff
-           icon: `${MM} Balloon`,
+           icon: `${UU} Balloon`,
```

#### 4506. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38543` → after: `L38445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38445) · [Before (L38543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38543)

```diff
-       [OM.o.ROTATION_1]: {
+       [cU.p.ROTATION_1]: {
```

#### 4507. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38546` → after: `L38448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38448) · [Before (L38546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38546)

```diff
-       [OM.o.ROTATION_2]: {
+       [cU.p.ROTATION_2]: {
```

#### 4508. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38549` → after: `L38451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38451) · [Before (L38549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38549)

```diff
-       [OM.o.ROTATION_3]: {
+       [cU.p.ROTATION_3]: {
```

#### 4509. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38552` → after: `L38454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38454) · [Before (L38552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38552)

```diff
-       [OM.o.ROTATION_4]: {
+       [cU.p.ROTATION_4]: {
```

#### 4510. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38556` → after: `L38458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38458) · [Before (L38556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38556)

```diff
-     var GM = iM(9816),
+     var ZU = zU(9782),
```

#### 4511. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38563` → after: `L38465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38465) · [Before (L38563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38563)

```diff
-           ...SM.g,
+           ...yU.e,
```

#### 4512. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38630` → after: `L38532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38532) · [Before (L38630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38630)

```diff
-           SM[aM] = PM === iM ? OM : rM(PM)
+           yU[AU] = FU === zU ? cU : XU(FU)
```

#### 4513. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38640` → after: `L38542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38542) · [Before (L38640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38640)

```diff
-       return (0, jM.xc)(MM) ? null : (0, jM.cb)(GM.p, (rM => {
+       return (0, QU.Fc)(UU) ? null : (0, QU.ab)(ZU.l, (XU => {
```

#### 4514. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38642` → after: `L38544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38544) · [Before (L38642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38642)

```diff
-         return null !== (iM = MM[(0, GM.g)(rM)]) && void 0 !== iM ? iM : 1
+         return null !== (zU = UU[(0, ZU.f)(XU)]) && void 0 !== zU ? zU : 1
```

#### 4515. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38647-L38648` → after: `L38549-L38550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38549-L38550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38549-L38550) · [Before (L38647-L38648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38647-L38648)

```diff
-       return (0, jM.xc)(MM) ? null : (0, jM.cb)(GM.p, (rM => {
-         const iM = MM[(0, GM.g)(rM)];
+       return (0, QU.Fc)(UU) ? null : (0, QU.ab)(ZU.l, (XU => {
+         const zU = UU[(0, ZU.f)(XU)];
```

#### 4516. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38666-L38670` → after: `L38568-L38572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38568-L38572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38568-L38572) · [Before (L38666-L38670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38666-L38670)

```diff
-       [OM.n.DEFAULT]: new eM(SM.g, {}),
-       [OM.n.BOAT]: new eM(aM, PM),
-       [OM.n.GLIDER]: new eM(JM, dM),
-       [OM.n.BALLOON]: new eM(yM, lM),
-       [OM.n.SLEEPING]: new eM({
+       [cU.o.DEFAULT]: new PU(yU.e, {}),
+       [cU.o.BOAT]: new PU(AU, FU),
+       [cU.o.GLIDER]: new PU(aU, tU),
+       [cU.o.BALLOON]: new PU(gU, kU),
+       [cU.o.SLEEPING]: new PU({
```

#### 4517. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38682-L38683` → after: `L38584-L38585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38584-L38585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38584-L38585) · [Before (L38682-L38683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38682-L38683)

```diff
-       [OM.n.RIDING_MOB]: new eM({
-         vz: 1,
+       [cU.o.RIDING_MOB]: new PU({
+         xE: 1,
```

#### 4518. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38698-L38700` → after: `L38600-L38602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38600-L38602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38600-L38602) · [Before (L38698-L38700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38698-L38700)

```diff
-       [OM.n.CAR]: new eM(QM, HM),
-       [OM.n.HOVERCRAFT]: new eM({
-         vz: .5,
+       [cU.o.CAR]: new PU(DU, IU),
+       [cU.o.HOVERCRAFT]: new PU({
+         xE: .5,
```

#### 4519. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38745` → after: `L38647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38647) · [Before (L38745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38745)

```diff
-       return null !== MM.fixedHeading ? MM.fixedHeading : MM.steering ? rM : iM
+       return null !== UU.fixedHeading ? UU.fixedHeading : UU.steering ? XU : zU
```

#### 4520. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38748` → after: `L38650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38650) · [Before (L38748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38748)

```diff
-   38654: (MM, rM, iM) => {
+   38415: (UU, XU, zU) => {
```

#### 4521. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38750` → after: `L38652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38652) · [Before (L38750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38750)

```diff
-       b: () => aM
+       c: () => AU
```

#### 4522. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38752-L38753` → after: `L38654-L38655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38654-L38655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38654-L38655) · [Before (L38752-L38753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38752-L38753)

```diff
-     var OM = iM(9816),
-       SM = iM(332);
+     var cU = zU(9782),
+       yU = zU(344);
```

#### 4523. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38828` → after: `L38730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38730) · [Before (L38828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38828)

```diff
-       aM = (0, SM.cb)(OM.p, (MM => {
+       AU = (0, yU.ab)(cU.l, (UU => {
```

#### 4524. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38830-L38831` → after: `L38732-L38733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38732-L38733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38732-L38733) · [Before (L38830-L38831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38830-L38831)

```diff
-         const nM = (0, OM.g)(MM);
-         return null !== (rM = null !== (iM = null === (SM = jM[nM]) || void 0 === SM ? void 0 : SM.upForceScalar) && void 0 !== iM ? iM : null === (aM = OM.p[MM]) || void 0 === aM || null === (PM = aM.climbableInside) || void 0 === PM ? void 0 : PM.upForceScalar) && void 0 !== rM … [truncated]
+         const oU = (0, cU.f)(UU);
+         return null !== (XU = null !== (zU = null === (yU = QU[oU]) || void 0 === yU ? void 0 : yU.upForceScalar) && void 0 !== zU ? zU : null === (AU = cU.l[UU]) || void 0 === AU || null === (FU = AU.climbableInside) || void 0 === FU ? void 0 : FU.upForceScalar) && void 0 !== XU … [truncated]
```

#### 4525. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38834` → after: `L38736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38736) · [Before (L38834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38834)

```diff
-   38755: (MM, rM, iM) => {
+   38531: (UU, XU, zU) => {
```

#### 4526. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38842-L38843` → after: `L38742-L38745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38742-L38745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38742-L38745) · [Before (L38842-L38843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38842-L38843)

```diff
-       f: () => jM,
-       i: () => aM
+       g: () => FU,
+       j: () => cU,
+       k: () => QU,
+       o: () => AU
```

#### 4527. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38853` → after: `L38755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38755) · [Before (L38853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38853)

```diff
-       const nM = jM ? MM.heldMs + aM : 0;
+       const oU = QU ? UU.heldMs + AU : 0;
```

#### 4528. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38868` → after: `L38770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38770) · [Before (L38868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38868)

```diff
-   6936: (MM, rM, iM) => {
+   7054: (UU, XU, zU) => {
```

#### 4529. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38870-L38872` → after: `L38772-L38774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38772-L38774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38772-L38774) · [Before (L38870-L38872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38870-L38872)

```diff
-       d: () => LM,
-       g: () => SM,
-       h: () => mM
+       e: () => YU,
+       h: () => yU,
+       l: () => NU
```

#### 4530. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38874` → after: `L38776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38776) · [Before (L38874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38874)

```diff
-     var OM = iM(6944);
+     var cU = zU(7056);
```

#### 4531. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38877` → after: `L38779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38779) · [Before (L38877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38877)

```diff
-       return MM && rM === OM.n.DEFAULT
+       return UU && XU === cU.o.DEFAULT
```

#### 4532. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38887` → after: `L38789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38789) · [Before (L38887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38887)

```diff
-         this.Gr = 0, this.Cr = 0, this.yVelocity = 0
+         this.oy = 0, this.Dy = 0, this.yVelocity = 0
```

#### 4533. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38890` → after: `L38792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38792) · [Before (L38890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38890)

```diff
-         this.Gr = 0, this.Cr = 0, this.yVelocity = 0
+         this.oy = 0, this.Dy = 0, this.yVelocity = 0
```

#### 4534. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38896-L38897` → after: `L38798-L38799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38798-L38799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38798-L38799) · [Before (L38896-L38897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38896-L38897)

```diff
-       MM.Gr = rM ? Math.min(MM.Gr + aM / jM * SM, aM) : 0, 0 === iM ? MM.Cr = 0 : OM ? MM.Cr = SM : MM.Cr += SM;
-       const LM = Math.min(MM.Cr, jM) / jM,
+       UU.oy = XU ? Math.min(UU.oy + AU / QU * yU, AU) : 0, 0 === zU ? UU.Dy = 0 : cU ? UU.Dy = yU : UU.Dy += yU;
+       const YU = Math.min(UU.Dy, QU) / QU,
```

#### 4535. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38902` → after: `L38804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38804) · [Before (L38902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38902)

```diff
-   39480: (MM, rM, iM) => {
+   39260: (UU, XU, zU) => {
```

#### 4536. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38904-L38905` → after: `L38806-L38807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38806-L38807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38806-L38807) · [Before (L38904-L38905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38904-L38905)

```diff
-       e: () => SM,
-       g: () => OM
+       c: () => yU,
+       d: () => cU
```

#### 4537. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38911` → after: `L38813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38813) · [Before (L38911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38911)

```diff
-   38609: (MM, rM, iM) => {
+   38377: (UU, XU, zU) => {
```

#### 4538. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38913-L38915` → after: `L38815-L38817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38815-L38817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38815-L38817) · [Before (L38913-L38915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38913-L38915)

```diff
-       d: () => nM,
-       g: () => aM,
-       h: () => PM
+       b: () => oU,
+       e: () => AU,
+       i: () => FU
```

#### 4539. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38917` → after: `L38819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38819) · [Before (L38917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38917)

```diff
-     var OM = iM(347),
+     var cU = zU(352),
```

#### 4540. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38919` → after: `L38821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38821) · [Before (L38919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38919)

```diff
-       jM = iM(332);
+       QU = zU(344);
```

#### 4541. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38922` → after: `L38824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38824) · [Before (L38922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38922)

```diff
-     const lM = [2, 0, 1, 115, 6, 3, 168, "i", "g", 29, 4, 8, 255, "length", "undefined", "d", 63, "fromCodePoint", 7, 12, "push", "b", 196, 9, 91, 5, 177, 8191, 88, 13, 14, !1, 105, 190, "h", "c", 36, 157, 42, 10, "a", "e", 174, "f", 163, 62, 222, 130, !0, 106, 120, 31, 209, 46,  … [truncated]
+     const kU = [1, "b", 0, "h", 155, "i", 7, 5, 6, 4, 8, 255, "length", "c", "d", 152, 128, "undefined", void 0, 31, 58, 120, 63, "fromCodePoint", 12, "push", 13, 3, "e", "f", null, "a", 29, 10, 85, 2, 222, "g", 91, 23, 165, 8191, 88, 14, 105, 60, 183, 193, 86, 87, 89, 136, 96, 1 … [truncated]
```

#### 4542. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38925-L38928` → after: `L38827-L38830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38827-L38830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38827-L38830) · [Before (L38925-L38928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38925-L38928)

```diff
-       return MM[lM[13]] = lM[2], typeof QM[MM[lM[1]]] === lM[14] ? QM[MM[lM[1]]] = function(...MM) {
-         for (tM(MM[lM[13]] = lM[2], MM[lM[5]] = '0(^>+?=|1&}3#[@".,)b8t;9P:!A_2XLT]~`cR/wa7vEQ%Ky5IB{UHDusFCVSJOlmoWGfkjMgZhrp<NeYn6xqzi4*$d', MM[lM[0]] = "" + (MM[lM[1]] || ""), MM[-lM[4]] = MM[lM[0]].length, MM[lM[10]] = [], MM[lM[8]] = lM[1], MM[lM[9]] = lM[1], MM[lM[7]] = -lM … [truncated]
-           if (MM[-lM[6]] = MM[lM[5]].indexOf(MM[lM[0]][MM[-lM[3]]]), MM[-lM[6]] !== -lM[2])
-             if (MM[lM[7]] < lM[1]) MM[lM[7]] = MM[-lM[6]];
+       return UU[kU[12]] = kU[0], typeof DU[UU[kU[2]]] === kU[17] ? DU[UU[kU[2]]] = function(...UU) {
+         for (LU(UU[kU[12]] = kU[0], UU[kU[0]] = 'yaBbKFoLSDErmZjTkGCHItdJXqRpeOMnisgNPQAUYc`1V?h+f;x%.wlW}:&[{4)@<*7^("$2#>u|8_]0,=~5!3zv6/9', UU[kU[1]] = "" + (UU[kU[2]] || ""), UU[-kU[4]] = UU[kU[1]].length, UU[kU[9]] = [], UU[kU[7]] = kU[2], UU[kU[8]] = kU[2], UU[kU[6]] = -kU[ … [truncated]
+           if (UU[kU[5]] = UU[kU[0]].indexOf(UU[kU[1]][UU[kU[3]]]), UU[kU[5]] !== -kU[0])
+             if (UU[kU[6]] < kU[2]) UU[kU[6]] = UU[kU[5]];
```

#### 4543. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38930` → after: `L38832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38832) · [Before (L38930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38930)

```diff
-               tM(MM[lM[7]] += MM[-lM[6]] * lM[24], MM[lM[8]] |= MM[lM[7]] << MM[lM[9]], MM[lM[9]] += (MM[lM[7]] & lM[27]) > lM[28] ? lM[29] : lM[30]);
+               LU(UU[kU[6]] += UU[kU[5]] * kU[38], UU[kU[7]] |= UU[kU[6]] << UU[kU[8]], UU[kU[8]] += (UU[kU[6]] & kU[41]) > kU[42] ? kU[26] : kU[43]);
```

#### 4544. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38932-L38936` → after: `L38834-L38838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38834-L38838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38834-L38838) · [Before (L38932-L38936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38932-L38936)

```diff
-                 tM(MM[lM[10]].push(MM[lM[8]] & lM[12]), MM[lM[8]] >>= lM[11], MM[lM[9]] -= lM[11])
-               } while (MM[lM[9]] > lM[18]);
-               MM[lM[7]] = -lM[2]
-             } return MM[lM[7]] > -lM[2] && MM[lM[10]].push((MM[lM[8]] | MM[lM[7]] << MM[lM[9]]) & lM[12]), UM(MM[lM[10]])
-       }(zM[MM[lM[1]]]) : QM[MM[lM[1]]]
+                 LU(UU[kU[9]].push(UU[kU[7]] & kU[11]), UU[kU[7]] >>= kU[10], UU[kU[8]] -= kU[10])
+               } while (UU[kU[8]] > kU[6]);
+               UU[kU[6]] = -kU[0]
+             } return UU[kU[6]] > -kU[0] && UU[kU[9]].push((UU[kU[7]] | UU[kU[6]] << UU[kU[8]]) & kU[11]), BU(UU[kU[9]])
+       }(EU[UU[kU[2]]]) : DU[UU[kU[2]]]
```

#### 4545. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38940` → after: `L38842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38842) · [Before (L38940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38940)

```diff
-       return MM[lM[13]] = lM[2], typeof mM !== lM[14] && mM ? (new mM).decode(new HM(MM[lM[1]])) : typeof hM !== lM[14] && hM ? hM.from(MM[lM[1]]).toString("utf-8") : yM(MM[lM[1]])
+       return UU[kU[12]] = kU[0], typeof NU !== kU[17] && NU ? (new NU).decode(new IU(UU[kU[2]])) : typeof pU !== kU[17] && pU ? pU.from(UU[kU[2]]).toString("utf-8") : gU(UU[kU[2]])
```

#### 4546. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38944-L38945` → after: `L38846-L38847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38846-L38847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38846-L38847) · [Before (L38944-L38945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38944-L38945)

```diff
-     tM(QM = {}, zM = ['"{GH/Z_#"SI`#xD79M*&2YSYr,J', '39kM5q8ch@i"@?m,W%PX|i$(|', 'X~=paZ"[I&=^aA!_2Mt_LU0', "8F]Xon~#hVg;$c7:CMl=V~k|nSfZVA>Pbl4Duew|@VxTn5J,x=D|mw~m)Sa", "k,_<Q`!i>FtpWCRbc#F=", "#hq2kc&7!@", "0#H|`D<{)&/ecVew", "{MX+[uHy=uiS%.MPnL${=O{(*,[AdkcPh%oDU{,7>", "g>d1 … [truncated]
-       var MM, rM, iM, OM = [function() {
+     LU(DU = {}, EU = ["ECVOSzEPAZ^_{KAQ#n^Ow}lYm[_;xq0pU%@K", "*QvK*h_Zal..:kIgPDU.H]+3*@{,ifsGo:B", "th[i/[,mr[_}A4vO/?TDT=cH[[*}a", "(g&S7PgM8r", '%YQW8"Iufm3$T[ze]%~Sgl[Jg@!u#P"Q"(n8>{xMTtx8#p+UiDb', "h*_K9s$oM@9Srj^QFTKu}hAB`*`fZkIc,*d;Kz[a", "&J}>{{DZTm&}>XyJW?dnpA|ZV}Fl;{ze … [truncated]
+       LU(UU[kU[12]] = kU[2], UU[-kU[15]] = [function() {
```

#### 4547. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38953-L38954` → after: `L38855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38855) · [Before (L38953-L38954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38953-L38954)

```diff
-       }];
-       tM(MM = void 0, rM = []);
+       }], UU[kU[1]] = kU[18], UU[kU[13]] = []);
```

#### 4548. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38956` → after: `L38857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38857) · [Before (L38956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38956)

```diff
-         tM(MM = Object, rM[lM[20]]("".__proto__.constructor.name))
+         LU(UU[kU[1]] = Object, UU[kU[13]][kU[25]]("".__proto__.constructor.name))
```

#### 4549. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38958-L38962` → after: `L38859-L38862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38859-L38862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38859-L38862) · [Before (L38958-L38962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38958-L38962)

```diff
-       MM: for (iM = lM[1]; iM < OM[lM[13]]; iM++) try {
-         var SM;
-         for (MM = OM[iM](), SM = lM[1]; SM < rM[lM[13]]; SM++)
-           if (typeof MM[rM[SM]] === lM[14]) continue MM;
-         return MM
+       UU: for (UU[kU[14]] = kU[2]; UU[kU[14]] < UU[-kU[15]][kU[12]]; UU[kU[14]]++) try {
+         for (UU[kU[1]] = UU[-kU[15]][UU[kU[14]]](), UU[kU[16]] = kU[2]; UU[kU[16]] < UU[kU[13]][kU[12]]; UU[kU[16]]++)
+           if (typeof UU[kU[1]][UU[kU[13]][UU[kU[16]]]] === kU[17]) continue UU;
+         return UU[kU[1]]
```

#### 4550. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38964-L39022` → after: `L38864-L38876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38864-L38876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38864-L38876) · [Before (L38964-L39022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L38964-L39022)

```diff
-       return MM || this
-     }() || {}, mM = LM.TextDecoder, HM = LM.Uint8Array, hM = LM.Vz, JM = LM.String || String, dM = LM.Array || Array, yM = function(...MM) {
-       return tM(MM[lM[13]] = lM[1], MM[lM[21]] = new dM(lM[62]), MM[lM[2]] = JM[lM[17]] || JM.fromCharCode, MM[lM[15]] = []),
-         function(rM) {
-           var iM, OM, SM, jM;
-           for (tM(OM = void 0, SM = rM[lM[13]], MM[lM[15]][lM[13]] = lM[1]), jM = lM[1]; jM < SM;) tM(OM = rM[jM++], OM <= lM[61] ? iM = OM : OM <= 223 ? iM = (OM & lM[51]) << lM[4] | rM[jM++] & lM[16] : OM <= 239 ? iM = (15 & OM) << lM[19] | (rM[jM++] & lM[16]) << lM[4] | rM[jM+ … [truncated]
-           return MM[lM[15]].join("")
-         }
-     }()), EM(101) + lM[7] in GM && function() {
-       function MM(...MM) {
-         for (tM(MM[lM[13]] = lM[2], MM[-lM[22]] = 'OTwD:P~b9mf"+=I6[|KrpsnvluF)#dxQJ_NH3;!ta{2XMC}y0($41UWhBLEgeqZAcVzRSkj.Goi5%7&<8`*>,@]/^?Y', MM[lM[21]] = "" + (MM[lM[1]] || ""), MM[lM[5]] = MM[lM[21]].length, MM[lM[15]] = [], MM[lM[25]] = lM[1], MM[-lM[26]] = lM[1], MM[lM[18] … [truncated]
-           if (MM[lM[23]] = MM[-lM[22]].indexOf(MM[lM[21]][MM[lM[11]]]), MM[lM[23]] !== -lM[2])
-             if (MM[lM[18]] < lM[1]) MM[lM[18]] = MM[lM[23]];
-             else {
-               tM(MM[lM[18]] += MM[lM[23]] * lM[24], MM[lM[25]] |= MM[lM[18]] << MM[-lM[26]], MM[-lM[26]] += (MM[lM[18]] & lM[27]) > lM[28] ? lM[29] : lM[30]);
-               do {
- ... (43 more removed lines; see GitHub link above)
+       return UU[kU[1]] || this
+     }() || {}, NU = YU.TextDecoder, IU = YU.Uint8Array, pU = YU.XY, aU = YU.String || String, tU = YU.Array || Array, gU = function(...UU) {
+       return LU(UU[kU[12]] = kU[2], UU[kU[13]] = new tU(kU[16]), UU[kU[14]] = aU[kU[23]] || aU.fromCharCode, UU[kU[19]] = []),
+         function(...XU) {
+           for (LU(XU[kU[12]] = kU[0], XU[kU[0]] = kU[18], XU[-kU[21]] = kU[18], XU[-kU[20]] = XU[kU[2]][kU[12]], UU[kU[19]][kU[12]] = kU[2]), XU[kU[9]] = kU[2]; XU[kU[9]] < XU[-kU[20]];) LU(XU[-kU[21]] = XU[kU[2]][XU[kU[9]]++], XU[-kU[21]] <= kU[73] ? XU[kU[0]] = XU[-kU[21]] : XU … [truncated]
+           return UU[kU[19]].join("")
+         }
+     }()), GU(84) + "Y" in ZU && function(...UU) {
+       function XU() {}
+       UU[kU[12]] = kU[2], LU(UU[kU[26]] = function(...UU) {
+         for (LU(UU[kU[12]] = kU[35], UU[kU[31]] = kU[2], UU[kU[27]] = kU[2], UU[kU[9]] = new XU(kU[2]), UU[kU[32]] = UU[kU[9]], UU[kU[28]] = UU[kU[2]], UU[kU[29]] = UU[kU[0]]); UU[kU[28]] !== kU[30] || UU[kU[29]] !== kU[30];) LU(UU[kU[27]] = (UU[kU[28]] ? UU[kU[28]].val : kU[2])  … [truncated]
+         return UU[kU[31]] && (UU[kU[32]].next = new XU(UU[kU[31]])), UU[kU[9]].next
+       }, console.log(UU[kU[26]]))
```

#### 4551. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39024-L39027` → after: `L38878-L38881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38878-L38881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38878-L38881) · [Before (L39024-L39027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39024-L39027)

```diff
-     const CM = SM()[EM(lM[32])](),
-       eM = SM()[EM(lM[32])](),
-       bM = SM()[EM(lM[32])](),
-       wM = lM[19];
+     const RU = yU()[GU(kU[34])](),
+       PU = yU()[GU(kU[34])](),
+       WU = yU()[GU(kU[34])](),
+       dU = kU[24];
```

#### 4552. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39032-L39037` → after: `L38886-L38891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38886-L38891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38886-L38891) · [Before (L39032-L39037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39032-L39037)

```diff
-     tM(aM = (...MM) => {
-       function rM(...MM) {
-         return MM[lM[13]] = lM[2], typeof QM[MM[lM[1]]] === lM[14] ? QM[MM[lM[1]]] = function(...MM) {
-           for (tM(MM[lM[13]] = lM[2], MM[-lM[36]] = 'uoCAOIpbcQjz*:^rmV@gJ;eE)#|~Z{5,TRhK6/_97&q0d`4vB+lNFfD2$U]Y>yswxn.31t%"}8PkL=<ai[WM(GXH!?S', MM[-lM[33]] = "" + (MM[lM[1]] || ""), MM[lM[35]] = MM[-lM[33]].length, MM[lM[39]] = [], MM[lM[25]] = lM[1], MM[lM[4]] = lM[1], MM[lM[ … [truncated]
-             if (MM[-lM[37]] = MM[-lM[36]].indexOf(MM[-lM[33]][MM[lM[34]]]), MM[-lM[37]] !== -lM[2])
-               if (MM[lM[38]] < lM[1]) MM[lM[38]] = MM[-lM[37]];
+     LU(AU = (UU, XU, zU, cU, yU, AU, FU, oU, YU) => {
+       function NU(UU) {
+         return typeof DU[UU] === kU[17] ? DU[UU] = function(...UU) {
+           for (LU(UU[kU[12]] = kU[0], UU[kU[0]] = 'gCVnuZ>(^%@9M_<fvr+GBKU8:Fs~xH|0&a/6?2;7Rd5[Azyw4DbYki]L=XN}{3*j`c"WPE#!op)1.TQ$,mOqlhtISJe', UU[kU[35]] = "" + (UU[kU[2]] || ""), UU[kU[36]] = UU[kU[35]].length, UU[kU[14]] = [], UU[-kU[39]] = kU[2], UU[kU[40]] = kU[2], UU[kU[37 … [truncated]
+             if (UU[kU[5]] = UU[kU[0]].indexOf(UU[kU[35]][UU[kU[3]]]), UU[kU[5]] !== -kU[0])
+               if (UU[kU[37]] < kU[2]) UU[kU[37]] = UU[kU[5]];
```

#### 4553. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39039` → after: `L38893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38893) · [Before (L39039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39039)

```diff
-                 tM(MM[lM[38]] += MM[-lM[37]] * lM[24], MM[lM[25]] |= MM[lM[38]] << MM[lM[4]], MM[lM[4]] += (MM[lM[38]] & lM[27]) > lM[28] ? lM[29] : lM[30]);
+                 LU(UU[kU[37]] += UU[kU[5]] * kU[38], UU[-kU[39]] |= UU[kU[37]] << UU[kU[40]], UU[kU[40]] += (UU[kU[37]] & kU[41]) > kU[42] ? kU[26] : kU[43]);
```

#### 4554. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39041-L39045` → after: `L38895-L38899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38895-L38899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38895-L38899) · [Before (L39041-L39045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39041-L39045)

```diff
-                   tM(MM[lM[39]].push(MM[lM[25]] & lM[12]), MM[lM[25]] >>= lM[11], MM[lM[4]] -= lM[11])
-                 } while (MM[lM[4]] > lM[18]);
-                 MM[lM[38]] = -lM[2]
-               } return MM[lM[38]] > -lM[2] && MM[lM[39]].push((MM[lM[25]] | MM[lM[38]] << MM[lM[4]]) & lM[12]), UM(MM[lM[39]])
-         }(zM[MM[lM[1]]]) : QM[MM[lM[1]]]
+                   LU(UU[kU[14]].push(UU[-kU[39]] & kU[11]), UU[-kU[39]] >>= kU[10], UU[kU[40]] -= kU[10])
+                 } while (UU[kU[40]] > kU[6]);
+                 UU[kU[37]] = -kU[0]
+               } return UU[kU[37]] > -kU[0] && UU[kU[14]].push((UU[-kU[39]] | UU[kU[37]] << UU[kU[40]]) & kU[11]), BU(UU[kU[14]])
+         }(EU[UU]) : DU[UU]
```

#### 4555. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39047-L39051` → after: `L38901-L38907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38901-L38907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38901-L38907) · [Before (L39047-L39051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39047-L39051)

```diff
-       if (MM[lM[13]] = lM[23], !MM[lM[2]][rM(lM[49]) + rM(107) + rM(108) + rM(109)]) {
-         function hM(...MM) {
-           for (tM(MM[lM[13]] = lM[2], MM[lM[40]] = 'CsMGtg/w9}EXaf=O`)(ei8,FB*d!.To$vZNQ;Lrq|Slz4D>WY]%2JIUx6HV@:~<nPK[5pumR#0hjkAb+&3?y"{_^17c', MM[lM[21]] = "" + (MM[lM[1]] || ""), MM[lM[5]] = MM[lM[21]].length, MM[lM[26]] = [], MM[lM[41]] = lM[1], MM[-lM[42]] = lM[1], MM[lM[18 … [truncated]
-             if (MM[lM[7]] = MM[lM[40]].indexOf(MM[lM[21]][MM[lM[11]]]), MM[lM[7]] !== -lM[2])
-               if (MM[lM[18]] < lM[1]) MM[lM[18]] = MM[lM[7]];
+       if (!XU[NU(kU[48]) + NU(kU[49]) + NU(kU[42]) + NU(kU[50])]) {
+         function WU(UU) {
+           var XU, zU, cU, yU, QU, AU, FU;
+           for (LU(XU = "" + (UU || ""), zU = XU.length, cU = [], yU = kU[2], QU = kU[2], AU = -kU[0]), FU = kU[2]; FU < zU; FU++) {
+             var oU = '&,u8y4./@*{^+5]#ACgL)oRZIp7>v=~eW?Di(3"UlsE1tY<H!caBx}[rJKwPQO|nN%qXk;Tf$M9S`Vh2zmF_dG0b6j:'.indexOf(XU[FU]);
+             if (oU !== -kU[0])
+               if (AU < kU[2]) AU = oU;
```

#### 4556. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39053` → after: `L38909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38909) · [Before (L39053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39053)

```diff
-                 tM(MM[lM[18]] += MM[lM[7]] * lM[24], MM[lM[41]] |= MM[lM[18]] << MM[-lM[42]], MM[-lM[42]] += (MM[lM[18]] & lM[27]) > lM[28] ? lM[29] : lM[30]);
+                 LU(AU += oU * kU[38], yU |= AU << QU, QU += (AU & kU[41]) > kU[42] ? kU[26] : kU[43]);
```

#### 4557. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39055-L39058` → after: `L38911-L38916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38911-L38916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38911-L38916) · [Before (L39055-L39058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39055-L39058)

```diff
-                   tM(MM[lM[26]].push(MM[lM[41]] & lM[12]), MM[lM[41]] >>= lM[11], MM[-lM[42]] -= lM[11])
-                 } while (MM[-lM[42]] > lM[18]);
-                 MM[lM[18]] = -lM[2]
-               } return MM[lM[18]] > -lM[2] && MM[lM[26]].push((MM[lM[41]] | MM[lM[18]] << MM[-lM[42]]) & lM[12]), UM(MM[lM[26]])
+                   LU(cU.push(yU & kU[11]), yU >>= kU[10], QU -= kU[10])
+                 } while (QU > kU[6]);
+                 AU = -kU[0]
+               }
+           }
+           return AU > -kU[0] && cU.push((yU | AU << QU) & kU[11]), BU(cU)
```

#### 4558. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39061-L39062` → after: `L38919-L38920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38919-L38920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38919-L38920) · [Before (L39061-L39062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39061-L39062)

```diff
-         function JM(...MM) {
-           return MM[lM[13]] = lM[2], typeof QM[MM[lM[1]]] === lM[14] ? QM[MM[lM[1]]] = hM(zM[MM[lM[1]]]) : QM[MM[lM[1]]]
+         function eU(UU) {
+           return typeof DU[UU] === kU[17] ? DU[UU] = WU(EU[UU]) : DU[UU]
```

#### 4559. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39066-L39072` → after: `L38924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38924) · [Before (L39066-L39072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39066-L39072)

```diff
-           tM(MM[lM[13]] = lM[1], MM[-lM[47]] = function(...MM) {
-             for (tM(MM[lM[13]] = lM[2], MM[-lM[46]] = lM[1], MM[lM[44]] = {}, MM[lM[35]] = lM[1], MM[-lM[45]] = lM[1], MM[lM[25]] = lM[1], MM[lM[43]] = MM[lM[1]].length), MM[lM[8]] = lM[1]; MM[lM[8]] < MM[lM[43]]; MM[lM[8]]++) {
-               for (tM(MM[lM[44]] = {}, MM[lM[35]] = lM[1], MM[-lM[45]] = lM[2]), MM[-lM[28]] = MM[lM[8]] + lM[2]; MM[-lM[28]] < MM[lM[43]]; MM[-lM[28]]++) MM[lM[1]][MM[lM[8]]].x !== MM[lM[1]][MM[-lM[28]]].x || MM[lM[1]][MM[lM[8]]].y !== MM[lM[1]][MM[-lM[28]]].y ? (MM[lM[1]][MM[lM … [truncated]
-               tM(MM[lM[35]] += MM[-lM[45]], MM[-lM[46]] = Math.max(MM[-lM[46]], MM[lM[35]]))
-             }
-             return MM[-lM[46]]
-           }, console.log(MM[-lM[47]]))
+           UU[kU[12]] = kU[2]
```

#### 4560. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39074` → after: `L38926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38926) · [Before (L39074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39074)

```diff
-         rM(110) in GM && dM(), MM[lM[2]][JM(111) + JM(112) + JM(113)] = MM[lM[18]]
+         eU(90) in ZU && CU(), XU[eU(93) + eU(94) + eU(95)] = oU
```

#### 4561. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39076` → after: `L38928-L38930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38928-L38930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38928-L38930) · [Before (L39076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39076)

```diff
-       if (tM(MM[lM[2]][rM(114) + rM(lM[3]) + rM(116)] = lM[48], MM[lM[2]][rM(lM[49]) + rM(117) + rM(118) + rM(119)] = MM[lM[2]][rM(lM[50]) + rM(lM[58]) + rM(lM[59])], MM[lM[23]] = MM[lM[10]]), MM[lM[10]] === lM[1] && MM[lM[25]] !== lM[1]) {
+       LU(XU[NU(kU[48]) + NU(kU[49]) + NU(kU[42]) + NU(kU[50])] = !0, XU[NU(kU[48]) + NU(kU[52]) + NU(97) + NU(98)] = XU[NU(kU[57]) + NU(kU[58]) + NU(kU[59])]);
+       let IU = yU;
+       if (yU === kU[2] && AU !== kU[2]) {
```

#### 4562. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39078-L39080` → after: `L38932-L38934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38932-L38934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38932-L38934) · [Before (L39078-L39080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39078-L39080)

```diff
-           for (tM(MM[lM[13]] = lM[2], MM[lM[2]] = 'OkoGmdb)[0:q?vZui&R2]x;F#1@5`=e*|!Ejy4Dr,n^gK%UT6pVCc~wNXL}+_Wz>h"B98Y/HM({IQ<l$Js73.fASPta', MM[lM[50]] = "" + (MM[lM[1]] || ""), MM[lM[35]] = MM[lM[50]].length, MM[lM[51]] = [], MM[lM[41]] = lM[1], MM[lM[4]] = lM[1], MM[-lM[53] … [truncated]
-             if (MM[lM[23]] = MM[lM[2]].indexOf(MM[lM[50]][MM[lM[52]]]), MM[lM[23]] !== -lM[2])
-               if (MM[-lM[53]] < lM[1]) MM[-lM[53]] = MM[lM[23]];
+           for (LU(UU[kU[12]] = kU[0], UU[kU[0]] = '{FHtkDRsAVnbCoJhUaNPgEmqcZIeQplXiGWfMKB%LOTS]jYdr.@8([:w2z`y7#;^|1>)5!x?u~"+/*<&v9$36}0,_=4', UU[kU[1]] = "" + (UU[kU[2]] || ""), UU[kU[27]] = UU[kU[1]].length, UU[kU[14]] = [], UU[kU[7]] = kU[2], UU[kU[8]] = kU[2], UU[-kU[7]] =  … [truncated]
+             if (UU[kU[5]] = UU[kU[0]].indexOf(UU[kU[1]][UU[-kU[51]]]), UU[kU[5]] !== -kU[0])
+               if (UU[-kU[7]] < kU[2]) UU[-kU[7]] = UU[kU[5]];
```

#### 4563. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39082` → after: `L38936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38936) · [Before (L39082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39082)

```diff
-                 tM(MM[-lM[53]] += MM[lM[23]] * lM[24], MM[lM[41]] |= MM[-lM[53]] << MM[lM[4]], MM[lM[4]] += (MM[-lM[53]] & lM[27]) > lM[28] ? lM[29] : lM[30]);
+                 LU(UU[-kU[7]] += UU[kU[5]] * kU[38], UU[kU[7]] |= UU[-kU[7]] << UU[kU[8]], UU[kU[8]] += (UU[-kU[7]] & kU[41]) > kU[42] ? kU[26] : kU[43]);
```

#### 4564. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39084-L39087` → after: `L38938-L38941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38938-L38941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38938-L38941) · [Before (L39084-L39087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39084-L39087)

```diff
-                   tM(MM[lM[51]].push(MM[lM[41]] & lM[12]), MM[lM[41]] >>= lM[11], MM[lM[4]] -= lM[11])
-                 } while (MM[lM[4]] > lM[18]);
-                 MM[-lM[53]] = -lM[2]
-               } return MM[-lM[53]] > -lM[2] && MM[lM[51]].push((MM[lM[41]] | MM[-lM[53]] << MM[lM[4]]) & lM[12]), UM(MM[lM[51]])
+                   LU(UU[kU[14]].push(UU[kU[7]] & kU[11]), UU[kU[7]] >>= kU[10], UU[kU[8]] -= kU[10])
+                 } while (UU[kU[8]] > kU[6]);
+                 UU[-kU[7]] = -kU[0]
+               } return UU[-kU[7]] > -kU[0] && UU[kU[14]].push((UU[kU[7]] | UU[-kU[7]] << UU[kU[8]]) & kU[11]), BU(UU[kU[14]])
```

#### 4565. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39090-L39091` → after: `L38944-L38945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38944-L38945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38944-L38945) · [Before (L39090-L39091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39090-L39091)

```diff
-         function EM(...MM) {
-           return MM[lM[13]] = lM[2], typeof QM[MM[lM[1]]] === lM[14] ? QM[MM[lM[1]]] = yM(zM[MM[lM[1]]]) : QM[MM[lM[1]]]
+         function qU(UU) {
+           return typeof DU[UU] === kU[17] ? DU[UU] = wU(EU[UU]) : DU[UU]
```

#### 4566. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39095-L39109` → after: `L38949-L38989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38949-L38989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38949-L38989) · [Before (L39095-L39109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39095-L39109)

```diff
-           MM[lM[13]] = lM[1]
-         }
-         EM(123) in GM && CM(), MM[lM[23]] = lM[2]
-       }
-       const iM = MM[lM[23]] < lM[1] ? -MM[lM[25]] : MM[lM[25]],
-         OM = MM[lM[10]] !== lM[1] ? Math[lM[57]] / lM[10] : Math[lM[57]] / lM[0],
-         SM = MM[lM[18]] + iM * OM,
-         aM = jM[lM[15]][rM(126)](MM[lM[2]][rM(lM[50]) + rM(lM[58]) + rM(lM[59])], SM),
-         PM = MM[lM[11]] / lM[60],
-         nM = aM * (lM[2] - Math[rM(lM[61])](-wM * PM)),
-         LM = MM[lM[5]][rM(lM[62]) + "te"] * PM,
-         mM = jM[lM[15]][rM(lM[63])](nM, -LM, LM);
-       MM[lM[2]][rM(lM[50]) + rM(lM[58]) + rM(lM[59])] = (MM[lM[2]][rM(lM[50]) + rM(lM[58]) + rM(lM[59])] + mM) % (Math[lM[57]] * lM[0]);
-       const HM = jM[lM[15]][rM(lM[63])](Math[rM(lM[47])](aM) / (Math[lM[57]] / lM[0]), lM[1], lM[2]);
-       MM[lM[23]] !== lM[1] ? tM(MM[lM[0]].heading = MM[lM[23]] > lM[1] ? MM[lM[2]][rM(lM[50]) + rM(lM[58]) + rM(lM[59])] : MM[lM[2]][rM(lM[50]) + rM(lM[58]) + rM(lM[59])] + Math[lM[57]], MM[lM[0]][lM[64]] = MM[lM[4]] * Math[rM(lM[47])](MM[lM[23]]) * (lM[2] - MM[lM[5]][rM(131) + r … [truncated]
+           function XU(...UU) {
+             return UU[kU[12]] = kU[0], typeof DU[UU[kU[2]]] === kU[17] ? DU[UU[kU[2]]] = function(...UU) {
+               for (LU(UU[kU[12]] = kU[0], UU[-kU[54]] = '5EDtdhHOFJZp4}"gb~QkiS`s]a=76zV>n#l^)0L3*_2?N!(|XWe;$1T&uCfYvmqPrxo<@G,%UBj9Mw{R+8y.[/KIAc:', UU[kU[1]] = "" + (UU[kU[2]] || ""), UU[kU[53]] = UU[kU[1]].length, UU[-kU[52]] = [], UU[kU[28]] = kU[2], UU[kU[29]] = kU[2], UU[k … [truncated]
+                 if (UU[kU[55]] = UU[-kU[54]].indexOf(UU[kU[1]][UU[-kU[47]]]), UU[kU[55]] !== -kU[0])
+                   if (UU[kU[37]] < kU[2]) UU[kU[37]] = UU[kU[55]];
+                   else {
+                     LU(UU[kU[37]] += UU[kU[55]] * kU[38], UU[kU[28]] |= UU[kU[37]] << UU[kU[29]], UU[kU[29]] += (UU[kU[37]] & kU[41]) > kU[42] ? kU[26] : kU[43]);
+                     do {
+                       LU(UU[-kU[52]].push(UU[kU[28]] & kU[11]), UU[kU[28]] >>= kU[10], UU[kU[29]] -= kU[10])
+                     } while (UU[kU[29]] > kU[6]);
+                     UU[kU[37]] = -kU[0]
+                   } return UU[kU[37]] > -kU[0] && UU[-kU[52]].push((UU[kU[28]] | UU[kU[37]] << UU[kU[29]]) & kU[11]), BU(UU[-kU[52]])
+             }(EU[UU[kU[2]]]) : DU[UU[kU[2]]]
+           }
+           UU[kU[12]] = kU[2];
+           const zU = require("path"),
+ ... (25 more added lines; see GitHub link above)
```

#### 4567. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39112-L39115` → after: `L38992-L38995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38992-L38995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38992-L38995) · [Before (L39112-L39115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39112-L39115)

```diff
-         return MM[lM[13]] = lM[2], typeof QM[MM[lM[1]]] === lM[14] ? QM[MM[lM[1]]] = function(...MM) {
-           for (tM(MM[lM[13]] = lM[2], MM[lM[2]] = 'uEJNZrQmXMUfHWKTkPaRjpeqn<vGV+].2[^8@3}5|:_#=`x!/L7Ds6FYCIBdco;)9yh%w1*?&g>{",zlS(AO4i$0~bt', MM[lM[0]] = "" + (MM[lM[1]] || ""), MM[lM[35]] = MM[lM[0]].length, MM[lM[10]] = [], MM[-lM[67]] = lM[1], MM[-lM[68]] = lM[1], MM[lM[66] … [truncated]
-             if (MM[lM[65]] = MM[lM[2]].indexOf(MM[lM[0]][MM[lM[11]]]), MM[lM[65]] !== -lM[2])
-               if (MM[lM[66]] < lM[1]) MM[lM[66]] = MM[lM[65]];
+         return UU[kU[12]] = kU[0], typeof DU[UU[kU[2]]] === kU[17] ? DU[UU[kU[2]]] = function(...UU) {
+           for (LU(UU[kU[12]] = kU[0], UU[kU[0]] = 'k<]E7pAOmLJ0Sc#nM{Tx!=I,^jN9(V3|tr)b?weQW6@aUKifs>Zqg2B/G5o"hF~Y:&.vd1P;X[_l%yCRzH84*`$}+uD', UU[kU[1]] = "" + (UU[kU[2]] || ""), UU[-kU[64]] = UU[kU[1]].length, UU[kU[65]] = [], UU[kU[7]] = kU[2], UU[kU[29]] = kU[2], UU[kU[37]]  … [truncated]
+             if (UU[-kU[63]] = UU[kU[0]].indexOf(UU[kU[1]][UU[kU[10]]]), UU[-kU[63]] !== -kU[0])
+               if (UU[kU[37]] < kU[2]) UU[kU[37]] = UU[-kU[63]];
```

#### 4568. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39117` → after: `L38997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38997) · [Before (L39117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39117)

```diff
-                 tM(MM[lM[66]] += MM[lM[65]] * lM[24], MM[-lM[67]] |= MM[lM[66]] << MM[-lM[68]], MM[-lM[68]] += (MM[lM[66]] & lM[27]) > lM[28] ? lM[29] : lM[30]);
+                 LU(UU[kU[37]] += UU[-kU[63]] * kU[38], UU[kU[7]] |= UU[kU[37]] << UU[kU[29]], UU[kU[29]] += (UU[kU[37]] & kU[41]) > kU[42] ? kU[26] : kU[43]);
```

#### 4569. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39119-L39168` → after: `L38999-L39011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R38999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L38999-L39011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L38999-L39011) · [Before (L39119-L39168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39119-L39168)

```diff
-                   tM(MM[lM[10]].push(MM[-lM[67]] & lM[12]), MM[-lM[67]] >>= lM[11], MM[-lM[68]] -= lM[11])
-                 } while (MM[-lM[68]] > lM[18]);
-                 MM[lM[66]] = -lM[2]
-               } return MM[lM[66]] > -lM[2] && MM[lM[10]].push((MM[-lM[67]] | MM[lM[66]] << MM[-lM[68]]) & lM[12]), UM(MM[lM[10]])
-         }(zM[MM[lM[1]]]) : QM[MM[lM[1]]]
-       }
-       MM[lM[13]] = lM[0], rM(134) in GM && function(...MM) {
-         MM[lM[13]] = lM[1];
-         const rM = require("big-integer");
-         tM(MM[-lM[69]] = class {
-           static randomPrime(...MM) {
-             MM[lM[13]] = lM[2];
-             const iM = rM.one.shiftLeft(MM[lM[1]] - lM[2]),
-               OM = rM.one.shiftLeft(MM[lM[1]]).prev();
-             for (; lM[48];) {
-               let MM = rM.randBetween(iM, OM);
- ... (34 more removed lines; see GitHub link above)
+                   LU(UU[kU[65]].push(UU[kU[7]] & kU[11]), UU[kU[7]] >>= kU[10], UU[kU[29]] -= kU[10])
+                 } while (UU[kU[29]] > kU[6]);
+                 UU[kU[37]] = -kU[0]
+               } return UU[kU[37]] > -kU[0] && UU[kU[65]].push((UU[kU[7]] | UU[kU[37]] << UU[kU[29]]) & kU[11]), BU(UU[kU[65]])
+         }(EU[UU[kU[2]]]) : DU[UU[kU[2]]]
+       }
+       UU[kU[12]] = kU[35], XU(113) + "u" in ZU && function(...UU) {
+         LU(UU[kU[12]] = kU[2], UU[-kU[69]] = function(...XU) {
+           return LU(XU[kU[12]] = kU[35], XU[kU[35]] = [], XU[-kU[66]] = XU[kU[2]].length, XU[kU[2]].sort(((UU, XU) => UU - XU)), UU[-kU[45]](XU[kU[35]], [], kU[2], XU[-kU[66]], XU[kU[2]], XU[kU[0]])), XU[kU[35]]
+         }, UU[-kU[45]] = function(...XU) {
+           if (LU(XU[kU[12]] = kU[8], XU[-kU[68]] = kU[30]), !(XU[kU[7]] < kU[2])) {
+             if (XU[kU[7]] === kU[2]) return XU[kU[2]].push(XU[kU[0]]);
+             for (XU[-kU[67]] = XU[kU[35]]; XU[-kU[67]] < XU[kU[27]] && !(XU[kU[9]][XU[-kU[67]]] > XU[kU[7]]); XU[-kU[67]]++) XU[-kU[67]] > XU[kU[35]] && XU[kU[9]][XU[-kU[67]]] === XU[kU[9]][XU[-kU[67]] - kU[0]] || LU(XU[-kU[68]] = Array.from(XU[kU[0]]), XU[-kU[68]].push(XU[kU[9]] … [truncated]
```

#### 4570. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39170` → after: `L39013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R39013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L39013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L39013) · [Before (L39170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39170)

```diff
-         }, module.exports = MM[-lM[69]])
+         }, console.log(UU[-kU[69]]))
```

#### 4571. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39172-L39180` → after: `L39015-L39023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R39015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L39015-L39023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L39015-L39023) · [Before (L39172-L39180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39172-L39180)

```diff
-       const iM = MM[lM[2]][rM(135) + rM(136) + rM(137) + rM(138)],
-         OM = MM[lM[1]].GMM;
-       return jM[lM[15]][rM(lM[68])](iM + jM[lM[15]][rM(140)](iM, MM[lM[2]][rM(141) + rM(142) + rM(143)]) * OM, Math[lM[57]] * lM[0])
-     }), nM = (MM, rM, iM, OM) => {
-       function jM(...MM) {
-         return MM[lM[13]] = lM[2], typeof QM[MM[lM[1]]] === lM[14] ? QM[MM[lM[1]]] = function(...MM) {
-           for (tM(MM[lM[13]] = lM[2], MM[lM[2]] = '=^*_917M@:QdU<Fo/T#PDc8X.iS(k;pCGeJZ)g2arm]W+V}>jLvw%|HO$hKy4x,stnz0l35qE"NR[YBu&6fA!?b{I~`', MM[lM[21]] = "" + (MM[lM[1]] || ""), MM[lM[35]] = MM[lM[21]].length, MM[lM[10]] = [], MM[lM[25]] = lM[1], MM[-lM[72]] = lM[1], MM[-lM[7 … [truncated]
-             if (MM[lM[23]] = MM[lM[2]].indexOf(MM[lM[21]][MM[lM[70]]]), MM[lM[23]] !== -lM[2])
-               if (MM[-lM[71]] < lM[1]) MM[-lM[71]] = MM[lM[23]];
+       const zU = UU[kU[0]][XU(114) + XU(115) + XU(116) + XU(117)],
+         cU = UU[kU[2]].oXU;
+       return QU[kU[14]][XU(118)](zU + QU[kU[14]][XU(119)](zU, UU[kU[0]][XU(kU[21]) + XU(121) + XU(122)]) * cU, Math[kU[56]] * kU[35])
+     }), oU = (...UU) => {
+       function XU(UU) {
+         return typeof DU[UU] === kU[17] ? DU[UU] = function(...UU) {
+           for (LU(UU[kU[12]] = kU[0], UU[kU[0]] = 'DbqVNmkCtFHJiELBhluj@v<U+f:>Tc79nprsYzW|&%aSGZ}dA1/IK5R?68,_gPw)(MXO$eoy!4=32.x;"^[0#~]*{`Q', UU[kU[1]] = "" + (UU[kU[2]] || ""), UU[kU[27]] = UU[kU[1]].length, UU[kU[9]] = [], UU[kU[7]] = kU[2], UU[kU[8]] = kU[2], UU[kU[6]] = -k … [truncated]
+             if (UU[kU[55]] = UU[kU[0]].indexOf(UU[kU[1]][UU[-kU[70]]]), UU[kU[55]] !== -kU[0])
+               if (UU[kU[6]] < kU[2]) UU[kU[6]] = UU[kU[55]];
```

#### 4572. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39182` → after: `L39025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R39025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L39025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L39025) · [Before (L39182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39182)

```diff
-                 tM(MM[-lM[71]] += MM[lM[23]] * lM[24], MM[lM[25]] |= MM[-lM[71]] << MM[-lM[72]], MM[-lM[72]] += (MM[-lM[71]] & lM[27]) > lM[28] ? lM[29] : lM[30]);
+                 LU(UU[kU[6]] += UU[kU[55]] * kU[38], UU[kU[7]] |= UU[kU[6]] << UU[kU[8]], UU[kU[8]] += (UU[kU[6]] & kU[41]) > kU[42] ? kU[26] : kU[43]);
```

#### 4573. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39184-L39197` → after: `L39027-L39038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R39027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L39027-L39038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L39027-L39038) · [Before (L39184-L39197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39184-L39197)

```diff
-                   tM(MM[lM[10]].push(MM[lM[25]] & lM[12]), MM[lM[25]] >>= lM[11], MM[-lM[72]] -= lM[11])
-                 } while (MM[-lM[72]] > lM[18]);
-                 MM[-lM[71]] = -lM[2]
-               } return MM[-lM[71]] > -lM[2] && MM[lM[10]].push((MM[lM[25]] | MM[-lM[71]] << MM[-lM[72]]) & lM[12]), UM(MM[lM[10]])
-         }(zM[MM[lM[1]]]) : QM[MM[lM[1]]]
-       }
-       jM(144) + "7" in GM && function(...MM) {
-         MM[lM[13]] = lM[1]
-       }(), tM(SM()[jM(lM[78])](CM, MM[lM[77]][lM[1]], lM[1], MM[lM[77]][lM[0]]), SM()[jM(lM[78])](eM, lM[1], lM[1], lM[2]), SM().Md(eM, eM, SM()[jM(146)], rM));
-       const aM = SM()[jM(147)](CM, eM);
-       SM().tm(bM, CM, eM, -aM);
-       const PM = OM / lM[60],
-         nM = lM[2] - Math[jM(148)](-iM * PM);
-       tM(SM()[jM(149)](bM, bM, -nM * MM.vz / PM), MM[jM(150) + jM(151)](bM))
+                   LU(UU[kU[9]].push(UU[kU[7]] & kU[11]), UU[kU[7]] >>= kU[10], UU[kU[8]] -= kU[10])
+                 } while (UU[kU[8]] > kU[6]);
+                 UU[kU[6]] = -kU[0]
+               } return UU[kU[6]] > -kU[0] && UU[kU[9]].push((UU[kU[7]] | UU[kU[6]] << UU[kU[8]]) & kU[11]), BU(UU[kU[9]])
+         }(EU[UU]) : DU[UU]
+       }
+       UU[kU[12]] = kU[9], LU(yU()[XU(kU[72])](RU, UU[kU[2]][kU[71]][kU[2]], kU[2], UU[kU[2]][kU[71]][kU[35]]), yU()[XU(kU[72])](PU, kU[2], kU[2], kU[0]), yU().ta(PU, PU, yU()[XU(124)], UU[kU[0]]));
+       const zU = yU()[XU(125)](RU, PU);
+       yU().gp(WU, RU, PU, -zU);
+       const cU = UU[kU[27]] / kU[60],
+         QU = kU[0] - Math[XU(kU[67])](-UU[kU[35]] * cU);
+       LU(yU()[XU(kU[73])](WU, WU, -QU * UU[kU[2]].xE / cU), UU[kU[2]][XU(kU[16]) + XU(129)](WU))
```

#### 4574. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39200` → after: `L39041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R39041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L39041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L39041) · [Before (L39200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39200)

```diff
-   39384: (MM, rM, iM) => {
+   39170: (UU, XU, zU) => {
```

#### 4575. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39202` → after: `L39043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R39043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L39043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L39043) · [Before (L39202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39202)

```diff
-       e: () => nM,
+       d: () => oU,
```

#### 4576. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39219` → after: `L39060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R39060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L39060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L39060) · [Before (L39219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39219)

```diff
-           const PM = Array.isArray(aM) ? aM : jM;
+           const FU = Array.isArray(AU) ? AU : QU;
```

#### 4577. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39237` → after: `L39078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R39078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L39078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L39078) · [Before (L39237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39237)

```diff
-       return MM.FN && MM.vz > 0 && MM.depenetrate && null === MM.XN
+       return UU.hV && UU.xE > 0 && UU.depenetrate && null === UU.fn
```

#### 4578. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39260` → after: `L39101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R39101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L39101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L39101) · [Before (L39260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39260)

```diff
-   38590: (MM, rM, iM) => {
+   38361: (UU, XU, zU) => {
```

#### 4579. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39262-L39263` → after: `L39103-L39104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R39103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L39103-L39104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L39103-L39104) · [Before (L39262-L39263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39262-L39263)

```diff
-       e: () => SM,
-       i: () => aM
+       c: () => yU,
+       d: () => AU
```

#### 4580. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39265` → after: `L39106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R39106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L39106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L39106) · [Before (L39265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39265)

```diff
-     var OM = iM(670);
+     var cU = zU(698);
```

#### 4581. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39276` → after: `L39117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R39117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L39117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L39117) · [Before (L39276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39276)

```diff
-         return null !== (rM = jM[this.suffixMapping[MM]]) && void 0 !== rM ? rM : []
+         return null !== (XU = QU[this.suffixMapping[UU]]) && void 0 !== XU ? XU : []
```

#### 4582. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39283` → after: `L39124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R39124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L39124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L39124) · [Before (L39283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39283)

```diff
-             id: (0, OM.e)()
+             id: (0, cU.d)()
```

#### 4583. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39295` → after: `L39136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R39136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L39136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L39136) · [Before (L39295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39295)

```diff
-           rM[iM] = (null !== (QM = rM[iM]) && void 0 !== QM ? QM : 0) + 1, rM[iM] >= nM && SM.splice(SM.indexOf(iM), 1)
+           XU[zU] = (null !== (DU = XU[zU]) && void 0 !== DU ? DU : 0) + 1, XU[zU] >= oU && yU.splice(yU.indexOf(zU), 1)
```

#### 4584. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39334` → after: `L39175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R39175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L39175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L39175) · [Before (L39334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39334)

```diff
-   39046: MM => {
+   38813: UU => {
```

#### 4585. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39337` → after: `L39178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R39178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L39178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L39178) · [Before (L39337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39337)

```diff
-   38954: MM => {
+   38725: UU => {
```

#### 4586. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39340` → after: `L39181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R39181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L39181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L39181) · [Before (L39340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39340)

```diff
-   38941: MM => {
+   38714: UU => {
```

#### 4587. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39343` → after: `L39184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R39184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L39184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L39184) · [Before (L39343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39343)

```diff
-   38961: MM => {
+   38728: UU => {
```

#### 4588. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39346` → after: `L39187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R39187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L39187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L39187) · [Before (L39346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39346)

```diff
-   38935: MM => {
+   38708: UU => {
```

#### 4589. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39349` → after: `L39190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R39190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L39190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L39190) · [Before (L39349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39349)

```diff
-   38950: MM => {
+   38721: UU => {
```

#### 4590. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39352` → after: `L39193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R39193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L39193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L39193) · [Before (L39352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39352)

```diff
-   38930: (MM, rM, iM) => {
+   38700: (UU, XU, zU) => {
```

#### 4591. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39356-L39357` → after: `L39198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R39198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L39198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L39198) · [Before (L39356-L39357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39356-L39357)

```diff
-       l: () => SM,
-       o: () => PM,
+       m: () => FU,
```

#### 4592. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39370` → after: `L39211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R39211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L39211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L39211) · [Before (L39370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39370)

```diff
-         sQ: 512,
+         uD: 512,
```

#### 4593. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39388` → after: `L39229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R39229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L39229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L39229) · [Before (L39388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L39388)

```diff
-         ["held", OM.sQ],
+         ["held", cU.uD],
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/89.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/89.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/89.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/89.js#L4)

```diff
-   5069: (MM, rM, iM) => {
+   5179: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/89.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/89.js#L6)

```diff
-       e: () => Ar,
+       d: () => VX,
+       f: () => Yz,
+       g: () => bX,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L16-L18` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/89.js#L18) · [Before (L16-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/89.js#L16-L18)

```diff
-       F: () => Qi,
-       J: () => Br,
-       L: () => Zr
+       F: () => fX
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/89.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/89.js#L20)

```diff
-     var OM = iM(3185);
+     var cU = zU(3169);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/89.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/89.js#L59)

```diff
-       return MM === `function ${rM}() { [native code] }` || MM === `function ${rM}() {\n    [native code]\n}`
+       return UU === `function ${XU}() { [native code] }` || UU === `function ${XU}() {\n    [native code]\n}`
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L113` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/89.js#L113) · [Before (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/89.js#L113)

```diff
-       sM = MM >= 3 ? WM : aM, pM = MM % 3
+       SU = UU >= 3 ? OU : AU, qU = UU % 3
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L136-L137` → after: `L136-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L136-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/89.js#L136-L137) · [Before (L136-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/89.js#L136-L137)

```diff
-         OM = iM.length > qM ? qM : iM.length,
-         SM = `#${function(MM,rM){const iM=sM(NM,XM,[rM]);if(null===iM)return"s";const OM=iM[1];if("ProxyObject"===OM)return"p";if(""!==OM)return sM(xM,OM,["bound "])?"b":"n";try{const rM=fM(MM,"name"),iM=void 0!==rM&&sM(YM,rM,["value"])?rM.value:void 0;return"string"===typeof iM& … [truncated]
+         cU = zU.length > KU ? KU : zU.length,
+         yU = `#${function(UU,XU){const zU=SU(vU,xU,[XU]);if(null===zU)return"s";const cU=zU[1];if("ProxyObject"===cU)return"p";if(""!==cU)return SU(sU,cU,["bound "])?"b":"n";try{const XU=HU(UU,"name"),zU=void 0!==XU&&SU(MU,XU,["value"])?XU.value:void 0;return"string"===typeof zU& … [truncated]
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L143-L145` → after: `L143-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L143-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/89.js#L143-L145) · [Before (L143-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/89.js#L143-L145)

```diff
-       return null === rM ? MM : rM[1]
-     }
-     var rr = iM(3205);
+       return null === XU ? UU : XU[1]
+     }
+     var XX = zU(3189);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L163` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/89.js#L163) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/89.js#L163)

```diff
-         native: new RegExp(`^function (get )?${iM}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
+         native: new RegExp(`^function (get )?${zU}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L279` → after: `L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/89.js#L279) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/89.js#L279)

```diff
-         return Mi(iM, MM) ? pr(MM, !0) : `${pr(MM,!1)}${cM(iM??rM)}`
+         return Uz(zU, UU) ? qX(UU, !0) : `${qX(UU,!1)}${hU(zU??XU)}`
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L281` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/89.js#L281) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/89.js#L281)

```diff
-         return `${pr(MM,!1)}${cM(void 0)}`
+         return `${qX(UU,!1)}${hU(void 0)}`
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/89.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/89.js#L290)

```diff
-       return `wh:${iM}${rM?"-dbg":""}:${OM}`
+       return `wh:${zU}${XU?"-dbg":""}:${cU}`
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L318` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/89.js#L318) · [Before (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/89.js#L318)

```diff
-       return new Set(Ur.filter((rM => rM.tier === MM)).map((MM => `wh:${MM.code}`)))
+       return new Set(BX.filter((XU => XU.tier === UU)).map((UU => `wh:${UU.code}`)))
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L441` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/89.js#L441) · [Before (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/89.js#L441)

```diff
-       const rM = `wh:${MM.code}`;
+       const XU = `wh:${UU.code}`;
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L444` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/89.js#L444) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/89.js#L444)

```diff
-         return `${rM}${cM(Pi(MM))}`
+         return `${XU}${hU(Fz(UU))}`
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/89.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/89.js#L446)

```diff
-         return `${rM}${cM(void 0)}`
+         return `${XU}${hU(void 0)}`
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L481` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/89.js#L481) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/89.js#L481)

```diff
-             rM((0, rr.l)());
+             XU((0, XX.q)());
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L503-L504` → after: `L503-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/89.js#L503-L504) · [Before (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/89.js#L503-L504)

```diff
-       const MM = (0, OM.t)();
-       return null === MM ? null : `wn:${MM}`
+       const UU = (0, cU.r)();
+       return null === UU ? null : `wn:${UU}`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/90.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/90.js` (1043 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L4)

```diff
-   34915: (MM, rM, iM) => {
+   34740: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L8-L9)

```diff
-     var OM = iM(44),
-       SM = iM(1116),
+     var cU = zU(61),
+       yU = zU(1106),
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L11-L16` → after: `L11-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L11-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L11-L16) · [Before (L11-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L11-L16)

```diff
-       aM = iM(1188),
-       PM = iM(1398),
-       nM = iM(2190),
-       QM = iM(1520),
-       zM = iM(1130),
-       LM = iM(1303);
+       AU = zU(1193),
+       FU = zU(1390),
+       oU = zU(2136),
+       DU = zU(1494),
+       EU = zU(1115),
+       YU = zU(1305);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L29` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L29) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L29)

```diff
-       } = (0, aM.A)(), JM = (0, zM.i)(), dM = [];
+       } = (0, AU.I)(), aU = (0, EU.h)(), tU = [];
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L34)

```diff
-         if (MM && MM.title === (null !== (yM = jM.section) && void 0 !== yM ? yM : null)) MM.items.push(jM);
+         if (UU && UU.title === (null !== (gU = QU.section) && void 0 !== gU ? gU : null)) UU.items.push(QU);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L36)

```diff
-           title: null !== (lM = jM.section) && void 0 !== lM ? lM : null,
+           title: null !== (kU = QU.section) && void 0 !== kU ? kU : null,
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L65)

```diff
-                   children: null !== (rM = MM.iconElement) && void 0 !== rM ? rM : (0, LM.jsx)(PM.b, {
+                   children: null !== (XU = UU.iconElement) && void 0 !== XU ? XU : (0, YU.jsx)(FU.d, {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L70` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L70) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L70)

```diff
-                 }), MM.redDot && (0, LM.jsx)(nM.d, {
+                 }), UU.redDot && (0, YU.jsx)(oU.c, {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L76` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L76) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L76)

```diff
-           }, null !== (iM = MM.title) && void 0 !== iM ? iM : rM)
+           }, null !== (zU = UU.title) && void 0 !== zU ? zU : XU)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L78` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L78) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L78)

```diff
-           ...(0, QM.fb)(),
+           ...(0, DU.W)(),
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L84)

```diff
-             children: (0, LM.jsx)(PM.b, {
+             children: (0, YU.jsx)(FU.d, {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L89)

```diff
-           }), (0, LM.jsx)(PM.b, {
+           }), (0, YU.jsx)(FU.d, {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L96-L108` → after: `L96-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L96-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L96-L108) · [Before (L96-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L96-L108)

```diff
-     var HM = iM(2798),
-       hM = iM(1142),
-       JM = iM(2640),
-       dM = iM(3508),
-       yM = iM(83),
-       lM = iM(2039),
-       EM = iM(2385),
-       UM = iM(2389),
-       GM = iM(1763),
-       CM = iM(1396),
-       eM = iM(5401),
-       bM = iM(19),
-       wM = iM(34920);
+     var IU = zU(2818),
+       pU = zU(1129),
+       aU = zU(2616),
+       tU = zU(3478),
+       gU = zU(97),
+       kU = zU(2005),
+       GU = zU(2365),
+       BU = zU(2372),
+       ZU = zU(1726),
+       RU = zU(1384),
+       PU = zU(5540),
+       WU = zU(27),
+       dU = zU(34748);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L116` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L116) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L116)

```diff
-       } = (0, bM.m)(["clientEscMenuOptions"]), [SM, jM] = (0, OM.useState)(!1), [aM, PM] = (0, OM.useState)(!1), [nM, zM] = (0, OM.useState)(6400), [mM, HM] = (0, OM.useState)(3600), [hM, JM] = (0, OM.useState)(!1), [dM, yM] = (0, OM.useState)(!1);
+       } = (0, WU.q)(["clientEscMenuOptions"]), [yU, QU] = (0, cU.useState)(!1), [AU, FU] = (0, cU.useState)(!1), [oU, EU] = (0, cU.useState)(6400), [NU, IU] = (0, cU.useState)(3600), [pU, aU] = (0, cU.useState)(!1), [tU, gU] = (0, cU.useState)(!1);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L119` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L119)

```diff
-         const rM = "screenshot" === MM ? PM : jM;
+         const XU = "screenshot" === UU ? FU : QU;
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L134` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L134) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L134)

```diff
-         children: [(0, LM.jsx)(eM.c, {
+         children: [(0, YU.jsx)(PU.e, {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L138` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L138) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L138)

```diff
-             bM.d.setClientEscMenuOptions({
+             WU.e.setClientEscMenuOptions({
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L140` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L140) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L140)

```diff
-             }), rM((() => eM.j))
+             }), XU((() => PU.k))
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L143)

```diff
-         }), wM.devTools.supports("ambientLight") && (0, LM.jsx)(eM.h, {
+         }), dU.devTools.supports("ambientLight") && (0, YU.jsx)(PU.j, {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L151)

```diff
-               bM.d.setClientEscMenuOptions({
+               WU.e.setClientEscMenuOptions({
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L159` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L159) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L159)

```diff
-         }), wM.devTools.supports("weaponRaycasts") && (0, LM.jsx)(eM.c, {
+         }), dU.devTools.supports("weaponRaycasts") && (0, YU.jsx)(PU.e, {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L163` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L163) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L163)

```diff
-             bM.d.setClientEscMenuOptions({
+             WU.e.setClientEscMenuOptions({
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L172` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L172) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L172)

```diff
-             children: [(0, LM.jsx)(eM.c, {
+             children: [(0, YU.jsx)(PU.e, {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L179)

```diff
-             }), (0, LM.jsx)(eM.c, {
+             }), (0, YU.jsx)(PU.e, {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L191` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L191) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L191)

```diff
-               }), (0, LM.jsx)(GM.b, {
+               }), (0, YU.jsx)(ZU.e, {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L202` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L202) · [Before (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L202)

```diff
-               }), (0, LM.jsx)(GM.b, {
+               }), (0, YU.jsx)(ZU.e, {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L214` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L214) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L214)

```diff
-               children: [(0, LM.jsxs)(QM.e, {
+               children: [(0, YU.jsxs)(DU.f, {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L219-L220` → after: `L219-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L219-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L219-L220) · [Before (L219-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L219-L220)

```diff
-                 children: [aM && (0, LM.jsx)(CM.d, {}), "Download Screenshot"]
-               }), (0, LM.jsxs)(QM.e, {
+                 children: [AU && (0, YU.jsx)(RU.b, {}), "Download Screenshot"]
+               }), (0, YU.jsxs)(DU.f, {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L225` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L225) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L225)

```diff
-                 children: [SM && (0, LM.jsx)(CM.d, {}), "Download GLB"]
+                 children: [yU && (0, YU.jsx)(RU.b, {}), "Download GLB"]
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L235-L255` → after: `L235-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L235-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L235-L255) · [Before (L235-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L235-L255)

```diff
-     var gM = iM(119),
-       uM = iM(1144),
-       RM = iM(34929),
-       pM = iM(3366),
-       WM = iM(1591),
-       sM = iM(1279),
-       DM = iM(1240),
-       kM = iM(3461),
-       ZM = iM(2150),
-       oM = iM(1573),
-       fM = iM(332),
-       YM = iM(2397),
-       NM = iM(2401),
-       AM = iM(3394),
-       xM = iM(2919),
-       vM = iM(1722),
- ... (5 more removed lines; see GitHub link above)
+     var eU = zU(142),
+       CU = zU(1131),
+       wU = zU(34762),
+       qU = zU(3335),
+       OU = zU(1568),
+       SU = zU(1280),
+       rU = zU(1250),
+       uU = zU(3433),
+       fU = zU(2109),
+       iU = zU(1545),
+       HU = zU(344),
+       MU = zU(2381),
+       vU = zU(2387),
+       VU = zU(3363),
+       sU = zU(2923),
+       nU = zU(1685),
+ ... (5 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L266` → after: `L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L266) · [Before (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L266)

```diff
-             of Object.values(MM.subscriptions)) !(0, AM.k)(iM) || (0, AM.o)(OM) || "willNotRenew" === SM || rM.has(iM) || rM.set(iM, null !== jM && void 0 !== jM ? jM : AM.r[iM]);
+             of Object.values(UU.subscriptions)) !(0, VU.k)(zU) || (0, VU.o)(cU) || "willNotRenew" === yU || XU.has(zU) || XU.set(zU, null !== QU && void 0 !== QU ? QU : VU.p[zU]);
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L274` → after: `L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L274) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L274)

```diff
-         }(await (0, IM.n)((0, KM.getBillingClient)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
+         }(await (0, JU.l)((0, jU.getBillingClient)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L284` → after: `L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L284) · [Before (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L284)

```diff
-       } = (0, aM.A)(), {
+       } = (0, AU.I)(), {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L286` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/90.js#L286) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/90.js#L286)

```diff
-       } = (0, hM.b)(), {
+       } = (0, pU.d)(), {
```
