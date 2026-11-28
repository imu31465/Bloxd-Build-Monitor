# Changed — Bundle Modifications Report (Part 098 / 154)

- **Updated at**: `2026-11-28T13:51 JST`
- **Part**: `98 / 154` (**398** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 097](part-097.md) · [Part 099 →](part-099.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/90.js` (fl4vv.bd3c59ce → yteou.5361c997 · continued)

- **File**: `bundles/bloxd.io/chunks/js/90.js` (4853 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20)

#### 2923. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21568-L21572` → after: `L21625-L21629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21625-L21629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21625-L21629) · [Before (L21568-L21572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21568-L21572)

```diff
-       await (0, gS.t)("items object"), (0, ar.t)(), await (0, gS.t)("pick helper"), hr.h.localPlayerPickActionHelper = new Er.c(rr, rr.fC), await (0, gS.t)("block atlas");
-       const Br = mr.d.getBlockAtlasArr(),
-         Or = mr.d.getBlockAtlasPixels(),
-         Lr = mr.d.getBlockAtlasWidth(),
-         lr = fr.r.flatMap((rr => {
+       await (0, GO.u)("items object"), (0, Rd.q)(), await (0, GO.u)("pick helper"), yd.g.localPlayerPickActionHelper = new vd.b(dd, dd.YV), await (0, GO.u)("block atlas");
+       const Ed = od.c.getBlockAtlasArr(),
+         xd = od.c.getBlockAtlasPixels(),
+         Bd = od.c.getBlockAtlasWidth(),
+         Sd = hd.v.flatMap((dd => {
```

#### 2924. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21581` → after: `L21638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21638) · [Before (L21581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21581)

```diff
-       const Xr = rr.Ox.Ut();
+       const sd = dd.gt.pH();
```

#### 2925. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21585-L21586` → after: `L21642-L21643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21642-L21643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21642-L21643) · [Before (L21585-L21586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21585-L21586)

```diff
-       tr.c.get("clientEscMenuOptions").disableTexAtlas && !rr.zU && (Pr = !1, Hr = "options");
-       let qr = mr.d.getImagesPerAtlas();
+       Hd.e.get("clientEscMenuOptions").disableTexAtlas && !dd.Jq && (ud = !1, Vd = "options");
+       let Ad = od.c.getImagesPerAtlas();
```

#### 2926. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21588` → after: `L21645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21645) · [Before (L21588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21588)

```diff
-         const rr = `imagesPerAtlas = ${qr}`;
+         const dd = `imagesPerAtlas = ${Ad}`;
```

#### 2927. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21591-L21593` → after: `L21648-L21650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21648-L21650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21648-L21650) · [Before (L21591-L21593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21591-L21593)

```diff
-       const Rr = rr.Ox.engine.getCaps().texture2DArrayMaxLayerCount;
-       Pr && Xr && Rr < qr[0] && (Pr = !1, Hr = `maxLayerCount = ${Rr}, layerCount = ${qr[0]}`);
-       const gr = rr.Ox.engine.getCaps().maxTextureSize,
+       const rd = dd.gt.engine.getCaps().texture2DArrayMaxLayerCount;
+       ud && sd && rd < Ad[0] && (ud = !1, Vd = `maxLayerCount = ${rd}, layerCount = ${Ad[0]}`);
+       const Gd = dd.gt.engine.getCaps().maxTextureSize,
```

#### 2928. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21595-L21596` → after: `L21652-L21653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21652-L21653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21652-L21653) · [Before (L21595-L21596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21595-L21596)

```diff
-       Pr && gr < Cr && (Pr = !1, Hr = `maxTextureSize = ${gr}, textureSize = ${Cr}`), console.log("Graphics backend", null !== (Sr = null === (Wr = rr.Ox.Wt) || void 0 === Wr ? void 0 : Wr.backendName) && void 0 !== Sr ? Sr : `webgl${rr.Ox.engine.tt}`, "useTexAtlas", Pr, "reason" … [truncated]
-       const Mr = Math.floor(Object.keys((0, cr.ab)(fr.j)).length / 50);
+       ud && Gd < nd && (ud = !1, Vd = `maxTextureSize = ${Gd}, textureSize = ${nd}`), console.log("Graphics backend", null !== (Od = null === (Fd = dd.gt.NH) || void 0 === Fd ? void 0 : Fd.backendName) && void 0 !== Od ? Od : `webgl${dd.gt.engine.YH}`, "useTexAtlas", ud, "reason" … [truncated]
+       const Ld = Math.floor(Object.keys((0, Id.V)(hd.i)).length / 50);
```

#### 2929. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21598-L21599` → after: `L21655-L21656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21655-L21656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21655-L21656) · [Before (L21598-L21599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21598-L21599)

```diff
-         kr += 1, kr % 50 === 0 && (pr.i.Jp("matchmakeAndPlayStepCompleted", {
-           step: xr.i.REGISTRATION,
+         zd += 1, zd % 50 === 0 && (Qd.j.lQ("matchmakeAndPlayStepCompleted", {
+           step: td.l.REGISTRATION,
```

#### 2930. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21603` → after: `L21660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21660) · [Before (L21603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21603)

```diff
-         }))), await (0, gS.t)(`block ${rr}`)
+         }))), await (0, GO.u)(`block ${dd}`)
```

#### 2931. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21606-L21607` → after: `L21663-L21664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21663-L21664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21663-L21664) · [Before (L21606-L21607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21606-L21607)

```diff
-       for (const Qr in (0, cr.ab)(fr.j)) {
-         const Sr = fr.j[Qr],
+       for (const md in (0, Id.V)(hd.i)) {
+         const Od = hd.i[md],
```

#### 2932. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21611` → after: `L21668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21668) · [Before (L21611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21611)

```diff
-           if (bS(fr.j[rr], Sr)) {
+           if (ZO(hd.i[dd], Od)) {
```

#### 2933. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21617` → after: `L21674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21674) · [Before (L21617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21617)

```diff
-           await (0, gS.t)(`block ${Qr} model`);
+           await (0, GO.u)(`block ${md} model`);
```

#### 2934. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21620` → after: `L21677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21677) · [Before (L21620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21620)

```diff
-               P_: await FS(Sr.model).getMesh(rr.Ox.eC(), Sr),
+               W4: await lO(Od.model).getMesh(dd.gt.zV(), Od),
```

#### 2935. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21623-L21629` → after: `L21680-L21686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21680-L21686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21680-L21686) · [Before (L21623-L21629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21623-L21629)

```diff
-               Bh: Sr.Bh,
-               wT: JS(Qr),
-               PU: null !== (Wr = Sr.PU) && void 0 !== Wr ? Wr : null,
-               Th: null !== (ar = Sr.Th) && void 0 !== ar ? ar : null,
-               HU: Sr.HU,
-               nC: XS(Qr, Sr.model),
-               y_: () => dS(Sr, Sr)
+               Sy: Od.Sy,
+               vJ: kO(md),
+               Pq: null !== (Fd = Od.Pq) && void 0 !== Fd ? Fd : null,
+               Vy: null !== (Rd = Od.Vy) && void 0 !== Rd ? Rd : null,
+               zq: Od.zq,
+               GV: uO(md, Od.model),
+               o9: () => MO(Od, Od)
```

#### 2936. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21631` → after: `L21688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21688) · [Before (L21631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21631)

```diff
-             rr.Ex.JV(Sr.id, jr), null !== Sr.meta.metaStr && await GS(rr, Qr, jr), await Gr(Qr)
+             dd.Rt.JC(Od.id, Xd), null !== Od.meta.metaStr && await PO(dd, md, Xd), await Pd(md)
```

#### 2937. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21637-L21638` → after: `L21694-L21695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21694-L21695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21694-L21695) · [Before (L21637-L21638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21637-L21638)

```diff
-             if ("number" === typeof Sr.textureInfo[0]) Sr.textureInfo.length > 3 && (Wr = !0), rr.Ex.R_(Qr, {
-               B_: [],
+             if ("number" === typeof Od.textureInfo[0]) Od.textureInfo.length > 3 && (Fd = !0), dd.Rt.o4(md, {
+               N9: [],
```

#### 2938. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21640` → after: `L21697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21697) · [Before (L21640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21640)

```diff
-               T_: Wr
+               J9: Fd
```

#### 2939. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21647-L21654` → after: `L21704-L21711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21704-L21711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21704-L21711) · [Before (L21647-L21654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21647-L21654)

```diff
-                 const Ir = `${Qr}${jr}`;
-                 if (Pr && void 0 !== Sr.atlasIdx[jr]) rr.Ex.R_(Ir, {
-                   B_: Br,
-                   L_: Or,
-                   l_: Lr,
-                   v_: Sr.atlasIdx[jr],
-                   T_: Wr,
-                   Oh: lr
+                 const Kd = `${md}${Xd}`;
+                 if (ud && void 0 !== Od.atlasIdx[Xd]) dd.Rt.o4(Kd, {
+                   N9: Ed,
+                   Z2: xd,
+                   O4: Bd,
+                   I9: Od.atlasIdx[Xd],
+                   J9: Fd,
+                   Ay: Sd
```

#### 2940. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21659-L21660` → after: `L21716-L21717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21716-L21717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21716-L21717) · [Before (L21659-L21660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21659-L21660)

```diff
-                       B_: [mr.d.getTexture("string" === typeof Sr ? Sr : Ir, Ur.e.BLOCK).url],
-                       T_: Wr
+                       N9: [od.c.getTexture("string" === typeof Od ? Od : Kd, qd.i.BLOCK).url],
+                       J9: Fd
```

#### 2941. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21662` → after: `L21719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21719) · [Before (L21662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21662)

```diff
-                   ("string" === typeof Sr ? 0 : Sr.animTextures.length) > 0 && (Qr.Oh = CS(Sr)), rr.Ex.R_(Ir, Qr)
+                   ("string" === typeof Od ? 0 : Od.animTextures.length) > 0 && (md.Ay = nO(Od)), dd.Rt.o4(Kd, md)
```

#### 2942. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21668` → after: `L21725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21725) · [Before (L21668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21668)

```diff
-                   const Sr = `${Qr}${rr}`;
+                   const Od = `${md}${dd}`;
```

#### 2943. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21674-L21677` → after: `L21731-L21734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21731-L21734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21731-L21734) · [Before (L21674-L21677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21674-L21677)

```diff
-             if (Wr ||= Sr.transTex, Wr ||= (null === (wr = Sr.textureInfo.colour) || void 0 === wr ? void 0 : wr.length) > 3, Pr && void 0 !== Sr.atlasIdx) rr.Ex.R_(Qr, {
-               B_: Br,
-               L_: Or,
-               l_: Lr,
+             if (Fd ||= Od.transTex, Fd ||= (null === (ed = Od.textureInfo.colour) || void 0 === ed ? void 0 : ed.length) > 3, ud && void 0 !== Od.atlasIdx) dd.Rt.o4(md, {
+               N9: Ed,
+               Z2: xd,
+               O4: Bd,
```

#### 2944. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21679-L21682` → after: `L21736-L21739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21736-L21739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21736-L21739) · [Before (L21679-L21682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21679-L21682)

```diff
-               M_: !1,
-               v_: Sr.atlasIdx[0],
-               T_: Wr,
-               Oh: lr
+               A4: !1,
+               I9: Od.atlasIdx[0],
+               J9: Fd,
+               Ay: Sd
```

#### 2945. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21685-L21687` → after: `L21742-L21744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21742-L21744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21742-L21744) · [Before (L21685-L21687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21685-L21687)

```diff
-               const Zr = mr.d.getTexture(Qr, Ur.e.BLOCK).url;
-               rr.Ex.R_(Qr, {
-                 B_: [Zr],
+               const Wd = od.c.getTexture(md, qd.i.BLOCK).url;
+               dd.Rt.o4(md, {
+                 N9: [Wd],
```

#### 2946. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21689-L21691` → after: `L21746-L21748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21746-L21748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21746-L21748) · [Before (L21689-L21691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21689-L21691)

```diff
-                 M_: !1,
-                 T_: Wr,
-                 Oh: CS(Sr.textureInfo)
+                 A4: !1,
+                 J9: Fd,
+                 Ay: nO(Od.textureInfo)
```

#### 2947. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21696-L21702` → after: `L21753-L21759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21753-L21759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21753-L21759) · [Before (L21696-L21702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21696-L21702)

```diff
-             rr.Ex.R_(Qr, {
-               B_: Br,
-               L_: Or,
-               l_: Lr,
-               v_: Zr,
-               T_: Wr,
-               Oh: lr
+             dd.Rt.o4(md, {
+               N9: Ed,
+               Z2: xd,
+               O4: Bd,
+               I9: Wd,
+               J9: Fd,
+               Ay: Sd
```

#### 2948. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21705-L21708` → after: `L21762-L21765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21762-L21765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21762-L21765) · [Before (L21705-L21708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21705-L21708)

```diff
-             const Zr = mr.d.getTexture(Sr.textureInfo, Ur.e.BLOCK).url;
-             rr.Ex.R_(Qr, {
-               B_: [Zr],
-               T_: Wr
+             const Wd = od.c.getTexture(Od.textureInfo, qd.i.BLOCK).url;
+             dd.Rt.o4(md, {
+               N9: [Wd],
+               J9: Fd
```

#### 2949. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21711-L21715` → after: `L21768-L21772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21768-L21772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21768-L21772) · [Before (L21711-L21715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21711-L21715)

```diff
-           rr.Ex.JV(Sr.id, {
-             material: void 0 === Zr ? Qr : Zr,
-             HN: Sr.HN,
-             solid: null !== (Ar = Sr.solid) && void 0 !== Ar ? Ar : !Sr.HN,
-             Bh: Sr.Bh,
+           dd.Rt.JC(Od.id, {
+             material: void 0 === Wd ? md : Wd,
+             LN: Od.LN,
+             solid: null !== (cd = Od.solid) && void 0 !== cd ? cd : !Od.LN,
+             Sy: Od.Sy,
```

#### 2950. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21717-L21720` → after: `L21774-L21777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21774-L21777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21774-L21777) · [Before (L21717-L21720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21717-L21720)

```diff
-             PU: null !== (Vr = Sr.PU) && void 0 !== Vr ? Vr : null,
-             Th: null !== (ir = Sr.Th) && void 0 !== ir ? ir : null,
-             HU: Sr.HU,
-             nC: XS(Qr, Sr.model)
+             Pq: null !== (jd = Od.Pq) && void 0 !== jd ? jd : null,
+             Vy: null !== (Dd = Od.Vy) && void 0 !== Dd ? Dd : null,
+             zq: Od.zq,
+             GV: uO(md, Od.model)
```

#### 2951. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21722` → after: `L21779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21779) · [Before (L21722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21722)

```diff
-         }(0, ar.A)(Qr, Sr.id, rr.Ox.eC(), void 0)
+         }(0, Rd.y)(md, Od.id, dd.gt.zV(), void 0)
```

#### 2952. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21724` → after: `L21781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21781) · [Before (L21724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21724)

```diff
-       for (const Qr in Zr.s) {
+       for (const md in Wd.y) {
```

#### 2953. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21726-L21727` → after: `L21783-L21784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21783-L21784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21783-L21784) · [Before (L21726-L21727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21726-L21727)

```diff
-         const Sr = Zr.s[Qr];
-         await (0, gS.t)(`item ${Qr}`), (0, ar.A)(Qr, Sr.id, rr.Ox.eC(), Sr.type)
+         const Od = Wd.y[md];
+         await (0, GO.u)(`item ${md}`), (0, Rd.y)(md, Od.id, dd.gt.zV(), Od.type)
```

#### 2954. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21729` → after: `L21786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21786) · [Before (L21729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21729)

```diff
-       return await (0, gS.t)("block overlays"),
+       return await (0, GO.u)("block overlays"),
```

#### 2955. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21731` → after: `L21788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21788) · [Before (L21731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21731)

```diff
-           const Sr = rr.Ox.eC();
+           const Od = dd.gt.zV();
```

#### 2956. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21734` → after: `L21791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21791) · [Before (L21734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21734)

```diff
-             const Wr = mr.d.getTexture(`destroy_stage_${Zr}`, Ur.e.BLOCK).url,
+             const Fd = od.c.getTexture(`destroy_stage_${Wd}`, qd.i.BLOCK).url,
```

#### 2957. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21736-L21737` → after: `L21793-L21794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21793-L21794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21793-L21794) · [Before (L21736-L21737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21736-L21737)

```diff
-                 wrapU: yr.c.clamp,
-                 wrapV: yr.c.clamp,
+                 wrapU: wd.b.clamp,
+                 wrapV: wd.b.clamp,
```

#### 2958. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21740` → after: `L21797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21797) · [Before (L21740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21740)

```diff
-               jr = (0, yr.r)(Sr, {
+               Xd = (0, wd.o)(Od, {
```

#### 2959. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21748` → after: `L21805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21805) · [Before (L21748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21748)

```diff
-                 transparencyMode: PS.s.alphaTest,
+                 transparencyMode: VO.r.alphaTest,
```

#### 2960. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21753-L21755` → after: `L21810-L21812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21810-L21812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21810-L21812) · [Before (L21753-L21755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21753-L21755)

```diff
-               fr = (0, nr.b)({
-                 name: `breakingBoxTexture${Zr}`,
-                 Dt: Sr,
+               hd = (0, pd.d)({
+                 name: `breakingBoxTexture${Wd}`,
+                 MH: Od,
```

#### 2961. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21759-L21760` → after: `L21816-L21817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21816-L21817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21816-L21817) · [Before (L21759-L21760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21759-L21760)

```diff
-             null === (Qr = rr.Ox.Wt) || void 0 === Qr || Qr.prepareTexture(jr);
-             const Er = (0, Tr.p)(rr.Ox, `breakingBox${Zr}`, (0, vr.e)({
+             null === (md = dd.gt.NH) || void 0 === md || md.prepareTexture(Xd);
+             const vd = (0, Jd.p)(dd.gt, `breakingBox${Wd}`, (0, Ud.b)({
```

#### 2962. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21765` → after: `L21822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21822) · [Before (L21765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21765)

```diff
-             Er.material = fr, rr.Ox.Sh(Er), Er.VK(!1), rr.Ox.aEr.push(Er)
+             vd.material = hd, dd.gt.Fy(vd), vd.rY(!1), dd.gt.hvd.push(vd)
```

#### 2963. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21770-L21774` → after: `L21827-L21831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21827-L21831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21827-L21831) · [Before (L21770-L21774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21770-L21774)

```diff
-             Dt: Sr
-           } = rr.Ox, Qr = (0, vr.e)({
-             width: qS.f,
-             height: qS.f,
-             depth: qS.f
+             MH: Od
+           } = dd.gt, md = (0, Ud.b)({
+             width: AO.d,
+             height: AO.d,
+             depth: AO.d
```

#### 2964. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21776-L21777` → after: `L21833-L21834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21833-L21834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21833-L21834) · [Before (L21776-L21777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21776-L21777)

```diff
-           for (let mr = 0; mr < Zr; mr++) Wr[4 * mr + 3] = Qr.positions[3 * mr + 2] < 0 ? kS : qS.i;
-           const ar = (0, Tr.p)(rr.Ox, "highlight", {
+           for (let od = 0; od < Wd; od++) Fd[4 * od + 3] = md.positions[3 * od + 2] < 0 ? zO : AO.f;
+           const Rd = (0, Jd.p)(dd.gt, "highlight", {
```

#### 2965. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21788` → after: `L21845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21845) · [Before (L21788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21788)

```diff
-               transparencyMode: PS.s.alphaBlend
+               transparencyMode: VO.r.alphaBlend
```

#### 2966. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21790` → after: `L21847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21847) · [Before (L21790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21790)

```diff
-           ar.material = (0, nr.b)({
+           Rd.material = (0, pd.d)({
```

#### 2967. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21792` → after: `L21849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21849) · [Before (L21792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21792)

```diff
-             Dt: Sr,
+             MH: Od,
```

#### 2968. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21796` → after: `L21853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21853) · [Before (L21796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21796)

```diff
-           const Ir = (0, nr.b)({
+           const Kd = (0, pd.d)({
```

#### 2969. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21798` → after: `L21855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21855) · [Before (L21798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21798)

```diff
-               Dt: Sr,
+               MH: Od,
```

#### 2970. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21801-L21802` → after: `L21858-L21859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21858-L21859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21858-L21859) · [Before (L21801-L21802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21801-L21802)

```diff
-             fr = qS.k,
-             Er = qS.o,
+             hd = AO.i,
+             vd = AO.n,
```

#### 2971. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21804` → after: `L21861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21861) · [Before (L21804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21804)

```diff
-               const jr = (0, Tr.p)(rr.Ox, Sr, (0, vr.h)({
+               const Xd = (0, Jd.p)(dd.gt, Od, (0, Ud.j)({
```

#### 2972. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21811-L21814` → after: `L21868-L21871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21868-L21871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21868-L21871) · [Before (L21811-L21814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21811-L21814)

```diff
-           for (const mr of xr) mr.material = Ir, mr.parent = ar, mr.ut = !1, rr.Ox.Sh(mr);
-           ar.ut = !1, ar.GU = !0, ar.VU = !0, rr.Ox.Sh(ar), ar.metadata.zEr = () => {
-             (0, Fr.g)(rr, xr, ar.Tx.x, ar.Tx.y, qS.k, qS.o)
-           }, ar.VK(!1), rr.Ox.WEr = ar
+           for (const od of td) od.material = Kd, od.parent = Rd, od.my = !1, dd.gt.Fy(od);
+           Rd.my = !1, Rd.lq = !0, Rd.kq = !0, dd.gt.Fy(Rd), Rd.metadata.Yvd = () => {
+             (0, ld.g)(dd, td, Rd.Tt.x, Rd.Tt.y, AO.i, AO.n)
+           }, Rd.rY(!1), dd.gt.Kvd = Rd
```

#### 2973. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21818-L21819` → after: `L21875-L21876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21875-L21876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21875-L21876) · [Before (L21818-L21819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21818-L21819)

```diff
-             Dt: Sr
-           } = rr.Ox, Qr = (0, Tr.p)(rr.Ox, "floating", (0, vr.h)({
+             MH: Od
+           } = dd.gt, md = (0, Jd.p)(dd.gt, "floating", (0, Ud.j)({
```

#### 2974. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21828` → after: `L21885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21885) · [Before (L21828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21828)

```diff
-           Qr.material = (0, nr.b)({
+           md.material = (0, pd.d)({
```

#### 2975. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21830` → after: `L21887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21887) · [Before (L21830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21830)

```diff
-             Dt: Sr,
+             MH: Od,
```

#### 2976. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21833-L21834` → after: `L21890-L21891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21890-L21891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21890-L21891) · [Before (L21833-L21834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21833-L21834)

```diff
-           }).mirror, Qr.rotation.set(-Math.PI / 2, 0, 0), Qr.GU = !0, Qr.VU = !0, rr.Ox.Sh(Qr), Qr.ut = !1, Qr.VK(!1), rr.Ox.UZr = Qr
-         }(rr), pr.i.Jp("loadingScreenState", "loadingPage:loadingAssets"), await Promise.all(jr), {
+           }).mirror, md.rotation.set(-Math.PI / 2, 0, 0), md.lq = !0, md.kq = !0, dd.gt.Fy(md), md.my = !1, md.rY(!1), dd.gt.kWd = md
+         }(dd), Qd.j.lQ("loadingScreenState", "loadingPage:loadingAssets"), await Promise.all(Xd), {
```

#### 2977. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21841` → after: `L21898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21898) · [Before (L21841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21841)

```diff
-       const Wr = fr.p[Sr];
+       const Fd = hd.s[Od];
```

#### 2978. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21843` → after: `L21900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21900) · [Before (L21843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21843)

```diff
-       const jr = fr.j[Sr],
+       const Xd = hd.i[Od],
```

#### 2979. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21849` → after: `L21906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21906) · [Before (L21849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21849)

```diff
-         const Zr = fr.j[nr];
+         const Wd = hd.i[pd];
```

#### 2980. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21852` → after: `L21909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21909) · [Before (L21852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21852)

```diff
-           await (0, gS.t)(`block ${nr}`);
+           await (0, GO.u)(`block ${pd}`);
```

#### 2981. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21854` → after: `L21911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21911) · [Before (L21854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21854)

```diff
-           let fr = Qr.P_;
+           let hd = md.W4;
```

#### 2982. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21860-L21861` → after: `L21917-L21918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21917-L21918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21917-L21918) · [Before (L21860-L21861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21860-L21861)

```diff
-             } = Zr.meta, ar = (0, or.j)(Sr === wr.b.top, Qr, null !== Wr && void 0 !== Wr ? Wr : 1);
-             ar !== or.f && (Ir.has(ar.key) || Ir.set(ar.key, (() => Vr(rr.Ox.eC(), jr, ar))), fr = Ir.get(ar.key))
+             } = Wd.meta, Rd = (0, Cd.o)(Od === ed.c.top, md, null !== Fd && void 0 !== Fd ? Fd : 1);
+             Rd !== Cd.k && (Kd.has(Rd.key) || Kd.set(Rd.key, (() => jd(dd.gt.zV(), Xd, Rd))), hd = Kd.get(Rd.key))
```

#### 2983. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21864-L21866` → after: `L21921-L21923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21921-L21923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21921-L21923) · [Before (L21864-L21866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21864-L21866)

```diff
-             Sr !== xr && (Er.has(Sr) || Er.set(Sr, (() => Ar(rr.Ox.eC(), Zr))), fr = Er.get(Sr))
-           } else(0, br.B)(jr) ? fr = xS(Sr, Zr.meta.metaStr) : (0, mS.z)(jr) && (fr = KS(Sr, Zr.meta.rot, Zr.meta.open));
-           rr.Ex.JV(Zr.id, {
+             Od !== td && (vd.has(Od) || vd.set(Od, (() => cd(dd.gt.zV(), Wd))), hd = vd.get(Od))
+           } else(0, Zd.H)(Xd) ? hd = NO(Od, Wd.meta.metaStr) : (0, qO.w)(Xd) && (hd = aO(Od, Wd.meta.rot, Wd.meta.open));
+           dd.Rt.JC(Wd.id, {
```

#### 2984. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21868-L21869` → after: `L21925-L21926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21925-L21926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21925-L21926) · [Before (L21868-L21869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21868-L21869)

```diff
-             P_: fr,
-             wT: Wr,
+             W4: hd,
+             vJ: Fd,
```

#### 2985. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21871-L21877` → after: `L21928-L21934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21928-L21934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21928-L21934) · [Before (L21871-L21877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21871-L21877)

```diff
-             Bh: Zr.Bh,
-             PU: null !== (Nr = null !== (Ur = Zr.PU) && void 0 !== Ur ? Ur : Qr.PU) && void 0 !== Nr ? Nr : null,
-             Th: null !== (tr = null !== (hr = Zr.Th) && void 0 !== hr ? hr : Qr.Th) && void 0 !== tr ? tr : null,
-             HU: null !== (zr = Zr.HU) && void 0 !== zr ? zr : Qr.HU,
-             nC: XS(nr, null !== (Yr = Zr.model) && void 0 !== Yr ? Yr : jr.model),
-             y_: () => dS(jr, Zr)
-           }), (0, ar.A)(nr, Zr.id, rr.Ox.eC(), void 0)
+             Sy: Wd.Sy,
+             Pq: null !== (Nd = null !== (qd = Wd.Pq) && void 0 !== qd ? qd : md.Pq) && void 0 !== Nd ? Nd : null,
+             Vy: null !== (Hd = null !== (yd = Wd.Vy) && void 0 !== yd ? yd : md.Vy) && void 0 !== Hd ? Hd : null,
+             zq: null !== (bd = Wd.zq) && void 0 !== bd ? bd : md.zq,
+             GV: uO(pd, null !== (Td = Wd.model) && void 0 !== Td ? Td : Xd.model),
+             o9: () => MO(Xd, Wd)
+           }), (0, Rd.y)(pd, Wd.id, dd.gt.zV(), void 0)
```

#### 2986. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21885` → after: `L21942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21942) · [Before (L21885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21885)

```diff
-         alpha: qS.m
+         alpha: AO.k
```

#### 2987. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21890` → after: `L21947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21947) · [Before (L21890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21890)

```diff
-         Ox: Sr
+         gt: Od
```

#### 2988. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21892-L21896` → after: `L21949-L21953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21949-L21953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21949-L21953) · [Before (L21892-L21896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21892-L21896)

```diff
-         Dt: Qr
-       } = Sr, Zr = (0, Tr.p)(Sr, "ezBridgeGhost", (0, vr.e)({
-         width: qS.f,
-         height: qS.f,
-         depth: qS.f
+         MH: md
+       } = Od, Wd = (0, Jd.p)(Od, "ezBridgeGhost", (0, Ud.b)({
+         width: AO.d,
+         height: AO.d,
+         depth: AO.d
```

#### 2989. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21901-L21902` → after: `L21958-L21959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21958-L21959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21958-L21959) · [Before (L21901-L21902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21901-L21902)

```diff
-         transparencyMode: PS.s.alphaBlend,
-         alpha: qS.i,
+         transparencyMode: VO.r.alphaBlend,
+         alpha: AO.f,
```

#### 2990. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21906` → after: `L21963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21963) · [Before (L21906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21906)

```diff
-       Zr.material = (0, nr.b)({
+       Wd.material = (0, pd.d)({
```

#### 2991. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21908` → after: `L21965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21965) · [Before (L21908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21908)

```diff
-         Dt: Qr,
+         MH: md,
```

#### 2992. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21912` → after: `L21969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21969) · [Before (L21912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21912)

```diff
-       const ar = (0, Tr.p)(Sr, "ezBridgeGhostOutline", (0, dr.g)((0, qS.e)().map((rr => {
+       const Rd = (0, Jd.p)(Od, "ezBridgeGhostOutline", (0, Md.f)((0, AO.b)().map((dd => {
```

#### 2993. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21914` → after: `L21971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21971) · [Before (L21914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21914)

```diff
-         return [(0, vr.e)({
+         return [(0, Ud.b)({
```

#### 2994. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21920` → after: `L21977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21977) · [Before (L21920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21920)

```diff
-       return ar.ut = !1, ar.GU = !0, ar.VU = !0, ar.material = (0, nr.b)({
+       return Rd.my = !1, Rd.lq = !0, Rd.kq = !0, Rd.material = (0, pd.d)({
```

#### 2995. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21922` → after: `L21979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21979) · [Before (L21922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21922)

```diff
-         Dt: Qr,
+         MH: md,
```

#### 2996. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21924` → after: `L21981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21981) · [Before (L21924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21924)

```diff
-       }).mirror, ar.parent = Zr, Sr.Sh(ar), Zr.ut = !1, Zr.GU = !0, Zr.VU = !0, Sr.Sh(Zr), Zr.VK(!1), Zr
+       }).mirror, Rd.parent = Wd, Od.Fy(Rd), Wd.my = !1, Wd.lq = !0, Wd.kq = !0, Od.Fy(Wd), Wd.rY(!1), Wd
```

#### 2997. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21926` → after: `L21983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21983) · [Before (L21926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21926)

```diff
-     const iS = cS(Yr.l),
+     const DO = IO(Td.m),
```

#### 2998. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21942-L21943` → after: `L21999-L22000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R21999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L21999-L22000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L21999-L22000) · [Before (L21942-L21943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21942-L21943)

```diff
-                 const jr = Pr(`${Sr.name}BlkMdl${Zr<2?1:2}`);
-                 return jr.ut = !1, jr.rotation.set(...Wr), jr.position.set(...ar), jr.bakeCurrentTransformIntoVertices(), jr.material = Qr, jr
+                 const Xd = ud(`${Od.name}BlkMdl${Wd<2?1:2}`);
+                 return Xd.my = !1, Xd.rotation.set(...Fd), Xd.position.set(...Rd), Xd.bakeCurrentTransformIntoVertices(), Xd.material = md, Xd
```

#### 2999. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21945-L21946` → after: `L22002-L22003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22002-L22003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22002-L22003) · [Before (L21945-L21946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21945-L21946)

```diff
-               Wr = (0, Tr.m)(Zr, !1, !1);
-             return Wr.ut = !1, Wr
+               Fd = (0, Jd.n)(Wd, !1, !1);
+             return Fd.my = !1, Fd
```

#### 3000. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21957` → after: `L22014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22014) · [Before (L21957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21957)

```diff
-             const Qr = (0, hr.c)().getMetaInfo(Sr).metaStr;
+             const md = (0, yd.b)().getMetaInfo(Od).metaStr;
```

#### 3001. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21964-L21965` → after: `L22021-L22022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22021-L22022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22021-L22022) · [Before (L21964-L21965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21964-L21965)

```diff
-             const Qr = (0, hr.c)().getMetaInfo(Sr);
-             rr.rotation.y = (0, or.k)(Qr.rot, Qr.stairsCorner)
+             const md = (0, yd.b)().getMetaInfo(Od);
+             dd.rotation.y = (0, Cd.q)(md.rot, md.stairsCorner)
```

#### 3002. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21970` → after: `L22027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22027) · [Before (L21970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21970)

```diff
-             (0, Or.c)(rr);
+             (0, xd.b)(dd);
```

#### 3003. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21978` → after: `L22035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22035) · [Before (L21978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21978)

```diff
-             (0, Or.c)(rr);
+             (0, xd.b)(dd);
```

#### 3004. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21981` → after: `L22038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22038) · [Before (L21981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21981)

```diff
-               zS ??= IS(rr, mS.c, US);
+               pO ??= vO(dd, qO.e, yO);
```

#### 3005. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21983` → after: `L22040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22040) · [Before (L21983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21983)

```diff
-                 Zr = (0, mS.y)(Sr) ? Qr.gate : Qr.top,
+                 Wd = (0, qO.s)(Od) ? md.gate : md.top,
```

#### 3006. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21989` → after: `L22046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22046) · [Before (L21989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21989)

```diff
-                 of mS.g) {
+                 of qO.h) {
```

#### 3007. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21991` → after: `L22048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22048) · [Before (L21991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L21991)

```diff
-                 Wr.set(Qr, (() => ES(rr, Sr, `${Sr.name}|${Qr}FenceGateModel`, hS(Zr, ar, jr))))
+                 Fd.set(md, (() => tO(dd, Od, `${Od.name}|${md}FenceGateModel`, TO(Wd, Rd, Xd))))
```

#### 3008. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22001` → after: `L22058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22058) · [Before (L22001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22001)

```diff
-             (0, hr.c)().getMetaInfo(Sr).halfblockPlacement === wr.b.top && (rr.rotation.x = Math.PI)
+             (0, yd.b)().getMetaInfo(Od).halfblockPlacement === ed.c.top && (dd.rotation.x = Math.PI)
```

#### 3009. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22009-L22012` → after: `L22066-L22069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22066-L22069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22066-L22069) · [Before (L22009-L22012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22009-L22012)

```diff
-               ar = fr.j[Sr].name,
-               jr = null !== (Qr = ar.split("|")[2]) && void 0 !== Qr ? Qr : "rot1",
-               Ir = "open" === (null !== (Zr = ar.split("|")[3]) && void 0 !== Zr ? Zr : "closed");
-             "rot1" === jr && Ir ? (rr.position.x += Wr, rr.rotation.y += 3 * Math.PI / 2) : "rot1" !== jr || Ir ? "rot2" === jr && Ir ? rr.position.z -= Wr : "rot2" !== jr || Ir ? "rot3" === jr && Ir ? (rr.position.x -= Wr, rr.rotation.y += Math.PI / 2) : "rot3" !== jr || Ir ? "r … [truncated]
+               Rd = hd.i[Od].name,
+               Xd = null !== (md = Rd.split("|")[2]) && void 0 !== md ? md : "rot1",
+               Kd = "open" === (null !== (Wd = Rd.split("|")[3]) && void 0 !== Wd ? Wd : "closed");
+             "rot1" === Xd && Kd ? (dd.position.x += Fd, dd.rotation.y += 3 * Math.PI / 2) : "rot1" !== Xd || Kd ? "rot2" === Xd && Kd ? dd.position.z -= Fd : "rot2" !== Xd || Kd ? "rot3" === Xd && Kd ? (dd.position.x -= Fd, dd.rotation.y += Math.PI / 2) : "rot3" !== Xd || Kd ? "r … [truncated]
```

#### 3010. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22019-L22020` → after: `L22076-L22077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22076-L22077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22076-L22077) · [Before (L22019-L22020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22019-L22020)

```diff
-             const Zr = fr.j[Sr].name,
-               Wr = "open" === (null !== (Qr = Zr.split("|")[3]) && void 0 !== Qr ? Qr : "closed"),
+             const Wd = hd.i[Od].name,
+               Fd = "open" === (null !== (md = Wd.split("|")[3]) && void 0 !== md ? md : "closed"),
```

#### 3011. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22024-L22025` → after: `L22081-L22082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22081-L22082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22081-L22082) · [Before (L22024-L22025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22024-L22025)

```diff
-               const Sr = null !== (jr = Zr.split("|")[2]) && void 0 !== jr ? jr : "rot1";
-               "rot4" === Sr ? (rr.position.x += ar, rr.rotation.y += 3 * Math.PI / 2) : "rot1" === Sr ? rr.position.z -= ar : "rot2" === Sr ? (rr.position.x -= ar, rr.rotation.y += Math.PI / 2) : "rot3" === Sr && (rr.position.z += ar, rr.rotation.y += Math.PI)
+               const Od = null !== (Xd = Wd.split("|")[2]) && void 0 !== Xd ? Xd : "rot1";
+               "rot4" === Od ? (dd.position.x += Rd, dd.rotation.y += 3 * Math.PI / 2) : "rot1" === Od ? dd.position.z -= Rd : "rot2" === Od ? (dd.position.x -= Rd, dd.rotation.y += Math.PI / 2) : "rot3" === Od && (dd.position.z += Rd, dd.rotation.y += Math.PI)
```

#### 3012. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22046` → after: `L22103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22103) · [Before (L22046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22046)

```diff
-       if (!Qr) throw new Error(`Unknown block mesh type: ${rr}`);
+       if (!md) throw new Error(`Unknown block mesh type: ${dd}`);
```

#### 3013. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22058` → after: `L22115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22115) · [Before (L22058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22058)

```diff
-       return void 0 !== rr.model && (0, Yr.p)(Sr) === rr
+       return void 0 !== dd.model && (0, Td.n)(Od) === dd
```

#### 3014. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22062` → after: `L22119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22119) · [Before (L22062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22062)

```diff
-       const Sr = fr.j[rr],
+       const Od = hd.i[dd],
```

#### 3015. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22064` → after: `L22121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22121) · [Before (L22064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22064)

```diff
-         Wr = fr.j[Qr],
+         Fd = hd.i[md],
```

#### 3016. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22073` → after: `L22130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22130) · [Before (L22073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22073)

```diff
-       } = fr.j[Sr];
+       } = hd.i[Od];
```

#### 3017. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22081-L22082` → after: `L22138-L22139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22138-L22139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22138-L22139) · [Before (L22081-L22082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22081-L22082)

```diff
-           rotation: Kr.kU.Zero(),
-           Tx: Kr.kU.One()
+           rotation: gd.Cq.Zero(),
+           Tt: gd.Cq.One()
```

#### 3018. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22091-L22093` → after: `L22148-L22150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22148-L22150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22148-L22150) · [Before (L22091-L22093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22091-L22093)

```diff
-       uS(rr, Sr), void 0 !== fr.j[Sr].rotatableOffsetAmt && (Zr = fr.j[Sr].rotatableOffsetAmt);
-       const Wr = null !== (Qr = fr.j[Sr].name.split("|")[2]) && void 0 !== Qr ? Qr : "rot1";
-       "rot1" === Wr ? rr.position.z -= Zr : "rot2" === Wr ? rr.position.x -= Zr : "rot3" === Wr ? rr.position.z += Zr : "rot4" === Wr && (rr.position.x += Zr)
+       Om(dd, Od), void 0 !== hd.i[Od].rotatableOffsetAmt && (Wd = hd.i[Od].rotatableOffsetAmt);
+       const Fd = null !== (md = hd.i[Od].name.split("|")[2]) && void 0 !== md ? md : "rot1";
+       "rot1" === Fd ? dd.position.z -= Wd : "rot2" === Fd ? dd.position.x -= Wd : "rot3" === Fd ? dd.position.z += Wd : "rot4" === Fd && (dd.position.x += Wd)
```

#### 3019. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22098-L22099` → after: `L22155-L22156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22155-L22156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22155-L22156) · [Before (L22098-L22099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22098-L22099)

```diff
-       const Wr = fr.j[Sr],
-         ar = null !== (Qr = Wr.name.split("|")[2]) && void 0 !== Qr ? Qr : "rot1",
+       const Fd = hd.i[Od],
+         Rd = null !== (md = Fd.name.split("|")[2]) && void 0 !== md ? md : "rot1",
```

#### 3020. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22104-L22105` → after: `L22161-L22162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22161-L22162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22161-L22162) · [Before (L22104-L22105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22104-L22105)

```diff
-         } = null !== (Zr = Wr.customModelInfo) && void 0 !== Zr ? Zr : {},
-         pr = (0, Yr.j)((0, Yr.p)(Wr));
+         } = null !== (Wd = Fd.customModelInfo) && void 0 !== Wd ? Wd : {},
+         Qd = (0, Td.i)((0, Td.n)(Fd));
```

#### 3021. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22119` → after: `L22176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22176) · [Before (L22119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22119)

```diff
-     const EQ = [0, 1, 8, 255, "length", 2, 3, "a", 31, "undefined", void 0, "d", "c", 63, 6, "fromCodePoint", 7, 12, "push", 116, 182, 71, 30, 91, 5, "f", 8191, 88, 13, 14, 109, null, !1, "e", "b", 242, 9, !0, 92, 57];
+     const om = [2, 0, 1, 60, 139, "a", 9, 7, 154, 6, 4, 8, 255, "length", "undefined", void 0, "d", 3, 63, "fromCodePoint", 12, "push", "b", 238, 176, "h", "c", 107, "i", "g", 91, "e", "f", 8191, 88, 13, 14, 5, 146, 248, 26, !1, !0, 220, null, 244, 191, 104, 47, 115, 162, 132, 75 … [truncated]
```

#### 3022. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22122` → after: `L22179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22179) · [Before (L22122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22122)

```diff
-       return rr[EQ[4]] = EQ[1], typeof ZQ !== EQ[9] && ZQ ? (new ZQ).decode(new WQ(rr[EQ[0]])) : typeof aQ !== EQ[9] && aQ ? aQ.from(rr[EQ[0]]).toString("utf-8") : fQ(rr[EQ[0]])
+       return dd[om[13]] = om[2], typeof Rm !== om[14] && Rm ? (new Rm).decode(new Xm(dd[om[1]])) : typeof Km !== om[14] && Km ? Km.from(dd[om[1]]).toString("utf-8") : tm(dd[om[1]])
```

#### 3023. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22130-L22131` → after: `L22187-L22188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22187-L22188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22187-L22188) · [Before (L22130-L22131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22130-L22131)

```diff
-     mQ(rQ = {}, SQ = ["oXEbfb~ma;w!4*~g=1[}_xjzZ[TQd&@BZUWvCB2", 'bHbzM{6Bjm"^c&zgI"k}{lnlSjMyQR*"s}aw%>X"*uu^^Bz|]Y?vN}&va;M', "o;:E=%?hj(&)h,hY#8ax%7c*^hs)=#", "f~Cu..6$Ch0/bW`iE{iKgPFFV<x6`", "AY=Nrf)S4ezHIomr]I[:k}*3?P(OP.%Ac`", "pX0%1L^zwcMMtVSnq_h40,v|*./4kIp&JhoNgk!hZC)",  … [truncated]
-       mQ(rr[EQ[4]] = EQ[0], rr[EQ[7]] = [function() {
+     Hm(mm = {}, Wm = ["#eG9Hry2|p{M$UrqNvW}K`%Jy#", "64R}y^5%n{am#~%37C!Eq]<3WmEY*1__xX6$`j}KTs{kVt", "6D&S7gOKSk7!?fP#<}=S", "9BSA.vc@]bOfktd;5_li9_|rH#[;rU,Dnsq9tKS?t", "udaS:=2>@mAMcU22LpeR~&vAte83ms82`XkAS>d~LkF", ".^.nc6Z", '^tMX6&{[a!$m2iVqN|<cn]C[[d?Boyv$B"mQd](MC{/9`i`10p … [truncated]
+       var dd, Od, md, Wd = [function() {
```

#### 3024. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22139` → after: `L22196-L22197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22196-L22197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22196-L22197) · [Before (L22139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22139)

```diff
-       }], rr[EQ[1]] = EQ[10], rr[EQ[5]] = []);
+       }];
+       Hm(dd = void 0, Od = []);
```

#### 3025. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22141` → after: `L22199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22199) · [Before (L22141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22141)

```diff
-         mQ(rr[EQ[1]] = Object, rr[EQ[5]][EQ[18]]("".__proto__.constructor.name))
+         Hm(dd = Object, Od[om[21]]("".__proto__.constructor.name))
```

#### 3026. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22143-L22146` → after: `L22201-L22205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22201-L22205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22201-L22205) · [Before (L22143-L22146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22143-L22146)

```diff
-       rr: for (rr[EQ[6]] = EQ[0]; rr[EQ[6]] < rr[EQ[7]][EQ[4]]; rr[EQ[6]]++) try {
-         for (rr[EQ[1]] = rr[EQ[7]][rr[EQ[6]]](), rr[EQ[8]] = EQ[0]; rr[EQ[8]] < rr[EQ[5]][EQ[4]]; rr[EQ[8]]++)
-           if (typeof rr[EQ[1]][rr[EQ[5]][rr[EQ[8]]]] === EQ[9]) continue rr;
-         return rr[EQ[1]]
+       dd: for (md = om[1]; md < Wd[om[13]]; md++) try {
+         var Fd;
+         for (dd = Wd[md](), Fd = om[1]; Fd < Od[om[13]]; Fd++)
+           if (typeof dd[Od[Fd]] === om[14]) continue dd;
+         return dd
```

#### 3027. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22148-L22150` → after: `L22207-L22209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22207-L22209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22207-L22209) · [Before (L22148-L22150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22148-L22150)

```diff
-       return rr[EQ[1]] || this
-     }() || {}, ZQ = QQ.TextDecoder, WQ = QQ.Uint8Array, aQ = QQ.Dp, jQ = QQ.String || String, IQ = QQ.Array || Array, fQ = function(...rr) {
-       return mQ(rr[EQ[4]] = EQ[0], rr[EQ[19]] = new IQ(128), rr[EQ[1]] = jQ[EQ[15]] || jQ.fromCharCode, rr[EQ[5]] = []),
+       return dd || this
+     }() || {}, Rm = Fm.TextDecoder, Xm = Fm.Uint8Array, Km = Fm.CQ, hm = Fm.String || String, Qm = Fm.Array || Array, tm = function(...dd) {
+       return Hm(dd[om[13]] = om[1], dd[om[22]] = new Qm(om[63]), dd[-om[23]] = hm[om[19]] || hm.fromCharCode, dd[om[16]] = []),
```

#### 3028. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22152-L22153` → after: `L22211-L22212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22211-L22212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22211-L22212) · [Before (L22152-L22153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22152-L22153)

```diff
-           for (mQ(Sr[EQ[4]] = EQ[1], Sr[EQ[1]] = EQ[10], Sr[EQ[5]] = EQ[10], Sr[EQ[12]] = Sr[EQ[0]][EQ[4]], rr[EQ[5]][EQ[4]] = EQ[0]), Sr[EQ[11]] = EQ[0]; Sr[EQ[11]] < Sr[EQ[12]];) mQ(Sr[EQ[5]] = Sr[EQ[0]][Sr[EQ[11]]++], Sr[EQ[5]] <= 127 ? Sr[EQ[1]] = Sr[EQ[5]] : Sr[EQ[5]] <= 223 … [truncated]
-           return rr[EQ[5]].join("")
+           for (Hm(Od[om[13]] = om[2], Od[om[5]] = om[15], Od[om[0]] = om[15], Od[om[17]] = Od[om[1]][om[13]], dd[om[16]][om[13]] = om[1]), Od[om[10]] = om[1]; Od[om[10]] < Od[om[17]];) Hm(Od[om[0]] = Od[om[1]][Od[om[10]]++], Od[om[0]] <= 127 ? Od[om[5]] = Od[om[0]] : Od[om[0]] <= … [truncated]
+           return dd[om[16]].join("")
```

#### 3029. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22156-L22160` → after: `L22215-L22253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22215-L22253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22215-L22253) · [Before (L22156-L22160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22156-L22160)

```diff
-       if (EQ[37]) {
-         function rr(...rr) {
-           for (mQ(rr[EQ[4]] = EQ[1], rr[EQ[7]] = 'ZeXWjhEKSkpNTJntdsLFPDacbC{qI}i7Mg0Br!H(G9.o=$&4)Y;QRfVlOx8AU6*<%5wz|,~:2v@#+y/>]`?^["3_1um', rr[EQ[5]] = "" + (rr[EQ[0]] || ""), rr[EQ[20]] = rr[EQ[5]].length, rr[-EQ[30]] = [], rr[EQ[24]] = EQ[0], rr[EQ[25]] = EQ[0], rr[EQ[22]]  … [truncated]
-             if (rr[-EQ[21]] = rr[EQ[7]].indexOf(rr[EQ[5]][rr[EQ[2]]]), rr[-EQ[21]] !== -EQ[1])
-               if (rr[EQ[22]] < EQ[0]) rr[EQ[22]] = rr[-EQ[21]];
+       if ([][om[13]] = om[1], function(...dd) {
+           return dd[om[13]] = om[2], typeof mm[dd[om[1]]] === om[14] ? mm[dd[om[1]]] = function(...dd) {
+             for (Hm(dd[om[13]] = om[2], dd[om[27]] = '.uy%9~<}$64P=Fi&hGWADfoBnH"XY>TI8bv_pw#^`[!7zqOl|x510aE,rJ]t:e)cNjQkUM;KdsL(Z+3g*?@m{R2/SVC', dd[om[24]] = "" + (dd[om[1]] || ""), dd[om[26]] = dd[om[24]].length, dd[om[16]] = [], dd[om[31]] = om[1], dd[om[32]] = om[1], dd[om[ … [truncated]
+               if (dd[om[28]] = dd[om[27]].indexOf(dd[om[24]][dd[om[25]]]), dd[om[28]] !== -om[2])
+                 if (dd[om[29]] < om[1]) dd[om[29]] = dd[om[28]];
+                 else {
+                   Hm(dd[om[29]] += dd[om[28]] * om[30], dd[om[31]] |= dd[om[29]] << dd[om[32]], dd[om[32]] += (dd[om[29]] & om[33]) > om[34] ? om[35] : om[36]);
+                   do {
+                     Hm(dd[om[16]].push(dd[om[31]] & om[12]), dd[om[31]] >>= om[11], dd[om[32]] -= om[11])
+                   } while (dd[om[32]] > om[7]);
+                   dd[om[29]] = -om[2]
+                 } return dd[om[29]] > -om[2] && dd[om[16]].push((dd[om[31]] | dd[om[29]] << dd[om[32]]) & om[12]), Nm(dd[om[16]])
+           }(Wm[dd[om[1]]]) : mm[dd[om[1]]]
+         }(86) in qm && function(...dd) {
+           Hm(dd[om[13]] = om[1], dd[om[22]] = function(...Od) {
+             return Hm(Od[om[13]] = om[2], Od[om[5]] = []), (Od[om[1]] === om[2] || Od[om[1]] >= om[10]) && dd[om[2]](Od[om[5]], [], Od[om[1]], om[1]), Od[om[5]]
+ ... (23 more added lines; see GitHub link above)
```

#### 3030. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22162` → after: `L22255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22255) · [Before (L22162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22162)

```diff
-                 mQ(rr[EQ[22]] += rr[-EQ[21]] * EQ[23], rr[EQ[24]] |= rr[EQ[22]] << rr[EQ[25]], rr[EQ[25]] += (rr[EQ[22]] & EQ[26]) > EQ[27] ? EQ[28] : EQ[29]);
+                 Hm(Xd += hd * om[30], Fd |= Xd << Rd, Rd += (Xd & om[33]) > om[34] ? om[35] : om[36]);
```

#### 3031. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22164-L22171` → after: `L22257-L22262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22257-L22262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22257-L22262) · [Before (L22164-L22171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22164-L22171)

```diff
-                   mQ(rr[-EQ[30]].push(rr[EQ[24]] & EQ[3]), rr[EQ[24]] >>= EQ[2], rr[EQ[25]] -= EQ[2])
-                 } while (rr[EQ[25]] > EQ[16]);
-                 rr[EQ[22]] = -EQ[1]
-               } return rr[EQ[22]] > -EQ[1] && rr[-EQ[30]].push((rr[EQ[24]] | rr[EQ[22]] << rr[EQ[25]]) & EQ[3]), pQ(rr[-EQ[30]])
-         }
- 
-         function Sr(...Sr) {
-           return Sr[EQ[4]] = EQ[1], typeof rQ[Sr[EQ[0]]] === EQ[9] ? rQ[Sr[EQ[0]]] = rr(SQ[Sr[EQ[0]]]) : rQ[Sr[EQ[0]]]
+                   Hm(Wd.push(Fd & om[12]), Fd >>= om[11], Rd -= om[11])
+                 } while (Rd > om[7]);
+                 Xd = -om[2]
+               }
+           }
+           return Xd > -om[2] && Wd.push((Fd | Xd << Rd) & om[12]), Nm(Wd)
```

#### 3032. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22175` → after: `L22266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22266) · [Before (L22175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22175)

```diff
-           rr[EQ[4]] = EQ[0]
+           return Od[om[13]] = om[2], typeof mm[Od[om[1]]] === om[14] ? mm[Od[om[1]]] = dd(Wm[Od[om[1]]]) : mm[Od[om[1]]]
```

#### 3033. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22177-L22180` → after: `L22268-L22297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22268-L22297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22268-L22297) · [Before (L22177-L22180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22177-L22180)

```diff
-         Sr(103) in xQ && Qr();
-         let Zr = EQ[32];
-         mQ(setInterval((() => {
-           if (!Zr && (0, hr[EQ[33]])()) {
+         let md = om[41];
+         Hm(setInterval(((...dd) => {
+           if (dd[om[13]] = om[1], function(...dd) {
+               return dd[om[13]] = om[2], typeof mm[dd[om[1]]] === om[14] ? mm[dd[om[1]]] = function(...dd) {
+                 for (Hm(dd[om[13]] = om[2], dd[om[2]] = 'WHgMhUc0F7.y`9%m:fSIApeO}Zr"i*^BN{X68LP2nt1k]VTK#sRv>=C/,5@+Qo4aY|lj[dbD3E<Jqw)~!&ux($;z_G?', dd[om[43]] = "" + (dd[om[1]] || ""), dd[om[17]] = dd[om[43]].length, dd[om[16]] = [], dd[om[37]] = om[1], dd[om[32]] = om[1], dd[ … [truncated]
+                   if (dd[om[6]] = dd[om[2]].indexOf(dd[om[43]][dd[om[25]]]), dd[om[6]] !== -om[2])
+                     if (dd[om[29]] < om[1]) dd[om[29]] = dd[om[6]];
+                     else {
+                       Hm(dd[om[29]] += dd[om[6]] * om[30], dd[om[37]] |= dd[om[29]] << dd[om[32]], dd[om[32]] += (dd[om[29]] & om[33]) > om[34] ? om[35] : om[36]);
+                       do {
+                         Hm(dd[om[16]].push(dd[om[37]] & om[12]), dd[om[37]] >>= om[11], dd[om[32]] -= om[11])
+                       } while (dd[om[32]] > om[7]);
+                       dd[om[29]] = -om[2]
+                     } return dd[om[29]] > -om[2] && dd[om[16]].push((dd[om[37]] | dd[om[29]] << dd[om[32]]) & om[12]), Nm(dd[om[16]])
+               }(Wm[dd[om[1]]]) : mm[dd[om[1]]]
+             }(87) in qm && function(...dd) {
+ ... (14 more added lines; see GitHub link above)
```

#### 3034. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22182-L22184` → after: `L22299-L22301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22299-L22301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22299-L22301) · [Before (L22182-L22184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22182-L22184)

```diff
-               for (mQ(rr[EQ[4]] = EQ[1], rr[EQ[1]] = '2w._9>*5&vx^%;4o=A)XkcqbY],{3jQ!i$WMyB@ptION+"<1U(~6/JF8aDT:Hm0#n[VGr|}PzEK`?CShfeZgL7duslR', rr[EQ[34]] = "" + (rr[EQ[0]] || ""), rr[EQ[12]] = rr[EQ[34]].length, rr[EQ[11]] = [], rr[EQ[24]] = EQ[0], rr[EQ[14]] = EQ[0], rr[EQ[ … [truncated]
-                 if (rr[EQ[36]] = rr[EQ[1]].indexOf(rr[EQ[34]][rr[-EQ[35]]]), rr[EQ[36]] !== -EQ[1])
-                   if (rr[EQ[16]] < EQ[0]) rr[EQ[16]] = rr[EQ[36]];
+               for (Hm(dd[om[13]] = om[2], dd[om[2]] = 'UjPgsVJqprzWEe;L.5Gf)DO",kT]1t}QCY^<uXv+d9#@H6lhn`i(I$*7BmR:abAxoy8F!Z%MS2K3|N{>0~[4_=&w?/c', dd[om[22]] = "" + (dd[om[1]] || ""), dd[om[17]] = dd[om[22]].length, dd[om[49]] = [], dd[om[37]] = om[1], dd[-om[48]] = om[1], dd[o … [truncated]
+                 if (dd[om[47]] = dd[om[2]].indexOf(dd[om[22]][dd[om[25]]]), dd[om[47]] !== -om[2])
+                   if (dd[om[29]] < om[1]) dd[om[29]] = dd[om[47]];
```

#### 3035. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22186` → after: `L22303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22303) · [Before (L22186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22186)

```diff
-                     mQ(rr[EQ[16]] += rr[EQ[36]] * EQ[23], rr[EQ[24]] |= rr[EQ[16]] << rr[EQ[14]], rr[EQ[14]] += (rr[EQ[16]] & EQ[26]) > EQ[27] ? EQ[28] : EQ[29]);
+                     Hm(dd[om[29]] += dd[om[47]] * om[30], dd[om[37]] |= dd[om[29]] << dd[-om[48]], dd[-om[48]] += (dd[om[29]] & om[33]) > om[34] ? om[35] : om[36]);
```

#### 3036. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22188-L22191` → after: `L22305-L22312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22305-L22312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22305-L22312) · [Before (L22188-L22191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22188-L22191)

```diff
-                       mQ(rr[EQ[11]].push(rr[EQ[24]] & EQ[3]), rr[EQ[24]] >>= EQ[2], rr[EQ[14]] -= EQ[2])
-                     } while (rr[EQ[14]] > EQ[16]);
-                     rr[EQ[16]] = -EQ[1]
-                   } return rr[EQ[16]] > -EQ[1] && rr[EQ[11]].push((rr[EQ[24]] | rr[EQ[16]] << rr[EQ[14]]) & EQ[3]), pQ(rr[EQ[11]])
+                       Hm(dd[om[49]].push(dd[om[37]] & om[12]), dd[om[37]] >>= om[11], dd[-om[48]] -= om[11])
+                     } while (dd[-om[48]] > om[7]);
+                     dd[om[29]] = -om[2]
+                   } return dd[om[29]] > -om[2] && dd[om[49]].push((dd[om[37]] | dd[om[29]] << dd[-om[48]]) & om[12]), Nm(dd[om[49]])
+             }
+ 
+             function Wd(...dd) {
+               return dd[om[13]] = om[2], typeof mm[dd[om[1]]] === om[14] ? mm[dd[om[1]]] = Od(Wm[dd[om[1]]]) : mm[dd[om[1]]]
```

#### 3037. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22195` → after: `L22316-L22496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22316-L22496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22316-L22496) · [Before (L22195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22195)

```diff
-               return Sr[EQ[4]] = EQ[1], typeof rQ[Sr[EQ[0]]] === EQ[9] ? rQ[Sr[EQ[0]]] = rr(SQ[Sr[EQ[0]]]) : rQ[Sr[EQ[0]]]
+               function Od(...dd) {
+                 return dd[om[13]] = om[2], typeof mm[dd[om[1]]] === om[14] ? mm[dd[om[1]]] = function(...dd) {
+                   for (Hm(dd[om[13]] = om[2], dd[om[5]] = 'Ak6B${p%bFYuvO0J"8&}+grsdoq~;>1wZ:U7m/c3KSPME!.CVyN4LXx]`z9HDGRW^tl?I)ifh5@*a[Te|Qj,(_#=<n2', dd[om[0]] = "" + (dd[om[1]] || ""), dd[om[26]] = dd[om[0]].length, dd[-om[53]] = [], dd[om[31]] = om[1], dd[-om[52]] = om[1], d … [truncated]
+                     if (dd[-om[51]] = dd[om[5]].indexOf(dd[om[0]][dd[-om[50]]]), dd[-om[51]] !== -om[2])
+                       if (dd[om[7]] < om[1]) dd[om[7]] = dd[-om[51]];
+                       else {
+                         Hm(dd[om[7]] += dd[-om[51]] * om[30], dd[om[31]] |= dd[om[7]] << dd[-om[52]], dd[-om[52]] += (dd[om[7]] & om[33]) > om[34] ? om[35] : om[36]);
+                         do {
+                           Hm(dd[-om[53]].push(dd[om[31]] & om[12]), dd[om[31]] >>= om[11], dd[-om[52]] -= om[11])
+                         } while (dd[-om[52]] > om[7]);
+                         dd[om[7]] = -om[2]
+                       } return dd[om[7]] > -om[2] && dd[-om[53]].push((dd[om[31]] | dd[om[7]] << dd[-om[52]]) & om[12]), Nm(dd[-om[53]])
+                 }(Wm[dd[om[1]]]) : mm[dd[om[1]]]
+               }
+               dd[om[13]] = om[1],
+                 function(...dd) {
+ ... (165 more added lines; see GitHub link above)
```

#### 3038. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22198-L22199` → after: `L22500-L22501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22500-L22501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22500-L22501) · [Before (L22198-L22199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22198-L22199)

```diff
-               [Sr(104)]: Sr(105) + Sr(106),
-               [Sr(107)]: Sr(108) + Sr(EQ[30]),
+               [Wd(om[47])]: Wd(105) + Wd(106),
+               [Wd(om[27])]: Wd(108) + Wd(109),
```

#### 3039. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22202-L22211` → after: `L22504-L22523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22504-L22523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22504-L22523) · [Before (L22202-L22211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22202-L22211)

```diff
-             mQ(Zr = EQ[37], (0, Wr[Sr(113)])(zr.Vi, Qr))
-           }
-         }), 12799), (0, Wr[Sr(114) + Sr(115)])(((...rr) => {
-           rr[EQ[4]] = EQ[0], Sr(EQ[19]) + "Y" in xQ && function(...rr) {
-             mQ(rr[EQ[4]] = EQ[0], rr[-EQ[39]] = function(...rr) {
-               for (mQ(rr[EQ[4]] = EQ[1], rr[-EQ[38]] = rr[EQ[0]].length, rr[EQ[34]] = [], rr[EQ[6]] = EQ[0]), rr[EQ[11]] = EQ[0]; rr[EQ[11]] < rr[-EQ[38]]; rr[EQ[11]]++) rr[EQ[34]].push(rr[EQ[11]] !== EQ[0] && rr[EQ[0]][rr[EQ[11]]] > rr[EQ[0]][rr[EQ[11]] - EQ[1]] ? rr[EQ[34]][rr[ … [truncated]
-               for (rr[EQ[33]] = rr[-EQ[38]] - EQ[1]; rr[EQ[33]] >= EQ[0]; rr[EQ[33]]--) rr[EQ[33]] !== rr[-EQ[38]] - EQ[1] && rr[EQ[0]][rr[EQ[33]]] > rr[EQ[0]][rr[EQ[33]] + EQ[1]] && (rr[EQ[34]][rr[EQ[33]]] = Math.max(rr[EQ[34]][rr[EQ[33]]], rr[EQ[34]][rr[EQ[33]] + EQ[1]] + EQ[1] … [truncated]
-               return rr[EQ[6]]
-             }, console.log(rr[-EQ[39]]))
-           }(), Zr = EQ[32]
+             Hm(md = om[42], (0, Fd[Wd(113)])(bd.hi, Xd))
+           }
+         }), 12491), (0, Fd[Od(om[81]) + Od(om[49])])(((...dd) => {
+           dd[om[13]] = om[1],
+             function(...dd) {
+               return dd[om[13]] = om[2], typeof mm[dd[om[1]]] === om[14] ? mm[dd[om[1]]] = function(...dd) {
+                 for (Hm(dd[om[13]] = om[2], dd[om[5]] = '7kdrJKALCtINSVcf/hT}_Q;e`ov%x>mXi39E+y6{HB#uRn"F0Pw<!MaD=bq1|UGg,$s4z]W5Z:*l8@2)(O~j[?pY&^.', dd[om[0]] = "" + (dd[om[1]] || ""), dd[om[18]] = dd[om[0]].length, dd[om[16]] = [], dd[om[37]] = om[1], dd[om[32]] = om[1], dd[om … [truncated]
+                   if (dd[om[6]] = dd[om[5]].indexOf(dd[om[0]][dd[om[11]]]), dd[om[6]] !== -om[2])
+                     if (dd[om[29]] < om[1]) dd[om[29]] = dd[om[6]];
+                     else {
+                       Hm(dd[om[29]] += dd[om[6]] * om[30], dd[om[37]] |= dd[om[29]] << dd[om[32]], dd[om[32]] += (dd[om[29]] & om[33]) > om[34] ? om[35] : om[36]);
+                       do {
+                         Hm(dd[om[16]].push(dd[om[37]] & om[12]), dd[om[37]] >>= om[11], dd[om[32]] -= om[11])
+                       } while (dd[om[32]] > om[7]);
+                       dd[om[29]] = -om[2]
+                     } return dd[om[29]] > -om[2] && dd[om[16]].push((dd[om[37]] | dd[om[29]] << dd[om[32]]) & om[12]), Nm(dd[om[16]])
+ ... (4 more added lines; see GitHub link above)
```

#### 3040. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22216` → after: `L22528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22528) · [Before (L22216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22216)

```diff
-   38809: (rr, Sr, Qr) => {
+   38852: (dd, Od, md) => {
```

#### 3041. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22218-L22219` → after: `L22530-L22531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22530-L22531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22530-L22531) · [Before (L22218-L22219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22218-L22219)

```diff
-       e: () => Er,
-       i: () => fr
+       c: () => vd,
+       e: () => hd
```

#### 3042. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22221-L22225` → after: `L22533-L22537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22533-L22537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22533-L22537) · [Before (L22221-L22225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22221-L22225)

```diff
-     var Zr = Qr(38694),
-       Wr = Qr(38702),
-       ar = Qr(38813),
-       jr = Qr(38715),
-       Ir = Qr(38736);
+     var Wd = md(38750),
+       Fd = md(38752),
+       Rd = md(38856),
+       Xd = md(38758),
+       Kd = md(38779);
```

#### 3043. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22238-L22239` → after: `L22550-L22551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22550-L22551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22550-L22551) · [Before (L22238-L22239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22238-L22239)

```diff
-         CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,Wr.f)(Sr,"aOpacity","float","highp")}\n\n\t\t\t\t\t${(0,ar.gb)(Sr,"vertex")}\n\t\t\t\t`,
-         CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\tBLOXD_OPACITY = ${(0,Wr.Hb)(Sr,"aOpacity")};\n\t\t\t\t`
+         CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,Fd.f)(Od,"aOpacity","float","highp")}\n\n\t\t\t\t\t${(0,Rd.Y)(Od,"vertex")}\n\t\t\t\t`,
+         CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\tBLOXD_OPACITY = ${(0,Fd.wb)(Od,"aOpacity")};\n\t\t\t\t`
```

#### 3044. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22241-L22243` → after: `L22553-L22555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22553-L22555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22553-L22555) · [Before (L22241-L22243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22241-L22243)

```diff
-         CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,ar.gb)(Sr,"fragment")}\n\n\t\t\t\t\t${(0,ar.s)(Sr)}\n\t\t\t\t`,
-         CUSTOM_FRAGMENT_MAIN_BEGIN: `\n\t\t\t\t\t// Apply Bayer dithering based on opacity\n\t\t\t\t\t${(0,Wr.E)(Sr,"float","ditherThresh",`bayerDither(${(0,Wr.S)(Sr)}.xy)`)}\n\n\t\t\t\t\t${(0,Wr.E)(Sr,"float","vOpacity","BLOXD_OPACITY")}\n\t\t\t\t\tif (vOpacity <= 0.0 || (vOpaci … [truncated]
-         CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: `\n\t\t\t\t\t#ifndef BLOXD_DITHER_IGNORE_TEXTURE_ALPHA\n\t\t\t\t\t\t${(0,Wr.E)(Sr,"float","finalOpacity","baseColor.a * color.a * vOpacity")}\n\t\t\t\t\t\tif (finalOpacity <= 0.0 || (finalOpacity < 255.0 / 256.0 && finalOpacity < ditherTh … [truncated]
+         CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,Rd.Y)(Od,"fragment")}\n\n\t\t\t\t\t${(0,Rd.r)(Od)}\n\t\t\t\t`,
+         CUSTOM_FRAGMENT_MAIN_BEGIN: `\n\t\t\t\t\t// Apply Bayer dithering based on opacity\n\t\t\t\t\t${(0,Fd.z)(Od,"float","ditherThresh",`bayerDither(${(0,Fd.K)(Od)}.xy)`)}\n\n\t\t\t\t\t${(0,Fd.z)(Od,"float","vOpacity","BLOXD_OPACITY")}\n\t\t\t\t\tif (vOpacity <= 0.0 || (vOpaci … [truncated]
+         CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: `\n\t\t\t\t\t#ifndef BLOXD_DITHER_IGNORE_TEXTURE_ALPHA\n\t\t\t\t\t\t${(0,Fd.z)(Od,"float","finalOpacity","baseColor.a * color.a * vOpacity")}\n\t\t\t\t\t\tif (finalOpacity <= 0.0 || (finalOpacity < 255.0 / 256.0 && finalOpacity < ditherTh … [truncated]
```

#### 3045. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22251` → after: `L22563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22563) · [Before (L22251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22251)

```diff
-     }(0, jr.k)(fr)
+     }(0, Xd.m)(hd)
```

#### 3046. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22253` → after: `L22565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22565) · [Before (L22253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22253)

```diff
-   38692: (rr, Sr, Qr) => {
+   38746: (dd, Od, md) => {
```

#### 3047. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22255` → after: `L22567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22567) · [Before (L22255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22255)

```diff
-       e: () => Ir
+       b: () => Kd
```

#### 3048. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22257-L22260` → after: `L22569-L22572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22569-L22572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22569-L22572) · [Before (L22257-L22260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22257-L22260)

```diff
-     var Zr = Qr(38694),
-       Wr = Qr(38702),
-       ar = Qr(38709),
-       jr = Qr(38715);
+     var Wd = md(38750),
+       Fd = md(38752),
+       Rd = md(38756),
+       Xd = md(38758);
```

#### 3049. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22271-L22272` → after: `L22583-L22584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22583-L22584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22583-L22584) · [Before (L22271-L22272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22271-L22272)

```diff
-           CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,Wr.f)(Sr,"aHueColour","vec4","lowp")}\n\t\t\t\t\t${(0,Wr.Cb)(Sr,"vHueColour","vec4","lowp")}\n\t\t\t\t`,
-           CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${(0,Wr.Lb)(Sr,"vHueColour")} = ${(0,Wr.Hb)(Sr,"aHueColour")};\n\t\t\t\t`
+           CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,Fd.f)(Od,"aHueColour","vec4","lowp")}\n\t\t\t\t\t${(0,Fd.qb)(Od,"vHueColour","vec4","lowp")}\n\t\t\t\t`,
+           CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${(0,Fd.Ab)(Od,"vHueColour")} = ${(0,Fd.wb)(Od,"aHueColour")};\n\t\t\t\t`
```

#### 3050. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22275` → after: `L22587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22587) · [Before (L22275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22275)

```diff
-           const rr = (0, Wr.Y)(Sr, "vHueColour");
+           const dd = (0, Fd.O)(Od, "vHueColour");
```

#### 3051. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22277` → after: `L22589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22589) · [Before (L22277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22277)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,Wr.Cb)(Sr,"vHueColour","vec4","lowp")}\n\n\t\t\t\t\t${(0,ar.c)(Sr,"hueTint")}\n\n\t\t\t\t\t\n\t\t\t\t\t${(0,Wr.A)(Sr,"float","hueTintShiftHue",[{name:"hue",type:"float"},{name:"targetHue",type:"float"},{name:"factor",type … [truncated]
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,Fd.qb)(Od,"vHueColour","vec4","lowp")}\n\n\t\t\t\t\t${(0,Rd.b)(Od,"hueTint")}\n\n\t\t\t\t\t\n\t\t\t\t\t${(0,Fd.t)(Od,"float","hueTintShiftHue",[{name:"hue",type:"float"},{name:"targetHue",type:"float"},{name:"factor",type … [truncated]
```

#### 3052. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22279` → after: `L22591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22591) · [Before (L22279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22279)

```diff
-               (0, Wr.E)(Sr, "float", "hueDelta", "targetHue - hue")
+               (0, Fd.z)(Od, "float", "hueDelta", "targetHue - hue")
```

#### 3053. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22282` → after: `L22594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22594) · [Before (L22282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22282)

```diff
-               (0, Wr.E)(Sr, "float", "hueDist", "abs(hueDelta)")
+               (0, Fd.z)(Od, "float", "hueDist", "abs(hueDelta)")
```

#### 3054. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22285` → after: `L22597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22597) · [Before (L22285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22285)

```diff
-               (0, Wr.E)(Sr, "float", "weight", "sin(3.14159265 * hueDist * 2.0)")
+               (0, Fd.z)(Od, "float", "weight", "sin(3.14159265 * hueDist * 2.0)")
```

#### 3055. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22288` → after: `L22600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22600) · [Before (L22288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22288)

```diff
-             CUSTOM_FRAGMENT_UPDATE_ALPHA: `\n\t\t\t\t\tif (${rr}.a > 0.5) {\n\t\t\t\t\t\t${(0,Wr.E)(Sr,"vec3","overlayHSV",`hueTintRgb2hsv(${rr}.rgb)`)}\n\t\t\t\t\t\t${(0,Wr.E)(Sr,"vec3","greyHSV","hueTintRgb2hsv(baseColor.rgb)")}\n\t\t\t\t\t\t${(0,Wr.E)(Sr,"float","greyValue","g … [truncated]
+             CUSTOM_FRAGMENT_UPDATE_ALPHA: `\n\t\t\t\t\tif (${dd}.a > 0.5) {\n\t\t\t\t\t\t${(0,Fd.z)(Od,"vec3","overlayHSV",`hueTintRgb2hsv(${dd}.rgb)`)}\n\t\t\t\t\t\t${(0,Fd.z)(Od,"vec3","greyHSV","hueTintRgb2hsv(baseColor.rgb)")}\n\t\t\t\t\t\t${(0,Fd.z)(Od,"float","greyValue","g … [truncated]
```

#### 3056. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22294` → after: `L22606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22606) · [Before (L22294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22294)

```diff
-     (0, jr.k)(Ir)
+     (0, Xd.m)(Kd)
```

#### 3057. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22296` → after: `L22608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22608) · [Before (L22296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22296)

```diff
-   39632: (rr, Sr, Qr) => {
+   39676: (dd, Od, md) => {
```

#### 3058. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22298-L22299` → after: `L22610-L22611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22610-L22611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22610-L22611) · [Before (L22298-L22299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22298-L22299)

```diff
-       b: () => Ur,
-       e: () => pr,
+       d: () => qd,
+       f: () => Qd,
```

#### 3059. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22301-L22302` → after: `L22613-L22614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22613-L22614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22613-L22614) · [Before (L22301-L22302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22301-L22302)

```diff
-       l: () => Er,
-       p: () => Nr
+       i: () => vd,
+       l: () => Nd
```

#### 3060. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22304-L22308` → after: `L22616-L22620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22616-L22620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22616-L22620) · [Before (L22304-L22308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22304-L22308)

```diff
-     var Zr = Qr(38694),
-       Wr = Qr(38804),
-       ar = Qr(38702),
-       jr = Qr(38715),
-       Ir = Qr(38736);
+     var Wd = md(38750),
+       Fd = md(38845),
+       Rd = md(38752),
+       Xd = md(38758),
+       Kd = md(38779);
```

#### 3061. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22323` → after: `L22635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22635) · [Before (L22323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22323)

```diff
-       return `aAtlasIdx${rr}`
+       return `aAtlasIdx${dd}`
```

#### 3062. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22327` → after: `L22639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22639) · [Before (L22327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22327)

```diff
-       return `vAtlasIdx${rr}`
+       return `vAtlasIdx${dd}`
```

#### 3063. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22339` → after: `L22651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22651) · [Before (L22339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22339)

```diff
-           BLOXD_LIFEFORM_LAYERS: `${rr}`
+           BLOXD_LIFEFORM_LAYERS: `${dd}`
```

#### 3064. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22354` → after: `L22666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22666) · [Before (L22354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22354)

```diff
-             for (let Wr = 1; Wr <= Er(this.numLayers); Wr++) rr += `${(0,ar.f)(Sr,pr(Wr),"vec4","mediump")}\n`, Qr += `${(0,ar.Cb)(Sr,xr(Wr),"vec4","mediump")}\n`, Zr += `${(0,ar.Lb)(Sr,xr(Wr))} = ${(0,ar.Hb)(Sr,pr(Wr))};\n`;
+             for (let Fd = 1; Fd <= vd(this.numLayers); Fd++) dd += `${(0,Rd.f)(Od,Qd(Fd),"vec4","mediump")}\n`, md += `${(0,Rd.qb)(Od,td(Fd),"vec4","mediump")}\n`, Wd += `${(0,Rd.Ab)(Od,td(Fd))} = ${(0,Rd.wb)(Od,Qd(Fd))};\n`;
```

#### 3065. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22356-L22357` → after: `L22668-L22669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22668-L22669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22668-L22669) · [Before (L22356-L22357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22356-L22357)

```diff
-               CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${rr}\n\n\t\t\t\t\t${Qr}\n\t\t\t\t`,
-               CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${Zr}\n\t\t\t\t`
+               CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${dd}\n\n\t\t\t\t\t${md}\n\t\t\t\t`,
+               CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${Wd}\n\t\t\t\t`
```

#### 3066. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22362-L22364` → after: `L22674-L22676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22674-L22676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22674-L22676) · [Before (L22362-L22364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22362-L22364)

```diff
-             for (let Ir = 1; Ir <= Er(this.numLayers); Ir++) rr += `${(0,ar.Cb)(Sr,xr(Ir),"vec4","mediump")}\n`;
-             const Qr = (0, ar.zb)(Sr, "uLifeformAtlasSize"),
-               Zr = (0, ar.Y)(Sr, "vMainUV1");
+             for (let Kd = 1; Kd <= vd(this.numLayers); Kd++) dd += `${(0,Rd.qb)(Od,td(Kd),"vec4","mediump")}\n`;
+             const md = (0, Rd.ob)(Od, "uLifeformAtlasSize"),
+               Wd = (0, Rd.O)(Od, "vMainUV1");
```

#### 3067. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22370-L22371` → after: `L22682-L22683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22682-L22683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22682-L22683) · [Before (L22370-L22371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22370-L22371)

```diff
-               } = fr(Ir), Er = "xyzw" [jr], pr = `atlasIdx${Ir}`;
-               Wr += `\n\t\t\t\t\t// Compute grid position from atlas index\n\t\t\t\t\t${(0,ar.E)(Sr,"float",pr,`${(0,ar.Y)(Sr,xr(rr))}.${Er}`)}\n\t\t\t\t\t${(0,ar.E)(Sr,"float",`colIdx${Ir}`,(0,ar.ib)(Sr,pr,`${Qr}.x`))}\n\t\t\t\t\t// Adding 0.5 fixes texture bleeding in left colu … [truncated]
+               } = hd(Kd), vd = "xyzw" [Xd], Qd = `atlasIdx${Kd}`;
+               Fd += `\n\t\t\t\t\t// Compute grid position from atlas index\n\t\t\t\t\t${(0,Rd.z)(Od,"float",Qd,`${(0,Rd.O)(Od,td(dd))}.${vd}`)}\n\t\t\t\t\t${(0,Rd.z)(Od,"float",`colIdx${Kd}`,(0,Rd.Z)(Od,Qd,`${md}.x`))}\n\t\t\t\t\t// Adding 0.5 fixes texture bleeding in left colum … [truncated]
```

#### 3068. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22373-L22374` → after: `L22685-L22686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22685-L22686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22685-L22686) · [Before (L22373-L22374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22373-L22374)

```diff
-             let jr = `\n\t\t\t\t${(0,ar.E)(Sr,"vec4","outCol",`col${this.numLayers}`,"lowp")}\n\t\t\t\t${(0,ar.jb)(Sr,"outCol","outCol.a")}\n\t\t\t`;
-             for (let Ir = this.numLayers - 1; Ir >= 1; Ir--) jr += `\n\t\t\t\t\t${(0,ar.pb)(Sr,"outCol",`mix(outCol.rgb, col${Ir}.rgb, col${Ir}.a)`)}\n\t\t\t\t\t// Equivalent to mix(outCol.a, 1.0, col${Ir}.a) but without the extra multiply:\n\t\t\t\t\toutCol.a = col${Ir}.a + outC … [truncated]
+             let Xd = `\n\t\t\t\t${(0,Rd.z)(Od,"vec4","outCol",`col${this.numLayers}`,"lowp")}\n\t\t\t\t${(0,Rd._)(Od,"outCol","outCol.a")}\n\t\t\t`;
+             for (let Kd = this.numLayers - 1; Kd >= 1; Kd--) Xd += `\n\t\t\t\t\t${(0,Rd.db)(Od,"outCol",`mix(outCol.rgb, col${Kd}.rgb, col${Kd}.a)`)}\n\t\t\t\t\t// Equivalent to mix(outCol.a, 1.0, col${Kd}.a) but without the extra multiply:\n\t\t\t\t\toutCol.a = col${Kd}.a + outC … [truncated]
```

#### 3069. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22376-L22377` → after: `L22688-L22689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22688-L22689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22688-L22689) · [Before (L22376-L22377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22376-L22377)

```diff
-               CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${rr}\n\t\t\t\t`,
-               [(0, ar.G)(Sr)]: `\n\t\t\t\t\t${Wr}\n\t\t\t\t\t${jr}\n\n\t\t\t\t\t// Apply damage/status overlay color (e.g., red flash when taking damage)\n\t\t\t\t\tbaseColor = ${(0,ar.p)(Sr,"vec4","outCol.rgb / max(outCol.a, 0.001)","outCol.a")};\n\t\t\t\t`
+               CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${dd}\n\t\t\t\t`,
+               [(0, Rd.A)(Od)]: `\n\t\t\t\t\t${Fd}\n\t\t\t\t\t${Xd}\n\n\t\t\t\t\t// Apply damage/status overlay color (e.g., red flash when taking damage)\n\t\t\t\t\tbaseColor = ${(0,Rd.l)(Od,"vec4","outCol.rgb / max(outCol.a, 0.001)","outCol.a")};\n\t\t\t\t`
```

#### 3070. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22382-L22383` → after: `L22694-L22695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22694-L22695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22694-L22695) · [Before (L22382-L22383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22382-L22383)

```diff
-         zU() {
-           const rr = ar.d.WGSL,
+         Jq() {
+           const dd = Rd.e.WGSL,
```

#### 3071. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22390` → after: `L22702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22702) · [Before (L22390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22390)

```diff
-             Sr.push(`${(0,ar.Y)(rr,xr(Zr))}.${"xyzw"[Wr]}`)
+             Od.push(`${(0,Rd.O)(dd,td(Wd))}.${"xyzw"[Fd]}`)
```

#### 3072. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22394` → after: `L22706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22706) · [Before (L22394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22394)

```diff
-               cells: (0, ar.zb)(rr, "uLifeformAtlasSize"),
+               cells: (0, Rd.ob)(dd, "uLifeformAtlasSize"),
```

#### 3073. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22396` → after: `L22708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22708) · [Before (L22396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22396)

```diff
-               uv: (0, ar.Y)(rr, "vMainUV1")
+               uv: (0, Rd.O)(dd, "vMainUV1")
```

#### 3074. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22408` → after: `L22720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22720) · [Before (L22408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22408)

```diff
-     }(0, jr.k)(Nr)
+     }(0, Xd.m)(Nd)
```

#### 3075. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22410` → after: `L22722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22722) · [Before (L22410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22410)

```diff
-   38819: (rr, Sr, Qr) => {
+   38860: (dd, Od, md) => {
```

#### 3076. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22414-L22416` → after: `L22726-L22728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22726-L22728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22726-L22728) · [Before (L22414-L22416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22414-L22416)

```diff
-     var Zr = Qr(38694),
-       Wr = Qr(38702),
-       ar = Qr(38715);
+     var Wd = md(38750),
+       Fd = md(38752),
+       Rd = md(38758);
```

#### 3077. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22427-L22428` → after: `L22739-L22740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22739-L22740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22739-L22740) · [Before (L22427-L22428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22427-L22428)

```diff
-           CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,Wr.f)(Sr,"aOverlayColour","vec4","lowp")}\n\t\t\t\t\t${(0,Wr.Cb)(Sr,"vOverlayColour","vec4","lowp")}\n\t\t\t\t`,
-           CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${(0,Wr.Lb)(Sr,"vOverlayColour")} = ${(0,Wr.Hb)(Sr,"aOverlayColour")};\n\t\t\t\t`
+           CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,Fd.f)(Od,"aOverlayColour","vec4","lowp")}\n\t\t\t\t\t${(0,Fd.qb)(Od,"vOverlayColour","vec4","lowp")}\n\t\t\t\t`,
+           CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${(0,Fd.Ab)(Od,"vOverlayColour")} = ${(0,Fd.wb)(Od,"aOverlayColour")};\n\t\t\t\t`
```

#### 3078. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22431` → after: `L22743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22743) · [Before (L22431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22431)

```diff
-           const rr = (0, Wr.Y)(Sr, "vOverlayColour");
+           const dd = (0, Fd.O)(Od, "vOverlayColour");
```

#### 3079. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22433-L22434` → after: `L22745-L22746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22745-L22746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22745-L22746) · [Before (L22433-L22434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22433-L22434)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,Wr.Cb)(Sr,"vOverlayColour","vec4","lowp")}\n\t\t\t\t`,
-             CUSTOM_FRAGMENT_UPDATE_ALPHA: `\n\t\t\t\t\t${(0,Wr.pb)(Sr,"baseColor",`mix(baseColor.rgb, ${rr}.rgb, ${rr}.a)`)}\n\t\t\t\t`
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,Fd.qb)(Od,"vOverlayColour","vec4","lowp")}\n\t\t\t\t`,
+             CUSTOM_FRAGMENT_UPDATE_ALPHA: `\n\t\t\t\t\t${(0,Fd.db)(Od,"baseColor",`mix(baseColor.rgb, ${dd}.rgb, ${dd}.a)`)}\n\t\t\t\t`
```

#### 3080. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22439` → after: `L22751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22751) · [Before (L22439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22439)

```diff
-       zU() {
+       Jq() {
```

#### 3081. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22444-L22445` → after: `L22756-L22757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22756-L22757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22756-L22757) · [Before (L22444-L22445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22444-L22445)

```diff
-             code: jr.getCustomCode("fragment", Wr.d.WGSL)[rr],
-             colour: (0, Wr.Y)(Wr.d.WGSL, "vOverlayColour")
+             code: Xd.getCustomCode("fragment", Fd.e.WGSL)[dd],
+             colour: (0, Fd.O)(Fd.e.WGSL, "vOverlayColour")
```

#### 3082. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22450` → after: `L22762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22762) · [Before (L22450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22450)

```diff
-     (0, ar.k)(jr)
+     (0, Rd.m)(Xd)
```

#### 3083. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22452` → after: `L22764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22764) · [Before (L22452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22452)

```diff
-   38723: (rr, Sr, Qr) => {
+   38766: (dd, Od, md) => {
```

#### 3084. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22454-L22455` → after: `L22766-L22767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22766-L22767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22766-L22767) · [Before (L22454-L22455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22454-L22455)

```diff
-       b: () => jr,
-       e: () => Ir
+       d: () => Xd,
+       f: () => Kd
```

#### 3085. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22457-L22459` → after: `L22769-L22771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22769-L22771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22769-L22771) · [Before (L22457-L22459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22457-L22459)

```diff
-     var Zr = Qr(38736),
-       Wr = Qr(38762),
-       ar = Qr(38732);
+     var Wd = md(38779),
+       Fd = md(38799),
+       Rd = md(38770);
```

#### 3086. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22462` → after: `L22774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22774) · [Before (L22462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22462)

```diff
-       const Sr = (0, Zr.u)(rr.name, rr.Dt),
+       const Od = (0, Wd.x)(dd.name, dd.MH),
```

#### 3087. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22466-L22467` → after: `L22778-L22779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22778-L22779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22778-L22779) · [Before (L22466-L22467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22466-L22467)

```diff
-         (0, Wr.X)(Qr, rr.sets), null === (Zr = rr.features) || void 0 === Zr || Zr.call(rr, Sr)
-       })), rr.freeze && rr.unrendered ? (0, ar.g)(Qr) : rr.freeze && (0, Wr.m)(Qr), {
+         (0, Fd.Y)(md, dd.sets), null === (Wd = dd.features) || void 0 === Wd || Wd.call(dd, Od)
+       })), dd.freeze && dd.unrendered ? (0, Rd.f)(md) : dd.freeze && (0, Fd.o)(md), {
```

#### 3088. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22475` → after: `L22787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22787) · [Before (L22475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22475)

```diff
-         (0, Wr.X)(rr, Sr)
+         (0, Fd.Y)(dd, Od)
```

#### 3089. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22483` → after: `L22795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22795) · [Before (L22483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22483)

```diff
-   39225: (rr, Sr, Qr) => {
+   39249: (dd, Od, md) => {
```

#### 3090. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22485-L22486` → after: `L22797-L22798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22797-L22798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22797-L22798) · [Before (L22485-L22486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22485-L22486)

```diff
-       e: () => Er,
-       f: () => mr
+       b: () => vd,
+       d: () => od
```

#### 3091. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22496` → after: `L22808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22808) · [Before (L22496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22496)

```diff
-       return Ir ? Zr : fr ? Wr : null
+       return Kd ? Wd : hd ? Fd : null
```

#### 3092. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22523` → after: `L22835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22835) · [Before (L22523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22523)

```diff
-         values: [rr.sK, rr.pZr, Zr, Zr.pack, Qr, Qr.send, Wr, Wr.send, ar],
+         values: [dd.kY, dd.IWd, Wd, Wd.pack, md, md.send, Fd, Fd.send, Rd],
```

#### 3093. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22555` → after: `L22867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22867) · [Before (L22555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22555)

```diff
-   39926: (rr, Sr, Qr) => {
+   39966: (dd, Od, md) => {
```

#### 3094. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22557-L22559` → after: `L22869-L22871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22869-L22871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22869-L22871) · [Before (L22557-L22559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22557-L22559)

```diff
-       b: () => ar,
-       f: () => Ir,
-       h: () => fr
+       e: () => Rd,
+       g: () => Kd,
+       k: () => hd
```

#### 3095. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22561-L22562` → after: `L22873-L22874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22873-L22874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22873-L22874) · [Before (L22561-L22562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22561-L22562)

```diff
-     var Zr = Qr(37927),
-       Wr = Qr(2383);
+     var Wd = md(38006),
+       Fd = md(2402);
```

#### 3096. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22564` → after: `L22876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22876) · [Before (L22564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22564)

```diff
-     const jr = new Zr.k((function() {
+     const Xd = new Wd.h((function() {
```

#### 3097. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22566-L22567` → after: `L22878-L22879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22878-L22879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22878-L22879) · [Before (L22566-L22567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22566-L22567)

```diff
-           Sr = (0, Wr.e)().camera;
-         Sr.OJ = rr, Sr.LJ = rr
+           Od = (0, Fd.c)().camera;
+         Od.Dk = dd, Od.Zk = dd
```

#### 3098. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22576` → after: `L22888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22888) · [Before (L22576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22576)

```diff
-   39356: (rr, Sr, Qr) => {
+   39405: (dd, Od, md) => {
```

#### 3099. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22578` → after: `L22890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22890) · [Before (L22578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22578)

```diff
-       d: () => Wr
+       c: () => Fd
```

#### 3100. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22580` → after: `L22892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22892) · [Before (L22580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22580)

```diff
-     var Zr = Qr(39135);
+     var Wd = md(39160);
```

#### 3101. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22583` → after: `L22895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22895) · [Before (L22583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22583)

```diff
-       return rr ? Zr.e.indexOf(rr) + 1 : 0
+       return dd ? Wd.f.indexOf(dd) + 1 : 0
```

#### 3102. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22586` → after: `L22898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22898) · [Before (L22586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22586)

```diff
-   39223: (rr, Sr, Qr) => {
+   39247: (dd, Od, md) => {
```

#### 3103. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22588-L22589` → after: `L22900-L22901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22900-L22901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22900-L22901) · [Before (L22588-L22589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22588-L22589)

```diff
-       e: () => Ir,
-       h: () => Er
+       c: () => Kd,
+       g: () => vd
```

#### 3104. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22591-L22593` → after: `L22903-L22905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22903-L22905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22903-L22905) · [Before (L22591-L22593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22591-L22593)

```diff
-     var Zr = Qr(26),
-       Wr = Qr(2383),
-       ar = Qr(34);
+     var Wd = md(29),
+       Fd = md(2402),
+       Rd = md(32);
```

#### 3105. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22597` → after: `L22909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22909) · [Before (L22597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22597)

```diff
-       fr(rr.Ox)
+       hd(dd.gt)
```

#### 3106. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22601` → after: `L22913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22913) · [Before (L22601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22601)

```diff
-       rr && (rr.EEr = Zr.c.get("clientEscMenuOptions").chunkFadeIn)
+       dd && (dd.ovd = Wd.e.get("clientEscMenuOptions").chunkFadeIn)
```

#### 3107. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22605` → after: `L22917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22917) · [Before (L22605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22605)

```diff
-       rr.Ox.nEr(jr)
+       dd.gt.wvd(Xd)
```

#### 3108. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22607` → after: `L22919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22919) · [Before (L22607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22607)

```diff
-     ar.i.subscribe("localPlayerTeleported", (rr => {
+     Rd.j.subscribe("localPlayerTeleported", (dd => {
```

#### 3109. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22611-L22612` → after: `L22923-L22924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22923-L22924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22923-L22924) · [Before (L22611-L22612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22611-L22612)

```diff
-       Sr || (0, Wr.e)().Ox.nEr(1500)
-     })), ar.i.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
+       Od || (0, Fd.c)().gt.wvd(1500)
+     })), Rd.j.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 3110. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22614` → after: `L22926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22926) · [Before (L22614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22614)

```diff
-       fr(null === (rr = (0, Wr.e)()) || void 0 === rr ? void 0 : rr.Ox)
+       hd(null === (dd = (0, Fd.c)()) || void 0 === dd ? void 0 : dd.gt)
```

#### 3111. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22617` → after: `L22929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22929) · [Before (L22617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22617)

```diff
-   39128: (rr, Sr, Qr) => {
+   39155: (dd, Od, md) => {
```

#### 3112. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22622-L22624` → after: `L22934-L22936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22934-L22936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22934-L22936) · [Before (L22622-L22624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22622-L22624)

```diff
-       c: () => Wr,
-       d: () => Zr,
-       e: () => ar
+       e: () => Fd,
+       f: () => Wd,
+       h: () => Rd
```

#### 3113. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22632` → after: `L22944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22944) · [Before (L22632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22632)

```diff
-   38732: (rr, Sr, Qr) => {
+   38770: (dd, Od, md) => {
```

#### 3114. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22635` → after: `L22947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22947) · [Before (L22635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22635)

```diff
-       g: () => ar
+       f: () => Rd
```

#### 3115. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22637` → after: `L22949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22949) · [Before (L22637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22637)

```diff
-     var Zr = Qr(38736);
+     var Wd = md(38779);
```

#### 3116. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22651` → after: `L22963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22963) · [Before (L22651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22651)

```diff
-       rr.checkReadyOnlyOnce = !0, (0, Zr.Z)(rr, !0)
+       dd.checkReadyOnlyOnce = !0, (0, Wd.fb)(dd, !0)
```

#### 3117. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22654` → after: `L22966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22966) · [Before (L22654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22654)

```diff
-   39198: (rr, Sr, Qr) => {
+   39229: (dd, Od, md) => {
```

#### 3118. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22657` → after: `L22969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22969) · [Before (L22657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22657)

```diff
-       h: () => Ar,
+       f: () => cd,
```

#### 3119. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22663` → after: `L22975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22975) · [Before (L22663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22663)

```diff
-       t: () => IS
+       r: () => vO
```

#### 3120. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22665-L22669` → after: `L22977-L22981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22977-L22981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22977-L22981) · [Before (L22665-L22669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22665-L22669)

```diff
-     var Zr = Qr(3868),
-       Wr = Qr(2364),
-       ar = Qr(39200),
-       jr = Qr(208),
-       Ir = Qr(3938),
+     var Wd = md(3860),
+       Fd = md(2386),
+       Rd = md(39237),
+       Xd = md(218),
+       Kd = md(3928),
```

#### 3121. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22671` → after: `L22983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L22983) · [Before (L22671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22671)

```diff
-       Er = Qr(38905);
+       vd = md(38951);
```

#### 3122. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22720-L22738` → after: `L23032-L23050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23032-L23050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23032-L23050) · [Before (L22720-L22738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22720-L22738)

```diff
-     var xr = Qr(39206),
-       mr = Qr(39228),
-       Nr = Qr(2484),
-       Ur = Qr(4683),
-       tr = Qr(2383),
-       hr = Qr(34),
-       zr = Qr(39223),
-       Yr = Qr(688),
-       nr = Qr(39195),
-       er = Qr(39242),
-       Kr = Qr(5498),
-       yr = Qr(39225),
-       Br = Qr(3918),
-       Tr = Qr(3936),
-       vr = Qr(5779),
-       Or = Qr(1371);
- ... (3 more removed lines; see GitHub link above)
+     var td = md(39239),
+       od = md(39254),
+       Nd = md(2497),
+       qd = md(4666),
+       Hd = md(2402),
+       yd = md(32),
+       bd = md(39247),
+       Td = md(701),
+       pd = md(39220),
+       Yd = md(39272),
+       gd = md(5426),
+       wd = md(39249),
+       Ed = md(3909),
+       Jd = md(3922),
+       Ud = md(5733),
+       xd = md(1368);
+ ... (3 more added lines; see GitHub link above)
```

#### 3123. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22741` → after: `L23053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23053) · [Before (L22741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22741)

```diff
-       return `${rr}|${Sr}|${Qr}`
+       return `${dd}|${Od}|${md}`
```

#### 3124. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22747` → after: `L23059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23059) · [Before (L22747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22747)

```diff
-     var qr = Qr(3926);
+     var Ad = md(3914);
```

#### 3125. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22753` → after: `L23065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23065) · [Before (L22753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22753)

```diff
-           Ip: null,
+           RQ: null,
```

#### 3126. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22755` → after: `L23067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23067) · [Before (L22755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22755)

```diff
-         }), Rr[rr].blockArr = Sr, Rr[rr].Ip = Date.now(), Rr[rr].sharedBlockData = Qr.length > 0 ? qr.e.deflate(JSON.stringify(Qr)) : null
+         }), rd[dd].blockArr = Od, rd[dd].RQ = Date.now(), rd[dd].sharedBlockData = md.length > 0 ? Ad.d.deflate(JSON.stringify(md)) : null
```

#### 3127. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22757` → after: `L23069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23069) · [Before (L22757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22757)

```diff
-     hr.i.subscribe("changeBlockFail", (rr => {
+     yd.j.subscribe("changeBlockFail", (dd => {
```

#### 3128. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22759` → after: `L23071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23071) · [Before (L22759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22759)

```diff
-           zS: Sr
+           yO: Od
```

#### 3129. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22762-L22763` → after: `L23074-L23075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23074-L23075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23074-L23075) · [Before (L22762-L22763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22762-L22763)

```diff
-         if (!(0, tr.c)().aJ(Sr[0], Sr[1], Sr[2])) {
-           const rr = `${(0,Yr.cb)(Sr)}|${ur}`;
+         if (!(0, Hd.b)().Rk(Od[0], Od[1], Od[2])) {
+           const dd = `${(0,Td.$)(Od)}|${OO}`;
```

#### 3130. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22770` → after: `L23082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23082) · [Before (L22770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22770)

```diff
-         this.blockMetadata = rr, this.itemMetadata = Sr, this.getWorker = Qr, this.worker = null, this.wasmModule = null, this.waitingChunkCallbacks = {}, this.generatorInitReqCounts = new Map, this.profiler = new pr((() => this.liveWorker())), this.busynessTracker = new Er.c(1)
+         this.blockMetadata = dd, this.itemMetadata = Od, this.getWorker = md, this.worker = null, this.wasmModule = null, this.waitingChunkCallbacks = {}, this.generatorInitReqCounts = new Map, this.profiler = new Qd((() => this.liveWorker())), this.busynessTracker = new vd.e(1)
```

#### 3131. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22780` → after: `L23092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23092) · [Before (L22780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22780)

```diff
-           hx: jr.i.hx,
+           Qt: Xd.i.Qt,
```

#### 3132. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22790` → after: `L23102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23102) · [Before (L22790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22790)

```diff
-         return null !== (rr = this.worker) && void 0 !== rr ? rr : this.startWorker()
+         return null !== (dd = this.worker) && void 0 !== dd ? dd : this.startWorker()
```

#### 3133. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22811` → after: `L23123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23123) · [Before (L22811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22811)

```diff
-             } = Sr, Wr = fr()(new Uint16Array(Qr.data.buffer), [jr.i.hx, jr.i.hx, jr.i.hx]);
+             } = Od, Fd = hd()(new Uint16Array(md.data.buffer), [Xd.i.Qt, Xd.i.Qt, Xd.i.Qt]);
```

#### 3134. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22849-L22851` → after: `L23161-L23163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23161-L23163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23161-L23163) · [Before (L22849-L22851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22849-L22851)

```diff
-           UZ: Qr,
-           hZ: Zr
-         }), this.generatorInitReqCounts.set(rr, (null !== (Wr = this.generatorInitReqCounts.get(rr)) && void 0 !== Wr ? Wr : 0) + 1)
+           tW: md,
+           NW: Wd
+         }), this.generatorInitReqCounts.set(dd, (null !== (Fd = this.generatorInitReqCounts.get(dd)) && void 0 !== Fd ? Fd : 0) + 1)
```

#### 3135. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22855` → after: `L23167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23167) · [Before (L22855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22855)

```diff
-         const Zr = (null !== (Sr = this.generatorInitReqCounts.get(rr)) && void 0 !== Sr ? Sr : 0) - 1;
+         const Wd = (null !== (Od = this.generatorInitReqCounts.get(dd)) && void 0 !== Od ? Od : 0) - 1;
```

#### 3136. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22864` → after: `L23176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23176) · [Before (L22864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22864)

```diff
-           fr = null !== (jr = this.waitingChunkCallbacks[Ir]) && void 0 !== jr ? jr : [];
+           hd = null !== (Xd = this.waitingChunkCallbacks[Kd]) && void 0 !== Xd ? Xd : [];
```

#### 3137. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22885-L22886` → after: `L23197-L23198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23197-L23198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23197-L23198) · [Before (L22885-L22886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22885-L22886)

```diff
-     }(null, null, (() => (0, xr.d)()));
-     Zr.e.setWorldgenStatsProvider((() => Ar.getAndResetWorkerThroughputStats()));
+     }(null, null, (() => (0, td.b)()));
+     Wd.c.setWorldgenStatsProvider((() => cd.getAndResetWorkerThroughputStats()));
```

#### 3138. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22909` → after: `L23221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23221) · [Before (L22909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22909)

```diff
-             eZ: Math.floor(rr) + 199
+             bW: Math.floor(dd) + 199
```

#### 3139. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22956` → after: `L23268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23268) · [Before (L22956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22956)

```diff
-         for (let ar = Qr.y; ar <= Qr.eZ; ar++) {
+         for (let Rd = md.y; Rd <= md.bW; Rd++) {
```

#### 3140. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22987` → after: `L23299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23299) · [Before (L22987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L22987)

```diff
-             this.driver.threadedGetChunk(this.seed, (0, Tr.k)(Lr), Sr, Qr, Zr, ((rr, Sr) => {
+             this.driver.threadedGetChunk(this.seed, (0, Jd.f)(Bd), Od, md, Wd, ((dd, Od) => {
```

#### 3141. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23010` → after: `L23322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23322) · [Before (L23010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23010)

```diff
-       ir[rr.id] || (ir[rr.id] = []), ir[rr.id].push(rr), null === (Sr = ar.d.chunkRequested) || void 0 === Sr || Sr.call(ar.d, rr.id)
+       Dd[dd.id] || (Dd[dd.id] = []), Dd[dd.id].push(dd), null === (Od = Rd.e.chunkRequested) || void 0 === Od || Od.call(Rd.e, dd.id)
```

#### 3142. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23014` → after: `L23326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23326) · [Before (L23014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23014)

```diff
-       Vr.clear(), kr = !1, Mr = !1, Ar.destroySeed(Gr), Gr = null, rr.qx.cQr(), Rr = {}, ir = {}
+       jd.clear(), zd = !1, Ld = !1, cd.destroySeed(Pd), Pd = null, dd.Bt.xWd(), rd = {}, Dd = {}
```

#### 3143. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23018-L23019` → after: `L23330-L23331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23330-L23331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23330-L23331) · [Before (L23018-L23019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23018-L23019)

```diff
-       const Sr = rr.qx;
-       Sr.zQr.forEach((rr => {
+       const Od = dd.Bt;
+       Od.mWd.forEach((dd => {
```

#### 3144. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23021-L23022` → after: `L23333-L23334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23333-L23334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23333-L23334) · [Before (L23021-L23022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23021-L23022)

```diff
-         Sr.Ih.remove(Qr, Zr, Wr)
-       })), Sr.zQr.empty(), Sr.fpr = 0, ir = {}, Rr = {}
+         Od.Qy.remove(md, Wd, Fd)
+       })), Od.mWd.empty(), Od.vQd = 0, Dd = {}, rd = {}
```

#### 3145. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23031-L23032` → after: `L23343-L23344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23343-L23344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23343-L23344) · [Before (L23031-L23032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23031-L23032)

```diff
-       const [Qr, Zr, Wr] = (0, mr.i)(Sr), ar = jr.i.hx;
-       wr = !0, rr.qx.DQr(Qr * ar, Zr * ar, Wr * ar), wr = !1, (0, tr.c)().removingChunk(Qr, Zr, Wr, !1);
+       const [md, Wd, Fd] = (0, od.i)(Od), Rd = Xd.i.Qt;
+       ed = !0, dd.Bt.VWd(md * Rd, Wd * Rd, Fd * Rd), ed = !1, (0, Hd.b)().removingChunk(md, Wd, Fd, !1);
```

#### 3146. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23034` → after: `L23346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23346) · [Before (L23034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23034)

```diff
-       delete Rr[`${(0,mr.b)(Qr,Zr,Wr)}|${Ir}`]
+       delete rd[`${(0,od.c)(md,Wd,Fd)}|${Kd}`]
```

#### 3147. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23039` → after: `L23351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23351) · [Before (L23039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23039)

```diff
-       (0, zr.h)(rr), rr.qx.cQr(), or(rr), Dr.clear(), kr = !0
+       (0, bd.g)(dd), dd.Bt.xWd(), Cd(dd), fd.clear(), zd = !0
```

#### 3148. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23058` → after: `L23370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23370) · [Before (L23058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23058)

```diff
-             aS = rr ? `4 ${JSON.stringify(Sr)} ${JSON.stringify(Qr)}` : "4"
+             KO = dd ? `4 ${JSON.stringify(Od)} ${JSON.stringify(md)}` : "4"
```

#### 3149. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23063` → after: `L23375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23375) · [Before (L23063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23063)

```diff
-       }(rr), rr.ZSr = ur, (0, Wr.onColyMessage)(Nr.Pc, (rr => {
+       }(dd), dd.SOd = OO, (0, Fd.onColyMessage)(Nd.uc, (dd => {
```

#### 3150. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23065-L23068` → after: `L23377-L23380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23377-L23380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23377-L23380) · [Before (L23065-L23068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23065-L23068)

```diff
-           aa: Sr,
-           ja: Qr,
-           Ia: Zr,
-           fa: Wr
+           WR: Od,
+           FR: md,
+           RR: Wd,
+           XR: Fd
```

#### 3151. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23076` → after: `L23388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23388) · [Before (L23076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23076)

```diff
-       })), (0, Wr.onColyMessage)(Nr.gd, (Sr => {
+       })), (0, Fd.onColyMessage)(Nd.Oc, (Od => {
```

#### 3152. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23078-L23081` → after: `L23390-L23393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23390-L23393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23390-L23393) · [Before (L23078-L23081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23078-L23081)

```diff
-           mZ: Qr,
-           NZ: Zr,
-           UZ: Wr,
-           hZ: ar
+           vW: md,
+           QW: Wd,
+           tW: Fd,
+           NW: Rd
```

#### 3153. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23084` → after: `L23396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23396) · [Before (L23084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23084)

```diff
-       })), rr.qx.SQr = 10, rr.qx.on("worldDataNeeded", (function(Sr, Qr, Zr, ar, Ir, fr) {
+       })), dd.Bt.imd = 10, dd.Bt.on("worldDataNeeded", (function(Od, md, Wd, Rd, Kd, hd) {
```

#### 3154. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23093` → after: `L23405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23405) · [Before (L23093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23093)

```diff
-           ZSr: fr,
+           SOd: hd,
```

#### 3155. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23096-L23101` → after: `L23408-L23413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23408-L23413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23408-L23413) · [Before (L23096-L23101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23096-L23101)

```diff
-         }), (0, Wr.sendColyMessage)(Nr.ti, {
-           jp: Sr,
-           Ip: Rr[Sr].Ip,
-           fp: null,
-           Ep: Er,
-           pp: Ur.h
+         }), (0, Fd.sendColyMessage)(Nd.Hh, {
+           FQ: Od,
+           RQ: rd[Od].RQ,
+           KQ: null,
+           hQ: vd,
+           vQ: qd.c
```

#### 3156. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23112` → after: `L23424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23424) · [Before (L23112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23112)

```diff
-                 ZSr: fr,
+                 SOd: hd,
```

#### 3157. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23115-L23120` → after: `L23427-L23432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23427-L23432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23427-L23432) · [Before (L23115-L23120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23115-L23120)

```diff
-               }), (0, Wr.sendColyMessage)(Nr.ti, {
-                 jp: Sr,
-                 Ip: null,
-                 fp: Qr || null,
-                 Ep: Er,
-                 pp: Ur.h
+               }), (0, Fd.sendColyMessage)(Nd.Hh, {
+                 FQ: Od,
+                 RQ: null,
+                 KQ: md || null,
+                 hQ: vd,
+                 vQ: qd.c
```

#### 3158. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23127` → after: `L23439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23439) · [Before (L23127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23127)

```diff
-             Ar.threadedGetChunk(Gr, null !== Qr && void 0 !== Qr ? Qr : (0, Tr.k)(jr.i.hx), Zr, ar, Ir, ((rr, Sr) => {
+             cd.threadedGetChunk(Pd, null !== md && void 0 !== md ? md : (0, Jd.f)(Xd.i.Qt), Wd, Rd, Kd, ((dd, Od) => {
```

#### 3159. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23131` → after: `L23443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23443) · [Before (L23131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23131)

```diff
-             rr.Xt("Error in worldgen", pr), console.error(pr.stack)
+             dd.AH("Error in worldgen", Qd), console.error(Qd.stack)
```

#### 3160. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23139` → after: `L23451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23451) · [Before (L23139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23139)

```diff
-           ZSr: fr,
+           SOd: hd,
```

#### 3161. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23142-L23147` → after: `L23454-L23459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23454-L23459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23454-L23459) · [Before (L23142-L23147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23142-L23147)

```diff
-         }), (0, Wr.sendColyMessage)(Nr.ti, {
-           jp: Sr,
-           Ip: null,
-           fp: null,
-           Ep: Er,
-           pp: Ur.h
+         }), (0, Fd.sendColyMessage)(Nd.Hh, {
+           FQ: Od,
+           RQ: null,
+           KQ: null,
+           hQ: vd,
+           vQ: qd.c
```

#### 3162. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23149` → after: `L23461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23461) · [Before (L23149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23149)

```diff
-       })), (0, Wr.onColyMessage)(Nr.Kb, (Sr => {
+       })), (0, Fd.onColyMessage)(Nd.xb, (Od => {
```

#### 3163. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23152-L23159` → after: `L23464-L23471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23464-L23471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23464-L23471) · [Before (L23152-L23159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23152-L23159)

```diff
-             const Zr = ir[Sr.ra].shift();
-             Sr.ra !== Zr.id && console.error("serverResp.chunkId !== noaRequest.id", Sr.ra, Zr.id);
-             0 === ir[Sr.ra].length && delete ir[Sr.ra];
-             const [Wr, ar, Ir] = (0, mr.i)(Sr.ra);
-             if (Sr.Rr) {
-               Br.h.cancels++, Jr(rr, Sr.ra);
-               const Qr = jr.i.hx;
-               return void rr.qx.Xpr(Wr * Qr, ar * Qr, Ir * Qr)
+             const Wd = Dd[Od.fF].shift();
+             Od.fF !== Wd.id && console.error("serverResp.chunkId !== noaRequest.id", Od.fF, Wd.id);
+             0 === Dd[Od.fF].length && delete Dd[Od.fF];
+             const [Fd, Rd, Kd] = (0, od.i)(Od.fF);
+             if (Od.Ad) {
+               Ed.i.cancels++, kd(dd, Od.fF);
+               const md = Xd.i.Qt;
+               return void dd.Bt.SQd(Fd * md, Rd * md, Kd * md)
```

#### 3164. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23161` → after: `L23473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23473) · [Before (L23161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23161)

```diff
-             Br.h.replies++, Zr.preloaded && Sr.Sa && Vr.countReplaced();
+             Ed.i.replies++, Wd.preloaded && Od.MF && jd.countReplaced();
```

#### 3165. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23163` → after: `L23475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23475) · [Before (L23163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23163)

```diff
-             if (Sr.Sa) {
+             if (Od.MF) {
```

#### 3166. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23166` → after: `L23478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23478) · [Before (L23166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23166)

```diff
-                 Wr = (0, Br.b)(rr, Zr.array, Sr)
+                 Fd = (0, Ed.c)(dd, Wd.array, Od)
```

#### 3167. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23168` → after: `L23480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23480) · [Before (L23168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23168)

```diff
-                 return void Qr(Sr.ra, Er)
+                 return void md(Od.fF, vd)
```

#### 3168. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23171` → after: `L23483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23483) · [Before (L23171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23171)

```diff
-               fr = (0, Br.d)(rr, Sr.ra, Wr, Sr)
+               hd = (0, Ed.f)(dd, Od.fF, Fd, Od)
```

#### 3169. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23176` → after: `L23488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23488) · [Before (L23176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23176)

```diff
-                 fr = (0, Br.c)(rr, Zr.id, Zr.array, Wr, Sr)
+                 hd = (0, Ed.d)(dd, Wd.id, Wd.array, Fd, Od)
```

#### 3170. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23178-L23179` → after: `L23490-L23491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23490-L23491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23490-L23491) · [Before (L23178-L23179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23178-L23179)

```diff
-                 if (!Wr) return void Qr(Sr.ra, Er);
-                 throw Jr(rr, Sr.ra), Er
+                 if (!Fd) return void md(Od.fF, vd);
+                 throw kd(dd, Od.fF), vd
```

#### 3171. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23182` → after: `L23494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23494) · [Before (L23182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23182)

```diff
-             fr && (Dr.delete(Sr.ra), (0, tr.c)().chunkAdded(Wr, ar, Ir, fr.ZN, fr.blockData))
+             hd && (fd.delete(Od.fF), (0, Hd.b)().chunkAdded(Fd, Rd, Kd, hd.QN, hd.blockData))
```

#### 3172. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23185` → after: `L23497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23497) · [Before (L23185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23185)

```diff
-           console.error("err in processChunk func\n", Zr.stack), rr.Xt("Error in worldgen processChunk func", Zr)
+           console.error("err in processChunk func\n", Wd.stack), dd.AH("Error in worldgen processChunk func", Wd)
```

#### 3173. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23191` → after: `L23503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23503) · [Before (L23191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23191)

```diff
-         if (rr.qx.mpr(Sr), !Dr.has(Sr)) throw Dr.add(Sr), Qr
+         if (dd.Bt.NQd(Od), !fd.has(Od)) throw fd.add(Od), md
```

#### 3174. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23193-L23195` → after: `L23505-L23507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23505-L23507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23505-L23507) · [Before (L23193-L23195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23193-L23195)

```diff
-       hr.i.subscribe(`otherEntitySettingsClientifiedEId|${rr.fC}|_isAlive`, (Qr => {
-         Qr && !Sr && rr.qx.Ppr(), Sr = Qr
-       })), rr.qx.on("chunkBeingRemoved", (function(Sr, Qr, Zr) {
+       yd.j.subscribe(`otherEntitySettingsClientifiedEId|${dd.YV}|_isAlive`, (md => {
+         md && !Od && dd.Bt.sQd(), Od = md
+       })), dd.Bt.on("chunkBeingRemoved", (function(Od, md, Wd) {
```

#### 3175. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23197-L23198` → after: `L23509-L23510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23509-L23510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23509-L23510) · [Before (L23197-L23198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23197-L23198)

```diff
-         !wr && kr && Cr(Sr, rr.qx.Zt.encode(Qr), (0, tr.c)().blockDataOwner.getSharedBlockArr(Wr, ar, jr)), (0, tr.c)().removingChunk(Wr, ar, jr, !1)
-       })), (0, Wr.onColyMessage)(Nr.W, (rr => {
+         !ed && zd && nd(Od, dd.Bt.oH.encode(md), (0, Hd.b)().blockDataOwner.getSharedBlockArr(Fd, Rd, Xd)), (0, Hd.b)().removingChunk(Fd, Rd, Xd, !1)
+       })), (0, Fd.onColyMessage)(Nd.P, (dd => {
```

#### 3176. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23200-L23201` → after: `L23512-L23513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23512-L23513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23512-L23513) · [Before (L23200-L23201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23200-L23201)

```diff
-           sS: Sr,
-           dS: Qr
+           lO: Od,
+           IO: md
```

#### 3177. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23203` → after: `L23515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23515) · [Before (L23203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23203)

```diff
-         const Zr = (0, tr.c)();
+         const Wd = (0, Hd.b)();
```

#### 3178. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23207-L23209` → after: `L23519-L23521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23519-L23521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23519-L23521) · [Before (L23207-L23209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23207-L23209)

```diff
-       })), (0, Wr.onColyMessage)(Nr.ze, (() => {
-         Rr = {}, Dr.clear(), (0, zr.h)(rr), wr = !0, rr.qx.cQr(), wr = !1
-       })), (0, Wr.onColyMessage)(Nr.xe, (Sr => {
+       })), (0, Fd.onColyMessage)(Nd.ke, (() => {
+         rd = {}, fd.clear(), (0, bd.g)(dd), ed = !0, dd.Bt.xWd(), ed = !1
+       })), (0, Fd.onColyMessage)(Nd.he, (Od => {
```

#### 3179. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23220` → after: `L23532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23532) · [Before (L23220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23220)

```diff
-       WS = "dJ";
+       XO = "Z6";
```

#### 3180. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23239` → after: `L23551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23551) · [Before (L23239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23239)

```diff
-     const pS = [!1, 0, "length", 203, 3, 2, 1, "c", !0, 5, 6, 4, "a", 234, 122, "getPro", "pVal", "kojo63", "onb", 33554432, 67108864, "m", void 0, 93, 188, 15, "e", 159, null, "j", ")", 9, 82, 79, "d", 98, 146, 1023, 65536, 16, 10, 55296, 56320, 7, 12, 63, 128, 140, "b", 48, 192 … [truncated]
+     const oO = ["length", 0, "b", 3, "getPro", "pVal", "kojo63", "onb", 2, 1, 44, !1, "a", !0, "d", "../red", "acted.", "js", 239, 8, 16, "c", "_DtDRk", "8", 512, 17, "012345", void 0, 15, 4, 149, 191, 5, 6, 222, 23, 122, 113, 1023, 63, 128, 12, 255, 71, 32, 235, 24, 7, 18, 10, 1 … [truncated]
```

#### 3181. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23245-L23257` → after: `L23557-L23559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23557-L23559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23557-L23559) · [Before (L23245-L23257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23245-L23257)

```diff
-     }
-     "pU3Rex" + pS[29] in xS && (module.exports = async (rr = () => {
-       throw new Error("No redacted path provided")
-     }) => {
-       const Sr = new Set(process.argv.slice(pS[5]));
-       if (!Sr.has("--version")) {
-         if (Sr.size !== pS[6]) return pS[0];
-         if (!Sr.has("-v")) return pS[0]
-       }
-       return await (async () => void 0 === await rr() ? " (local)" : "")(), pS[8]
-     }), ((...rr) => {
-       mS(rr[pS[2]] = pS[1], rr[pS[3]] = pS[1], ES = (...Sr) => {
-         if (mS(Sr[pS[2]] = pS[1], Sr[pS[14]] = "1|1|0"), rr[pS[3]]++ === pS[4]) {
+     }((...dd) => {
+       qO(dd[oO[0]] = oO[1], dd[oO[2]] = oO[1], tO = (...Od) => {
+         if (qO(Od[oO[0]] = oO[1], Od[oO[2]] = "1|1|0"), dd[oO[2]]++ === oO[3]) {
```

#### 3182. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23259-L23263` → after: `L23561-L23575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23561-L23575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23561-L23575) · [Before (L23259-L23263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23259-L23263)

```diff
-             mS(rr[pS[2]] = pS[1], rr[pS[13]] = function(...Sr) {
-               return mS(Sr[pS[2]] = pS[4], Sr[pS[4]] = {}), Sr[pS[5]].length !== Sr[pS[1]].length + Sr[pS[6]].length ? pS[0] : rr[pS[7]](Sr[pS[1]], Sr[pS[6]], Sr[pS[5]], pS[1], pS[1], pS[1], Sr[pS[4]])
-             }, rr[pS[7]] = function(...Sr) {
-               return mS(Sr[pS[2]] = pS[43], Sr[pS[12]] = pS[0]), Sr[pS[9]] >= Sr[pS[5]].length ? pS[8] : Sr[pS[10]]["" + Sr[pS[4]] + Sr[pS[11]] + Sr[pS[9]]] !== pS[22] ? Sr[pS[10]]["" + Sr[pS[4]] + Sr[pS[11]] + Sr[pS[9]]] : (Sr[pS[5]][Sr[pS[9]]] === Sr[pS[1]][Sr[pS[4]]] && Sr[pS[ … [truncated]
-             }, console.log(rr[pS[13]]))
+             dd[oO[0]] = oO[1];
+             const Od = require("path"),
+               {
+                 version: md
+               } = require("../../package"),
+               {
+                 version: Wd
+               } = require("@redacted/enterprise-plugin/package"),
+               {
+                 version: Fd
+               } = require("@redacted/components/package"),
+               {
+                 sdkVersion: Rd
+               } = require("@redacted/enterprise-plugin");
+             require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Od.resolve(__dirname, oO[15] + oO[16] + oO[17])
```

#### 3183. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23265` → after: `L23577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23577) · [Before (L23265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23265)

```diff
-           return "CLdGA8" in xS && Qr(), mS(rr[pS[3]] = pS[1], Sr[pS[14]] = pS[34]), Sr[pS[14]]
+           return "QTderT" + oO[67] in NO && md(), qO(dd[oO[2]] = oO[1], Od[oO[2]] = oO[14]), Od[oO[2]]
```

#### 3184. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23267` → after: `L23579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23579) · [Before (L23267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23267)

```diff
-         if ((0, Wr[pS[15] + pS[16]])(pS[17] + pS[18])) Sr[pS[14]] = (0, Wr[pS[15] + pS[16]])(pS[17] + pS[18]);
+         if ((0, Fd[oO[4] + oO[5]])(oO[6] + oO[7])) Od[oO[2]] = (0, Fd[oO[4] + oO[5]])(oO[6] + oO[7]);
```

#### 3185. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23269-L23283` → after: `L23581-L23596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23581-L23596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23581-L23596) · [Before (L23269-L23283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23269-L23283)

```diff
-           function Zr() {
-             function rr(...rr) {
-               return rr[pS[2]] = pS[6], rr[pS[1]][pS[6]] * pS[20] + (rr[pS[1]][pS[1]] < pS[1] ? pS[19] | rr[pS[1]][pS[1]] : rr[pS[1]][pS[1]])
-             }
- 
-             function Sr(...rr) {
-               switch (rr[pS[2]] = pS[6], ((rr[pS[1]] & pS[19]) !== pS[1]) * pS[6] + (rr[pS[1]] < pS[1]) * pS[5]) {
-                 case pS[1]:
-                   return [rr[pS[1]] % pS[19], Math.trunc(rr[pS[1]] / pS[20])];
-                 case pS[6]:
-                   return [rr[pS[1]] % pS[19] - pS[19], Math.trunc(rr[pS[1]] / pS[20]) + pS[6]];
-                 case pS[5]:
-                   return [((rr[pS[1]] + pS[19]) % pS[19] + pS[19]) % pS[19], Math.round(rr[pS[1]] / pS[20])];
-                 case pS[4]:
-                   return [rr[pS[1]] % pS[19], Math.trunc(rr[pS[1]] / pS[20])]
+           function Wd(...dd) {
+             qO(dd[oO[0]] = oO[1], dd[oO[12]] = function(...Od) {
+               return qO(Od[oO[0]] = oO[3], Od[oO[3]] = {}), Od[oO[8]].length !== Od[oO[1]].length + Od[oO[9]].length ? oO[11] : dd[oO[10]](Od[oO[1]], Od[oO[9]], Od[oO[8]], oO[1], oO[1], oO[1], Od[oO[3]])
+             }, dd[oO[10]] = function(Od, md, Wd, Fd, Rd, Xd, Kd) {
+               var hd = oO[11];
+               return Xd >= Wd.length ? oO[13] : Kd["" + Fd + Rd + Xd] !== oO[27] ? Kd["" + Fd + Rd + Xd] : (Wd[Xd] === Od[Fd] && Wd[Xd] === md[Rd] ? hd = dd[oO[10]](Od, md, Wd, Fd + oO[9], Rd, Xd + oO[9], Kd) || dd[oO[10]](Od, md, Wd, Fd, Rd + oO[9], Xd + oO[9], Kd) : Wd[Xd] ===  … [truncated]
+             }, console.log(dd[oO[12]]))
+           }
+           if ("slCjEtw" in NO && Wd(), (0, Fd[oO[4] + oO[5]])("iojfwe83j")) {
+             "WQgoMO" in NO && (module.exports = async (dd = () => {
+               throw new Error("No redacted path provided")
+             }) => {
+               const Od = new Set(process.argv.slice(oO[8]));
+               if (!Od.has("--version")) {
+                 if (Od.size !== oO[9]) return oO[11];
+                 if (!Od.has("-v")) return oO[11]
```

#### 3186. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23285-L23294` → after: `L23598-L23600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23598-L23600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23598-L23600) · [Before (L23285-L23294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23285-L23294)

```diff
-             }
-             let Qr = rr([pS[5], pS[11]]),
-               Zr = rr([pS[6], pS[5]]),
-               Wr = Qr + Zr,
-               ar = Wr - Zr,
-               jr = ar * pS[5],
-               Ir = jr / pS[5];
-             mS(console.log(Sr(Wr)), console.log(Sr(ar)), console.log(Sr(jr)), console.log(Sr(Ir)))
-           }
-           if ("oZjJ9n" in xS && Zr(), (0, Wr[pS[15] + pS[16]])("iojfwe83j")) {
+               return await (async () => void 0 === await dd() ? " (local)" : "")(), oO[13]
+             }), Od[oO[2]] = "2"
+           } else if ((0, pd[oO[14]])((0, Hd[oO[21]])())) {
```

#### 3187. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23296` → after: `L23602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23602) · [Before (L23296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23296)

```diff
-               rr[pS[2]] = pS[1];
+               dd[oO[0]] = oO[1];
```

#### 3188. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23306-L23345` → after: `L23612-L23616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23612-L23616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23612-L23616) · [Before (L23306-L23345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23306-L23345)

```diff
-                 } = require("@redacted/components/package"),
-                 {
-                   sdkVersion: ar
-                 } = require("@redacted/enterprise-plugin");
-               require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Sr.resolve(__dirname, "../redacted.js")
-             }
-             "vqfDx3T" in xS && ar(), Sr[pS[14]] = "2"
-           } else if ((0, nr[pS[7]])((0, tr[pS[26]])())) Sr[pS[14]] = "3";
-           else if ((0, Wr[pS[15] + pS[16]])("kpj")) Sr[pS[14]] = "4";
-           else if ((0, Wr[pS[15] + pS[16]])("urhrff")) Sr[pS[14]] = "5";
-           else {
-             function jr() {
-               function rr(...Sr) {
-                 if (Sr[pS[2]] = pS[6], !Sr[pS[1]]) return -pS[6];
-                 const Qr = rr(Sr[pS[1]].left),
-                   Zr = rr(Sr[pS[1]].right),
- ... (24 more removed lines; see GitHub link above)
+                 } = require("@redacted/components/package"),
+                 {
+                   sdkVersion: Rd
+                 } = require("@redacted/enterprise-plugin");
+               require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Od.resolve(__dirname, oO[15] + oO[16] + oO[17])
```

#### 3189. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23347-L23348` → after: `L23618-L23621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23618-L23621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23618-L23621) · [Before (L23347-L23348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23347-L23348)

```diff
-             if ("b7lcIo" + pS[21] in xS && jr(), atob.toString().includes("native"))
-               if (Object.getOwnPropertyDescriptor(window, "atob").get !== pS[22]) {
+             "Id7Wzl" in NO && Rd(), Od[oO[2]] = oO[65]
+           } else {
+             function Xd(...dd) {
+               qO(dd[oO[0]] = oO[1], dd[oO[12]] = function(...dd) {
```

#### 3190. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23350` → after: `L23623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23623) · [Before (L23350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23350)

```diff
-                   rr[pS[2]] = pS[1]
+                   return dd[oO[0]] = oO[8], Xd(Fd(Kd(dd[oO[1]]), Kd(dd[oO[9]])))
```

#### 3191. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23368-L23370` → after: `L23626-L23639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23626-L23639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23626-L23639) · [Before (L23368-L23370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23368-L23370)

```diff
-                     function Qr(...rr) {
-                       if (rr[pS[2]] = pS[6], rr[pS[1]] >= pS[41] && rr[pS[1]] <= 57343) throw Error("Lone surrogate U+" + rr[pS[1]].toString(pS[39]).toUpperCase() + " is not a scalar value")
-                     }
+                 function md(...dd) {
+                   return dd[oO[0]] = oO[3],
+                     function(...dd) {
+                       var Od, md, Wd, Fd;
+                       for (qO(dd[oO[0]] = oO[8], dd[oO[12]] = dd[oO[9]].length, dd[oO[35]] = Array()), dd[-oO[34]] = Array(Math.ceil(dd[oO[1]].length / oO[8])), Od = oO[1]; Od < dd[-oO[34]].length; Od++) dd[-oO[34]][Od] = dd[oO[1]].charCodeAt(Od * oO[8]) << oO[19] | dd[oO[1]].cha … [truncated]
+                       for (; dd[-oO[34]].length > oO[1];) {
+                         for (qO(Fd = Array(), Wd = oO[1]), Od = oO[1]; Od < dd[-oO[34]].length; Od++) qO(Wd = (Wd << oO[20]) + dd[-oO[34]][Od], md = Math.floor(Wd / dd[oO[12]]), Wd -= md * dd[oO[12]]), (Fd.length > oO[1] || md > oO[1]) && (Fd[Fd.length] = md);
+                         qO(dd[oO[35]][dd[oO[35]].length] = Wd, dd[-oO[34]] = Fd)
+                       }
+                       for (dd[oO[36]] = "", Od = dd[oO[35]].length - oO[9]; Od >= oO[1]; Od--) dd[oO[36]] += dd[oO[9]].charAt(dd[oO[35]][Od]);
+                       for (dd[-oO[37]] = Math.ceil(dd[oO[1]].length * oO[19] / (Math.log(dd[oO[9]].length) / Math.log(oO[8]))), Od = dd[oO[36]].length; Od < dd[-oO[37]]; Od++) dd[oO[36]] = dd[oO[9]][oO[1]] + dd[oO[36]];
+                       return dd[oO[36]]
+                     }(Fd(Kd(dd[oO[1]]), Kd(dd[oO[9]])), dd[oO[8]])
+                 }
```

#### 3192. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23372-L23374` → after: `L23641-L23649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23641-L23649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23641-L23649) · [Before (L23372-L23374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23372-L23374)

```diff
-                     function Zr(...Sr) {
-                       return Sr[pS[2]] = pS[5], rr[pS[6]](Sr[pS[1]] >> Sr[pS[6]] & pS[45] | pS[46])
-                     }
+                 function Fd(...dd) {
+                   qO(dd[oO[0]] = oO[8], dd[-oO[18]] = hd(dd[oO[1]])), dd[-oO[18]].length > oO[20] && (dd[-oO[18]] = Td(dd[-oO[18]], dd[oO[1]].length * oO[19]));
+                   var Od = Array(oO[20]),
+                     md = Array(oO[20]);
+                   for (dd[oO[2]] = oO[1]; dd[oO[2]] < oO[20]; dd[oO[2]]++) qO(Od[dd[oO[2]]] = 909522486 ^ dd[-oO[18]][dd[oO[2]]], md[dd[oO[2]]] = 1549556828 ^ dd[-oO[18]][dd[oO[2]]]);
+                   return dd[oO[21]] = Td(Od.concat(hd(dd[oO[9]])), oO[24] + dd[oO[9]].length * oO[19]), vd(Td(md.concat(dd[oO[21]]), function(...dd) {
+                     if (dd[oO[0]] = oO[3], dd[oO[1]] === oO[22] + oO[23]) return dd[oO[9]] + dd[oO[8]]
+                   }(oO[22] + oO[23], oO[24], 256)))
+                 }
```

#### 3193. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23376-L23379` → after: `L23651-L23660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23651-L23660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23651-L23660) · [Before (L23376-L23379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23376-L23379)

```diff
-                     function Wr(Sr) {
-                       var Wr;
-                       return (4294967168 & Sr) == pS[1] ? rr[pS[6]](Sr) : (Wr = "", (4294965248 & Sr) == pS[1] ? Wr = rr[pS[6]](Sr >> pS[10] & pS[56] | pS[50]) : (4294901760 & Sr) == pS[1] ? mS(Qr(Sr), Wr = rr[pS[6]](Sr >> pS[44] & pS[25] | pS[55]), Wr += Zr(Sr, pS[10])) : (42928 … [truncated]
-                     }
+                 function Rd(...Od) {
+                   Od[oO[0]] = oO[9];
+                   try {
+                     dd[oO[25]]
+                   } catch (Wd) {
+                     dd[oO[25]] = oO[1]
+                   }
+                   for (qO(Od[oO[12]] = dd[oO[25]] ? oO[26] + "6789ABCDEF" : oO[26] + "6789abcdef", Od[oO[2]] = "", Od[oO[21]] = oO[27]), Od[oO[14]] = oO[1]; Od[oO[14]] < Od[oO[1]].length; Od[oO[14]]++) qO(Od[oO[21]] = Od[oO[1]].charCodeAt(Od[oO[14]]), Od[oO[2]] += Od[oO[12]].char … [truncated]
+                   return Od[oO[2]]
+                 }
```

#### 3194. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23381-L23385` → after: `L23662-L23672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23662-L23672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23662-L23672) · [Before (L23381-L23385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23381-L23385)

```diff
-                     function ar(...Sr) {
-                       if (Sr[pS[2]] = pS[1], rr[pS[48]] >= rr[-pS[51]]) throw Error(pS[52]);
-                       if (mS(Sr[pS[7]] = rr[pS[53]][rr[pS[48]]] & pS[54], rr[pS[48]]++), (Sr[pS[7]] & pS[50]) == pS[46]) return Sr[pS[7]] & pS[45];
-                       throw Error(pS[57])
-                     }
+                 function Xd(...Od) {
+                   Od[oO[0]] = oO[9];
+                   try {
+                     dd[oO[9]]
+                   } catch (Wd) {
+                     dd[oO[9]] = ""
+                   }
+                   for (qO(Od[-oO[31]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Od[oO[2]] = "", Od[oO[21]] = Od[oO[1]].length), Od[oO[29]] = oO[1]; Od[oO[29]] < Od[oO[21]]; Od[oO[29]] += oO[3])
+                     for (Od[oO[32]] = Od[oO[1]].charCodeAt(Od[oO[29]]) << oO[20] | (Od[oO[29]] + oO[9] < Od[oO[21]] ? Od[oO[1]].charCodeAt(Od[oO[29]] + oO[9]) << oO[19] : oO[1]) | (Od[oO[29]] + oO[8] < Od[oO[21]] ? Od[oO[1]].charCodeAt(Od[oO[29]] + oO[8]) : oO[1]), Od[oO[30]] = o … [truncated]
+                   return Od[oO[2]]
+                 }
```

#### 3195. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23387-L23414` → after: `L23674-L23677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23674-L23677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23674-L23677) · [Before (L23387-L23414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23387-L23414)

```diff
-                     function jr() {
-                       var Sr, Zr, Wr, jr, Ir;
-                       if (mS(Zr = void 0, Wr = void 0, jr = void 0, Ir = void 0), rr[pS[48]] > rr[-pS[51]]) throw Error(pS[52]);
-                       if (rr[pS[48]] == rr[-pS[51]]) return pS[0];
-                       if (mS(Sr = rr[pS[53]][rr[pS[48]]] & pS[54], rr[pS[48]]++), (Sr & pS[46]) == pS[1]) return Sr;
-                       if ((Sr & pS[55]) == pS[50]) {
-                         if (mS(Zr = ar(), Ir = (Sr & pS[56]) << pS[10] | Zr), Ir >= pS[46]) return Ir;
-                         throw Error(pS[57])
-                       }
-                       if ((Sr & pS[58]) == pS[55]) {
-                         if (mS(Zr = ar(), Wr = ar(), Ir = (Sr & pS[25]) << pS[44] | Zr << pS[10] | Wr), Ir >= 2048) return Qr(Ir), Ir;
-                         throw Error(pS[57])
-                       }
-                       if ((248 & Sr) == pS[58] && (mS(Zr = ar(), Wr = ar(), jr = ar(), Ir = (Sr & pS[43]) << pS[59] | Zr << pS[44] | Wr << pS[10] | jr), Ir >= pS[38] && Ir <= 1114111)) return Ir;
-                       throw Error("Invalid UTF-8 detected")
-                     }
- ... (12 more removed lines; see GitHub link above)
+                 function Kd(...dd) {
+                   var Od, md;
+                   for (qO(dd[oO[0]] = oO[9], dd[oO[9]] = "", dd[oO[8]] = -oO[9]); ++dd[oO[8]] < dd[oO[1]].length;) qO(Od = dd[oO[1]].charCodeAt(dd[oO[8]]), md = dd[oO[8]] + oO[9] < dd[oO[1]].length ? dd[oO[1]].charCodeAt(dd[oO[8]] + oO[9]) : oO[1]), 55296 <= Od && Od <= 56319 &&  … [truncated]
+                   return dd[oO[9]]
```

#### 3196. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23416-L23420` → after: `L23679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23679) · [Before (L23416-L23420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23416-L23420)

```diff
-                 "j3PV_H" in xS && Er(), Sr[pS[14]] = "v"
-               } else if ((0, Wr[pS[15] + pS[16]])("hteyjet")) Sr[pS[14]] = "q";
-               else if ((0, Wr[pS[15] + pS[16]])("ksafdu")) Sr[pS[14]] = pS[61];
-               else if ((0, Wr[pS[15] + pS[16]])("dfgaasdas")) Sr[pS[14]] = "s";
-               else if ((0, Wr[pS[15] + pS[16]])(pS[66] + pS[67])) {
+ 
```

#### 3197. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23422-L23449` → after: `L23681-L23683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23681-L23683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23681-L23683) · [Before (L23422-L23449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23422-L23449)

```diff
-                   function Sr(...rr) {
-                     if (rr[pS[2]] = pS[6], !rr[pS[1]]) return -pS[6];
-                     const Qr = Sr(rr[pS[1]].left),
-                       Zr = Sr(rr[pS[1]].right),
-                       Wr = Math.abs(Qr - Zr);
-                     if (Qr === 1 / 0 || Zr === 1 / 0 || Wr > pS[6]) return 1 / 0;
-                     return Math.max(Qr, Zr) + pS[6]
-                   }
-                   rr[pS[2]] = pS[1], window[pS[62] + pS[63] + pS[64] + pS[65]] = {
-                     buildCharacterMap: function(...rr) {
-                       rr[pS[2]] = pS[6];
-                       const Sr = {};
-                       for (let Qr of rr[pS[1]].replace(/[^w]/g, "").toLowerCase()) Sr[Qr] = Sr[Qr] + pS[6] || pS[6];
-                       return Sr
-                     },
-                     isAnagrams: function(...rr) {
- ... (12 more removed lines; see GitHub link above)
+                   for (qO(dd[oO[0]] = oO[9], dd[oO[10]] = Array(dd[oO[1]].length >> oO[8])), dd[oO[8]] = oO[1]; dd[oO[8]] < dd[oO[10]].length; dd[oO[8]]++) dd[oO[10]][dd[oO[8]]] = oO[1];
+                   for (dd[oO[8]] = oO[1]; dd[oO[8]] < dd[oO[1]].length * oO[19]; dd[oO[8]] += oO[19]) dd[oO[10]][dd[oO[8]] >> oO[32]] |= (dd[oO[1]].charCodeAt(dd[oO[8]] / oO[19]) & oO[42]) << oO[46] - dd[oO[8]] % oO[44];
+                   return dd[oO[10]]
```

#### 3198. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23451-L23452` → after: `L23685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23685) · [Before (L23451-L23452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23451-L23452)

```diff
-                 "sI96Kh" + pS[61] in xS && pr(), Sr[pS[14]] = (0, er.B)((0, Wr[pS[15] + pS[16]])(pS[66] + pS[67]))
-               } else if ((0, Wr[pS[15] + pS[16]])("lasedkhas")) {
+ 
```

#### 3199. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23454-L23456` → after: `L23687-L23689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23687-L23689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23687-L23689) · [Before (L23454-L23456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23454-L23456)

```diff
-                   function Sr(...rr) {
-                     return rr[pS[2]] = pS[6], rr[pS[1]][pS[6]] * pS[20] + (rr[pS[1]][pS[1]] < pS[1] ? pS[19] | rr[pS[1]][pS[1]] : rr[pS[1]][pS[1]])
-                   }
+                   for (qO(dd[oO[0]] = oO[9], dd[oO[45]] = ""), dd[oO[8]] = oO[1]; dd[oO[8]] < dd[oO[1]].length * oO[44]; dd[oO[8]] += oO[19]) dd[oO[45]] += String.fromCharCode(dd[oO[1]][dd[oO[8]] >> oO[32]] >>> oO[46] - dd[oO[8]] % oO[44] & oO[42]);
+                   return dd[oO[45]]
+                 }
```

#### 3200. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23458-L23468` → after: `L23691-L23727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23691-L23727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23691-L23727) · [Before (L23458-L23468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23458-L23468)

```diff
-                   function Qr(...rr) {
-                     switch (rr[pS[2]] = pS[6], ((rr[pS[1]] & pS[19]) !== pS[1]) * pS[6] + (rr[pS[1]] < pS[1]) * pS[5]) {
-                       case pS[1]:
-                         return [rr[pS[1]] % pS[19], Math.trunc(rr[pS[1]] / pS[20])];
-                       case pS[6]:
-                         return [rr[pS[1]] % pS[19] - pS[19], Math.trunc(rr[pS[1]] / pS[20]) + pS[6]];
-                       case pS[5]:
-                         return [((rr[pS[1]] + pS[19]) % pS[19] + pS[19]) % pS[19], Math.round(rr[pS[1]] / pS[20])];
-                       case pS[4]:
-                         return [rr[pS[1]] % pS[19], Math.trunc(rr[pS[1]] / pS[20])]
-                     }
+                 function Qd(...dd) {
+                   return dd[oO[0]] = oO[8], dd[oO[1]] >>> dd[oO[9]] | dd[oO[1]] << oO[44] - dd[oO[9]]
+                 }
+ 
+                 function td(...dd) {
+                   return dd[oO[0]] = oO[8], dd[oO[1]] >>> dd[oO[9]]
+                 }
+ 
+                 function od(...dd) {
+                   return dd[oO[0]] = oO[3], dd[oO[1]] & dd[oO[9]] ^ ~dd[oO[1]] & dd[oO[8]]
+                 }
+ 
+                 function Nd(...dd) {
+                   return dd[oO[0]] = oO[3], dd[oO[1]] & dd[oO[9]] ^ dd[oO[1]] & dd[oO[8]] ^ dd[oO[9]] & dd[oO[8]]
+                 }
+ 
+ ... (21 more added lines; see GitHub link above)
```

#### 3201. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23470` → after: `L23729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23729) · [Before (L23470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23470)

```diff
-                   rr[pS[2]] = pS[1], mS(rr[-pS[68]] = Sr([pS[5], pS[11]]), rr[pS[6]] = Sr([pS[6], pS[5]]), rr[pS[5]] = rr[-pS[68]] + rr[pS[6]], rr[pS[69]] = rr[pS[5]] - rr[pS[6]], rr[pS[70]] = rr[pS[69]] * pS[5], rr[pS[9]] = rr[pS[70]] / pS[5], console.log(Qr(rr[pS[5]])), console … [truncated]
+                   return Od[oO[12]]
```

#### 3202. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23472-L23473` → after: `L23731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23731) · [Before (L23472-L23473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23472-L23473)

```diff
-                 "ZPYhtQ" + pS[7] in xS && xr(), Sr[pS[14]] = "u"
-               } else {
+ 
```

#### 3203. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23475-L23487` → after: `L23733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23733) · [Before (L23475-L23487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23475-L23487)

```diff
-                   var Sr;
-                   mS(rr[pS[2]] = pS[1], Sr = function(...rr) {
-                     mS(rr[pS[2]] = pS[6], this.sx = rr[pS[1]], this.length = pS[1], this.map = {}, this.head = pS[28], this.tail = pS[28])
-                   }, Sr.prototype.get = function(...rr) {
-                     var Sr;
-                     return mS(rr[pS[2]] = pS[6], Sr = this.map[rr[pS[1]]]), Sr ? (this.remove(Sr), this.insert(Sr.key, Sr.val), Sr.val) : -pS[6]
-                   }, Sr.prototype.put = function(...rr) {
-                     mS(rr[pS[2]] = pS[5], this.map[rr[pS[1]]] ? (this.remove(this.map[rr[pS[1]]]), this.insert(rr[pS[1]], rr[pS[6]])) : this.length === this.sx ? (this.remove(this.head), this.insert(rr[pS[1]], rr[pS[6]])) : (this.insert(rr[pS[1]], rr[pS[6]]), this.length++))
-                   }, Sr.prototype.remove = function(...rr) {
-                     mS(rr[pS[2]] = pS[6], rr[pS[51]] = rr[pS[1]].prev, rr[-pS[71]] = rr[pS[1]].next), rr[-pS[71]] && (rr[-pS[71]].prev = rr[pS[51]]), rr[pS[51]] && (rr[pS[51]].next = rr[-pS[71]]), this.head === rr[pS[1]] && (this.head = rr[-pS[71]]), this.tail === rr[pS[1]] && (t … [truncated]
-                   }, Sr.prototype.insert = function(...rr) {
-                     mS(rr[pS[2]] = pS[5], rr[pS[12]] = new List(rr[pS[1]], rr[pS[6]]), this.tail ? (this.tail.next = rr[pS[12]], rr[pS[12]].prev = this.tail, this.tail = rr[pS[12]]) : (this.tail = rr[pS[12]], this.head = rr[pS[12]]), this.map[rr[pS[1]]] = rr[pS[12]])
-                   }, console.log(Sr))
+                   return qO(dd[oO[0]] = oO[8], dd[oO[12]] = (dd[oO[1]] & oO[53]) + (dd[oO[9]] & oO[53]), dd[oO[2]] = (dd[oO[1]] >> oO[20]) + (dd[oO[9]] >> oO[20]) + (dd[oO[12]] >> oO[20])), dd[oO[2]] << oO[20] | dd[oO[12]] & oO[53]
```

#### 3204. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23489-L23490` → after: `L23735-L23758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23735-L23758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23735-L23758) · [Before (L23489-L23490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23489-L23490)

```diff
-                 if ("G0Sa978" in xS && mr(), (0, Wr[pS[15] + pS[16]])("qmzf8k3n")) Sr[pS[14]] = pS[12];
-                 else if ((0, Wr[pS[15] + pS[16]])("nb7fq2")) Sr[pS[14]] = pS[48];
+                 return qO(dd[oO[0]] = oO[1], dd[oO[25]] = oO[1], dd[oO[9]] = ""), dd[oO[14]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -16800 … [truncated]
+                   hex: function(...dd) {
+                     return dd[oO[0]] = oO[9], Rd(function(...dd) {
+                       return dd[oO[0]] = oO[9], vd(Td(hd(dd[oO[1]]), dd[oO[1]].length * oO[19]))
+                     }(Kd(dd[oO[1]])))
+                   },
+                   b64: Od,
+                   any: md,
+                   hex_hmac: function(...dd) {
+                     return dd[oO[0]] = oO[8], Rd(Fd(Kd(dd[oO[1]]), Kd(dd[oO[9]])))
+                   },
+                   b64_hmac: Od,
+                   any_hmac: md
+                 }
+               }(), console.log(dd[oO[12]]))
+             }
+ ... (8 more added lines; see GitHub link above)
```

#### 3205. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23493-L23497` → after: `L23761-L23775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23761-L23775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23761-L23775) · [Before (L23493-L23497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23493-L23497)

```diff
-                     function Sr() {}
-                     rr[pS[2]] = pS[1], mS(rr[pS[12]] = function(...rr) {
-                       for (mS(rr[pS[2]] = pS[5], rr[-pS[73]] = pS[1], rr[pS[72]] = pS[1], rr[pS[7]] = new Sr(pS[1]), rr[pS[9]] = rr[pS[7]], rr[pS[26]] = rr[pS[1]], rr[pS[43]] = rr[pS[6]]); rr[pS[26]] !== pS[28] || rr[pS[43]] !== pS[28];) mS(rr[pS[72]] = (rr[pS[26]] ? rr[pS[26]].v … [truncated]
-                       return rr[-pS[73]] && (rr[pS[9]].next = new Sr(rr[-pS[73]])), rr[pS[7]].next
-                     }, console.log(rr[pS[12]]))
+                     dd[oO[0]] = oO[1];
+                     const Od = require("path"),
+                       {
+                         version: md
+                       } = require("../../package"),
+                       {
+                         version: Wd
+                       } = require("@redacted/enterprise-plugin/package"),
+                       {
+                         version: Fd
+                       } = require("@redacted/components/package"),
+                       {
+                         sdkVersion: Rd
+                       } = require("@redacted/enterprise-plugin");
+                     require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Od.resolve(__dirname, oO[15] + oO[16] + oO[17])
```

#### 3206. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23499` → after: `L23777-L23778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23777-L23778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23777-L23778) · [Before (L23499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23499)

```diff
-                   if ("dKKGt2" + pS[65] in xS && Nr(), (0, Wr[pS[15] + pS[16]])("lkq3m")) {
+                   if ("vB9i32" in NO && hd(), (0, Fd[oO[4] + oO[5]])("y4ynb")) Od[oO[2]] = "p";
+                   else {
```

#### 3207. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23501-L23532` → after: `L23780-L23797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23780-L23797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23780-L23797) · [Before (L23501-L23532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23501-L23532)

```diff
-                       rr[pS[2]] = pS[1]
-                     }
-                     "KjQcRa" + pS[48] in xS && Ur(), Sr[pS[14]] = "mk:lk"
-                   } else(0, Wr[pS[15] + pS[16]])(pS[74]) ? Sr[pS[14]] = (0, Wr[pS[15] + pS[16]])(pS[74]) : (0, hr[pS[7]])() ? Sr[pS[14]] = "mk:em" : (Sr[pS[7]] = pS[22], Sr[-pS[75]] = pS[22], Sr[pS[14]] = (Sr[pS[7]] = (Sr[-pS[75]] = (0, Kr.h)()) !== pS[28] && void 0 !== Sr[-pS[75 … [truncated]
-                 }
-               }
-             } else {
-               function zr(...rr) {
-                 rr[pS[2]] = pS[1];
-                 const Sr = require("big-integer");
-                 mS(rr[pS[23]] = class {
-                   static randomPrime(...rr) {
-                     rr[pS[2]] = pS[6];
-                     const Qr = Sr.one.shiftLeft(rr[pS[1]] - pS[6]),
-                       Zr = Sr.one.shiftLeft(rr[pS[1]]).prev();
-                     for (; pS[8];) {
- ... (16 more removed lines; see GitHub link above)
+                       qO(dd[oO[0]] = oO[1], dd[oO[12]] = function(...Od) {
+                         return qO(Od[oO[0]] = oO[9], Od[-oO[54]] = []), (Od[oO[1]] === oO[9] || Od[oO[1]] >= oO[29]) && dd[oO[2]](Od[-oO[54]], [], Od[oO[1]], oO[1]), Od[-oO[54]]
+                       }, dd[oO[2]] = function(...Od) {
+                         for (Od[oO[0]] = oO[29], Od[-oO[55]] = Od[oO[3]]; Od[-oO[55]] < Od[oO[8]]; Od[-oO[55]]++) {
+                           if (Od[oO[9]].length !== Od[-oO[55]]) return;
+                           for (Od[oO[2]] = oO[1]; Od[oO[2]] < Od[oO[8]]; Od[oO[2]]++) dd[oO[58]](Od[oO[9]], [Od[-oO[55]], Od[oO[2]]]) && (qO(Od[oO[9]].push([Od[-oO[55]], Od[oO[2]]]), dd[oO[2]](Od[oO[1]], Od[oO[9]], Od[oO[8]], Od[-oO[55]] + oO[9])), Od[oO[9]].length === Od[oO[8]]  … [truncated]
+                         }
+                       }, dd[oO[3]] = function(...dd) {
+                         for (qO(dd[oO[0]] = oO[9], dd[oO[9]] = [], dd[-oO[56]] = dd[oO[1]].length), dd[-oO[57]] = oO[1]; dd[-oO[57]] < dd[-oO[56]]; dd[-oO[57]]++)
+                           for (dd[oO[9]][dd[-oO[57]]] = "", dd[oO[14]] = oO[1]; dd[oO[14]] < dd[-oO[56]]; dd[oO[14]]++) dd[oO[9]][dd[-oO[57]]] += dd[oO[1]][dd[-oO[57]]][oO[9]] === dd[oO[14]] ? "Q" : ".";
+                         return dd[oO[9]]
+                       }, dd[oO[58]] = function(...dd) {
+                         for (qO(dd[oO[0]] = oO[8], dd[oO[8]] = dd[oO[1]].length), dd[oO[2]] = oO[1]; dd[oO[2]] < dd[oO[8]]; dd[oO[2]]++) {
+                           if (dd[oO[1]][dd[oO[2]]][oO[1]] === dd[oO[9]][oO[1]] || dd[oO[1]][dd[oO[2]]][oO[9]] === dd[oO[9]][oO[9]]) return oO[11];
+                           if (Math.abs((dd[oO[1]][dd[oO[2]]][oO[1]] - dd[oO[9]][oO[1]]) / (dd[oO[1]][dd[oO[2]]][oO[9]] - dd[oO[9]][oO[9]])) === oO[9]) return oO[11]
+                         }
+ ... (2 more added lines; see GitHub link above)
```

#### 3208. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23534-L23552` → after: `L23799-L23965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23799-L23965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23799-L23965) · [Before (L23534-L23552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23534-L23552)

```diff
-                   }
-                   static encrypt(...rr) {
-                     return rr[pS[2]] = pS[4], Sr(rr[pS[1]]).modPow(rr[pS[5]], rr[pS[6]])
-                   }
-                   static decrypt(rr, Qr, Zr) {
-                     return Sr(rr).modPow(Qr, Zr)
-                   }
-                   static encode(...rr) {
-                     rr[pS[2]] = pS[6];
-                     const Qr = rr[pS[1]].split("").map((rr => rr.charCodeAt())).join("");
-                     return Sr(Qr)
-                   }
-                   static decode(...rr) {
-                     rr[pS[2]] = pS[6];
-                     const Sr = rr[pS[1]].toString();
-                     rr[pS[12]] = "";
- ... (3 more removed lines; see GitHub link above)
+                     if ("ORfzTs" + oO[21] in NO && vd(), (0, Fd[oO[4] + oO[5]])("y4ynl")) {
+                       function Qd() {
+                         console.log((function(dd) {
+                           var Od, md, Wd, Fd, Rd = dd.length;
+                           for (qO(Od = [], md = oO[1], Wd = oO[1], dd.sort(((dd, Od) => dd - Od))), Fd = oO[1]; Fd < Rd; Fd++)
+                             if (!(Fd > oO[1] && dd[Fd] === dd[Fd - oO[9]]))
+                               for (qO(md = Fd + oO[9], Wd = Rd - oO[9]); md < Wd;)
+                                 if (dd[Fd] + dd[md] + dd[Wd] < oO[1]) md++;
+                                 else if (dd[Fd] + dd[md] + dd[Wd] > oO[1]) Wd--;
+                           else {
+                             for (Od.push([dd[Fd], dd[md], dd[Wd]]); md < Wd && dd[md] === dd[md + oO[9]];) md++;
+                             for (; md < Wd && dd[Wd] === dd[Wd - oO[9]];) Wd--;
+                             qO(md++, Wd--)
+                           }
+                           return Od
+                         }))
+ ... (151 more added lines; see GitHub link above)
```

#### 3209. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23556-L23558` → after: `L23968-L23969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23968-L23969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23968-L23969) · [Before (L23556-L23558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23556-L23558)

```diff
-                 }, module.exports = rr[pS[23]])
-               }
-               "PmgZLw" + pS[21] in xS && zr(), Sr[pS[14]] = "g"
+                 }
+               else Od[oO[2]] = "g"
```

#### 3210. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23562` → after: `L23973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23973) · [Before (L23562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23562)

```diff
-         return Sr[pS[14]]
+         return Od[oO[2]]
```

#### 3211. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23566` → after: `L23977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23977) · [Before (L23566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23566)

```diff
-   39374: (rr, Sr, Qr) => {
+   39417: (dd, Od, md) => {
```

#### 3212. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23569` → after: `L23980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23980) · [Before (L23569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23569)

```diff
-       e: () => Zr
+       d: () => Wd
```

#### 3213. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23577` → after: `L23988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23988) · [Before (L23577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23577)

```diff
-   39200: (rr, Sr, Qr) => {
+   39237: (dd, Od, md) => {
```

#### 3214. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23579` → after: `L23990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23990) · [Before (L23579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23579)

```diff
-       d: () => Zr
+       e: () => Wd
```

#### 3215. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23588` → after: `L23999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L23999) · [Before (L23588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23588)

```diff
-   37843: (rr, Sr, Qr) => {
+   37939: (dd, Od, md) => {
```

#### 3216. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23590` → after: `L24001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24001) · [Before (L23590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23590)

```diff
-       b: () => Tr
+       d: () => Jd
```

#### 3217. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23592-L23599` → after: `L24003-L24010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24003-L24010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24003-L24010) · [Before (L23592-L23599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23592-L23599)

```diff
-     var Zr = Qr(37851),
-       Wr = Qr(208),
-       ar = Qr(5681),
-       jr = Qr(37853),
-       Ir = Qr(37859),
-       fr = Qr(37927),
-       Er = Qr(37866),
-       pr = Qr(388),
+     var Wd = md(37942),
+       Fd = md(218),
+       Rd = md(5641),
+       Xd = md(37948),
+       Kd = md(37955),
+       hd = md(38006),
+       vd = md(37958),
+       Qd = md(415),
```

#### 3218. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23601-L23609` → after: `L24012-L24020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24012-L24020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24012-L24020) · [Before (L23601-L23609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23601-L23609)

```diff
-       mr = Qr(2383),
-       Nr = Qr(37924),
-       Ur = Qr(34),
-       tr = Qr(26),
-       hr = Qr(37875),
-       zr = Qr(37884),
-       Yr = Qr(37893),
-       nr = Qr(37902),
-       er = Qr(37915);
+       od = md(2402),
+       Nd = md(38003),
+       qd = md(32),
+       Hd = md(29),
+       yd = md(37965),
+       bd = md(37974),
+       Td = md(37982),
+       pd = md(37989),
+       Yd = md(37996);
```

#### 3219. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23626-L23627` → after: `L24037-L24038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24037-L24038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24037-L24038) · [Before (L23626-L23627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23626-L23627)

```diff
-         this._howl = void 0, this._volumeMultiplier = void 0, this._loadFailed = !1, this._unloaded = !1, this._volumeMultiplier = new fr.k, this._howl = (0, Ir.countDecodesAs)(new ar.Howl({
-           src: [...(0, Zr.r)(rr).src],
+         this._howl = void 0, this._volumeMultiplier = void 0, this._loadFailed = !1, this._unloaded = !1, this._volumeMultiplier = new hd.h, this._howl = (0, Kd.countDecodesAs)(new Rd.Howl({
+           src: [...(0, Wd.t)(dd).src],
```

#### 3220. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23635` → after: `L24046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24046) · [Before (L23635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23635)

```diff
-         const Sr = this._howl.play(jr.e);
+         const Od = this._howl.play(Xd.b);
```

#### 3221. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23663` → after: `L24074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24074) · [Before (L23663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23663)

```diff
-             return Qr = tr.c.get("soundOnFromAd") ? rr : 0, null === (Wr = this.liveHowl()) || void 0 === Wr || Wr.volume(Math.min(1, Qr * this._volumeMultiplier.getTotalMultipliedVal()), Sr), Zr
+             return md = Hd.e.get("soundOnFromAd") ? dd : 0, null === (Fd = this.liveHowl()) || void 0 === Fd || Fd.volume(Math.min(1, md * this._volumeMultiplier.getTotalMultipliedVal()), Od), Wd
```

#### 3222. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23702` → after: `L24113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24113) · [Before (L23702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23702)

```diff
-         (0, jr.g)(this._howl, (() => {
+         (0, Xd.e)(this._howl, (() => {
```

#### 3223. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23718` → after: `L24129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24129) · [Before (L23718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23718)

```diff
-           refDistance: fr = Nr.h,
+           refDistance: hd = Nd.i,
```

#### 3224. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23741` → after: `L24152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24152) · [Before (L23741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23741)

```diff
-         this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new hr.d, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, Ur.i.subscribe("appManagerUpdated|soundVolume", (rr => {
+         this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new yd.d, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, qd.j.subscribe("appManagerUpdated|soundVolume", (dd => {
```

#### 3225. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23748-L23750` → after: `L24159-L24161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24159-L24161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24159-L24161) · [Before (L23748-L23750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23748-L23750)

```diff
-         let ar, jr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (Qr = (0, mr.e)()) || void 0 === Qr ? void 0 : Qr.fC,
-           Ir = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Nr.e,
-           fr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Nr.h,
+         let Rd, Xd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (md = (0, od.c)()) || void 0 === md ? void 0 : md.YV,
+           Kd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Nd.f,
+           hd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Nd.i,
```

#### 3226. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23753-L23754` → after: `L24164-L24165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24164-L24165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24164-L24165) · [Before (L23753-L23754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23753-L23754)

```diff
-         (0, mr.e)() ? ar = !!Array.isArray(jr) || (0, Er.e)(jr) !== (null === (Ur = (0, mr.e)()) || void 0 === Ur ? void 0 : Ur.fC): ar = !1;
-         const tr = (0, Zr.g)(rr),
+         (0, od.c)() ? Rd = !!Array.isArray(Xd) || (0, vd.b)(Xd) !== (null === (qd = (0, od.c)()) || void 0 === qd ? void 0 : qd.YV): Rd = !1;
+         const Hd = (0, Wd.j)(dd),
```

#### 3227. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23760-L23762` → after: `L24171-L24173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24171-L24173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24171-L24173) · [Before (L23760-L23762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23760-L23762)

```diff
-         const Yr = (0, mr.e)(),
-           nr = Array.isArray(jr) ? jr : Yr.YB.JY(jr),
-           Br = Yr.YB.JY(Yr.fC);
+         const Td = (0, od.c)(),
+           pd = Array.isArray(Xd) ? Xd : Td.qE.hY(Xd),
+           Ed = Td.qE.hY(Td.YV);
```

#### 3228. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23767-L23768` → after: `L24178-L24179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24178-L24179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24178-L24179) · [Before (L23767-L23768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23767-L23768)

```diff
-               group: Kr.has(tr) ? null : (0, hr.l)(rr),
-               loudness: (0, hr.h)(Sr, xr().Oj(nr, Br), fr),
+               group: gd.has(Hd) ? null : (0, yd.i)(dd),
+               loudness: (0, yd.e)(Od, td().UX(pd, Ed), hd),
```

#### 3229. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23772` → after: `L24183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24183) · [Before (L23772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23772)

```diff
-                 return null !== (rr = null === (Sr = Tr) || void 0 === Sr ? void 0 : Sr.getDurationMs()) && void 0 !== rr ? rr : 0
+                 return null !== (dd = null === (Od = Jd) || void 0 === Od ? void 0 : Od.getDurationMs()) && void 0 !== dd ? dd : 0
```

#### 3230. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23790` → after: `L24201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24201) · [Before (L23790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23790)

```diff
-         }), Tr.setPosition([nr[0], nr[1] + Wr.i.Uz * Wr.i.playerEyeToHeightRatio, nr[2]]), !pr && (0, er.l)() && (0, er.i)(tr, rr, nr[0] - Br[0], nr[2] - Br[2]), Tr
+         }), Jd.setPosition([pd[0], pd[1] + Fd.i.yb * Fd.i.playerEyeToHeightRatio, pd[2]]), !Qd && (0, Yd.g)() && (0, Yd.d)(Hd, dd, pd[0] - Ed[0], pd[2] - Ed[2]), Jd
```

#### 3231. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23793-L23794` → after: `L24204-L24205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24204-L24205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24204-L24205) · [Before (L23793-L23794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23793-L23794)

```diff
-         const Sr = (0, Zr.l)(rr) ? [rr] : (0, Zr.t)(rr);
-         if (0 === Sr.length) throw new Error(`Invalid sound name ${rr} (no sound has it or starts with it)`);
+         const Od = (0, Wd.o)(dd) ? [dd] : (0, Wd.v)(dd);
+         if (0 === Od.length) throw new Error(`Invalid sound name ${dd} (no sound has it or starts with it)`);
```

#### 3232. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23802` → after: `L24213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24213) · [Before (L23802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23802)

```diff
-         (0, Yr.d)(Qr, {
+         (0, Td.b)(md, {
```

#### 3233. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23804` → after: `L24215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24215) · [Before (L23804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23804)

```diff
-           Rr: () => Zr !== this.idlePreloadGeneration,
+           Ad: () => Wd !== this.idlePreloadGeneration,
```

#### 3234. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23819` → after: `L24230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24230) · [Before (L23819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23819)

```diff
-         for (const jr of null !== (ar = (0, Zr.n)(Sr)) && void 0 !== ar ? ar : []) {
+         for (const Xd of null !== (Rd = (0, Wd.s)(Od)) && void 0 !== Rd ? Rd : []) {
```

#### 3235. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23826` → after: `L24237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24237) · [Before (L23826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23826)

```diff
-         (0, nr.f)(Sr);
+         (0, pd.g)(Od);
```

#### 3236. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23828` → after: `L24239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24239) · [Before (L23828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23828)

```diff
-         return Qr.setGlobalVolume(tr.c.get("soundVolume")), rr[Sr] = Qr, Qr
+         return md.setGlobalVolume(Hd.e.get("soundVolume")), dd[Od] = md, md
```

#### 3237. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23835` → after: `L24246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24246) · [Before (L23835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23835)

```diff
-           for (const [Sr, Qr] of Object.entries(rr)) !zr.b.has((0, Zr.g)(Sr)) && Qr.loaded() && (Qr.unloadOnceIdle(), delete rr[Sr])
+           for (const [Od, md] of Object.entries(dd)) !bd.b.has((0, Wd.j)(Od)) && md.loaded() && (md.unloadOnceIdle(), delete dd[Od])
```

#### 3238. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23839` → after: `L24250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24250) · [Before (L23839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23839)

```diff
-   37945: (rr, Sr, Qr) => {
+   38022: (dd, Od, md) => {
```

#### 3239. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23841` → after: `L24252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24252) · [Before (L23841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23841)

```diff
-       d: () => Wr
+       c: () => Fd
```

#### 3240. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23879` → after: `L24290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24290) · [Before (L23879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23879)

```diff
-           if (Sr > 0 && Qr.searchParams.set("cache-bust", `${Date.now()}-${Sr}`), await this.fetchWhole(Qr, rr)) return this.scriptUrl = Qr, !0;
+           if (Od > 0 && md.searchParams.set("cache-bust", `${Date.now()}-${Od}`), await this.fetchWhole(md, dd)) return this.scriptUrl = md, !0;
```

#### 3241. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23921` → after: `L24332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24332) · [Before (L23921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23921)

```diff
-   39826: (rr, Sr, Qr) => {
+   39879: (dd, Od, md) => {
```

#### 3242. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23925-L23931` → after: `L24336-L24342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24336-L24342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24336-L24342) · [Before (L23925-L23931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23925-L23931)

```diff
-     var Zr = Qr(38555),
-       Wr = Qr(38762),
-       ar = Qr(39402),
-       jr = Qr(39030),
-       Ir = Qr(38736),
-       fr = Qr(388);
-     const Er = Qr.n(fr)().tm(0, -1, 0),
+     var Wd = md(38627),
+       Fd = md(38799),
+       Rd = md(39459),
+       Xd = md(39074),
+       Kd = md(38779),
+       hd = md(415);
+     const vd = md.n(hd)().mo(0, -1, 0),
```

#### 3243. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23935-L23936` → after: `L24346-L24347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24346-L24347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24346-L24347) · [Before (L23935-L23936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23935-L23936)

```diff
-         GSr: [0, 0, 0],
-         kSr: [0, 0, 0]
+         Nmd: [0, 0, 0],
+         qmd: [0, 0, 0]
```

#### 3244. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23940-L23941` → after: `L24351-L24352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24351-L24352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24351-L24352) · [Before (L23940-L23941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23940-L23941)

```diff
-       const Zr = rr.wV(Qr, Er, Sr, null, pr);
-       return Zr ? Zr.position[1] - rr.um[1] - .01 * Zr.normal[1] : null
+       const Wd = dd.bC(md, vd, Od, null, Qd);
+       return Wd ? Wd.position[1] - dd.XN[1] - .01 * Wd.normal[1] : null
```

#### 3245. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23947` → after: `L24358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24358) · [Before (L23947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23947)

```diff
-           const Wr = rr.um;
+           const Fd = dd.XN;
```

#### 3246. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23955` → after: `L24366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24366) · [Before (L23955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23955)

```diff
-                   const Zr = rr.Ex.XN(rr.qx.sF(Sr._groundColumnX, Qr, Sr._groundColumnZ));
+                   const Wd = dd.Rt.GN(dd.Bt.eZ(Od._groundColumnX, md, Od._groundColumnZ));
```

#### 3247. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23970` → after: `L24381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24381) · [Before (L23970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23970)

```diff
-       const fr = rr.um,
+       const hd = dd.XN,
```

#### 3248. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23973` → after: `L24384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24384) · [Before (L23973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23973)

```diff
-       return Qr._groundColumnX = Er, Qr._groundColumnZ = pr, Qr._groundOffsetY = fr[1], Qr._groundTopChunk = rr.qx.Tpr(Er, Math.floor(Zr[1]) + fr[1], pr), Qr._groundTopVersion = null !== (Wr = null === (ar = Qr._groundTopChunk) || void 0 === ar ? void 0 : ar.rt) && void 0 !== Wr  … [truncated]
+       return md._groundColumnX = vd, md._groundColumnZ = Qd, md._groundOffsetY = hd[1], md._groundTopChunk = dd.Bt.EQd(vd, Math.floor(Wd[1]) + hd[1], Qd), md._groundTopVersion = null !== (Fd = null === (Rd = md._groundTopChunk) || void 0 === Rd ? void 0 : Rd.vH) && void 0 !== Fd  … [truncated]
```

#### 3249. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23987` → after: `L24398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24398) · [Before (L23987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23987)

```diff
-       return null !== rr && !rr.Dv && rr.rt === Sr
+       return null !== dd && !dd.yJ && dd.vH === Od
```

#### 3250. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23997` → after: `L24408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24408) · [Before (L23997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L23997)

```diff
-       const Wr = rr.YB.gJ(Zr.XM);
+       const Fd = dd.qE.gM(Wd.QG);
```

#### 3251. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24000` → after: `L24411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24411) · [Before (L24000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24000)

```diff
-         const Qr = rr.YB.fSr(Sr.XM);
+         const md = dd.qE.AOd(Od.QG);
```

#### 3252. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24003` → after: `L24414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24414) · [Before (L24003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24003)

```diff
-       if (null !== jr) ar = jr.Om.base[1], Ur(Zr);
+       if (null !== Xd) Rd = Xd.Bo.base[1], qd(Wd);
```

#### 3253. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24005` → after: `L24416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24416) · [Before (L24005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24005)

```diff
-         const jr = mr(rr, Qr, Zr, Wr.lD);
+         const Xd = od(dd, md, Wd, Fd.y_);
```

#### 3254. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24011` → after: `L24422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24422) · [Before (L24011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24011)

```diff
-       const fr = .7 * Zr.size * (1 - (Wr.GSr[1] - ar) / Qr);
+       const hd = .7 * Wd.size * (1 - (Fd.Nmd[1] - Rd) / md);
```

#### 3255. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24017-L24018` → after: `L24428-L24429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24428-L24429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24428-L24429) · [Before (L24017-L24018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24017-L24018)

```diff
-       const ar = null !== (Zr = null === (Wr = Sr.enabledCombinator) || void 0 === Wr ? void 0 : Wr.setBooleanType("placeToPutShadowExists", Qr)) && void 0 !== Zr ? Zr : Qr;
-       Sr._enabled !== ar && (Sr._enabled = ar, rr.VK(Sr._thinObjectId, ar))
+       const Rd = null !== (Wd = null === (Fd = Od.enabledCombinator) || void 0 === Fd ? void 0 : Fd.setBooleanType("placeToPutShadowExists", md)) && void 0 !== Wd ? Wd : md;
+       Od._enabled !== Rd && (Od._enabled = Rd, dd.rY(Od._thinObjectId, Rd))
```

#### 3256. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24025` → after: `L24436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24436) · [Before (L24025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24025)

```diff
-       const Qr = (0, ar.p)(rr.Ox, "Px", (0, jr.f)({
+       const md = (0, Rd.p)(dd.gt, "Ut", (0, Xd.f)({
```

#### 3257. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24031-L24032` → after: `L24442-L24443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24442-L24443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24442-L24443) · [Before (L24031-L24032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24031-L24032)

```diff
-         const Sr = (0, Ir.u)("shadow_component_mat", rr.Ox.Dt);
-         (0, Ir.hb)(Sr, {
+         const Od = (0, Kd.x)("shadow_component_mat", dd.gt.MH);
+         (0, Kd.pb)(Od, {
```

#### 3258. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24040` → after: `L24451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24451) · [Before (L24040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24040)

```diff
-         }), Qr.material = Sr.mirror, (0, Wr.m)(Qr.material)
+         }), md.material = Od.mirror, (0, Fd.o)(md.material)
```

#### 3259. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24042-L24044` → after: `L24453-L24455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24453-L24455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24453-L24455) · [Before (L24042-L24044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24042-L24044)

```diff
-       const fr = rr.Ox.bC;
-       return fr.newObjectType("Px", Qr, {
-         sx: 32,
+       const hd = dd.gt.HA;
+       return hd.newObjectType("Ut", md, {
+         Mt: 32,
```

#### 3260. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24049-L24050` → after: `L24460-L24461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24460-L24461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24460-L24461) · [Before (L24049-L24050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24049-L24050)

```diff
-       }), Qr.rotationQuaternion.set(0, 0, 0, 1), rr.Ox.pM(Qr, !0), Qr.sC(), {
-         name: "Px",
+       }), md.rotationQuaternion.set(0, 0, 0, 1), dd.gt.hG(md, !0), md.sA(), {
+         name: "Ut",
```

#### 3261. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24074-L24075` → after: `L24485-L24486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24485-L24486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24485-L24486) · [Before (L24074-L24075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24074-L24075)

```diff
-         zB: function(rr, Sr) {
-           Sr._thinObjectId = fr.instantiate("Px"), fr.setEntityId(Sr._thinObjectId, rr), fr.setPickable(Sr._thinObjectId, !1)
+         QE: function(dd, Od) {
+           Od._thinObjectId = hd.instantiate("Ut"), hd.setEntityId(Od._thinObjectId, dd), hd.setPickable(Od._thinObjectId, !1)
```

#### 3262. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24077` → after: `L24488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24488) · [Before (L24077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24077)

```diff
-         bq: function(rr, Sr) {
+         qS: function(dd, Od) {
```

#### 3263. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24082` → after: `L24493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24493) · [Before (L24082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24082)

```diff
-           const jr = null === (Wr = null === (ar = rr.zU) || void 0 === ar ? void 0 : ar.showsCircleShadows()) || void 0 === Wr || Wr;
+           const Xd = null === (Fd = null === (Rd = dd.Jq) || void 0 === Rd ? void 0 : Rd.showsCircleShadows()) || void 0 === Fd || Fd;
```

#### 3264. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24090-L24091` → after: `L24501-L24502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24501-L24502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24501-L24502) · [Before (L24090-L24091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24090-L24091)

```diff
-             const Wr = rr.YB.rQr(Qr.XM);
-             Qr.XM === rr.fC || Wr && (null !== (Ir = null === (Er = Wr.tZr) || void 0 === Er ? void 0 : Er.zZr) && void 0 !== Ir ? Ir : null === (pr = Wr.mesh) || void 0 === pr ? void 0 : pr.isEnabled()) ? nr(rr, fr, Sr, Qr) : Yr(fr, Qr)
+             const Fd = dd.qE.Vmd(md.QG);
+             md.QG === dd.YV || Fd && (null !== (Kd = null === (vd = Fd.fWd) || void 0 === vd ? void 0 : vd.MWd) && void 0 !== Kd ? Kd : null === (Qd = Fd.mesh) || void 0 === Qd ? void 0 : Qd.isEnabled()) ? pd(dd, hd, Od, md) : Td(hd, md)
```

#### 3265. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24094` → after: `L24505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24505) · [Before (L24094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24094)

```diff
-         nB: function(Sr, Qr) {
+         yE: function(Od, md) {
```

#### 3266. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24098` → after: `L24509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24509) · [Before (L24098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24098)

```diff
-             const Wr = rr.YB.gJ(Sr.XM).lD;
+             const Fd = dd.qE.gM(Od.QG).y_;
```

#### 3267. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24105` → after: `L24516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24516) · [Before (L24105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24105)

```diff
-   39006: (rr, Sr, Qr) => {
+   39043: (dd, Od, md) => {
```

#### 3268. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24107` → after: `L24518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24518) · [Before (L24107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24107)

```diff
-       d: () => Wr,
+       c: () => Fd,
```

#### 3269. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24110` → after: `L24521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24521) · [Before (L24110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24110)

```diff
-     var Zr = Qr(38555);
+     var Wd = md(38627);
```

#### 3270. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24169` → after: `L24580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24580) · [Before (L24169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24169)

```diff
-         return Wr.matInverseToRef(rr, Sr) ? Sr : null
+         return Fd.matInverseToRef(dd, Od) ? Od : null
```

#### 3271. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24206` → after: `L24617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24617) · [Before (L24206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24206)

```diff
-       return Zr.Quaternion.RotationYawPitchRollToRef(rr.rotation.y, rr.rotation.x, rr.rotation.z, ar), Zr.Matrix.ComposeToRef(rr.Tx, ar, rr.position, jr), jr.m
+       return Wd.Quaternion.RotationYawPitchRollToRef(dd.rotation.y, dd.rotation.x, dd.rotation.z, Rd), Wd.Matrix.ComposeToRef(dd.Tt, Rd, dd.position, Xd), Xd.m
```

#### 3272. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24209` → after: `L24620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24620) · [Before (L24209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24209)

```diff
-   38795: (rr, Sr, Qr) => {
+   38837: (dd, Od, md) => {
```

#### 3273. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24211-L24213` → after: `L24622-L24624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24622-L24624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24622-L24624) · [Before (L24211-L24213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24211-L24213)

```diff
-       b: () => Zr,
-       f: () => Wr,
-       i: () => jr
+       d: () => Wd,
+       g: () => Fd,
+       h: () => Xd
```

#### 3274. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24225` → after: `L24636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24636) · [Before (L24225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24225)

```diff
-       if ((null === Qr || void 0 === Qr ? void 0 : Qr.frameId) === Sr) return Qr.lx;
+       if ((null === md || void 0 === md ? void 0 : md.frameId) === Od) return md.Et;
```

#### 3275. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24229` → after: `L24640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24640) · [Before (L24229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24229)

```diff
-         lx: Zr
+         Et: Wd
```

#### 3276. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24233` → after: `L24644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24644) · [Before (L24233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24233)

```diff
-   38990: (rr, Sr, Qr) => {
+   39025: (dd, Od, md) => {
```

#### 3277. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24236` → after: `L24647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24647) · [Before (L24236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24236)

```diff
-         Ox: Sr
+         gt: Od
```

#### 3278. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24238` → after: `L24649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24649) · [Before (L24238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24238)

```diff
-       return !!Sr.Wt || Sr.Ut()
+       return !!Od.NH || Od.pH()
```

#### 3279. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24245` → after: `L24655-L24656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24655-L24656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24655-L24656) · [Before (L24245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24245)

```diff
-       l: () => ar
+       k: () => vd,
+       o: () => Rd
```

#### 3280. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24251-L24254` → after: `L24662-L24665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24662-L24665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24662-L24665) · [Before (L24251-L24254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24251-L24254)

```diff
-         L_: Sr,
-         l_: Qr
-       } = rr, Zr = rr.v_;
-       if (rr.Kt || !Sr || !Qr || !(Zr >= 0) || Zr !== Math.floor(Zr)) return !1;
+         Z2: Od,
+         O4: md
+       } = dd, Wd = dd.I9;
+       if (dd.UH || !Od || !md || !(Wd >= 0) || Wd !== Math.floor(Wd)) return !1;
```

#### 3281. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24281` → after: `L24692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24692) · [Before (L24281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24281)

```diff
-       const fr = rr.Oh;
+       const hd = dd.Ay;
```

#### 3282. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24297` → after: `L24708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24708) · [Before (L24297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24297)

```diff
-       return Zr(rr) && Sr.v_ >= 0 && !ar(Sr) ? jr(Qr) : Qr
+       return Wd(dd) && Od.I9 >= 0 && !Rd(Od) ? Xd(md) : md
```

#### 3283. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24305-L24307` → after: `L24716-L24718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24716-L24718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24716-L24718) · [Before (L24305-L24307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24305-L24307)

```diff
-       const Zr = rr.gm.Ex.et(Sr),
-         Wr = rr._texURLtoTerrainID[jr(Zr.B_[0])],
-         ar = fr(rr.gm, Zr) ? void 0 === Wr ? null : rr.iU(Wr) : Qr;
+       const Wd = dd.zo.Rt.JH(Od),
+         Fd = dd._texURLtoTerrainID[Xd(Wd.N9[0])],
+         Rd = hd(dd.zo, Wd) ? void 0 === Fd ? null : dd.fq(Fd) : md;
```

#### 3284. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24311` → after: `L24722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24722) · [Before (L24311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24311)

```diff
-   39345: (rr, Sr, Qr) => {
+   39391: (dd, Od, md) => {
```

#### 3285. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24315-L24316` → after: `L24725-L24727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24725-L24727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24725-L24727) · [Before (L24315-L24316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24315-L24316)

```diff
-       g: () => Er,
-       i: () => pr
+       f: () => td,
+       h: () => vd,
+       k: () => Qd
```

#### 3286. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24318-L24322` → after: `L24729-L24733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24729-L24733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24729-L24733) · [Before (L24318-L24322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24318-L24322)

```diff
-     var Zr = Qr(38555),
-       Wr = Qr(39332),
-       ar = Qr(38736),
-       jr = Qr(38795);
-     const Ir = new Zr.kU(0, jr.b, 0),
+     var Wd = md(38627),
+       Fd = md(39371),
+       Rd = md(38779),
+       Xd = md(38837);
+     const Kd = new Wd.Cq(0, Xd.d, 0),
```

#### 3287. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24345` → after: `L24756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24756) · [Before (L24345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24345)

```diff
-       } = Wr.j, ar = [Qr.call(rr, "vertex", Sr), Qr.call(rr, "fragment", Sr), Zr.call(rr, Sr), (0, Wr.d)(rr).width];
+       } = Fd.h, Rd = [md.call(dd, "vertex", Od), md.call(dd, "fragment", Od), Wd.call(dd, Od), (0, Fd.e)(dd).width];
```

#### 3288. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24365` → after: `L24776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24776) · [Before (L24365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24365)

```diff
-       Wr && (rr.unfreeze(), (0, ar.Z)(rr, !1)), (0, ar.K)(rr), Wr && requestAnimationFrame((() => {
+       Fd && (dd.unfreeze(), (0, Rd.fb)(dd, !1)), (0, Rd.Q)(dd), Fd && requestAnimationFrame((() => {
```

#### 3289. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24367` → after: `L24778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24778) · [Before (L24367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24367)

```diff
-           rr.freeze(), (0, ar.Z)(rr, !0)
+           dd.freeze(), (0, Rd.fb)(dd, !0)
```

#### 3290. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24372` → after: `L24783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24783) · [Before (L24372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24372)

```diff
-   39002: (rr, Sr, Qr) => {
+   39037: (dd, Od, md) => {
```

#### 3291. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24388` → after: `L24799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24799) · [Before (L24388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24388)

```diff
-   38677: (rr, Sr, Qr) => {
+   38731: (dd, Od, md) => {
```

#### 3292. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24390-L24391` → after: `L24801-L24802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24801-L24802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24801-L24802) · [Before (L24390-L24391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24390-L24391)

```diff
-       d: () => Zr,
-       e: () => Wr
+       c: () => Wd,
+       f: () => Fd
```

#### 3293. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24419` → after: `L24830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24830) · [Before (L24419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24419)

```diff
-   38963: (rr, Sr, Qr) => {
+   38993: (dd, Od, md) => {
```

#### 3294. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24421-L24423` → after: `L24832-L24834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24832-L24834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24832-L24834) · [Before (L24421-L24423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24421-L24423)

```diff
-       c: () => Er,
-       d: () => Ir,
-       e: () => jr
+       e: () => vd,
+       h: () => Kd,
+       k: () => Xd
```

#### 3295. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24425-L24426` → after: `L24836-L24837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24836-L24837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24836-L24837) · [Before (L24425-L24426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24425-L24426)

```diff
-     var Zr = Qr(38956),
-       Wr = Qr(38972);
+     var Wd = md(38987),
+       Fd = md(39002);
```

#### 3296. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24431-L24432` → after: `L24842-L24843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24842-L24843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24842-L24843) · [Before (L24431-L24432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24431-L24432)

```diff
-       Qr._noaFaceGroups = null !== Sr && void 0 !== Sr ? Sr : null, Qr._noaFaceEpoch = -1, Qr._noaFaceMask = -1, Qr._noaFaceCount = -1, Qr._noaFaceMaterial = null;
-       const Zr = rr.jT;
+       md._noaFaceGroups = null !== Od && void 0 !== Od ? Od : null, md._noaFaceEpoch = -1, md._noaFaceMask = -1, md._noaFaceCount = -1, md._noaFaceMaterial = null;
+       const Wd = dd.ZE;
```

#### 3297. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24449` → after: `L24860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24860) · [Before (L24449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24449)

```diff
-       for (let jr = 0; jr < Zr.f; jr++) {
+       for (let Xd = 0; Xd < Wd.d; Xd++) {
```

#### 3298. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24452` → after: `L24863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24863) · [Before (L24452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24452)

```diff
-         Ir > Qr && Sr & 1 << Zr.e[jr] && (Wr < 0 && (Wr = Qr), ar = Ir)
+         Kd > md && Od & 1 << Wd.b[Xd] && (Fd < 0 && (Fd = md), Rd = Kd)
```

#### 3299. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24458` → after: `L24869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24869) · [Before (L24458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24458)

```diff
-         this.hx = rr, this.engine = Sr, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
+         this.Qt = dd, this.engine = Od, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
```

#### 3300. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24468` → after: `L24879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24879) · [Before (L24468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24468)

```diff
-           pr = jr ? (0, Wr.c)(Qr, Er.getRenderWidth(), Er.getRenderHeight()) : 0;
+           Qd = Xd ? (0, Fd.e)(md, vd.getRenderWidth(), vd.getRenderHeight()) : 0;
```

#### 3301. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24473` → after: `L24884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24884) · [Before (L24473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24473)

```diff
-         } = this, Nr = this.hx / 2, Ur = Nr * Math.sqrt(3), tr = rr.data, hr = rr.length;
+         } = this, Nd = this.Qt / 2, qd = Nd * Math.sqrt(3), Hd = dd.data, yd = dd.length;
```

#### 3302. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24480` → after: `L24891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24891) · [Before (L24480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24480)

```diff
-             const Qr = rr.jT,
+             const md = dd.ZE,
```

#### 3303. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24483` → after: `L24894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24894) · [Before (L24483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24483)

```diff
-             if (jr && ar && (0, Zr.s)(rr.material)) {
+             if (Xd && Rd && (0, Wd.r)(dd.material)) {
```

#### 3304. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24492` → after: `L24903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24903) · [Before (L24492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24492)

```diff
-               Er = (0, Wr.g)(Sr, Zr, ar, jr, (0, Wr.d)(tr, pr))
+               vd = (0, Fd.l)(Od, Wd, Rd, Xd, (0, Fd.h)(Hd, Qd))
```

#### 3305. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24497` → after: `L24908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24908) · [Before (L24497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24497)

```diff
-                 Wr = Sr[Zr.f]; - 1 !== Er && (Wr = fr(Sr, Er, mr), Qr = mr[0]), rr._noaFaceCount = Wr, ar.indexStart = 6 * Qr, ar.indexCount = 6 * Wr, ar.setBoundingInfo(rr.mG())
+                 Fd = Od[Wd.d]; - 1 !== vd && (Fd = hd(Od, vd, od), md = od[0]), dd._noaFaceCount = Fd, Rd.indexStart = 6 * md, Rd.indexCount = 6 * Fd, Rd.setBoundingInfo(dd.iG())
```

#### 3306. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24506` → after: `L24917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24917) · [Before (L24506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24506)

```diff
-   39899: (rr, Sr, Qr) => {
+   39947: (dd, Od, md) => {
```

#### 3307. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24509-L24510` → after: `L24920-L24921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24920-L24921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24920-L24921) · [Before (L24509-L24510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24509-L24510)

```diff
-       A: () => jr,
-       D: () => Wr,
+       B: () => Qd,
+       C: () => gd,
```

#### 3308. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24512` → after: `L24923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24923) · [Before (L24512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24512)

```diff
-       I: () => pr,
+       J: () => Jd,
```

#### 3309. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24514-L24515` → after: `L24925-L24927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24925-L24927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24925-L24927) · [Before (L24514-L24515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24514-L24515)

```diff
-       M: () => gr,
-       Q: () => Tr,
+       N: () => od,
+       P: () => yd,
+       R: () => qd,
```

#### 3310. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24519-L24520` → after: `L24930-L24931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24930-L24931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24930-L24931) · [Before (L24519-L24520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24519-L24520)

```diff
-       Z: () => Ur,
-       _: () => tr,
+       b: () => wd,
+       c: () => nd,
```

#### 3311. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24522` → after: `L24933-L24934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24933-L24934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24933-L24934) · [Before (L24522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24522)

```diff
-       e: () => yr,
+       d: () => Td,
+       f: () => pd,
```

#### 3312. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24525-L24526` → after: `L24937-L24938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24937-L24938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24937-L24938) · [Before (L24525-L24526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24525-L24526)

```diff
-       gb: () => kr,
-       i: () => Yr,
+       hb: () => Pd,
+       ib: () => cd,
```

#### 3313. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24528-L24531` → after: `L24940-L24942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24940-L24942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24940-L24942) · [Before (L24528-L24531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24528-L24531)

```diff
-       kb: () => Gr,
-       n: () => er,
-       ob: () => Ar,
-       q: () => zr,
+       m: () => hd,
+       o: () => td,
+       p: () => Kd,
```

#### 3314. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24537` → after: `L24948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24948) · [Before (L24537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24537)

```diff
-     var Zr = Qr(3936);
+     var Wd = md(3922);
```

#### 3315. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24559` → after: `L24970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L24970) · [Before (L24559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24559)

```diff
-       return rr.OU.get((Sr / 9 | 0) - 1, (Sr / 3 | 0) % 3 - 1, Sr % 3 - 1)
+       return dd.rq.get((Od / 9 | 0) - 1, (Od / 3 | 0) % 3 - 1, Od % 3 - 1)
```

#### 3316. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24617` → after: `L25028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L25028) · [Before (L24617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24617)

```diff
-         if (Zr = rr.size, Zr >= Qr) throw new Error(`More than ${Qr} distinct registry values`);
+         if (Wd = dd.size, Wd >= md) throw new Error(`More than ${md} distinct registry values`);
```

#### 3317. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24624` → after: `L25035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L25035) · [Before (L24624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24624)

```diff
-       return `${typeof rr}:${String(rr)}`
+       return `${typeof dd}:${String(dd)}`
```

#### 3318. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24629` → after: `L25040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L25040) · [Before (L24629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24629)

```diff
-         return Math.max(rr.qN.length, rr.ft.length, rr.dL.length, rr.uL.length, rr.ht.length, rr.zt.length, rr.Yt.length)
+         return Math.max(dd.PN.length, dd.HH.length, dd.PJ.length, dd.eJ.length, dd.gH.length, dd.wH.length, dd.aH.length)
```

#### 3319. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24636-L24639` → after: `L25047-L25050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25047-L25050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L25047-L25050) · [Before (L24636-L24639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24636-L24639)

```diff
-         const Qr = rr.ft[Ur],
-           tr = rr.uL[Ur],
-           hr = `${Nr=rr.ht[Ur],Nr?`[${Array.from(Nr).join()}]`:"none"}|${ir(rr.zt[Ur])}|${ir(rr.Yt[Ur])}`;
-         mr[Ur] = Vr(Zr, rr.qN[Ur], 16) | Vr(Wr, Qr, 16) << 4 | (Qr ? jr : 0) | (rr.dL[Ur] ? Ir : 0) | (tr ? fr : 0) | (tr && (tr.yX || tr.EX) ? Er : 0) | (null !== Sr && void 0 !== Sr && Sr(Ur) ? pr : 0) | Vr(ar, hr, 65536) << xr >>> 0
+         const md = dd.HH[qd],
+           Hd = dd.eJ[qd],
+           yd = `${Nd=dd.gH[qd],Nd?`[${Array.from(Nd).join()}]`:"none"}|${Dd(dd.wH[qd])}|${Dd(dd.aH[qd])}`;
+         od[qd] = jd(Wd, dd.PN[qd], 16) | jd(Fd, md, 16) << 4 | (md ? Xd : 0) | (dd.PJ[qd] ? Kd : 0) | (Hd ? hd : 0) | (Hd && (Hd.dU || Hd.MJ) ? vd : 0) | (null !== Od && void 0 !== Od && Od(qd) ? Qd : 0) | jd(Rd, yd, 65536) << td >>> 0
```

#### 3320. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24653` → after: `L25064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L25064) · [Before (L24653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L24653)

```diff
-       } = Sr, pr = null === (Wr = rr.gm.Ox) || void 0 === Wr ? void 0 : Wr.ct, xr = [];
+       } = Od, Qd = null === (Fd = dd.zo.gt) || void 0 === Fd ? void 0 : Fd.lH, td = [];
```
