# Changed — Bundle Modifications Report (Part 058 / 069)

- **Updated at**: `2026-11-25T01:02 JST`
- **Part**: `58 / 69` (**398** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 057](part-057.md) · [Part 059 →](part-059.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (w4ddu.56408518 → sn3sfj.2522680a · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (841 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226)

#### 208. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2180` → after: `L2359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2359) · [Before (L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2180)

```diff
-             if (!this.api.readPosition(CC, Uz)) return ez.e;
+             if (!this.api.readPosition(pp, Ki)) return Mi.c;
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2190-L2191` → after: `L2369-L2370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2369-L2370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2369-L2370) · [Before (L2190-L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2190-L2191)

```diff
-           if (0 === gC.w.viewProj(CC, 0, 3) && 0 === gC.w.viewProj(CC, 0, 7) && 0 === gC.w.viewProj(CC, 0, 11)) return null;
-           for (let zC = 0; zC < 3; zC++) Bz[zC] = gC.w.eye(CC, 0, zC)
+           if (0 === yp.q.viewProj(pp, 0, 3) && 0 === yp.q.viewProj(pp, 0, 7) && 0 === yp.q.viewProj(pp, 0, 11)) return null;
+           for (let ip = 0; ip < 3; ip++) Vi[ip] = yp.q.eye(pp, 0, ip)
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2193` → after: `L2372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2372) · [Before (L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2193)

```diff
-         return Number.isFinite(Bz[0] + Bz[1] + Bz[2]) ? Bz : null
+         return Number.isFinite(Vi[0] + Vi[1] + Vi[2]) ? Vi : null
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2196` → after: `L2375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2375) · [Before (L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2196)

```diff
-         if (!Number.isInteger(QC) || QC < 0 || QC > 65535) throw new Error(`Invalid block id ${QC}`);
+         if (!Number.isInteger(Op) || Op < 0 || Op > 65535) throw new Error(`Invalid block id ${Op}`);
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2202` → after: `L2381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2381) · [Before (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2202)

```diff
-         if (1 === this.api.queries.TY(wC, bC, nC, QC)) {
+         if (1 === this.api.queries.qE(op, Ip, Sp, Op)) {
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2231` → after: `L2410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2410) · [Before (L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2231)

```diff
-                 look: gC.hc.FlatOnTop,
+                 look: yp.Lb.FlatOnTop,
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2234` → after: `L2413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2413) · [Before (L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2234)

```diff
-                 look: gC.hc.FlatOpaque,
+                 look: yp.Lb.FlatOpaque,
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2237` → after: `L2416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2416) · [Before (L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2237)

```diff
-                 look: gC.hc.Flat,
+                 look: yp.Lb.Flat,
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2242` → after: `L2421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2421) · [Before (L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2242)

```diff
-                 look: gC.hc.Chevrons, colour: [...(0, Mz.c)(CC.colour), CC.alpha]
+                 look: yp.Lb.Chevrons, colour: [...(0, Ui.b)(pp.colour), pp.alpha]
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2246` → after: `L2425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2425) · [Before (L2246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2246)

```diff
-                 look: gC.hc.FurnaceFire, colour: [1, 1, 1, 1]
+                 look: yp.Lb.FurnaceFire, colour: [1, 1, 1, 1]
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2258` → after: `L2437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2437) · [Before (L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2258)

```diff
-             const zC = null !== (fC = CC.uvs) && void 0 !== fC ? fC : [];
+             const ip = null !== (xp = pp.uvs) && void 0 !== xp ? xp : [];
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2261` → after: `L2440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2440) · [Before (L2261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2261)

```diff
-               nC.setFloat32(4 * (3 * ZC + CC), null !== (oC = zC[CC]) && void 0 !== oC ? oC : 0, !0)
+               Sp.setFloat32(4 * (3 * cp + pp), null !== (Lp = ip[pp]) && void 0 !== Lp ? Lp : 0, !0)
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2267` → after: `L2446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2446) · [Before (L2267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2267)

```diff
-         return (0, gC.Ve)(wC, 0, QC, bC, nC, ZC, fC, CC.indices.length, oC) && this.liveMeshes.add(QC), QC
+         return (0, yp.se)(op, 0, Op, Ip, Sp, cp, xp, pp.indices.length, Lp) && this.liveMeshes.add(Op), Op
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2274-L2276` → after: `L2453-L2455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2453-L2455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2453-L2455) · [Before (L2274-L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2274-L2276)

```diff
-         zC.anchor && (wC |= gC.kc.Anchor, CZ[0] = zC.anchor[0], CZ[1] = zC.anchor[1], CZ[2] = zC.anchor[2]), void 0 !== zC.visible && (wC |= gC.kc.Visible), zC.uvOffset && (wC |= gC.kc.UvOffset, zZ[0] = zC.uvOffset[0], zZ[1] = zC.uvOffset[1]);
-         const bC = null !== (ZC = zC.visibility) && void 0 !== ZC ? ZC : 1;
-         void 0 !== zC.visibility && (wC |= gC.kc.Visibility), zC.scale && (wC |= gC.kc.Scale, ZZ[0] = zC.scale[0], ZZ[1] = zC.scale[1], ZZ[2] = zC.scale[2]), 0 !== wC && (0, gC.Xe)(QC, 0, CC, wC, zC.visible ? 1 : 0, CZ, zZ, bC, ZZ)
+         ip.anchor && (op |= yp.Pb.Anchor, Oc[0] = ip.anchor[0], Oc[1] = ip.anchor[1], Oc[2] = ip.anchor[2]), void 0 !== ip.visible && (op |= yp.Pb.Visible), ip.uvOffset && (op |= yp.Pb.UvOffset, oc[0] = ip.uvOffset[0], oc[1] = ip.uvOffset[1]);
+         const Ip = null !== (cp = ip.visibility) && void 0 !== cp ? cp : 1;
+         void 0 !== ip.visibility && (op |= yp.Pb.Visibility), ip.scale && (op |= yp.Pb.Scale, Ic[0] = ip.scale[0], Ic[1] = ip.scale[1], Ic[2] = ip.scale[2]), 0 !== op && (0, yp.ze)(Op, 0, pp, op, ip.visible ? 1 : 0, Oc, oc, Ip, Ic)
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2280` → after: `L2459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2459) · [Before (L2280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2280)

```diff
-         zC && !(0, gC.We)(zC, 0, CC) || this.liveMeshes.delete(CC)
+         ip && !(0, yp.we)(ip, 0, pp) || this.liveMeshes.delete(pp)
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2329` → after: `L2508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2508) · [Before (L2329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2329)

```diff
-         const zC = `${CC.colour} ${CC.alpha}`;
+         const ip = `${pp.colour} ${pp.alpha}`;
```

#### 224. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2371` → after: `L2550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2550) · [Before (L2371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2371)

```diff
-         for (; ZC < CC.length && (0, gC.hf)(zC, 0, CC[ZC]);) ZC++;
+         for (; cp < pp.length && (0, yp.Je)(ip, 0, pp[cp]);) cp++;
```

#### 225. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2375` → after: `L2554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2554) · [Before (L2375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2375)

```diff
-           (QC ? (0, gC.dg)(zC, 0, QC.width, QC.alpha, 1, QC.endAtSolidFace ? 1 : 0) : (0, gC.dg)(zC, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
+           (Op ? (0, yp.Pf)(ip, 0, Op.width, Op.alpha, 1, Op.endAtSolidFace ? 1 : 0) : (0, yp.Pf)(ip, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
```

#### 226. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2378` → after: `L2557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2557) · [Before (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2378)

```diff
-         void 0 !== wC && (0, gC.Xf)(zC, 0, null !== wC && void 0 !== wC ? wC : 0, null === wC ? 1 : 0) && (this.pendingFar = void 0)
+         void 0 !== op && (0, yp.Jf)(ip, 0, null !== op && void 0 !== op ? op : 0, null === op ? 1 : 0) && (this.pendingFar = void 0)
```

#### 227. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2383` → after: `L2562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2562) · [Before (L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2383)

```diff
-         ZC && QC !== gC.qd && (0, gC.kg)(ZC, 0, QC, zC)
+         cp && Op !== yp.Nc && (0, yp.Zf)(cp, 0, Op, ip)
```

#### 228. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2388` → after: `L2567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2567) · [Before (L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2388)

```diff
-         ZC && QC !== gC.qd && fZ(ZC, QC, zC)
+         cp && Op !== yp.Nc && Dc(cp, Op, ip)
```

#### 229. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2404` → after: `L2583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2583) · [Before (L2404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2404)

```diff
-         return zC !== gC.qd && 1 === this.api.queries.entityInteractable(zC)
+         return ip !== yp.Nc && 1 === this.api.queries.entityInteractable(ip)
```

#### 230. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2417` → after: `L2596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2596) · [Before (L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2417)

```diff
-           return null !== CC && void 0 !== CC ? CC : null
+           return null !== pp && void 0 !== pp ? pp : null
```

#### 231. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2424` → after: `L2603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2603) · [Before (L2424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2424)

```diff
-         return kz[0] = gC.w.eye(CC, 0, 0), kz[1] = gC.w.eye(CC, 0, 1), kz[2] = gC.w.eye(CC, 0, 2), kz
+         return ic[0] = yp.q.eye(pp, 0, 0), ic[1] = yp.q.eye(pp, 0, 1), ic[2] = yp.q.eye(pp, 0, 2), ic
```

#### 232. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2427` → after: `L2606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2606) · [Before (L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2427)

```diff
-         return gC.w.cameraFar(this.api.apiView, 0)
+         return yp.q.cameraFar(this.api.apiView, 0)
```

#### 233. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2438` → after: `L2617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2617) · [Before (L2438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2438)

```diff
-         zC && ZC !== gC.qd && (0, gC.Ee)(zC, 0, ZC)
+         ip && cp !== yp.Nc && (0, yp.ce)(ip, 0, cp)
```

#### 234. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2443-L2445` → after: `L2622-L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2622-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2622-L2624) · [Before (L2443-L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2443-L2445)

```diff
-         ZC && jz(ZC, 0, Lz.b.Chat, (0, XC.f)((0, Lz.k)({
-           cq: CC,
-           uq: zC
+         cp && Zi(cp, 0, si.c.Chat, (0, Np.f)((0, si.k)({
+           VD: pp,
+           pA: ip
```

#### 235. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2449` → after: `L2628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2628) · [Before (L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2449)

```diff
-         CC.length <= 119 && this.sendChat(`/${CC}`)
+         pp.length <= 119 && this.sendChat(`/${pp}`)
```

#### 236. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2457` → after: `L2636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2636) · [Before (L2457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2457)

```diff
-           fC = wC.SF(CC, zC, ZC),
+           xp = op.tx(pp, ip, cp),
```

#### 237. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2460-L2461` → after: `L2639-L2640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2639-L2640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2639-L2640) · [Before (L2460-L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2460-L2461)

```diff
-           const [QC, bC, qC] = [CC - oC.x, zC - oC.y, ZC - oC.z], FC = wZ[wC.SF(QC, bC, qC)], WC = null === FC || void 0 === FC ? void 0 : FC.positions.some((CC => CC.id === fC && CC.x === oC.x && CC.y === oC.y && CC.z === oC.z));
-           for (const CC of (WC && FC ? FC : oC.main).positions) wC.SF(QC + CC.x, bC + CC.y, qC + CC.z) === CC.id && nC(QC + CC.x, bC + CC.y, qC + CC.z, 0, CC.id)
+           const [Op, Ip, Yp] = [pp - Lp.x, ip - Lp.y, cp - Lp.z], Dp = xc[op.tx(Op, Ip, Yp)], Ap = null === Dp || void 0 === Dp ? void 0 : Dp.positions.some((pp => pp.id === xp && pp.x === Lp.x && pp.y === Lp.y && pp.z === Lp.z));
+           for (const pp of (Ap && Dp ? Dp : Lp.main).positions) op.tx(Op + pp.x, Ip + pp.y, Yp + pp.z) === pp.id && Sp(Op + pp.x, Ip + pp.y, Yp + pp.z, 0, pp.id)
```

#### 238. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2467` → after: `L2646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2646) · [Before (L2467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2467)

```diff
-             nC(QC, bC, fC, WC.id, wC.SF(QC, bC, fC))
+             Sp(Op, Ip, xp, Ap.id, op.tx(Op, Ip, xp))
```

#### 239. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2471` → after: `L2650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2650) · [Before (L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2471)

```diff
-           let oC = wC.SF(CC, zC + 1, ZC);
+           let Lp = op.tx(pp, ip + 1, cp);
```

#### 240. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2483` → after: `L2662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2662) · [Before (L2483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2483)

```diff
-         return 0 !== wC && 0 !== bC && QC.blockRootId(CC) === QC.blockRootId(zC) ? nC && ZC !== bC ? bC : void 0 : 0 === bC || !nC && 0 !== ZC ? nC ? 0 : void 0 : bC
+         return 0 !== op && 0 !== Ip && Op.blockRootId(pp) === Op.blockRootId(ip) ? Sp && cp !== Ip ? Ip : void 0 : 0 === Ip || !Sp && 0 !== cp ? Sp ? 0 : void 0 : Ip
```

#### 241. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2486` → after: `L2665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2665) · [Before (L2486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2486)

```diff
-     const qZ = gC.xc + gC.Ac * gC.Kc.BYTES,
+     const Pc = yp.cc + yp.gc * yp.nc.BYTES,
```

#### 242. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2491-L2492` → after: `L2670-L2671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2670-L2671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2670-L2671) · [Before (L2491-L2492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2491-L2492)

```diff
-         Cf: 0,
-         qn: null,
+         gD: 0,
+         eL: null,
```

#### 243. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2496` → after: `L2675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2675) · [Before (L2496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2496)

```diff
-         get: () => () => gC.Ad
+         get: () => () => yp.Xc
```

#### 244. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2508` → after: `L2687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2687) · [Before (L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2508)

```diff
-         this.deps = CC, this.hQ = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(gC.Ac), this.ids = new Uint16Array(gC.Ac), this.amounts = new Uint16Array(gC.Ac), this.attrRead = new Float64Array(gC.Ac).fill(-1 … [truncated]
+         this.deps = pp, this.WI = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(yp.gc), this.ids = new Uint16Array(yp.gc), this.amounts = new Uint16Array(yp.gc), this.attrRead = new Float64Array(yp.gc).fill(-1 … [truncated]
```

#### 245. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2524` → after: `L2703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2703) · [Before (L2524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2524)

```diff
-         return Number.isInteger(CC) && CC >= 0 && CC < this.len && 0 !== this.ids[CC] && null !== (zC = this.facades[CC]) && void 0 !== zC ? zC : null
+         return Number.isInteger(pp) && pp >= 0 && pp < this.len && 0 !== this.ids[pp] && null !== (ip = this.facades[pp]) && void 0 !== ip ? ip : null
```

#### 246. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2531` → after: `L2710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2710) · [Before (L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2531)

```diff
-         for (let zC = 0; zC < Math.min(gC.Nd, this.len); zC++) CC.push(this.slot(zC));
+         for (let ip = 0; ip < Math.min(yp.fd, this.len); ip++) pp.push(this.slot(ip));
```

#### 247. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2536` → after: `L2715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2715) · [Before (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2536)

```diff
-         for (let zC = 0; zC < Math.min(gC.Nd - gC.g, this.len); zC++) 0 === this.ids[zC] && CC++;
+         for (let ip = 0; ip < Math.min(yp.fd - yp.e, this.len); ip++) 0 === this.ids[ip] && pp++;
```

#### 248. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2541` → after: `L2720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2720) · [Before (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2541)

```diff
-         for (let QC = 0; QC < Math.min(gC.Nd, this.len); QC++) {
+         for (let Op = 0; Op < Math.min(yp.fd, this.len); Op++) {
```

#### 249. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2544` → after: `L2723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2723) · [Before (L2544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2544)

```diff
-           if ((null === wC || void 0 === wC ? void 0 : wC.name) === CC) zC += null !== (ZC = wC.amount) && void 0 !== ZC ? ZC : 1
+           if ((null === op || void 0 === op ? void 0 : op.name) === pp) ip += null !== (cp = op.amount) && void 0 !== cp ? cp : 1
```

#### 250. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2550` → after: `L2729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2729) · [Before (L2550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2550)

```diff
-         return null !== (zC = this.instances[CC]) && void 0 !== zC ? zC : 0
+         return null !== (ip = this.instances[pp]) && void 0 !== ip ? ip : 0
```

#### 251. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2571` → after: `L2750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2750) · [Before (L2571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2571)

```diff
-         this.hQ[0] = CC, this.hQ[1] = zC, this.hQ[2] = ZC, this.version++
+         this.WI[0] = pp, this.WI[1] = ip, this.WI[2] = cp, this.version++
```

#### 252. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2575-L2577` → after: `L2754-L2756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2754-L2756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2754-L2756) · [Before (L2575-L2577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2575-L2577)

```diff
-           zC = gC.w.inventoryViewPtr(CC, 0),
-           ZC = gC.w.inventoryVersion(CC, 0),
-           QC = gC.w.selectedSlot(CC, 0);
+           ip = yp.q.inventoryViewPtr(pp, 0),
+           cp = yp.q.inventoryVersion(pp, 0),
+           Op = yp.q.selectedSlot(pp, 0);
```

#### 253. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2579` → after: `L2758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2758) · [Before (L2579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2579)

```diff
-         const wC = gC.w.slotIcon(CC, 0);
+         const op = yp.q.slotIcon(pp, 0);
```

#### 254. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2583` → after: `L2762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2762) · [Before (L2583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2583)

```diff
-           nC = bC ? Math.min(bC.getUint32(0, !0), gC.Ac) : 0;
+           Sp = Ip ? Math.min(Ip.getUint32(0, !0), yp.gc) : 0;
```

#### 255. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2586-L2588` → after: `L2765-L2767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2765-L2767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2765-L2767) · [Before (L2586-L2588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2586-L2588)

```diff
-         for (let oC = 0; oC < gC.Ac; oC++) {
-           const CC = gC.xc + oC * gC.Kc.BYTES,
-             zC = null !== bC && oC < nC ? gC.Kc.item(bC, CC) : 0;
+         for (let Lp = 0; Lp < yp.gc; Lp++) {
+           const pp = yp.cc + Lp * yp.nc.BYTES,
+             ip = null !== Ip && Lp < Sp ? yp.nc.item(Ip, pp) : 0;
```

#### 256. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2593-L2594` → after: `L2772-L2773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2772-L2773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2772-L2773) · [Before (L2593-L2594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2593-L2594)

```diff
-           const ZC = gC.Kc.amount(bC, CC),
-             QC = gC.Kc.attrVersion(bC, CC);
+           const cp = yp.nc.amount(Ip, pp),
+             Op = yp.nc.attrVersion(Ip, pp);
```

#### 257. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2630` → after: `L2809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2809) · [Before (L2630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2630)

```diff
-           oC += 8 + (0, NC.pe)(zC);
+           Lp += 8 + (0, Pp.ue)(ip);
```

#### 258. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2656-L2657` → after: `L2835-L2836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2835-L2836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2835-L2836) · [Before (L2656-L2657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2656-L2657)

```diff
-           fC = nC === gC.Ad ? gC.Sb : null !== (wC = null === (bC = this.extras()) || void 0 === bC ? void 0 : bC[1]) && void 0 !== wC ? wC : gC.Sb;
-         return this.settle(nC), fC === gC.Sb ? null : fC
+           xp = Sp === yp.Xc ? yp.yb : null !== (op = null === (Ip = this.extras()) || void 0 === Ip ? void 0 : Ip[1]) && void 0 !== op ? op : yp.yb;
+         return this.settle(Sp), xp === yp.yb ? null : xp
```

#### 259. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2684` → after: `L2863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2863) · [Before (L2684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2684)

```diff
-         const fC = bC === gC.Ad ? null : this.extras();
+         const xp = Ip === yp.Xc ? null : this.extras();
```

#### 260. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2688-L2689` → after: `L2867-L2868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2867-L2868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2867-L2868) · [Before (L2688-L2689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2688-L2689)

```diff
-             Cf: CC,
-             qn: zC === gC.Sb ? null : zC,
+             gD: pp,
+             eL: ip === yp.yb ? null : ip,
```

#### 261. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2712` → after: `L2891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2891) · [Before (L2712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2712)

```diff
-           if (nC.length > 1024) return bC(new Error(`The crafting station ${CC}'s name is over 1024 bytes`)), null;
+           if (Sp.length > 1024) return Ip(new Error(`The crafting station ${pp}'s name is over 1024 bytes`)), null;
```

#### 262. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2718-L2719` → after: `L2897-L2898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2897-L2898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2897-L2898) · [Before (L2718-L2719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2718-L2719)

```diff
-           oC = wC.queries.craftingView(null !== (QC = null === nC || void 0 === nC ? void 0 : nC.length) && void 0 !== QC ? QC : 0, fC ? zC : 0, fC ? ZC : 0);
-         return oC < gC.mb.BYTES ? (wC.reportCorruption(`crafting_view's answer of ${oC} bytes`), null) : wC.memoryData(wC.scratch(), oC, 1, "crafting_view's answer")
+           Lp = op.queries.craftingView(null !== (Op = null === Sp || void 0 === Sp ? void 0 : Sp.length) && void 0 !== Op ? Op : 0, xp ? ip : 0, xp ? cp : 0);
+         return Lp < yp._.BYTES ? (op.reportCorruption(`crafting_view's answer of ${Lp} bytes`), null) : op.memoryData(op.scratch(), Lp, 1, "crafting_view's answer")
```

#### 263. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2732-L2733` → after: `L2911-L2912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2911-L2912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2911-L2912) · [Before (L2732-L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2732-L2733)

```diff
-         if (CC === gC.xd)(0, Dz.b)();
-         else if (CC !== gC.Ad) {
+         if (pp === yp.Tc)(0, ri.e)();
+         else if (pp !== yp.Xc) {
```

#### 264. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2736-L2737` → after: `L2915-L2916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2915-L2916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2915-L2916) · [Before (L2736-L2737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2736-L2737)

```diff
-             return (0, Dz.b)(), (0, gC.yg)(CC, zC, ZC)
-           }(zC, 0, CC) || this.deps.onError(new Error(`Sync op ${CC}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
+             return (0, ri.e)(), (0, yp.hg)(pp, ip, cp)
+           }(ip, 0, pp) || this.deps.onError(new Error(`Sync op ${pp}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
```

#### 265. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2739` → after: `L2918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2918) · [Before (L2739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2739)

```diff
-         return this.stopped || this.refresh(), CC !== gC.Ad
+         return this.stopped || this.refresh(), pp !== yp.Xc
```

#### 266. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2746` → after: `L2925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2925) · [Before (L2746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2746)

```diff
-       JZ = 1.2 * gz.f.tp,
+       mc = 1.2 * wi.g.Kw,
```

#### 267. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2754` → after: `L2933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2933) · [Before (L2754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2754)

```diff
-       return zC || (eZ.size >= 64 && eZ.clear(), zC = IZ.encode(`{"emitRate":${CC}}`), eZ.set(CC, zC)), zC
+       return ip || (Cc.size >= 64 && Cc.clear(), ip = Rc.encode(`{"emitRate":${pp}}`), Cc.set(pp, ip)), ip
```

#### 268. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2758` → after: `L2937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2937) · [Before (L2758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2758)

```diff
-       return Number.isFinite(CC) && CC > 0 ? CC : 0
+       return Number.isFinite(pp) && pp > 0 ? pp : 0
```

#### 269. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2774` → after: `L2953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2953) · [Before (L2774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2774)

```diff
-       return CC.length > gC.$d.MaxOpts ? (ZC(new Error(`${zC}'s particle opts are over ${gC.$d.MaxOpts} bytes of JSON`)), null) : CC
+       return pp.length > yp.ud.MaxOpts ? (cp(new Error(`${ip}'s particle opts are over ${yp.ud.MaxOpts} bytes of JSON`)), null) : pp
```

#### 270. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2798-L2799` → after: `L2977-L2978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2977-L2978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2977-L2978) · [Before (L2798-L2799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2798-L2799)

```diff
-           wC = null !== (ZC = zC.half) && void 0 !== ZC ? ZC : AZ;
-         if (!QC || this.live >= gC.$d.MaxLiveKeys || this.nextKey > gC.$d.MaxKey || !YZ(zC.pos, wC)) return HZ;
+           op = null !== (cp = ip.half) && void 0 !== cp ? cp : jc;
+         if (!Op || this.live >= yp.ud.MaxLiveKeys || this.nextKey > yp.ud.MaxKey || !lc(ip.pos, op)) return Bc;
```

#### 271. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2805` → after: `L2984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2984) · [Before (L2805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2805)

```diff
-               HW: CC.HW,
+               TA: pp.TA,
```

#### 272. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2813-L2815` → after: `L2992-L2994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2992-L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2992-L2994) · [Before (L2813-L2815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2813-L2815)

```diff
-               gravity: null !== (zC = CC.gravity) && void 0 !== zC ? zC : AZ,
-               dir1: null !== (ZC = CC.dir1) && void 0 !== ZC ? ZC : RZ,
-               dir2: null !== (QC = CC.dir2) && void 0 !== QC ? QC : RZ,
+               gravity: null !== (ip = pp.gravity) && void 0 !== ip ? ip : jc,
+               dir1: null !== (cp = pp.dir1) && void 0 !== cp ? cp : uc,
+               dir2: null !== (Op = pp.dir2) && void 0 !== Op ? Op : uc,
```

#### 273. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2821` → after: `L3000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3000) · [Before (L2821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2821)

```diff
-         return nC && (0, gC.yf)(QC, 0, bC, 0, gC.$d.PresetNone, 0, iZ, vZ, nC) ? (this.nextKey++, this.live++, this.started = !0, new lZ(this, this.session, bC, CC, wC)) : HZ
+         return Sp && (0, yp.ff)(Op, 0, Ip, 0, yp.ud.PresetNone, 0, qc, Mc, Sp) ? (this.nextKey++, this.live++, this.started = !0, new Tc(this, this.session, Ip, pp, op)) : Bc
```

#### 274. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2833` → after: `L3012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3012) · [Before (L2833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2833)

```diff
-         wC && (0, gC.uf)(zC, 0, 0, gC.$d.PresetNone, gC.$d.HasBox, 0, iZ, vZ, wC)
+         op && (0, yp.$e)(ip, 0, 0, yp.ud.PresetNone, yp.ud.HasBox, 0, qc, Mc, op)
```

#### 275. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2837-L2838` → after: `L3016-L3017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3016-L3017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3016-L3017) · [Before (L2837-L2838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2837-L2838)

```diff
-           wC = Math.min(Math.floor(ZC), gC.$d.MaxBurst);
-         if (!QC || !Object.hasOwn(gC.nc, CC) || !(wC > 0)) return;
+           op = Math.min(Math.floor(cp), yp.ud.MaxBurst);
+         if (!Op || !Object.hasOwn(yp.Tb, pp) || !(op > 0)) return;
```

#### 276. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2841` → after: `L3020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3020) · [Before (L2841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2841)

```diff
-         Number.isFinite(iZ[0] + iZ[1] + iZ[2]) && (0, gC.uf)(QC, 0, 0, gC.nc[CC], gC.$d.HasBox, wC, iZ, vZ, xZ)
+         Number.isFinite(qc[0] + qc[1] + qc[2]) && (0, yp.$e)(Op, 0, 0, yp.Tb[pp], yp.ud.HasBox, op, qc, Mc, kc)
```

#### 277. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2846` → after: `L3025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3025) · [Before (L2846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2846)

```diff
-         return this.started = !1, this.nextKey = 1, this.live = 0, !CC || (0, gC.zf)(CC, 0)
+         return this.started = !1, this.nextKey = 1, this.live = 0, !pp || (0, yp.if)(pp, 0)
```

#### 278. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2853` → after: `L3032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3032) · [Before (L2853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2853)

```diff
-         ZC && (0, gC.Bf)(ZC, 0, zC) && this.live--
+         cp && (0, yp.lf)(cp, 0, ip) && this.live--
```

#### 279. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2870` → after: `L3049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3049) · [Before (L2870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2870)

```diff
-           YZ(CC, this.half) && (0, gC.Ef)(ZC, 0, this.key, gC.$d.HasBox, iZ, vZ, xZ)
+           lc(pp, this.half) && (0, yp.mf)(cp, 0, this.key, yp.ud.HasBox, qc, Mc, kc)
```

#### 280. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2876` → after: `L3055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3055) · [Before (L2876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2876)

```diff
-         zC && ZC !== this.rate && (0, gC.Ef)(zC, 0, this.key, 0, AZ, AZ, hZ(ZC)) && (this.rate = ZC, this.emitted ||= ZC > 0)
+         ip && cp !== this.rate && (0, yp.mf)(ip, 0, this.key, 0, jc, jc, Ec(cp)) && (this.rate = cp, this.emitted ||= cp > 0)
```

#### 281. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2880-L2881` → after: `L3059-L3060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3059-L3060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3059-L3060) · [Before (L2880-L2881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2880-L2881)

```diff
-           ZC = Math.min(Math.floor(CC), gC.$d.MaxBurst);
-         zC && ZC > 0 && (0, gC.uf)(zC, 0, this.key, gC.$d.PresetNone, 0, ZC, AZ, AZ, xZ) && (this.emitted = !0)
+           cp = Math.min(Math.floor(pp), yp.ud.MaxBurst);
+         ip && cp > 0 && (0, yp.$e)(ip, 0, this.key, yp.ud.PresetNone, 0, cp, jc, jc, kc) && (this.emitted = !0)
```

#### 282. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2885` → after: `L3064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3064) · [Before (L2885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2885)

```diff
-           wC = Math.min(Math.floor(ZC), gC.$d.MaxPoints, Math.floor(zC.length / 4));
+           op = Math.min(Math.floor(cp), yp.ud.MaxPoints, Math.floor(ip.length / 4));
```

#### 283. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2887-L2888` → after: `L3066-L3067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3066-L3067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3066-L3067) · [Before (L2887-L2888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2887-L2888)

```diff
-         const bC = new Uint8Array(zC.buffer, zC.byteOffset, wC * gC.$d.PointBytes);
-         (0, gC.wf)(QC, 0, this.key, wC, CC, bC) && (this.emitted = !0)
+         const Ip = new Uint8Array(ip.buffer, ip.byteOffset, op * yp.ud.PointBytes);
+         (0, yp.cf)(Op, 0, this.key, op, pp, Ip) && (this.emitted = !0)
```

#### 284. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2897` → after: `L3076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3076) · [Before (L2897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2897)

```diff
-         (0, gC.Ef)(ZC, 0, this.key, 0, AZ, AZ, QC)
+         (0, yp.mf)(cp, 0, this.key, 0, jc, jc, Op)
```

#### 285. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2901` → after: `L3080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3080) · [Before (L2901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2901)

```diff
-         this.stopped = !0, CC && (this.emitted ? (this.rate > 0 && (0, gC.Ef)(CC, 0, this.key, 0, AZ, AZ, hZ(0)), setTimeout((() => {
+         this.stopped = !0, pp && (this.emitted ? (this.rate > 0 && (0, yp.mf)(pp, 0, this.key, 0, jc, jc, Ec(0)), setTimeout((() => {
```

#### 286. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2912` → after: `L3091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3091) · [Before (L2912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2912)

```diff
-     const XZ = Tz.t,
+     const fc = Fi.p,
```

#### 287. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2923` → after: `L3102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3102) · [Before (L2923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2923)

```diff
-         if (CC !== gC.qd && !xC(QC[bC])) {
+         if (pp !== yp.Nc && !ep(Op[Ip])) {
```

#### 288. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2938` → after: `L3117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3117) · [Before (L2938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2938)

```diff
-       return CC.length >= zC ? CC : new Int32Array(Math.max(zC, 2 * CC.length))
+       return pp.length >= ip ? pp : new Int32Array(Math.max(ip, 2 * pp.length))
```

#### 289. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2950-L2952` → after: `L3129-L3131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3129-L3131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3129-L3131) · [Before (L2950-L2952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2950-L2952)

```diff
-         for (let CC = 0; CC + gC.ac.BYTES <= fC;) {
-           const zC = gC.ac.len(oC, CC);
-           QC(gC.ac.serverId(oC, CC), TZ(oC, CC, zC)), CC += gC.ac.BYTES + (0, NC.pe)(zC)
+         for (let pp = 0; pp + yp.Eb.BYTES <= xp;) {
+           const ip = yp.Eb.len(Lp, pp);
+           Op(yp.Eb.serverId(Lp, pp), Fc(Lp, pp, ip)), pp += yp.Eb.BYTES + (0, Pp.ue)(ip)
```

#### 290. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2960` → after: `L3139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3139) · [Before (L2960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2960)

```diff
-       const nC = gC.ac.kind(CC, zC),
+       const Sp = yp.Eb.kind(pp, ip),
```

#### 291. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2963-L2967` → after: `L3142-L3146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3142-L3146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3142-L3146) · [Before (L2963-L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2963-L2967)

```diff
-       const oC = gC.ac.variation(CC, zC),
-         qC = gC.ac.pose(CC, zC),
-         FC = gC.ac.meta(CC, zC),
-         WC = gC.ac.mesh(CC, zC),
-         NC = 0 !== (gC.ac.flags(CC, zC) & gC._b.HasOpts),
+       const Lp = yp.Eb.variation(pp, ip),
+         Yp = yp.Eb.pose(pp, ip),
+         Dp = yp.Eb.meta(pp, ip),
+         Ap = yp.Eb.mesh(pp, ip),
+         Pp = 0 !== (yp.Eb.flags(pp, ip) & yp.Cb.HasOpts),
```

#### 292. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2971-L2975` → after: `L3150-L3154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3150-L3154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3150-L3154) · [Before (L2971-L2975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2971-L2975)

```diff
-         variation: oC === gC.td ? void 0 : null !== (QC = null !== (wC = null === MC || void 0 === MC ? void 0 : MC[oC]) && void 0 !== wC ? wC : null === MC || void 0 === MC ? void 0 : MC[0]) && void 0 !== QC ? QC : "default",
-         pose: qC === gC.vc ? void 0 : null !== (bC = gC.Ob[qC]) && void 0 !== bC ? bC : gC.Ob[0],
-         metaInfo: FC === gC.vc ? void 0 : gC.gd[FC],
-         meshKind: WC === gC.vc ? void 0 : gC.cd[WC],
-         meshOpts: NC ? cZ.decode(new Uint8Array(CC.buffer, CC.byteOffset + zC + gC.ac.BYTES, ZC)) : void 0
+         variation: Lp === yp.Sc ? void 0 : null !== (Op = null !== (op = null === Wp || void 0 === Wp ? void 0 : Wp[Lp]) && void 0 !== op ? op : null === Wp || void 0 === Wp ? void 0 : Wp[0]) && void 0 !== Op ? Op : "default",
+         pose: Yp === yp._b ? void 0 : null !== (Ip = yp.tb[Yp]) && void 0 !== Ip ? Ip : yp.tb[0],
+         metaInfo: Dp === yp._b ? void 0 : yp.Gc[Dp],
+         meshKind: Ap === yp._b ? void 0 : yp.Fc[Ap],
+         meshOpts: Pp ? bc.decode(new Uint8Array(pp.buffer, pp.byteOffset + ip + yp.Eb.BYTES, cp)) : void 0
```

#### 293. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2982` → after: `L3161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3161) · [Before (L2982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2982)

```diff
-         this.deps = CC, this.wanted = 0, this.vq = !1, this.refused = !1
+         this.deps = pp, this.wanted = 0, this.sx = !1, this.refused = !1
```

#### 294. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2985` → after: `L3164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3164) · [Before (L2985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2985)

```diff
-         return this.vq
+         return this.sx
```

#### 295. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2988` → after: `L3167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3167) · [Before (L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2988)

```diff
-         this.wanted = zC ? this.wanted | CC : this.wanted & ~CC;
+         this.wanted = ip ? this.wanted | pp : this.wanted & ~pp;
```

#### 296. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2990` → after: `L3169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3169) · [Before (L2990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2990)

```diff
-         if (ZC === this.vq) return;
+         if (cp === this.sx) return;
```

#### 297. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2992` → after: `L3171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3171) · [Before (L2992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2992)

```diff
-         null !== QC ? (0, gC.Cg)(QC, 0, ZC ? 1 : 0) ? (this.vq = ZC, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.vq = !1
+         null !== Op ? (0, yp.kg)(Op, 0, cp ? 1 : 0) ? (this.sx = cp, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.sx = !1
```

#### 298. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3001` → after: `L3180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3180) · [Before (L3001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3001)

```diff
-         return this.complete || this.fill(), null !== (zC = this.entries.get("string" === typeof CC ? CC : String(CC))) && void 0 !== zC ? zC : null
+         return this.complete || this.fill(), null !== (ip = this.entries.get("string" === typeof pp ? pp : String(pp))) && void 0 !== ip ? ip : null
```

#### 299. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3060` → after: `L3239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3239) · [Before (L3060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3060)

```diff
-     var yZ = ZC(4733);
+     var zc = cp(4911);
```

#### 300. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3063` → after: `L3242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3242) · [Before (L3063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3063)

```diff
-       if ("message" !== CC.type || CC.cq !== yZ.Bc.NewClientOptions || CC.payloadKind !== NC.hc.Msgpack) return null;
+       if ("message" !== pp.type || pp.VD !== zc.Zb.NewClientOptions || pp.payloadKind !== Pp.kc.Msgpack) return null;
```

#### 301. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3068-L3069` → after: `L3247-L3248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3247-L3248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3247-L3248) · [Before (L3068-L3069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3068-L3069)

```diff
-     var UZ = ZC(1183),
-       BZ = ZC(36508);
+     var Kc = cp(1251),
+       Vc = cp(36828);
```

#### 302. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3074-L3076` → after: `L3253-L3255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3253-L3255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3253-L3255) · [Before (L3074-L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3074-L3076)

```diff
-         case gC.te.ToggleMenu: {
-           const CC = gC.N[zC];
-           nC.o.bp("toggleMenu", void 0 === CC ? "inventory" : `inventory|${CC}`);
+         case yp.Sd.ToggleMenu: {
+           const pp = yp.A[ip];
+           Sp.m.GA("toggleMenu", void 0 === pp ? "inventory" : `inventory|${pp}`);
```

#### 303. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3079-L3080` → after: `L3258-L3259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3258-L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3258-L3259) · [Before (L3079-L3080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3079-L3080)

```diff
-         case gC.te.EditBoard:
-           nC.o.bp("EditBoard", {
+         case yp.Sd.EditBoard:
+           Sp.m.GA("EditBoard", {
```

#### 304. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3084-L3086` → after: `L3263-L3265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3263-L3265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3263-L3265) · [Before (L3084-L3086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3084-L3086)

```diff
-         case gC.te.EditCodeBlock:
-         case gC.te.ViewCodeBlock:
-           nC.o.bp("EditCodeBlock", {
+         case yp.Sd.EditCodeBlock:
+         case yp.Sd.ViewCodeBlock:
+           Sp.m.GA("EditCodeBlock", {
```

#### 305. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3088` → after: `L3267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3267) · [Before (L3088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3088)

```diff
-             canChangePos: CC === gC.te.EditCodeBlock
+             canChangePos: pp === yp.Sd.EditCodeBlock
```

#### 306. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3091-L3092` → after: `L3270-L3271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3270-L3271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3270-L3271) · [Before (L3091-L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3091-L3092)

```diff
-         case gC.te.EditCustomLobbyBlock:
-           nC.o.bp("EditCustomLobbyBlock", {
+         case yp.Sd.EditCustomLobbyBlock:
+           Sp.m.GA("EditCustomLobbyBlock", {
```

#### 307. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3096-L3097` → after: `L3275-L3276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3275-L3276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3275-L3276) · [Before (L3096-L3097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3096-L3097)

```diff
-         case gC.te.OpenIronChest:
-           nC.o.bp("OpenIronChest", {
+         case yp.Sd.OpenIronChest:
+           Sp.m.GA("OpenIronChest", {
```

#### 308. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3101-L3102` → after: `L3280-L3281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3280-L3281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3280-L3281) · [Before (L3101-L3102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3101-L3102)

```diff
-         case gC.te.EditNameTag:
-           nC.o.bp("EditNameTag", null !== (oC = null === (qC = wC.vq()) || void 0 === qC || null === (FC = qC.attributes.customAttributes) || void 0 === FC ? void 0 : FC.text) && void 0 !== oC ? oC : "");
+         case yp.Sd.EditNameTag:
+           Sp.m.GA("EditNameTag", null !== (Lp = null === (Yp = op.sx()) || void 0 === Yp || null === (Dp = Yp.attributes.customAttributes) || void 0 === Dp ? void 0 : Dp.text) && void 0 !== Lp ? Lp : "");
```

#### 309. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3104-L3109` → after: `L3283-L3288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3283-L3288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3283-L3288) · [Before (L3104-L3109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3104-L3109)

```diff
-         case gC.te.EditBook: {
-           var WC, NC, SC;
-           const CC = null === (WC = wC.vq()) || void 0 === WC ? void 0 : WC.attributes;
-           nC.o.bp("EditBook", {
-             pages: (0, UZ.U)(null === CC || void 0 === CC || null === (NC = CC.customAttributes) || void 0 === NC ? void 0 : NC.pages),
-             title: null !== (SC = null === CC || void 0 === CC ? void 0 : CC.customDisplayName) && void 0 !== SC ? SC : "Title",
+         case yp.Sd.EditBook: {
+           var Ap, Pp, Up;
+           const pp = null === (Ap = op.sx()) || void 0 === Ap ? void 0 : Ap.attributes;
+           Sp.m.GA("EditBook", {
+             pages: (0, Kc.P)(null === pp || void 0 === pp || null === (Pp = pp.customAttributes) || void 0 === Pp ? void 0 : Pp.pages),
+             title: null !== (Up = null === pp || void 0 === pp ? void 0 : pp.customDisplayName) && void 0 !== Up ? Up : "Title",
```

#### 310. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3114` → after: `L3293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3293) · [Before (L3114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3114)

```diff
-         case gC.te.CantChangeBlock:
+         case yp.Sd.CantChangeBlock:
```

#### 311. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3118-L3119` → after: `L3297-L3298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3297-L3298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3297-L3298) · [Before (L3118-L3119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3118-L3119)

```diff
-               wC = CC ? ZC : QC;
-             (zC.getClientOption("canChange") || wC || "You cannot modify this block" !== ZC) && nC.o.bp("showBottomMessage", {
+               op = pp ? cp : Op;
+             (ip.getClientOption("canChange") || op || "You cannot modify this block" !== cp) && Sp.m.GA("showBottomMessage", {
```

#### 312. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3125-L3126` → after: `L3304-L3305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3304-L3305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3304-L3305) · [Before (L3125-L3126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3125-L3126)

```diff
-         case gC.te.MiddleBarStart:
-           nC.o.bp("middleScreenBarInitiate", {
+         case yp.Sd.MiddleBarStart:
+           Sp.m.GA("middleScreenBarInitiate", {
```

#### 313. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3128` → after: `L3307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3307) · [Before (L3128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3128)

```diff
-             sQ: 1 === ZC[0],
+             OI: 1 === cp[0],
```

#### 314. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3132-L3133` → after: `L3311-L3312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3311-L3312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3311-L3312) · [Before (L3132-L3133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3132-L3133)

```diff
-         case gC.te.MiddleBarStop:
-           nC.o.bp("middleScreenBarRemove");
+         case yp.Sd.MiddleBarStop:
+           Sp.m.GA("middleScreenBarRemove");
```

#### 315. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3135-L3137` → after: `L3314-L3316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3314-L3316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3314-L3316) · [Before (L3135-L3137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3135-L3137)

```diff
-         case gC.te.Hitmarker:
-           nC.o.bp("localGunHitmarker", {
-             RQ: 1 === zC
+         case yp.Sd.Hitmarker:
+           Sp.m.GA("localGunHitmarker", {
+             cc: 1 === ip
```

#### 316. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3140-L3141` → after: `L3319-L3320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3319-L3320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3319-L3320) · [Before (L3140-L3141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3140-L3141)

```diff
-         case gC.te.ShotsLeft:
-           nC.o.bp("localPlayerNewShotsLeft", QC);
+         case yp.Sd.ShotsLeft:
+           Sp.m.GA("localPlayerNewShotsLeft", Op);
```

#### 317. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3143-L3144` → after: `L3322-L3323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3322-L3323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3322-L3323) · [Before (L3143-L3144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3143-L3144)

```diff
-         case gC.te.AimingOverlay:
-           nC.o.bp("aimingOverlay", 3 === (3 & zC) ? "sniper" : "none");
+         case yp.Sd.AimingOverlay:
+           Sp.m.GA("aimingOverlay", 3 === (3 & ip) ? "sniper" : "none");
```

#### 318. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3146-L3147` → after: `L3325-L3326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3325-L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3325-L3326) · [Before (L3146-L3147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3146-L3147)

```diff
-         case gC.te.BottomMessage:
-           nC.o.bp("showBottomMessage", JSON.parse(fC()));
+         case yp.Sd.BottomMessage:
+           Sp.m.GA("showBottomMessage", JSON.parse(xp()));
```

#### 319. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3149-L3150` → after: `L3328-L3329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3328-L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3328-L3329) · [Before (L3149-L3150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3149-L3150)

```diff
-         case gC.te.Crosshair:
-           wC.inaccuracy = (0, cC.f)(QC), (0, BZ.c)().crosshairAccuracy(wC.inaccuracy);
+         case yp.Sd.Crosshair:
+           op.inaccuracy = (0, Tp.i)(Op), (0, Vc.e)().crosshairAccuracy(op.inaccuracy);
```

#### 320. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3152` → after: `L3331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3331) · [Before (L3152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3152)

```diff
-         case gC.te.ChargeStage:
+         case yp.Sd.ChargeStage:
```

#### 321. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3154-L3155` → after: `L3333-L3334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3333-L3334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3333-L3334) · [Before (L3154-L3155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3154-L3155)

```diff
-         case gC.te.EmoteWheelClose:
-           nC.o.bp("requestEmoteWheelClose");
+         case yp.Sd.EmoteWheelClose:
+           Sp.m.GA("requestEmoteWheelClose");
```

#### 322. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3157-L3158` → after: `L3336-L3337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3336-L3337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3336-L3337) · [Before (L3157-L3158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3157-L3158)

```diff
-         case gC.te.BlockMined:
-           nC.o.bp("localBlockMined");
+         case yp.Sd.BlockMined:
+           Sp.m.GA("localBlockMined");
```

#### 323. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3161` → after: `L3340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3340) · [Before (L3161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3161)

```diff
-           throw new MC.b(`UiEvent of no kind: what ${CC}`)
+           throw new Wp.b(`UiEvent of no kind: what ${pp}`)
```

#### 324. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3164-L3169` → after: `L3343-L3348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3343-L3348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3343-L3348) · [Before (L3164-L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3164-L3169)

```diff
-     var kZ = ZC(37834),
-       VZ = ZC(34162),
-       CQ = ZC(1872),
-       zQ = ZC(36676),
-       ZQ = ZC(34171),
-       QQ = ZC(4711);
+     var iO = cp(38218),
+       cO = cp(34438),
+       OO = cp(1996),
+       oO = cp(37010),
+       IO = cp(34448),
+       SO = cp(4886);
```

#### 325. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3193` → after: `L3372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3372) · [Before (L3193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3193)

```diff
-       const bC = () => (ZC = (0, CQ.n)(ZC, zC()), ZC);
+       const Ip = () => (cp = (0, OO.s)(cp, ip()), cp);
```

#### 326. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3201` → after: `L3380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3380) · [Before (L3201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3201)

```diff
-           return null !== QC && nC.push((0, CQ.p)((CC => {
+           return null !== Op && Sp.push((0, OO.v)((pp => {
```

#### 327. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3224` → after: `L3403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3403) · [Before (L3224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3224)

```diff
-         attributes: (0, kZ.d)("Gun" === (0, ZQ.itemTypeOf)(zC) ? {
+         attributes: (0, iO.e)("Gun" === (0, IO.itemTypeOf)(ip) ? {
```

#### 328. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3246` → after: `L3425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3425) · [Before (L3246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3246)

```diff
-             displayName: null !== (QC = FC.attributes.customDisplayName) && void 0 !== QC ? QC : zC.getDisplayName(WC),
+             displayName: null !== (Op = Dp.attributes.customDisplayName) && void 0 !== Op ? Op : ip.getDisplayName(Ap),
```

#### 329. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3248` → after: `L3427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3427) · [Before (L3248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3248)

```diff
-             clipSize: null !== (wC = null !== (bC = null === (nC = FC.attributes.customAttributes) || void 0 === nC || null === (fC = nC.gunStats) || void 0 === fC ? void 0 : fC.clipSize) && void 0 !== bC ? bC : null === (oC = zC.getGunStats(WC)) || void 0 === oC ? void 0 : oC.cl … [truncated]
+             clipSize: null !== (op = null !== (Ip = null === (Sp = Dp.attributes.customAttributes) || void 0 === Sp || null === (xp = Sp.gunStats) || void 0 === xp ? void 0 : xp.clipSize) && void 0 !== Ip ? Ip : null === (Lp = ip.getGunStats(Ap)) || void 0 === Lp ? void 0 : Lp.cl … [truncated]
```

#### 330. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3277` → after: `L3456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3456) · [Before (L3277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3277)

```diff
-               const oC = CC.craftingView(ZC.station, fC, null !== (bC = null === (nC = ZC.recipe) || void 0 === nC ? void 0 : nC.Vn) && void 0 !== bC ? bC : 0);
+               const Lp = pp.craftingView(cp.station, xp, null !== (Ip = null === (Sp = cp.recipe) || void 0 === Sp ? void 0 : Sp.FD) && void 0 !== Ip ? Ip : 0);
```

#### 331. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3283` → after: `L3462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3462) · [Before (L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3283)

```diff
-                 let QC = gC.mb.BYTES;
+                 let Op = yp._.BYTES;
```

#### 332. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3285-L3286` → after: `L3464-L3465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3464-L3465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3464-L3465) · [Before (L3285-L3286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3285-L3286)

```diff
-                 for (let FC = gC.mb.recipes(CC, 0); FC > 0; FC--) {
-                   const ZC = gC.eb.flags(CC, QC),
+                 for (let Dp = yp._.recipes(pp, 0); Dp > 0; Dp--) {
+                   const cp = yp.S.flags(pp, Op),
```

#### 333. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3288-L3289` → after: `L3467-L3468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3467-L3468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3467-L3468) · [Before (L3288-L3289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3288-L3289)

```diff
-                       name: zC.nameOfId(gC.eb.item(CC, QC)),
-                       Vn: gC.eb.recipe(CC, QC),
+                       name: ip.nameOfId(yp.S.item(pp, Op)),
+                       FD: yp.S.recipe(pp, Op),
```

#### 334. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3291-L3293` → after: `L3470-L3472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3470-L3472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3470-L3472) · [Before (L3291-L3293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3291-L3293)

```diff
-                       produces: gC.eb.produces(CC, QC),
-                       haveIngredients: 0 !== (ZC & gC.cb.HaveIngredients),
-                       listed: 0 !== (ZC & gC.cb.Listed)
+                       produces: yp.S.produces(pp, Op),
+                       haveIngredients: 0 !== (cp & yp.P.HaveIngredients),
+                       listed: 0 !== (cp & yp.P.Listed)
```

#### 335. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3295-L3297` → after: `L3474-L3476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3474-L3476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3474-L3476) · [Before (L3295-L3297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3295-L3297)

```diff
-                   let nC = gC.eb.requires(CC, QC);
-                   for (QC += gC.eb.BYTES; nC > 0; nC--) {
-                     const ZC = gC.hb.items(CC, QC);
+                   let Sp = yp.S.requires(pp, Op);
+                   for (Op += yp.S.BYTES; Sp > 0; Sp--) {
+                     const cp = yp.V.items(pp, Op);
```

#### 336. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3299-L3301` → after: `L3478-L3480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3478-L3480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3478-L3480) · [Before (L3299-L3301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3299-L3301)

```diff
-                       items: SQ(CC, QC + gC.hb.BYTES, ZC, zC),
-                       amt: gC.hb.amount(CC, QC)
-                     }), QC += gC.hb.BYTES + 2 * ZC
+                       items: tO(pp, Op + yp.V.BYTES, cp, ip),
+                       amt: yp.V.amount(pp, Op)
+                     }), Op += yp.V.BYTES + 2 * cp
```

#### 337. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3305-L3306` → after: `L3484-L3485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3484-L3485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3484-L3485) · [Before (L3305-L3306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3305-L3306)

```diff
-                 const bC = gC.mb.flags(CC, 0);
-                 if (null === ZC.recipe || 0 === (bC & gC.lb.Detail)) return {
+                 const Ip = yp._.flags(pp, 0);
+                 if (null === cp.recipe || 0 === (Ip & yp.Y.Detail)) return {
```

#### 338. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3313-L3318` → after: `L3492-L3497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3492-L3497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3492-L3497) · [Before (L3313-L3318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3313-L3318)

```diff
-                 for (let FC = gC.mb.ingredients(CC, 0); FC > 0; FC--) {
-                   const ZC = gC.$.item(CC, QC),
-                     wC = gC.$.from(CC, QC),
-                     bC = gC.$.amount(CC, QC);
-                   QC += gC.$.BYTES;
-                   const oC = wC === gC.L ? null : SQ(CC, QC, wC, zC);
+                 for (let Dp = yp._.ingredients(pp, 0); Dp > 0; Dp--) {
+                   const cp = yp.M.item(pp, Op),
+                     op = yp.M.from(pp, Op),
+                     Ip = yp.M.amount(pp, Op);
+                   Op += yp.M.BYTES;
+                   const Lp = op === yp.y ? null : tO(pp, Op, op, ip);
```

#### 339. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3325` → after: `L3504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3504) · [Before (L3325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3325)

```diff
-                   Vn: qC
+                   FD: Yp
```

#### 340. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3332-L3334` → after: `L3511-L3513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3511-L3513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3511-L3513) · [Before (L3332-L3334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3332-L3334)

```diff
-                     Vn: qC,
-                     craftAllTimes: gC.mb.craftAllTimes(CC, 0),
-                     roomForOne: 0 !== (bC & gC.lb.RoomForOne),
+                     FD: Yp,
+                     craftAllTimes: yp._.craftAllTimes(pp, 0),
+                     roomForOne: 0 !== (Ip & yp.Y.RoomForOne),
```

#### 341. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3357` → after: `L3536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3536) · [Before (L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3357)

```diff
-             for (let zC = 0; zC < gC.Nd; zC++) QC.push(qQ(CC.slot(zC)));
+             for (let ip = 0; ip < yp.fd; ip++) Op.push(PO(pp.slot(ip)));
```

#### 342. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3367-L3368` → after: `L3546-L3547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3546-L3547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3546-L3547) · [Before (L3367-L3368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3367-L3368)

```diff
-             if (ZC > gC.Nd) {
-               for (let zC = gC.Nd; zC < ZC; zC++) fC.push(qQ(CC.slot(zC)));
+             if (cp > yp.fd) {
+               for (let ip = yp.fd; ip < cp; ip++) xp.push(PO(pp.slot(ip)));
```

#### 343. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3371-L3372` → after: `L3550-L3551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3550-L3551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3550-L3551) · [Before (L3371-L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3371-L3372)

```diff
-                 pos: [...CC.hQ],
-                 numSlots: ZC - gC.Nd,
+                 pos: [...pp.WI],
+                 numSlots: cp - yp.fd,
```

#### 344. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3384` → after: `L3563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3563) · [Before (L3384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3384)

```diff
-           }), (0, CQ.j)("creative")),
+           }), (0, OO.l)("creative")),
```

#### 345. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3399` → after: `L3578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3578) · [Before (L3399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3399)

```diff
-             const QC = null === (zC = CC.vq()) || void 0 === zC ? void 0 : zC.typeObj,
+             const Op = null === (ip = pp.sx()) || void 0 === ip ? void 0 : ip.typeObj,
```

#### 346. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3408` → after: `L3587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3587) · [Before (L3408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3408)

```diff
-             return (0, QQ.r)((() => {
+             return (0, SO.s)((() => {
```

#### 347. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3415-L3422` → after: `L3594-L3601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3594-L3601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3594-L3601) · [Before (L3415-L3422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3415-L3422)

```diff
-           hotbarSlotRequested: (0, CQ.c)("setSelectedInventorySlotI"),
-           hotbarScrolled: (0, CQ.c)("ScrollInventorySlot"),
-           numberKeyPressed: (0, CQ.c)("numkeyPressed"),
-           inventoryDropRequested: (0, CQ.c)("DropInvenItem"),
-           chestToggled: (0, CQ.c)("chestToggleFromServer"),
-           chestRefreshed: (0, CQ.c)("chestRefreshedFromServer", gQ),
-           inventorySynced: (0, CQ.c)("syncedInvenFromServer", gQ),
-           enchantingTableOpened: (0, CQ.c)("enchantingTable", (CC => {
+           hotbarSlotRequested: (0, OO.e)("setSelectedInventorySlotI"),
+           hotbarScrolled: (0, OO.e)("ScrollInventorySlot"),
+           numberKeyPressed: (0, OO.e)("numkeyPressed"),
+           inventoryDropRequested: (0, OO.e)("DropInvenItem"),
+           chestToggled: (0, OO.e)("chestToggleFromServer"),
+           chestRefreshed: (0, OO.e)("chestRefreshedFromServer", vO),
+           inventorySynced: (0, OO.e)("syncedInvenFromServer", vO),
+           enchantingTableOpened: (0, OO.e)("enchantingTable", (pp => {
```

#### 348. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3425` → after: `L3604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3604) · [Before (L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3425)

```diff
-               SF: QC
+               tx: Op
```

#### 349. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3470` → after: `L3649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3649) · [Before (L3470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3470)

```diff
-             CC.closeChest(), CC.flush(QC), nC.o.bp("chestClosedByPlayer")
+             pp.closeChest(), pp.flush(Op), Sp.m.GA("chestClosedByPlayer")
```

#### 350. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3478` → after: `L3657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3657) · [Before (L3478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3478)

```diff
-               Vn: QC,
+               FD: Op,
```

#### 351. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3508` → after: `L3687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3687) · [Before (L3508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3508)

```diff
-               if (!wC || !zC.getClientOption("canCraft") || !(0, VZ.t)(QC) || (0, VZ.p)(wC.attributes)) return MQ;
+               if (!op || !ip.getClientOption("canCraft") || !(0, cO.r)(Op) || (0, cO.q)(op.attributes)) return wO;
```

#### 352. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3512` → after: `L3691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3691) · [Before (L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3512)

```diff
-               for (let fC = 0; fC < zQ.c; fC++) {
+               for (let xp = 0; xp < oO.d; xp++) {
```

#### 353. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3520` → after: `L3699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3699) · [Before (L3520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3520)

```diff
-                 } = (0, VZ.h)(QC, fC);
+                 } = (0, cO.g)(Op, xp);
```

#### 354. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3555` → after: `L3734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3734) · [Before (L3555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3555)

```diff
-           HV: 0,
+           KV: 0,
```

#### 355. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3558` → after: `L3737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3737) · [Before (L3558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3558)

```diff
-           wp: [0, 0, 0]
+           nY: [0, 0, 0]
```

#### 356. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3565` → after: `L3744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3744) · [Before (L3565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3565)

```diff
-       pCC() {
+       Rpp() {
```

#### 357. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3574-L3575` → after: `L3753-L3754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3753-L3754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3753-L3754) · [Before (L3574-L3575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3574-L3575)

```diff
-         if (this.refreshTarget(), this.isBreaking = 0 !== (gC.w.playerFlags(CC, 0) & gC.ce.Breaking) && gC.w.breakingProgress(CC, 0) >= 0, this.isBreaking)
-           for (let zC = 0; zC < 3; zC++) this.breaking[zC] = gC.w.breakingPos(CC, 0, zC)
+         if (this.refreshTarget(), this.isBreaking = 0 !== (yp.q.playerFlags(pp, 0) & yp.wd.Breaking) && yp.q.breakingProgress(pp, 0) >= 0, this.isBreaking)
+           for (let ip = 0; ip < 3; ip++) this.breaking[ip] = yp.q.breakingPos(pp, 0, ip)
```

#### 358. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3579-L3580` → after: `L3758-L3759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3758-L3759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3758-L3759) · [Before (L3579-L3580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3579-L3580)

```diff
-           zC = gC.w.targetBlockId(CC, 0);
-         if (this.hasTarget = zC !== gC.rd, this.hasTarget) {
+           ip = yp.q.targetBlockId(pp, 0);
+         if (this.hasTarget = ip !== yp.Rc, this.hasTarget) {
```

#### 359. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3582-L3583` → after: `L3761-L3762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3761-L3762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3761-L3762) · [Before (L3582-L3583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3582-L3583)

```diff
-           ZC.HV = zC;
-           for (let zC = 0; zC < 3; zC++) ZC.position[zC] = gC.w.targetBlock(CC, 0, zC), ZC.normal[zC] = gC.w.targetNormal(CC, 0, zC), ZC.wp[zC] = gC.w.targetAdjacent(CC, 0, zC)
+           cp.KV = ip;
+           for (let ip = 0; ip < 3; ip++) cp.position[ip] = yp.q.targetBlock(pp, 0, ip), cp.normal[ip] = yp.q.targetNormal(pp, 0, ip), cp.nY[ip] = yp.q.targetAdjacent(pp, 0, ip)
```

#### 360. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3591-L3593` → after: `L3770-L3773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3770-L3773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3770-L3773) · [Before (L3591-L3593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3591-L3593)

```diff
-     var PQ = ZC(40465),
-       GQ = ZC(40446),
-       RQ = ZC(36673);
+     var dO = cp(40831),
+       eO = cp(40813),
+       uO = cp(36591),
+       jO = cp(37001);
```

#### 361. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3598` → after: `L3778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3778) · [Before (L3598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3598)

```diff
-         this.game = new RQ.f, this.client = new RQ.f, this.vq = 0, this.movesFly = null
+         this.game = new jO.c, this.client = new jO.c, this.sx = 0, this.movesFly = null
```

#### 362. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3612` → after: `L3792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3792) · [Before (L3612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3612)

```diff
-         this.game = new RQ.f, this.movesFly = null
+         this.game = new jO.c, this.movesFly = null
```

#### 363. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3618` → after: `L3798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3798) · [Before (L3618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3618)

```diff
-         return (this.game._getTotalBooleanVal() ? AQ : 0) | (this.client._getTotalBooleanVal() ? xQ : 0)
+         return (this.game._getTotalBooleanVal() ? kO : 0) | (this.client._getTotalBooleanVal() ? mO : 0)
```

#### 364. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3625-L3627` → after: `L3805-L3807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3805-L3807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3805-L3807) · [Before (L3625-L3627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3625-L3627)

```diff
-         if (zC === this.vq && null === ZC) return !0;
-         let QC = gC.dc.Keep;
-         return null !== ZC && (QC = ZC ? gC.dc.On : gC.dc.Off), !(!CC || !(0, gC.Pe)(CC, 0, QC, zC, ZC ? 1 : 0)) && (this.vq = zC, this.movesFly = null, !0)
+         if (ip === this.sx && null === cp) return !0;
+         let Op = yp.Hb.Keep;
+         return null !== cp && (Op = cp ? yp.Hb.On : yp.Hb.Off), !(!pp || !(0, yp.me)(pp, 0, Op, ip, cp ? 1 : 0)) && (this.sx = ip, this.movesFly = null, !0)
```

#### 365. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3634` → after: `L3814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3814) · [Before (L3634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3634)

```diff
-           x: fC.c,
+           x: xp.d,
```

#### 366. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3642` → after: `L3822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3822) · [Before (L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3642)

```diff
-           zC = gC.w.viewProj;
+           ip = yp.q.viewProj;
```

#### 367. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3650` → after: `L3830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3830) · [Before (L3650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3650)

```diff
-         for (let ZC = 0; ZC < 3; ZC++) zC[ZC] = gC.w.eye(CC, 0, ZC);
+         for (let cp = 0; cp < 3; cp++) ip[cp] = yp.q.eye(pp, 0, cp);
```

#### 368. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3655` → after: `L3835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3835) · [Before (L3655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3655)

```diff
-           zC = gC.w.viewProj,
+           ip = yp.q.viewProj,
```

#### 369. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3666` → after: `L3846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3846) · [Before (L3666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3666)

```diff
-         return gC.w.heading(this.api.apiView, 0)
+         return yp.q.heading(this.api.apiView, 0)
```

#### 370. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3669` → after: `L3849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3849) · [Before (L3669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3669)

```diff
-         return gC.w.pitch(this.api.apiView, 0)
+         return yp.q.pitch(this.api.apiView, 0)
```

#### 371. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3672` → after: `L3852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3852) · [Before (L3672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3672)

```diff
-         return gC.w.tanHalfFovX(this.api.apiView, 0)
+         return yp.q.tanHalfFovX(this.api.apiView, 0)
```

#### 372. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3675` → after: `L3855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3855) · [Before (L3675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3675)

```diff
-         return gC.w.tanHalfFovY(this.api.apiView, 0)
+         return yp.q.tanHalfFovY(this.api.apiView, 0)
```

#### 373. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3695-L3697` → after: `L3875-L3877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3875-L3877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3875-L3877) · [Before (L3695-L3697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3695-L3697)

```diff
-           fC = gC.w.viewProj,
-           oC = bC > 0 ? zC / bC : 0,
-           qC = bC > 0 ? -ZC / bC : 0,
+           xp = yp.q.viewProj,
+           Lp = Ip > 0 ? ip / Ip : 0,
+           Yp = Ip > 0 ? -cp / Ip : 0,
```

#### 374. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3725-L3728` → after: `L3905-L3908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3905-L3908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3905-L3908) · [Before (L3725-L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3725-L3728)

```diff
-           ZC = CC[0] - gC.w.origin(zC, 0, 0),
-           QC = CC[1] - gC.w.origin(zC, 0, 1),
-           wC = CC[2] - gC.w.origin(zC, 0, 2),
-           bC = gC.w.viewProj;
+           cp = pp[0] - yp.q.origin(ip, 0, 0),
+           Op = pp[1] - yp.q.origin(ip, 0, 1),
+           op = pp[2] - yp.q.origin(ip, 0, 2),
+           Ip = yp.q.viewProj;
```

#### 375. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3732` → after: `L3912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3912) · [Before (L3732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3732)

```diff
-         return (0, fC.f)(CC, zC, this.screenBandPct.x, this.screenBandPct.y)
+         return (0, xp.h)(pp, ip, this.screenBandPct.x, this.screenBandPct.y)
```

#### 376. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3735` → after: `L3915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3915) · [Before (L3735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3735)

```diff
-     var iQ = ZC(4745);
+     var MO = cp(4921);
```

#### 377. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3737` → after: `L3917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3917) · [Before (L3737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3737)

```diff
-       eQ = new Uint8Array(gC.R * gC.Q);
+       EO = new Uint8Array(yp.C * yp.B);
```

#### 378. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3740` → after: `L3920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3920) · [Before (L3740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3740)

```diff
-         this.buttons = [], this.vq = !0
+         this.buttons = [], this.sx = !0
```

#### 379. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3743` → after: `L3923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3923) · [Before (L3743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3743)

```diff
-         this.buttons = CC, this.vq = !1
+         this.buttons = pp, this.sx = !1
```

#### 380. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3746` → after: `L3926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3926) · [Before (L3746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3746)

```diff
-         this.vq = 0 === this.buttons.length
+         this.sx = 0 === this.buttons.length
```

#### 381. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3749-L3751` → after: `L3929-L3931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3929-L3931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3929-L3931) · [Before (L3749-L3751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3749-L3751)

```diff
-         if (this.vq) return;
-         const zC = new Uint8Array(gC.R),
-           ZC = new Uint8Array(gC.R);
+         if (this.sx) return;
+         const ip = new Uint8Array(yp.C),
+           cp = new Uint8Array(yp.C);
```

#### 382. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3759` → after: `L3939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3939) · [Before (L3759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3759)

```diff
-           if (QC === gC.R) break;
+           if (Op === yp.C) break;
```

#### 383. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3763` → after: `L3943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3943) · [Before (L3763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3763)

```diff
-           } = vQ.encodeInto(bC, eQ.subarray(wC, wC + gC.Q));
+           } = CO.encodeInto(Ip, EO.subarray(op, op + yp.B));
```

#### 384. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3765-L3766` → after: `L3945-L3946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3945-L3946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3945-L3946) · [Before (L3765-L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3765-L3766)

```diff
-           const oC = iQ.g[nC];
-           zC[QC] = "number" === typeof oC ? oC : 0, ZC[QC] = fC, QC++, wC += fC
+           const Lp = MO.j[Sp];
+           ip[Op] = "number" === typeof Lp ? Lp : 0, cp[Op] = xp, Op++, op += xp
```

#### 385. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3768` → after: `L3948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3948) · [Before (L3768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3768)

```diff
-         this.vq = (0, gC.Be)(CC, 0, QC, zC, ZC, eQ.subarray(0, wC))
+         this.sx = (0, yp.ae)(pp, 0, Op, ip, cp, EO.subarray(0, op))
```

#### 386. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3774-L3775` → after: `L3954-L3955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3954-L3955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3954-L3955) · [Before (L3774-L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3774-L3775)

```diff
-       return QC.length <= gC.Q && function(CC, zC, ZC, QC) {
-         return (0, Dz.b)(), (0, gC.Hf)(CC, zC, ZC, QC)
+       return Op.length <= yp.B && function(pp, ip, cp, Op) {
+         return (0, ri.e)(), (0, yp.nf)(pp, ip, cp, Op)
```

#### 387. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3783-L3785` → after: `L3963-L3965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3963-L3965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3963-L3965) · [Before (L3783-L3785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3783-L3785)

```diff
-         off: gC.fe.Off,
-         key: gC.fe.Key,
-         touch: gC.fe.Touch
+         off: yp.xd.Off,
+         key: yp.xd.Key,
+         touch: yp.xd.Touch
```

#### 388. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3790-L3791` → after: `L3970-L3971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3970-L3971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3970-L3971) · [Before (L3790-L3791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3790-L3791)

```diff
-         this.options = CC, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tic … [truncated]
-           if ((0, MC.e)(CC)) throw CC;
+         this.options = pp, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tic … [truncated]
+           if ((0, Wp.f)(pp)) throw pp;
```

#### 389. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3793` → after: `L3973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3973) · [Before (L3793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3793)

```diff
-         }, this.api = CC.api, this.tables = CC.tables, this.onError = null !== (zC = CC.onError) && void 0 !== zC ? zC : CC => {
+         }, this.api = pp.api, this.tables = pp.tables, this.onError = null !== (ip = pp.onError) && void 0 !== ip ? ip : pp => {
```

#### 390. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3849` → after: `L4029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4029) · [Before (L3849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3849)

```diff
-         return this.itemSources ??= NQ(this.items, this.tables, (() => this.localPlayerAlive()), this.Cg), this.itemSources
+         return this.itemSources ??= UO(this.items, this.tables, (() => this.localPlayerAlive()), this.Yy), this.itemSources
```

#### 391. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3865` → after: `L4045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4045) · [Before (L3865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3865)

```diff
-         return null !== zC && (ZC = zC, QC = 0, wC = CC[0], bC = CC[1], nC = CC[2], (0, Dz.b)(), (0, gC.He)(ZC, QC, wC, bC, nC));
+         return null !== ip && (cp = ip, Op = 0, op = pp[0], Ip = pp[1], Sp = pp[2], (0, ri.e)(), (0, yp.ge)(cp, Op, op, Ip, Sp));
```

#### 392. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3873` → after: `L4053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4053) · [Before (L3873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3873)

```diff
-         return null === zC ? (this.pendingZoom = CC, !1) : (this.pendingZoom = null, (0, gC.ug)(zC, 0, CC, 1))
+         return null === ip ? (this.pendingZoom = pp, !1) : (this.pendingZoom = null, (0, yp.eg)(ip, 0, pp, 1))
```

#### 393. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3877` → after: `L4057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4057) · [Before (L3877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3877)

```diff
-         return null !== zC && (0, gC.og)(zC, 0, CC ? 1 : 0)
+         return null !== ip && (0, yp._f)(ip, 0, pp ? 1 : 0)
```

#### 394. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3881` → after: `L4061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4061) · [Before (L3881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3881)

```diff
-         return null !== CC && (zC = CC, ZC = 0, (0, Dz.b)(), (0, gC.Pf)(zC, ZC));
+         return null !== pp && (ip = pp, cp = 0, (0, ri.e)(), (0, yp.yf)(ip, cp));
```

#### 395. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3893` → after: `L4073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4073) · [Before (L3893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3893)

```diff
-         return null !== nC && (0, gC.rf)(nC, 0, CC, zC, ZC, QC, wC, bC)
+         return null !== Sp && (0, yp.Ye)(Sp, 0, pp, ip, cp, Op, op, Ip)
```

#### 396. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3897` → after: `L4077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4077) · [Before (L3897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3897)

```diff
-         return null !== zC && (0, gC.zg)(zC, 0, null !== CC && void 0 !== CC ? CC : 1 / 0)
+         return null !== ip && (0, yp.jg)(ip, 0, null !== pp && void 0 !== pp ? pp : 1 / 0)
```

#### 397. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3902` → after: `L4082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4082) · [Before (L3902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3902)

```diff
-         return null !== QC && jz(QC, ZC ? NC.ld : 0, CC, (0, XC.f)(zC))
+         return null !== Op && Zi(Op, cp ? Pp.od : 0, pp, (0, Np.f)(ip))
```

#### 398. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3923` → after: `L4103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4103) · [Before (L3923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3923)

```diff
-         this.overflowGen = gC.w.eventOverflowGen(ZC, 0), this.resyncOwed = 0 !== gC.w.eventOverflowMask(ZC, 0), CC.setGameHost(this), CC.setEventWalker((CC => {
+         this.overflowGen = yp.q.eventOverflowGen(cp, 0), this.resyncOwed = 0 !== yp.q.eventOverflowMask(cp, 0), pp.setGameHost(this), pp.setEventWalker((pp => {
```

#### 399. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3931` → after: `L4111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4111) · [Before (L3931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3931)

```diff
-         return "off" === this.promptWatch || this.stopped() ? null : XQ(gC.w.promptEntity(this.api.apiView, 0))
+         return "off" === this.promptWatch || this.stopped() ? null : bO(yp.q.promptEntity(this.api.apiView, 0))
```

#### 400. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3934` → after: `L4114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4114) · [Before (L3934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3934)

```diff
-         return "touch" !== this.promptWatch || this.stopped() ? gC.Gc.None : gC.w.interactLabel(this.api.apiView, 0)
+         return "touch" !== this.promptWatch || this.stopped() ? yp.mc.None : yp.q.interactLabel(this.api.apiView, 0)
```

#### 401. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3937` → after: `L4117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4117) · [Before (L3937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3937)

```diff
-         return "touch" !== this.promptWatch || this.stopped() ? 0 : gC.w.interactIcon(this.api.apiView, 0)
+         return "touch" !== this.promptWatch || this.stopped() ? 0 : yp.q.interactIcon(this.api.apiView, 0)
```

#### 402. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3947` → after: `L4127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4127) · [Before (L3947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3947)

```diff
-         "connection" === CC.type ? CC.phase === NC.J.Activated && CC.conn !== this.activeConn && CC.conn > this.closedThrough ? (this.endSession(), this.activeConn = CC.conn, this.endGameGrants(), this.dropGameCamera()) : CC.phase !== NC.J.Left && CC.phase !== NC.J.Closed || CC.c … [truncated]
+         "connection" === pp.type ? pp.phase === Pp.H.Activated && pp.conn !== this.activeConn && pp.conn > this.closedThrough ? (this.endSession(), this.activeConn = pp.conn, this.endGameGrants(), this.dropGameCamera()) : pp.phase !== Pp.H.Left && pp.phase !== Pp.H.Closed || pp.c … [truncated]
```

#### 403. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3964` → after: `L4144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4144) · [Before (L3964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3964)

```diff
-             if ("message" !== CC.type || CC.cq !== yZ.Bc.GameCodeMessage || CC.payloadKind !== NC.hc.Msgpack) return null;
+             if ("message" !== pp.type || pp.VD !== zc.Zb.GameCodeMessage || pp.payloadKind !== Pp.kc.Msgpack) return null;
```

#### 404. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3977-L3978` → after: `L4157-L4158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4157-L4158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4157-L4158) · [Before (L3977-L3978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3977-L3978)

```diff
-           if ((0, KC.e)(CC)) return void this.guard((() => {
-             (0, KC.c)(CC, ZC)
+           if ((0, Cp.f)(pp)) return void this.guard((() => {
+             (0, Cp.d)(pp, cp)
```

#### 405. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4008` → after: `L4188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4188) · [Before (L4008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4008)

```diff
-         this.highlightOwed = null === zC ? !(0, gC.$e)(CC, 0, HQ, HQ, 0) : !(0, gC.$e)(CC, 0, zC.pos, zC.normal, 1)
+         this.highlightOwed = null === ip ? !(0, yp.De)(pp, 0, NO, NO, 0) : !(0, yp.De)(pp, 0, ip.pos, ip.normal, 1)
```

#### 406. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4021` → after: `L4201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4201) · [Before (L4021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4021)

```diff
-           wC = CC.gameNameWithVariation, bC = null !== (oC = (0, eC.zb)(wC)) && void 0 !== oC ? oC : void 0, nC = (0, hC.B)(CC.lobbyName), fC = (0, hC.U)(CC.lobbyName)
+           op = pp.gameNameWithVariation, Ip = null !== (Lp = (0, qp.Ib)(op)) && void 0 !== Lp ? Lp : void 0, Sp = (0, Mp.w)(pp.lobbyName), xp = (0, Mp.I)(pp.lobbyName)
```

#### 407. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4032` → after: `L4212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4212) · [Before (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4032)

```diff
-           FC = null !== (NC = null === (MC = this.options.gameFactory((0, eC.Cb)(wC))) || void 0 === MC ? void 0 : MC(fC, nC, bC, qC)) && void 0 !== NC ? NC : {}
+           Dp = null !== (Pp = null === (Wp = this.options.gameFactory((0, qp.Mb)(op))) || void 0 === Wp ? void 0 : Wp(xp, Sp, Ip, Yp)) && void 0 !== Pp ? Pp : {}
```

#### 408. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4034` → after: `L4214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4214) · [Before (L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4034)

```diff
-           this.Cg(GC)
+           this.Yy(tp)
```

#### 409. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4043` → after: `L4223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4223) · [Before (L4043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4043)

```diff
-           this.Cg(GC)
+           this.Yy(tp)
```

#### 410. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4046` → after: `L4226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4226) · [Before (L4046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4046)

```diff
-         this.owners = pC, this.tickers = pC.filter((CC => void 0 !== CC.ZN)), this.renderers = pC.filter((CC => void 0 !== CC.onAfterRender)), this.receivers = pC.filter((CC => void 0 !== CC.onReceivedMessageFromServer)), this.writeAltVeto(pC), this.writeHooks(pC), this.writePubl … [truncated]
+         this.owners = wp, this.tickers = wp.filter((pp => void 0 !== pp.LP)), this.renderers = wp.filter((pp => void 0 !== pp.onAfterRender)), this.receivers = wp.filter((pp => void 0 !== pp.onReceivedMessageFromServer)), this.writeAltVeto(wp), this.writeHooks(wp), this.writePubl … [truncated]
```

#### 411. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4081` → after: `L4261-L4264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4261-L4264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4261-L4264) · [Before (L4081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4081)

```diff
-         const ZC = (0, QQ.j)(CC, gC.w.frameMs(this.api.apiView, 0));
+         const cp = this.api.apiView,
+           Op = yp.q.frameMs(cp, 0);
+         uO.l.frame(Op, yp.q.heading(cp, 0), yp.q.pitch(cp, 0), uO.g[pp]);
+         const op = (0, SO.h)(pp, Op);
```

#### 412. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4085` → after: `L4268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4268) · [Before (L4085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4085)

```diff
-             (0, BZ.c)().turnDamageIndicators(CC.cameraHeading)
+             (0, Vc.e)().turnDamageIndicators(pp.cameraHeading)
```

#### 413. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4096` → after: `L4279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4279) · [Before (L4096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4096)

```diff
-           this.Cg(wC)
+           this.Yy(Sp)
```

#### 414. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4098` → after: `L4281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4281) · [Before (L4098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4098)

```diff
-         this.showZoom(), this.items.flush(this.Cg), this.writePromptWatch(), this.writeCustomButtons();
+         this.showZoom(), this.items.flush(this.Yy), this.writePromptWatch(), this.writeCustomButtons();
```

#### 415. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4100` → after: `L4283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4283) · [Before (L4100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4100)

```diff
-         this.ticks = 0, (0, QQ.h)(QC, CC, ZC, this.Cg)
+         this.ticks = 0, (0, SO.f)(Ip, pp, op, this.Yy)
```

#### 416. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4107` → after: `L4290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4290) · [Before (L4107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4107)

```diff
-           zC = gC.w.eventOverflowGen(CC, 0),
+           ip = yp.q.eventOverflowGen(pp, 0),
```

#### 417. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4111` → after: `L4294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4294) · [Before (L4111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4111)

```diff
-         const QC = gC.w.eventOverflowMask(CC, 0),
+         const Op = yp.q.eventOverflowMask(pp, 0),
```

#### 418. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4113` → after: `L4296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4296) · [Before (L4113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4113)

```diff
-         0 === QC || null === wC || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, gC.Le)(wC, 0, QC);
+         0 === Op || null === op || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, yp.ke)(op, 0, Op);
```

#### 419. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4120` → after: `L4303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4303) · [Before (L4120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4120)

```diff
-         if (CC === gC.rc.Director) try {
+         if (pp === yp.Zb.Director) try {
```

#### 420. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4123` → after: `L4306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4306) · [Before (L4123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4123)

```diff
-           return this.Cg(qC), gC.qb.None
+           return this.Yy(Yp), yp.cb.None
```

#### 421. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4125` → after: `L4308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4308) · [Before (L4125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4125)

```diff
-         if (!this.sessionLive || void 0 !== this.fault) return CC === gC.rc.AltVeto ? gC.j.Allow : 0;
+         if (!this.sessionLive || void 0 !== this.fault) return pp === yp.Zb.AltVeto ? yp.g.Allow : 0;
```

#### 422. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4129` → after: `L4312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4312) · [Before (L4129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4129)

```diff
-           throw (0, MC.e)(qC) && (this.fault = qC), qC
+           throw (0, Wp.f)(Yp) && (this.fault = Yp), Yp
```

#### 423. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4142-L4143` → after: `L4325-L4326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4325-L4326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4325-L4326) · [Before (L4142-L4143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4142-L4143)

```diff
-           case gC.rc.AltVeto:
-           case gC.rc.AltAction: {
+           case yp.Zb.AltVeto:
+           case yp.Zb.AltAction: {
```

#### 424. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4148` → after: `L4331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4331) · [Before (L4148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4148)

```diff
-             if (CC === gC.rc.AltAction) return this.first((CC => {
+             if (pp === yp.Zb.AltAction) return this.first((pp => {
```

#### 425. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4156` → after: `L4339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4339) · [Before (L4156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4156)

```diff
-             return "preventAction" === pC ? gC.j.Prevent : "preventPlacement" === pC ? gC.j.PreventPlacement : gC.j.Allow
+             return "preventAction" === wp ? yp.g.Prevent : "preventPlacement" === wp ? yp.g.PreventPlacement : yp.g.Allow
```

#### 426. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4158` → after: `L4341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4341) · [Before (L4158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4158)

```diff
-           case gC.rc.Click: {
+           case yp.Zb.Click: {
```

#### 427. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4160-L4161` → after: `L4343-L4344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4343-L4344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4343-L4344) · [Before (L4160-L4161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4160-L4161)

```diff
-               FC = 0 !== (CC & gC.W.Alt),
-               WC = 0 !== (CC & gC.W.HasPos),
+               Dp = 0 !== (pp & yp.H.Alt),
+               Ap = 0 !== (pp & yp.H.HasPos),
```

#### 428. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4165` → after: `L4348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4348) · [Before (L4165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4165)

```diff
-               GC = 0 !== (CC & gC.W.Up),
+               tp = 0 !== (pp & yp.H.Up),
```

#### 429. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4167` → after: `L4350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4350) · [Before (L4167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4167)

```diff
-             if (0 === (CC & gC.W.AttackOnly) && this.first((CC => {
+             if (0 === (pp & yp.H.AttackOnly) && this.first((pp => {
```

#### 430. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4180` → after: `L4363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4363) · [Before (L4180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4180)

```diff
-           case gC.rc.ChangeBlock: {
+           case yp.Zb.ChangeBlock: {
```

#### 431. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4188` → after: `L4371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4371) · [Before (L4188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4188)

```diff
-           case gC.rc.DropItem: {
+           case yp.Zb.DropItem: {
```

#### 432. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4196` → after: `L4379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4379) · [Before (L4196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4196)

```diff
-             return this.onError(new Error(`Unknown game call kind ${CC}`)), 0
+             return this.onError(new Error(`Unknown game call kind ${pp}`)), 0
```

#### 433. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4200` → after: `L4383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4383) · [Before (L4200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4200)

```diff
-         const fC = wC === gC.nd ? null : YQ.decode(this.api.eventBytes(bC, Math.min(wC, nC)));
+         const xp = op === yp.Ic ? null : QO.decode(this.api.eventBytes(Ip, Math.min(op, Sp)));
```

#### 434. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4202-L4204` → after: `L4385-L4387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4385-L4387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4385-L4387) · [Before (L4202-L4204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4202-L4204)

```diff
-           Xb: [CC, zC, ZC],
-           cb: QC,
-           ub: fC
+           dp: [pp, ip, cp],
+           jp: Op,
+           kp: xp
```

#### 435. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4212` → after: `L4395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4395) · [Before (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4212)

```diff
-         })), this.bp("EditBoard", {
+         })), this.GA("EditBoard", {
```

#### 436. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4214` → after: `L4397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4397) · [Before (L4214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4214)

```diff
-         }), this.bp("EditCodeBlock", {
+         }), this.GA("EditCodeBlock", {
```

#### 437. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4220` → after: `L4403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4403) · [Before (L4220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4220)

```diff
-         CC === gC.Oc.ChestOpened ? this.items.chestOpened(ZC, QC, wC) : CC !== gC.Oc.Synced && CC !== gC.Oc.ChestClosed && CC !== gC.Oc.ChestRefreshed || this.items.touch(), this.guard((() => {
+         pp === yp.rc.ChestOpened ? this.items.chestOpened(cp, Op, op) : pp !== yp.rc.Synced && pp !== yp.rc.ChestClosed && pp !== yp.rc.ChestRefreshed || this.items.touch(), this.guard((() => {
```

#### 438. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4223-L4224` → after: `L4406-L4407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4406-L4407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4406-L4407) · [Before (L4223-L4224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4223-L4224)

```diff
-               case gC.Oc.Synced:
-                 nC.o.bp("syncedInvenFromServer");
+               case yp.rc.Synced:
+                 Sp.m.GA("syncedInvenFromServer");
```

#### 439. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4226-L4228` → after: `L4409-L4411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4409-L4411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4409-L4411) · [Before (L4226-L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4226-L4228)

```diff
-               case gC.Oc.ChestOpened:
-               case gC.Oc.ChestClosed:
-                 nC.o.bp("chestToggleFromServer", CC === gC.Oc.ChestOpened, !0);
+               case yp.rc.ChestOpened:
+               case yp.rc.ChestClosed:
+                 Sp.m.GA("chestToggleFromServer", pp === yp.rc.ChestOpened, !0);
```

#### 440. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4230-L4231` → after: `L4413-L4414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4413-L4414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4413-L4414) · [Before (L4230-L4231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4230-L4231)

```diff
-               case gC.Oc.ChestRefreshed:
-                 nC.o.bp("chestRefreshedFromServer");
+               case yp.rc.ChestRefreshed:
+                 Sp.m.GA("chestRefreshedFromServer");
```

#### 441. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4233-L4235` → after: `L4416-L4418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4416-L4418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4416-L4418) · [Before (L4233-L4235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4233-L4235)

```diff
-               case gC.Oc.EnchantingTable:
-                 nC.o.bp("enchantingTable", {
-                   SF: QC,
+               case yp.rc.EnchantingTable:
+                 Sp.m.GA("enchantingTable", {
+                   tx: Op,
```

#### 442. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4239-L4240` → after: `L4422-L4423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4422-L4423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4422-L4423) · [Before (L4239-L4240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4239-L4240)

```diff
-               case gC.Oc.HotbarRequest:
-                 nC.o.bp("setSelectedInventorySlotI", zC, !0);
+               case yp.rc.HotbarRequest:
+                 Sp.m.GA("setSelectedInventorySlotI", ip, !0);
```

#### 443. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4242-L4243` → after: `L4425-L4426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4425-L4426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4425-L4426) · [Before (L4242-L4243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4242-L4243)

```diff
-               case gC.Oc.Scrolled:
-                 nC.o.bp("ScrollInventorySlot", zC);
+               case yp.rc.Scrolled:
+                 Sp.m.GA("ScrollInventorySlot", ip);
```

#### 444. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4245-L4246` → after: `L4428-L4429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4428-L4429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4428-L4429) · [Before (L4245-L4246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4245-L4246)

```diff
-               case gC.Oc.NumberKey:
-                 nC.o.bp("numkeyPressed", zC + 1);
+               case yp.rc.NumberKey:
+                 Sp.m.GA("numkeyPressed", ip + 1);
```

#### 445. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4248-L4249` → after: `L4431-L4432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4431-L4432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4431-L4432) · [Before (L4248-L4249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4248-L4249)

```diff
-               case gC.Oc.DropRequested:
-                 nC.o.bp("DropInvenItem", 0 !== zC);
+               case yp.rc.DropRequested:
+                 Sp.m.GA("DropInvenItem", 0 !== ip);
```

#### 446. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4252` → after: `L4435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4435) · [Before (L4252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4252)

```diff
-                 throw new MC.b(`InventoryEvent of no kind: what ${CC}`)
+                 throw new Wp.b(`InventoryEvent of no kind: what ${pp}`)
```

#### 447. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4261` → after: `L4444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4444) · [Before (L4261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4261)

```diff
-         this.bp("shotPlayer", {
+         this.GA("shotPlayer", {
```

#### 448. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4269-L4271` → after: `L4452-L4454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4452-L4454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4452-L4454) · [Before (L4269-L4271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4269-L4271)

```diff
-         this.bp("closeShopOnDamaged", null), this.guard((() => {
-           nC.o.bp("damagedByOtherPlayer", {
-             UC: null,
+         this.GA("closeShopOnDamaged", null), this.guard((() => {
+           Sp.m.GA("damagedByOtherPlayer", {
+             Ec: null,
```

#### 449. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4273` → after: `L4456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4456) · [Before (L4273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4273)

```diff
-             Hb: CC
+             Qp: pp
```

#### 450. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4279-L4280` → after: `L4462-L4463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4462-L4463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4462-L4463) · [Before (L4279-L4280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4279-L4280)

```diff
-           nC.o.bp("yourAttackHit", {
-             RQ: QC,
+           Sp.m.GA("yourAttackHit", {
+             cc: Op,
```

#### 451. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4287` → after: `L4470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4470) · [Before (L4287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4287)

```diff
-         this.bp("PlayerPhysicsTypeUpdate", CC)
+         this.GA("PlayerPhysicsTypeUpdate", pp)
```

#### 452. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4291` → after: `L4474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4474) · [Before (L4291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4291)

```diff
-           CC === NC.Cd.UPDATE ? (0, dC.k)(zC, {
+           pp === Pp.Cd.UPDATE ? (0, Xp.h)(ip, {
```

#### 453. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4296` → after: `L4479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4479) · [Before (L4296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4296)

```diff
-           }) : YC.c.remove(zC)
+           }) : Ep.e.remove(ip)
```

#### 454. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4303` → after: `L4486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4486) · [Before (L4303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4303)

```diff
-         this.bp("showBottomMessage", {
+         this.GA("showBottomMessage", {
```

#### 455. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4311` → after: `L4494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4494) · [Before (L4311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4311)

```diff
-         !this.zoomUnshown || CC && this.zoomHeld || (this.zoomUnshown = !1, this.bp("cameraZoomSet", this.zoom)), this.zoomHeld = CC
+         !this.zoomUnshown || pp && this.zoomHeld || (this.zoomUnshown = !1, this.GA("cameraZoomSet", this.zoom)), this.zoomHeld = pp
```

#### 456. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4316-L4320` → after: `L4499-L4503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4499-L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4499-L4503) · [Before (L4316-L4320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4316-L4320)

```diff
-             UC: zC,
-             BC: ZC
-           } = (0, PQ.e)(GQ.v, CC);
-           nC.o.bp("damagedByOtherPlayer", {
-             UC: zC,
+             Ec: ip,
+             Xc: cp
+           } = (0, dO.b)(eO.w, pp);
+           Sp.m.GA("damagedByOtherPlayer", {
+             Ec: ip,
```

#### 457. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4341` → after: `L4524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4524) · [Before (L4341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4341)

```diff
-                   mode: gC.ue.All,
+                   mode: yp.Wd.All,
```

#### 458. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4345-L4346` → after: `L4528-L4529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4528-L4529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4528-L4529) · [Before (L4345-L4346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4345-L4346)

```diff
-               } return QC ? ZC.size > gC._c ? {
-               mode: gC.ue.All,
+               } return Op ? cp.size > yp.Ec ? {
+               mode: yp.Wd.All,
```

#### 459. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4349` → after: `L4532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4532) · [Before (L4349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4349)

```diff
-               mode: gC.ue.Filter,
+               mode: yp.Wd.Filter,
```

#### 460. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4352` → after: `L4535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4535) · [Before (L4352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4352)

```diff
-               mode: gC.ue.Off,
+               mode: yp.Wd.Off,
```

#### 461. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4358` → after: `L4541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4541) · [Before (L4358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4358)

```diff
-             mode: gC.ue.All,
+             mode: yp.Wd.All,
```

#### 462. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4362` → after: `L4545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4545) · [Before (L4362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4362)

```diff
-         if (ZC.mode === gC.ue.Off && !this.vetoSet) return;
+         if (cp.mode === yp.Wd.Off && !this.vetoSet) return;
```

#### 463. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4364` → after: `L4547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4547) · [Before (L4364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4364)

```diff
-         (0, gC.Wf)(zC, 0, ZC.mode, ZC.roots.length, QC) ? this.vetoSet = ZC.mode !== gC.ue.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
+         (0, yp.Ff)(ip, 0, cp.mode, cp.roots.length, Op) ? this.vetoSet = cp.mode !== yp.Wd.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
```

#### 464. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4377` → after: `L4560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4560) · [Before (L4377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4377)

```diff
-           for (const ZC of CC) ZC.onPlayerAltAction && (zC |= 1 << gC.rc.AltAction), (ZC.onPlayerClick || ZC.onPlayerClickUp || ZC.onPlayerAttackEntity) && (zC |= 1 << gC.rc.Click), ZC.onPlayerChangeBlock && (zC |= 1 << gC.rc.ChangeBlock), ZC.onPlayerDropItem && (zC |= 1 << gC.rc … [truncated]
+           for (const cp of pp) cp.onPlayerAltAction && (ip |= 1 << yp.Zb.AltAction), (cp.onPlayerClick || cp.onPlayerClickUp || cp.onPlayerAttackEntity) && (ip |= 1 << yp.Zb.Click), cp.onPlayerChangeBlock && (ip |= 1 << yp.Zb.ChangeBlock), cp.onPlayerDropItem && (ip |= 1 << yp.Zb … [truncated]
```

#### 465. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4380` → after: `L4563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4563) · [Before (L4380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4380)

```diff
-         (0 !== ZC || this.hooksSet) && ((0, gC.fg)(zC, 0, ZC) ? this.hooksSet = 0 !== ZC : this.onError(new Error("SetHooks didn't fit the command ring")))
+         (0 !== cp || this.hooksSet) && ((0, yp.Tf)(ip, 0, cp) ? this.hooksSet = 0 !== cp : this.onError(new Error("SetHooks didn't fit the command ring")))
```

#### 466. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4389` → after: `L4572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4572) · [Before (L4389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4389)

```diff
-         zC !== this.promptWatchSent && CC && !this.stopped() && (0, gC.Eg)(CC, 0, EQ[zC]) && (this.promptWatchSent = zC)
+         ip !== this.promptWatchSent && pp && !this.stopped() && (0, yp.lg)(pp, 0, TO[ip]) && (this.promptWatchSent = ip)
```

#### 467. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4393` → after: `L4576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4576) · [Before (L4393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4393)

```diff
-         zC && CC !== this.writtenPublicLobby && ((0, gC.sg)(zC, 0, CC ? 1 : 0) ? this.writtenPublicLobby = CC : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
+         ip && pp !== this.writtenPublicLobby && ((0, yp.ag)(ip, 0, pp ? 1 : 0) ? this.writtenPublicLobby = pp : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
```

#### 468. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4397` → after: `L4580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4580) · [Before (L4397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4397)

```diff
-         zC && ((0, gC.hg)(zC, 0, null === CC ? 0 : 1, null === CC ? mQ : dQ.encode(CC)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
+         ip && ((0, yp.Xf)(ip, 0, null === pp ? 0 : 1, null === pp ? BO : JO.encode(pp)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
```

#### 469. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4407` → after: `L4590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4590) · [Before (L4407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4407)

```diff
-             this.Cg(ZC)
+             this.Yy(cp)
```

#### 470. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4413` → after: `L4596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4596) · [Before (L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4413)

```diff
-           nC.o.bp(CC, zC)
+           Sp.m.GA(pp, ip)
```

#### 471. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4420` → after: `L4603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4603) · [Before (L4420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4420)

```diff
-           this.Cg(CC)
+           this.Yy(pp)
```

#### 472. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4427` → after: `L4610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4610) · [Before (L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4427)

```diff
-           this.Cg(CC)
+           this.Yy(pp)
```

#### 473. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4462` → after: `L4645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4645) · [Before (L4462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4462)

```diff
-         void 0 !== zC && this.Cg(zC)
+         void 0 !== ip && this.Yy(ip)
```

#### 474. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4472` → after: `L4655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4655) · [Before (L4472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4472)

```diff
-             ZC ? this.onError(wC) : this.Cg(wC)
+             cp ? this.onError(op) : this.Yy(op)
```

#### 475. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4480` → after: `L4663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4663) · [Before (L4480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4480)

```diff
-           this.Cg(zC)
+           this.Yy(ip)
```

#### 476. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4486` → after: `L4669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4669) · [Before (L4486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4486)

```diff
-       return CC === gC.od ? null : String(CC)
+       return pp === yp.Jc ? null : String(pp)
```

#### 477. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4490` → after: `L4673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4673) · [Before (L4490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4490)

```diff
-       CC.ZN(NC.td)
+       pp.LP(Pp.wd)
```

#### 478. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4514-L4517` → after: `L4697-L4700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4697-L4700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4697-L4700) · [Before (L4514-L4517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4514-L4517)

```diff
-     var sQ = ZC(36318),
-       TQ = ZC(4797),
-       aQ = ZC(36641),
-       tQ = ZC(36659);
+     var FO = cp(36654),
+       gO = cp(4974),
+       GO = cp(36948),
+       rO = cp(36980);
```

#### 479. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4521` → after: `L4704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4704) · [Before (L4521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4521)

```diff
-           ...(0, aQ.j)(CC),
+           ...(0, GO.e)(pp),
```

#### 480. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4526` → after: `L4709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4709) · [Before (L4526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4526)

```diff
-       return zC.load = () => (zC._preload = !0, (0, tQ.d)(CC), ZC()), zC
+       return ip.load = () => (ip._preload = !0, (0, rO.b)(pp), cp()), ip
```

#### 481. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4554-L4555` → after: `L4737-L4738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4737-L4738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4737-L4738) · [Before (L4554-L4555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4554-L4555)

```diff
-     var UQ = ZC(36451),
-       BQ = ZC(39042);
+     var VO = cp(36764),
+       po = cp(39391);
```

#### 482. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4564` → after: `L4747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4747) · [Before (L4564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4564)

```diff
-       return kQ ??= new BQ.e(new UQ.d(VQ)), kQ
+       return co ??= new po.e(new VO.c(Oo)), co
```

#### 483. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4573` → after: `L4756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4756) · [Before (L4573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4573)

```diff
-       QC.b.get("scriptedCameraFacing") !== CC && QC.b.set({
+       Op.c.get("scriptedCameraFacing") !== pp && Op.c.set({
```

#### 484. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4577-L4582` → after: `L4760-L4765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4760-L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4760-L4765) · [Before (L4577-L4582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4577-L4582)

```diff
-     var Qw = ZC(9299),
-       ww = ZC(9239),
-       bw = ZC(39076),
-       nw = ZC(40866),
-       fw = ZC(3276);
-     const ow = Object.entries(gC.oc).reduce(((CC, zC) => {
+     var xo = cp(9436),
+       Lo = cp(9385),
+       Yo = cp(39425),
+       Do = cp(41251),
+       Ao = cp(3400);
+     const Po = Object.entries(yp.Xb).reduce(((pp, ip) => {
```

#### 485. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4589` → after: `L4772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4772) · [Before (L4589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4589)

```diff
-       return 0 !== ((null !== (ZC = CC.itemFlags[zC]) && void 0 !== ZC ? ZC : 0) & gC.Rc.Stackable)
+       return 0 !== ((null !== (cp = pp.itemFlags[ip]) && void 0 !== cp ? cp : 0) & yp.vc.Stackable)
```

#### 486. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4603` → after: `L4786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4786) · [Before (L4603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4603)

```diff
-           return ZC === gC.Wc ? void 0 : ZC
+           return cp === yp.Ac ? void 0 : cp
```

#### 487. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4607` → after: `L4790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4790) · [Before (L4607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4607)

```diff
-           const QC = null !== (ZC = CC.itemHarvests[zC]) && void 0 !== ZC ? ZC : 0;
+           const Op = null !== (cp = pp.itemHarvests[ip]) && void 0 !== cp ? cp : 0;
```

#### 488. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4612-L4613` → after: `L4795-L4796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4795-L4796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4795-L4796) · [Before (L4612-L4613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4612-L4613)

```diff
-           const wC = null !== (ZC = CC.itemLevels[zC]) && void 0 !== ZC ? ZC : gC.Wc;
-           return wC !== gC.Wc ? wC : null !== (QC = (0, ZQ.harvestsNullLevelOf)(zC)) && void 0 !== QC ? QC : void 0
+           const op = null !== (cp = pp.itemLevels[ip]) && void 0 !== cp ? cp : yp.Ac;
+           return op !== yp.Ac ? op : null !== (Op = (0, IO.harvestsNullLevelOf)(ip)) && void 0 !== Op ? Op : void 0
```

#### 489. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4634` → after: `L4817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4817) · [Before (L4634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4634)

```diff
-           if (void 0 === zC) throw new Error(`No item is named ${CC}, an item's root`);
+           if (void 0 === ip) throw new Error(`No item is named ${pp}, an item's root`);
```

#### 490. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4645-L4652` → after: `L4828-L4835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4828-L4835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4828-L4835) · [Before (L4645-L4652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4645-L4652)

```diff
-           blockFlags: Nw(wC, gC.H.BYTES, gC.H.flags),
-           blockHarvestTypes: Nw(wC, gC.H.BYTES, gC.H.harvestType),
-           blockHarvestLevels: Nw(wC, gC.H.BYTES, gC.H.harvestLevel),
-           blockAttachedTops: Mw(wC, gC.H.BYTES, gC.H.attachedTop),
-           itemFlags: Nw(bC, gC.Uc.BYTES, gC.Uc.flags),
-           itemHarvests: Nw(bC, gC.Uc.BYTES, gC.Uc.harvests),
-           itemLevels: Nw(bC, gC.Uc.BYTES, gC.Uc.level)
-         }, (0, fw.g)(Object.freeze(QC)), (0, nw.g)()
+           blockFlags: wo(op, yp.u.BYTES, yp.u.flags),
+           blockHarvestTypes: wo(op, yp.u.BYTES, yp.u.harvestType),
+           blockHarvestLevels: wo(op, yp.u.BYTES, yp.u.harvestLevel),
+           blockAttachedTops: vo(op, yp.u.BYTES, yp.u.attachedTop),
+           itemFlags: wo(Ip, yp.xc.BYTES, yp.xc.flags),
+           itemHarvests: wo(Ip, yp.xc.BYTES, yp.xc.harvests),
+           itemLevels: wo(Ip, yp.xc.BYTES, yp.xc.level)
+         }, (0, Ao.k)(Object.freeze(Op)), (0, Do.f)()
```

#### 491. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4655-L4657` → after: `L4838-L4840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4838-L4840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4838-L4840) · [Before (L4655-L4657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4655-L4657)

```diff
-         if ("number" === typeof CC) return void 0 === (0, fw.c)(CC) ? void 0 : CC;
-         const zC = (0, fw.b)(CC);
-         return void 0 === zC && Fw.test(CC) ? void 0 === (0, fw.c)(+CC) ? void 0 : +CC : zC
+         if ("number" === typeof pp) return void 0 === (0, Ao.d)(pp) ? void 0 : pp;
+         const ip = (0, Ao.c)(pp);
+         return void 0 === ip && yo.test(pp) ? void 0 === (0, Ao.d)(+pp) ? void 0 : +pp : ip
```

#### 492. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4660` → after: `L4843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4843) · [Before (L4660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4660)

```diff
-         if (!CC || CC === Qw.b) return Qw.d;
+         if (!pp || pp === xo.d) return xo.h;
```

#### 493. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4662` → after: `L4845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4845) · [Before (L4662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4662)

```diff
-         if (void 0 === zC) throw new Error(`Item ${CC} not found in registry`);
+         if (void 0 === ip) throw new Error(`Item ${pp} not found in registry`);
```

#### 494. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4666` → after: `L4849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4849) · [Before (L4666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4666)

```diff
-         return 0 !== CC && void 0 !== (0, fw.c)(CC) ? this.metaOf(CC).rootId : CC
+         return 0 !== pp && void 0 !== (0, Ao.d)(pp) ? this.metaOf(pp).rootId : pp
```

#### 495. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4669` → after: `L4852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4852) · [Before (L4669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4669)

```diff
-         return this.metas[CC] ??= (0, ww.k)((0, fw.c)(CC), CC, this.rootIdOf, (0, ZQ.rootMetaDescOf)(CC))
+         return this.metas[pp] ??= (0, Lo.l)((0, Ao.d)(pp), pp, this.rootIdOf, (0, IO.rootMetaDescOf)(pp))
```

#### 496. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4672` → after: `L4855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4855) · [Before (L4672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4672)

```diff
-         if (!CC || CC === Qw.b) return 0;
+         if (!pp || pp === xo.d) return 0;
```

#### 497. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4674` → after: `L4857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4857) · [Before (L4674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4674)

```diff
-         if (void 0 === zC) throw new Error(`Invalid block name. You sent ${CC}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
+         if (void 0 === ip) throw new Error(`Invalid block name. You sent ${pp}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
```

#### 498. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4678` → after: `L4861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4861) · [Before (L4678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4678)

```diff
-         if (!CC || CC === Qw.b) return Qw.b;
+         if (!pp || pp === xo.d) return xo.d;
```

#### 499. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4680-L4681` → after: `L4863-L4864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4863-L4864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4863-L4864) · [Before (L4680-L4681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4680-L4681)

```diff
-         if (void 0 === zC) throw new Error(`Item ${CC} not found in registry`);
-         return (0, fw.c)(zC)
+         if (void 0 === ip) throw new Error(`Item ${pp} not found in registry`);
+         return (0, Ao.d)(ip)
```

#### 500. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4685` → after: `L4868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4868) · [Before (L4685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4685)

```diff
-         if (CC === Qw.b) return 0;
+         if (pp === xo.d) return 0;
```

#### 501. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4689-L4690` → after: `L4872-L4873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4872-L4873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4872-L4873) · [Before (L4689-L4690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4689-L4690)

```diff
-             QC = zC > 0 ? (0, fw.b)(CC.slice(0, zC)) : void 0;
-           ZC = void 0 !== QC && this.isBlockId(QC) && (0, ZQ.rootMetaDescOf)(QC) === CC ? QC : void 0
+             Op = ip > 0 ? (0, Ao.c)(pp.slice(0, ip)) : void 0;
+           cp = void 0 !== Op && this.isBlockId(Op) && (0, IO.rootMetaDescOf)(Op) === pp ? Op : void 0
```

#### 502. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4693` → after: `L4876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4876) · [Before (L4693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4693)

```diff
-         if (!zC) throw new Error(`Invalid block name. You sent ${CC}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
+         if (!ip) throw new Error(`Invalid block name. You sent ${pp}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
```

#### 503. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4700` → after: `L4883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4883) · [Before (L4700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4700)

```diff
-         return 0 !== CC && (0, fw.c)(CC) || Qw.b
+         return 0 !== pp && (0, Ao.d)(pp) || xo.d
```

#### 504. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4708` → after: `L4891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4891) · [Before (L4708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4708)

```diff
-           name: (0, fw.c)(zC),
+           name: (0, Ao.d)(ip),
```

#### 505. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4718` → after: `L4901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4901) · [Before (L4718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4718)

```diff
-         if (bw.c.has(zC)) {
+         if (Yo.b.has(ip)) {
```

#### 506. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4734-L4735` → after: `L4917-L4918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4917-L4918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4917-L4918) · [Before (L4734-L4735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4734-L4735)

```diff
-           throw new Error(`ClientApi.${CC} is not available yet in the wasm client (${zC})`)
-         }(`getItemStat("${CC}")`, `a table of the stat: the wasm client answers ${Object.keys(Ww).join(", ")}`), zC
+           throw new Error(`ClientApi.${pp} is not available yet in the wasm client (${ip})`)
+         }(`getItemStat("${pp}")`, `a table of the stat: the wasm client answers ${Object.keys(Uo).join(", ")}`), ip
```

#### 507. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4740` → after: `L4923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4923) · [Before (L4740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4740)

```diff
-         return null !== wC && void 0 !== wC || "displayName" !== zC ? wC : this.getItemName(CC)
+         return null !== op && void 0 !== op || "displayName" !== ip ? op : this.getItemName(pp)
```

#### 508. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4746` → after: `L4929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4929) · [Before (L4746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4746)

```diff
-         return this.getClientOption(`${CC}GunStats`)
+         return this.getClientOption(`${pp}GunStats`)
```

#### 509. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4753` → after: `L4936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4936) · [Before (L4753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4753)

```diff
-         return 0 !== ((null !== (zC = this.props.blockFlags[CC]) && void 0 !== zC ? zC : 0) & gC.D.Solid)
+         return 0 !== ((null !== (ip = this.props.blockFlags[pp]) && void 0 !== ip ? ip : 0) & yp.s.Solid)
```

#### 510. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4760` → after: `L4943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4943) · [Before (L4760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4760)

```diff
-         return 0 !== ((null !== (zC = this.props.blockFlags[CC]) && void 0 !== zC ? zC : 0) & gC.D.Fluid)
+         return 0 !== ((null !== (ip = this.props.blockFlags[pp]) && void 0 !== ip ? ip : 0) & yp.s.Fluid)
```

#### 511. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4764` → after: `L4947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4947) · [Before (L4764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4764)

```diff
-         return 0 !== ((null !== (zC = this.props.blockFlags[CC]) && void 0 !== zC ? zC : 0) & gC.D.PlaceOver)
+         return 0 !== ((null !== (ip = this.props.blockFlags[pp]) && void 0 !== ip ? ip : 0) & yp.s.PlaceOver)
```

#### 512. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4768` → after: `L4951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4951) · [Before (L4768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4768)

```diff
-         return null !== (zC = this.props.blockAttachedTops[CC]) && void 0 !== zC ? zC : 0
+         return null !== (ip = this.props.blockAttachedTops[pp]) && void 0 !== ip ? ip : 0
```

#### 513. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4785-L4787` → after: `L4968-L4970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4968-L4970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4968-L4970) · [Before (L4785-L4787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4785-L4787)

```diff
-               for (let CC = 0; CC + gC.me.BYTES <= bC; CC += gC.me.BYTES) fC.push(Object.freeze({
-                 item: zC.nameOfId(gC.me.item(nC, CC)),
-                 amt: gC.me.amount(nC, CC)
+               for (let pp = 0; pp + yp.Id.BYTES <= Ip; pp += yp.Id.BYTES) xp.push(Object.freeze({
+                 item: ip.nameOfId(yp.Id.item(Sp, pp)),
+                 amt: yp.Id.amount(Sp, pp)
```

#### 514. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4807-L4813` → after: `L4990-L4996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4990-L4996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4990-L4996) · [Before (L4807-L4813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4807-L4813)

```diff
-     var Pw = ZC(40590),
-       Gw = ZC(36820),
-       Rw = ZC(36802),
-       Aw = ZC(36811),
-       xw = ZC(36375),
-       Jw = ZC(40518),
-       Iw = ZC(42382);
+     var uo = cp(40967),
+       jo = cp(37169),
+       ko = cp(37151),
+       mo = cp(37156),
+       Ro = cp(36693),
+       qo = cp(40879),
+       Mo = cp(42875);
```

#### 515. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4821` → after: `L5004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5004) · [Before (L4821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4821)

```diff
-       return zC.byteLength < NC.Ec ? zC : zC.subarray(0, NC.Ec - 1)
+       return ip.byteLength < Pp.Dc ? ip : ip.subarray(0, Pp.Dc - 1)
```

#### 516. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4829` → after: `L5012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5012) · [Before (L4829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4829)

```diff
-         this.keyframesVersion = iw, this.reloadFrom = null !== (CC = null === (zC = this.view()) || void 0 === zC ? void 0 : zC.version) && void 0 !== CC ? CC : iw
+         this.keyframesVersion = Co, this.reloadFrom = null !== (pp = null === (ip = this.view()) || void 0 === ip ? void 0 : ip.version) && void 0 !== pp ? pp : Co
```

#### 517. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4832` → after: `L5015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5015) · [Before (L4832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4832)

```diff
-         const zC = 1 === this.deps.core.iwC(CC);
+         const ip = 1 === this.deps.core.wIp(pp);
```

#### 518. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4853` → after: `L5036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5036) · [Before (L4853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4853)

```diff
-         this.deps.replay.setCameraMode(Iw.e.indexOf(CC))
+         this.deps.replay.setCameraMode(Mo.b.indexOf(pp))
```

#### 519. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4857` → after: `L5040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5040) · [Before (L4857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4857)

```diff
-         const zC = gC.w.replayViewPtr(this.deps.apiView(), 0);
+         const ip = yp.q.replayViewPtr(this.deps.apiView(), 0);
```

#### 520. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4859-L4860` → after: `L5042-L5043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5042-L5043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5042-L5043) · [Before (L4859-L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4859-L4860)

```diff
-         const ZC = new DataView(this.deps.buffer(), zC, gC.he.BYTES),
-           QC = gC.he.version(ZC, 0),
+         const cp = new DataView(this.deps.buffer(), ip, yp.Cd.BYTES),
+           Op = yp.Cd.version(cp, 0),
```

#### 521. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4863` → after: `L5046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5046) · [Before (L4863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4863)

```diff
-         const bC = gC.he.markIn(ZC, 0),
+         const Ip = yp.Cd.markIn(cp, 0),
```

#### 522. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4866-L4871` → after: `L5049-L5054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5049-L5054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5049-L5054) · [Before (L4866-L4871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4866-L4871)

```diff
-             state: gC.he.state(ZC, 0),
-             cameraMode: null !== (CC = Iw.e[gC.he.cameraMode(ZC, 0)]) && void 0 !== CC ? CC : "recording",
-             ZN: gC.he.ZN(ZC, 0),
-             totalTicks: gC.he.totalTicks(ZC, 0),
-             speed: gC.he.speed(ZC, 0),
-             mark: bC === gC.ge ? null : {
+             state: yp.Cd.state(cp, 0),
+             cameraMode: null !== (pp = Mo.b[yp.Cd.cameraMode(cp, 0)]) && void 0 !== pp ? pp : "recording",
+             LP: yp.Cd.LP(cp, 0),
+             totalTicks: yp.Cd.totalTicks(cp, 0),
+             speed: yp.Cd.speed(cp, 0),
+             mark: Ip === yp.Bd ? null : {
```

#### 523. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4873` → after: `L5056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5056) · [Before (L4873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4873)

```diff
-               outTick: gC.he.markOut(ZC, 0)
+               outTick: yp.Cd.markOut(cp, 0)
```

#### 524. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4875` → after: `L5058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5058) · [Before (L4875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4875)

```diff
-             editVersion: gC.he.editVersion(ZC, 0)
+             editVersion: yp.Cd.editVersion(cp, 0)
```

#### 525. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4883` → after: `L5066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5066) · [Before (L4883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4883)

```diff
-         const zC = this.reloadFrom === iw && CC.state !== NC.id.Cropping && CC.state !== NC.id.None,
+         const ip = this.reloadFrom === Co && pp.state !== Pp.jd.Cropping && pp.state !== Pp.jd.None,
```

#### 526. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4888` → after: `L5071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5071) · [Before (L4888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4888)

```diff
-         } = this.deps, wC = QC.vwC(), bC = QC.Xp(), nC = [];
+         } = this.deps, op = Op.vIp(), Ip = Op.gw(), Sp = [];
```

#### 527. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4890` → after: `L5073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5073) · [Before (L4890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4890)

```diff
-           const CC = new DataView(this.deps.buffer(), bC, wC * NC.sc);
+           const pp = new DataView(this.deps.buffer(), Ip, op * Pp.uc);
```

#### 528. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4892` → after: `L5075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5075) · [Before (L4892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4892)

```diff
-             const ZC = zC * NC.sc,
+             const cp = ip * Pp.uc,
```

#### 529. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4895` → after: `L5078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5078) · [Before (L4895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4895)

```diff
-               ZN: CC.getUint32(ZC + NC.Bc, !0),
+               LP: pp.getUint32(cp + Pp.Bc, !0),
```

#### 530. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4897-L4898` → after: `L5080-L5081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5080-L5081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5080-L5081) · [Before (L4897-L4898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4897-L4898)

```diff
-               direction: [QC(NC.wc), QC(NC.wc + 8), QC(NC.wc + 16)],
-               easing: [QC(NC.yc), QC(NC.yc + 8), QC(NC.yc + 16), QC(NC.yc + 24)]
+               direction: [Op(Pp.vc), Op(Pp.vc + 8), Op(Pp.vc + 16)],
+               easing: [Op(Pp.wc), Op(Pp.wc + 8), Op(Pp.wc + 16), Op(Pp.wc + 24)]
```

#### 531. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4906` → after: `L5089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5089) · [Before (L4906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4906)

```diff
-           zC = [gC.w.eye(CC, 0, 0), gC.w.eye(CC, 0, 1), gC.w.eye(CC, 0, 2)];
+           ip = [yp.q.eye(pp, 0, 0), yp.q.eye(pp, 0, 1), yp.q.eye(pp, 0, 2)];
```

#### 532. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4910` → after: `L5093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5093) · [Before (L4910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4910)

```diff
-         }(gC.w.heading(CC, 0), gC.w.pitch(CC, 0)))
+         }(yp.q.heading(pp, 0), yp.q.pitch(pp, 0)))
```

#### 533. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4913` → after: `L5096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5096) · [Before (L4913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4913)

```diff
-         return this.deps.replay.setKeyframe(CC.ZN, Float64Array.from([...CC.position, ...CC.direction, ...CC.easing]))
+         return this.deps.replay.setKeyframe(pp.LP, Float64Array.from([...pp.position, ...pp.direction, ...pp.easing]))
```

#### 534. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4923` → after: `L5106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5106) · [Before (L4923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4923)

```diff
-         return this.deps.replay.setMark(null !== (zC = null === CC || void 0 === CC ? void 0 : CC.inTick) && void 0 !== zC ? zC : -1, null !== (ZC = null === CC || void 0 === CC ? void 0 : CC.outTick) && void 0 !== ZC ? ZC : -1)
+         return this.deps.replay.setMark(null !== (ip = null === pp || void 0 === pp ? void 0 : pp.inTick) && void 0 !== ip ? ip : -1, null !== (cp = null === pp || void 0 === pp ? void 0 : pp.outTick) && void 0 !== cp ? cp : -1)
```

#### 535. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4940` → after: `L5123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5123) · [Before (L4940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4940)

```diff
-         return null !== ZC && (0, gC.Mf)(ZC, 0, CC, null === zC ? vw : ew.encode(zC))
+         return null !== cp && (0, yp.uf)(cp, 0, pp, null === ip ? Eo : Xo.encode(ip))
```

#### 536. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4945` → after: `L5128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5128) · [Before (L4945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4945)

```diff
-         return null !== wC && (0, gC.Kf)(wC, 0, zC, ZC, bC, ew.encode(CC))
+         return null !== op && (0, yp.pf)(op, 0, ip, cp, Ip, Xo.encode(pp))
```

#### 537. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4949` → after: `L5132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5132) · [Before (L4949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4949)

```diff
-         return null !== wC && (0, gC.Of)(wC, 0, CC, zC, Math.max(0, ZC), ew.encode(QC))
+         return null !== op && (0, yp.wf)(op, 0, pp, ip, Math.max(0, cp), Xo.encode(Op))
```

#### 538. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4957` → after: `L5140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5140) · [Before (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4957)

```diff
-                 return CC + yZ.Ob + (null !== (ZC = null === zC || void 0 === zC ? void 0 : zC.byteLength) && void 0 !== ZC ? ZC : 0)
+                 return pp + zc.lb + (null !== (cp = null === ip || void 0 === ip ? void 0 : ip.byteLength) && void 0 !== cp ? cp : 0)
```

#### 539. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4964` → after: `L5147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5147) · [Before (L4964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4964)

```diff
-               QC.setUint16(wC, null !== (bC = null === nC || void 0 === nC ? void 0 : nC.byteLength) && void 0 !== bC ? bC : NC.Ec, !0), wC += yZ.Ob, null !== nC && (ZC.set(nC, wC), wC += nC.byteLength)
+               Op.setUint16(op, null !== (Ip = null === Sp || void 0 === Sp ? void 0 : Sp.byteLength) && void 0 !== Ip ? Ip : Pp.Dc, !0), op += zc.lb, null !== Sp && (cp.set(Sp, op), op += Sp.byteLength)
```

#### 540. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4968` → after: `L5151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5151) · [Before (L4968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4968)

```diff
-         return null !== bC && (0, gC.Lf)(bC, 0, null !== (QC = CC.id) && void 0 !== QC ? QC : gC.qd, null !== (wC = zC.id) && void 0 !== wC ? wC : gC.qd, nC)
+         return null !== Ip && (0, yp.rf)(Ip, 0, null !== (Op = pp.id) && void 0 !== Op ? Op : yp.Nc, null !== (op = ip.id) && void 0 !== op ? op : yp.Nc, Sp)
```

#### 541. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4979` → after: `L5162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5162) · [Before (L4979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4979)

```diff
-         this.deps.core.ewC()
+         this.deps.core.tIp()
```

#### 542. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4997` → after: `L5180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5180) · [Before (L4997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4997)

```diff
-         }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (zC = CC.now) && void 0 !== zC ? zC : () => performance.now()
+         }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (ip = pp.now) && void 0 !== ip ? ip : () => performance.now()
```

#### 543. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5008` → after: `L5191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5191) · [Before (L5008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5008)

```diff
-         this.live && (this.viewerShown(!0 === (null === (zC = (ZC = this.deps).viewerOpen) || void 0 === zC ? void 0 : zC.call(ZC))), this.deps.client.recorderSession(CC, (0, Iw.i)()))
+         this.live && (this.viewerShown(!0 === (null === (ip = (cp = this.deps).viewerOpen) || void 0 === ip ? void 0 : ip.call(cp))), this.deps.client.recorderSession(pp, (0, Mo.e)()))
```

#### 544. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5015` → after: `L5198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5198) · [Before (L5015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5015)

```diff
-         this.live && (this.state.recording || !0 !== (null === (CC = (zC = this.deps).viewerOpen) || void 0 === CC ? void 0 : CC.call(zC))) ? this.deps.client.recorderControl(NC.Tc.ToggleRecording) : this.deps.notify(Aw.c.closeViewerFirst)
+         this.live && (this.state.recording || !0 !== (null === (pp = (ip = this.deps).viewerOpen) || void 0 === pp ? void 0 : pp.call(ip))) ? this.deps.client.recorderControl(Pp.Uc.ToggleRecording) : this.deps.notify(mo.c.closeViewerFirst)
```

#### 545. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5018` → after: `L5201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5201) · [Before (L5018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5018)

```diff
-         this.live ? this.deps.client.recorderControl(NC.Tc.SaveClip) : this.deps.notify(Aw.c.clippingNotOn)
+         this.live ? this.deps.client.recorderControl(Pp.Uc.SaveClip) : this.deps.notify(mo.c.clippingNotOn)
```

#### 546. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5021` → after: `L5204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5204) · [Before (L5021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5021)

```diff
-         this.live && this.deps.client.recorderControl(CC ? NC.Tc.ViewerOpened : NC.Tc.ViewerClosed)
+         this.live && this.deps.client.recorderControl(pp ? Pp.Uc.ViewerOpened : Pp.Uc.ViewerClosed)
```

#### 547. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5142` → after: `L5325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5325) · [Before (L5142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5142)

```diff
-         if (zC + yZ.Ob > ZC) return null;
+         if (ip + zc.lb > cp) return null;
```

#### 548. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5144` → after: `L5327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5327) · [Before (L5144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5144)

```diff
-         if (zC += yZ.Ob, QC !== NC.Ec) {
+         if (ip += zc.lb, Op !== Pp.Dc) {
```

#### 549. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5149` → after: `L5332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5332) · [Before (L5149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5149)

```diff
-       return zC === ZC ? wC : null
+       return ip === cp ? op : null
```

#### 550. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5166` → after: `L5349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5349) · [Before (L5166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5166)

```diff
-               case NC.ed.Cleared:
+               case Pp.dd.Cleared:
```

#### 551. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5168` → after: `L5351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5351) · [Before (L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5168)

```diff
-               case NC.ed.Text:
+               case Pp.dd.Text:
```

#### 552. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5170` → after: `L5353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5353) · [Before (L5170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5170)

```diff
-               case NC.ed.Int:
+               case Pp.dd.Int:
```

#### 553. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5172` → after: `L5355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5355) · [Before (L5172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5172)

```diff
-               case NC.ed.Double:
+               case Pp.dd.Double:
```

#### 554. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5187` → after: `L5370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5370) · [Before (L5187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5187)

```diff
-               case NC.fd.FlyingText: {
+               case Pp.gd.FlyingText: {
```

#### 555. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5191-L5192` → after: `L5374-L5375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5374-L5375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5374-L5375) · [Before (L5191-L5192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5191-L5192)

```diff
-                   Ib: ZC,
-                   Jb: QC,
+                   cS: cp,
+                   iS: Op,
```

#### 556. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5197` → after: `L5380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5380) · [Before (L5197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5197)

```diff
-               case NC.fd.PlayerKilled: {
+               case Pp.gd.PlayerKilled: {
```

#### 557. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5207` → after: `L5390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5390) · [Before (L5207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5207)

```diff
-               case NC.fd.Killfeed: {
+               case Pp.gd.Killfeed: {
```

#### 558. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5249` → after: `L5432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5432) · [Before (L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5249)

```diff
-       return (CC, zC, bC, nC) => !(CC < NC.ab.ReplayFailed || CC > NC.ab.RecorderEvent) && (ZC = zC, QC = !0, (0, gC.xe)(CC, zC, bC, nC, wC) && QC)
+       return (pp, ip, Ip, Sp) => !(pp < Pp.bb.ReplayFailed || pp > Pp.bb.RecorderEvent) && (cp = ip, Op = !0, (0, yp.$d)(pp, ip, Ip, Sp, op) && Op)
```

#### 559. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5265` → after: `L5448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5448) · [Before (L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5265)

```diff
-               if (wC + NC.$ > ZC.byteLength) throw new Error(`the recorder module's events end mid-head at ${wC}`);
+               if (op + Pp.$ > cp.byteLength) throw new Error(`the recorder module's events end mid-head at ${op}`);
```

#### 560. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5270-L5271` → after: `L5453-L5454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5453-L5454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5453-L5454) · [Before (L5270-L5271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5270-L5271)

```diff
-               if (fC + nC > ZC.byteLength || !zC(bC, QC, fC, nC)) throw new Error(`the recorder module wrote a malformed event ${bC} (${nC} bytes) at ${wC}`);
-               wC = fC + (0, NC.pe)(nC)
+               if (xp + Sp > cp.byteLength || !ip(Ip, Op, xp, Sp)) throw new Error(`the recorder module wrote a malformed event ${Ip} (${Sp} bytes) at ${op}`);
+               op = xp + (0, Pp.ue)(Sp)
```

#### 561. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5289` → after: `L5472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5472) · [Before (L5289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5289)

```diff
-         const ZC = null !== (zC = this.parts.get(CC.save)) && void 0 !== zC ? zC : [];
+         const cp = null !== (ip = this.parts.get(pp.save)) && void 0 !== ip ? ip : [];
```

#### 562. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5313` → after: `L5496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5496) · [Before (L5313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5313)

```diff
-       return ZC.e(60).then((() => ZC(60273)))
+       return cp.e(61).then((() => cp(60725)))
```

#### 563. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5399` → after: `L5582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5582) · [Before (L5399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5399)

```diff
-         return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (CC = this.deps.loadViewer) && void 0 !== CC ? CC : uw)().catch((CC => {
+         return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (pp = this.deps.loadViewer) && void 0 !== pp ? pp : no)().catch((pp => {
```

#### 564. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5417` → after: `L5600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5600) · [Before (L5417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5417)

```diff
-           CC > 0 && this.recorder.ZN()
+           pp > 0 && this.recorder.LP()
```

#### 565. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5432-L5435` → after: `L5615-L5618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5615-L5618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5615-L5618) · [Before (L5432-L5435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5432-L5435)

```diff
-     var sw = ZC(40449),
-       Tw = ZC(40470),
-       aw = ZC(4739),
-       tw = ZC(40750);
+     var go = cp(40818),
+       Go = cp(40837),
+       ro = cp(4919),
+       Zo = cp(41120);
```

#### 566. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5442` → after: `L5625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5625) · [Before (L5442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5442)

```diff
-         const ZC = (0, cC.q)(0, performance.now()),
+         const cp = (0, Tp.v)(0, performance.now()),
```

#### 567. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5444-L5445` → after: `L5627-L5628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5627-L5628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5627-L5628) · [Before (L5444-L5445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5444-L5445)

```diff
-         (0, tw.h)((() => {
-           (0, cC.s)(NC.wb.MouseDown, 0, 0, 0, ZC), (0, cC.s)(NC.wb.MouseMove, 0, CC * QC, zC * QC, 0), (0, cC.s)(NC.wb.MouseUp, 0, 0, 0, ZC)
+         (0, Zo.g)((() => {
+           (0, Tp.A)(Pp.wb.MouseDown, 0, 0, 0, cp), (0, Tp.A)(Pp.wb.MouseMove, 0, pp * Op, ip * Op, 0), (0, Tp.A)(Pp.wb.MouseUp, 0, 0, 0, cp)
```

#### 568. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5450` → after: `L5633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5633) · [Before (L5450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5450)

```diff
-         this.analogue[0] = null !== (zC = null === CC || void 0 === CC ? void 0 : CC.x) && void 0 !== zC ? zC : 0, this.analogue[1] = null !== (ZC = null === CC || void 0 === CC ? void 0 : CC.y) && void 0 !== ZC ? ZC : 0, this.send()
+         this.analogue[0] = null !== (ip = null === pp || void 0 === pp ? void 0 : pp.x) && void 0 !== ip ? ip : 0, this.analogue[1] = null !== (cp = null === pp || void 0 === pp ? void 0 : pp.y) && void 0 !== cp ? cp : 0, this.send()
```

#### 569. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5453-L5454` → after: `L5636-L5637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5636-L5637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5636-L5637) · [Before (L5453-L5454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5453-L5454)

```diff
-         const ZC = "freeCamUp" === CC ? gC.ec.Up : gC.ec.Down;
-         this.keys = zC ? this.keys | ZC : this.keys & ~ZC, this.send()
+         const cp = "freeCamUp" === pp ? yp.Kb.Up : yp.Kb.Down;
+         this.keys = ip ? this.keys | cp : this.keys & ~cp, this.send()
```

#### 570. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5461` → after: `L5644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5644) · [Before (L5461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5461)

```diff
-         this.unsent = null !== CC && !(0, gC.Te)(CC, 0, this.analogue, this.keys)
+         this.unsent = null !== pp && !(0, yp.oe)(pp, 0, this.analogue, this.keys)
```

#### 571. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5464-L5468` → after: `L5647-L5653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5647-L5653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5647-L5653) · [Before (L5464-L5468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5464-L5468)

```diff
-     var jw = ZC(3514),
-       yw = ZC(694),
-       Lw = ZC(264),
-       Uw = ZC(77),
-       Bw = ZC(34082);
+     var so = cp(3657),
+       Ko = cp(732),
+       Vo = cp(272),
+       pI = cp(104),
+       iI = cp(34361),
+       cI = cp(716),
+       OI = cp(36783);
```

#### 572. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5471-L5472` → after: `L5656-L5657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5656-L5657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5656-L5657) · [Before (L5471-L5472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5471-L5472)

```diff
-       const CC = QC.b.get("clientEscMenuOptions"),
-         zC = (0, yw.o)(CC);
+       const pp = Op.c.get("clientEscMenuOptions"),
+         ip = (0, Ko.n)(pp);
```

#### 573. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5474` → after: `L5659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5659) · [Before (L5474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5474)

```diff
-         mouse: (0, Uw.isMobile)() ? zC : CC.mouseSensitivity,
+         mouse: (0, pI.isMobile)() ? ip : pp.mouseSensitivity,
```

#### 574. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5481-L5482` → after: `L5666-L5667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5666-L5667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5666-L5667) · [Before (L5481-L5482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5481-L5482)

```diff
-       const CC = QC.b.get("clientEscMenuOptions"),
-         zC = QC.b.get("isTouchScreen") ? (0, yw.o)(CC) : CC.mouseSensitivity,
+       const pp = Op.c.get("clientEscMenuOptions"),
+         ip = Op.c.get("isTouchScreen") ? (0, Ko.n)(pp) : pp.mouseSensitivity,
```

#### 575. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5484` → after: `L5669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5669) · [Before (L5484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5484)

```diff
-       return ZC > 0 ? zC / ZC : 1
+       return cp > 0 ? ip / cp : 1
```

#### 576. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5489` → after: `L5674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5674) · [Before (L5489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5489)

```diff
-         CC.setSoundPrefs(QC.b.get("soundVolume"), QC.b.get("soundOnFromAd"))
+         pp.setSoundPrefs(Op.c.get("soundVolume"), Op.c.get("soundOnFromAd"))
```

#### 577. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5498` → after: `L5683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5683) · [Before (L5498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5498)

```diff
-         } = QC.b.get("clientEscMenuOptions"), fC = {
+         } = Op.c.get("clientEscMenuOptions"), xp = {
```

#### 578. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5503` → after: `L5688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5688) · [Before (L5503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5503)

```diff
-           cellLight: (0, jw.f)("cellLight") ? (0, jw.f)("cellLightUnlit") ? "all" : "lit" : "off"
+           cellLight: (0, so.n)("cellLight") ? (0, so.n)("cellLightUnlit") ? "all" : "lit" : "off"
```

#### 579. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5505` → after: `L5690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5690) · [Before (L5505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5505)

```diff
-         ZC && (0, NC.be)(ZC) === (0, NC.be)(fC) && ZC.fogChunks === bC || (ZC = fC, CC.setEnvPrefs(ZC))
+         cp && (0, Pp.ce)(cp) === (0, Pp.ce)(xp) && cp.fogChunks === Ip || (cp = xp, pp.setEnvPrefs(cp))
```

#### 580. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5510` → after: `L5695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5695) · [Before (L5510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5510)

```diff
-           const CC = QC.b.get("clientEscMenuOptions");
+           const pp = Op.c.get("clientEscMenuOptions");
```

#### 581. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5512` → after: `L5697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5697) · [Before (L5512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5512)

```diff
-             nametagsHidden: QC.b.get("areNametagsHidden"),
+             nametagsHidden: Op.c.get("areNametagsHidden"),
```

#### 582. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5516` → after: `L5701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5701) · [Before (L5516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5516)

```diff
-             ezTowering: CC.ezTowering && (0, Lw.h)(),
+             ezTowering: pp.ezTowering ? (0, Vo.h)() : null,
```

#### 583. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5519` → after: `L5704-L5707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5704-L5707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5704-L5707) · [Before (L5519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5519)

```diff
-             nametagCutDistance: (0, Bw.d)()
+             touchWalk: !(0, OI.d)(),
+             edgeGuard: pp.touchEdgeGuard,
+             edgeGuardLong: (0, cI.c)(),
+             nametagCutDistance: (0, iI.h)()
```

#### 584. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5530` → after: `L5718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5718) · [Before (L5530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5530)

```diff
-       const FC = [(0, nC.q)("appManagerUpdated|soundVolume", zC), (0, nC.q)("appManagerUpdated|soundOnFromAd", zC), (0, nC.q)("appManagerUpdated|clientEscMenuOptions", (() => {
+       const Dp = [(0, Sp.n)("appManagerUpdated|soundVolume", ip), (0, Sp.n)("appManagerUpdated|soundOnFromAd", ip), (0, Sp.n)("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 585. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5532` → after: `L5720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5720) · [Before (L5532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5532)

```diff
-       })), (0, nC.q)("appManagerUpdated|enabledDebugFeatures", wC), (0, nC.q)("appManagerUpdated|areNametagsHidden", fC), (0, nC.q)("appManagerUpdated|showDistantNametags", fC)];
+       })), (0, Sp.n)(OI.c, xp), (0, Sp.n)("appManagerUpdated|enabledDebugFeatures", op), (0, Sp.n)("appManagerUpdated|areNametagsHidden", xp), (0, Sp.n)("appManagerUpdated|showDistantNametags", xp)];
```

#### 586. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5537-L5538` → after: `L5725-L5726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5725-L5726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5725-L5726) · [Before (L5537-L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5537-L5538)

```diff
-     var Cb = ZC(40736),
-       zb = ZC(40743);
+     var xI = cp(41096),
+       LI = cp(41104);
```

#### 587. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5579` → after: `L5767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5767) · [Before (L5579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5579)

```diff
-           0 !== fC ? (new Uint8Array(zC.buffer, fC, nC.length).set(nC), CC.hwC(ZC.headLen, QC, wC) && (bC = "sealing")) : bC = "tooLarge"
+           0 !== xp ? (new Uint8Array(ip.buffer, xp, Sp.length).set(Sp), pp.HIp(cp.headLen, Op, op) && (Ip = "sealing")) : Ip = "tooLarge"
```

#### 588. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5588` → after: `L5776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5776) · [Before (L5588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5588)

```diff
-             zC = CC.KwC(), zC > 0 && (ZC = CC.YwC())
+             ip = pp.dIp(), ip > 0 && (cp = pp.eIp())
```

#### 589. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5600` → after: `L5788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5788) · [Before (L5600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5600)

```diff
-           CC.dwC()
+           pp.uIp()
```

#### 590. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5609` → after: `L5797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5797) · [Before (L5609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5609)

```diff
-           CC.dwC()
+           pp.uIp()
```

#### 591. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5636` → after: `L5824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5824) · [Before (L5636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5636)

```diff
-         if (CC.busy() || !qb(CC.memoryBytes(), CC.clipSeconds())) return "lM";
+         if (pp.busy() || !wI(pp.memoryBytes(), pp.clipSeconds())) return "aW";
```

#### 592. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5644` → after: `L5832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5832) · [Before (L5644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5644)

```diff
-         if (!ZC) return CC.trapped() ? "trapped" : CC.Sg() ? "Sg" : "failed";
+         if (!cp) return pp.trapped() ? "trapped" : pp.Ry() ? "Ry" : "failed";
```

#### 593. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5651` → after: `L5839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5839) · [Before (L5651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5651)

```diff
-       Mb = new Set([NC.Tc.ToggleRecording, NC.Tc.SaveClip]);
+       dI = new Set([Pp.Uc.ToggleRecording, Pp.Uc.SaveClip]);
```

#### 594. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5656` → after: `L5844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5844) · [Before (L5656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5656)

```diff
-       Gb = (0, zb.c)("Sg"),
+       mI = (0, LI.c)("Ry"),
```

#### 595. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5821` → after: `L6009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6009) · [Before (L5821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5821)

```diff
-         }, (0, Cb.e)(this, jb)[jb](NC.Oc.Prefs, ob(CC, zC)), CC && (0, Cb.e)(this, Jb)[Jb] && (0, Cb.e)(this, Xb)[Xb]()
+         }, (0, xI.e)(this, VI)[VI](Pp.Pc.Prefs, UI(pp, ip)), pp && (0, xI.e)(this, CI)[CI] && (0, xI.e)(this, nI)[nI]()
```

#### 596. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5827-L5828` → after: `L6015-L6016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6015-L6016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6015-L6016) · [Before (L5827-L5828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5827-L5828)

```diff
-         if (Mb.has(CC)) return (0, Cb.e)(this, Sb)[Sb] ? void(0, Cb.e)(this, jb)[jb](NC.Oc.Control, zC) : ((0, Cb.e)(this, vb)[vb] = zC, void(0, Cb.e)(this, Xb)[Xb]());
-         (0, Cb.e)(this, Gb)[Gb] || this.deps.coreCommand(NC.Oc.Control, zC)
+         if (dI.has(pp)) return (0, xI.e)(this, uI)[uI] ? void(0, xI.e)(this, VI)[VI](Pp.Pc.Control, ip) : ((0, xI.e)(this, lI)[lI] = ip, void(0, xI.e)(this, nI)[nI]());
+         (0, xI.e)(this, mI)[mI] || this.deps.coreCommand(Pp.Pc.Control, ip)
```

#### 597. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5834` → after: `L6022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6022) · [Before (L5834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5834)

```diff
-         (0, Cb.e)(this, jb)[jb](NC.Oc.FilePartDone, function(CC, zC) {
+         (0, xI.e)(this, VI)[VI](Pp.Pc.FilePartDone, function(pp, ip) {
```

#### 598. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5841` → after: `L6029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6029) · [Before (L5841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5841)

```diff
-         return (0, Cb.e)(this, jb)[jb](NC.Oc.FileDone, function(CC) {
+         return (0, xI.e)(this, VI)[VI](Pp.Pc.FileDone, function(pp) {
```

#### 599. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5856` → after: `L6044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6044) · [Before (L5856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5856)

```diff
-         if (!zC || !ZC) return void(null === CC || void 0 === CC || CC.resolve((0, Cb.e)(this, Pb)[Pb] ? "trapped" : "lM"));
+         if (!ip || !cp) return void(null === pp || void 0 === pp || pp.resolve((0, xI.e)(this, kI)[kI] ? "trapped" : "aW"));
```

#### 600. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5859` → after: `L6047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6047) · [Before (L5859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5859)

```diff
-         } = this.deps, wC = QC.EwC(2);
+         } = this.deps, op = Op.mIp(2);
```

#### 601. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5865` → after: `L6053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6053) · [Before (L5865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5865)

```diff
-           qC = null !== (WC = CC[wC >>> 2]) && void 0 !== WC ? WC : 0, FC = null !== (NC = CC[1 + (wC >>> 2)]) && void 0 !== NC ? NC : 0
+           Yp = null !== (Ap = pp[op >>> 2]) && void 0 !== Ap ? Ap : 0, Dp = null !== (Pp = pp[1 + (op >>> 2)]) && void 0 !== Pp ? Pp : 0
```

#### 602. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5872` → after: `L6060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6060) · [Before (L5872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5872)

```diff
-           bC = zC.step(), nC = zC.lwC(), fC = zC.XwC(), oC = zC.cwC()
+           Ip = ip.step(), Sp = ip.RIp(), xp = ip.qIp(), Lp = ip.MIp()
```

#### 603. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5874` → after: `L6062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6062) · [Before (L5874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5874)

```diff
-           if (!(0, Cb.e)(this, zn)[zn](MC)) throw null === CC || void 0 === CC || CC.resolve("lM"), MC;
+           if (!(0, xI.e)(this, LS)[LS](Wp)) throw null === pp || void 0 === pp || pp.resolve("aW"), Wp;
```

#### 604. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5878` → after: `L6066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6066) · [Before (L5878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5878)

```diff
-           const CC = QC.uwC(2, bC);
+           const pp = Op.CIp(2, Ip);
```

#### 605. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5886` → after: `L6074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6074) · [Before (L5886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5886)

```diff
-             throw null === CC || void 0 === CC || CC.resolve("lM"), MC
+             throw null === pp || void 0 === pp || pp.resolve("aW"), Wp
```
