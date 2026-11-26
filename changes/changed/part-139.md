# Changed — Bundle Modifications Report (Part 139 / 146)

- **Updated at**: `2026-11-26T17:59 JST`
- **Part**: `139 / 146` (**414** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 138](part-138.md) · [Part 140 →](part-140.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmPlay.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmPlay.js` (1010 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f)

#### 756. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7081` → after: `L6834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6834) · [Before (L7081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7081)

```diff
-                 QM = await SM.bindSession(PM, rM, (async MM => (0, Hi.w)(nM, Tj, aM, MM, vQ, await jM)))
+                 nV = await YV.bindSession(pV, eV, (async VV => (0, rx.x)(QV, uU, yV, VV, hn, await UV)))
```

#### 757. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7098` → after: `L6851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6851) · [Before (L7098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7098)

```diff
-                   return null !== (MM = SM.call(iM)) && void 0 !== MM ? MM : null
+                   return null !== (VV = YV.call(xV)) && void 0 !== VV ? VV : null
```

#### 758. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7104` → after: `L6857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6857) · [Before (L7104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7104)

```diff
-             return rn.boundAtMs = null !== (PM = (0, ZS.O)()) && void 0 !== PM ? PM : hM, rn.indirectHangs = (0, ZS.C)(), rn.restoresSkipped = (0, ZS.R)(), console.info(`${Kj} ${OM} renderer bound at ${Math.round(hM)} ms`), !MM.isStopped
+             return Op.boundAtMs = null !== (pV = (0, DY.N)()) && void 0 !== pV ? pV : kV, Op.indirectHangs = (0, DY.C)(), Op.restoresSkipped = (0, DY.O)(), console.info(`${KU} ${JV} renderer bound at ${Math.round(kV)} ms`), !VV.isStopped
```

#### 759. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7108` → after: `L6861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6861) · [Before (L7108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7108)

```diff
-           (0, lr.L)(HM);
+           (0, je.x)(rV);
```

#### 760. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7110` → after: `L6863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6863) · [Before (L7110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7110)

```diff
-           iM.e(220).then((() => iM(34920))).then((rM => {
+           xV.e(220).then((() => xV(35189))).then((eV => {
```

#### 761. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7123` → after: `L6876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6876) · [Before (L7123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7123)

```diff
-                   "screenshot" === rM && null === jM ? await (0, WS.h)(MM, OM, SM) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
+                   "screenshot" === eV && null === UV ? await (0, GY.e)(VV, JV, YV) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
```

#### 762. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7126` → after: `L6879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6879) · [Before (L7126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7126)

```diff
-                 capturePhoto: (rM, iM, OM) => (0, WS.d)(MM, rM, iM, OM)
+                 capturePhoto: (eV, xV, JV) => (0, GY.c)(VV, eV, xV, JV)
```

#### 763. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7132` → after: `L6885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6885) · [Before (L7132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7132)

```diff
-                 lL: rM,
+                 zZ: eV,
```

#### 764. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7134` → after: `L6887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6887) · [Before (L7134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7134)

```diff
-                   (0, ci.z)(cr.tb.Resize, 0, MM / iM, rM / iM, (0, ci.l)(iM))
+                   (0, Ix.x)(Oe.Gb.Resize, 0, VV / xV, eV / xV, (0, Ix.k)(xV))
```

#### 765. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7137-L7138` → after: `L6890-L6891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6890-L6891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6890-L6891) · [Before (L7137-L7138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7137-L7138)

```diff
-                   const rM = (0, Ar.p)(MM);
-                   null !== rM && (0, ci.z)(cr.tb.Resize, 0, rM.cssWidth, rM.cssHeight, (0, ci.l)(rM.renderScale))
+                   const eV = (0, le.j)(VV);
+                   null !== eV && (0, Ix.x)(Oe.Gb.Resize, 0, eV.cssWidth, eV.cssHeight, (0, Ix.k)(eV.renderScale))
```

#### 766. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7146` → after: `L6899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6899) · [Before (L7146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7146)

```diff
-             console.warn(`${Kj} the developer tools didn't load: no captures this session`, MM)
+             console.warn(`${KU} the developer tools didn't load: no captures this session`, VV)
```

#### 767. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7148` → after: `L6901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6901) · [Before (L7148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7148)

```diff
-           const rM = "webgpu" === HM && null !== (Sr = null === mM || void 0 === mM || null === (jr = mM.adapter) || void 0 === jr ? void 0 : jr.vendor) && void 0 !== Sr ? Sr : null;
+           const eV = "webgpu" === rV && null !== (Ye = null === vV || void 0 === vV || null === (Ue = vV.adapter) || void 0 === Ue ? void 0 : Ue.vendor) && void 0 !== Ye ? Ye : null;
```

#### 768. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7152` → after: `L6905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6905) · [Before (L7152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7152)

```diff
-             fallbackReason: null !== (ar = null === mM || void 0 === mM ? void 0 : mM.reason) && void 0 !== ar ? ar : null,
+             fallbackReason: null !== (ye = null === vV || void 0 === vV ? void 0 : vV.reason) && void 0 !== ye ? ye : null,
```

#### 769. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7156` → after: `L6909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6909) · [Before (L7156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7156)

```diff
-             (0, EO.t)(HM, yM, rM)
+             (0, BJ.o)(rV, BV, eV)
```

#### 770. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7158` → after: `L6911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6911) · [Before (L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7158)

```diff
-             (0, EO.v)(), console.error(`${Kj} the quality steps didn't start`, SM)
+             (0, BJ.s)(), console.error(`${KU} the quality steps didn't start`, YV)
```

#### 771. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7165-L7167` → after: `L6918-L6920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6918-L6920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6918-L6920) · [Before (L7165-L7167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7165-L7167)

```diff
-         nr && console.warn(`${Kj} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
-         const Qr = (0, VM.g)(mM, (0, Dr.k)());
-         if ((0, rj.p)("webgpuloss")) {
+         Qe && console.warn(`${KU} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
+         const ne = (0, dV.f)(vV, (0, De.l)());
+         if ((0, OY.o)("webgpuloss")) {
```

#### 772. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7171-L7172` → after: `L6924-L6925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6924-L6925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6924-L6925) · [Before (L7171-L7172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7171-L7172)

```diff
-             reason: null !== (zr = null === mM || void 0 === mM ? void 0 : mM.reason) && void 0 !== zr ? zr : null,
-             source: null !== (Lr = null === mM || void 0 === mM ? void 0 : mM.source) && void 0 !== Lr ? Lr : null,
+             reason: null !== (we = null === vV || void 0 === vV ? void 0 : vV.reason) && void 0 !== we ? we : null,
+             source: null !== (Ze = null === vV || void 0 === vV ? void 0 : vV.source) && void 0 !== Ze ? Ze : null,
```

#### 773. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7176` → after: `L6929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6929) · [Before (L7176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7176)

```diff
-           (0, ij.d)((rM => {
+           (0, VU.b)((eV => {
```

#### 774. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7181-L7182` → after: `L6934-L6935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6934-L6935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6934-L6935) · [Before (L7181-L7182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7181-L7182)

```diff
-         if (OP = (0, VM.k)(mr ? uM : null, mr && null !== (PM = null === (QM = Ga) || void 0 === QM ? void 0 : QM.pagePreviews().nh) && void 0 !== PM ? PM : null, Qr, IQ), kn) return null;
-         if (YM.reserveAtJoin((0, hS.p)(null !== DM && void 0 !== DM ? DM : Wi.f)), uM.isStopped) return null;
+         if (Vp = (0, dV.g)(ve ? zV : null, ve && null !== (pV = null === (nV = jy) || void 0 === nV ? void 0 : nV.pagePreviews().Xk) && void 0 !== pV ? pV : null, ne, Kn), WQ) return null;
+         if (cV.reserveAtJoin((0, vY.n)(null !== DV && void 0 !== DV ? DV : Gx.h)), zV.isStopped) return null;
```

#### 775. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7192` → after: `L6945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6945) · [Before (L7192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7192)

```diff
-             if (uM.writePendingInput(), (0, pM.g)(MM, mz), iz(!1, MM), null !== mn) try {
+             if (zV.writePendingInput(), (0, WV.d)(VV, ww), Vw(!1, VV), null !== nQ) try {
```

#### 776. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7198` → after: `L6951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6951) · [Before (L7198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7198)

```diff
-           } else Lz(uM, pn, "budget") && ((0, Zr.l)(uM.lastFrameKind) && lz() && (0, pM.g)(MM, mz), iz(pn && wn, MM), tn.frame(uM.lastFrameKind, pn && lz(), MM), gn.frame(uM.lastFrameKind, pn && lz()), (0, Zr.d)(uM.lastFrameKind) && Dr.B.drew(), gz(uM), YM.afterFrame(), requestAn … [truncated]
+           } else nw(zV, XQ, "budget") && ((0, Ce.e)(zV.lastFrameKind) && Ew() && (0, WV.d)(VV, ww), Vw(XQ && FQ, VV), TQ.frame(zV.lastFrameKind, XQ && Ew(), VV), PQ.frame(zV.lastFrameKind, XQ && Ew()), (0, Ce.b)(zV.lastFrameKind) && De.E.drew(), Nw(zV), cV.afterFrame(), requestAn … [truncated]
```

#### 777. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7202` → after: `L6955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6955) · [Before (L7202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7202)

```diff
-           if (MM.has("inputLog") && (0, uO.f)((MM => {
+           if (VV.has("inputLog") && (0, XJ.e)((VV => {
```

#### 778. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7208` → after: `L6961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6961) · [Before (L7208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7208)

```diff
-               console.info(`${pO} input ${rM} ${iM?"down":"up"} press ${OM} at ${performance.now().toFixed(1)}`)
+               console.info(`${zJ} input ${eV} ${xV?"down":"up"} press ${JV} at ${performance.now().toFixed(1)}`)
```

#### 779. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7231` → after: `L6984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6984) · [Before (L7231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7231)

```diff
-         (OM(ua), sa(null !== MM), null !== MM && (EM = performance.now()), pa(MM), null === MM) ? null === (rM = Ga) || void 0 === rM || rM.pagePreviews().endSession(null === (0, Jr.t)()): aP("booted")
+         (JV(Ny), Gy(null !== VV), null !== VV && (qV = performance.now()), My(VV), null === VV) ? null === (eV = jy) || void 0 === eV || eV.pagePreviews().endSession(null === (0, be.r)()): Jp("booted")
```

#### 780. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7249` → after: `L7002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7002) · [Before (L7249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7249)

```diff
-         console.warn(`${Kj} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, MM)
+         console.warn(`${KU} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, VV)
```

#### 781. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7254` → after: `L7007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7007) · [Before (L7254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7254)

```diff
-         this.deps = MM, this.latest = 0, this.sQ = null
+         this.deps = VV, this.latest = 0, this.hn = null
```

#### 782. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7264` → after: `L7017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7017) · [Before (L7264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7264)

```diff
-         if ((null === (OM = this.sQ) || void 0 === OM ? void 0 : OM.module) === MM && (0, ni.Td)(this.sQ.files, rM)) return !1;
+         if ((null === (JV = this.hn) || void 0 === JV ? void 0 : JV.module) === VV && (0, Qx.Xd)(this.hn.files, eV)) return !1;
```

#### 783. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7274` → after: `L7027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7027) · [Before (L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7274)

```diff
-           return this.sQ = {
+           return this.hn = {
```

#### 784. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7280` → after: `L7033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7033) · [Before (L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7280)

```diff
-                 ("error" === MM[rM] ? console.error : console.warn)(`Animation for the texture pack: ${MM[rM+1]}: ${MM[rM+2]}`)
+                 ("error" === VV[eV] ? console.error : console.warn)(`Animation for the texture pack: ${VV[eV+1]}: ${VV[eV+2]}`)
```

#### 785. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7287-L7288` → after: `L7040-L7041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7040-L7041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7040-L7041) · [Before (L7287-L7288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7287-L7288)

```diff
-           const OM = (null !== (aM = this.deps.retryAfterMs) && void 0 !== aM ? aM : zi)[iM];
-           return void 0 === OM || PM instanceof Li || (0, Qi.m)(MM) || setTimeout((() => {
+           const JV = (null !== (yV = this.deps.retryAfterMs) && void 0 !== yV ? yV : wx)[xV];
+           return void 0 === JV || pV instanceof Zx || (0, nx.j)(VV) || setTimeout((() => {
```

#### 786. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7295` → after: `L7048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7048) · [Before (L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7295)

```diff
-           return MM.aOM(rM)
+           return VV.PYV(eV)
```

#### 787. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7297` → after: `L7050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7050) · [Before (L7297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7297)

```diff
-           throw (0, Qi.q)(MM, iM), iM
+           throw (0, nx.n)(VV, xV), xV
```

#### 788. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7304-L7305` → after: `L7057-L7058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7057-L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7057-L7058) · [Before (L7304-L7305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7304-L7305)

```diff
-         const rM = this.sQ;
-         if (this.sQ = null, (null === rM || void 0 === rM ? void 0 : rM.module) === MM && !(0, Qi.m)(MM)) try {
+         const eV = this.hn;
+         if (this.hn = null, (null === eV || void 0 === eV ? void 0 : eV.module) === VV && !(0, nx.j)(VV)) try {
```

#### 789. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7310` → after: `L7063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7063) · [Before (L7310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7310)

```diff
-       compiler: Si.c,
+       compiler: Yx.e,
```

#### 790. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7326` → after: `L7079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7079) · [Before (L7326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7326)

```diff
-           } = await iM.e(300).then((() => iM(53755)));
+           } = await xV.e(300).then((() => xV(53954)));
```

#### 791. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7348-L7349` → after: `L7101-L7102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7101-L7102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7101-L7102) · [Before (L7348-L7349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7348-L7349)

```diff
-       uP = null, (0, Xi.d)();
-       const LM = (0, vi.S)("wasm", Wz);
+       Np = null, (0, mx.f)();
+       const ZV = (0, lx.bb)("wasm", Gw);
```

#### 792. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7357` → after: `L7110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7110) · [Before (L7357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7357)

```diff
-           kind: "Ti"
+           kind: "pJ"
```

#### 793. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7362` → after: `L7115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7115) · [Before (L7362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7362)

```diff
-         if (HM = performance.now(), !nM()) pz(null !== (GM = null === (CM = MM.target.session) || void 0 === CM ? void 0 : CM.gameNameWithVariation) && void 0 !== GM ? GM : null);
+         if (rV = performance.now(), !QV()) zw(null !== (FV = null === (TV = VV.target.session) || void 0 === TV ? void 0 : TV.gameNameWithVariation) && void 0 !== FV ? FV : null);
```

#### 794. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7377-L7378` → after: `L7130-L7131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7130-L7131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7130-L7131) · [Before (L7377-L7378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7377-L7378)

```diff
-             const OM = Math.max(MM, null !== (rM = yM) && void 0 !== rM ? rM : MM);
-             (0, dM.l)("ready", Math.max(0, (null !== (iM = lM) && void 0 !== iM ? iM : OM) - OM) / 1e3)
+             const JV = Math.max(VV, null !== (eV = BV) && void 0 !== eV ? eV : VV);
+             (0, EV.k)("ready", Math.max(0, (null !== (xV = jV) && void 0 !== xV ? xV : JV) - JV) / 1e3)
```

#### 795. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7380` → after: `L7133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7133) · [Before (L7380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7380)

```diff
-           if (null !== lM && null !== EM ? ((0, hM.s)("wasm_loaded", lM), (0, hM.s)("wasm_core_ready", EM)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), MM.target.session && (0, zj.c)(MM.target.session.gameNameWithVariation)) null ===  … [truncated]
+           if (null !== jV && null !== qV ? ((0, kV.s)("wasm_loaded", jV), (0, kV.s)("wasm_core_ready", qV)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), VV.target.session && (0, QU.b)(VV.target.session.gameNameWithVariation)) null ===  … [truncated]
```

#### 796. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7383` → after: `L7136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7136) · [Before (L7383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7383)

```diff
-           kind: "Ti"
+           kind: "pJ"
```

#### 797. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7398` → after: `L7151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7151) · [Before (L7398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7398)

```diff
-             mM = null !== (rM = null === (iM = MM.session) || void 0 === iM ? void 0 : iM.gameNameWithVariation) && void 0 !== rM ? rM : null;
+             vV = null !== (eV = null === (xV = VV.session) || void 0 === xV ? void 0 : xV.gameNameWithVariation) && void 0 !== eV ? eV : null;
```

#### 798. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7404` → after: `L7157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7157) · [Before (L7404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7404)

```diff
-             (0, ur.j)(LM, (0, ur.f)(SM))
+             (0, ze.j)(ZV, (0, ze.g)(YV))
```

#### 799. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7415` → after: `L7168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7168) · [Before (L7415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7415)

```diff
-               if ((0, rj.p)("webgpuloss")) {
+               if ((0, OY.o)("webgpuloss")) {
```

#### 800. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7418` → after: `L7171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7171) · [Before (L7418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7418)

```diff
-                 (0, ij.d)((MM => MM.noteWasmJoin(iM, rM, OM)))
+                 (0, VU.b)((VV => VV.noteWasmJoin(xV, eV, JV)))
```

#### 801. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7424` → after: `L7177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7177) · [Before (L7424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7424)

```diff
-             }] = await Tn(Promise.all([(0, WM.h)(rM), qn(MM), null === PM || void 0 === PM ? void 0 : PM(), Yn()]), LM.signal), OM = MM.session, SM = OM ? {
+             }] = await KQ(Promise.all([(0, RV.n)(eV), mQ(VV), null === pV || void 0 === pV ? void 0 : pV(), DQ()]), ZV.signal), JV = VV.session, YV = JV ? {
```

#### 802. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7440-L7441` → after: `L7193-L7194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7193-L7194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7193-L7194) · [Before (L7440-L7441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7440-L7441)

```diff
-                 if (!(MM instanceof xM.d)) return MM;
-                 if ("roomError" === MM.stage && null !== TP) return Kn(new xM.d(MM.message, MM.stage, MM.code, TP), MM);
+                 if (!(VV instanceof LV.c)) return VV;
+                 if ("roomError" === VV.stage && null !== sp) return fQ(new LV.c(VV.message, VV.stage, VV.code, sp), VV);
```

#### 803. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7443` → after: `L7196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7196) · [Before (L7443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7443)

```diff
-                 return void 0 === rM ? MM : Kn(new xM.d(MM.message, MM.stage, rM.code, null, MM.socketOpened), MM)
+                 return void 0 === eV ? VV : fQ(new LV.c(VV.message, VV.stage, eV.code, null, VV.socketOpened), VV)
```

#### 804. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7455-L7457` → after: `L7208-L7210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7208-L7210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7208-L7210) · [Before (L7455-L7457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7455-L7457)

```diff
-                 game: null !== (rM = null === OM || void 0 === OM ? void 0 : OM.gameNameWithVariation) && void 0 !== rM ? rM : MM.roomName,
-                 lobby: String(null !== SM && void 0 !== SM ? SM : null),
-                 postCookies: null !== (iM = MM.postCookies) && void 0 !== iM ? iM : null
+                 game: null !== (eV = null === JV || void 0 === JV ? void 0 : JV.gameNameWithVariation) && void 0 !== eV ? eV : VV.roomName,
+                 lobby: String(null !== YV && void 0 !== YV ? YV : null),
+                 postCookies: null !== (xV = VV.postCookies) && void 0 !== xV ? xV : null
```

#### 805. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7465` → after: `L7218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7218) · [Before (L7465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7465)

```diff
-                 game: null !== (dM = null === (yM = MM.session) || void 0 === yM ? void 0 : yM.gameNameWithVariation) && void 0 !== dM ? dM : "",
+                 game: null !== (EV = null === (BV = VV.session) || void 0 === BV ? void 0 : BV.gameNameWithVariation) && void 0 !== EV ? EV : "",
```

#### 806. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7467` → after: `L7220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7220) · [Before (L7467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7467)

```diff
-                 rejoinedAt: nM ? mM : null,
+                 rejoinedAt: QV ? vV : null,
```

#### 807. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7509` → after: `L7262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7262) · [Before (L7509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7509)

```diff
-                           console.warn(`${Kj} the held seat of a game left while it reconnected couldn't be released`, SM)
+                           console.warn(`${KU} the held seat of a game left while it reconnected couldn't be released`, YV)
```

#### 808. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7514` → after: `L7267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7267) · [Before (L7514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7514)

```diff
-                     OW: MM => {
+                     fW: VV => {
```

#### 809. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7530-L7531` → after: `L7283-L7284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7283-L7284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7283-L7284) · [Before (L7530-L7531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7530-L7531)

```diff
-                         console.warn(`${Kj} gave up reconnecting (${iM.reason}, ${iM.attempts} attempts)`, iM.lastError), (0, oi.reportReconnectGaveUp)(iM, ua);
-                         const jM = null !== (OM = null === (SM = DP) || void 0 === SM ? void 0 : SM.rejoin) && void 0 !== OM ? OM : null;
+                         console.warn(`${KU} gave up reconnecting (${xV.reason}, ${xV.attempts} attempts)`, xV.lastError), (0, ix.reportReconnectGaveUp)(xV, Ny);
+                         const UV = null !== (JV = null === (YV = Wp) || void 0 === YV ? void 0 : YV.rejoin) && void 0 !== JV ? JV : null;
```

#### 810. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7551-L7552` → after: `L7304-L7305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7304-L7305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7304-L7305) · [Before (L7551-L7552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7551-L7552)

```diff
-                 wP === QM && (0, hM.e)()
-               }), 0), Fn(), console.info(`${Kj} joined ${MM.roomName} as ${QM.seat.sessionId} at ${Math.round(performance.now())} ms`);
+                 Tp === nV && (0, kV.k)()
+               }), 0), cQ(), console.info(`${KU} joined ${VV.roomName} as ${nV.seat.sessionId} at ${Math.round(performance.now())} ms`);
```

#### 811. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7573` → after: `L7326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7326) · [Before (L7573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7573)

```diff
-           kind: "Ti"
+           kind: "pJ"
```

#### 812. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7579` → after: `L7332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7332) · [Before (L7579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7579)

```diff
-             console.warn(`${Kj} the cached traffic code could not be dropped`, MM)
+             console.warn(`${KU} the cached traffic code could not be dropped`, VV)
```

#### 813. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7588` → after: `L7341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7341) · [Before (L7588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7588)

```diff
-         if (tM instanceof xM.d && tM.code === OM.d.wasmClientNotAllowed.code && Rn) return xQ("this server refused the wasm client to this account", "refused"), {
+         if (XV instanceof LV.c && XV.code === JV.b.wasmClientNotAllowed.code && NQ) return cn("this server refused the wasm client to this account", "refused"), {
```

#### 814. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7593` → after: `L7346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7346) · [Before (L7593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7593)

```diff
-         const MM = tM instanceof xM.d && tM.code === OM.d.outdatedVersion.code,
+         const VV = XV instanceof LV.c && XV.code === JV.b.outdatedVersion.code,
```

#### 815. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7622` → after: `L7375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7375) · [Before (L7622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7622)

```diff
-       return MM.session ? (0, WM.m)(ga, MM.session.gameNameWithVariation) : Promise.resolve()
+       return VV.session ? (0, RV.t)(Ay, VV.session.gameNameWithVariation) : Promise.resolve()
```

#### 816. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7626` → after: `L7379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7379) · [Before (L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7626)

```diff
-       return (0, ur.p)(rM), new Promise(((iM, OM) => {
+       return (0, ze.q)(eV), new Promise(((xV, JV) => {
```

#### 817. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7628` → after: `L7381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7381) · [Before (L7628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7628)

```diff
-           OM((0, ur.f)(rM))
+           JV((0, ze.g)(eV))
```

#### 818. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7649` → after: `L7402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7402) · [Before (L7649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7649)

```diff
-       }(), null === Za || Za.left) || (Za.left = !0, null === (OM = (0, WM.e)()) || void 0 === OM || OM.socketLeft(), (0, mM.p)({
+       }(), null === gy || gy.left) || (gy.left = !0, null === (JV = (0, RV.k)()) || void 0 === JV || JV.socketLeft(), (0, vV.q)({
```

#### 819. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7654` → after: `L7407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7407) · [Before (L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7654)

```diff
-       null !== MM && tS.e.setGame(MM.game), MQ(null, null !== (iM = null === MM || void 0 === MM ? void 0 : MM.controller) && void 0 !== iM ? iM : null), null === SM || void 0 === SM || SM.leave(), iQ(0), (0, br.e)()
+       null !== VV && AY.e.setGame(VV.game), sQ(null, null !== (xV = null === VV || void 0 === VV ? void 0 : VV.controller) && void 0 !== xV ? xV : null), null === YV || void 0 === YV || YV.leave(), IQ(0), (0, Ae.f)()
```

#### 820. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7667` → after: `L7420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7420) · [Before (L7667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7667)

```diff
-       return null !== Ja && !kn && null !== rM && !rM.isStopped && (!!Ja(xM.j, 0, (0, xM.z)(MM)) && (lP = !0, 0 === MM || JP || Lz(rM, !1, "all"), !0))
+       return null !== vy && !WQ && null !== eV && !eV.isStopped && (!!vy(LV.h, 0, (0, LV.x)(VV)) && (bp = !0, 0 === VV || vp || nw(eV, !1, "all"), !0))
```

#### 821. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7672-L7673` → after: `L7425-L7426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7425-L7426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7425-L7426) · [Before (L7672-L7673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7672-L7673)

```diff
-       arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, vi.c)();
-       const iM = null !== (MM = null === (rM = DP) || void 0 === rM ? void 0 : rM.overflow) && void 0 !== MM ? MM : null;
+       arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, lx.f)();
+       const xV = null !== (VV = null === (eV = Wp) || void 0 === eV ? void 0 : eV.overflow) && void 0 !== VV ? VV : null;
```

#### 822. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7682` → after: `L7435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7435) · [Before (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7682)

```diff
-       console.warn(`${Kj} the event buffer refused records in ${rM} frames (categories ${MM})`), kn || (null !== DP ? aQ(DP, MM, rM) : null !== gP && function(MM, rM, iM) {
+       console.warn(`${KU} the event buffer refused records in ${eV} frames (categories ${VV})`), WQ || (null !== Wp ? en(Wp, VV, eV) : null !== Ap && function(VV, eV, xV) {
```

#### 823. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7685-L7686` → after: `L7438-L7439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7438-L7439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7438-L7439) · [Before (L7685-L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7685-L7686)

```diff
-           return null === MM ? "drop" : MM.activated ? "keep" : 0 !== (rM & Mi.u.NetSession) ? "fail" : "drop"
-         }((null === (OM = BP) || void 0 === OM ? void 0 : OM.join) === MM ? BP : null, rM);
+           return null === VV ? "drop" : VV.activated ? "keep" : 0 !== (eV & Vx.E.NetSession) ? "fail" : "drop"
+         }((null === (JV = Lp) || void 0 === JV ? void 0 : JV.join) === VV ? Lp : null, eV);
```

#### 824. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7703` → after: `L7456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7456) · [Before (L7703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7703)

```diff
-         if (0 === (MM & Mi.u.NetSession)) return "none";
+         if (0 === (VV & Vx.E.NetSession)) return "none";
```

#### 825. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7730` → after: `L7483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7483) · [Before (L7730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7730)

```diff
-         "landingPage" === rM ? (null === iM || void 0 === iM || iM.stopWorkers(), null === OM || void 0 === OM || OM.stopWorker(), null === SM || void 0 === SM || SM.stopWorkers()) : ((0, Mr.i)(rM) || "inGame" === rM) && (null === iM || void 0 === iM || iM.restartWorkers(), null  … [truncated]
+         "landingPage" === eV ? (null === xV || void 0 === xV || xV.stopWorkers(), null === JV || void 0 === JV || JV.stopWorker(), null === YV || void 0 === YV || YV.stopWorkers()) : ((0, Ve.e)(eV) || "inGame" === eV) && (null === xV || void 0 === xV || xV.restartWorkers(), null  … [truncated]
```

#### 826. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7735` → after: `L7488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7488) · [Before (L7735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7735)

```diff
-       }, Mr.d.get("gameState"))
+       }, Ve.b.get("gameState"))
```

#### 827. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7749` → after: `L7502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7502) · [Before (L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7749)

```diff
-         OM = null !== (rM = MM.joinOptions.lobbyName) && void 0 !== rM ? rM : null;
+         JV = null !== (eV = VV.joinOptions.lobbyName) && void 0 !== eV ? eV : null;
```

#### 828. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7756` → after: `L7509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7509) · [Before (L7756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7756)

```diff
-       return iM.e(300).then((() => iM(53755))).then((MM => {
+       return xV.e(300).then((() => xV(53954))).then((VV => {
```

#### 829. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7762` → after: `L7515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7515) · [Before (L7762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7762)

```diff
-         console.warn(`${Kj} the cached traffic code could not be dropped`, MM)
+         console.warn(`${KU} the cached traffic code could not be dropped`, VV)
```

#### 830. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7780-L7781` → after: `L7533-L7534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7533-L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7533-L7534) · [Before (L7780-L7781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7780-L7781)

```diff
-       const zM = (0, AM.m)(rM, (0, cO.g)(MM));
-       if (console.info(`${Kj} the game's connection closed with code ${rM} (${null!==(jM=zM.name)&&void 0!==jM?jM:"unrecognised"})`), rM === OM.d.gameOrPluginKick.code || aM || (0, oi.reportDisconnect)(zM, ua, {
+       const wV = (0, lV.l)(eV, (0, IJ.f)(VV));
+       if (console.info(`${KU} the game's connection closed with code ${eV} (${null!==(UV=wV.name)&&void 0!==UV?UV:"unrecognised"})`), eV === JV.b.gameOrPluginKick.code || yV || (0, ix.reportDisconnect)(wV, Ny, {
```

#### 831. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7787` → after: `L7540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7540) · [Before (L7787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7787)

```diff
-           iM = new Error(`the game's connection closed with code ${rM}`),
+           xV = new Error(`the game's connection closed with code ${eV}`),
```

#### 832. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7799` → after: `L7552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7552) · [Before (L7799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7799)

```diff
-       const LM = zM.canReconnect ? PM : null,
+       const ZV = wV.canReconnect ? pV : null,
```

#### 833. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7819` → after: `L7572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7572) · [Before (L7819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7819)

```diff
-         const MM = setTimeout(aM, AM.e);
+         const VV = setTimeout(yV, lV.b);
```

#### 834. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7838` → after: `L7591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7591) · [Before (L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7838)

```diff
-           console.error(`${Kj} an unwanted-leave listener threw`, nM)
+           console.error(`${KU} an unwanted-leave listener threw`, QV)
```

#### 835. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7840` → after: `L7593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7593) · [Before (L7840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7840)

```diff
-           rM && (null !== aM ? aM() : MM.requiresRefresh && (0, cM.k)())
+           eV && (null !== yV ? yV() : VV.requiresRefresh && (0, OV.l)())
```

#### 836. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7874` → after: `L7627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7627) · [Before (L7874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7874)

```diff
-           aux: cr.$b.AdEnd,
+           aux: Oe.jc.AdEnd,
```

#### 837. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7903` → after: `L7656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7656) · [Before (L7903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7903)

```diff
-       if (MM.readyState === WebSocket.CLOSING || MM.readyState === WebSocket.CLOSED) return console.warn(`${Kj} a closing or closed socket can't be attached`), null;
+       if (VV.readyState === WebSocket.CLOSING || VV.readyState === WebSocket.CLOSED) return console.warn(`${KU} a closing or closed socket can't be attached`), null;
```

#### 838. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7905-L7907` → after: `L7658-L7660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7658-L7660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7658-L7660) · [Before (L7905-L7907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7905-L7907)

```diff
-       if (!SM || SM.isStopped) return console.warn(`${Kj} no core is running to attach a socket to`), MM.close(), null;
-       if (null === (0, WM.e)()) return console.warn(`${Kj} the game has not started to attach a socket to`), MM.close(), null;
-       if (nP > cr.y) return console.warn(`${Kj} this core has attached all the sockets it can; reload to play on`), MM.close(), null;
+       if (!YV || YV.isStopped) return console.warn(`${KU} no core is running to attach a socket to`), VV.close(), null;
+       if (null === (0, RV.k)()) return console.warn(`${KU} the game has not started to attach a socket to`), VV.close(), null;
+       if (Up > Oe.D) return console.warn(`${KU} this core has attached all the sockets it can; reload to play on`), VV.close(), null;
```

#### 839. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7911-L7912` → after: `L7664-L7665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7664-L7665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7664-L7665) · [Before (L7911-L7912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7911-L7912)

```diff
-       if (!ZQ(SM, "open", jM, OM ? cr.Xb.Resume : 0)) return MM.close(), null;
-       OM || er.d.reset(), BP = null === gP ? null : {
+       if (!Wn(YV, "open", UV, JV ? Oe.gc.Resume : 0)) return VV.close(), null;
+       JV || Pe.c.reset(), Lp = null === Ap ? null : {
```

#### 840. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7917` → after: `L7670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7670) · [Before (L7917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7917)

```diff
-       const aM = new ui.b((() => {
+       const yV = new Mx.c((() => {
```

#### 841. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7939` → after: `L7692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7692) · [Before (L7939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7939)

```diff
-             aM.heard(), PM.token = null !== (rM = (0, Ri.c)(iM)) && void 0 !== rM ? rM : PM.token,
+             yV.heard(), pV.token = null !== (eV = (0, zx.e)(xV)) && void 0 !== eV ? eV : pV.token,
```

#### 842. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7942` → after: `L7695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7695) · [Before (L7942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7942)

```diff
-                   MM.rings.net.writeFrame(rM, iM) || MM.crash(di.x, `a socket frame of ${iM.byteLength} bytes did not fit the net-in ring`)
+                   VV.rings.net.writeFrame(eV, xV) || VV.crash(bx.s, `a socket frame of ${xV.byteLength} bytes did not fit the net-in ring`)
```

#### 843. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7961` → after: `L7714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7714) · [Before (L7961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7961)

```diff
-       return MM.addEventListener("message", nM), MM.addEventListener("open", QM), MM.addEventListener("close", zM), Za = PM, null === (rM = (0, WM.e)()) || void 0 === rM || rM.socketAttached(jM), (0, mM.p)({
+       return VV.addEventListener("message", QV), VV.addEventListener("open", nV), VV.addEventListener("close", wV), gy = pV, null === (eV = (0, RV.k)()) || void 0 === eV || eV.socketAttached(UV), (0, vV.q)({
```

#### 844. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7985-L7986` → after: `L7738-L7739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7738-L7739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7738-L7739) · [Before (L7985-L7986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7985-L7986)

```diff
-         token: `${OM.roomId}:${rM.token}`
-       }), ZQ(MM, "close", rM.conn), null === (iM = (0, WM.e)()) || void 0 === iM || iM.socketDetached(rM.conn), !0
+         token: `${JV.roomId}:${eV.token}`
+       }), Wn(VV, "close", eV.conn), null === (xV = (0, RV.k)()) || void 0 === xV || xV.socketDetached(eV.conn), !0
```

#### 845. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7995` → after: `L7748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7748) · [Before (L7995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L7995)

```diff
-         sQ: aM,
+         hn: yV,
```

#### 846. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8000-L8001` → after: `L7753-L7754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7753-L7754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7753-L7754) · [Before (L8000-L8001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8000-L8001)

```diff
-       if (!ZQ(MM, "close", rM.conn, cr.B.Held)) return !0;
-       console.warn(`${Kj} the game's connection ${SM?"went silent":`dropped with code ${iM}`}, holding it`);
+       if (!Wn(VV, "close", eV.conn, Oe.G.Held)) return !0;
+       console.warn(`${KU} the game's connection ${YV?"went silent":`dropped with code ${xV}`}, holding it`);
```

#### 847. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8007` → after: `L7760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7760) · [Before (L8007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8007)

```diff
-       return (0, oi.reportDisconnect)((0, AM.m)(iM), ua, zM, SM ? "silent" : void 0), aM.heldConn = rM.conn, aM.dropCode = iM, aM.pendingHold = {
+       return (0, ix.reportDisconnect)((0, lV.l)(xV), Ny, wV, YV ? "silent" : void 0), yV.heldConn = eV.conn, yV.dropCode = xV, yV.pendingHold = {
```

#### 848. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8009` → after: `L7762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7762) · [Before (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8009)

```diff
-         token: `${aM.roomId}:${PM}`
+         token: `${yV.roomId}:${pV}`
```

#### 849. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8017-L8018` → after: `L7770-L7771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7770-L7771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7770-L7771) · [Before (L8017-L8018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8017-L8018)

```diff
-       return null === iM || null === SM || kn || MM.left || SM.conn !== MM.conn || null === jM || "" === jM ? null : (0, OM.g)(rM) && iM.resume.canHoldSeat() ? {
-         sQ: iM,
+       return null === xV || null === YV || WQ || VV.left || YV.conn !== VV.conn || null === UV || "" === UV ? null : (0, JV.h)(eV) && xV.resume.canHoldSeat() ? {
+         hn: xV,
```

#### 850. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8027` → after: `L7780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7780) · [Before (L8027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8027)

```diff
-       null === (iM = (0, WM.e)()) || void 0 === iM || iM.closeGame(MM), (0, fS.b)().close(MM), rM || (0, mM.p)({
+       null === (xV = (0, RV.k)()) || void 0 === xV || xV.closeGame(VV), (0, CY.b)().close(VV), eV || (0, vV.q)({
```

#### 851. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8035-L8036` → after: `L7788-L7789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7788-L7789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7788-L7789) · [Before (L8035-L8036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8035-L8036)

```diff
-       const rM = (0, WM.e)();
-       kn || null === rM || rM.OW(MM) ? xP = null : performance.now() - EP.pause >= La && (EP.pause = performance.now(), console.warn(`${Kj} the cmd ring had no room for SetPaused(${MM}): written before the next frame`))
+       const eV = (0, RV.k)();
+       WQ || null === eV || eV.fW(VV) ? cp = null : performance.now() - Ep.pause >= Qy && (Ep.pause = performance.now(), console.warn(`${KU} the cmd ring had no room for SetPaused(${VV}): written before the next frame`))
```

#### 852. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8049` → after: `L7802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7802) · [Before (L8049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8049)

```diff
-       MM.heldConn = 0, MM.pendingHold = null, kP === MM && (kP = null), "left" === rM ? MM.resume.leave() : MM.resume.dispose(), 0 === AP || (null === (iM = Za) || void 0 === iM ? void 0 : iM.conn) !== AP || "left" === rM && (null === (OM = wP) || void 0 === OM ? void 0 : OM.conn … [truncated]
+       VV.heldConn = 0, VV.pendingHold = null, Rp === VV && (Rp = null), "left" === eV ? VV.resume.leave() : VV.resume.dispose(), 0 === op || (null === (xV = gy) || void 0 === xV ? void 0 : xV.conn) !== op || "left" === eV && (null === (JV = Tp) || void 0 === JV ? void 0 : JV.conn … [truncated]
```

#### 853. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8078` → after: `L7831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7831) · [Before (L8078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8078)

```diff
-       (null === iM || void 0 === iM ? void 0 : iM.conn) === MM && (iM.left = !0, null === (rM = (0, WM.e)()) || void 0 === rM || rM.socketLeft(), (0, mM.p)({
+       (null === xV || void 0 === xV ? void 0 : xV.conn) === VV && (xV.left = !0, null === (eV = (0, RV.k)()) || void 0 === eV || eV.socketLeft(), (0, vV.q)({
```

#### 854. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8082` → after: `L7835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7835) · [Before (L8082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8082)

```diff
-       }), xM.h) : CQ())
+       }), LV.e) : Bn())
```

#### 855. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8092` → after: `L7845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7845) · [Before (L8092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8092)

```diff
-         SM = "open" === rM ? jM.writeOpen(iM, OM) : jM.writeClose(iM, OM), SM || MM.crash(di.x, `a socket ${rM} did not fit the net-in ring`)
+         YV = "open" === eV ? UV.writeOpen(xV, JV) : UV.writeClose(xV, JV), YV || VV.crash(bx.s, `a socket ${eV} did not fit the net-in ring`)
```

#### 856. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8098` → after: `L7851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7851) · [Before (L8098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8098)

```diff
-       if (AQ()) return (0, oi.reportUnsupportedFallback)(MM, rM, iM, OM), void xQ(`the wasm client can't run here (${iM}; ${rM})`, rM);
+       if (an()) return (0, ix.reportUnsupportedFallback)(VV, eV, xV, JV), void cn(`the wasm client can't run here (${xV}; ${eV})`, eV);
```

#### 857. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8108` → after: `L7861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7861) · [Before (L8108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8108)

```diff
-         detail: `No WebGPU or WebGL2, and WebGL1 lacks ${MM.missing.join(", ")}`,
+         detail: `No WebGPU or WebGL2, and WebGL1 lacks ${VV.missing.join(", ")}`,
```

#### 858. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8117` → after: `L7870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7870) · [Before (L8117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8117)

```diff
-       console.warn(`${Kj} ${MM}: reloading once more onto the wasm client`), (0, ZS.s)(), (0, oi.flushCrashReports)(cM.c).then(cM.k, cM.k)
+       console.warn(`${KU} ${VV}: reloading once more onto the wasm client`), (0, DY.r)(), (0, ix.flushCrashReports)(OV.e).then(OV.l, OV.l)
```

#### 859. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8121` → after: `L7874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7874) · [Before (L8121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8121)

```diff
-       return Rn && "wasm" !== (0, Gr.h)(window.location.search)
+       return NQ && "wasm" !== (0, Fe.e)(window.location.search)
```

#### 860. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8125` → after: `L7878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7878) · [Before (L8125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8125)

```diff
-       console.warn(`${Kj} ${MM}: reloading on the JS client`), null !== rM && (0, Gr.F)(rM), (0, Gr.E)(null === rM ? "reloadOntoJs" : "decline");
+       console.warn(`${KU} ${VV}: reloading on the JS client`), null !== eV && (0, Fe.G)(eV), (0, Fe.D)(null === eV ? "reloadOntoJs" : "decline");
```

#### 861. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8127` → after: `L7880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7880) · [Before (L8127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8127)

```diff
-         (0, cM.j)(Gr.K)
+         (0, OV.h)(Fe.L)
```

#### 862. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8129` → after: `L7882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7882) · [Before (L8129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8129)

```diff
-       (0, oi.flushCrashReports)(cM.c).then(iM, iM)
+       (0, ix.flushCrashReports)(OV.e).then(xV, xV)
```

#### 863. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8142` → after: `L7895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7895) · [Before (L8142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8142)

```diff
-       return null !== (MM = null === (rM = wa) || void 0 === rM || null === (iM = rM.textures) || void 0 === iM ? void 0 : iM.files()) && void 0 !== MM ? MM : null
+       return null !== (VV = null === (eV = Ty) || void 0 === eV || null === (xV = eV.textures) || void 0 === xV ? void 0 : xV.files()) && void 0 !== VV ? VV : null
```

#### 864. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8147` → after: `L7900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7900) · [Before (L8147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8147)

```diff
-         null !== rM && Promise.all([Promise.all([iM.e(228), iM.e(52)]).then((() => iM(53784))), (0, ZS.U)()]).then((MM => {
+         null !== eV && Promise.all([Promise.all([xV.e(228), xV.e(52)]).then((() => xV(53989))), (0, DY.R)()]).then((VV => {
```

#### 865. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8151` → after: `L7904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7904) · [Before (L8151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8151)

```diff
-           const SM = null === OM || (0, Hi.l)(OM) ? "webgl" : OM.backend;
+           const YV = null === JV || (0, rx.q)(JV) ? "webgl" : JV.backend;
```

#### 866. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8156` → after: `L7909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7909) · [Before (L8156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8156)

```diff
-           console.warn(`${Kj} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, rM), MM()
+           console.warn(`${KU} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, eV), VV()
```

#### 867. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8162` → after: `L7915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7915) · [Before (L8162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8162)

```diff
-       console.warn(`${Kj} ${MM}`, rM)
+       console.warn(`${KU} ${VV}`, eV)
```

#### 868. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8167` → after: `L7920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7920) · [Before (L8167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8167)

```diff
-         load: MM => Promise.all([iM.e(228), iM.e(66)]).then((() => iM(53791))).then((rM => {
+         load: VV => Promise.all([xV.e(228), xV.e(66)]).then((() => xV(53994))).then((eV => {
```

#### 869. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8173-L8174` → after: `L7926-L7927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7926-L7927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7926-L7927) · [Before (L8173-L8174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8173-L8174)

```diff
-         store: Yr.f,
-         aL: MM => {
+         store: ce.i,
+         EZ: VV => {
```

#### 870. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8213` → after: `L7966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7966) · [Before (L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8213)

```diff
-       }((MM => (0, Lr.m)(MM) ? KQ().request() : KQ().forJoin()), BS.d, IQ),
+       }((VV => (0, Ze.l)(VV) ? Hn().request() : Hn().forJoin()), fY.c, Kn),
```

#### 871. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8250` → after: `L8003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8003) · [Before (L8250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8250)

```diff
-             return null !== (MM = null === (rM = OP) || void 0 === rM ? void 0 : rM.reachInJoinedGame()) && void 0 !== MM ? MM : null
+             return null !== (VV = null === (eV = Vp) || void 0 === eV ? void 0 : eV.reachInJoinedGame()) && void 0 !== VV ? VV : null
```

#### 872. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8252` → after: `L8005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8005) · [Before (L8252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8252)

```diff
-           DJ: () => ca,
+           eE: () => Sy,
```

#### 873. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8257` → after: `L8010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8010) · [Before (L8257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8257)

```diff
-             return null !== (MM = null === (rM = Na) || void 0 === rM ? void 0 : rM.takeFailedMeshJobs()) && void 0 !== MM ? MM : 0
+             return null !== (VV = null === (eV = ay) || void 0 === eV ? void 0 : eV.takeFailedMeshJobs()) && void 0 !== VV ? VV : 0
```

#### 874. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8268` → after: `L8021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8021) · [Before (L8268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8268)

```diff
-         console.error(`${Kj} the frame telemetry didn't start`, jM)
+         console.error(`${KU} the frame telemetry didn't start`, UV)
```

#### 875. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8275-L8276` → after: `L8028-L8029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8028-L8029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8028-L8029) · [Before (L8275-L8276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8275-L8276)

```diff
-         const jM = Mn && null !== (iM = null === (OM = ea) || void 0 === OM || null === (SM = OM.lastHeader) || void 0 === SM ? void 0 : SM.renderPending) && void 0 !== iM ? iM : 0;
-         (0, EO.h)(rM, MM, Oz() && !(null !== NS), jM)
+         const UV = dp && null !== (xV = null === (JV = ty) || void 0 === JV || null === (YV = JV.lastHeader) || void 0 === YV ? void 0 : YV.renderPending) && void 0 !== xV ? xV : 0;
+         (0, BJ.d)(eV, VV, ew() && !(null !== oY), UV)
```

#### 876. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8278` → after: `L8031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8031) · [Before (L8278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8278)

```diff
-         (0, EO.v)(), console.error(`${Kj} the quality steps stopped`, jM)
+         (0, BJ.s)(), console.error(`${KU} the quality steps stopped`, UV)
```

#### 877. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8292` → after: `L8045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8045) · [Before (L8292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8292)

```diff
-       console.error(`${Kj} the frame telemetry threw: it stops`, MM)
+       console.error(`${KU} the frame telemetry threw: it stops`, VV)
```

#### 878. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8298` → after: `L8051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8051) · [Before (L8298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8298)

```diff
-         if (dP++, MM.Kz === cr.Hc.ERROR && null !== gP) {
+         if (rp++, VV.yZ === Oe.Uc.ERROR && null !== Ap) {
```

#### 879. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8303` → after: `L8056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8056) · [Before (L8303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8303)

```diff
-           } = (0, AM.t)((new TextDecoder).decode(MM.payload));
+           } = (0, lV.q)((new TextDecoder).decode(VV.payload));
```

#### 880. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8305` → after: `L8058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8058) · [Before (L8305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8305)

```diff
-         } else if (MM.Kz === Mi.hc.ResumeComplete) {
+         } else if (VV.yZ === Vx.mc.ResumeComplete) {
```

#### 881. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8311` → after: `L8064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8064) · [Before (L8311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8311)

```diff
-       MM.phase === cr.F.Left ? yP = MM.conn : MM.phase === cr.F.Activated && (null === (rM = BP) || void 0 === rM ? void 0 : rM.conn) === MM.conn ? BP.activated = !0 : MM.phase === cr.F.Resumed ? function(MM) {
+       VV.phase === Oe.H.Left ? kp = VV.conn : VV.phase === Oe.H.Activated && (null === (eV = Lp) || void 0 === eV ? void 0 : eV.conn) === VV.conn ? Lp.activated = !0 : VV.phase === Oe.H.Resumed ? function(VV) {
```

#### 882. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8316` → after: `L8069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8069) · [Before (L8316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8316)

```diff
-         console.info(`${Kj} the game resumed on conn ${MM}, waiting for its InitialInfo`);
+         console.info(`${KU} the game resumed on conn ${VV}, waiting for its InitialInfo`);
```

#### 883. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8321` → after: `L8074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8074) · [Before (L8321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8321)

```diff
-         }), er.d.apply({
+         }), Pe.c.apply({
```

#### 884. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8323` → after: `L8076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8076) · [Before (L8323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8323)

```diff
-           _shopVersion: mr.d
+           _shopVersion: ve.e
```

#### 885. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8325` → after: `L8078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8078) · [Before (L8325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8325)

```diff
-       }(MM.conn) : MM.phase === cr.F.Held ? function(MM) {
+       }(VV.conn) : VV.phase === Oe.H.Held ? function(VV) {
```

#### 886. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8328-L8329` → after: `L8081-L8082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8081-L8082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8081-L8082) · [Before (L8328-L8329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8328-L8329)

```diff
-           OM = null !== (rM = null === iM || void 0 === iM ? void 0 : iM.pendingHold) && void 0 !== rM ? rM : null;
-         if (null !== iM && null !== OM && OM.conn === MM) return iM.pendingHold = null, iM.heldConn = MM, AP = 0, console.warn(`${Kj} the core holds the game, reconnecting`), void iM.resume.onDropped(OM.token);
+           JV = null !== (eV = null === xV || void 0 === xV ? void 0 : xV.pendingHold) && void 0 !== eV ? eV : null;
+         if (null !== xV && null !== JV && JV.conn === VV) return xV.pendingHold = null, xV.heldConn = VV, op = 0, console.warn(`${KU} the core holds the game, reconnecting`), void xV.resume.onDropped(JV.token);
```

#### 887. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8333` → after: `L8086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8086) · [Before (L8333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8333)

```diff
-           null === rM || rM.isStopped || (console.info(`${Kj} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), ZQ(rM, "close", MM))
+           null === eV || eV.isStopped || (console.info(`${KU} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), Wn(eV, "close", VV))
```

#### 888. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8335` → after: `L8088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8088) · [Before (L8335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8335)

```diff
-       }(MM.conn) : MM.phase === cr.F.Closed && (null === (iM = kP) || void 0 === iM || null === (OM = iM.pendingHold) || void 0 === OM ? void 0 : OM.conn) === MM.conn && (kP.heldConn === MM.conn ? function(MM) {
+       }(VV.conn) : VV.phase === Oe.H.Closed && (null === (xV = Rp) || void 0 === xV || null === (JV = xV.pendingHold) || void 0 === JV ? void 0 : JV.conn) === VV.conn && (Rp.heldConn === VV.conn ? function(VV) {
```

#### 889. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8338` → after: `L8091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8091) · [Before (L8338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8338)

```diff
-         pQ(MM, "refused"), console.info(`${Kj} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
+         Nn(VV, "refused"), console.info(`${KU} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
```

#### 890. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8341-L8344` → after: `L8094-L8097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8094-L8097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8094-L8097) · [Before (L8341-L8344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8341-L8344)

```diff
-       }(kP) : kP.pendingHold = null), MM.phase !== cr.F.Held && MM.phase !== cr.F.Left && MM.phase !== cr.F.Closed || (fP.add(MM.conn), MM.conn === oP && (oP = 0));
-       const PM = Object.keys(cr.F).find((rM => cr.F[rM] === MM.phase)),
-         nM = 0 === MM.code ? "" : ` (code ${MM.code})`;
-       console.info(`${Kj} conn ${MM.conn}: ${null!==PM&&void 0!==PM?PM:MM.phase}${nM}, ${dP} raw messages so far`), (null === (SM = wP) || void 0 === SM ? void 0 : SM.conn) !== MM.conn || MM.phase !== cr.F.Left && MM.phase !== cr.F.Closed || rQ(null), pP !== MM.conn || MM.phase ! … [truncated]
+       }(Rp) : Rp.pendingHold = null), VV.phase !== Oe.H.Held && VV.phase !== Oe.H.Left && VV.phase !== Oe.H.Closed || (ip.add(VV.conn), VV.conn === Dp && (Dp = 0));
+       const pV = Object.keys(Oe.H).find((eV => Oe.H[eV] === VV.phase)),
+         QV = 0 === VV.code ? "" : ` (code ${VV.code})`;
+       console.info(`${KU} conn ${VV.conn}: ${null!==pV&&void 0!==pV?pV:VV.phase}${QV}, ${rp} raw messages so far`), (null === (YV = Tp) || void 0 === YV ? void 0 : YV.conn) !== VV.conn || VV.phase !== Oe.H.Left && VV.phase !== Oe.H.Closed || SQ(null), Mp !== VV.conn || VV.phase ! … [truncated]
```

#### 891. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8348` → after: `L8101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8101) · [Before (L8348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8348)

```diff
-         (0, ri.k)(QM, `${Kj} a connection listener threw`)
+         (0, ex.o)(nV, `${KU} a connection listener threw`)
```

#### 892. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8355` → after: `L8108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8108) · [Before (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8355)

```diff
-       (0, ZS.s)(), un.forget(), null === wP && null === gP || (0, qi.e)(), queueMicrotask((() => {
+       (0, DY.r)(), AQ.forget(), null === Tp && null === Ap || (0, ux.g)(), queueMicrotask((() => {
```

#### 893. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8359-L8360` → after: `L8112-L8113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8112-L8113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8112-L8113) · [Before (L8359-L8360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8359-L8360)

```diff
-           console.warn(`${Kj} stopping before the reload threw`, MM)
-         }(0, oi.flushCrashReports)(cM.c).then(cM.k, cM.k)
+           console.warn(`${KU} stopping before the reload threw`, VV)
+         }(0, ix.flushCrashReports)(OV.e).then(OV.l, OV.l)
```

#### 894. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8381` → after: `L8134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8134) · [Before (L8381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8381)

```diff
-         jM && "all" !== OM && !document.hidden && tz("backlog", `a shown tab's net-in is ${MM.rings.net.cursor} bytes behind: one frame reads it all`);
+         UV && "all" !== JV && !document.hidden && Aw("backlog", `a shown tab's net-in is ${VV.rings.net.cursor} bytes behind: one frame reads it all`);
```

#### 895. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8387` → after: `L8140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8140) · [Before (L8387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8387)

```diff
-           uQ(), QP = performance.now(), yP = null, lP = !1, (0, pM.K)(), null === (jM = Xa) || void 0 === jM || jM.beforeFrame(), DO(QP, MM), (0, pM.F)(QP, hz), hP = !0;
+           Pn(), yp = performance.now(), kp = null, bp = !1, (0, WV.J)(), null === (UV = fy) || void 0 === UV || UV.beforeFrame(), RJ(yp, VV), (0, WV.C)(yp, vw), Zp = !0;
```

#### 896. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8396` → after: `L8149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8149) · [Before (L8396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8396)

```diff
-           Qn.observe(null !== (aM = null === (PM = MM.lastHeader) || void 0 === PM ? void 0 : PM.chunksCancelled) && void 0 !== aM ? aM : 0);
+           yQ.observe(null !== (yV = null === (pV = VV.lastHeader) || void 0 === pV ? void 0 : pV.chunksCancelled) && void 0 !== yV ? yV : 0);
```

#### 897. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8398` → after: `L8151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8151) · [Before (L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8398)

```diff
-             mM = (0, Zr.d)(LM);
+             vV = (0, Ce.b)(ZV);
```

#### 898. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8416-L8417` → after: `L8169-L8170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8169-L8170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8169-L8170) · [Before (L8416-L8417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8416-L8417)

```diff
-               const rM = 0 !== (MM.headerWord(Mi.K.LoadSteps) & Mi.S.JoinPreload);
-               rM !== RP && (RP = rM, (0, oi.setCrashAdPreload)(rM), (0, vi.F)())
+               const eV = 0 !== (VV.headerWord(Vx.Q.LoadSteps) & Vx._.JoinPreload);
+               eV !== Xp && (Xp = eV, (0, ix.setCrashAdPreload)(eV), (0, lx.S)())
```

#### 899. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8421-L8423` → after: `L8174-L8176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8174-L8176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8174-L8176) · [Before (L8421-L8423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8421-L8423)

```diff
-               const jM = MM.headerWord(Mi.K.LoadSteps);
-               null === en || bn === wP && !en.frame(QP, 0 !== (jM & Mi.T.TerrainDrawn)) || (en = null);
-               if (0 === (jM & Mi.S.PlayerBound)) return;
+               const UV = VV.headerWord(Vx.Q.LoadSteps);
+               null === qQ || tQ === Tp && !qQ.frame(yp, 0 !== (UV & Vx.cb.TerrainDrawn)) || (qQ = null);
+               if (0 === (UV & Vx._.PlayerBound)) return;
```

#### 900. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8428-L8430` → after: `L8181-L8183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8181-L8183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8181-L8183) · [Before (L8428-L8430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8428-L8430)

```diff
-               const nM = null !== (rM = null === aM || void 0 === aM ? void 0 : aM.firstView) && void 0 !== rM ? rM : cr._.NotYet;
-               if (Mn && nM === cr._.NotYet) return;
-               if (dn && (!0 !== (null === (OM = (0, WM.e)()) || void 0 === OM ? void 0 : OM.isSessionLive) || !PM)) return;
+               const QV = null !== (eV = null === yV || void 0 === yV ? void 0 : yV.firstView) && void 0 !== eV ? eV : Oe.ib.NotYet;
+               if (dp && QV === Oe.ib.NotYet) return;
+               if (rQ && (!0 !== (null === (JV = (0, RV.k)()) || void 0 === JV ? void 0 : JV.isSessionLive) || !pV)) return;
```

#### 901. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8434` → after: `L8187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8187) · [Before (L8434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8434)

```diff
-                   wP === QM && (0, hM.h)()
+                   Tp === nV && (0, kV.l)()
```

#### 902. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8445` → after: `L8198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8198) · [Before (L8445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8445)

```diff
-               dn = !0, performance.mark(ia), (0, rj.p)("render") && Promise.all([iM.e(89), iM.e(55)]).then((() => iM(5058))).then((MM => {
+               rQ = !0, performance.mark(OU), (0, OY.o)("render") && Promise.all([xV.e(89), xV.e(55)]).then((() => xV(5166))).then((VV => {
```

#### 903. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8455` → after: `L8208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8208) · [Before (L8455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8455)

```diff
-               null !== LM && (0, hM.s)("wasm_view_links", zM, (0, hr.tb)(LM));
+               null !== ZV && (0, kV.s)("wasm_view_links", wV, (0, ke.ub)(ZV));
```

#### 904. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8459-L8461` → after: `L8212-L8214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8212-L8214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8212-L8214) · [Before (L8459-L8461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8459-L8461)

```diff
-               null !== JM && (0, hM.p)(JM);
-               if (Mn && nM !== cr._.Drawn) {
-                 const rM = nM === cr._.HeldBackstop ? "held_draws" : "long",
+               null !== bV && (0, kV.q)(bV);
+               if (dp && QV !== Oe.ib.Drawn) {
+                 const eV = QV === Oe.ib.HeldBackstop ? "held_draws" : "long",
```

#### 905. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8465` → after: `L8218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8218) · [Before (L8465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8465)

```diff
-                 if (console.warn(`${Kj} playable at ${zM} ms on the first view's ${rM} backstop, ${iM}: it wasn't drawn whole in time`), (0, hM.s)("wasm_view_backstop", zM, `${rM}:${iM}`), "long" === rM) {
+                 if (console.warn(`${KU} playable at ${wV} ms on the first view's ${eV} backstop, ${xV}: it wasn't drawn whole in time`), (0, kV.s)("wasm_view_backstop", wV, `${eV}:${xV}`), "long" === eV) {
```

#### 906. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8467-L8468` → after: `L8220-L8221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8220-L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8220-L8221) · [Before (L8467-L8468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8467-L8468)

```diff
-                   const rM = null !== (dM = null === (yM = DP) || void 0 === yM ? void 0 : yM.game) && void 0 !== dM ? dM : "";
-                   en = new Ti.b((() => {
+                   const eV = null !== (EV = null === (BV = Wp) || void 0 === BV ? void 0 : BV.game) && void 0 !== EV ? EV : "";
+                   qQ = new sx.d((() => {
```

#### 907. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8476-L8479` → after: `L8229-L8232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8229-L8232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8229-L8232) · [Before (L8476-L8479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8476-L8479)

```diff
-               } else console.info(`${Kj} playable at ${zM} ms${Mn?"":" (no renderer)"}`);
-               setTimeout(an, 0), (0, wr.h)().catch((MM => {
-                 console.error(`${Kj} item sprites didn't load, so item particles show the missing texture`, MM)
-               })), yS.c.warm()
+               } else console.info(`${KU} playable at ${wV} ms${dp?"":" (no renderer)"}`);
+               setTimeout(JQ, 0), (0, Ne.i)().catch((VV => {
+                 console.error(`${KU} item sprites didn't load, so item particles show the missing texture`, VV)
+               })), bY.e.warm()
```

#### 908. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8481` → after: `L8234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8234) · [Before (L8481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8481)

```diff
-           (0, di.P)(MM, {
+           (0, bx.N)(VV, {
```

#### 909. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8488` → after: `L8241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8241) · [Before (L8488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8488)

```diff
-               (0, uO.d)(rM)
+               (0, XJ.c)(eV)
```

#### 910. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8490-L8491` → after: `L8243-L8244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8243-L8244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8243-L8244) · [Before (L8490-L8491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8490-L8491)

```diff
-               if ((0, ri.h)(JM)) {
-                 MM.crashOn(di.l, JM);
+               if ((0, ex.j)(bV)) {
+                 VV.crashOn(bx.i, bV);
```

#### 911. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8494` → after: `L8247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8247) · [Before (L8494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8494)

```diff
-               console.error(`${pO} an input action listener threw`, JM)
+               console.error(`${zJ} an input action listener threw`, bV)
```

#### 912. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8497` → after: `L8250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8250) · [Before (L8497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8497)

```diff
-           }(MM), SM && (0, kr.c)();
+           }(VV), YV && (0, ie.d)();
```

#### 913. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8506` → after: `L8259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8259) · [Before (L8506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8506)

```diff
-       console.error(`${Kj} a frame-start listener threw`, MM)
+       console.error(`${KU} a frame-start listener threw`, VV)
```

#### 914. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8515` → after: `L8268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8268) · [Before (L8515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8515)

```diff
-       console.error(`${Kj} a before-frame listener threw`, MM)
+       console.error(`${KU} a before-frame listener threw`, VV)
```

#### 915. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8519-L8520` → after: `L8272-L8273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8272-L8273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8272-L8273) · [Before (L8519-L8520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8519-L8520)

```diff
-       const rM = (0, WM.e)(),
-         iM = (0, WM.p)(),
+       const eV = (0, RV.k)(),
+         xV = (0, RV.v)(),
```

#### 916. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8523` → after: `L8276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8276) · [Before (L8523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8523)

```diff
-         cause: (0, Ti.g)(MM.headerWord(Mi.K.LoadSteps), OM),
+         cause: (0, sx.i)(VV.headerWord(Vx.Q.LoadSteps), JV),
```

#### 917. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8538` → after: `L8291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8291) · [Before (L8538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8538)

```diff
-       if (null === Un && Ez() && (Un = performance.now()), null === wP || 0 === (MM.headerWord(Mi.K.LoadSteps) & Mi.S.PlayerBound) ? Cn = null : Cn ??= performance.now(), null === gP && null === wP) return;
+       if (null === EQ && Bw() && (EQ = performance.now()), null === Tp || 0 === (VV.headerWord(Vx.Q.LoadSteps) & Vx._.PlayerBound) ? jQ = null : jQ ??= performance.now(), null === Ap && null === Tp) return;
```

#### 918. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8541-L8542` → after: `L8294-L8295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8294-L8295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8294-L8295) · [Before (L8541-L8542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8541-L8542)

```diff
-       null !== wP ? iM = -1 : !0 === (null === (rM = BP) || void 0 === rM ? void 0 : rM.activated) && (iM = ~Mi.T.TerrainDrawn);
-       const OM = MM.headerWord(Mi.K.LoadSteps) & iM & ~En;
+       null !== Tp ? xV = -1 : !0 === (null === (eV = Lp) || void 0 === eV ? void 0 : eV.activated) && (xV = ~Vx.cb.TerrainDrawn);
+       const JV = VV.headerWord(Vx.Q.LoadSteps) & xV & ~bQ;
```

#### 919. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8546` → after: `L8299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8299) · [Before (L8546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8546)

```diff
-       for (const [jM, aM] of Object.entries(dz)) 0 !== (OM & Mi.T[jM]) && (0, hM.s)(aM, SM)
+       for (const [UV, yV] of Object.entries(kw)) 0 !== (JV & Vx.cb[UV]) && (0, kV.s)(yV, YV)
```

#### 920. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8579` → after: `L8332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8332) · [Before (L8579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8579)

```diff
-       kn = !0, tn.stop(), (0, Oj.endLookDebugTake)(), nj = null, RQ(), (0, pM.I)().unlockPointer(), (0, pM.H)(null), null === (MM = Ia) || void 0 === MM || MM(), Ia = null, null === (rM = (0, WM.p)()) || void 0 === rM || rM.followCursorAim(null), (0, kr.B)(), (0, WM.c)(), ga.stop … [truncated]
+       WQ = !0, TQ.stop(), (0, eU.endLookDebugTake)(), yU = null, An(), (0, WV.G)().unlockPointer(), (0, WV.E)(null), null === (VV = my) || void 0 === VV || VV(), my = null, null === (eV = (0, RV.v)()) || void 0 === eV || eV.followCursorAim(null), (0, ie.A)(), (0, RV.i)(), Ay.stop … [truncated]
```

#### 921. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8587-L8588` → after: `L8340-L8341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8340-L8341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8340-L8341) · [Before (L8587-L8588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8587-L8588)

```diff
-         console.warn(`${Kj} the sky's images didn't release`, EM)
-       }(0, lS.f)(null), null === (dM = Ga) || void 0 === dM || dM.pagePreviews().endSession(null === (0, Jr.t)())
+         console.warn(`${KU} the sky's images didn't release`, qV)
+       }(0, EY.h)(null), null === (EV = jy) || void 0 === EV || EV.pagePreviews().endSession(null === (0, be.r)())
```

#### 922. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8593-L8599` → after: `L8346-L8352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8346-L8352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8346-L8352) · [Before (L8593-L8599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8593-L8599)

```diff
-       const SM = null !== (iM = null === (OM = Aa) || void 0 === OM ? void 0 : OM.details()) && void 0 !== iM ? iM : {},
-         jM = MM.site === Tj || MM.site === Vj || MM.site === oi.RENDER_RELOAD_SITE || MM.site === cj ? MM.error instanceof WebAssembly.RuntimeError || MM.error instanceof Qi.e : !(0, Hi.p)(MM.error) && (0, di.L)(MM);
-       jM && MM.error instanceof Error && (0, Jr.V)(MM.error);
-       const aM = jM || MM.site === di.B ? (0, oi.readTrap)(MM.error) : null,
-         PM = null !== aM && (0, Oi.f)(aM.kind, aM.refusedBytes) ? aM.refusedBytes : 0,
-         nM = (0, si.j)(),
-         QM = null === xa ? (0, hS.x)(function() {
+       const YV = null !== (xV = null === (JV = oy) || void 0 === JV ? void 0 : JV.details()) && void 0 !== xV ? xV : {},
+         UV = VV.site === uU || VV.site === sU || VV.site === ix.RENDER_RELOAD_SITE || VV.site === SU ? VV.error instanceof WebAssembly.RuntimeError || VV.error instanceof nx.e : !(0, rx.s)(VV.error) && (0, bx.K)(VV);
+       UV && VV.error instanceof Error && (0, be.U)(VV.error);
+       const yV = UV || VV.site === bx.w ? (0, ix.readTrap)(VV.error) : null,
+         pV = null !== yV && (0, Jx.e)(yV.kind, yV.refusedBytes) ? yV.refusedBytes : 0,
+         QV = (0, Wx.q)(),
+         nV = null === cy ? (0, vY.t)(function() {
```

#### 923. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8601` → after: `L8354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8354) · [Before (L8601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8601)

```diff
-             return (0, Jr.y)().buffer.byteLength
+             return (0, be.x)().buffer.byteLength
```

#### 924. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8608` → after: `L8361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8361) · [Before (L8608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8608)

```diff
-       if (zM && ((0, Gr.F)("oom"), (0, Gr.E)("decline"), Dn = !0), bz(), (0, ZS.e)()) return un.releaseNow(), console.warn(`${Kj} the session stopped at ${MM.site} as the page reloads`, MM.error), void((0, Hi.p)(MM.error) || (null === (LM = MM.header) || void 0 === LM ? void 0 :  … [truncated]
+       if (wV && ((0, Fe.G)("oom"), (0, Fe.D)("decline"), GQ = !0), Tw(), (0, DY.e)()) return AQ.releaseNow(), console.warn(`${KU} the session stopped at ${VV.site} as the page reloads`, VV.error), void((0, rx.s)(VV.error) || (null === (ZV = VV.header) || void 0 === ZV ? void 0 :  … [truncated]
```

#### 925. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8620` → after: `L8373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8373) · [Before (L8620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8620)

```diff
-       return !(iM - EP[MM] < La) && (EP[MM] = iM, console.warn(`${Kj} ${rM}`), !0)
+       return !(xV - Ep[VV] < Qy) && (Ep[VV] = xV, console.warn(`${KU} ${eV}`), !0)
```

#### 926. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8629` → after: `L8382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8382) · [Before (L8629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8629)

```diff
-       jM !== UP && tz("dropped", `${jM} records dropped so far (input ${rM.dropped}, options ${SM}, net ${iM.dropped}, worker ${OM.dropped}, net-out ${GP})`) && (UP = jM)
+       UV !== Bp && Aw("dropped", `${UV} records dropped so far (input ${eV.dropped}, options ${YV}, net ${xV.dropped}, worker ${JV.dropped}, net-out ${jp})`) && (Bp = UV)
```

#### 927. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8636` → after: `L8389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8389) · [Before (L8636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8636)

```diff
-       const OM = (0, Ki.i)(iM);
+       const JV = (0, Hx.n)(xV);
```

#### 928. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8639` → after: `L8392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8392) · [Before (L8639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8639)

```diff
-         horizontal: Math.min(OM.horizontal, null !== (MM = null === (rM = Aa) || void 0 === rM ? void 0 : rM.shedDistanceInUse()) && void 0 !== MM ? MM : 1 / 0)
+         horizontal: Math.min(JV.horizontal, null !== (VV = null === (eV = oy) || void 0 === eV ? void 0 : eV.shedDistanceInUse()) && void 0 !== VV ? VV : 1 / 0)
```

#### 929. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8646` → after: `L8399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8399) · [Before (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8646)

```diff
-         samples: Mn ? zn : null,
+         samples: dp ? pQ : null,
```

#### 930. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8648` → after: `L8401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8401) · [Before (L8648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8648)

```diff
-         renderDistance: null !== (rM = null === (iM = uz()) || void 0 === iM ? void 0 : iM.horizontal) && void 0 !== rM ? rM : null
+         renderDistance: null !== (eV = null === (xV = Xw()) || void 0 === xV ? void 0 : xV.horizontal) && void 0 !== eV ? eV : null
```

#### 931. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8653` → after: `L8406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8406) · [Before (L8653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8653)

```diff
-       uP = MM, (0, vi.F)()
+       Np = VV, (0, lx.S)()
```

#### 932. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8661-L8662` → after: `L8414-L8415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8414-L8415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8414-L8415) · [Before (L8661-L8662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8661-L8662)

```diff
-         renderDistance: null !== (rM = null === OM || void 0 === OM ? void 0 : OM.horizontal) && void 0 !== rM ? rM : null,
-         renderDistanceVertical: null !== (iM = null === OM || void 0 === OM ? void 0 : OM.vertical) && void 0 !== iM ? iM : null,
+         renderDistance: null !== (eV = null === JV || void 0 === JV ? void 0 : JV.horizontal) && void 0 !== eV ? eV : null,
+         renderDistanceVertical: null !== (xV = null === JV || void 0 === JV ? void 0 : JV.vertical) && void 0 !== xV ? xV : null,
```

#### 933. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8673` → after: `L8426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8426) · [Before (L8673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8673)

```diff
-       console.info(`${Kj} wasm memory at the session's end`, MM.details());
+       console.info(`${KU} wasm memory at the session's end`, VV.details());
```

#### 934. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8685` → after: `L8438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8438) · [Before (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8685)

```diff
-         renderBackend: null !== (rM = (0, ZS.G)()) && void 0 !== rM ? rM : "none",
+         renderBackend: null !== (eV = (0, DY.G)()) && void 0 !== eV ? eV : "none",
```

#### 935. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8687` → after: `L8440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8440) · [Before (L8687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8687)

```diff
-         deviceMemory: String(null !== jM && void 0 !== jM ? jM : "unreported")
+         deviceMemory: String(null !== UV && void 0 !== UV ? UV : "unreported")
```

#### 936. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8695` → after: `L8448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8448) · [Before (L8695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8695)

```diff
-         MM.crash(di.D, iM)
+         VV.crash(bx.x, xV)
```

#### 937. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8700` → after: `L8453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8453) · [Before (L8700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8700)

```diff
-       return Ya ??= iM.e(83).then((() => iM(53795))).catch((MM => {
+       return Cy ??= xV.e(83).then((() => xV(53996))).catch((VV => {
```

#### 938. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8748` → after: `L8501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8501) · [Before (L8748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8748)

```diff
-             OM(), await Promise.all([(0, oi.flushCrashReports)(cM.c), null === jM || void 0 === jM ? void 0 : jM()])
+             JV(), await Promise.all([(0, ix.flushCrashReports)(OV.e), null === UV || void 0 === UV ? void 0 : UV()])
```

#### 939. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8750` → after: `L8503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8503) · [Before (L8750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8750)

```diff
-           reload: cM.k
+           reload: OV.l
```

#### 940. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8764` → after: `L8517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8517) · [Before (L8764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8764)

```diff
-         } = await iM.e(299).then((() => iM(42165)));
+         } = await xV.e(299).then((() => xV(42371)));
```

#### 941. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8792` → after: `L8545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8545) · [Before (L8792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8792)

```diff
-       Bz || (Bz = !0, vn("play", TM), (0, mM.o)(new nL), PM.gameBridge.attach(NM), iL().catch((() => {})), (0, WM.r)((MM => {
+       mw || (mw = !0, oQ("play", IV), (0, vV.o)(new pZ), pV.gameBridge.attach(hV), eZ().catch((() => {})), (0, RV.z)((VV => {
```

#### 942. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8802-L8804` → after: `L8555-L8557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8555-L8557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8555-L8557) · [Before (L8802-L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8802-L8804)

```diff
-       booted: jM.n.INITIALISE_NOA,
-       texturesIn: jM.n.REGISTRATION,
-       modelsIn: jM.n.SETUP_LIFEFORMS
+       booted: UV.i.INITIALISE_NOA,
+       texturesIn: UV.i.REGISTRATION,
+       modelsIn: UV.i.SETUP_LIFEFORMS
```

#### 943. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8808` → after: `L8561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8561) · [Before (L8808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8808)

```diff
-       nM.i.Tz("matchmakeAndPlayStepCompleted", {
+       QV.h.QZ("matchmakeAndPlayStepCompleted", {
```

#### 944. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8820-L8821` → after: `L8573-L8574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8573-L8574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8573-L8574) · [Before (L8820-L8821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8820-L8821)

```diff
-       if (MM.code === OM.d.serverUpdating.code) return (new nL).leaveLive(), void rL(rM, iM);
-       nM.i.Tz("unwantedLeftGame", {
+       if (VV.code === JV.b.serverUpdating.code) return (new pZ).leaveLive(), void VZ(eV, xV);
+       QV.h.QZ("unwantedLeftGame", {
```

#### 945. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8835` → after: `L8588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8588) · [Before (L8835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8835)

```diff
-       } : "gameOrPluginKick" === MM.name ? MM.reason : `You have disconnected from the server.\n${MM.reason}`
+       } : "gameOrPluginKick" === VV.name ? VV.reason : `You have disconnected from the server.\n${VV.reason}`
```

#### 946. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8840` → after: `L8593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8593) · [Before (L8840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8840)

```diff
-       OM = (0, QM.G)(MM, rM), Promise.resolve().then((() => iM(1591))).then((MM => {
+       JV = (0, nV.F)(VV, eV), Promise.resolve().then((() => xV(1612))).then((VV => {
```

#### 947. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8851` → after: `L8604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8604) · [Before (L8851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8851)

```diff
-       return Xz ??= Promise.all([iM.e(84), iM.e(87), iM.e(85), iM.e(86), iM.e(103), iM.e(100), iM.e(296), iM.e(205), iM.e(246), iM.e(272), iM.e(298), iM.e(53)]).then((() => iM(42102))).then((MM => {
+       return Kw ??= Promise.all([xV.e(84), xV.e(87), xV.e(85), xV.e(86), xV.e(103), xV.e(100), xV.e(296), xV.e(205), xV.e(246), xV.e(272), xV.e(298), xV.e(53)]).then((() => xV(42308))).then((VV => {
```

#### 948. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8858` → after: `L8611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8611) · [Before (L8858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8858)

```diff
-                 null === rM || rM.isStopped || kn ? console.warn(`${Kj} the play sources threw as they attached, after the client stopped`, MM) : wz({
+                 null === eV || eV.isStopped || WQ ? console.warn(`${KU} the play sources threw as they attached, after the client stopped`, VV) : Pw({
```

#### 949. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8867` → after: `L8620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8620) · [Before (L8867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8867)

```diff
-         throw Xz = null, new WM.b(MM)
+         throw Kw = null, new RV.e(VV)
```

#### 950. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8892` → after: `L8645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8645) · [Before (L8892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8892)

```diff
-             target: await (0, FM.d)(MM.userContext, rM.place, TQ(), PM),
+             target: await (0, mV.f)(VV.userContext, eV.place, sn(), pV),
```

#### 951. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8919-L8920` → after: `L8672-L8673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8672-L8673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8672-L8673) · [Before (L8919-L8920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8919-L8920)

```diff
-             (0, LM.o)((() => {
-               MM.endJoinAd() && ((0, hM.l)(), CM.adEnded())
+             (0, ZV.m)((() => {
+               VV.endJoinAd() && ((0, kV.m)(), TV.adEnded())
```

#### 952. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8923` → after: `L8676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8676) · [Before (L8923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8923)

```diff
-           return Kz || (Kz = !0, (0, bM.b)()), Iz ? (Vz(jM.n.CONNECT_TO_GAME_SERVER), Vz(jM.n.SHADER_PACK), function() {
+           return uw || (uw = !0, (0, AV.c)()), Hw ? (Iw(UV.i.CONNECT_TO_GAME_SERVER), Iw(UV.i.SHADER_PACK), function() {
```

#### 953. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8931` → after: `L8684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8684) · [Before (L8931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8931)

```diff
-               return null !== (MM = null === (rM = OP) || void 0 === rM ? void 0 : rM.couldntRunInJoinedGame()) && void 0 !== MM ? MM : null
+               return null !== (VV = null === (eV = Vp) || void 0 === eV ? void 0 : eV.couldntRunInJoinedGame()) && void 0 !== VV ? VV : null
```

#### 954. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8933-L8934` → after: `L8686-L8687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8686-L8687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8686-L8687) · [Before (L8933-L8934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8933-L8934)

```diff
-             null !== MM && (0, eM.d)(MM)
-           }(), SM.b.value(void 0)) : PL("The server ended the game as it joined");
+             null !== VV && (0, PV.c)(VV)
+           }(), YV.e.value(void 0)) : yZ("The server ended the game as it joined");
```

#### 955. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8938` → after: `L8691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8691) · [Before (L8938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8938)

```diff
-             if ((QM.error instanceof xM.n || QM.error instanceof xM.d) && QM.error.code === OM.d.serverUpdating.code) {
+             if ((nV.error instanceof LV.n || nV.error instanceof LV.c) && nV.error.code === JV.b.serverUpdating.code) {
```

#### 956. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8946` → after: `L8699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8699) · [Before (L8946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8946)

```diff
-             return QM.error instanceof VM.e ? SM.b.errorWithCode(QM.error.messageKey, jM.n.SHADER_PACK, {
+             return nV.error instanceof dV.e ? YV.e.errorWithCode(nV.error.messageKey, UV.i.SHADER_PACK, {
```

#### 957. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8948-L8952` → after: `L8701-L8705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8701-L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8701-L8705) · [Before (L8948-L8952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8948-L8952)

```diff
-             }) : SM.b.errorWithCode(function(MM) {
-               if (MM instanceof xM.w || MM instanceof uM.i) return MM.message;
-               if (SL(MM)) return (0, AM.p)(MM.code, MM.serverText);
-               return AM.j
-             }(QM.error), jM.n.CONNECT_TO_GAME_SERVER, {
+             }) : YV.e.errorWithCode(function(VV) {
+               if (VV instanceof LV.u || VV instanceof zV.d) return VV.message;
+               if (JZ(VV)) return (0, lV.n)(VV.code, VV.serverText);
+               return lV.i
+             }(nV.error), UV.i.CONNECT_TO_GAME_SERVER, {
```

#### 958. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8955-L8958` → after: `L8708-L8711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8708-L8711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8708-L8711) · [Before (L8955-L8958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8955-L8958)

```diff
-               gameServerUnreachable: (0, vM.b)(QM.error),
-               joinFailure: (0, vM.h)(QM.error),
-               rematch: (0, tM.e)(QM.error),
-               gameRefused: (0, gM.e)(QM.error)
+               gameServerUnreachable: (0, fV.c)(nV.error),
+               joinFailure: (0, fV.g)(nV.error),
+               rematch: (0, XV.d)(nV.error),
+               gameRefused: (0, MV.b)(nV.error)
```

#### 959. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8964` → after: `L8717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8717) · [Before (L8964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8964)

```diff
-         case "Ti":
+         case "pJ":
```

#### 960. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8970` → after: `L8723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8723) · [Before (L8970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8970)

```diff
-       return MM instanceof xM.n || MM instanceof xM.d && "attach" !== MM.stage
+       return VV instanceof LV.n || VV instanceof LV.c && "attach" !== VV.stage
```

#### 961. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8974` → after: `L8727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8727) · [Before (L8974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8974)

```diff
-       return !(MM instanceof xM.w) && !SL(MM) && void 0 === (0, vM.b)(MM)
+       return !(VV instanceof LV.u) && !JZ(VV) && void 0 === (0, fV.c)(VV)
```

#### 962. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8978` → after: `L8731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8731) · [Before (L8978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8978)

```diff
-       return SL(MM) ? MM instanceof xM.d && (0, AM.m)(MM.code).requiresRefresh ? "medium" : "low" : jL(MM) || MM instanceof xM.w ? "medium" : "low"
+       return JZ(VV) ? VV instanceof LV.c && (0, lV.l)(VV.code).requiresRefresh ? "medium" : "low" : YZ(VV) || VV instanceof LV.u ? "medium" : "low"
```

#### 963. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8982` → after: `L8735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8735) · [Before (L8982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8982)

```diff
-       return SM.b.errorWithCode(MM, jM.n.CONNECT_TO_GAME_SERVER, {
+       return YV.e.errorWithCode(VV, UV.i.CONNECT_TO_GAME_SERVER, {
```

#### 964. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8984` → after: `L8737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8737) · [Before (L8984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8984)

```diff
-         Ti: !0
+         pJ: !0
```

#### 965. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8989` → after: `L8742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8742) · [Before (L8989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8989)

```diff
-         if ((0, RM.d)()) {
+         if ((0, GV.b)()) {
```

#### 966. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8991-L8992` → after: `L8744-L8745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8744-L8745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8744-L8745) · [Before (L8991-L8992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8991-L8992)

```diff
-           if ((0, aM.d)()) return;
-           (0, HM.e)(!0 === (null === (rM = (0, RM.n)()) || void 0 === rM || null === (iM = rM.currentViewer) || void 0 === iM ? void 0 : iM.unsavedChanges), MM)
+           if ((0, yV.c)()) return;
+           (0, rV.b)(!0 === (null === (eV = (0, GV.l)()) || void 0 === eV || null === (xV = eV.currentViewer) || void 0 === xV ? void 0 : xV.unsavedChanges), VV)
```

#### 967. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8999` → after: `L8752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8752) · [Before (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L8999)

```diff
-         Iz = !1, (0, wM.e)();
+         Hw = !1, (0, NV.g)();
```

#### 968. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9002` → after: `L8755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8755) · [Before (L9002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9002)

```diff
-           null === (rM = (0, WM.p)()) || void 0 === rM || rM.clearWasmCameraScreen()
+           null === (eV = (0, RV.v)()) || void 0 === eV || eV.clearWasmCameraScreen()
```

#### 969. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9012` → after: `L8765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8765) · [Before (L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9012)

```diff
-           (0, mM.p)({
+           (0, vV.q)({
```

#### 970. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9014` → after: `L8767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8767) · [Before (L9014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9014)

```diff
-           }), nM.i.Tz("leaveGame", {
+           }), QV.h.QZ("leaveGame", {
```

#### 971. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9016` → after: `L8769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8769) · [Before (L9016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9016)

```diff
-           }), (0, zM.M)()
+           }), (0, wV.O)()
```

#### 972. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9020` → after: `L8773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8773) · [Before (L9020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9020)

```diff
-         return (0, RM.d)()
+         return (0, GV.b)()
```

#### 973. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9024` → after: `L8777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8777) · [Before (L9024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9024)

```diff
-   42035: (MM, rM, iM) => {
+   42225: (VV, eV, xV) => {
```

#### 974. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9027-L9029` → after: `L8781-L8782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8781-L8782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8781-L8782) · [Before (L9027-L9029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9027-L9029)

```diff
-       h: () => OM,
-       i: () => PM,
-       j: () => aM
+       f: () => pV,
+       h: () => yV
```

#### 975. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9041` → after: `L8794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8794) · [Before (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9041)

```diff
-       return `it sent no start within ${Math.round(MM)} ms`
+       return `it sent no start within ${Math.round(VV)} ms`
```

#### 976. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9084` → after: `L8837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8837) · [Before (L9084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9084)

```diff
-   40769: (MM, rM, iM) => {
+   40918: (VV, eV, xV) => {
```

#### 977. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9086` → after: `L8839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8839) · [Before (L9086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9086)

```diff
-       c: () => PM
+       b: () => pV
```

#### 978. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9088-L9089` → after: `L8841-L8842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8841-L8842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8841-L8842) · [Before (L9088-L9089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9088-L9089)

```diff
-     var OM = iM(332),
-       SM = iM(1073);
+     var JV = xV(375),
+       YV = xV(1099);
```

#### 979. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9094-L9095` → after: `L8847-L8848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8847-L8848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8847-L8848) · [Before (L9094-L9095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9094-L9095)

```diff
-       const rM = (0, OM.Mb)(MM);
-       return "greenville" === rM ? !(0, OM.Jb)(MM) : "classic" !== rM ? jM.has(rM) : !(0, SM.m)(MM) && !aM.has((0, OM.Jb)(MM))
+       const eV = (0, JV.Pb)(VV);
+       return "greenville" === eV ? !(0, JV.Lb)(VV) : "classic" !== eV ? UV.has(eV) : !(0, YV.l)(VV) && !yV.has((0, JV.Lb)(VV))
```

#### 980. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9098` → after: `L8851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8851) · [Before (L9098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9098)

```diff
-   38721: (MM, rM, iM) => {
+   38890: (VV, eV, xV) => {
```

#### 981. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9103` → after: `L8856-L8858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8856-L8858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8856-L8858) · [Before (L9103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9103)

```diff
-       C: () => JM,
+       A: () => bV,
+       b: () => EV,
+       c: () => TV,
```

#### 982. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9105` → after: `L8860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8860) · [Before (L9105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9105)

```diff
-       h: () => CM,
+       f: () => PV,
```

#### 983. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9107-L9112` → after: `L8862-L8865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8862-L8865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8862-L8865) · [Before (L9107-L9112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9107-L9112)

```diff
-       n: () => eM,
-       o: () => PM,
-       r: () => aM,
-       v: () => jM,
-       x: () => nM,
-       z: () => yM
+       l: () => yV,
+       p: () => UV,
+       s: () => QV,
+       w: () => BV
```

#### 984. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9136` → after: `L8889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8889) · [Before (L9136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9136)

```diff
-       return `~${function(MM){return MM.length<2?MM:":"===MM[1]?MM[0]:MM[0]+MM[1]}(rM)}~${MM}`
+       return `~${function(VV){return VV.length<2?VV:":"===VV[1]?VV[0]:VV[0]+VV[1]}(eV)}~${VV}`
```

#### 985. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9182` → after: `L8935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8935) · [Before (L9182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9182)

```diff
-       if (iM <= rM) return `t ${MM}`;
+       if (xV <= eV) return `t ${VV}`;
```

#### 986. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9216` → after: `L8969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8969) · [Before (L9216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9216)

```diff
-   41930: (MM, rM, iM) => {
+   42130: (VV, eV, xV) => {
```

#### 987. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9244` → after: `L8997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L8997) · [Before (L9244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9244)

```diff
-   38954: MM => {
+   39134: VV => {
```

#### 988. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9247` → after: `L9000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L9000) · [Before (L9247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9247)

```diff
-   38941: MM => {
+   39122: VV => {
```

#### 989. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9250` → after: `L9003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L9003) · [Before (L9250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9250)

```diff
-   38961: MM => {
+   39143: VV => {
```

#### 990. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9253` → after: `L9006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L9006) · [Before (L9253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9253)

```diff
-   38935: MM => {
+   39113: VV => {
```

#### 991. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9256` → after: `L9009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L9009) · [Before (L9256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9256)

```diff
-   38950: MM => {
+   39130: VV => {
```

#### 992. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9259` → after: `L9012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L9012) · [Before (L9259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9259)

```diff
-   39771: (MM, rM, iM) => {
+   39919: (VV, eV, xV) => {
```

#### 993. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9261` → after: `L9014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L9014) · [Before (L9261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9261)

```diff
-       e: () => jM
+       c: () => UV
```

#### 994. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9263` → after: `L9016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L9016) · [Before (L9263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9263)

```diff
-     var OM = iM(3185);
+     var JV = xV(3194);
```

#### 995. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9267` → after: `L9020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L9020) · [Before (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9267)

```diff
-       const MM = () => (0, OM.E)();
+       const VV = () => (0, JV.D)();
```

#### 996. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9269-L9271` → after: `L9022-L9024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9022-L9024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L9022-L9024) · [Before (L9269-L9271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9269-L9271)

```diff
-         memoryBytes: () => (0, OM.y)().buffer.byteLength,
-         reserveUpFront: rM => MM().RL(rM),
-         reserveAhead: rM => MM().SL(rM),
+         memoryBytes: () => (0, JV.x)().buffer.byteLength,
+         reserveUpFront: eV => VV().fZ(eV),
+         reserveAhead: eV => VV().LZ(eV),
```

#### 997. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9273` → after: `L9026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L9026) · [Before (L9273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9273)

```diff
-           MM().pL(rM)
+           VV().mZ(eV)
```

#### 998. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9275` → after: `L9028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L9028) · [Before (L9275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9275)

```diff
-         lowWater: () => SM[MM().XQ()] ?? "none",
+         lowWater: () => YV[VV().lZ()] ?? "none",
```

#### 999. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9277` → after: `L9030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L9030) · [Before (L9277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9277)

```diff
-           const rM = new Uint32Array((0, OM.y)().buffer, MM, 17),
+           const eV = new Uint32Array((0, JV.x)().buffer, VV, 17),
```

#### 1000. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9298-L9300` → after: `L9051-L9053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9051-L9053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L9051-L9053) · [Before (L9298-L9300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9298-L9300)

```diff
-         }(MM().WL()),
-         takeBallast: () => MM().sL(),
-         takePressure: () => MM().DL()
+         }(VV().KZ()),
+         takeBallast: () => VV().HZ(),
+         takePressure: () => VV().uZ()
```

#### 1001. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9304` → after: `L9057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L9057) · [Before (L9304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9304)

```diff
-   5442: (MM, rM, iM) => {
+   5561: (VV, eV, xV) => {
```

#### 1002. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9310` → after: `L9063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L9063) · [Before (L9310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9310)

```diff
-       k: () => LM,
+       n: () => ZV,
```

#### 1003. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9312` → after: `L9065-L9066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9065-L9066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L9065-L9066) · [Before (L9312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9312)

```diff
-       q: () => jM,
+       p: () => UV,
+       s: () => nV,
```

#### 1004. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9314-L9315` → after: `L9068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L9068) · [Before (L9314-L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9314-L9315)

```diff
-       w: () => zM,
-       z: () => mM
+       x: () => vV
```

#### 1005. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9334` → after: `L9087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L9087) · [Before (L9334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9334)

```diff
-         if ("string" !== typeof OM) return `${iM} isn't text.`;
+         if ("string" !== typeof JV) return `${xV} isn't text.`;
```

#### 1006. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9343` → after: `L9096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L9096) · [Before (L9343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9343)

```diff
-           if (MM.length > PM) return `The pack has more than ${PM} .wgsl files.`;
+           if (VV.length > pV) return `The pack has more than ${pV} .wgsl files.`;
```

#### 1007. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9351` → after: `L9104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L9104) · [Before (L9351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9351)

```diff
-             if (rM.has(iM)) return `The pack has two files at ${iM}.`;
+             if (eV.has(xV)) return `The pack has two files at ${xV}.`;
```

#### 1008. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9354` → after: `L9107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L9107) · [Before (L9354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9354)

```diff
-           return mM(MM) > aM ? `The pack's .wgsl files are over ${aM/1024} KB in total.` : null
+           return vV(VV) > yV ? `The pack's .wgsl files are over ${yV/1024} KB in total.` : null
```

#### 1009. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9379-L9382` → after: `L9132-L9135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9132-L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L9132-L9135) · [Before (L9379-L9382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9379-L9382)

```diff
-       if (!MM.toLowerCase().endsWith(".wgsl")) return `${MM} isn't a .wgsl file.`;
-       if (MM.length > nM) return `A file path is over ${nM} characters.`;
-       if (MM.includes("\\") || /[\u0000-\u001f]/.test(MM)) return `${MM} isn't a valid file path.`;
-       return MM.split("/").some((MM => "" === MM || "." === MM || ".." === MM)) ? `${MM} isn't a valid file path.` : null
+       if (!VV.toLowerCase().endsWith(".wgsl")) return `${VV} isn't a .wgsl file.`;
+       if (VV.length > QV) return `A file path is over ${QV} characters.`;
+       if (VV.includes("\\") || /[\u0000-\u001f]/.test(VV)) return `${VV} isn't a valid file path.`;
+       return VV.split("/").some((VV => "" === VV || "." === VV || ".." === VV)) ? `${VV} isn't a valid file path.` : null
```

#### 1010. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9415` → after: `L9168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmPlay.js#L9168) · [Before (L9415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmPlay.js#L9415)

```diff
-           return (rM[iM]?.numAnimStates ?? 0) > 1 && !PM.has(OM) ? OM : MM
+           return (eV[xV]?.numAnimStates ?? 0) > 1 && !pV.has(JV) ? JV : VV
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmRecorder.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d)

- **File**: `bundles/bloxd.io/chunks/js/wasmRecorder.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864)

#### 1. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L4-L5)

```diff
-   64113: (MM, rM, iM) => {
-     MM.exports = iM.p + "static/media/bloxd_wasm_recorder_bg.aaf643ca2c3ba550e093.wasm"
+   64501: (VV, eV, xV) => {
+     VV.exports = xV.p + "static/media/bloxd_wasm_recorder_bg.9c2ec8d3b88131800bee.wasm"
```

#### 2. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L7)

```diff
-   64109: (MM, rM, iM) => {
+   64492: (VV, eV, xV) => {
```

#### 3. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L19-L21` → after: `L19-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L19-L21) · [Before (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L19-L21)

```diff
-       OjM: () => SM,
-       KaM: () => RM,
-       PQ: () => jM,
+       FyV: () => YV,
+       kQV: () => GV,
+       sw: () => UV,
```

#### 4. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L24-L26` → after: `L24-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L24-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L24-L26) · [Before (L24-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L24-L26)

```diff
-       HQ: () => aM,
-       rjM: () => PM,
-       ISM: () => nM
+       hZ: () => yV,
+       qyV: () => pV,
+       vyV: () => QV
```

#### 5. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L35)

```diff
-         bM.wCgX(MM, 0)
+         AV.VOMT(VV, 0)
```

#### 6. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L38)

```diff
-         return 0 !== bM.Mjk8(this.__wbg_ptr)
+         return 0 !== AV.buSB(this.__wbg_ptr)
```

#### 7. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L41-L59` → after: `L41-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L41-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L41-L59) · [Before (L41-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L41-L59)

```diff
-         return 0 !== bM.y1yb(this.__wbg_ptr, MM, rM)
-       }
-       KSM(MM) {
-         return bM.bIvM(this.__wbg_ptr, MM) >>> 0
-       }
-       XSM() {
-         bM.mJ8b(this.__wbg_ptr)
-       }
-       BSM() {
-         return bM.VhoN(this.__wbg_ptr) >>> 0
-       }
-       FSM() {
-         return bM.fOJ3(this.__wbg_ptr)
-       }
-       VSM() {
-         return bM.b98t(this.__wbg_ptr) >>> 0
- ... (3 more removed lines; see GitHub link above)
+         return 0 !== AV.bRyE(this.__wbg_ptr, VV, eV)
+       }
+       ryV(VV) {
+         return AV.Cbpx(this.__wbg_ptr, VV) >>> 0
+       }
+       ZyV() {
+         AV.ktLZ(this.__wbg_ptr)
+       }
+       wyV() {
+         return AV.PXmt(this.__wbg_ptr) >>> 0
+       }
+       nyV() {
+         return AV.wRLh(this.__wbg_ptr)
+       }
+       EyV() {
+         return AV.HN3f(this.__wbg_ptr) >>> 0
+ ... (3 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L62)

```diff
-         return bM.h2Sg(this.__wbg_ptr, MM) >>> 0
+         return AV.zsVJ(this.__wbg_ptr, VV) >>> 0
```

#### 9. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L65)

```diff
-         const MM = bM.Rn1e();
+         const VV = AV.Mb1t();
```

#### 10. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L68-L75` → after: `L68-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L68-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L68-L75) · [Before (L68-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L68-L75)

```diff
-       TSM() {
-         return bM.h9Gr(this.__wbg_ptr) >>> 0
-       }
-       qaM() {
-         return bM.C1K1(this.__wbg_ptr) >>> 0
-       }
-       vSM(MM, rM, iM) {
-         return 0 !== bM.rJOk(this.__wbg_ptr, MM, rM, iM)
+       byV() {
+         return AV.TAVP(this.__wbg_ptr) >>> 0
+       }
+       bQV() {
+         return AV.zp5n(this.__wbg_ptr) >>> 0
+       }
+       QyV(VV, eV, xV) {
+         return 0 !== AV.G6uI(this.__wbg_ptr, VV, eV, xV)
```

#### 11. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L78` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L78) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L78)

```diff
-         return bM.A3Y6(this.__wbg_ptr, MM) >>> 0
+         return AV.EGls(this.__wbg_ptr, VV) >>> 0
```

#### 12. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L81)

```diff
-         return bM.Vzz0(this.__wbg_ptr) >>> 0
+         return AV.fiWo(this.__wbg_ptr) >>> 0
```

#### 13. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L107` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L107) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L107)

```diff
-         }(MM, bM.a3yL, bM.hzhi),
+         }(VV, AV.QB9m, AV.WvZt),
```

#### 14. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L109)

```diff
-         SM = bM.kink(iM, OM, rM);
+         YV = AV.i9u3(xV, JV, eV);
```

#### 15. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L114-L122` → after: `L114-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L114-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L114-L122) · [Before (L114-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L114-L122)

```diff
-       bM.UD0X()
-     }
- 
-     function PM() {
-       return bM.lX6L() >>> 0
-     }
- 
-     function nM() {
-       return yM(bM.PXrd())
+       AV.onGg()
+     }
+ 
+     function pV() {
+       return AV.qRkZ() >>> 0
+     }
+ 
+     function QV() {
+       return BV(AV.Tdt6())
```

#### 16. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L128)

```diff
-         d9L7: {
+         kZNR: {
```

#### 17. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L130` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L130) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L130)

```diff
-           fLym: function(MM, rM) {
+           VDwG: function(VV, eV) {
```

#### 18. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L133)

```diff
-           gKZu: function() {
+           urBW: function() {
```

#### 19. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L136)

```diff
-           N09F: function(MM, rM) {
+           A1cf: function(VV, eV) {
```

#### 20. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L139)

```diff
-           g6GN: function(MM, rM) {
+           KG3y: function(VV, eV) {
```

#### 21. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L142)

```diff
-           MRMV: function() {
+           RQuP: function() {
```

#### 22. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L204)

```diff
-       return eM = MM, bM = MM.exports, CM = rM, HM = null, bM.d6To(), bM
+       return PV = VV, AV = VV.exports, TV = eV, rV = null, AV.xQJy(), AV
```

#### 23. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L228` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L228) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L228)

```diff
-           if (!MM.ok) throw new Error(`failed to fetch Wasm: ${MM.status} ${MM.statusText} fetching '${MM.url}'`);
+           if (!VV.ok) throw new Error(`failed to fetch Wasm: ${VV.status} ${VV.statusText} fetching '${VV.url}'`);
```

#### 24. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L259-L260` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L259-L260) · [Before (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L259-L260)

```diff
-     var pM = iM(3188),
-       WM = iM(7116);
+     var WV = xV(3196),
+       RV = xV(7178);
```

#### 25. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L265)

```diff
-         super((0, pM.B)(MM, rM), {
+         super((0, WV.D)(VV, eV), {
```

#### 26. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L279` → after: `L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L279) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L279)

```diff
-           return iM = rM ??= (0, pM.E)(MM.url(), (0, WM.b)(MM.name)), await iM
+           return xV = eV ??= (0, WV.G)(VV.url(), (0, RV.e)(VV.name)), await xV
```

#### 27. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L315` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L315) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L315)

```diff
-       url: () => new iM.U(iM(64113)),
+       url: () => new xV.U(xV(64501)),
```

#### 28. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L348` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L348) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L348)

```diff
-   7116: (MM, rM, iM) => {
+   7178: (VV, eV, xV) => {
```

#### 29. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L350-L352` → after: `L350-L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L350-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L350-L352) · [Before (L350-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L350-L352)

```diff
-       b: () => aM
-     });
-     var OM = iM(3188);
+       e: () => yV
+     });
+     var JV = xV(3196);
```

#### 30. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L354-L365` → after: `L354-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L354-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L354-L365) · [Before (L354-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L354-L365)

```diff
-       bloxd_wasm: () => "9c356b3ab0e1dec8279681c51821e86b0c769cac263f9e0f7f99f79b8758e8b4",
-       bloxd_wasm_client: () => "80b728e2e1c07ea01ac0480b86847c41501509afdc4dddbfb5c028d2bf09dee0",
-       bloxd_wasm_workers: () => "d70704eca78df456ad3913c0adf79f8b52dba4340cd12a1b6bf933cca972741b",
-       bloxd_wasm_models: () => "3ad7e1eadb9490d2eafb88cd8a1e2fa3b217bc686d0f647a926d3b3e45f346b2",
-       bloxd_wasm_webgpu: () => "b23ee9a016abf7c07a51e4dd79c87b95e00f54293086e61b89ff00c5c3054e76",
-       bloxd_wasm_webgl: () => "c7e113e0705d9817aa1ea95296a04ca341e8508395d22c3a7f94a5cdffba84cd",
-       bloxd_wasm_webgl1: () => "153c631ef0614b6599a45ffada7f02f5904513286e82e789064544612e2e6f87",
-       bloxd_wasm_replay: () => "05e5306bf37c51cb76f69bd76cd489a1e480f7bb5d6f9b73f5c592d1fcaea336",
-       bloxd_wasm_recorder: () => "ef71649d3e6f52a30e3021925f1ba0c1225f7afb503bf09554b23ac481798d94",
-       bloxd_wasm_anim: () => "9b12a80af4e0001e472a77f851e64ef000ea347ea6f87cc37b924c310c6e0847",
-       bloxd_wasm_textures: () => "6d67beffabd1d2d1a22a74a0da90a6f5a26efadd82c32dec4de58168d5b38069",
-       bloxd_wasm_shader_pack: () => "48a1189cb064654273445fd97d029cf7474ee7e14007e5ca8ff8bb20718ac5cb"
+       bloxd_wasm: () => "252eb0d4c25474c8ad4eedf49004824c66703891664dd105e8794514617b7f66",
+       bloxd_wasm_client: () => "7d6fde0515183a27a75873490042de1a4ba89b2e110e23a73dd1b0a6c9643676",
+       bloxd_wasm_workers: () => "d67514a22eb408f1aa31cbe700bb4786d51175017304bdd7b210068eb0444558",
+       bloxd_wasm_models: () => "ef6a73a4745ccf7e34691c3afee6fa9f99e6383b8fa5cf54fb92602667233184",
+       bloxd_wasm_webgpu: () => "521647906e693662a3fe235faa1fd10bc894b8262cf1aa2d92b9fd61655213ad",
+       bloxd_wasm_webgl: () => "8949c301acb6ad07ffdca2e65da52eac203d542b3e4f2ecc1ec9728f497abcbd",
+       bloxd_wasm_webgl1: () => "754597f08f30bb2090c1ad6eba2f662bc59ddd22c4dab79825c05b56182ca41a",
+       bloxd_wasm_replay: () => "002aa8718ff84386b563189fea7dc48bc338240f8c60b0a1a8b237119fa415be",
+       bloxd_wasm_recorder: () => "91cd6139184ce88ce1821f44e757e3a98b4345a6aa284548ac90d569468cc690",
+       bloxd_wasm_anim: () => "5103a8e3223ec1405249b583a0c62ec033bf746a8c1e88c9772c98fe9fa16dcf",
+       bloxd_wasm_textures: () => "dd0b3d60ccc8abf434697177c01310ef60bf4e3cdd6a8df8e70c5bd6a119e75c",
+       bloxd_wasm_shader_pack: () => "7db3262527f10754728edb61693c584b0ace05ec24f1ee479bdc61cebd73439a"
```

#### 31. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L367` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L367) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L367)

```diff
-     var jM = iM(5069);
+     var UV = xV(5180);
```

#### 32. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L373` → after: `L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L373) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L373)

```diff
-         onMismatch: jM.B
+         onMismatch: UV.t
```

#### 33. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmRecorder.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmRecorder.js#L375)

```diff
-       throw new OM.f(`${MM} has no release digest, so this build refuses it`)
+       throw new JV.g(`${VV} has no release digest, so this build refuses it`)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmReplay.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d)

- **File**: `bundles/bloxd.io/chunks/js/wasmReplay.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581)

#### 1. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L4-L5)

```diff
-   64130: (MM, rM, iM) => {
-     MM.exports = iM.p + "static/media/bloxd_wasm_replay_bg.5bfb766340e78bc8c330.wasm"
+   64518: (VV, eV, xV) => {
+     VV.exports = xV.p + "static/media/bloxd_wasm_replay_bg.5259a3b81f64285776b6.wasm"
```

#### 2. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L7)

```diff
-   7116: (MM, rM, iM) => {
+   7178: (VV, eV, xV) => {
```

#### 3. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L9-L11)

```diff
-       b: () => aM
-     });
-     var OM = iM(3188);
+       e: () => yV
+     });
+     var JV = xV(3196);
```

#### 4. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L13-L24` → after: `L13-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L13-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L13-L24) · [Before (L13-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L13-L24)

```diff
-       bloxd_wasm: () => "9c356b3ab0e1dec8279681c51821e86b0c769cac263f9e0f7f99f79b8758e8b4",
-       bloxd_wasm_client: () => "80b728e2e1c07ea01ac0480b86847c41501509afdc4dddbfb5c028d2bf09dee0",
-       bloxd_wasm_workers: () => "d70704eca78df456ad3913c0adf79f8b52dba4340cd12a1b6bf933cca972741b",
-       bloxd_wasm_models: () => "3ad7e1eadb9490d2eafb88cd8a1e2fa3b217bc686d0f647a926d3b3e45f346b2",
-       bloxd_wasm_webgpu: () => "b23ee9a016abf7c07a51e4dd79c87b95e00f54293086e61b89ff00c5c3054e76",
-       bloxd_wasm_webgl: () => "c7e113e0705d9817aa1ea95296a04ca341e8508395d22c3a7f94a5cdffba84cd",
-       bloxd_wasm_webgl1: () => "153c631ef0614b6599a45ffada7f02f5904513286e82e789064544612e2e6f87",
-       bloxd_wasm_replay: () => "05e5306bf37c51cb76f69bd76cd489a1e480f7bb5d6f9b73f5c592d1fcaea336",
-       bloxd_wasm_recorder: () => "ef71649d3e6f52a30e3021925f1ba0c1225f7afb503bf09554b23ac481798d94",
-       bloxd_wasm_anim: () => "9b12a80af4e0001e472a77f851e64ef000ea347ea6f87cc37b924c310c6e0847",
-       bloxd_wasm_textures: () => "6d67beffabd1d2d1a22a74a0da90a6f5a26efadd82c32dec4de58168d5b38069",
-       bloxd_wasm_shader_pack: () => "48a1189cb064654273445fd97d029cf7474ee7e14007e5ca8ff8bb20718ac5cb"
+       bloxd_wasm: () => "252eb0d4c25474c8ad4eedf49004824c66703891664dd105e8794514617b7f66",
+       bloxd_wasm_client: () => "7d6fde0515183a27a75873490042de1a4ba89b2e110e23a73dd1b0a6c9643676",
+       bloxd_wasm_workers: () => "d67514a22eb408f1aa31cbe700bb4786d51175017304bdd7b210068eb0444558",
+       bloxd_wasm_models: () => "ef6a73a4745ccf7e34691c3afee6fa9f99e6383b8fa5cf54fb92602667233184",
+       bloxd_wasm_webgpu: () => "521647906e693662a3fe235faa1fd10bc894b8262cf1aa2d92b9fd61655213ad",
+       bloxd_wasm_webgl: () => "8949c301acb6ad07ffdca2e65da52eac203d542b3e4f2ecc1ec9728f497abcbd",
+       bloxd_wasm_webgl1: () => "754597f08f30bb2090c1ad6eba2f662bc59ddd22c4dab79825c05b56182ca41a",
+       bloxd_wasm_replay: () => "002aa8718ff84386b563189fea7dc48bc338240f8c60b0a1a8b237119fa415be",
+       bloxd_wasm_recorder: () => "91cd6139184ce88ce1821f44e757e3a98b4345a6aa284548ac90d569468cc690",
+       bloxd_wasm_anim: () => "5103a8e3223ec1405249b583a0c62ec033bf746a8c1e88c9772c98fe9fa16dcf",
+       bloxd_wasm_textures: () => "dd0b3d60ccc8abf434697177c01310ef60bf4e3cdd6a8df8e70c5bd6a119e75c",
+       bloxd_wasm_shader_pack: () => "7db3262527f10754728edb61693c584b0ace05ec24f1ee479bdc61cebd73439a"
```

#### 5. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L26)

```diff
-     var jM = iM(5069);
+     var UV = xV(5180);
```

#### 6. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L32)

```diff
-         onMismatch: jM.B
+         onMismatch: UV.t
```

#### 7. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L34)

```diff
-       throw new OM.f(`${MM} has no release digest, so this build refuses it`)
+       throw new JV.g(`${VV} has no release digest, so this build refuses it`)
```

#### 8. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L37)

```diff
-   64121: (MM, rM, iM) => {
+   64509: (VV, eV, xV) => {
```

#### 9. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L47-L49` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L47-L49) · [Before (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L47-L49)

```diff
-       jjM: () => SM,
-       KaM: () => pM,
-       PQ: () => jM,
+       PyV: () => YV,
+       kQV: () => WV,
+       sw: () => UV,
```

#### 10. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L52-L54` → after: `L52-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L52-L54) · [Before (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L52-L54)

```diff
-       HQ: () => aM,
-       rjM: () => PM,
-       ajM: () => nM
+       hZ: () => yV,
+       qyV: () => pV,
+       AyV: () => QV
```

#### 11. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L63-L66` → after: `L63-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L63-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L63-L66) · [Before (L63-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L63-L66)

```diff
-         wM.mNrw(MM, 0)
-       }
-       zjM(MM, rM, iM, OM, SM, jM) {
-         wM.oEE8(this.__wbg_ptr, MM, rM, iM, OM, SM, jM)
+         NV.viTM(VV, 0)
+       }
+       zyV(VV, eV, xV, JV, YV, UV) {
+         NV.W7BM(this.__wbg_ptr, VV, eV, xV, JV, YV, UV)
```

#### 12. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L69)

```diff
-         wM.x9gf(this.__wbg_ptr)
+         NV.Za6z(this.__wbg_ptr)
```

#### 13. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L72-L90` → after: `L72-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L72-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L72-L90) · [Before (L72-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L72-L90)

```diff
-         wM.PSDc(this.__wbg_ptr, MM, rM)
-       }
-       HjM(MM, rM) {
-         wM.sSXl(this.__wbg_ptr, MM, rM)
-       }
-       JjM() {
-         return wM.HYqg(this.__wbg_ptr) >>> 0
-       }
-       hjM() {
-         return wM.f0rI(this.__wbg_ptr) >>> 0
-       }
-       djM() {
-         return wM.Vb2q(this.__wbg_ptr) >>> 0
-       }
-       yjM() {
-         return wM.jYSt(this.__wbg_ptr) >>> 0
- ... (3 more removed lines; see GitHub link above)
+         NV.e5t8(this.__wbg_ptr, VV, eV)
+       }
+       RyV(VV, eV) {
+         NV.fMOo(this.__wbg_ptr, VV, eV)
+       }
+       DyV() {
+         return NV.sOe6(this.__wbg_ptr) >>> 0
+       }
+       gyV() {
+         return NV.nK1o(this.__wbg_ptr) >>> 0
+       }
+       iyV() {
+         return NV.YPaU(this.__wbg_ptr) >>> 0
+       }
+       CyV() {
+         return NV.Pa37(this.__wbg_ptr) >>> 0
+ ... (3 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L93)

```diff
-         const MM = wM.W6Tx();
+         const VV = NV.nrTc();
```

#### 15. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L97-L100` → after: `L97-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L97-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L97-L100) · [Before (L97-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L97-L100)

```diff
-         wM.OJuX(this.__wbg_ptr)
-       }
-       TSM() {
-         return wM.pF24(this.__wbg_ptr) >>> 0
+         NV.UsVJ(this.__wbg_ptr)
+       }
+       byV() {
+         return NV.kwTu(this.__wbg_ptr) >>> 0
```

#### 16. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L103)

```diff
-         wM.VEWU(this.__wbg_ptr)
+         NV.s8XO(this.__wbg_ptr)
```

#### 17. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L106)

```diff
-         wM.Poaz(this.__wbg_ptr)
+         NV.zWoe(this.__wbg_ptr)
```

#### 18. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L109-L112` → after: `L109-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L109-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L109-L112) · [Before (L109-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L109-L112)

```diff
-         return wM.wMna(this.__wbg_ptr) >>> 0
-       }
-       ljM() {
-         wM.tVxW(this.__wbg_ptr)
+         return NV.kZfv(this.__wbg_ptr) >>> 0
+       }
+       ayV() {
+         NV.sgIR(this.__wbg_ptr)
```

#### 19. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L115-L120` → after: `L115-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L115-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L115-L120) · [Before (L115-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L115-L120)

```diff
-         wM.fsgl(this.__wbg_ptr, MM, rM)
-       }
-       UjM(MM) {
-         wM.qGKS(this.__wbg_ptr, MM)
-       }
-       LjM(MM, rM) {
+         NV.XMnS(this.__wbg_ptr, VV, eV)
+       }
+       cyV(VV) {
+         NV.dTxF(this.__wbg_ptr, VV)
+       }
+       GyV(VV, eV) {
```

#### 20. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L127)

```diff
-           }(rM, wM.u4DY),
+           }(eV, NV.BwHP),
```

#### 21. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L129-L135` → after: `L129-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L129-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L129-L135) · [Before (L129-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L129-L135)

```diff
-         wM.y4FI(this.__wbg_ptr, MM, iM, OM)
-       }
-       QjM(MM, rM) {
-         wM.C9MA(this.__wbg_ptr, MM, rM)
-       }
-       EjM(MM) {
-         wM.y8Nc(this.__wbg_ptr, MM)
+         NV.jsDV(this.__wbg_ptr, VV, xV, JV)
+       }
+       MyV(VV, eV) {
+         NV.DkwZ(this.__wbg_ptr, VV, eV)
+       }
+       oyV(VV) {
+         NV.ZkuT(this.__wbg_ptr, VV)
```

#### 22. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L138` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L138) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L138)

```diff
-         return wM.Ce05(this.__wbg_ptr, MM) >>> 0
+         return NV.xGIy(this.__wbg_ptr, VV) >>> 0
```

#### 23. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L141)

```diff
-         return wM.VtoM(this.__wbg_ptr, MM, rM) >>> 0
+         return NV.ElIS(this.__wbg_ptr, VV, eV) >>> 0
```

#### 24. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L167)

```diff
-         }(MM, wM.u4DY, wM.FKnL),
+         }(VV, NV.BwHP, NV.ZsZq),
```

#### 25. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L169)

```diff
-         SM = wM.e1E5(iM, OM, rM);
+         YV = NV.BqMN(xV, JV, eV);
```

#### 26. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L174-L182` → after: `L174-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L174-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L174-L182) · [Before (L174-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L174-L182)

```diff
-       wM.gNPv()
-     }
- 
-     function PM() {
-       return wM.YTYT() >>> 0
-     }
- 
-     function nM() {
-       return lM(wM.lusX())
+       NV.N5FX()
+     }
+ 
+     function pV() {
+       return NV.YNie() >>> 0
+     }
+ 
+     function QV() {
+       return jV(NV.XjZy())
```

#### 27. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L188` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L188) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L188)

```diff
-         Z7zw: {
+         hgS3: {
```

#### 28. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L190) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L190)

```diff
-           EXKD: function(MM, rM) {
+           ytUd: function(VV, eV) {
```

#### 29. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L193)

```diff
-           WR5F: function() {
+           uOuk: function() {
```

#### 30. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L196` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L196)

```diff
-           HKlq: function(MM, rM) {
+           uLwN: function(VV, eV) {
```

#### 31. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L199` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L199) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L199)

```diff
-           ioLI: function(MM, rM) {
+           qQ8T: function(VV, eV) {
```

#### 32. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L202` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L202) · [Before (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L202)

```diff
-           h7uG: function() {
+           jvle: function() {
```

#### 33. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L265)

```diff
-       return bM = MM, wM = MM.exports, eM = rM, mM = null, hM = null, wM.mo7Q(), wM
+       return AV = VV, NV = VV.exports, PV = eV, vV = null, kV = null, NV.uGPZ(), NV
```

#### 34. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L289` → after: `L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L289) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L289)

```diff
-           if (!MM.ok) throw new Error(`failed to fetch Wasm: ${MM.status} ${MM.statusText} fetching '${MM.url}'`);
+           if (!VV.ok) throw new Error(`failed to fetch Wasm: ${VV.status} ${VV.statusText} fetching '${VV.url}'`);
```

#### 35. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L320-L321` → after: `L320-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L320-L321) · [Before (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L320-L321)

```diff
-     var WM = iM(3188),
-       sM = iM(7116);
+     var RV = xV(3196),
+       gV = xV(7178);
```

#### 36. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L325` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L325) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L325)

```diff
-         super((0, WM.B)(MM, rM), {
+         super((0, RV.D)(VV, eV), {
```

#### 37. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L344` → after: `L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplay.js#L344) · [Before (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplay.js#L344)

```diff
-           await rM, kM ??= (0, WM.E)(new iM.U(iM(64130)), (0, sM.b)("bloxd_wasm_replay"));
+           await eV, iV ??= (0, RV.G)(new xV.U(xV(64518)), (0, gV.e)("bloxd_wasm_replay"));
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d)

- **File**: `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (102 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d)

#### 1. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L4)

```diff
-   37913: (MM, rM, iM) => {
+   38165: (VV, eV, xV) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L7)

```diff
-       h: () => mM
+       e: () => vV
```

#### 3. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L9-L11)

```diff
-     var OM = iM(625),
-       SM = iM(30),
-       jM = iM(37872);
+     var JV = xV(657),
+       YV = xV(40),
+       UV = xV(38125);
```

#### 4. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L24)

```diff
-         QM = await Promise.race([(async () => await SM.f.setItem(PM, iM) && SM.f.setItem(aM, jM))(), (0, OM.Q)(zM).then((() => !1))]);
+         nV = await Promise.race([(async () => await YV.i.setItem(pV, xV) && YV.i.setItem(yV, UV))(), (0, JV.R)(wV).then((() => !1))]);
```

#### 5. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L28)

```diff
-         ML: QM
+         ZZ: nV
```

#### 6. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L30)

```diff
-       SM.k.setItem(nM, LM)
+       YV.q.setItem(QV, ZV)
```

#### 7. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L34-L35` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L34-L35) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L34-L35)

```diff
-       const rM = SM.k.getItem(nM);
-       null !== rM && SM.k.removeItem(nM);
+       const eV = YV.q.getItem(QV);
+       null !== eV && YV.q.removeItem(QV);
```

#### 8. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L37)

```diff
-         OM = await SM.f.getItem(PM),
+         JV = await YV.i.getItem(pV),
```

#### 9. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L41-L42` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L41-L42) · [Before (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L41-L42)

```diff
-       if (null !== OM && (LM || ("number" !== typeof OM || iM - OM > QM)) && (mM = zM && LM && rM.ML ? await SM.f.getItem(aM) : null, await Promise.all([SM.f.removeItem(PM), SM.f.removeItem(aM)])), !zM) return null;
-       if ((null === (MM = mM) || void 0 === MM ? void 0 : MM.at) !== rM.at) throw new Error(jM.c.replayNotKept.text);
+       if (null !== JV && (ZV || ("number" !== typeof JV || xV - JV > nV)) && (vV = wV && ZV && eV.ZZ ? await YV.i.getItem(yV) : null, await Promise.all([YV.i.removeItem(pV), YV.i.removeItem(yV)])), !wV) return null;
+       if ((null === (VV = vV) || void 0 === VV ? void 0 : VV.at) !== eV.at) throw new Error(UV.b.replayNotKept.text);
```

#### 10. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L49)

```diff
-   37905: (MM, rM, iM) => {
+   38161: (VV, eV, xV) => {
```

#### 11. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L65)

```diff
-   37872: (MM, rM, iM) => {
+   38125: (VV, eV, xV) => {
```

#### 12. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L67-L69` → after: `L67-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L67-L69) · [Before (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L67-L69)

```diff
-       c: () => aM,
-       d: () => QM,
-       f: () => nM
+       b: () => yV,
+       f: () => nV,
+       j: () => QV
```

#### 13. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L71)

```diff
-     var OM = iM(22);
+     var JV = xV(32);
```

#### 14. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L173-L174` → after: `L173-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L173-L174) · [Before (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L173-L174)

```diff
-       const iM = null !== (rM = MM.timeoutMs) && void 0 !== rM ? rM : "Error" === MM.type ? SM : jM;
-       OM.i.Tz("showBottomMessage", {
+       const xV = null !== (eV = VV.timeoutMs) && void 0 !== eV ? eV : "Error" === VV.type ? YV : UV;
+       JV.h.QZ("showBottomMessage", {
```

#### 15. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L181` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L181) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L181)

```diff
-   37926: (MM, rM, iM) => {
+   38172: (VV, eV, xV) => {
```

#### 16. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L237` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L237) · [Before (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L237)

```diff
-   37935: (MM, rM, iM) => {
+   38174: (VV, eV, xV) => {
```

#### 17. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L239-L241` → after: `L239-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L239-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L239-L241) · [Before (L239-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L239-L241)

```diff
-       c: () => QM,
-       f: () => LM,
-       g: () => zM
+       d: () => nV,
+       g: () => ZV,
+       k: () => wV
```

#### 18. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L243-L245` → after: `L243-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L243-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L243-L245) · [Before (L243-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L243-L245)

```diff
-     var OM = iM(19),
-       SM = iM(22),
-       jM = iM(37926);
+     var JV = xV(27),
+       YV = xV(32),
+       UV = xV(38172);
```

#### 19. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L258)

```diff
-       SM.i.Tz("replayViewer|uiVisibilityChanged")
+       YV.h.QZ("replayViewer|uiVisibilityChanged")
```

#### 20. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L269` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L269) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L269)

```diff
-       }, "nametag" === MM && OM.d.set({
+       }, "nametag" === VV && JV.b.set({
```

#### 21. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L275)

```diff
-       PM = aM(), OM.d.set({
+       pV = yV(), JV.b.set({
```

#### 22. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L280` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L280) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L280)

```diff
-   40338: (MM, rM, iM) => {
+   40479: (VV, eV, xV) => {
```

#### 23. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L282)

```diff
-       c: () => RM
+       b: () => GV
```

#### 24. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L284-L287` → after: `L284-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L284-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L284-L287) · [Before (L284-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L284-L287)

```diff
-     var OM = iM(1845),
-       SM = iM(1429),
-       jM = iM(44),
-       aM = iM(1116),
+     var JV = xV(1846),
+       YV = xV(1439),
+       UV = xV(62),
+       yV = xV(1146),
```

#### 25. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L289-L290` → after: `L289-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L289-L290) · [Before (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L289-L290)

```diff
-       nM = iM(1520),
-       QM = iM(83);
+       QV = xV(1551),
+       nV = xV(99);
```

#### 26. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L295` → after: `L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L295) · [Before (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L295)

```diff
-       return "webm" === MM ? zM : LM
+       return "webm" === VV ? wV : ZV
```

#### 27. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L307` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L307) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L307)

```diff
-     var JM = iM(1303);
+     var bV = xV(1321);
```

#### 28. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L376` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L376) · [Before (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L376)

```diff
-             children: `Your device does not support exporting. Try recording with an external software like ${MM}.`
+             children: `Your device does not support exporting. Try recording with an external software like ${VV}.`
```

#### 29. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L379` → after: `L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L379) · [Before (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L379)

```diff
-             children: (0, JM.jsx)(nM.J, {
+             children: (0, bV.jsx)(QV.E, {
```

#### 30. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L451` → after: `L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L451) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L451)

```diff
-           children: [(0, JM.jsx)(nM.p, {
+           children: [(0, bV.jsx)(QV.m, {
```

#### 31. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L461` → after: `L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L461) · [Before (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L461)

```diff
-           }), (0, JM.jsx)(nM.J, {
+           }), (0, bV.jsx)(QV.E, {
```

#### 32. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L471-L473` → after: `L471-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L471-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L471-L473) · [Before (L471-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L471-L473)

```diff
-     var UM = iM(5265),
-       GM = iM(37926),
-       CM = iM(37935);
+     var tV = xV(5353),
+       FV = xV(38172),
+       TV = xV(38174);
```

#### 33. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L478)

```diff
-         const MM = (0, CM.c)();
+         const VV = (0, TV.d)();
```

#### 34. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L512` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L512) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L512)

```diff
-     var tM = iM(40118);
+     var XV = xV(40285);
```

#### 35. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L516` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L516) · [Before (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L516)

```diff
-       MM.holdInput(!1), (0, tM.h)(!1)
+       VV.holdInput(!1), (0, XV.f)(!1)
```

#### 36. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L520` → after: `L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L520) · [Before (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L520)

```diff
-       if ((0, tM.d)() || gM) return;
+       if ((0, XV.c)() || MV) return;
```

#### 37. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L562` → after: `L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L562) · [Before (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L562)

```diff
-       const zM = null !== (rM = null === (iM = jM.startFailure) || void 0 === iM ? void 0 : iM.call(jM)) && void 0 !== rM ? rM : null;
+       const wV = null !== (eV = null === (xV = UV.startFailure) || void 0 === xV ? void 0 : xV.call(UV)) && void 0 !== eV ? eV : null;
```

#### 38. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L568` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L568) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L568)

```diff
-           return !(0, tM.d)() && ((0, tM.h)(!0), MM.holdInput(!0), !0)
+           return !(0, XV.c)() && ((0, XV.f)(!0), VV.holdInput(!0), !0)
```

#### 39. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L572` → after: `L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L572) · [Before (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L572)

```diff
-         LM = await wM(aM.includeUi, (() => jM.canvas()), jM.zk)
+         ZV = await NV(yV.includeUi, (() => UV.canvas()), UV.KD)
```

#### 40. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L585` → after: `L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L585) · [Before (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L585)

```diff
-         hM = jM.playbackSpeed(), jM.closeViewer(), jM.setPlaybackSpeed(1), jM.pause(), jM.seekToTick(null !== PM && void 0 !== PM ? PM : 0);
+         kV = UV.playbackSpeed(), UV.closeViewer(), UV.setPlaybackSpeed(1), UV.pause(), UV.seekToTick(null !== pV && void 0 !== pV ? pV : 0);
```

#### 41. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L593` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L593) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L593)

```diff
-           return null !== iM && void 0 !== iM ? iM : null
+           return null !== xV && void 0 !== xV ? xV : null
```

#### 42. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L600` → after: `L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L600) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L600)

```diff
-           if (!rM) throw new Error(`No MediaRecorder mime type available for ${MM}`);
+           if (!eV) throw new Error(`No MediaRecorder mime type available for ${VV}`);
```

#### 43. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L643` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L643) · [Before (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L643)

```diff
-         const zM = null !== (CM = null === (RM = jM.playbackFailure) || void 0 === RM ? void 0 : RM.call(jM)) && void 0 !== CM ? CM : null;
+         const wV = null !== (TV = null === (GV = UV.playbackFailure) || void 0 === GV ? void 0 : GV.call(UV)) && void 0 !== TV ? TV : null;
```

#### 44. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L646` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L646) · [Before (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L646)

```diff
-           subtitle: `${zM} Nothing was saved.`
+           subtitle: `${wV} Nothing was saved.`
```

#### 45. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L655-L656` → after: `L655-L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L655-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L655-L656) · [Before (L655-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L655-L656)

```diff
-           if (MM) return `${MM.replace(/\.bloxdreplay$/i,"")}.${iM}`;
-           return `bloxd-replay-${Date.now()}.${iM}`
+           if (VV) return `${VV.replace(/\.bloxdreplay$/i,"")}.${xV}`;
+           return `bloxd-replay-${Date.now()}.${xV}`
```

#### 46. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L689` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L689) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L689)

```diff
-   5265: (MM, rM, iM) => {
+   5353: (VV, eV, xV) => {
```

#### 47. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L696-L698` → after: `L696-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L696-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L696-L698) · [Before (L696-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L696-L698)

```diff
-     var OM, SM = iM(5269),
-       jM = iM(3839),
-       aM = iM(5026);
+     var JV, YV = xV(5357),
+       UV = xV(3886),
+       yV = xV(5137);
```

#### 48. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L703` → after: `L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L703) · [Before (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L703)

```diff
-       if (PM.ctx || !PM.usingWebAudio || "undefined" === typeof AudioContext || !(0, aM.k)()) return;
+       if (pV.ctx || !pV.usingWebAudio || "undefined" === typeof AudioContext || !(0, yV.i)()) return;
```

#### 49. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L715` → after: `L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L715) · [Before (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L715)

```diff
-       SM.gain.setValueAtTime(PM._muted ? 0 : null !== (MM = PM._volume) && void 0 !== MM ? MM : 1, OM.currentTime), SM.connect(OM.destination), PM.ctx = OM, PM.masterGain = SM, null === (rM = PM._setup) || void 0 === rM || rM.call(PM)
+       YV.gain.setValueAtTime(pV._muted ? 0 : null !== (VV = pV._volume) && void 0 !== VV ? VV : 1, JV.currentTime), YV.connect(JV.destination), pV.ctx = JV, pV.masterGain = YV, null === (eV = pV._setup) || void 0 === eV || eV.call(pV)
```

#### 50. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L742` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L742) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L742)

```diff
-     }, (0, aM.k)() && (PM._unlockAudio = () => {
+     }, (0, yV.i)() && (pV._unlockAudio = () => {
```

#### 51. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L767` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L767) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L767)

```diff
-           } else "afterPaint" === OM && (OM = "queued", (0, jM.d)(rM.timeStamp, (() => {
+           } else "afterPaint" === JV && (JV = "queued", (0, UV.c)(eV.timeStamp, (() => {
```

#### 52. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L775` → after: `L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L775) · [Before (L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L775)

```diff
-       for (const jM of aM.e) document.addEventListener(jM, QM, {
+       for (const UV of yV.c) document.addEventListener(UV, nV, {
```

#### 53. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L809` → after: `L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L809) · [Before (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L809)

```diff
-   53658: (MM, rM, iM) => {
+   53866: (VV, eV, xV) => {
```

#### 54. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L811-L812` → after: `L811-L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L811-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L811-L812) · [Before (L811-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L811-L812)

```diff
-       c: () => OM,
-       e: () => SM
+       e: () => JV,
+       g: () => YV
```

#### 55. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L821` → after: `L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L821) · [Before (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L821)

```diff
-   63239: (MM, rM, iM) => {
+   63638: (VV, eV, xV) => {
```

#### 56. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L826-L831` → after: `L826-L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L826-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L826-L831) · [Before (L826-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L826-L831)

```diff
-     var OM = iM(37872),
-       SM = iM(37913),
-       jM = iM(37905),
-       aM = iM(37935),
-       PM = iM(5198),
-       nM = iM(53658);
+     var JV = xV(38125),
+       YV = xV(38165),
+       UV = xV(38161),
+       yV = xV(38174),
+       pV = xV(5297),
+       QV = xV(53866);
```

#### 57. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L833)

```diff
-       zM = new Set(["nh"]);
+       wV = new Set(["Xk"]);
```

#### 58. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L837` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L837) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L837)

```diff
-         this.deps = MM, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this … [truncated]
+         this.deps = VV, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this … [truncated]
```

#### 59. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L846` → after: `L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L846) · [Before (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L846)

```diff
-         return null !== this.lastView && this.lastView.state !== PM.hd.None
+         return null !== this.lastView && this.lastView.state !== pV.qd.None
```

#### 60. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L858` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L858) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L858)

```diff
-         return this.cropping ? OM.c.cropBusy.text : null
+         return this.cropping ? JV.b.cropBusy.text : null
```

#### 61. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L869` → after: `L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L869) · [Before (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L869)

```diff
-           if (!QM.setPlayback(!0)) throw new Error(OM.c.cantOpen.text);
+           if (!nV.setPlayback(!0)) throw new Error(JV.b.cantOpen.text);
```

#### 62. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L880` → after: `L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L880) · [Before (L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L880)

```diff
-         if (zM !== this.epoch && "reloading" !== LM) throw new Error(OM.c.coreStopped.text);
+         if (wV !== this.epoch && "reloading" !== ZV) throw new Error(JV.b.coreStopped.text);
```

#### 63. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L888-L893` → after: `L888-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L888-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L888-L893) · [Before (L888-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L888-L893)

```diff
-               case PM.Zc.ModuleTrap:
-                 return OM.c.coreStopped;
-               case PM.Zc.ModuleLoad:
-                 return OM.c.viewerLoadFailed;
-               case PM.Zc.TooLarge:
-                 return OM.c.cantOpen
+               case pV.fd.ModuleTrap:
+                 return JV.b.coreStopped;
+               case pV.fd.ModuleLoad:
+                 return JV.b.viewerLoadFailed;
+               case pV.fd.TooLarge:
+                 return JV.b.cantOpen
```

#### 64. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L899` → after: `L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L899) · [Before (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L899)

```diff
-         return this.rejectSave(new Error(OM.c.saveClosed.text)), this.fileName = null !== (iM = null !== (jM = rM.fileName) && void 0 !== jM ? jM : null === (aM = rM.fileHandle) || void 0 === aM ? void 0 : aM.name) && void 0 !== iM ? iM : null, this.fileHandle = null !== (nM = rM … [truncated]
+         return this.rejectSave(new Error(JV.b.saveClosed.text)), this.fileName = null !== (xV = null !== (UV = eV.fileName) && void 0 !== UV ? UV : null === (yV = eV.fileHandle) || void 0 === yV ? void 0 : yV.name) && void 0 !== xV ? xV : null, this.fileHandle = null !== (QV = eV … [truncated]
```

#### 65. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L907` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L907) · [Before (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L907)

```diff
-         this.holds.has("nh") || this.deps.client.play()
+         this.holds.has("Xk") || this.deps.client.play()
```

#### 66. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L913` → after: `L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L913) · [Before (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L913)

```diff
-         this.isOpen && this.pause(), this.hold("nh")
+         this.isOpen && this.pause(), this.hold("Xk")
```

#### 67. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L918` → after: `L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L918) · [Before (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L918)

```diff
-         null !== iM && (rM || MM < iM.bL) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(MM, rM)
+         null !== xV && (eV || VV < xV.iZ) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(VV, eV)
```

#### 68. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L928` → after: `L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L928) · [Before (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L928)

```diff
-         null !== MM && MM.state !== PM.hd.None && this.setCameraMode(nM.c[(nM.c.indexOf(MM.cameraMode) + 1) % nM.c.length])
+         null !== VV && VV.state !== pV.qd.None && this.setCameraMode(QV.e[(QV.e.indexOf(VV.cameraMode) + 1) % QV.e.length])
```

#### 69. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L946` → after: `L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L946) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L946)

```diff
-         return !(rM <= MM) && (null !== this.pendingSave ? (this.deps.notify(OM.c.saveBusy), !1) : !!this.deps.client.crop(MM, rM) && (this.cropAsked = !0, this.hold("crop"), !0))
+         return !(eV <= VV) && (null !== this.pendingSave ? (this.deps.notify(JV.b.saveBusy), !1) : !!this.deps.client.crop(VV, eV) && (this.cropAsked = !0, this.hold("crop"), !0))
```

#### 70. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L949` → after: `L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L949) · [Before (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L949)

```diff
-         return null !== this.pendingSave ? Promise.reject(new Error(OM.c.saveBusy.text)) : new Promise(((MM, rM) => {
+         return null !== this.pendingSave ? Promise.reject(new Error(JV.b.saveBusy.text)) : new Promise(((VV, eV) => {
```

#### 71. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L954` → after: `L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L954) · [Before (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L954)

```diff
-           this.pendingSave = iM, this.editsAtSave = this.edits, this.deps.client.save((0, nM.e)()).then((MM => {
+           this.pendingSave = xV, this.editsAtSave = this.edits, this.deps.client.save((0, QV.g)()).then((VV => {
```

#### 72. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L957` → after: `L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L957) · [Before (L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L957)

```diff
-             this.pendingSave === iM && this.rejectSave(MM instanceof Error ? MM : new Error(String(MM)))
+             this.pendingSave === xV && this.rejectSave(VV instanceof Error ? VV : new Error(String(VV)))
```

#### 73. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L975` → after: `L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L975) · [Before (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L975)

```diff
-         this.fileHandle = MM, this.fileName = null !== (iM = null !== (OM = null === MM || void 0 === MM ? void 0 : MM.name) && void 0 !== OM ? OM : rM) && void 0 !== iM ? iM : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this … [truncated]
+         this.fileHandle = VV, this.fileName = null !== (xV = null !== (JV = null === VV || void 0 === VV ? void 0 : VV.name) && void 0 !== JV ? JV : eV) && void 0 !== xV ? xV : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this … [truncated]
```

#### 74. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L978` → after: `L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L978) · [Before (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L978)

```diff
-         this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(OM.c.coreStopped.text)), this.rejectSave(new Error(OM.c.saveClosed.text)), this.lastView = null, this.deps.onChange()
+         this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(JV.b.coreStopped.text)), this.rejectSave(new Error(JV.b.saveClosed.text)), this.lastView = null, this.deps.onChange()
```

#### 75. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L984-L985` → after: `L984-L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L984-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L984-L985) · [Before (L984-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L984-L985)

```diff
-         this.lastView = OM, this.opening && null !== OM && OM.state !== PM.hd.None && OM.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, aM.f)()), this.cropAsked ? (this.cropAsked = !1, null !== OM && OM.state === PM.hd.Cropping ? this.crop … [truncated]
-         const jM = 0 === this.settleFrames && 0 === (null !== (MM = null === (rM = (iM = this.deps).meshPending) || void 0 === rM ? void 0 : rM.call(iM)) && void 0 !== MM ? MM : 0);
+         this.lastView = JV, this.opening && null !== JV && JV.state !== pV.qd.None && JV.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, yV.g)()), this.cropAsked ? (this.cropAsked = !1, null !== JV && JV.state === pV.qd.Cropping ? this.crop … [truncated]
+         const UV = 0 === this.settleFrames && 0 === (null !== (VV = null === (eV = (xV = this.deps).meshPending) || void 0 === eV ? void 0 : eV.call(xV)) && void 0 !== VV ? VV : 0);
```

#### 76. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L992` → after: `L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L992) · [Before (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L992)

```diff
-         (0, aM.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
+         (0, yV.g)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
```

#### 77. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L996` → after: `L996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L996) · [Before (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L996)

```diff
-           case PM.Zc.TooLarge:
+           case pV.fd.TooLarge:
```

#### 78. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L998-L999` → after: `L998-L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L998-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L998-L999) · [Before (L998-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L998-L999)

```diff
-           case PM.Zc.Open:
-           case PM.Zc.NothingStaged: {
+           case pV.fd.Open:
+           case pV.fd.NothingStaged: {
```

#### 79. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1001` → after: `L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1001) · [Before (L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1001)

```diff
-             const rM = (0, jM.h)(MM.version) ? OM.c.replayTooOld : OM.c.cantOpen;
+             const eV = (0, UV.e)(VV.version) ? JV.b.replayTooOld : JV.b.cantOpen;
```

#### 80. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1005-L1006` → after: `L1005-L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1005-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1005-L1006) · [Before (L1005-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1005-L1006)

```diff
-           case PM.Zc.Crop:
-             if (MM.code === PM.Xc.Busy) {
+           case pV.fd.Crop:
+             if (VV.code === pV.ed.Busy) {
```

#### 81. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1014` → after: `L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1014) · [Before (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1014)

```diff
-             this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(OM.c.cropFailed);
+             this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(JV.b.cropFailed);
```

#### 82. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1016-L1019` → after: `L1016-L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1016-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1016-L1019) · [Before (L1016-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1016-L1019)

```diff
-           case PM.Zc.ModuleTrap:
-           case PM.Zc.ModuleLoad:
-           case PM.Zc.Port:
-             this.moduleEnded(MM.reason === PM.Zc.ModuleTrap ? OM.c.coreStopped : OM.c.cantOpen);
+           case pV.fd.ModuleTrap:
+           case pV.fd.ModuleLoad:
+           case pV.fd.Port:
+             this.moduleEnded(VV.reason === pV.fd.ModuleTrap ? JV.b.coreStopped : JV.b.cantOpen);
```

#### 83. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1021` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1021) · [Before (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1021)

```diff
-           case PM.Zc.NotLive:
+           case pV.fd.NotLive:
```

#### 84. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1025` → after: `L1025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1025) · [Before (L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1025)

```diff
-             console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${MM.reason})`), this.seekAsked = !1, this.release("seek")
+             console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${VV.reason})`), this.seekAsked = !1, this.release("seek")
```

#### 85. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1037` → after: `L1037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1037) · [Before (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1037)

```diff
-         this.rejectSave(new Error(MM ? OM.c.saveBusy.text : "The replay couldn't be saved"))
+         this.rejectSave(new Error(VV ? JV.b.saveBusy.text : "The replay couldn't be saved"))
```

#### 86. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1043` → after: `L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1043) · [Before (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1043)

```diff
-         null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(OM.c.cropBusy.text)) : this.deps.notify(OM.c.cropBusy)
+         null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(JV.b.cropBusy.text)) : this.deps.notify(JV.b.cropBusy)
```

#### 87. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1068` → after: `L1068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1068) · [Before (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1068)

```diff
-   63231: (MM, rM, iM) => {
+   63636: (VV, eV, xV) => {
```

#### 88. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1074-L1077` → after: `L1074-L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1074-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1074-L1077) · [Before (L1074-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1074-L1077)

```diff
-     var OM = iM(40338),
-       SM = iM(63239),
-       jM = iM(5198),
-       aM = iM(2624);
+     var JV = xV(40479),
+       YV = xV(63638),
+       UV = xV(5297),
+       yV = xV(2665);
```

#### 89. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1084` → after: `L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1084) · [Before (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1084)

```diff
-       return (null === (rM = MM.view) || void 0 === rM ? void 0 : rM.state) === jM.hd.Cropping || MM.sQ.includes("crop")
+       return (null === (eV = VV.view) || void 0 === eV ? void 0 : eV.state) === UV.qd.Cropping || VV.hn.includes("crop")
```
