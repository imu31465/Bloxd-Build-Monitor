# Changed — Bundle Modifications Report (Part 048 / 058)

- **Updated at**: `2026-11-21T00:46 JST`
- **Part**: `48 / 58` (**400** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 047](part-047.md) · [Part 049 →](part-049.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (ad2avs.90d9e4dd → bbb6l5.0244a119 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (981 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226)

#### 258. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2281-L2283` → after: `L2320-L2322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2320-L2322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2320-L2322) · [Before (L2281-L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2281-L2283)

```diff
-         uz.anchor && (nz |= Zz.hc.Anchor, Yu[0] = uz.anchor[0], Yu[1] = uz.anchor[1], Yu[2] = uz.anchor[2]), void 0 !== uz.visible && (nz |= Zz.hc.Visible), uz.uvOffset && (nz |= Zz.hc.UvOffset, ku[0] = uz.uvOffset[0], ku[1] = uz.uvOffset[1]);
-         const iz = null !== (bz = uz.visibility) && void 0 !== bz ? bz : 1;
-         void 0 !== uz.visibility && (nz |= Zz.hc.Visibility), uz.scale && (nz |= Zz.hc.Scale, zb[0] = uz.scale[0], zb[1] = uz.scale[1], zb[2] = uz.scale[2]), 0 !== nz && (0, Zz.Le)(Ez, 0, zz, nz, uz.visible ? 1 : 0, Yu, ku, iz, zb)
+         Eq.anchor && (lq |= aq.cc.Anchor, qg[0] = Eq.anchor[0], qg[1] = Eq.anchor[1], qg[2] = Eq.anchor[2]), void 0 !== Eq.visible && (lq |= aq.cc.Visible), Eq.uvOffset && (lq |= aq.cc.UvOffset, Eg[0] = Eq.uvOffset[0], Eg[1] = Eq.uvOffset[1]);
+         const Oq = null !== (gq = Eq.visibility) && void 0 !== gq ? gq : 1;
+         void 0 !== Eq.visibility && (lq |= aq.cc.Visibility), Eq.scale && (lq |= aq.cc.Scale, gg[0] = Eq.scale[0], gg[1] = Eq.scale[1], gg[2] = Eq.scale[2]), 0 !== lq && (0, aq.Je)(Yq, 0, qq, lq, Eq.visible ? 1 : 0, qg, Eg, Oq, gg)
```

#### 259. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2287` → after: `L2326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2326) · [Before (L2287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2287)

```diff
-         uz && !(0, Zz.Ie)(uz, 0, zz) || this.liveMeshes.delete(zz)
+         Eq && !(0, aq.Fe)(Eq, 0, qq) || this.liveMeshes.delete(qq)
```

#### 260. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2336` → after: `L2375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2375) · [Before (L2336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2336)

```diff
-         const uz = `${zz.colour} ${zz.alpha}`;
+         const Eq = `${qq.colour} ${qq.alpha}`;
```

#### 261. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2378` → after: `L2417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2417) · [Before (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2378)

```diff
-         for (; bz < zz.length && (0, Zz.Se)(uz, 0, zz[bz]);) bz++;
+         for (; gq < qq.length && (0, aq.Pe)(Eq, 0, qq[gq]);) gq++;
```

#### 262. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2382` → after: `L2421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2421) · [Before (L2382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2382)

```diff
-           (Ez ? (0, Zz.Uf)(uz, 0, Ez.width, Ez.alpha, 1, Ez.endAtSolidFace ? 1 : 0) : (0, Zz.Uf)(uz, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
+           (Yq ? (0, aq.Vf)(Eq, 0, Yq.width, Yq.alpha, 1, Yq.endAtSolidFace ? 1 : 0) : (0, aq.Vf)(Eq, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
```

#### 263. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2385` → after: `L2424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2424) · [Before (L2385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2385)

```diff
-         void 0 !== nz && (0, Zz.Pf)(uz, 0, null !== nz && void 0 !== nz ? nz : 0, null === nz ? 1 : 0) && (this.pendingFar = void 0)
+         void 0 !== lq && (0, aq.Pf)(Eq, 0, null !== lq && void 0 !== lq ? lq : 0, null === lq ? 1 : 0) && (this.pendingFar = void 0)
```

#### 264. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2390` → after: `L2429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2429) · [Before (L2390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2390)

```diff
-         bz && Ez !== Zz.bd && (0, Zz.ag)(bz, 0, Ez, uz)
+         gq && Yq !== aq.gd && (0, aq.fg)(gq, 0, Yq, Eq)
```

#### 265. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2395` → after: `L2434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2434) · [Before (L2395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2395)

```diff
-         bz && Ez !== Zz.bd && ib(bz, Ez, uz)
+         gq && Yq !== aq.gd && xg(gq, Yq, Eq)
```

#### 266. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2411` → after: `L2450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2450) · [Before (L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2411)

```diff
-         return uz !== Zz.bd && 1 === this.api.queries.entityInteractable(uz)
+         return Eq !== aq.gd && 1 === this.api.queries.entityInteractable(Eq)
```

#### 267. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2424` → after: `L2463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2463) · [Before (L2424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2424)

```diff
-           return null !== zz && void 0 !== zz ? zz : null
+           return null !== qq && void 0 !== qq ? qq : null
```

#### 268. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2431` → after: `L2470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2470) · [Before (L2431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2431)

```diff
-         return Bu[0] = Zz.z.eye(zz, 0, 0), Bu[1] = Zz.z.eye(zz, 0, 1), Bu[2] = Zz.z.eye(zz, 0, 2), Bu
+         return eE[0] = aq.t.eye(qq, 0, 0), eE[1] = aq.t.eye(qq, 0, 1), eE[2] = aq.t.eye(qq, 0, 2), eE
```

#### 269. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2434` → after: `L2473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2473) · [Before (L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2434)

```diff
-         return Zz.z.cameraFar(this.api.apiView, 0)
+         return aq.t.cameraFar(this.api.apiView, 0)
```

#### 270. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2445` → after: `L2484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2484) · [Before (L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2445)

```diff
-         uz && bz !== Zz.bd && (0, Zz.ue)(uz, 0, bz)
+         Eq && gq !== aq.gd && (0, aq.qe)(Eq, 0, gq)
```

#### 271. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2450-L2452` → after: `L2489-L2491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2489-L2491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2489-L2491) · [Before (L2450-L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2450-L2452)

```diff
-         bz && Du(bz, 0, Wu.d.Chat, (0, qz.c)((0, Wu.h)({
-           zM: zz,
-           uM: uz
+         gq && sE(gq, 0, wE.b.Chat, (0, Sq.h)((0, wE.k)({
+           Hc: qq,
+           oc: Eq
```

#### 272. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2456` → after: `L2495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2495) · [Before (L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2456)

```diff
-         zz.length <= 119 && this.sendChat(`/${zz}`)
+         qq.length <= 119 && this.sendChat(`/${qq}`)
```

#### 273. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2464` → after: `L2503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2503) · [Before (L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2464)

```diff
-           Mz = nz.hO(zz, uz, bz),
+           xq = lq.lc(qq, Eq, gq),
```

#### 274. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2467-L2468` → after: `L2506-L2507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2506-L2507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2506-L2507) · [Before (L2467-L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2467-L2468)

```diff
-           const [Ez, iz, Hz] = [zz - tz.x, uz - tz.y, bz - tz.z], Oz = bb[nz.hO(Ez, iz, Hz)], pz = null === Oz || void 0 === Oz ? void 0 : Oz.positions.some((zz => zz.id === Mz && zz.x === tz.x && zz.y === tz.y && zz.z === tz.z));
-           for (const zz of (pz && Oz ? Oz : tz.main).positions) nz.hO(Ez + zz.x, iz + zz.y, Hz + zz.z) === zz.id && lz(Ez + zz.x, iz + zz.y, Hz + zz.z, 0, zz.id)
+           const [Yq, Oq, cq] = [qq - Aq.x, Eq - Aq.y, gq - Aq.z], uq = lg[lq.lc(Yq, Oq, cq)], Bq = null === uq || void 0 === uq ? void 0 : uq.positions.some((qq => qq.id === xq && qq.x === Aq.x && qq.y === Aq.y && qq.z === Aq.z));
+           for (const qq of (Bq && uq ? uq : Aq.main).positions) lq.lc(Yq + qq.x, Oq + qq.y, cq + qq.z) === qq.id && mq(Yq + qq.x, Oq + qq.y, cq + qq.z, 0, qq.id)
```

#### 275. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2474` → after: `L2513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2513) · [Before (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2474)

```diff
-             lz(Ez, iz, Mz, pz.id, nz.hO(Ez, iz, Mz))
+             mq(Yq, Oq, xq, Bq.id, lq.lc(Yq, Oq, xq))
```

#### 276. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2478` → after: `L2517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2517) · [Before (L2478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2478)

```diff
-           let tz = nz.hO(zz, uz + 1, bz);
+           let Aq = lq.lc(qq, Eq + 1, gq);
```

#### 277. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2490` → after: `L2529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2529) · [Before (L2490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2490)

```diff
-         return 0 !== nz && 0 !== iz && Ez.blockRootId(zz) === Ez.blockRootId(uz) ? lz && bz !== iz ? iz : void 0 : 0 === iz || !lz && 0 !== bz ? lz ? 0 : void 0 : iz
+         return 0 !== lq && 0 !== Oq && Yq.blockRootId(qq) === Yq.blockRootId(Eq) ? mq && gq !== Oq ? Oq : void 0 : 0 === Oq || !mq && 0 !== gq ? mq ? 0 : void 0 : Oq
```

#### 278. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2493` → after: `L2532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2532) · [Before (L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2493)

```diff
-     const Mb = Zz.rc + Zz.sc * Zz.Bc.BYTES,
+     const cg = aq.pc + aq.rc * aq.Ac.BYTES,
```

#### 279. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2498-L2499` → after: `L2537-L2538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2537-L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2537-L2538) · [Before (L2498-L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2498-L2499)

```diff
-         gO: 0,
-         Rp: null,
+         ac: 0,
+         eA: null,
```

#### 280. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2503` → after: `L2542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2542) · [Before (L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2503)

```diff
-         get: () => () => Zz.id
+         get: () => () => aq.rd
```

#### 281. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2515` → after: `L2554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2554) · [Before (L2515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2515)

```diff
-         this.deps = zz, this.pl = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(Zz.sc), this.ids = new Uint16Array(Zz.sc), this.amounts = new Uint16Array(Zz.sc), this.attrRead = new Float64Array(Zz.sc).fill(-1 … [truncated]
+         this.deps = qq, this.Uq = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(aq.rc), this.ids = new Uint16Array(aq.rc), this.amounts = new Uint16Array(aq.rc), this.attrRead = new Float64Array(aq.rc).fill(-1 … [truncated]
```

#### 282. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2531` → after: `L2570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2570) · [Before (L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2531)

```diff
-         return Number.isInteger(zz) && zz >= 0 && zz < this.len && 0 !== this.ids[zz] && null !== (uz = this.facades[zz]) && void 0 !== uz ? uz : null
+         return Number.isInteger(qq) && qq >= 0 && qq < this.len && 0 !== this.ids[qq] && null !== (Eq = this.facades[qq]) && void 0 !== Eq ? Eq : null
```

#### 283. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2538` → after: `L2577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2577) · [Before (L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2538)

```diff
-         for (let uz = 0; uz < Math.min(Zz.ud, this.len); uz++) zz.push(this.slot(uz));
+         for (let Eq = 0; Eq < Math.min(aq.Bd, this.len); Eq++) qq.push(this.slot(Eq));
```

#### 284. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2543` → after: `L2582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2582) · [Before (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2543)

```diff
-         for (let uz = 0; uz < Math.min(Zz.ud - Zz.k, this.len); uz++) 0 === this.ids[uz] && zz++;
+         for (let Eq = 0; Eq < Math.min(aq.Bd - aq.g, this.len); Eq++) 0 === this.ids[Eq] && qq++;
```

#### 285. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2548` → after: `L2587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2587) · [Before (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2548)

```diff
-         for (let Ez = 0; Ez < Math.min(Zz.ud, this.len); Ez++) {
+         for (let Yq = 0; Yq < Math.min(aq.Bd, this.len); Yq++) {
```

#### 286. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2551` → after: `L2590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2590) · [Before (L2551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2551)

```diff
-           if ((null === nz || void 0 === nz ? void 0 : nz.name) === zz) uz += null !== (bz = nz.amount) && void 0 !== bz ? bz : 1
+           if ((null === lq || void 0 === lq ? void 0 : lq.name) === qq) Eq += null !== (gq = lq.amount) && void 0 !== gq ? gq : 1
```

#### 287. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2557` → after: `L2596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2596) · [Before (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2557)

```diff
-         return null !== (uz = this.instances[zz]) && void 0 !== uz ? uz : 0
+         return null !== (Eq = this.instances[qq]) && void 0 !== Eq ? Eq : 0
```

#### 288. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2578` → after: `L2617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2617) · [Before (L2578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2578)

```diff
-         this.pl[0] = zz, this.pl[1] = uz, this.pl[2] = bz, this.version++
+         this.Uq[0] = qq, this.Uq[1] = Eq, this.Uq[2] = gq, this.version++
```

#### 289. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2582-L2584` → after: `L2621-L2623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2621-L2623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2621-L2623) · [Before (L2582-L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2582-L2584)

```diff
-           uz = Zz.z.inventoryViewPtr(zz, 0),
-           bz = Zz.z.inventoryVersion(zz, 0),
-           Ez = Zz.z.selectedSlot(zz, 0);
+           Eq = aq.t.inventoryViewPtr(qq, 0),
+           gq = aq.t.inventoryVersion(qq, 0),
+           Yq = aq.t.selectedSlot(qq, 0);
```

#### 290. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2586` → after: `L2625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2625) · [Before (L2586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2586)

```diff
-         const nz = Zz.z.slotIcon(zz, 0);
+         const lq = aq.t.slotIcon(qq, 0);
```

#### 291. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2590` → after: `L2629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2629) · [Before (L2590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2590)

```diff
-           lz = iz ? Math.min(iz.getUint32(0, !0), Zz.sc) : 0;
+           mq = Oq ? Math.min(Oq.getUint32(0, !0), aq.rc) : 0;
```

#### 292. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2593-L2595` → after: `L2632-L2634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2632-L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2632-L2634) · [Before (L2593-L2595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2593-L2595)

```diff
-         for (let tz = 0; tz < Zz.sc; tz++) {
-           const zz = Zz.rc + tz * Zz.Bc.BYTES,
-             uz = null !== iz && tz < lz ? Zz.Bc.item(iz, zz) : 0;
+         for (let Aq = 0; Aq < aq.rc; Aq++) {
+           const qq = aq.pc + Aq * aq.Ac.BYTES,
+             Eq = null !== Oq && Aq < mq ? aq.Ac.item(Oq, qq) : 0;
```

#### 293. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2600-L2601` → after: `L2639-L2640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2639-L2640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2639-L2640) · [Before (L2600-L2601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2600-L2601)

```diff
-           const bz = Zz.Bc.amount(iz, zz),
-             Ez = Zz.Bc.attrVersion(iz, zz);
+           const gq = aq.Ac.amount(Oq, qq),
+             Yq = aq.Ac.attrVersion(Oq, qq);
```

#### 294. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2637` → after: `L2676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2676) · [Before (L2637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2637)

```diff
-           tz += 8 + (0, dz.ie)(uz);
+           Aq += 8 + (0, Wq.Ce)(Eq);
```

#### 295. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2663-L2664` → after: `L2702-L2703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2702-L2703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2702-L2703) · [Before (L2663-L2664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2663-L2664)

```diff
-           Mz = lz === Zz.id ? Zz.Sb : null !== (nz = null === (iz = this.extras()) || void 0 === iz ? void 0 : iz[1]) && void 0 !== nz ? nz : Zz.Sb;
-         return this.settle(lz), Mz === Zz.Sb ? null : Mz
+           xq = mq === aq.rd ? aq.Ib : null !== (lq = null === (Oq = this.extras()) || void 0 === Oq ? void 0 : Oq[1]) && void 0 !== lq ? lq : aq.Ib;
+         return this.settle(mq), xq === aq.Ib ? null : xq
```

#### 296. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2691` → after: `L2730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2730) · [Before (L2691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2691)

```diff
-         const Mz = iz === Zz.id ? null : this.extras();
+         const xq = Oq === aq.rd ? null : this.extras();
```

#### 297. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2695-L2696` → after: `L2734-L2735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2734-L2735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2734-L2735) · [Before (L2695-L2696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2695-L2696)

```diff
-             gO: zz,
-             Rp: uz === Zz.Sb ? null : uz,
+             ac: qq,
+             eA: Eq === aq.Ib ? null : Eq,
```

#### 298. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2719` → after: `L2758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2758) · [Before (L2719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2719)

```diff
-           if (lz.length > 1024) return iz(new Error(`The crafting station ${zz}'s name is over 1024 bytes`)), null;
+           if (mq.length > 1024) return Oq(new Error(`The crafting station ${qq}'s name is over 1024 bytes`)), null;
```

#### 299. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2725-L2726` → after: `L2764-L2765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2764-L2765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2764-L2765) · [Before (L2725-L2726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2725-L2726)

```diff
-           tz = nz.queries.craftingView(null !== (Ez = null === lz || void 0 === lz ? void 0 : lz.length) && void 0 !== Ez ? Ez : 0, Mz ? uz : 0, Mz ? bz : 0);
-         return tz < Zz.rb.BYTES ? (nz.reportCorruption(`crafting_view's answer of ${tz} bytes`), null) : nz.memoryData(nz.scratch(), tz, 1, "crafting_view's answer")
+           Aq = lq.queries.craftingView(null !== (Yq = null === mq || void 0 === mq ? void 0 : mq.length) && void 0 !== Yq ? Yq : 0, xq ? Eq : 0, xq ? gq : 0);
+         return Aq < aq.mb.BYTES ? (lq.reportCorruption(`crafting_view's answer of ${Aq} bytes`), null) : lq.memoryData(lq.scratch(), Aq, 1, "crafting_view's answer")
```

#### 300. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2739-L2740` → after: `L2778-L2779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2778-L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2778-L2779) · [Before (L2739-L2740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2739-L2740)

```diff
-         if (zz === Zz.gd)(0, yu.d)();
-         else if (zz !== Zz.id) {
+         if (qq === aq.od)(0, FE.b)();
+         else if (qq !== aq.rd) {
```

#### 301. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2743-L2744` → after: `L2782-L2783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2782-L2783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2782-L2783) · [Before (L2743-L2744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2743-L2744)

```diff
-             return (0, yu.d)(), (0, Zz.jg)(zz, uz, bz)
-           }(uz, 0, zz) || this.deps.onError(new Error(`Sync op ${zz}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
+             return (0, FE.b)(), (0, aq.qg)(qq, Eq, gq)
+           }(Eq, 0, qq) || this.deps.onError(new Error(`Sync op ${qq}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
```

#### 302. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2746` → after: `L2785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2785) · [Before (L2746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2746)

```diff
-         return this.stopped || this.refresh(), zz !== Zz.id
+         return this.stopped || this.refresh(), qq !== aq.rd
```

#### 303. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2753` → after: `L2792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2792) · [Before (L2753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2753)

```diff
-       sb = 1.2 * Zu.e.Gw,
+       yg = 1.2 * aE.c.ZH,
```

#### 304. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2761` → after: `L2800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2800) · [Before (L2761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2761)

```diff
-       return uz || (vb.size >= 64 && vb.clear(), uz = rb.encode(`{"emitRate":${zz}}`), vb.set(zz, uz)), uz
+       return Eq || (hg.size >= 64 && hg.clear(), Eq = tg.encode(`{"emitRate":${qq}}`), hg.set(qq, Eq)), Eq
```

#### 305. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2765` → after: `L2804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2804) · [Before (L2765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2765)

```diff
-       return Number.isFinite(zz) && zz > 0 ? zz : 0
+       return Number.isFinite(qq) && qq > 0 ? qq : 0
```

#### 306. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2781` → after: `L2820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2820) · [Before (L2781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2781)

```diff
-       return zz.length > Zz.Ed.MaxOpts ? (bz(new Error(`${uz}'s particle opts are over ${Zz.Ed.MaxOpts} bytes of JSON`)), null) : zz
+       return qq.length > aq.Md.MaxOpts ? (gq(new Error(`${Eq}'s particle opts are over ${aq.Md.MaxOpts} bytes of JSON`)), null) : qq
```

#### 307. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2805-L2806` → after: `L2844-L2845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2844-L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2844-L2845) · [Before (L2805-L2806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2805-L2806)

```diff
-           nz = null !== (bz = uz.half) && void 0 !== bz ? bz : Xb;
-         if (!Ez || this.live >= Zz.Ed.MaxLiveKeys || this.nextKey > Zz.Ed.MaxKey || !Ab(uz.pos, nz)) return Pb;
+           lq = null !== (gq = Eq.half) && void 0 !== gq ? gq : Pg;
+         if (!Yq || this.live >= aq.Md.MaxLiveKeys || this.nextKey > aq.Md.MaxKey || !ig(Eq.pos, lq)) return Mg;
```

#### 308. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2812` → after: `L2851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2851) · [Before (L2812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2812)

```diff
-               Bp: zz.Bp,
+               WB: qq.WB,
```

#### 309. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2820-L2822` → after: `L2859-L2861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2859-L2861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2859-L2861) · [Before (L2820-L2822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2820-L2822)

```diff
-               gravity: null !== (uz = zz.gravity) && void 0 !== uz ? uz : Xb,
-               dir1: null !== (bz = zz.dir1) && void 0 !== bz ? bz : wb,
-               dir2: null !== (Ez = zz.dir2) && void 0 !== Ez ? Ez : wb,
+               gravity: null !== (Eq = qq.gravity) && void 0 !== Eq ? Eq : Pg,
+               dir1: null !== (gq = qq.dir1) && void 0 !== gq ? gq : og,
+               dir2: null !== (Yq = qq.dir2) && void 0 !== Yq ? Yq : og,
```

#### 310. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2828` → after: `L2867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2867) · [Before (L2828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2828)

```diff
-         return lz && (0, Zz.hf)(Ez, 0, iz, 0, Zz.Ed.PresetNone, 0, ob, Nb, lz) ? (this.nextKey++, this.live++, this.started = !0, new ab(this, this.session, iz, zz, nz)) : Pb
+         return mq && (0, aq.gf)(Yq, 0, Oq, 0, aq.Md.PresetNone, 0, rg, vg, mq) ? (this.nextKey++, this.live++, this.started = !0, new zg(this, this.session, Oq, qq, lq)) : Mg
```

#### 311. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2840` → after: `L2879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2879) · [Before (L2840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2840)

```diff
-         nz && (0, Zz.cf)(uz, 0, 0, Zz.Ed.PresetNone, Zz.Ed.HasBox, 0, ob, Nb, nz)
+         lq && (0, aq.af)(Eq, 0, 0, aq.Md.PresetNone, aq.Md.HasBox, 0, rg, vg, lq)
```

#### 312. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2844-L2845` → after: `L2883-L2884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2883-L2884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2883-L2884) · [Before (L2844-L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2844-L2845)

```diff
-           nz = Math.min(Math.floor(bz), Zz.Ed.MaxBurst);
-         if (!Ez || !Object.hasOwn(Zz.kc, zz) || !(nz > 0)) return;
+           lq = Math.min(Math.floor(gq), aq.Md.MaxBurst);
+         if (!Yq || !Object.hasOwn(aq.gc, qq) || !(lq > 0)) return;
```

#### 313. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2848` → after: `L2887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2887) · [Before (L2848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2848)

```diff
-         Number.isFinite(ob[0] + ob[1] + ob[2]) && (0, Zz.cf)(Ez, 0, 0, Zz.kc[zz], Zz.Ed.HasBox, nz, ob, Nb, fb)
+         Number.isFinite(rg[0] + rg[1] + rg[2]) && (0, aq.af)(Yq, 0, 0, aq.gc[qq], aq.Md.HasBox, lq, rg, vg, Qg)
```

#### 314. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2853` → after: `L2892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2892) · [Before (L2853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2853)

```diff
-         return this.started = !1, this.nextKey = 1, this.live = 0, !zz || (0, Zz.if)(zz, 0)
+         return this.started = !1, this.nextKey = 1, this.live = 0, !qq || (0, aq.kf)(qq, 0)
```

#### 315. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2860` → after: `L2899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2899) · [Before (L2860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2860)

```diff
-         bz && (0, Zz.mf)(bz, 0, uz) && this.live--
+         gq && (0, aq.of)(gq, 0, Eq) && this.live--
```

#### 316. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2877` → after: `L2916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2916) · [Before (L2877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2877)

```diff
-           Ab(zz, this.half) && (0, Zz.of)(bz, 0, this.key, Zz.Ed.HasBox, ob, Nb, fb)
+           ig(qq, this.half) && (0, aq.sf)(gq, 0, this.key, aq.Md.HasBox, rg, vg, Qg)
```

#### 317. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2883` → after: `L2922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2922) · [Before (L2883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2883)

```diff
-         uz && bz !== this.rate && (0, Zz.of)(uz, 0, this.key, 0, Xb, Xb, xb(bz)) && (this.rate = bz, this.emitted ||= bz > 0)
+         Eq && gq !== this.rate && (0, aq.sf)(Eq, 0, this.key, 0, Pg, Pg, ng(gq)) && (this.rate = gq, this.emitted ||= gq > 0)
```

#### 318. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2887-L2888` → after: `L2926-L2927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2926-L2927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2926-L2927) · [Before (L2887-L2888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2887-L2888)

```diff
-           bz = Math.min(Math.floor(zz), Zz.Ed.MaxBurst);
-         uz && bz > 0 && (0, Zz.cf)(uz, 0, this.key, Zz.Ed.PresetNone, 0, bz, Xb, Xb, fb) && (this.emitted = !0)
+           gq = Math.min(Math.floor(qq), aq.Md.MaxBurst);
+         Eq && gq > 0 && (0, aq.af)(Eq, 0, this.key, aq.Md.PresetNone, 0, gq, Pg, Pg, Qg) && (this.emitted = !0)
```

#### 319. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2892` → after: `L2931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2931) · [Before (L2892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2892)

```diff
-           nz = Math.min(Math.floor(bz), Zz.Ed.MaxPoints, Math.floor(uz.length / 4));
+           lq = Math.min(Math.floor(gq), aq.Md.MaxPoints, Math.floor(Eq.length / 4));
```

#### 320. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2894-L2895` → after: `L2933-L2934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2933-L2934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2933-L2934) · [Before (L2894-L2895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2894-L2895)

```diff
-         const iz = new Uint8Array(uz.buffer, uz.byteOffset, nz * Zz.Ed.PointBytes);
-         (0, Zz.df)(Ez, 0, this.key, nz, zz, iz) && (this.emitted = !0)
+         const Oq = new Uint8Array(Eq.buffer, Eq.byteOffset, lq * aq.Md.PointBytes);
+         (0, aq.cf)(Yq, 0, this.key, lq, qq, Oq) && (this.emitted = !0)
```

#### 321. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2904` → after: `L2943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2943) · [Before (L2904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2904)

```diff
-         (0, Zz.of)(bz, 0, this.key, 0, Xb, Xb, Ez)
+         (0, aq.sf)(gq, 0, this.key, 0, Pg, Pg, Yq)
```

#### 322. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2908` → after: `L2947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2947) · [Before (L2908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2908)

```diff
-         this.stopped = !0, zz && (this.emitted ? (this.rate > 0 && (0, Zz.of)(zz, 0, this.key, 0, Xb, Xb, xb(0)), setTimeout((() => {
+         this.stopped = !0, qq && (this.emitted ? (this.rate > 0 && (0, aq.sf)(qq, 0, this.key, 0, Pg, Pg, ng(0)), setTimeout((() => {
```

#### 323. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2919` → after: `L2958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2958) · [Before (L2919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2919)

```diff
-     const Vb = cu.o,
+     const Sg = kE.l,
```

#### 324. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2930` → after: `L2969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2969) · [Before (L2930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2930)

```diff
-         if (zz !== Zz.bd && !rz(Ez[iz])) {
+         if (qq !== aq.gd && !Qq(Yq[Oq])) {
```

#### 325. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2945` → after: `L2984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2984) · [Before (L2945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2945)

```diff
-       return zz.length >= uz ? zz : new Int32Array(Math.max(uz, 2 * zz.length))
+       return qq.length >= Eq ? qq : new Int32Array(Math.max(Eq, 2 * qq.length))
```

#### 326. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2957-L2959` → after: `L2996-L2998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2996-L2998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2996-L2998) · [Before (L2957-L2959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2957-L2959)

```diff
-         for (let zz = 0; zz + Zz.ac.BYTES <= Mz;) {
-           const uz = Zz.ac.len(tz, zz);
-           Ez(Zz.ac.serverId(tz, zz), cb(tz, zz, uz)), zz += Zz.ac.BYTES + (0, dz.ie)(uz)
+         for (let qq = 0; qq + aq.Rb.BYTES <= xq;) {
+           const Eq = aq.Rb.len(Aq, qq);
+           Yq(aq.Rb.serverId(Aq, qq), kg(Aq, qq, Eq)), qq += aq.Rb.BYTES + (0, Wq.Ce)(Eq)
```

#### 327. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2967` → after: `L3006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3006) · [Before (L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2967)

```diff
-       const lz = Zz.ac.kind(zz, uz),
+       const mq = aq.Rb.kind(qq, Eq),
```

#### 328. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2970-L2974` → after: `L3009-L3013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3009-L3013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3009-L3013) · [Before (L2970-L2974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2970-L2974)

```diff
-       const tz = Zz.ac.variation(zz, uz),
-         Hz = Zz.ac.pose(zz, uz),
-         Oz = Zz.ac.meta(zz, uz),
-         pz = Zz.ac.mesh(zz, uz),
-         dz = 0 !== (Zz.ac.flags(zz, uz) & Zz.Zb.HasOpts),
+       const Aq = aq.Rb.variation(qq, Eq),
+         cq = aq.Rb.pose(qq, Eq),
+         uq = aq.Rb.meta(qq, Eq),
+         Bq = aq.Rb.mesh(qq, Eq),
+         Wq = 0 !== (aq.Rb.flags(qq, Eq) & aq.Qb.HasOpts),
```

#### 329. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2978-L2982` → after: `L3017-L3021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3017-L3021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3017-L3021) · [Before (L2978-L2982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2978-L2982)

```diff
-         variation: tz === Zz.ed ? void 0 : null !== (Ez = null !== (nz = null === Fz || void 0 === Fz ? void 0 : Fz[tz]) && void 0 !== nz ? nz : null === Fz || void 0 === Fz ? void 0 : Fz[0]) && void 0 !== Ez ? Ez : "default",
-         pose: Hz === Zz.qc ? void 0 : null !== (iz = Zz.Nb[Hz]) && void 0 !== iz ? iz : Zz.Nb[0],
-         metaInfo: Oz === Zz.qc ? void 0 : Zz.Tc[Oz],
-         meshKind: pz === Zz.qc ? void 0 : Zz.Pc[pz],
-         meshOpts: dz ? mb.decode(new Uint8Array(zz.buffer, zz.byteOffset + uz + Zz.ac.BYTES, bz)) : void 0
+         variation: Aq === aq.ld ? void 0 : null !== (Yq = null !== (lq = null === Nq || void 0 === Nq ? void 0 : Nq[Aq]) && void 0 !== lq ? lq : null === Nq || void 0 === Nq ? void 0 : Nq[0]) && void 0 !== Yq ? Yq : "default",
+         pose: cq === aq.oc ? void 0 : null !== (Oq = aq.Fb[cq]) && void 0 !== Oq ? Oq : aq.Fb[0],
+         metaInfo: uq === aq.oc ? void 0 : aq.Vc[uq],
+         meshKind: Bq === aq.oc ? void 0 : aq.Tc[Bq],
+         meshOpts: Wq ? pg.decode(new Uint8Array(qq.buffer, qq.byteOffset + Eq + aq.Rb.BYTES, gq)) : void 0
```

#### 330. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2989` → after: `L3028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3028) · [Before (L2989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2989)

```diff
-         this.deps = zz, this.wanted = 0, this.yM = !1, this.refused = !1
+         this.deps = qq, this.wanted = 0, this.Fc = !1, this.refused = !1
```

#### 331. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2992` → after: `L3031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3031) · [Before (L2992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2992)

```diff
-         return this.yM
+         return this.Fc
```

#### 332. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2995` → after: `L3034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3034) · [Before (L2995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2995)

```diff
-         this.wanted = uz ? this.wanted | zz : this.wanted & ~zz;
+         this.wanted = Eq ? this.wanted | qq : this.wanted & ~qq;
```

#### 333. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2997` → after: `L3036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3036) · [Before (L2997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2997)

```diff
-         if (bz === this.yM) return;
+         if (gq === this.Fc) return;
```

#### 334. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2999` → after: `L3038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3038) · [Before (L2999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2999)

```diff
-         null !== Ez ? (0, Zz.og)(Ez, 0, bz ? 1 : 0) ? (this.yM = bz, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.yM = !1
+         null !== Yq ? (0, aq.vg)(Yq, 0, gq ? 1 : 0) ? (this.Fc = gq, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.Fc = !1
```

#### 335. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3008` → after: `L3047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3047) · [Before (L3008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3008)

```diff
-         return this.complete || this.fill(), null !== (uz = this.entries.get("string" === typeof zz ? zz : String(zz))) && void 0 !== uz ? uz : null
+         return this.complete || this.fill(), null !== (Eq = this.entries.get("string" === typeof qq ? qq : String(qq))) && void 0 !== Eq ? Eq : null
```

#### 336. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3067` → after: `L3106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3106) · [Before (L3067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3067)

```diff
-     var Qb = bz(4564);
+     var Xg = gq(4625);
```

#### 337. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3070-L3071` → after: `L3109-L3110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3109-L3110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3109-L3110) · [Before (L3070-L3071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3070-L3071)

```diff
-       if ("message" !== zz.type || zz.zM !== Qb.Wb.NewClientOptions || zz.payloadKind !== dz.bc.Msgpack) return null;
-       const uz = (0, qz.b)(zz.payload);
+       if ("message" !== qq.type || qq.Hc !== Xg.ec.NewClientOptions || qq.payloadKind !== Wq.hc.Msgpack) return null;
+       const Eq = (0, Sq.e)(qq.payload);
```

#### 338. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3076` → after: `L3115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3115) · [Before (L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3076)

```diff
-       jb = bz(36103);
+       Cg = gq(36681);
```

#### 339. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3081-L3083` → after: `L3120-L3122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3120-L3122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3120-L3122) · [Before (L3081-L3083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3081-L3083)

```diff
-         case Zz.ee.ToggleMenu: {
-           const zz = Zz.R[uz];
-           lz.k.sK("toggleMenu", void 0 === zz ? "inventory" : `inventory|${zz}`);
+         case aq.ie.ToggleMenu: {
+           const qq = aq.J[Eq];
+           mq.i.TV("toggleMenu", void 0 === qq ? "inventory" : `inventory|${qq}`);
```

#### 340. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3086-L3087` → after: `L3125-L3126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3125-L3126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3125-L3126) · [Before (L3086-L3087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3086-L3087)

```diff
-         case Zz.ee.EditBoard:
-           lz.k.sK("EditBoard", {
+         case aq.ie.EditBoard:
+           mq.i.TV("EditBoard", {
```

#### 341. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3091-L3093` → after: `L3130-L3132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3130-L3132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3130-L3132) · [Before (L3091-L3093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3091-L3093)

```diff
-         case Zz.ee.EditCodeBlock:
-         case Zz.ee.ViewCodeBlock:
-           lz.k.sK("EditCodeBlock", {
+         case aq.ie.EditCodeBlock:
+         case aq.ie.ViewCodeBlock:
+           mq.i.TV("EditCodeBlock", {
```

#### 342. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3095` → after: `L3134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3134) · [Before (L3095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3095)

```diff
-             canChangePos: zz === Zz.ee.EditCodeBlock
+             canChangePos: qq === aq.ie.EditCodeBlock
```

#### 343. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3098-L3099` → after: `L3137-L3138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3137-L3138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3137-L3138) · [Before (L3098-L3099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3098-L3099)

```diff
-         case Zz.ee.EditCustomLobbyBlock:
-           lz.k.sK("EditCustomLobbyBlock", {
+         case aq.ie.EditCustomLobbyBlock:
+           mq.i.TV("EditCustomLobbyBlock", {
```

#### 344. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3103-L3104` → after: `L3142-L3143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3142-L3143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3142-L3143) · [Before (L3103-L3104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3103-L3104)

```diff
-         case Zz.ee.OpenIronChest:
-           lz.k.sK("OpenIronChest", {
+         case aq.ie.OpenIronChest:
+           mq.i.TV("OpenIronChest", {
```

#### 345. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3108-L3109` → after: `L3147-L3148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3147-L3148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3147-L3148) · [Before (L3108-L3109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3108-L3109)

```diff
-         case Zz.ee.EditNameTag:
-           lz.k.sK("EditNameTag", null !== (tz = null === (Hz = nz.yM()) || void 0 === Hz || null === (Oz = Hz.attributes.customAttributes) || void 0 === Oz ? void 0 : Oz.text) && void 0 !== tz ? tz : "");
+         case aq.ie.EditNameTag:
+           mq.i.TV("EditNameTag", null !== (Aq = null === (cq = lq.Fc()) || void 0 === cq || null === (uq = cq.attributes.customAttributes) || void 0 === uq ? void 0 : uq.text) && void 0 !== Aq ? Aq : "");
```

#### 346. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3111-L3116` → after: `L3150-L3155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3150-L3155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3150-L3155) · [Before (L3111-L3116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3111-L3116)

```diff
-         case Zz.ee.EditBook: {
-           var pz, dz, Rz;
-           const zz = null === (pz = nz.yM()) || void 0 === pz ? void 0 : pz.attributes;
-           lz.k.sK("EditBook", {
-             pages: (0, eb.L)(null === zz || void 0 === zz || null === (dz = zz.customAttributes) || void 0 === dz ? void 0 : dz.pages),
-             title: null !== (Rz = null === zz || void 0 === zz ? void 0 : zz.customDisplayName) && void 0 !== Rz ? Rz : "Title",
+         case aq.ie.EditBook: {
+           var Bq, Wq, Vq;
+           const qq = null === (Bq = lq.Fc()) || void 0 === Bq ? void 0 : Bq.attributes;
+           mq.i.TV("EditBook", {
+             pages: (0, Kg.U)(null === qq || void 0 === qq || null === (Wq = qq.customAttributes) || void 0 === Wq ? void 0 : Wq.pages),
+             title: null !== (Vq = null === qq || void 0 === qq ? void 0 : qq.customDisplayName) && void 0 !== Vq ? Vq : "Title",
```

#### 347. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3121` → after: `L3160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3160) · [Before (L3121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3121)

```diff
-         case Zz.ee.CantChangeBlock:
+         case aq.ie.CantChangeBlock:
```

#### 348. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3125-L3126` → after: `L3164-L3165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3164-L3165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3164-L3165) · [Before (L3125-L3126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3125-L3126)

```diff
-               nz = zz ? bz : Ez;
-             (uz.getClientOption("canChange") || nz || "You cannot modify this block" !== bz) && lz.k.sK("showBottomMessage", {
+               lq = qq ? gq : Yq;
+             (Eq.getClientOption("canChange") || lq || "You cannot modify this block" !== gq) && mq.i.TV("showBottomMessage", {
```

#### 349. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3132-L3133` → after: `L3171-L3172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3171-L3172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3171-L3172) · [Before (L3132-L3133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3132-L3133)

```diff
-         case Zz.ee.MiddleBarStart:
-           lz.k.sK("middleScreenBarInitiate", {
+         case aq.ie.MiddleBarStart:
+           mq.i.TV("middleScreenBarInitiate", {
```

#### 350. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3135` → after: `L3174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3174) · [Before (L3135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3135)

```diff
-             KE: 1 === bz[0],
+             uE: 1 === gq[0],
```

#### 351. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3139-L3140` → after: `L3178-L3179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3178-L3179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3178-L3179) · [Before (L3139-L3140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3139-L3140)

```diff
-         case Zz.ee.MiddleBarStop:
-           lz.k.sK("middleScreenBarRemove");
+         case aq.ie.MiddleBarStop:
+           mq.i.TV("middleScreenBarRemove");
```

#### 352. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3142-L3144` → after: `L3181-L3183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3181-L3183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3181-L3183) · [Before (L3142-L3144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3142-L3144)

```diff
-         case Zz.ee.Hitmarker:
-           lz.k.sK("localGunHitmarker", {
-             ib: 1 === uz
+         case aq.ie.Hitmarker:
+           mq.i.TV("localGunHitmarker", {
+             vq: 1 === Eq
```

#### 353. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3147-L3148` → after: `L3186-L3187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3186-L3187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3186-L3187) · [Before (L3147-L3148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3147-L3148)

```diff
-         case Zz.ee.ShotsLeft:
-           lz.k.sK("localPlayerNewShotsLeft", Ez);
+         case aq.ie.ShotsLeft:
+           mq.i.TV("localPlayerNewShotsLeft", Yq);
```

#### 354. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3150-L3151` → after: `L3189-L3190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3189-L3190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3189-L3190) · [Before (L3150-L3151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3150-L3151)

```diff
-         case Zz.ee.AimingOverlay:
-           lz.k.sK("aimingOverlay", 3 === (3 & uz) ? "sniper" : "none");
+         case aq.ie.AimingOverlay:
+           mq.i.TV("aimingOverlay", 3 === (3 & Eq) ? "sniper" : "none");
```

#### 355. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3153-L3154` → after: `L3192-L3193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3192-L3193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3192-L3193) · [Before (L3153-L3154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3153-L3154)

```diff
-         case Zz.ee.BottomMessage:
-           lz.k.sK("showBottomMessage", JSON.parse(Mz()));
+         case aq.ie.BottomMessage:
+           mq.i.TV("showBottomMessage", JSON.parse(xq()));
```

#### 356. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3156-L3157` → after: `L3195-L3196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3195-L3196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3195-L3196) · [Before (L3156-L3157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3156-L3157)

```diff
-         case Zz.ee.Crosshair:
-           nz.inaccuracy = (0, hz.e)(Ez), (0, jb.c)().crosshairAccuracy(nz.inaccuracy);
+         case aq.ie.Crosshair:
+           lq.inaccuracy = (0, pq.e)(Yq), (0, Cg.d)().crosshairAccuracy(lq.inaccuracy);
```

#### 357. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3159` → after: `L3198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3198) · [Before (L3159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3159)

```diff
-         case Zz.ee.ChargeStage:
+         case aq.ie.ChargeStage:
```

#### 358. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3161-L3162` → after: `L3200-L3201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3200-L3201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3200-L3201) · [Before (L3161-L3162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3161-L3162)

```diff
-         case Zz.ee.EmoteWheelClose:
-           lz.k.sK("requestEmoteWheelClose");
+         case aq.ie.EmoteWheelClose:
+           mq.i.TV("requestEmoteWheelClose");
```

#### 359. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3164-L3165` → after: `L3203-L3204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3203-L3204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3203-L3204) · [Before (L3164-L3165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3164-L3165)

```diff
-         case Zz.ee.BlockMined:
-           lz.k.sK("localBlockMined");
+         case aq.ie.BlockMined:
+           mq.i.TV("localBlockMined");
```

#### 360. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3168` → after: `L3207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3207) · [Before (L3168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3168)

```diff
-           throw new Fz.b(`UiEvent of no kind: what ${zz}`)
+           throw new Nq.d(`UiEvent of no kind: what ${qq}`)
```

#### 361. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3171-L3176` → after: `L3210-L3215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3210-L3215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3210-L3215) · [Before (L3171-L3176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3171-L3176)

```diff
-     var Bb = bz(37422),
-       Cb = bz(8994),
-       Yb = bz(1909),
-       kb = bz(36231),
-       zE = bz(9007),
-       uE = bz(4544);
+     var eg = gq(37972),
+       Dg = gq(9292),
+       qY = gq(1933),
+       EY = gq(36849),
+       gY = gq(9301),
+       YY = gq(4608);
```

#### 362. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3200` → after: `L3239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3239) · [Before (L3200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3200)

```diff
-       const iz = () => (bz = (0, Yb.n)(bz, uz()), bz);
+       const Oq = () => (gq = (0, qY.m)(gq, Eq()), gq);
```

#### 363. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3208` → after: `L3247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3247) · [Before (L3208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3208)

```diff
-           return null !== Ez && lz.push((0, Yb.r)((zz => {
+           return null !== Yq && mq.push((0, qY.o)((qq => {
```

#### 364. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3253` → after: `L3292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3292) · [Before (L3253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3253)

```diff
-             displayName: null !== (Ez = Oz.attributes.customDisplayName) && void 0 !== Ez ? Ez : uz.getDisplayName(pz),
+             displayName: null !== (Yq = uq.attributes.customDisplayName) && void 0 !== Yq ? Yq : Eq.getDisplayName(Bq),
```

#### 365. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3255` → after: `L3294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3294) · [Before (L3255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3255)

```diff
-             clipSize: null !== (nz = null !== (iz = null === (lz = Oz.attributes.customAttributes) || void 0 === lz || null === (Mz = lz.gunStats) || void 0 === Mz ? void 0 : Mz.clipSize) && void 0 !== iz ? iz : null === (tz = uz.getGunStats(pz)) || void 0 === tz ? void 0 : tz.cl … [truncated]
+             clipSize: null !== (lq = null !== (Oq = null === (mq = uq.attributes.customAttributes) || void 0 === mq || null === (xq = mq.gunStats) || void 0 === xq ? void 0 : xq.clipSize) && void 0 !== Oq ? Oq : null === (Aq = Eq.getGunStats(Bq)) || void 0 === Aq ? void 0 : Aq.cl … [truncated]
```

#### 366. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3284` → after: `L3323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3323) · [Before (L3284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3284)

```diff
-               const tz = zz.craftingView(bz.station, Mz, null !== (iz = null === (lz = bz.recipe) || void 0 === lz ? void 0 : lz.cO) && void 0 !== iz ? iz : 0);
+               const Aq = qq.craftingView(gq.station, xq, null !== (Oq = null === (mq = gq.recipe) || void 0 === mq ? void 0 : mq.Nc) && void 0 !== Oq ? Oq : 0);
```

#### 367. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3290` → after: `L3329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3329) · [Before (L3290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3290)

```diff
-                 let Ez = Zz.rb.BYTES;
+                 let Yq = aq.mb.BYTES;
```

#### 368. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3292-L3293` → after: `L3331-L3332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3331-L3332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3331-L3332) · [Before (L3292-L3293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3292-L3293)

```diff
-                 for (let Oz = Zz.rb.recipes(zz, 0); Oz > 0; Oz--) {
-                   const bz = Zz.kb.flags(zz, Ez),
+                 for (let uq = aq.mb.recipes(qq, 0); uq > 0; uq--) {
+                   const gq = aq.db.flags(qq, Yq),
```

#### 369. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3295-L3296` → after: `L3334-L3335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3334-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3334-L3335) · [Before (L3295-L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3295-L3296)

```diff
-                       name: uz.nameOfId(Zz.kb.item(zz, Ez)),
-                       cO: Zz.kb.recipe(zz, Ez),
+                       name: Eq.nameOfId(aq.db.item(qq, Yq)),
+                       Nc: aq.db.recipe(qq, Yq),
```

#### 370. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3298-L3300` → after: `L3337-L3339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3337-L3339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3337-L3339) · [Before (L3298-L3300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3298-L3300)

```diff
-                       produces: Zz.kb.produces(zz, Ez),
-                       haveIngredients: 0 !== (bz & Zz.gb.HaveIngredients),
-                       listed: 0 !== (bz & Zz.gb.Listed)
+                       produces: aq.db.produces(qq, Yq),
+                       haveIngredients: 0 !== (gq & aq.ab.HaveIngredients),
+                       listed: 0 !== (gq & aq.ab.Listed)
```

#### 371. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3302-L3304` → after: `L3341-L3343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3341-L3343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3341-L3343) · [Before (L3302-L3304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3302-L3304)

```diff
-                   let lz = Zz.kb.requires(zz, Ez);
-                   for (Ez += Zz.kb.BYTES; lz > 0; lz--) {
-                     const bz = Zz.nb.items(zz, Ez);
+                   let mq = aq.db.requires(qq, Yq);
+                   for (Yq += aq.db.BYTES; mq > 0; mq--) {
+                     const gq = aq.fb.items(qq, Yq);
```

#### 372. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3306-L3308` → after: `L3345-L3347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3345-L3347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3345-L3347) · [Before (L3306-L3308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3306-L3308)

```diff
-                       items: FE(zz, Ez + Zz.nb.BYTES, bz, uz),
-                       amt: Zz.nb.amount(zz, Ez)
-                     }), Ez += Zz.nb.BYTES + 2 * bz
+                       items: VY(qq, Yq + aq.fb.BYTES, gq, Eq),
+                       amt: aq.fb.amount(qq, Yq)
+                     }), Yq += aq.fb.BYTES + 2 * gq
```

#### 373. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3312-L3313` → after: `L3351-L3352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3351-L3352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3351-L3352) · [Before (L3312-L3313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3312-L3313)

```diff
-                 const iz = Zz.rb.flags(zz, 0);
-                 if (null === bz.recipe || 0 === (iz & Zz.qb.Detail)) return {
+                 const Oq = aq.mb.flags(qq, 0);
+                 if (null === gq.recipe || 0 === (Oq & aq.jb.Detail)) return {
```

#### 374. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3320-L3325` → after: `L3359-L3364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3359-L3364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3359-L3364) · [Before (L3320-L3325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3320-L3325)

```diff
-                 for (let Oz = Zz.rb.ingredients(zz, 0); Oz > 0; Oz--) {
-                   const bz = Zz.eb.item(zz, Ez),
-                     nz = Zz.eb.from(zz, Ez),
-                     iz = Zz.eb.amount(zz, Ez);
-                   Ez += Zz.eb.BYTES;
-                   const tz = nz === Zz.N ? null : FE(zz, Ez, nz, uz);
+                 for (let uq = aq.mb.ingredients(qq, 0); uq > 0; uq--) {
+                   const gq = aq.Z.item(qq, Yq),
+                     lq = aq.Z.from(qq, Yq),
+                     Oq = aq.Z.amount(qq, Yq);
+                   Yq += aq.Z.BYTES;
+                   const Aq = lq === aq.F ? null : VY(qq, Yq, lq, Eq);
```

#### 375. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3332` → after: `L3371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3371) · [Before (L3332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3332)

```diff
-                   cO: Hz
+                   Nc: cq
```

#### 376. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3339-L3341` → after: `L3378-L3380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3378-L3380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3378-L3380) · [Before (L3339-L3341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3339-L3341)

```diff
-                     cO: Hz,
-                     craftAllTimes: Zz.rb.craftAllTimes(zz, 0),
-                     roomForOne: 0 !== (iz & Zz.qb.RoomForOne),
+                     Nc: cq,
+                     craftAllTimes: aq.mb.craftAllTimes(qq, 0),
+                     roomForOne: 0 !== (Oq & aq.jb.RoomForOne),
```

#### 377. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3364` → after: `L3403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3403) · [Before (L3364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3364)

```diff
-             for (let uz = 0; uz < Zz.ud; uz++) Ez.push(ME(zz.slot(uz)));
+             for (let Eq = 0; Eq < aq.Bd; Eq++) Yq.push(cY(qq.slot(Eq)));
```

#### 378. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3374-L3375` → after: `L3413-L3414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3413-L3414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3413-L3414) · [Before (L3374-L3375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3374-L3375)

```diff
-             if (bz > Zz.ud) {
-               for (let uz = Zz.ud; uz < bz; uz++) Mz.push(ME(zz.slot(uz)));
+             if (gq > aq.Bd) {
+               for (let Eq = aq.Bd; Eq < gq; Eq++) xq.push(cY(qq.slot(Eq)));
```

#### 379. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3378-L3379` → after: `L3417-L3418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3417-L3418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3417-L3418) · [Before (L3378-L3379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3378-L3379)

```diff
-                 pos: [...zz.pl],
-                 numSlots: bz - Zz.ud,
+                 pos: [...qq.Uq],
+                 numSlots: gq - aq.Bd,
```

#### 380. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3391` → after: `L3430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3430) · [Before (L3391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3391)

```diff
-           }), (0, Yb.k)("creative")),
+           }), (0, qY.h)("creative")),
```

#### 381. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3401` → after: `L3440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3440) · [Before (L3401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3401)

```diff
-           }), (0, Yb.h)("DisplayName", "GunStats")),
+           }), (0, qY.f)("DisplayName", "GunStats")),
```

#### 382. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3406` → after: `L3445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3445) · [Before (L3406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3406)

```diff
-             const Ez = null === (uz = zz.yM()) || void 0 === uz ? void 0 : uz.typeObj,
+             const Yq = null === (Eq = qq.Fc()) || void 0 === Eq ? void 0 : Eq.typeObj,
```

#### 383. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3415` → after: `L3454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3454) · [Before (L3415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3415)

```diff
-             return (0, uE.A)((() => {
+             return (0, YY.x)((() => {
```

#### 384. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3422-L3429` → after: `L3461-L3468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3461-L3468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3461-L3468) · [Before (L3422-L3429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3422-L3429)

```diff
-           hotbarSlotRequested: (0, Yb.e)("setSelectedInventorySlotI"),
-           hotbarScrolled: (0, Yb.e)("ScrollInventorySlot"),
-           numberKeyPressed: (0, Yb.e)("numkeyPressed"),
-           inventoryDropRequested: (0, Yb.e)("DropInvenItem"),
-           chestToggled: (0, Yb.e)("chestToggleFromServer"),
-           chestRefreshed: (0, Yb.e)("chestRefreshedFromServer", dE),
-           inventorySynced: (0, Yb.e)("syncedInvenFromServer", dE),
-           enchantingTableOpened: (0, Yb.e)("enchantingTable", (zz => {
+           hotbarSlotRequested: (0, qY.c)("setSelectedInventorySlotI"),
+           hotbarScrolled: (0, qY.c)("ScrollInventorySlot"),
+           numberKeyPressed: (0, qY.c)("numkeyPressed"),
+           inventoryDropRequested: (0, qY.c)("DropInvenItem"),
+           chestToggled: (0, qY.c)("chestToggleFromServer"),
+           chestRefreshed: (0, qY.c)("chestRefreshedFromServer", aY),
+           inventorySynced: (0, qY.c)("syncedInvenFromServer", aY),
+           enchantingTableOpened: (0, qY.c)("enchantingTable", (qq => {
```

#### 385. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3432` → after: `L3471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3471) · [Before (L3432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3432)

```diff
-               hO: Ez
+               lc: Yq
```

#### 386. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3477` → after: `L3516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3516) · [Before (L3477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3477)

```diff
-             zz.closeChest(), zz.flush(Ez), lz.k.sK("chestClosedByPlayer")
+             qq.closeChest(), qq.flush(Yq), mq.i.TV("chestClosedByPlayer")
```

#### 387. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3485` → after: `L3524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3524) · [Before (L3485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3485)

```diff
-               cO: Ez,
+               Nc: Yq,
```

#### 388. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3515` → after: `L3554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3554) · [Before (L3515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3515)

```diff
-               if (!nz || !uz.getClientOption("canCraft") || !(0, Cb.o)(Ez) || (0, Cb.m)(nz.attributes)) return pE;
+               if (!lq || !Eq.getClientOption("canCraft") || !(0, Dg.r)(Yq) || (0, Dg.q)(lq.attributes)) return NY;
```

#### 389. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3519` → after: `L3558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3558) · [Before (L3519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3519)

```diff
-               for (let Mz = 0; Mz < kb.d; Mz++) {
+               for (let xq = 0; xq < EY.b; xq++) {
```

#### 390. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3527` → after: `L3566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3566) · [Before (L3527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3527)

```diff
-                 } = (0, Cb.f)(Ez, Mz);
+                 } = (0, Dg.h)(Yq, xq);
```

#### 391. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3562` → after: `L3601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3601) · [Before (L3562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3562)

```diff
-           oB: 0,
+           Y_: 0,
```

#### 392. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3565` → after: `L3604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3604) · [Before (L3565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3565)

```diff
-           ol: [0, 0, 0]
+           MV: [0, 0, 0]
```

#### 393. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3572` → after: `L3611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3611) · [Before (L3572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3572)

```diff
-       U3() {
+       Kqq() {
```

#### 394. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3581-L3582` → after: `L3620-L3621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3620-L3621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3620-L3621) · [Before (L3581-L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3581-L3582)

```diff
-         if (this.refreshTarget(), this.isBreaking = 0 !== (Zz.z.playerFlags(zz, 0) & Zz.Id.Breaking) && Zz.z.breakingProgress(zz, 0) >= 0, this.isBreaking)
-           for (let uz = 0; uz < 3; uz++) this.breaking[uz] = Zz.z.breakingPos(zz, 0, uz)
+         if (this.refreshTarget(), this.isBreaking = 0 !== (aq.t.playerFlags(qq, 0) & aq.Pd.Breaking) && aq.t.breakingProgress(qq, 0) >= 0, this.isBreaking)
+           for (let Eq = 0; Eq < 3; Eq++) this.breaking[Eq] = aq.t.breakingPos(qq, 0, Eq)
```

#### 395. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3586-L3587` → after: `L3625-L3626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3625-L3626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3625-L3626) · [Before (L3586-L3587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3586-L3587)

```diff
-           uz = Zz.z.targetBlockId(zz, 0);
-         if (this.hasTarget = uz !== Zz.cd, this.hasTarget) {
+           Eq = aq.t.targetBlockId(qq, 0);
+         if (this.hasTarget = Eq !== aq.id, this.hasTarget) {
```

#### 396. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3589-L3590` → after: `L3628-L3629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3628-L3629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3628-L3629) · [Before (L3589-L3590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3589-L3590)

```diff
-           bz.oB = uz;
-           for (let uz = 0; uz < 3; uz++) bz.position[uz] = Zz.z.targetBlock(zz, 0, uz), bz.normal[uz] = Zz.z.targetNormal(zz, 0, uz), bz.ol[uz] = Zz.z.targetAdjacent(zz, 0, uz)
+           gq.Y_ = Eq;
+           for (let Eq = 0; Eq < 3; Eq++) gq.position[Eq] = aq.t.targetBlock(qq, 0, Eq), gq.normal[Eq] = aq.t.targetNormal(qq, 0, Eq), gq.MV[Eq] = aq.t.targetAdjacent(qq, 0, Eq)
```

#### 397. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3598-L3600` → after: `L3637-L3639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3637-L3639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3637-L3639) · [Before (L3598-L3600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3598-L3600)

```diff
-     var RE = bz(39792),
-       KE = bz(39776),
-       wE = bz(36222);
+     var jY = gq(40359),
+       HY = gq(40343),
+       oY = gq(36841);
```

#### 398. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3605` → after: `L3644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3644) · [Before (L3605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3605)

```diff
-         this.game = new wE.h, this.client = new wE.h, this.yM = 0, this.movesFly = null
+         this.game = new oY.f, this.client = new oY.f, this.Fc = 0, this.movesFly = null
```

#### 399. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3619` → after: `L3658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3658) · [Before (L3619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3619)

```diff
-         this.game = new wE.h, this.movesFly = null
+         this.game = new oY.f, this.movesFly = null
```

#### 400. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3625` → after: `L3664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3664) · [Before (L3625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3625)

```diff
-         return (this.game._getTotalBooleanVal() ? XE : 0) | (this.client._getTotalBooleanVal() ? fE : 0)
+         return (this.game._getTotalBooleanVal() ? PY : 0) | (this.client._getTotalBooleanVal() ? QY : 0)
```

#### 401. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3632-L3634` → after: `L3671-L3673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3671-L3673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3671-L3673) · [Before (L3632-L3634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3632-L3634)

```diff
-         if (uz === this.yM && null === bz) return !0;
-         let Ez = Zz.dc.Keep;
-         return null !== bz && (Ez = bz ? Zz.dc.On : Zz.dc.Off), !(!zz || !(0, Zz.Be)(zz, 0, Ez, uz, bz ? 1 : 0)) && (this.yM = uz, this.movesFly = null, !0)
+         if (Eq === this.Fc && null === gq) return !0;
+         let Yq = aq.Vb.Keep;
+         return null !== gq && (Yq = gq ? aq.Vb.On : aq.Vb.Off), !(!qq || !(0, aq.ye)(qq, 0, Yq, Eq, gq ? 1 : 0)) && (this.Fc = Eq, this.movesFly = null, !0)
```

#### 402. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3649` → after: `L3688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3688) · [Before (L3649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3649)

```diff
-           uz = Zz.z.viewProj;
+           Eq = aq.t.viewProj;
```

#### 403. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3657` → after: `L3696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3696) · [Before (L3657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3657)

```diff
-         for (let bz = 0; bz < 3; bz++) uz[bz] = Zz.z.eye(zz, 0, bz);
+         for (let gq = 0; gq < 3; gq++) Eq[gq] = aq.t.eye(qq, 0, gq);
```

#### 404. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3662` → after: `L3701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3701) · [Before (L3662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3662)

```diff
-           uz = Zz.z.viewProj,
+           Eq = aq.t.viewProj,
```

#### 405. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3673` → after: `L3712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3712) · [Before (L3673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3673)

```diff
-         return Zz.z.heading(this.api.apiView, 0)
+         return aq.t.heading(this.api.apiView, 0)
```

#### 406. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3676` → after: `L3715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3715) · [Before (L3676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3676)

```diff
-         return Zz.z.pitch(this.api.apiView, 0)
+         return aq.t.pitch(this.api.apiView, 0)
```

#### 407. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3679` → after: `L3718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3718) · [Before (L3679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3679)

```diff
-         return Zz.z.tanHalfFovX(this.api.apiView, 0)
+         return aq.t.tanHalfFovX(this.api.apiView, 0)
```

#### 408. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3682` → after: `L3721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3721) · [Before (L3682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3682)

```diff
-         return Zz.z.tanHalfFovY(this.api.apiView, 0)
+         return aq.t.tanHalfFovY(this.api.apiView, 0)
```

#### 409. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3702-L3704` → after: `L3741-L3743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3741-L3743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3741-L3743) · [Before (L3702-L3704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3702-L3704)

```diff
-           Mz = Zz.z.viewProj,
-           tz = iz > 0 ? uz / iz : 0,
-           Hz = iz > 0 ? -bz / iz : 0,
+           xq = aq.t.viewProj,
+           Aq = Oq > 0 ? Eq / Oq : 0,
+           cq = Oq > 0 ? -gq / Oq : 0,
```

#### 410. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3732-L3735` → after: `L3771-L3774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3771-L3774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3771-L3774) · [Before (L3732-L3735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3732-L3735)

```diff
-           bz = zz[0] - Zz.z.origin(uz, 0, 0),
-           Ez = zz[1] - Zz.z.origin(uz, 0, 1),
-           nz = zz[2] - Zz.z.origin(uz, 0, 2),
-           iz = Zz.z.viewProj;
+           gq = qq[0] - aq.t.origin(Eq, 0, 0),
+           Yq = qq[1] - aq.t.origin(Eq, 0, 1),
+           lq = qq[2] - aq.t.origin(Eq, 0, 2),
+           Oq = aq.t.viewProj;
```

#### 411. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3739` → after: `L3778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3778) · [Before (L3739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3739)

```diff
-         return (0, Mz.f)(zz, uz, this.screenBandPct.x, this.screenBandPct.y)
+         return (0, xq.e)(qq, Eq, this.screenBandPct.x, this.screenBandPct.y)
```

#### 412. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3742` → after: `L3781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3781) · [Before (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3742)

```diff
-     var oE = bz(4571);
+     var rY = gq(4629);
```

#### 413. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3744` → after: `L3783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3783) · [Before (L3744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3744)

```diff
-       vE = new Uint8Array(Zz.X * Zz.V);
+       hY = new Uint8Array(aq.P * aq.L);
```

#### 414. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3747` → after: `L3786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3786) · [Before (L3747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3747)

```diff
-         this.buttons = [], this.yM = !0
+         this.buttons = [], this.Fc = !0
```

#### 415. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3750` → after: `L3789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3789) · [Before (L3750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3750)

```diff
-         this.buttons = zz, this.yM = !1
+         this.buttons = qq, this.Fc = !1
```

#### 416. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3753` → after: `L3792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3792) · [Before (L3753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3753)

```diff
-         this.yM = 0 === this.buttons.length
+         this.Fc = 0 === this.buttons.length
```

#### 417. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3756-L3758` → after: `L3795-L3797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3795-L3797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3795-L3797) · [Before (L3756-L3758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3756-L3758)

```diff
-         if (this.yM) return;
-         const uz = new Uint8Array(Zz.X),
-           bz = new Uint8Array(Zz.X);
+         if (this.Fc) return;
+         const Eq = new Uint8Array(aq.P),
+           gq = new Uint8Array(aq.P);
```

#### 418. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3766` → after: `L3805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3805) · [Before (L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3766)

```diff
-           if (Ez === Zz.X) break;
+           if (Yq === aq.P) break;
```

#### 419. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3770` → after: `L3809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3809) · [Before (L3770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3770)

```diff
-           } = NE.encodeInto(iz, vE.subarray(nz, nz + Zz.V));
+           } = vY.encodeInto(Oq, hY.subarray(lq, lq + aq.L));
```

#### 420. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3772-L3773` → after: `L3811-L3812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3811-L3812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3811-L3812) · [Before (L3772-L3773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3772-L3773)

```diff
-           const tz = oE.m[lz];
-           uz[Ez] = "number" === typeof tz ? tz : 0, bz[Ez] = Mz, Ez++, nz += Mz
+           const Aq = rY.l[mq];
+           Eq[Yq] = "number" === typeof Aq ? Aq : 0, gq[Yq] = xq, Yq++, lq += xq
```

#### 421. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3775` → after: `L3814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3814) · [Before (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3775)

```diff
-         this.yM = (0, Zz.qe)(zz, 0, Ez, uz, bz, vE.subarray(0, nz))
+         this.Fc = (0, aq.ne)(qq, 0, Yq, Eq, gq, hY.subarray(0, lq))
```

#### 422. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3781-L3782` → after: `L3820-L3821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3820-L3821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3820-L3821) · [Before (L3781-L3782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3781-L3782)

```diff
-       return Ez.length <= Zz.V && function(zz, uz, bz, Ez) {
-         return (0, yu.d)(), (0, Zz.rf)(zz, uz, bz, Ez)
+       return Yq.length <= aq.L && function(qq, Eq, gq, Yq) {
+         return (0, FE.b)(), (0, aq.tf)(qq, Eq, gq, Yq)
```

#### 423. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3790-L3792` → after: `L3829-L3831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3829-L3831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3829-L3831) · [Before (L3790-L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3790-L3792)

```diff
-         off: Zz.Jd.Off,
-         key: Zz.Jd.Key,
-         touch: Zz.Jd.Touch
+         off: aq.Rd.Off,
+         key: aq.Rd.Key,
+         touch: aq.Rd.Touch
```

#### 424. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3797-L3798` → after: `L3836-L3837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3836-L3837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3836-L3837) · [Before (L3797-L3798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3797-L3798)

```diff
-         this.options = zz, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tic … [truncated]
-           if ((0, Fz.h)(zz)) throw zz;
+         this.options = qq, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tic … [truncated]
+           if ((0, Nq.k)(qq)) throw qq;
```

#### 425. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3800` → after: `L3839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3839) · [Before (L3800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3800)

```diff
-         }, this.api = zz.api, this.tables = zz.tables, this.onError = null !== (uz = zz.onError) && void 0 !== uz ? uz : zz => {
+         }, this.api = qq.api, this.tables = qq.tables, this.onError = null !== (Eq = qq.onError) && void 0 !== Eq ? Eq : qq => {
```

#### 426. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3855` → after: `L3895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3895) · [Before (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3855)

```diff
-         return this.itemSources ??= OE(this.items, this.tables, (() => this.localPlayerAlive()), this.xZ), this.itemSources
+         return this.itemSources ??= WY(this.items, this.tables, (() => this.localPlayerAlive()), this.SN), this.itemSources
```

#### 427. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3871` → after: `L3911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3911) · [Before (L3871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3871)

```diff
-         return null !== uz && (bz = uz, Ez = 0, nz = zz[0], iz = zz[1], lz = zz[2], (0, yu.d)(), (0, Zz.xe)(bz, Ez, nz, iz, lz));
+         return null !== Eq && (gq = Eq, Yq = 0, lq = qq[0], Oq = qq[1], mq = qq[2], (0, FE.b)(), (0, aq.ue)(gq, Yq, lq, Oq, mq));
```

#### 428. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3879` → after: `L3919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3919) · [Before (L3879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3879)

```diff
-         return null === uz ? (this.pendingZoom = zz, !1) : (this.pendingZoom = null, (0, Zz.ig)(uz, 0, zz, 1))
+         return null === Eq ? (this.pendingZoom = qq, !1) : (this.pendingZoom = null, (0, aq.pg)(Eq, 0, qq, 1))
```

#### 429. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3883` → after: `L3923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3923) · [Before (L3883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3883)

```diff
-         return null !== uz && (0, Zz.dg)(uz, 0, zz ? 1 : 0)
+         return null !== Eq && (0, aq.jg)(Eq, 0, qq ? 1 : 0)
```

#### 430. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3887` → after: `L3927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3927) · [Before (L3887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3887)

```diff
-         return null !== zz && (uz = zz, bz = 0, (0, yu.d)(), (0, Zz.Ff)(uz, bz));
+         return null !== qq && (Eq = qq, gq = 0, (0, FE.b)(), (0, aq.Gf)(Eq, gq));
```

#### 431. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3899` → after: `L3939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3939) · [Before (L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3899)

```diff
-         return null !== lz && (0, Zz.bf)(lz, 0, zz, uz, bz, Ez, nz, iz)
+         return null !== mq && (0, aq._e)(mq, 0, qq, Eq, gq, Yq, lq, Oq)
```

#### 432. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3903` → after: `L3943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3943) · [Before (L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3903)

```diff
-         return null !== uz && (0, Zz.lg)(uz, 0, null !== zz && void 0 !== zz ? zz : 1 / 0)
+         return null !== Eq && (0, aq.tg)(Eq, 0, null !== qq && void 0 !== qq ? qq : 1 / 0)
```

#### 433. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3908` → after: `L3948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3948) · [Before (L3908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3908)

```diff
-         return null !== Ez && Du(Ez, bz ? dz.fd : 0, zz, (0, qz.c)(uz))
+         return null !== Yq && sE(Yq, gq ? Wq.vd : 0, qq, (0, Sq.h)(Eq))
```

#### 434. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3929` → after: `L3969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3969) · [Before (L3929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3929)

```diff
-         this.overflowGen = Zz.z.eventOverflowGen(bz, 0), this.resyncOwed = 0 !== Zz.z.eventOverflowMask(bz, 0), zz.setGameHost(this), zz.setEventWalker((zz => {
+         this.overflowGen = aq.t.eventOverflowGen(gq, 0), this.resyncOwed = 0 !== aq.t.eventOverflowMask(gq, 0), qq.setGameHost(this), qq.setEventWalker((qq => {
```

#### 435. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3937` → after: `L3977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3977) · [Before (L3937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3937)

```diff
-         return "off" === this.promptWatch || this.stopped() ? null : VE(Zz.z.promptEntity(this.api.apiView, 0))
+         return "off" === this.promptWatch || this.stopped() ? null : SY(aq.t.promptEntity(this.api.apiView, 0))
```

#### 436. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3940` → after: `L3980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3980) · [Before (L3940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3940)

```diff
-         return "touch" !== this.promptWatch || this.stopped() ? Zz.yc.None : Zz.z.interactLabel(this.api.apiView, 0)
+         return "touch" !== this.promptWatch || this.stopped() ? aq.xc.None : aq.t.interactLabel(this.api.apiView, 0)
```

#### 437. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3943` → after: `L3983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3983) · [Before (L3943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3943)

```diff
-         return "touch" !== this.promptWatch || this.stopped() ? 0 : Zz.z.interactIcon(this.api.apiView, 0)
+         return "touch" !== this.promptWatch || this.stopped() ? 0 : aq.t.interactIcon(this.api.apiView, 0)
```

#### 438. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3953` → after: `L3993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3993) · [Before (L3953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3953)

```diff
-         "connection" === zz.type ? zz.phase === dz.B.Activated && zz.conn !== this.activeConn && zz.conn > this.closedThrough ? (this.endSession(), this.activeConn = zz.conn, this.endGameGrants(), this.dropGameCamera()) : zz.phase !== dz.B.Left && zz.phase !== dz.B.Closed || zz.c … [truncated]
+         "connection" === qq.type ? qq.phase === Wq.u.Activated && qq.conn !== this.activeConn && qq.conn > this.closedThrough ? (this.endSession(), this.activeConn = qq.conn, this.endGameGrants(), this.dropGameCamera()) : qq.phase !== Wq.u.Left && qq.phase !== Wq.u.Closed || qq.c … [truncated]
```

#### 439. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3970-L3971` → after: `L4010-L4011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4010-L4011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4010-L4011) · [Before (L3970-L3971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3970-L3971)

```diff
-             if ("message" !== zz.type || zz.zM !== Qb.Wb.GameCodeMessage || zz.payloadKind !== dz.bc.Msgpack) return null;
-             const uz = (0, qz.b)(zz.payload);
+             if ("message" !== qq.type || qq.Hc !== Xg.ec.GameCodeMessage || qq.payloadKind !== Wq.hc.Msgpack) return null;
+             const Eq = (0, Sq.e)(qq.payload);
```

#### 440. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3983-L3984` → after: `L4023-L4024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4023-L4024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4023-L4024) · [Before (L3983-L3984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3983-L3984)

```diff
-           if ((0, Tz.e)(zz)) return void this.guard((() => {
-             (0, Tz.c)(zz, bz)
+           if ((0, bq.h)(qq)) return void this.guard((() => {
+             (0, bq.d)(qq, gq)
```

#### 441. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4014` → after: `L4054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4054) · [Before (L4014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4014)

```diff
-         this.highlightOwed = null === uz ? !(0, Zz.Me)(zz, 0, PE, PE, 0) : !(0, Zz.Me)(zz, 0, uz.pos, uz.normal, 1)
+         this.highlightOwed = null === Eq ? !(0, aq.Ke)(qq, 0, MY, MY, 0) : !(0, aq.Ke)(qq, 0, Eq.pos, Eq.normal, 1)
```

#### 442. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4027` → after: `L4067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4067) · [Before (L4027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4027)

```diff
-           nz = zz.gameNameWithVariation, iz = null !== (tz = (0, Jz.Nb)(nz)) && void 0 !== tz ? tz : void 0, lz = (0, Az.v)(zz.lobbyName), Mz = (0, Az.M)(zz.lobbyName)
+           lq = qq.gameNameWithVariation, Oq = null !== (Aq = (0, hq.Tb)(lq)) && void 0 !== Aq ? Aq : void 0, mq = (0, nq.t)(qq.lobbyName), xq = (0, nq.N)(qq.lobbyName)
```

#### 443. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4038` → after: `L4078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4078) · [Before (L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4038)

```diff
-           Oz = null !== (dz = null === (Fz = this.options.gameFactory((0, Jz.Sb)(nz))) || void 0 === Fz ? void 0 : Fz(Mz, lz, iz, Hz)) && void 0 !== dz ? dz : {}
+           uq = null !== (Wq = null === (Nq = this.options.gameFactory((0, hq.Yb)(lq))) || void 0 === Nq ? void 0 : Nq(xq, mq, Oq, cq)) && void 0 !== Wq ? Wq : {}
```

#### 444. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4040` → after: `L4080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4080) · [Before (L4040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4040)

```diff
-           this.xZ(Xz)
+           this.SN(Hq)
```

#### 445. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4049` → after: `L4089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4089) · [Before (L4049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4049)

```diff
-           this.xZ(Xz)
+           this.SN(Hq)
```

#### 446. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4052` → after: `L4092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4092) · [Before (L4052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4052)

```diff
-         this.owners = Kz, this.tickers = Kz.filter((zz => void 0 !== zz.sd)), this.renderers = Kz.filter((zz => void 0 !== zz.onAfterRender)), this.receivers = Kz.filter((zz => void 0 !== zz.onReceivedMessageFromServer)), this.writeAltVeto(Kz), this.writeHooks(Kz), this.writePubl … [truncated]
+         this.owners = dq, this.tickers = dq.filter((qq => void 0 !== qq.SB)), this.renderers = dq.filter((qq => void 0 !== qq.onAfterRender)), this.receivers = dq.filter((qq => void 0 !== qq.onReceivedMessageFromServer)), this.writeAltVeto(dq), this.writeHooks(dq), this.writePubl … [truncated]
```

#### 447. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4078` → after: `L4118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4118) · [Before (L4078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4078)

```diff
-           this.round(this.tickers, mE), (0, uE.b)(performance.now() - zz)
+           this.round(this.tickers, pY), (0, YY.e)(performance.now() - qq)
```

#### 448. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4087` → after: `L4127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4127) · [Before (L4087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4087)

```diff
-         const bz = (0, uE.j)(zz, Zz.z.frameMs(this.api.apiView, 0));
+         const gq = (0, YY.l)(qq, aq.t.frameMs(this.api.apiView, 0));
```

#### 449. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4091` → after: `L4131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4131) · [Before (L4091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4091)

```diff
-             (0, jb.c)().turnDamageIndicators(zz.cameraHeading)
+             (0, Cg.d)().turnDamageIndicators(qq.cameraHeading)
```

#### 450. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4102` → after: `L4142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4142) · [Before (L4102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4102)

```diff
-           this.xZ(nz)
+           this.SN(lq)
```

#### 451. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4104` → after: `L4144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4144) · [Before (L4104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4104)

```diff
-         this.showZoom(), this.items.flush(this.xZ), this.writePromptWatch(), this.writeCustomButtons();
+         this.showZoom(), this.items.flush(this.SN), this.writePromptWatch(), this.writeCustomButtons();
```

#### 452. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4106` → after: `L4146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4146) · [Before (L4106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4106)

```diff
-         this.ticks = 0, (0, uE.g)(Ez, zz, bz, this.xZ)
+         this.ticks = 0, (0, YY.h)(Yq, qq, gq, this.SN)
```

#### 453. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4113` → after: `L4153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4153) · [Before (L4113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4113)

```diff
-           uz = Zz.z.eventOverflowGen(zz, 0),
+           Eq = aq.t.eventOverflowGen(qq, 0),
```

#### 454. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4117` → after: `L4157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4157) · [Before (L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4117)

```diff
-         const Ez = Zz.z.eventOverflowMask(zz, 0),
+         const Yq = aq.t.eventOverflowMask(qq, 0),
```

#### 455. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4119` → after: `L4159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4159) · [Before (L4119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4119)

```diff
-         0 === Ez || null === nz || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, Zz.ye)(nz, 0, Ez);
+         0 === Yq || null === lq || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, aq.xe)(lq, 0, Yq);
```

#### 456. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4129` → after: `L4169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4169) · [Before (L4129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4129)

```diff
-           return this.xZ(Hz), Zz.tb.None
+           return this.SN(cq), aq.nb.None
```

#### 457. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4131` → after: `L4171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4171) · [Before (L4131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4131)

```diff
-         if (!this.sessionLive || void 0 !== this.fault) return zz === Zz.nc.AltVeto ? Zz.l.Allow : 0;
+         if (!this.sessionLive || void 0 !== this.fault) return qq === aq.nc.AltVeto ? aq.j.Allow : 0;
```

#### 458. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4135` → after: `L4175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4175) · [Before (L4135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4135)

```diff
-           throw (0, Fz.h)(Hz) && (this.fault = Hz), Hz
+           throw (0, Nq.k)(cq) && (this.fault = cq), cq
```

#### 459. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4162` → after: `L4202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4202) · [Before (L4162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4162)

```diff
-             return "preventAction" === Kz ? Zz.l.Prevent : "preventPlacement" === Kz ? Zz.l.PreventPlacement : Zz.l.Allow
+             return "preventAction" === dq ? aq.j.Prevent : "preventPlacement" === dq ? aq.j.PreventPlacement : aq.j.Allow
```

#### 460. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4166-L4167` → after: `L4206-L4207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4206-L4207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4206-L4207) · [Before (L4166-L4167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4166-L4167)

```diff
-               Oz = 0 !== (zz & Zz.cb.Alt),
-               pz = 0 !== (zz & Zz.cb.HasPos),
+               uq = 0 !== (qq & aq.U.Alt),
+               Bq = 0 !== (qq & aq.U.HasPos),
```

#### 461. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4171` → after: `L4211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4211) · [Before (L4171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4171)

```diff
-               Xz = 0 !== (zz & Zz.cb.Up),
+               Hq = 0 !== (qq & aq.U.Up),
```

#### 462. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4173` → after: `L4213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4213) · [Before (L4173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4173)

```diff
-             if (0 === (zz & Zz.cb.AttackOnly) && this.first((zz => {
+             if (0 === (qq & aq.U.AttackOnly) && this.first((qq => {
```

#### 463. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4202` → after: `L4242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4242) · [Before (L4202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4202)

```diff
-             return this.onError(new Error(`Unknown game call kind ${zz}`)), 0
+             return this.onError(new Error(`Unknown game call kind ${qq}`)), 0
```

#### 464. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4206` → after: `L4246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4246) · [Before (L4206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4206)

```diff
-         const Mz = nz === Zz._c ? null : AE.decode(this.api.eventBytes(iz, Math.min(nz, lz)));
+         const xq = lq === aq.ad ? null : iY.decode(this.api.eventBytes(Oq, Math.min(lq, mq)));
```

#### 465. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4208-L4210` → after: `L4248-L4250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4248-L4250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4248-L4250) · [Before (L4208-L4210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4208-L4210)

```diff
-           nl: [zz, uz, bz],
-           il: Ez,
-           Ml: Mz
+           MO: [qq, Eq, gq],
+           TO: Yq,
+           zO: xq
```

#### 466. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4218` → after: `L4258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4258) · [Before (L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4218)

```diff
-         })), this.sK("EditBoard", {
+         })), this.TV("EditBoard", {
```

#### 467. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4220` → after: `L4260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4260) · [Before (L4220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4220)

```diff
-         }), this.sK("EditCodeBlock", {
+         }), this.TV("EditCodeBlock", {
```

#### 468. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4230` → after: `L4270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4270) · [Before (L4230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4230)

```diff
-                 lz.k.sK("syncedInvenFromServer");
+                 mq.i.TV("syncedInvenFromServer");
```

#### 469. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4234` → after: `L4274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4274) · [Before (L4234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4234)

```diff
-                 lz.k.sK("chestToggleFromServer", zz === Zz.Cc.ChestOpened, !0);
+                 mq.i.TV("chestToggleFromServer", qq === aq.Cc.ChestOpened, !0);
```

#### 470. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4237` → after: `L4277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4277) · [Before (L4237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4237)

```diff
-                 lz.k.sK("chestRefreshedFromServer");
+                 mq.i.TV("chestRefreshedFromServer");
```

#### 471. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4240-L4241` → after: `L4280-L4281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4280-L4281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4280-L4281) · [Before (L4240-L4241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4240-L4241)

```diff
-                 lz.k.sK("enchantingTable", {
-                   hO: Ez,
+                 mq.i.TV("enchantingTable", {
+                   lc: Yq,
```

#### 472. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4246` → after: `L4286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4286) · [Before (L4246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4246)

```diff
-                 lz.k.sK("setSelectedInventorySlotI", uz, !0);
+                 mq.i.TV("setSelectedInventorySlotI", Eq, !0);
```

#### 473. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4249` → after: `L4289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4289) · [Before (L4249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4249)

```diff
-                 lz.k.sK("ScrollInventorySlot", uz);
+                 mq.i.TV("ScrollInventorySlot", Eq);
```

#### 474. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4252` → after: `L4292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4292) · [Before (L4252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4252)

```diff
-                 lz.k.sK("numkeyPressed", uz + 1);
+                 mq.i.TV("numkeyPressed", Eq + 1);
```

#### 475. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4255` → after: `L4295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4295) · [Before (L4255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4255)

```diff
-                 lz.k.sK("DropInvenItem", 0 !== uz);
+                 mq.i.TV("DropInvenItem", 0 !== Eq);
```

#### 476. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4258` → after: `L4298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4298) · [Before (L4258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4258)

```diff
-                 throw new Fz.b(`InventoryEvent of no kind: what ${zz}`)
+                 throw new Nq.d(`InventoryEvent of no kind: what ${qq}`)
```

#### 477. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4267` → after: `L4307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4307) · [Before (L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4267)

```diff
-         this.sK("shotPlayer", {
+         this.TV("shotPlayer", {
```

#### 478. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4275-L4277` → after: `L4315-L4317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4315-L4317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4315-L4317) · [Before (L4275-L4277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4275-L4277)

```diff
-         this.sK("closeShopOnDamaged", null), this.guard((() => {
-           lz.k.sK("damagedByOtherPlayer", {
-             nE: null,
+         this.TV("closeShopOnDamaged", null), this.guard((() => {
+           mq.i.TV("damagedByOtherPlayer", {
+             jY: null,
```

#### 479. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4279` → after: `L4319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4319) · [Before (L4279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4279)

```diff
-             mn: zz
+             Mq: qq
```

#### 480. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4285-L4286` → after: `L4325-L4326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4325-L4326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4325-L4326) · [Before (L4285-L4286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4285-L4286)

```diff
-           lz.k.sK("yourAttackHit", {
-             ib: Ez,
+           mq.i.TV("yourAttackHit", {
+             vq: Yq,
```

#### 481. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4293` → after: `L4333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4333) · [Before (L4293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4293)

```diff
-         this.sK("PlayerPhysicsTypeUpdate", zz)
+         this.TV("PlayerPhysicsTypeUpdate", qq)
```

#### 482. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4297` → after: `L4337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4337) · [Before (L4297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4297)

```diff
-           zz === dz.td.UPDATE ? (0, Pz.k)(uz, {
+           qq === Wq.Kd.UPDATE ? (0, Zq.h)(Eq, {
```

#### 483. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4302` → after: `L4342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4342) · [Before (L4302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4302)

```diff
-           }) : Lz.e.remove(uz)
+           }) : iq.b.remove(Eq)
```

#### 484. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4309` → after: `L4349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4349) · [Before (L4309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4309)

```diff
-         this.sK("showBottomMessage", {
+         this.TV("showBottomMessage", {
```

#### 485. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4317` → after: `L4357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4357) · [Before (L4317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4317)

```diff
-         !this.zoomUnshown || zz && this.zoomHeld || (this.zoomUnshown = !1, this.sK("cameraZoomSet", this.zoom)), this.zoomHeld = zz
+         !this.zoomUnshown || qq && this.zoomHeld || (this.zoomUnshown = !1, this.TV("cameraZoomSet", this.zoom)), this.zoomHeld = qq
```

#### 486. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4322-L4326` → after: `L4362-L4366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4362-L4366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4362-L4366) · [Before (L4322-L4326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4322-L4326)

```diff
-             nE: uz,
-             iE: bz
-           } = (0, RE.d)(KE.t, zz);
-           lz.k.sK("damagedByOtherPlayer", {
-             nE: uz,
+             jY: Eq,
+             HY: gq
+           } = (0, jY.e)(HY.t, qq);
+           mq.i.TV("damagedByOtherPlayer", {
+             jY: Eq,
```

#### 487. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4347` → after: `L4387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4387) · [Before (L4347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4347)

```diff
-                   mode: Zz.ie.All,
+                   mode: aq.ke.All,
```

#### 488. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4351-L4352` → after: `L4391-L4392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4391-L4392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4391-L4392) · [Before (L4351-L4352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4351-L4352)

```diff
-               } return Ez ? bz.size > Zz.Oc ? {
-               mode: Zz.ie.All,
+               } return Yq ? gq.size > aq.Pc ? {
+               mode: aq.ke.All,
```

#### 489. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4355` → after: `L4395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4395) · [Before (L4355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4355)

```diff
-               mode: Zz.ie.Filter,
+               mode: aq.ke.Filter,
```

#### 490. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4358` → after: `L4398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4398) · [Before (L4358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4358)

```diff
-               mode: Zz.ie.Off,
+               mode: aq.ke.Off,
```

#### 491. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4364` → after: `L4404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4404) · [Before (L4364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4364)

```diff
-             mode: Zz.ie.All,
+             mode: aq.ke.All,
```

#### 492. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4368` → after: `L4408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4408) · [Before (L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4368)

```diff
-         if (bz.mode === Zz.ie.Off && !this.vetoSet) return;
+         if (gq.mode === aq.ke.Off && !this.vetoSet) return;
```

#### 493. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4370` → after: `L4410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4410) · [Before (L4370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4370)

```diff
-         (0, Zz.Of)(uz, 0, bz.mode, bz.roots.length, Ez) ? this.vetoSet = bz.mode !== Zz.ie.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
+         (0, aq.Of)(Eq, 0, gq.mode, gq.roots.length, Yq) ? this.vetoSet = gq.mode !== aq.ke.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
```

#### 494. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4386` → after: `L4426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4426) · [Before (L4386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4386)

```diff
-         (0 !== bz || this.hooksSet) && ((0, Zz.Xf)(uz, 0, bz) ? this.hooksSet = 0 !== bz : this.onError(new Error("SetHooks didn't fit the command ring")))
+         (0 !== gq || this.hooksSet) && ((0, aq.Zf)(Eq, 0, gq) ? this.hooksSet = 0 !== gq : this.onError(new Error("SetHooks didn't fit the command ring")))
```

#### 495. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4395` → after: `L4435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4435) · [Before (L4395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4395)

```diff
-         uz !== this.promptWatchSent && zz && !this.stopped() && (0, Zz.rg)(zz, 0, GE[uz]) && (this.promptWatchSent = uz)
+         Eq !== this.promptWatchSent && qq && !this.stopped() && (0, aq.yg)(qq, 0, TY[Eq]) && (this.promptWatchSent = Eq)
```

#### 496. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4399` → after: `L4439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4439) · [Before (L4399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4399)

```diff
-         uz && zz !== this.writtenPublicLobby && ((0, Zz.hg)(uz, 0, zz ? 1 : 0) ? this.writtenPublicLobby = zz : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
+         Eq && qq !== this.writtenPublicLobby && ((0, aq.ng)(Eq, 0, qq ? 1 : 0) ? this.writtenPublicLobby = qq : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
```

#### 497. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4403` → after: `L4443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4443) · [Before (L4403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4403)

```diff
-         uz && ((0, Zz.Yf)(uz, 0, null === zz ? 0 : 1, null === zz ? LE : TE.encode(zz)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
+         Eq && ((0, aq.bg)(Eq, 0, null === qq ? 0 : 1, null === qq ? fY : ZY.encode(qq)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
```

#### 498. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4413` → after: `L4453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4453) · [Before (L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4413)

```diff
-             this.xZ(bz)
+             this.SN(gq)
```

#### 499. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4419` → after: `L4459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4459) · [Before (L4419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4419)

```diff
-           lz.k.sK(zz, uz)
+           mq.i.TV(qq, Eq)
```

#### 500. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4426` → after: `L4466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4466) · [Before (L4426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4426)

```diff
-           this.xZ(zz)
+           this.SN(qq)
```

#### 501. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4433` → after: `L4473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4473) · [Before (L4433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4433)

```diff
-           this.xZ(zz)
+           this.SN(qq)
```

#### 502. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4468` → after: `L4508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4508) · [Before (L4468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4468)

```diff
-         void 0 !== uz && this.xZ(uz)
+         void 0 !== Eq && this.SN(Eq)
```

#### 503. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4478` → after: `L4518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4518) · [Before (L4478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4478)

```diff
-             bz ? this.onError(nz) : this.xZ(nz)
+             gq ? this.onError(lq) : this.SN(lq)
```

#### 504. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4486` → after: `L4526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4526) · [Before (L4486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4486)

```diff
-           this.xZ(uz)
+           this.SN(Eq)
```

#### 505. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4492` → after: `L4532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4532) · [Before (L4492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4492)

```diff
-       return zz === Zz.ad ? null : String(zz)
+       return qq === aq.dd ? null : String(qq)
```

#### 506. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4496` → after: `L4536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4536) · [Before (L4496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4496)

```diff
-       zz.sd(dz.od)
+       qq.SB(Wq.Bd)
```

#### 507. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4507-L4508` → after: `L4547-L4548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4547-L4548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4547-L4548) · [Before (L4507-L4508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4507-L4508)

```diff
-           let uz = 0;
-           const bz = Math.min(bE, zz.length);
+           const Eq = [],
+             gq = Math.min(lY, qq.length);
```

#### 508. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4513` → after: `L4553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4553) · [Before (L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4513)

```diff
-             void 0 !== iz && (uz |= 1 << fu[iz])
+             void 0 !== Oq && Eq.push(oE[Oq])
```

#### 509. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4517` → after: `L4557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4557) · [Before (L4517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4517)

```diff
-         0 !== bz && (uz.preload(bz), uz.preload(1 << su))
+         gq.length > 0 && (Eq.preload(gq), Eq.preload([PE]))
```

#### 510. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4520-L4521` → after: `L4560-L4563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4560-L4563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4560-L4563) · [Before (L4520-L4521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4520-L4521)

```diff
-     var UE = bz(4616),
-       cE = bz(36191);
+     var JY = gq(36493),
+       kY = gq(4684),
+       RY = gq(36796),
+       UY = gq(36821);
```

#### 511. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4524-L4525` → after: `L4566-L4567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4566-L4567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4566-L4567) · [Before (L4524-L4525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4524-L4525)

```diff
-       const uz = new UE.Howl({
-           ...(0, cE.e)(zz),
+       const Eq = (0, JY.countDecodesAs)(new kY.Howl({
+           ...(0, RY.g)(qq),
```

#### 512. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4528` → after: `L4570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4570) · [Before (L4528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4528)

```diff
-         }),
+         }), "sheet"),
```

#### 513. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4530` → after: `L4572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4572) · [Before (L4530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4530)

```diff
-       return uz.load = () => (uz._preload = !0, bz()), uz
+       return Eq.load = () => (Eq._preload = !0, (0, UY.c)(qq), gq()), Eq
```

#### 514. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4558-L4559` → after: `L4600-L4601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4600-L4601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4600-L4601) · [Before (L4558-L4559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4558-L4559)

```diff
-     var QE = bz(36039),
-       WE = bz(38560);
+     var KY = gq(36619),
+       CY = gq(39155);
```

#### 515. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4568` → after: `L4610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4610) · [Before (L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4568)

```diff
-       return jE ??= new WE.c(new QE.b(IE)), jE
+       return eY ??= new CY.c(new KY.e(DY)), eY
```

#### 516. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4577` → after: `L4619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4619) · [Before (L4577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4577)

```diff
-       Ez.e.get("scriptedCameraFacing") !== zz && Ez.e.set({
+       Yq.b.get("scriptedCameraFacing") !== qq && Yq.b.set({
```

#### 517. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4581-L4586` → after: `L4623-L4628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4623-L4628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4623-L4628) · [Before (L4581-L4586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4581-L4586)

```diff
-     var kE = bz(9165),
-       zn = bz(9125),
-       un = bz(38584),
-       bn = bz(39919),
-       En = bz(3043);
-     const nn = Object.entries(Zz.lc).reduce(((zz, uz) => {
+     var Yl = gq(9464),
+       ll = gq(9433),
+       Ol = gq(39174),
+       ml = gq(40466),
+       xl = gq(3166);
+     const Al = Object.entries(aq.jc).reduce(((qq, Eq) => {
```

#### 518. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4593` → after: `L4635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4635) · [Before (L4593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4593)

```diff
-       return 0 !== ((null !== (bz = zz.itemFlags[uz]) && void 0 !== bz ? bz : 0) & Zz.Gc.Stackable)
+       return 0 !== ((null !== (gq = qq.itemFlags[Eq]) && void 0 !== gq ? gq : 0) & aq.Gc.Stackable)
```

#### 519. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4611` → after: `L4653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4653) · [Before (L4611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4611)

```diff
-           const Ez = null !== (bz = zz.itemHarvests[uz]) && void 0 !== bz ? bz : 0;
+           const Yq = null !== (gq = qq.itemHarvests[Eq]) && void 0 !== gq ? gq : 0;
```

#### 520. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4616-L4617` → after: `L4658-L4659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4658-L4659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4658-L4659) · [Before (L4616-L4617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4616-L4617)

```diff
-           const nz = null !== (bz = zz.itemLevels[uz]) && void 0 !== bz ? bz : Zz.Kc;
-           return nz !== Zz.Kc ? nz : null !== (Ez = (0, zE.harvestsNullLevelOf)(uz)) && void 0 !== Ez ? Ez : void 0
+           const lq = null !== (gq = qq.itemLevels[Eq]) && void 0 !== gq ? gq : aq.Kc;
+           return lq !== aq.Kc ? lq : null !== (Yq = (0, gY.harvestsNullLevelOf)(Eq)) && void 0 !== Yq ? Yq : void 0
```

#### 521. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4638` → after: `L4680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4680) · [Before (L4638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4638)

```diff
-           if (void 0 === uz) throw new Error(`No item is named ${zz}, an item's root`);
+           if (void 0 === Eq) throw new Error(`No item is named ${qq}, an item's root`);
```

#### 522. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4649-L4656` → after: `L4691-L4698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4691-L4698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4691-L4698) · [Before (L4649-L4656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4649-L4656)

```diff
-           blockFlags: On(nz, Zz.I.BYTES, Zz.I.flags),
-           blockHarvestTypes: On(nz, Zz.I.BYTES, Zz.I.harvestType),
-           blockHarvestLevels: On(nz, Zz.I.BYTES, Zz.I.harvestLevel),
-           blockAttachedTops: pn(nz, Zz.I.BYTES, Zz.I.attachedTop),
-           itemFlags: On(iz, Zz.Jc.BYTES, Zz.Jc.flags),
-           itemHarvests: On(iz, Zz.Jc.BYTES, Zz.Jc.harvests),
-           itemLevels: On(iz, Zz.Jc.BYTES, Zz.Jc.level)
-         }, (0, En.m)(Object.freeze(Ez)), (0, bn.h)()
+           blockFlags: Wl(lq, aq.y.BYTES, aq.y.flags),
+           blockHarvestTypes: Wl(lq, aq.y.BYTES, aq.y.harvestType),
+           blockHarvestLevels: Wl(lq, aq.y.BYTES, aq.y.harvestLevel),
+           blockAttachedTops: Nl(lq, aq.y.BYTES, aq.y.attachedTop),
+           itemFlags: Wl(Oq, aq.Ic.BYTES, aq.Ic.flags),
+           itemHarvests: Wl(Oq, aq.Ic.BYTES, aq.Ic.harvests),
+           itemLevels: Wl(Oq, aq.Ic.BYTES, aq.Ic.level)
+         }, (0, xl.m)(Object.freeze(Yq)), (0, ml.f)()
```

#### 523. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4659` → after: `L4701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4701) · [Before (L4659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4659)

```diff
-         if ("number" === typeof zz) return void 0 === (0, En.g)(zz) ? void 0 : zz;
+         if ("number" === typeof qq) return void 0 === (0, xl.h)(qq) ? void 0 : qq;
```

#### 524. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4661` → after: `L4703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4703) · [Before (L4661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4661)

```diff
-         return void 0 === uz && tn.test(zz) ? void 0 === (0, En.g)(+zz) ? void 0 : +zz : uz
+         return void 0 === Eq && ul.test(qq) ? void 0 === (0, xl.h)(+qq) ? void 0 : +qq : Eq
```

#### 525. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4664` → after: `L4706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4706) · [Before (L4664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4664)

```diff
-         if (!zz || zz === kE.b) return kE.c;
+         if (!qq || qq === Yl.b) return Yl.d;
```

#### 526. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4666` → after: `L4708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4708) · [Before (L4666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4666)

```diff
-         if (void 0 === uz) throw new Error(`Item ${zz} not found in registry`);
+         if (void 0 === Eq) throw new Error(`Item ${qq} not found in registry`);
```

#### 527. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4670` → after: `L4712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4712) · [Before (L4670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4670)

```diff
-         return 0 !== zz && void 0 !== (0, En.g)(zz) ? this.metaOf(zz).rootId : zz
+         return 0 !== qq && void 0 !== (0, xl.h)(qq) ? this.metaOf(qq).rootId : qq
```

#### 528. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4673` → after: `L4715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4715) · [Before (L4673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4673)

```diff
-         return this.metas[zz] ??= (0, zn.j)((0, En.g)(zz), zz, this.rootIdOf, (0, zE.rootMetaDescOf)(zz))
+         return this.metas[qq] ??= (0, ll.k)((0, xl.h)(qq), qq, this.rootIdOf, (0, gY.rootMetaDescOf)(qq))
```

#### 529. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4678` → after: `L4720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4720) · [Before (L4678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4678)

```diff
-         if (void 0 === uz) throw new Error(`Invalid block name. You sent ${zz}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
+         if (void 0 === Eq) throw new Error(`Invalid block name. You sent ${qq}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
```

#### 530. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4684-L4685` → after: `L4726-L4727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4726-L4727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4726-L4727) · [Before (L4684-L4685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4684-L4685)

```diff
-         if (void 0 === uz) throw new Error(`Item ${zz} not found in registry`);
-         return (0, En.g)(uz)
+         if (void 0 === Eq) throw new Error(`Item ${qq} not found in registry`);
+         return (0, xl.h)(Eq)
```

#### 531. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4694` → after: `L4736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4736) · [Before (L4694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4694)

```diff
-           bz = void 0 !== Ez && this.isBlockId(Ez) && (0, zE.rootMetaDescOf)(Ez) === zz ? Ez : void 0
+           gq = void 0 !== Yq && this.isBlockId(Yq) && (0, gY.rootMetaDescOf)(Yq) === qq ? Yq : void 0
```

#### 532. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4697` → after: `L4739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4739) · [Before (L4697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4697)

```diff
-         if (!uz) throw new Error(`Invalid block name. You sent ${zz}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
+         if (!Eq) throw new Error(`Invalid block name. You sent ${qq}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
```

#### 533. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4704` → after: `L4746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4746) · [Before (L4704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4704)

```diff
-         return 0 !== zz && (0, En.g)(zz) || kE.b
+         return 0 !== qq && (0, xl.h)(qq) || Yl.b
```

#### 534. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4712` → after: `L4754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4754) · [Before (L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4712)

```diff
-           name: (0, En.g)(uz),
+           name: (0, xl.h)(Eq),
```

#### 535. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4724` → after: `L4766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4766) · [Before (L4724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4724)

```diff
-             Ez = this.options.get((0, un.f)(bz, uz));
+             Yq = this.options.get((0, Ol.c)(gq, Eq));
```

#### 536. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4738-L4739` → after: `L4780-L4781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4780-L4781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4780-L4781) · [Before (L4738-L4739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4738-L4739)

```diff
-           throw new Error(`ClientApi.${zz} is not available yet in the wasm client (${uz})`)
-         }(`getItemStat("${zz}")`, `a table of the stat: the wasm client answers ${Object.keys(Hn).join(", ")}`), uz
+           throw new Error(`ClientApi.${qq} is not available yet in the wasm client (${Eq})`)
+         }(`getItemStat("${qq}")`, `a table of the stat: the wasm client answers ${Object.keys(Bl).join(", ")}`), Eq
```

#### 537. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4744` → after: `L4786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4786) · [Before (L4744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4744)

```diff
-         return null !== nz && void 0 !== nz || "displayName" !== uz ? nz : this.getItemName(zz)
+         return null !== lq && void 0 !== lq || "displayName" !== Eq ? lq : this.getItemName(qq)
```

#### 538. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4750` → after: `L4792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4792) · [Before (L4750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4750)

```diff
-         return this.getClientOption(`${zz}GunStats`)
+         return this.getClientOption(`${qq}GunStats`)
```

#### 539. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4757` → after: `L4799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4799) · [Before (L4757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4757)

```diff
-         return 0 !== ((null !== (uz = this.props.blockFlags[zz]) && void 0 !== uz ? uz : 0) & Zz.H.Solid)
+         return 0 !== ((null !== (Eq = this.props.blockFlags[qq]) && void 0 !== Eq ? Eq : 0) & aq.x.Solid)
```

#### 540. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4764` → after: `L4806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4806) · [Before (L4764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4764)

```diff
-         return 0 !== ((null !== (uz = this.props.blockFlags[zz]) && void 0 !== uz ? uz : 0) & Zz.H.Fluid)
+         return 0 !== ((null !== (Eq = this.props.blockFlags[qq]) && void 0 !== Eq ? Eq : 0) & aq.x.Fluid)
```

#### 541. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4768` → after: `L4810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4810) · [Before (L4768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4768)

```diff
-         return 0 !== ((null !== (uz = this.props.blockFlags[zz]) && void 0 !== uz ? uz : 0) & Zz.H.PlaceOver)
+         return 0 !== ((null !== (Eq = this.props.blockFlags[qq]) && void 0 !== Eq ? Eq : 0) & aq.x.PlaceOver)
```

#### 542. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4772` → after: `L4814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4814) · [Before (L4772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4772)

```diff
-         return null !== (uz = this.props.blockAttachedTops[zz]) && void 0 !== uz ? uz : 0
+         return null !== (Eq = this.props.blockAttachedTops[qq]) && void 0 !== Eq ? Eq : 0
```

#### 543. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4789-L4791` → after: `L4831-L4833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4831-L4833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4831-L4833) · [Before (L4789-L4791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4789-L4791)

```diff
-               for (let zz = 0; zz + Zz.Zd.BYTES <= iz; zz += Zz.Zd.BYTES) Mz.push(Object.freeze({
-                 item: uz.nameOfId(Zz.Zd.item(lz, zz)),
-                 amt: Zz.Zd.amount(lz, zz)
+               for (let qq = 0; qq + aq.be.BYTES <= Oq; qq += aq.be.BYTES) xq.push(Object.freeze({
+                 item: Eq.nameOfId(aq.be.item(mq, qq)),
+                 amt: aq.be.amount(mq, qq)
```

#### 544. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4811-L4817` → after: `L4853-L4859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4853-L4859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4853-L4859) · [Before (L4811-L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4811-L4817)

```diff
-     var Rn = bz(40116),
-       Kn = bz(36386),
-       wn = bz(36369),
-       Xn = bz(36422),
-       fn = bz(35970),
-       sn = bz(39848),
-       rn = bz(41809);
+     var jl = gq(40659),
+       Hl = gq(37004),
+       ol = gq(36989),
+       Pl = gq(37033),
+       Ql = gq(36543),
+       yl = gq(40409),
+       tl = gq(42344);
```

#### 545. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4825` → after: `L4867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4867) · [Before (L4825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4825)

```diff
-       return uz.byteLength < dz.yc ? uz : uz.subarray(0, dz.yc - 1)
+       return Eq.byteLength < Wq.Kc ? Eq : Eq.subarray(0, Wq.Kc - 1)
```

#### 546. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4833` → after: `L4875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4875) · [Before (L4833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4833)

```diff
-         this.keyframesVersion = Nn, this.reloadFrom = null !== (zz = null === (uz = this.view()) || void 0 === uz ? void 0 : uz.version) && void 0 !== zz ? zz : Nn
+         this.keyframesVersion = rl, this.reloadFrom = null !== (qq = null === (Eq = this.view()) || void 0 === Eq ? void 0 : Eq.version) && void 0 !== qq ? qq : rl
```

#### 547. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4836` → after: `L4878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4878) · [Before (L4836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4836)

```diff
-         const uz = 1 === this.deps.core.QEz(zz);
+         const Eq = 1 === this.deps.core.Xlq(qq);
```

#### 548. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4857` → after: `L4899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4899) · [Before (L4857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4857)

```diff
-         this.deps.replay.setCameraMode(rn.c.indexOf(zz))
+         this.deps.replay.setCameraMode(tl.e.indexOf(qq))
```

#### 549. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4861` → after: `L4903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4903) · [Before (L4861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4861)

```diff
-         const uz = Zz.z.replayViewPtr(this.deps.apiView(), 0);
+         const Eq = aq.t.replayViewPtr(this.deps.apiView(), 0);
```

#### 550. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4863-L4864` → after: `L4905-L4906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4905-L4906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4905-L4906) · [Before (L4863-L4864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4863-L4864)

```diff
-         const bz = new DataView(this.deps.buffer(), uz, Zz.Pd.BYTES),
-           Ez = Zz.Pd.version(bz, 0),
+         const gq = new DataView(this.deps.buffer(), Eq, aq.Td.BYTES),
+           Yq = aq.Td.version(gq, 0),
```

#### 551. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4867` → after: `L4909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4909) · [Before (L4867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4867)

```diff
-         const iz = Zz.Pd.markIn(bz, 0),
+         const Oq = aq.Td.markIn(gq, 0),
```

#### 552. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4870-L4875` → after: `L4912-L4917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4912-L4917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4912-L4917) · [Before (L4870-L4875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4870-L4875)

```diff
-             state: Zz.Pd.state(bz, 0),
-             cameraMode: null !== (zz = rn.c[Zz.Pd.cameraMode(bz, 0)]) && void 0 !== zz ? zz : "recording",
-             sd: Zz.Pd.sd(bz, 0),
-             totalTicks: Zz.Pd.totalTicks(bz, 0),
-             speed: Zz.Pd.speed(bz, 0),
-             mark: iz === Zz.Nd ? null : {
+             state: aq.Td.state(gq, 0),
+             cameraMode: null !== (qq = tl.e[aq.Td.cameraMode(gq, 0)]) && void 0 !== qq ? qq : "recording",
+             SB: aq.Td.SB(gq, 0),
+             totalTicks: aq.Td.totalTicks(gq, 0),
+             speed: aq.Td.speed(gq, 0),
+             mark: Oq === aq.Sd ? null : {
```

#### 553. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4877` → after: `L4919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4919) · [Before (L4877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4877)

```diff
-               outTick: Zz.Pd.markOut(bz, 0)
+               outTick: aq.Td.markOut(gq, 0)
```

#### 554. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4879` → after: `L4921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4921) · [Before (L4879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4879)

```diff
-             editVersion: Zz.Pd.editVersion(bz, 0)
+             editVersion: aq.Td.editVersion(gq, 0)
```

#### 555. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4887` → after: `L4929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4929) · [Before (L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4887)

```diff
-         const uz = this.reloadFrom === Nn && zz.state !== dz.dd.Cropping && zz.state !== dz.dd.None,
+         const Eq = this.reloadFrom === rl && qq.state !== Wq.rd.Cropping && qq.state !== Wq.rd.None,
```

#### 556. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4892` → after: `L4934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4934) · [Before (L4892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4892)

```diff
-         } = this.deps, nz = Ez.WEz(), iz = Ez.xK(), lz = [];
+         } = this.deps, lq = Yq.wlq(), Oq = Yq.yd(), mq = [];
```

#### 557. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4894` → after: `L4936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4936) · [Before (L4894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4894)

```diff
-           const zz = new DataView(this.deps.buffer(), iz, nz * dz.nc);
+           const qq = new DataView(this.deps.buffer(), Oq, lq * Wq.uc);
```

#### 558. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4896` → after: `L4938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4938) · [Before (L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4896)

```diff
-             const bz = uz * dz.nc,
+             const gq = Eq * Wq.uc,
```

#### 559. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4899-L4902` → after: `L4941-L4944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4941-L4944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4941-L4944) · [Before (L4899-L4902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4899-L4902)

```diff
-               sd: zz.getUint32(bz + dz.wc, !0),
-               position: [Ez(dz.tc), Ez(dz.tc + 8), Ez(dz.tc + 16)],
-               direction: [Ez(dz.qc), Ez(dz.qc + 8), Ez(dz.qc + 16)],
-               easing: [Ez(dz.rc), Ez(dz.rc + 8), Ez(dz.rc + 16), Ez(dz.rc + 24)]
+               SB: qq.getUint32(gq + Wq.Ic, !0),
+               position: [Yq(Wq.Ec), Yq(Wq.Ec + 8), Yq(Wq.Ec + 16)],
+               direction: [Yq(Wq.xc), Yq(Wq.xc + 8), Yq(Wq.xc + 16)],
+               easing: [Yq(Wq.Ac), Yq(Wq.Ac + 8), Yq(Wq.Ac + 16), Yq(Wq.Ac + 24)]
```

#### 560. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4910` → after: `L4952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4952) · [Before (L4910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4910)

```diff
-           uz = [Zz.z.eye(zz, 0, 0), Zz.z.eye(zz, 0, 1), Zz.z.eye(zz, 0, 2)];
+           Eq = [aq.t.eye(qq, 0, 0), aq.t.eye(qq, 0, 1), aq.t.eye(qq, 0, 2)];
```

#### 561. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4914` → after: `L4956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4956) · [Before (L4914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4914)

```diff
-         }(Zz.z.heading(zz, 0), Zz.z.pitch(zz, 0)))
+         }(aq.t.heading(qq, 0), aq.t.pitch(qq, 0)))
```

#### 562. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4917` → after: `L4959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4959) · [Before (L4917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4917)

```diff
-         return this.deps.replay.setKeyframe(zz.sd, Float64Array.from([...zz.position, ...zz.direction, ...zz.easing]))
+         return this.deps.replay.setKeyframe(qq.SB, Float64Array.from([...qq.position, ...qq.direction, ...qq.easing]))
```

#### 563. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4927` → after: `L4969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4969) · [Before (L4927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4927)

```diff
-         return this.deps.replay.setMark(null !== (uz = null === zz || void 0 === zz ? void 0 : zz.inTick) && void 0 !== uz ? uz : -1, null !== (bz = null === zz || void 0 === zz ? void 0 : zz.outTick) && void 0 !== bz ? bz : -1)
+         return this.deps.replay.setMark(null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.inTick) && void 0 !== Eq ? Eq : -1, null !== (gq = null === qq || void 0 === qq ? void 0 : qq.outTick) && void 0 !== gq ? gq : -1)
```

#### 564. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4944` → after: `L4986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4986) · [Before (L4944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4944)

```diff
-         return null !== bz && (0, Zz.Bf)(bz, 0, zz, null === uz ? vn : xn.encode(uz))
+         return null !== gq && (0, aq.Cf)(gq, 0, qq, null === Eq ? vl : hl.encode(Eq))
```

#### 565. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4949` → after: `L4991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4991) · [Before (L4949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4949)

```diff
-         return null !== nz && (0, Zz.uf)(nz, 0, uz, bz, iz, xn.encode(zz))
+         return null !== lq && (0, aq.xf)(lq, 0, Eq, gq, Oq, hl.encode(qq))
```

#### 566. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4953` → after: `L4995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4995) · [Before (L4953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4953)

```diff
-         return null !== nz && (0, Zz.Ef)(nz, 0, zz, uz, Math.max(0, bz), xn.encode(Ez))
+         return null !== lq && (0, aq.Df)(lq, 0, qq, Eq, Math.max(0, gq), hl.encode(Yq))
```

#### 567. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4961` → after: `L5003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5003) · [Before (L4961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4961)

```diff
-                 return zz + Qb.fb + (null !== (bz = null === uz || void 0 === uz ? void 0 : uz.byteLength) && void 0 !== bz ? bz : 0)
+                 return qq + Xg.mb + (null !== (gq = null === Eq || void 0 === Eq ? void 0 : Eq.byteLength) && void 0 !== gq ? gq : 0)
```

#### 568. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4968` → after: `L5010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5010) · [Before (L4968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4968)

```diff
-               Ez.setUint16(nz, null !== (iz = null === lz || void 0 === lz ? void 0 : lz.byteLength) && void 0 !== iz ? iz : dz.yc, !0), nz += Qb.fb, null !== lz && (bz.set(lz, nz), nz += lz.byteLength)
+               Yq.setUint16(lq, null !== (Oq = null === mq || void 0 === mq ? void 0 : mq.byteLength) && void 0 !== Oq ? Oq : Wq.Kc, !0), lq += Xg.mb, null !== mq && (gq.set(mq, lq), lq += mq.byteLength)
```

#### 569. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4972` → after: `L5014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5014) · [Before (L4972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4972)

```diff
-         return null !== iz && (0, Zz.xf)(iz, 0, null !== (Ez = zz.id) && void 0 !== Ez ? Ez : Zz.bd, null !== (nz = uz.id) && void 0 !== nz ? nz : Zz.bd, lz)
+         return null !== Oq && (0, aq.Bf)(Oq, 0, null !== (Yq = qq.id) && void 0 !== Yq ? Yq : aq.gd, null !== (lq = Eq.id) && void 0 !== lq ? lq : aq.gd, mq)
```

#### 570. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4983` → after: `L5025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5025) · [Before (L4983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4983)

```diff
-         this.deps.core.eEz()
+         this.deps.core.Klq()
```

#### 571. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5001` → after: `L5043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5043) · [Before (L5001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5001)

```diff
-         }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (uz = zz.now) && void 0 !== uz ? uz : () => performance.now()
+         }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (Eq = qq.now) && void 0 !== Eq ? Eq : () => performance.now()
```

#### 572. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5012` → after: `L5054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5054) · [Before (L5012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5012)

```diff
-         this.live && (this.viewerShown(!0 === (null === (uz = (bz = this.deps).viewerOpen) || void 0 === uz ? void 0 : uz.call(bz))), this.deps.client.recorderSession(zz, (0, rn.e)()))
+         this.live && (this.viewerShown(!0 === (null === (Eq = (gq = this.deps).viewerOpen) || void 0 === Eq ? void 0 : Eq.call(gq))), this.deps.client.recorderSession(qq, (0, tl.i)()))
```

#### 573. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5019` → after: `L5061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5061) · [Before (L5019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5019)

```diff
-         this.live && (this.state.recording || !0 !== (null === (zz = (uz = this.deps).viewerOpen) || void 0 === zz ? void 0 : zz.call(uz))) ? this.deps.client.recorderControl(dz.Pc.ToggleRecording) : this.deps.notify(Xn.d.closeViewerFirst)
+         this.live && (this.state.recording || !0 !== (null === (qq = (Eq = this.deps).viewerOpen) || void 0 === qq ? void 0 : qq.call(Eq))) ? this.deps.client.recorderControl(Wq._c.ToggleRecording) : this.deps.notify(Pl.d.closeViewerFirst)
```

#### 574. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5022` → after: `L5064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5064) · [Before (L5022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5022)

```diff
-         this.live ? this.deps.client.recorderControl(dz.Pc.SaveClip) : this.deps.notify(Xn.d.clippingNotOn)
+         this.live ? this.deps.client.recorderControl(Wq._c.SaveClip) : this.deps.notify(Pl.d.clippingNotOn)
```

#### 575. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5025` → after: `L5067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5067) · [Before (L5025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5025)

```diff
-         this.live && this.deps.client.recorderControl(zz ? dz.Pc.ViewerOpened : dz.Pc.ViewerClosed)
+         this.live && this.deps.client.recorderControl(qq ? Wq._c.ViewerOpened : Wq._c.ViewerClosed)
```

#### 576. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5062` → after: `L5104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5104) · [Before (L5062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5062)

```diff
-           case dz.Mc.RecordingStarted:
+           case Wq.Xc.RecordingStarted:
```

#### 577. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5069-L5070` → after: `L5111-L5112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5111-L5112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5111-L5112) · [Before (L5069-L5070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5069-L5070)

```diff
-           case dz.Mc.RecordingStopped:
-             this.stopRecording(), Ez(nz.recordingStopped), this.saveState(dz.Yc.Recording, "saving");
+           case Wq.Xc.RecordingStopped:
+             this.stopRecording(), Yq(lq.recordingStopped), this.saveState(Wq.id.Recording, "saving");
```

#### 578. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5072` → after: `L5114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5114) · [Before (L5072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5072)

```diff
-           case dz.Mc.RecordingDiscarded:
+           case Wq.Xc.RecordingDiscarded:
```

#### 579. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5075` → after: `L5117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5117) · [Before (L5075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5075)

```diff
-           case dz.Mc.RecordingTurnedOff:
+           case Wq.Xc.RecordingTurnedOff:
```

#### 580. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5078` → after: `L5120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5120) · [Before (L5078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5078)

```diff
-           case dz.Mc.LimitReached:
+           case Wq.Xc.LimitReached:
```

#### 581. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5081-L5082` → after: `L5123-L5124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5123-L5124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5123-L5124) · [Before (L5081-L5082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5081-L5082)

```diff
-           case dz.Mc.ClipSaved:
-             this.saveState(dz.Yc.Clip, "saving");
+           case Wq.Xc.ClipSaved:
+             this.saveState(Wq.id.Clip, "saving");
```

#### 582. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5084` → after: `L5126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5126) · [Before (L5084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5084)

```diff
-           case dz.Mc.ClipEmpty:
+           case Wq.Xc.ClipEmpty:
```

#### 583. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5087` → after: `L5129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5129) · [Before (L5087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5087)

```diff
-           case dz.Mc.ClippingNotOn:
+           case Wq.Xc.ClippingNotOn:
```

#### 584. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5090` → after: `L5132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5132) · [Before (L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5090)

```diff
-           case dz.Mc.Disallowed:
+           case Wq.Xc.Disallowed:
```

#### 585. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5093` → after: `L5135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5135) · [Before (L5093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5093)

```diff
-           case dz.Mc.ClippingOn:
+           case Wq.Xc.ClippingOn:
```

#### 586. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5100` → after: `L5142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5142) · [Before (L5100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5100)

```diff
-           case dz.Mc.ClippingOff:
+           case Wq.Xc.ClippingOff:
```

#### 587. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5107` → after: `L5149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5149) · [Before (L5107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5107)

```diff
-           case dz.Mc.ClipSettingsChanged:
+           case Wq.Xc.ClipSettingsChanged:
```

#### 588. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5113` → after: `L5155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5155) · [Before (L5113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5113)

```diff
-           case dz.Mc.SaveBusy:
+           case Wq.Xc.SaveBusy:
```

#### 589. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5116` → after: `L5158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5158) · [Before (L5116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5116)

```diff
-           case dz.Mc.CloseViewerFirst:
+           case Wq.Xc.CloseViewerFirst:
```

#### 590. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5121` → after: `L5163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5163) · [Before (L5121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5121)

```diff
-         this.deps.download(uz), this.saveState(zz, "done"), this.deps.notify(zz === dz.Yc.Clip ? Xn.d.clipSaved : Xn.d.recordingSaved)
+         this.deps.download(Eq), this.saveState(qq, "done"), this.deps.notify(qq === Wq.id.Clip ? Pl.d.clipSaved : Pl.d.recordingSaved)
```

#### 591. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5124` → after: `L5166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5166) · [Before (L5124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5124)

```diff
-         this.saveState(zz, "failed"), this.deps.notify(zz === dz.Yc.Clip ? Xn.d.clipFailed : Xn.d.recordingFailed)
+         this.saveState(qq, "failed"), this.deps.notify(qq === Wq.id.Clip ? Pl.d.clipFailed : Pl.d.recordingFailed)
```

#### 592. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5146` → after: `L5188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5188) · [Before (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5146)

```diff
-         if (uz + Qb.fb > bz) return null;
+         if (Eq + Xg.mb > gq) return null;
```

#### 593. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5148` → after: `L5190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5190) · [Before (L5148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5148)

```diff
-         if (uz += Qb.fb, Ez !== dz.yc) {
+         if (Eq += Xg.mb, Yq !== Wq.Kc) {
```

#### 594. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5153` → after: `L5195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5195) · [Before (L5153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5153)

```diff
-       return uz === bz ? nz : null
+       return Eq === gq ? lq : null
```

#### 595. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5169` → after: `L5211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5211) · [Before (L5169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5169)

```diff
-               case dz.Zc.Cleared:
+               case Wq.ld.Cleared:
```

#### 596. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5171` → after: `L5213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5213) · [Before (L5171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5171)

```diff
-               case dz.Zc.Text:
+               case Wq.ld.Text:
```

#### 597. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5173` → after: `L5215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5215) · [Before (L5173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5173)

```diff
-               case dz.Zc.Int:
+               case Wq.ld.Int:
```

#### 598. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5175` → after: `L5217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5217) · [Before (L5175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5175)

```diff
-               case dz.Zc.Double:
+               case Wq.ld.Double:
```

#### 599. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5190` → after: `L5232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5232) · [Before (L5190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5190)

```diff
-               case dz.$c.FlyingText: {
+               case Wq.pd.FlyingText: {
```

#### 600. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5194-L5195` → after: `L5236-L5237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5236-L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5236-L5237) · [Before (L5194-L5195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5194-L5195)

```diff
-                   zl: bz,
-                   ki: Ez,
+                   ng: gq,
+                   hg: Yq,
```

#### 601. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5200` → after: `L5242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5242) · [Before (L5200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5200)

```diff
-               case dz.$c.PlayerKilled: {
+               case Wq.pd.PlayerKilled: {
```

#### 602. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5210` → after: `L5252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5252) · [Before (L5210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5210)

```diff
-               case dz.$c.Killfeed: {
+               case Wq.pd.Killfeed: {
```

#### 603. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5252` → after: `L5294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5294) · [Before (L5252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5252)

```diff
-       return (zz, uz, iz, lz) => !(zz < dz.V.ReplayFailed || zz > dz.V.RecorderEvent) && (bz = uz, Ez = !0, (0, Zz.oe)(zz, uz, iz, lz, nz) && Ez)
+       return (qq, Eq, Oq, mq) => !(qq < Wq.S.ReplayFailed || qq > Wq.S.RecorderEvent) && (gq = Eq, Yq = !0, (0, aq.me)(qq, Eq, Oq, mq, lq) && Yq)
```

#### 604. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5268` → after: `L5310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5310) · [Before (L5268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5268)

```diff
-               if (nz + dz.S > bz.byteLength) throw new Error(`the recorder module's events end mid-head at ${nz}`);
+               if (lq + Wq.P > gq.byteLength) throw new Error(`the recorder module's events end mid-head at ${lq}`);
```

#### 605. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5272-L5274` → after: `L5314-L5316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5314-L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5314-L5316) · [Before (L5272-L5274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5272-L5274)

```diff
-                 Mz = nz + dz.S;
-               if (Mz + lz > bz.byteLength || !uz(iz, Ez, Mz, lz)) throw new Error(`the recorder module wrote a malformed event ${iz} (${lz} bytes) at ${nz}`);
-               nz = Mz + (0, dz.ie)(lz)
+                 xq = lq + Wq.P;
+               if (xq + mq > gq.byteLength || !Eq(Oq, Yq, xq, mq)) throw new Error(`the recorder module wrote a malformed event ${Oq} (${mq} bytes) at ${lq}`);
+               lq = xq + (0, Wq.Ce)(mq)
```

#### 606. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5292` → after: `L5334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5334) · [Before (L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5292)

```diff
-         const bz = null !== (uz = this.parts.get(zz.save)) && void 0 !== uz ? uz : [];
+         const gq = null !== (Eq = this.parts.get(qq.save)) && void 0 !== Eq ? Eq : [];
```

#### 607. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5316` → after: `L5358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5358) · [Before (L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5316)

```diff
-       return bz.e(57).then((() => bz(41840)))
+       return gq.e(58).then((() => gq(42375)))
```

#### 608. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5341` → after: `L5383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5383) · [Before (L5341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5341)

```diff
-             uz === dz.Yc.Edited ? null === (Ez = this.viewer) || void 0 === Ez || Ez.saveDone(bz) : this.recorder.fileReady(uz, bz)
+             Eq === Wq.id.Edited ? null === (Yq = this.viewer) || void 0 === Yq || Yq.saveDone(gq) : this.recorder.fileReady(Eq, gq)
```

#### 609. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5373` → after: `L5415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5415) · [Before (L5373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5373)

```diff
-               case dz.Mc.FileDiscarded:
+               case Wq.Xc.FileDiscarded:
```

#### 610. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5376` → after: `L5418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5418) · [Before (L5376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5376)

```diff
-               case dz.Mc.SaveFailed:
+               case Wq.Xc.SaveFailed:
```

#### 611. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5379` → after: `L5421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5421) · [Before (L5379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5379)

```diff
-               case dz.Mc.SaveBusy:
+               case Wq.Xc.SaveBusy:
```

#### 612. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5402` → after: `L5444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5444) · [Before (L5402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5402)

```diff
-         return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (zz = this.deps.loadViewer) && void 0 !== zz ? zz : qn)().catch((zz => {
+         return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (qq = this.deps.loadViewer) && void 0 !== qq ? qq : pl)().catch((qq => {
```

#### 613. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5420` → after: `L5462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5462) · [Before (L5420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5420)

```diff
-           zz > 0 && this.recorder.sd()
+           qq > 0 && this.recorder.SB()
```

#### 614. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5432` → after: `L5474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5474) · [Before (L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5432)

```diff
-         zz === dz.Yc.Edited ? null === (uz = this.viewer) || void 0 === uz || uz.saveFailed(!1) : this.recorder.failed(zz)
+         qq === Wq.id.Edited ? null === (Eq = this.viewer) || void 0 === Eq || Eq.saveFailed(!1) : this.recorder.failed(qq)
```

#### 615. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5435-L5438` → after: `L5477-L5480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5477-L5480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5477-L5480) · [Before (L5435-L5438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5435-L5438)

```diff
-     var Un = bz(39779),
-       cn = bz(39798),
-       gn = bz(4567),
-       Sn = bz(40198);
+     var Ll = gq(40350),
+       Jl = gq(40366),
+       kl = gq(4627),
+       Rl = gq(40739);
```

#### 616. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5445` → after: `L5487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5487) · [Before (L5445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5445)

```diff
-         const bz = (0, hz.p)(0, performance.now()),
+         const gq = (0, pq.q)(0, performance.now()),
```

#### 617. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5447-L5448` → after: `L5489-L5490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5489-L5490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5489-L5490) · [Before (L5447-L5448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5447-L5448)

```diff
-         (0, Sn.h)((() => {
-           (0, hz.r)(dz.pb.MouseDown, 0, 0, 0, bz), (0, hz.r)(dz.pb.MouseMove, 0, zz * Ez, uz * Ez, 0), (0, hz.r)(dz.pb.MouseUp, 0, 0, 0, bz)
+         (0, Rl.g)((() => {
+           (0, pq.u)(Wq.sb.MouseDown, 0, 0, 0, gq), (0, pq.u)(Wq.sb.MouseMove, 0, qq * Yq, Eq * Yq, 0), (0, pq.u)(Wq.sb.MouseUp, 0, 0, 0, gq)
```

#### 618. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5453` → after: `L5495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5495) · [Before (L5453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5453)

```diff
-         this.analogue[0] = null !== (uz = null === zz || void 0 === zz ? void 0 : zz.x) && void 0 !== uz ? uz : 0, this.analogue[1] = null !== (bz = null === zz || void 0 === zz ? void 0 : zz.y) && void 0 !== bz ? bz : 0, this.send()
+         this.analogue[0] = null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.x) && void 0 !== Eq ? Eq : 0, this.analogue[1] = null !== (gq = null === qq || void 0 === qq ? void 0 : qq.y) && void 0 !== gq ? gq : 0, this.send()
```

#### 619. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5456-L5457` → after: `L5498-L5499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5498-L5499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5498-L5499) · [Before (L5456-L5457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5456-L5457)

```diff
-         const bz = "freeCamUp" === zz ? Zz.fc.Up : Zz.fc.Down;
-         this.keys = uz ? this.keys | bz : this.keys & ~bz, this.send()
+         const gq = "freeCamUp" === qq ? aq.Yb.Up : aq.Yb.Down;
+         this.keys = Eq ? this.keys | gq : this.keys & ~gq, this.send()
```

#### 620. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5464` → after: `L5506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5506) · [Before (L5464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5464)

```diff
-         this.unsent = null !== zz && !(0, Zz.Ce)(zz, 0, this.analogue, this.keys)
+         this.unsent = null !== qq && !(0, aq.ze)(qq, 0, this.analogue, this.keys)
```

#### 621. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5467-L5468` → after: `L5509-L5510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5509-L5510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5509-L5510) · [Before (L5467-L5468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5467-L5468)

```diff
-     var Dn = bz(696),
-       Qn = bz(301),
+     var Fl = gq(700),
+       sl = gq(278),
```

#### 622. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5470` → after: `L5512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5512) · [Before (L5470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5470)

```diff
-       en = bz(8908);
+       wl = gq(9189);
```

#### 623. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5473-L5474` → after: `L5515-L5516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5515-L5516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5515-L5516) · [Before (L5473-L5474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5473-L5474)

```diff
-       const zz = Ez.e.get("clientEscMenuOptions"),
-         uz = (0, Dn.n)(zz);
+       const qq = Yq.b.get("clientEscMenuOptions"),
+         Eq = (0, Fl.j)(qq);
```

#### 624. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5476` → after: `L5518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5518) · [Before (L5476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5476)

```diff
-         mouse: (0, Wn.isMobile)() ? uz : zz.mouseSensitivity,
+         mouse: (0, Xl.isMobile)() ? Eq : qq.mouseSensitivity,
```

#### 625. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5483-L5484` → after: `L5525-L5526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5525-L5526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5525-L5526) · [Before (L5483-L5484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5483-L5484)

```diff
-       const zz = Ez.e.get("clientEscMenuOptions"),
-         uz = Ez.e.get("isTouchScreen") ? (0, Dn.n)(zz) : zz.mouseSensitivity,
+       const qq = Yq.b.get("clientEscMenuOptions"),
+         Eq = Yq.b.get("isTouchScreen") ? (0, Fl.j)(qq) : qq.mouseSensitivity,
```

#### 626. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5486` → after: `L5528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5528) · [Before (L5486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5486)

```diff
-       return bz > 0 ? uz / bz : 1
+       return gq > 0 ? Eq / gq : 1
```

#### 627. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5491` → after: `L5533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5533) · [Before (L5491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5491)

```diff
-         zz.setSoundPrefs(Ez.e.get("soundVolume"), Ez.e.get("soundOnFromAd"))
+         qq.setSoundPrefs(Yq.b.get("soundVolume"), Yq.b.get("soundOnFromAd"))
```

#### 628. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5500` → after: `L5542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5542) · [Before (L5500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5500)

```diff
-         } = Ez.e.get("clientEscMenuOptions"), Mz = {
+         } = Yq.b.get("clientEscMenuOptions"), xq = {
```

#### 629. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5506` → after: `L5548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5548) · [Before (L5506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5506)

```diff
-         bz && (0, dz.Wd)(bz) === (0, dz.Wd)(Mz) && bz.fogChunks === iz || (bz = Mz, zz.setEnvPrefs(bz))
+         gq && (0, Wq.re)(gq) === (0, Wq.re)(xq) && gq.fogChunks === Oq || (gq = xq, qq.setEnvPrefs(gq))
```

#### 630. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5511` → after: `L5553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5553) · [Before (L5511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5511)

```diff
-           const zz = Ez.e.get("clientEscMenuOptions");
+           const qq = Yq.b.get("clientEscMenuOptions");
```

#### 631. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5513` → after: `L5555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5555) · [Before (L5513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5513)

```diff
-             nametagsHidden: Ez.e.get("areNametagsHidden"),
+             nametagsHidden: Yq.b.get("areNametagsHidden"),
```

#### 632. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5517` → after: `L5559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5559) · [Before (L5517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5517)

```diff
-             ezTowering: zz.ezTowering && (0, Qn.g)(),
+             ezTowering: qq.ezTowering && (0, sl.f)(),
```

#### 633. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5520` → after: `L5562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5562) · [Before (L5520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5520)

```diff
-             nametagCutDistance: (0, en.d)()
+             nametagCutDistance: (0, wl.g)()
```

#### 634. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5531` → after: `L5573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5573) · [Before (L5531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5531)

```diff
-       const Oz = [(0, lz.o)("appManagerUpdated|soundVolume", uz), (0, lz.o)("appManagerUpdated|soundOnFromAd", uz), (0, lz.o)("appManagerUpdated|clientEscMenuOptions", (() => {
+       const uq = [(0, mq.k)("appManagerUpdated|soundVolume", Eq), (0, mq.k)("appManagerUpdated|soundOnFromAd", Eq), (0, mq.k)("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 635. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5533` → after: `L5575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5575) · [Before (L5533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5533)

```diff
-       })), (0, lz.o)("appManagerUpdated|areNametagsHidden", Mz), (0, lz.o)("appManagerUpdated|showDistantNametags", Mz)];
+       })), (0, mq.k)("appManagerUpdated|areNametagsHidden", xq), (0, mq.k)("appManagerUpdated|showDistantNametags", xq)];
```

#### 636. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5538-L5539` → after: `L5580-L5581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5580-L5581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5580-L5581) · [Before (L5538-L5539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5538-L5539)

```diff
-     var Cn = bz(40126),
-       Yn = bz(40128);
+     var el = gq(40671),
+       Dl = gq(40676);
```

#### 637. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5560` → after: `L5602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5602) · [Before (L5560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5560)

```diff
-         return null !== (0, Cn.b)(this, kn)[kn] || (0, Cn.b)(this, zi)[zi]
+         return null !== (0, el.d)(this, qO)[qO] || (0, el.d)(this, EO)[EO]
```

#### 638. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5564-L5565` → after: `L5606-L5607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5606-L5607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5606-L5607) · [Before (L5564-L5565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5564-L5565)

```diff
-         const uz = (0, Cn.b)(this, ui)[ui];
-         (0, Cn.b)(this, zi)[zi] = !0;
+         const Eq = (0, el.d)(this, gO)[gO];
+         (0, el.d)(this, EO)[EO] = !0;
```

#### 639. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5569` → after: `L5611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5611) · [Before (L5569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5569)

```diff
-           (0, Cn.b)(this, zi)[zi] = !1
+           (0, el.d)(this, EO)[EO] = !1
```

#### 640. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5571` → after: `L5613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5613) · [Before (L5571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5571)

```diff
-         if (uz !== (0, Cn.b)(this, ui)[ui]) return "refused";
+         if (Eq !== (0, el.d)(this, gO)[gO]) return "refused";
```

#### 641. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5580-L5581` → after: `L5622-L5623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5622-L5623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5622-L5623) · [Before (L5580-L5581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5580-L5581)

```diff
-           0 !== Mz ? (new Uint8Array(uz.buffer, Mz, lz.length).set(lz), zz.jEz(bz.headLen, Ez, nz) && (iz = "sealing")) : iz = "tooLarge"
-         }), !0), "sealing" !== iz ? (bz.end(), iz) : ((0, Cn.b)(this, kn)[kn] = bz, "sealing")
+           0 !== xq ? (new Uint8Array(Eq.buffer, xq, mq.length).set(mq), qq.Clq(gq.headLen, Yq, lq) && (Oq = "sealing")) : Oq = "tooLarge"
+         }), !0), "sealing" !== Oq ? (gq.end(), Oq) : ((0, el.d)(this, qO)[qO] = gq, "sealing")
```

#### 642. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5584` → after: `L5626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5626) · [Before (L5584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5584)

```diff
-         const zz = (0, Cn.b)(this, kn)[kn];
+         const qq = (0, el.d)(this, qO)[qO];
```

#### 643. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5589-L5591` → after: `L5631-L5633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5631-L5633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5631-L5633) · [Before (L5589-L5591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5589-L5591)

```diff
-             uz = zz.IEz(), uz > 0 && (bz = zz.BEz())
-           }))) return (0, Cn.b)(this, bi)[bi](zz, "stopped");
-         if (uz < 0) return (0, Cn.b)(this, bi)[bi](zz, "read");
+             Eq = qq.Ilq(), Eq > 0 && (gq = qq.elq())
+           }))) return (0, el.d)(this, YO)[YO](qq, "stopped");
+         if (Eq < 0) return (0, el.d)(this, YO)[YO](qq, "read");
```

#### 644. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5601` → after: `L5643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5643) · [Before (L5601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5601)

```diff
-           zz.CEz()
+           qq.Dlq()
```

#### 645. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5603` → after: `L5645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5645) · [Before (L5603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5603)

```diff
-         const lz = (0, Cn.b)(this, bi)[bi](zz, iz ? "givenUp" : "stopped");
+         const mq = (0, el.d)(this, YO)[YO](qq, Oq ? "givenUp" : "stopped");
```

#### 646. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5607-L5608` → after: `L5649-L5650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5649-L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5649-L5650) · [Before (L5607-L5608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5607-L5608)

```diff
-         (0, Cn.b)(this, ui)[ui]++;
-         const zz = (0, Cn.b)(this, kn)[kn];
+         (0, el.d)(this, gO)[gO]++;
+         const qq = (0, el.d)(this, qO)[qO];
```

#### 647. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5610-L5611` → after: `L5652-L5653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5652-L5653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5652-L5653) · [Before (L5610-L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5610-L5611)

```diff
-           zz.CEz()
-         })), (0, Cn.b)(this, bi)[bi](zz, "stopped"))
+           qq.Dlq()
+         })), (0, el.d)(this, YO)[YO](qq, "stopped"))
```

#### 648. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5616` → after: `L5658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5658) · [Before (L5616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5616)

```diff
-       return (0, Cn.b)(this, kn)[kn] = null, zz.end(), uz
+       return (0, el.d)(this, qO)[qO] = null, qq.end(), Eq
```

#### 649. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5637` → after: `L5679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5679) · [Before (L5637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5637)

```diff
-         if (zz.busy() || !li(zz.memoryBytes(), zz.clipSeconds())) return "MZ";
+         if (qq.busy() || !xO(qq.memoryBytes(), qq.clipSeconds())) return "jN";
```

#### 650. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5645` → after: `L5687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5687) · [Before (L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5645)

```diff
-         if (!bz) return zz.trapped() ? "trapped" : zz.SZ() ? "SZ" : "failed";
+         if (!gq) return qq.trapped() ? "trapped" : qq.eN() ? "eN" : "failed";
```

#### 651. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5652` → after: `L5694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5694) · [Before (L5652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5652)

```diff
-       Oi = new Set([dz.Pc.ToggleRecording, dz.Pc.SaveClip]);
+       BO = new Set([Wq._c.ToggleRecording, Wq._c.SaveClip]);
```

#### 652. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5657` → after: `L5699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5699) · [Before (L5657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5657)

```diff
-       Ki = (0, Yn.d)("SZ"),
+       dO = (0, Dl.d)("eN"),
```

#### 653. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5792-L5793` → after: `L5834-L5835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5834-L5835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5834-L5835) · [Before (L5792-L5793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5792-L5793)

```diff
-         }), (0, Cn.b)(this, Ti)[Ti] = new Ei({
-           ensureLoaded: () => (0, Cn.b)(this, mi)[mi](),
+         }), (0, el.d)(this, bO)[bO] = new lO({
+           ensureLoaded: () => (0, el.d)(this, zO)[zO](),
```

#### 654. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5795-L5796` → after: `L5837-L5838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5837-L5838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5837-L5838) · [Before (L5795-L5796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5795-L5796)

```diff
-             uz && (0, Cn.b)(this, Pi)[Pi]("an edited save's stage");
-             const bz = (0, Cn.b)(this, Yi)[Yi](((uz, bz) => (zz(uz, bz), !0)));
+             Eq && (0, el.d)(this, ZO)[ZO]("an edited save's stage");
+             const gq = (0, el.d)(this, IO)[IO](((Eq, gq) => (qq(Eq, gq), !0)));
```

#### 655. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5804` → after: `L5846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5846) · [Before (L5804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5804)

```diff
-         return null !== (0, Cn.b)(this, Fi)[Fi]
+         return null !== (0, el.d)(this, NO)[NO]
```

#### 656. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5807` → after: `L5849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5849) · [Before (L5807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5807)

```diff
-         return (0, Cn.b)(this, Ri)[Ri]
+         return (0, el.d)(this, VO)[VO]
```

#### 657. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5810` → after: `L5852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5852) · [Before (L5810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5810)

```diff
-         return null !== (0, Cn.b)(this, Xi)[Xi]
+         return null !== (0, el.d)(this, HO)[HO]
```
